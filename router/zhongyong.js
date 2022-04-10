const express = require('express')
const zhongyongCtrl = require('../controller/zhongyong')

const router = express.Router()

router.use('/', zhongyongCtrl.getZhongyongList)

module.exports = router
