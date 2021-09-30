const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 1024,
    },
    status: {
        type: String,
        required: true,
        max: 1024,
    },
    content: {
        type: String,
        required: true,
        max: 1024,
    },
    category: {
        type: String,
        required: true,
        max: 1024,
    },
    author: {
        type: String,
        required: true,
        max: 1024,
    },
    userId: {
        type: String,
        required: true,
        max: 1024,
    }
});

module.exports = mongoose.model('Card', cardSchema);