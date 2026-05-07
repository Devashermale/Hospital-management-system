const express = require('express')
const {Signdoctorall,doctorsignid,doctorsignpost} = require('../controller/doctorSigncontrol')
const router = express.Router()

router.get('/doctorsign',Signdoctorall)
router.get('/doctorsign/:id',doctorsignid)
router.post('/doctorsign',doctorsignpost)
module.exports = router
