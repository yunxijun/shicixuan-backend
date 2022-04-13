const express = require('express')
const songciCtrl = require('../controller/songci')

const router = express.Router()

router.use('/', songciCtrl.getSongciList)

module.exports = router
