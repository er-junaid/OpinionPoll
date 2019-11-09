const mongoose = require('mongoose');
const ms = require('ms');

const Schema = mongoose.Schema;

const UserIPSchema = new Schema({
    ip: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: {
            expires: ms('1y') / 1000   // ms('1y') converts 1 year into milliseconds 
        }
    }
});

module.exports = UserIP = mongoose.model('userips', UserIPSchema);