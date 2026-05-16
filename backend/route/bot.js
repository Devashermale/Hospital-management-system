const express = require('express');
const router = express.Router();

// Import the controllers
const { 
    createAppointment, 
    getAllAppointments, 
    searchPatientByName 
} = require('../controller/chatbot');

// Define Routes and link them to Controller functions
router.post('/appointment', createAppointment);
router.get('/appointments', getAllAppointments);
router.get('/search', searchPatientByName);

module.exports = router;