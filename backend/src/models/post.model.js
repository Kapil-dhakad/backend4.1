const mongoose = require('mongoose');

const postSchems = new mongoose.Schema({
    url : String,
    caption: String
})

const postModel = mongoose.model('post', postSchems)

module.exports = postModel