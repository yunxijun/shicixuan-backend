const mongoose = require('mongoose')
const baseModel = require('./base-model')

const ChuciSchema = new mongoose.Schema({
    ... baseModel,
    title: {
        type: String,
        require: true
    },
    paragraphs: {
        type: [String],
        require: true
    },
    author: {
        type: String,
        require: true
    }
})

module.exports = ChuciSchema