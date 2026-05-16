import React, { useState } from 'react';
import axios from 'axios';

const Aiguidancebot = ({ onNewAppointment }) => {
    const [step, setStep] = useState(0);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! Welcome to MedCare Hospital. Would you like to book an appointment? (Type "yes" or "book")' }
    ]);
    const [formData, setFormData] = useState({
        name: '', disease: '', address: '', gender: '', department: ''
    });
    const [inputValue, setInputValue] = useState('');

    const steps = [
        { key: 'greet', prompt: 'Great! Let\'s get started. What is the Patient\'s full name?' },
        { key: 'name', prompt: 'What symptoms or disease are you visiting for?' },
        { key: 'disease', prompt: 'Please provide your current residential address.' },
        { key: 'address', prompt: 'What is your gender? (Male/Female/Other)' },
        { key: 'gender', prompt: 'Which department or doctor do you wish to visit? (e.g., Cardiology, General Medicine)' },
        { key: 'confirm', prompt: 'Thank you! Your information has been recorded.' }
    ];

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg = { sender: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = inputValue;
        setInputValue('');

        if (step === 0) {
            if (currentInput.toLowerCase().includes('yes') || currentInput.toLowerCase().includes('book')) {
                setMessages(prev => [...prev, { sender: 'bot', text: steps[0].prompt }]);
                setStep(1);
            } else {
                setMessages(prev => [...prev, { sender: 'bot', text: 'I didn\'t quite catch that. Type "yes" to book an appointment.' }]);
            }
            return;
        }

        const currentStepKey = steps[step - 1].key;
        const updatedFields = { ...formData, [currentStepKey]: currentInput };
        setFormData(updatedFields);

        if (step < 5) {
            setMessages(prev => [...prev, { sender: 'bot', text: steps[step].prompt }]);
            setStep(prev => prev + 1);
        } else if (step === 5) {
            try {
                const finalData = { ...updatedFields, department: currentInput };
                await axios.post('http://localhost:5000/api/bot/appointment', finalData);
                
                setMessages(prev => [...prev, { sender: 'bot', text: 'Appointment booked successfully! Your doctor has been notified.' }]);
                setStep(6);
                
                if (onNewAppointment) onNewAppointment();
            } catch (error) {
                setMessages(prev => [...prev, { sender: 'bot', text: 'Error saving appointment. Please try again.' }, { sender: 'bot', text: error.message }]);
            }
        }
    };

    return (
        /* --- Wrapper Container to Center the Bot --- */
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#f5f7fb', // Optional soft background color
            boxSizing: 'border-box'
        }}>
            {/* --- Chatbot Box --- */}
            <div style={{ 
                border: '1px solid #ccc', 
                padding: '20px', 
                borderRadius: '8px', 
                width: '350px',
                backgroundColor: '#ffffff', // Ensures the box stays white against backgrounds
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' // Optional drop shadow for UI pop
            }}>
                <h3>MedBot 🏥</h3>
                <div style={{ height: '300px', overflowY: 'scroll', borderBottom: '1px solid #eee', marginBottom: '10px' }}>
                    {messages.map((msg, index) => (
                        <div key={index} style={{ textAlign: msg.sender === 'bot' ? 'left' : 'right', margin: '5px' }}>
                            <span style={{ background: msg.sender === 'bot' ? '#f0f0f0' : '#007bff', color: msg.sender === 'bot' ? '#000' : '#fff', padding: '6px 10px', borderRadius: '10px', display: 'inline-block' }}>
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>
                {step <= 5 && (
                    <div style={{ display: 'flex' }}>
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} style={{ flex: 1, padding: '5px' }} placeholder="Type your response..." />
                        <button onClick={handleSend} style={{ marginLeft: '5px' }}>Send</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Aiguidancebot;