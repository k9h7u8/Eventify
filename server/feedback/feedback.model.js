const mongoose = require('mongoose');
const validator = require('validator');

const feedbackSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        default: 1
    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email',
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = feedback; 
