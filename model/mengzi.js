const mongoose = require('mongoose')
const baseModel = require('./base-model')

const MengziSchema = new mongoose.Schema({
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

module.exports = MengziSchema