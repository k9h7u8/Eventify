const mongoose = require('mongoose');
const validator = require('validator');

const eventRegisterSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAdmin'
    },
    event_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email',
        },
    },
    phone: {
        type: Number,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
        required: true,
        min: 10
    },
    year: {
        type: Number,
        enum: [1, 2, 3, 4],
        required: true,
    },
    branch: {
        type: String,
        enum: ['CSE', 'IT', 'CE', 'EE', 'ME', 'ECE', 'CA', 'BA', 'Mtech'],
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    isCertified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const eventRegister = mongoose.model('EventRegister', eventRegisterSchema);

module.exports = eventRegister; 
