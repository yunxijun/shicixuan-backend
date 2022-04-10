const express = require('express')
const lunyuCtrl = require('../controller/lunyu')

const router = express.Router()

router.use('/', lunyuCtrl.getLunyuList)

module.exports = router
