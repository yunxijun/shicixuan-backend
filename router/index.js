const express = require('express')
const router = express.Router()

// 获取曹操诗集列表

router.get('/caocaoshiji', require('./caocaoshiji'))
router.get('/chuci', require('./chuci'))
router.get('/shijing', require('./shijing'))
router.get('/lunyu', require('./lunyu'))
router.get('/mengzi', require('./mengzi'))
router.get('/daxue', require('./daxue'))
router.get('/zhongyong', require('./zhongyong'))

module.exports = router
