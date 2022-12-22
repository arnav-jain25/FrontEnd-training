const mongoose = require('mongoose');
const { stringify } = require('querystring');

const loginSchema = mongoose.Schema({
    userId: String,
    email: String,
    password: String
})

const Logins=mongoose.model('Logins', loginSchema);
module.exports=Logins;