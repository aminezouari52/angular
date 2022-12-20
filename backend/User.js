const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please tell us your first name!'],
  },
  lastName: {
    type: String,
    required: [true, 'Please tell us your last name!'],
  },
  gender: {
    type: String,
    enum: {
      values: ['M', 'F'],
      message: 'Gender is either: Male or Female',
    },
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
  },
  phone: {
    type: Number,
    required: [true, 'Please provide a number'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
