const express = require('express')
const { getallpatientsign, patientsignbyid, patientsignpost, patientsignput, patientsigndelete } = require('../controller/patientsigncontroller')
const router = express.Router()

router.get('/patientsign',getallpatientsign)
router.get('/patientsign/:id',patientsignbyid)
router.post('/patientsign',patientsignpost)
router.put('/patientsign/:id',patientsignput)
router.delete('/patientsign/:id',patientsigndelete)
module.exports = router