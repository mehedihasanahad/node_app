// Dependencies
const express = require('express'); // express
const mongoose = require('mongoose');
const webMiddlewares = require('../middleware/web');
const { todoSchema } = require('../Models/todo');

mongoose.set('strictQuery', true);
const Todo = mongoose.model('todo', todoSchema);
const router = express.Router();
webMiddlewares(router);

router.get('/', (req, res) => {
    res.end('You are now in your dashboard');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/todo', async (req, res) => {
    await mongoose.connect('mongodb://localhost:27017/test');
    const data = await Todo.find().sort({ _id: 'desc' });
    res.render('todo', { data: data });
});

module.exports = router;
