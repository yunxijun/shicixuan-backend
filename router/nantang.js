const express = require('express')
const nantangCtrl = require('../controller/nantang')

const router = express.Router()

router.use('/', nantangCtrl.getNantangList)

module.exports = router
