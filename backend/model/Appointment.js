// models/Appointment.js
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientName: String,
  phoneNumber: String,
  doctorName: String,
  date: String,
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);