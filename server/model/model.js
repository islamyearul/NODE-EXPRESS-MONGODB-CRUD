const mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }


})


const Userdb = mongoose.model('node_crud', Schema);

module.exports = Userdb;
