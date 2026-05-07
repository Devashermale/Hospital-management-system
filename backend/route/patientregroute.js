const express = require('express');
const router = express.Router();
const {patientregall,patientregbyid,patientregcreate,patientregupdate,patientregdelete} = require('../controller/patientregcontrol')    

router.get('/patientreg',patientregall)     
router.get('/patientreg/:id',patientregbyid)
router.post('/patientreg',patientregcreate)
router.put('/patientreg/:id',patientregupdate)
router.delete('/patientreg/:id',patientregdelete)   
module.exports = router

    