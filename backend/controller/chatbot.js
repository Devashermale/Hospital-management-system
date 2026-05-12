const Appointment = require('../model/Appointment');

let sessions = {}; 

exports.bot = async (req, res) => {
    const { text, userId } = req.body;
    const input = text.toLowerCase().trim();

    if (!sessions[userId]) sessions[userId] = { step: 'start' };
    const session = sessions[userId];

    // 1. Any Greeting Response
    const greetings = ['hi', 'hello', 'hey', 'good morning','good evening', 'good evening', 'hola', 'namaste', 'bonjour', 'ciao', 'greetings', 'salutations', 'howdy', 'welcome'];
    if (greetings.some(g => input.includes(g)) && session.step === 'start') {
        session.step = 'ask_name';
        return res.json({ message: "Hello! I'm your Hospital Bot. Let's get you scheduled. What is your Full Name?" });
    }

    // 2. Booking Flow - Name
    if (session.step === 'ask_name') {
        session.patientName = text;
        session.step = 'ask_date';
        return res.json({ message: `Thanks, ${text}. What date works for you? (e.g., 2024-12-10)` });
    }

    // 3. Booking Flow - Date & Create
    if (session.step === 'ask_date') {
        const newAppt = await Appointment.create({
            patientName: session.patientName,
            date: text
        });

        // Reset session
        delete sessions[userId];

        return res.json({ 
            message: `Success! Your appointment is booked.`,
            appointmentId: newAppt._id // Send ID back so frontend can link to it
        });
    }

    res.json({ message: "I didn't quite get that. Say 'Hi' to start booking." });
};