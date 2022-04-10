const express = require('express')
const mengziCtrl = require('../controller/mengzi')

const router = express.Router()

router.use('/', mengziCtrl.getMengziList)

module.exports = router
