const express = require('express')
const songshiCtrl = require('../controller/songshi')

const router = express.Router()

router.use('/', songshiCtrl.getSongshiList)

module.exports = router
