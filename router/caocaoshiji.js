const express = require('express')
const caocaoshijiCtrl = require('../controller/caocaoshiji')

const router = express.Router()

router.use('/', caocaoshijiCtrl.getCaocaoshijiList)

module.exports = router
