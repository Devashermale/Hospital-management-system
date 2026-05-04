const express = require('express')
const {billingall,billingcreate,billingbyid,billingupdate,billingdelete} = require('../controller/billingcontrol')

const router = express.Router()
router.get('/billing',billingall)
router.post('/billing',billingcreate)
router.get('/billing/:id',billingbyid)
router.put('/billing/:id',billingupdate)
router.delete('/billing/:id',billingdelete)

module.exports = router 