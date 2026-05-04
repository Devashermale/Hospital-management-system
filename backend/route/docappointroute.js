const express = require("express");
const router = express.Router();
const doctorappointcontrol = require('../controller/docappointcontrol') 
router.get('/all',doctorappointcontrol.doctorappointall)
router.get('/:id',doctorappointcontrol.doctorappointbyid)
router.post('/create',doctorappointcontrol.doctorappointcreate)
router.put('/update/:id',doctorappointcontrol.doctorappointupdate)
router.delete('/delete/:id',doctorappointcontrol.doctorappointdelete)   
module.exports = router;
