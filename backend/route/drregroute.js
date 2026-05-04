const express = require('express')

const router = express.Router()
const {doctorregcreate,doctorregall,doctorregbyid,doctorregupdate,doctorregdelete} = require('../controller/drregcontrol')  

router.get('/doctorreg',doctorregall)   
router.get('/doctorreg/:id',doctorregbyid)
router.post('/doctorreg',doctorregcreate)
router.put('/doctorreg/:id',doctorregupdate)
router.delete('/doctorreg/:id',doctorregdelete)
module.exports = router