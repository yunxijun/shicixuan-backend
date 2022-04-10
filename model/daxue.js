const mongoose = require('mongoose')
const baseModel = require('./base-model')

const DaxueSchema = new mongoose.Schema({
    ... baseModel,
    paragraphs: {
        type: [String],
        require: true
    },
    chapter: {
        type: String,
        require: true
    }
})

module.exports = DaxueSchema