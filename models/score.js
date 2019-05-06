const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    playerName: {
        type: String,
        require: true
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    mines: {
        type: Number
    },
    seconds: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Score', scoreSchema);