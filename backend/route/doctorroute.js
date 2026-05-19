const express = require('express')
const {Signdoctorall,doctorsignup,doctorlogin} = require('../controller/doctorSigncontrol')
const router = express.Router()

router.get('/doctorsign',Signdoctorall)
router.post('/doctorsign',doctorsignup)
router.post('/doctorsign/login',doctorlogin)
module.exports = router
