const express = require('express')
const {Signdoctorall,doctorsignid,doctorsignpost,doctorsignput,doctorsigndelete} = require('../controller/doctorSigncontrol')
const router = express.Router()

router.get('/doctorsign',Signdoctorall)
router.get('/doctorsign/:id',doctorsignid)
router.post('/doctorsign',doctorsignpost)
router.put('/doctorsign/:id',doctorsignput)
router.delete('/doctorsign/:id',doctorsigndelete)   
module.exports = router
