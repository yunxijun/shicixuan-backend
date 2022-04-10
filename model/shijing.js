const mongoose = require('mongoose')
const baseModel = require('./base-model')

const ShijingSchema = new mongoose.Schema({
    ... baseModel,
    title: {
        type: String,
        require: true
    },
    section: {
        type: String,
        require: true
    },
    content: {
        type: [String],
        require: true
    },
    chapter: {
        type: String,
        require: true
    }
})

module.exports = ShijingSchema