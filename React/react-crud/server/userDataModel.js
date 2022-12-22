const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    dob: Date,
    gender: String
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users;