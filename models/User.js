const { Schema, model } = require('mongoose')

const schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: false },
    gender: {
        type: String,
        default: 'N/A',
        enum: [ 'Male', 'Female', 'Other', 'N/A' ]
    }
}, { timestamps: true })

const userModel = new model('User', schema, 'users')

module.exports = userModel;