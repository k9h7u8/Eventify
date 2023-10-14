const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    category: {
        type: String,
        enum: ['dance', 'cultural', 'music', 'technical', 'sports', 'fine arts', 'others'],
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    societyName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    noOfRegistration: {
        type: Number,
        default: 0,
    }
});

const event = mongoose.model('Event', eventSchema);

module.exports = event; 
