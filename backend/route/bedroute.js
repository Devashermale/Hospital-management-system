const express = require('express')
const router = express.Router()
const bedroute = require('../controller/bedcontroller')
router.get('/bed',bedroute.bedall)
    router.get('/bed/:id',bedroute.bedbyid)
    router.post('/bed',bedroute.bedcreate)
    router.put('/bed/:id',bedroute.bedupdate)
    router.delete('/bed/:id',bedroute.beddelete)
module.exports = router