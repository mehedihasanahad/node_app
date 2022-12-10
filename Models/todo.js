const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        firstName: String,
        bio: String
    },
    {
        versionKey: '_versonKey'
    }
);

module.exports = { todoSchema };
