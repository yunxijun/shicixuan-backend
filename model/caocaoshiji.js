const mongoose = require('mongoose')
const baseModel = require('./base-model')

const CaocaoShiJiSchema = new mongoose.Schema({
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
        default:"曹操"
    }
})

module.exports = CaocaoShiJiSchema
