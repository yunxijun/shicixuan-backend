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
router.get('/tangshi', require('./tangshi'))
router.get('/songci', require('./songci'))

module.exports = router
