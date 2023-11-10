const mongoose = require('mongoose');
const validator = require('validator');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    is_admin: {
        type: Boolean,
        default: false
    }
});

const useradmin = mongoose.model('UserAdmin', adminSchema);

module.exports = useradmin; 
