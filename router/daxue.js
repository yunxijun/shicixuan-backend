const express = require('express')
const daxueCtrl = require('../controller/daxue')

const router = express.Router()

router.use('/', daxueCtrl.getDaxueList)

module.exports = router
