// Dependencies
const express = require('express'); // express
const mongoose = require('mongoose');
const apiMiddlewares = require('../middleware/api');
const authHandler = require('../api/auth');
const { todoSchema } = require('../Models/todo');

const Todo = mongoose.model('todo', todoSchema);
const router = express.Router();
apiMiddlewares(router);

router.post('/auth', (req, res) => {
    authHandler(req, res);
});

// store todo
router.post('/store', async (req, res) => {
    await mongoose.connect('mongodb://localhost:27017/test');
    const data = new Todo(req.body);
    data.save();
    res.redirect('/todo');
});

// delete toto item
router.post('/:id', async (req, res) => {
    await mongoose.connect('mongodb://localhost:27017/test');
    const data = await Todo.findOne({ _id: req.params.id });
    await Todo.deleteOne({ _id: data._id });
    res.redirect('/todo');
});

// update todo item
router.post('/update/:id', async (req, res) => {
    await mongoose.connect('mongodb://localhost:27017/test');
    const data = await Todo.findOne({ _id: req.params.id });
    await Todo.updateOne({ _id: data._id }, { ...req.body });
    res.redirect('/todo');
});

module.exports = router;
