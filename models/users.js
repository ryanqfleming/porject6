const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Scheme =mongoose.Scheme;

const userScheme = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userScheme);
module.export = User;