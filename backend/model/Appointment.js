const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    disease: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    department: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Patient', PatientSchema);