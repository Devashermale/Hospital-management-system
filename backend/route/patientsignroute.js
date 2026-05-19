const express = require('express')
const { getallpatientsign, patientsignup,patientlogin } = require('../controller/patientsigncontroller')
const router = express.Router()

router.get('/patientsign',getallpatientsign)
router.post('/patientsign',patientsignup)
router.post('/patientsign/login',patientlogin)
module.exports = router