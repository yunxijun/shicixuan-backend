const express = require('express')
const tangshiCtrl = require('../controller/tangshi')

const router = express.Router()

router.use('/', tangshiCtrl.getTangshiList)

module.exports = router
