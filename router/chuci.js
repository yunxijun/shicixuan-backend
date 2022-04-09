const express = require('express')
const chuciCtrl = require('../controller/chuci')

const router = express.Router()

router.use('/', chuciCtrl.getChuciList)

module.exports = router
