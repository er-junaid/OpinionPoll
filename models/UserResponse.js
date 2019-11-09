const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserResponseSchema = new Schema({
    questionNumber: {
        type: Number,
        require: true,
        unique: true
    },
    option1: {
        type: Number,
        require: true
    },
    option2: {
        type: Number,
        require: true
    },
    option3: {
        type: Number,
        require: true
    },
    option4: {
        type: Number,
        require: true
    }
});

module.exports = UserResponse = mongoose.model('userresponses', UserResponseSchema);