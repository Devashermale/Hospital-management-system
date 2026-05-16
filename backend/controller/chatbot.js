const Patient = require('../model/Appointment');
exports.createAppointment = async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json({ 
            message: "Appointment created successfully!", 
            data: newPatient 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Get all appointments for the Doctor Dashboard
// @route   GET /api/patients/appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const patients = await Patient.find().sort({ createdAt: -1 });
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// @desc    Search patients by name dynamically
// @route   GET /api/patients/search
exports.searchPatientByName = async (req, res) => {
    const { name } = req.query;
    try {
        if (!name) {
            return res.status(400).json({ message: "Name query parameter is required" });
        }
        const patients = await Patient.find({ name: { $regex: name, $options: 'i' } });
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};