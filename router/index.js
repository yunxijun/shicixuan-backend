const express = require('express')
const router = express.Router()

// 获取曹操诗集列表

router.get('/caocaoshiji', require('./caocaoshiji'))

module.exports = router