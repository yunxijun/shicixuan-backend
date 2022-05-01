const express = require('express')
const huajianjiCtrl = require('../controller/huajianji')

const router = express.Router()

router.use('/', huajianjiCtrl.getHuajianjiList)

module.exports = router
