const express = require('express')
const shijingCtrl = require('../controller/shijing')

const router = express.Router()

router.use('/', shijingCtrl.getShijingList)

module.exports = router
