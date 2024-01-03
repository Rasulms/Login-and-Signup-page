const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: String,
    mobileNumber: {
        type: String,
        required: true,
    },
    gender: String,
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    dateOfBirth: Date,
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    state: String,
    confirmPassword: {
        type: String,
    },


})

module.exports = mongoose.model('Project A', userSchema)

