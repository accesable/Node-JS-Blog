const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name:String,
    author:String,
    description:String,
})

module.exports = mongoose.model('blogs',blogSchema)