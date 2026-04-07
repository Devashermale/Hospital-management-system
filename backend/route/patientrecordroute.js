const express = require('express')
const { getpatientrecord, patientrecordbyid, patientrecordpost, patientrecordput, patientrecorddelete } = require('../controller/patientrecordcontrol')

const router = express.Router()

router.get('/patient',getpatientrecord)
router.get('/patient/:id',patientrecordbyid)
router.post('/patient',patientrecordpost)
router.put('/patient/:id',patientrecordput)
router.delete('/patient/:id',patientrecorddelete)

module.exports = router