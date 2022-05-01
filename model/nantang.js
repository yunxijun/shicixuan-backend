const mongoose = require('mongoose')
const baseModel = require('./base-model')

const NantangSchema = new mongoose.Schema({
    ... baseModel,
    rhythmic: {
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
    },
    title: {
        type: String,  
        require: true
    }
})

module.exports = NantangSchema