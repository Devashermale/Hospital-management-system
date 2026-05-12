const express = require('express');
const {bot} = require('../controller/chatbot')
const router = express.Router();

router.post('/message', bot);
router.get('/message/', bot); // For fetching appointment details by ID (if needed)
module.exports = router;
