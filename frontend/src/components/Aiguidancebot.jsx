// src/components/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const userId = "user123"; 

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput(''); // Clear input immediately for better UX

    try {
      const { data } = await axios.post('http://localhost:5000/api/bot/message', { 
        text: input, 
        userId 
      });
      setMessages(prev => [...prev, { text: data.message, sender: 'bot' }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Error connecting to server.", sender: 'bot' }, { text: error.message, sender: 'bot' }]);
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      zIndex: 1000,
      backgroundColor: 'white',
      border: '1px solid #ccc', 
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      padding: '20px', 
      width: '350px' 
    }}>
      <h1 className='font-bold text-2xl text-center mb-4'>Hospital Chatbot</h1>
      <hr className='mb-4' />
      
      <div style={{ height: '300px', overflowY: 'auto', marginBottom: '10px', paddingRight: '5px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '5px 0' }}>
            <p style={{ 
              background: msg.sender === 'user' ? '#007bff' : '#f1f1f1', 
              color: msg.sender === 'user' ? 'white' : 'black', 
              display: 'inline-block', 
              padding: '8px 12px', 
              borderRadius: '15px',
              maxWidth: '80%',
              wordWrap: 'break-word'
            }}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '5px' }}>
        <input 
          style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
        />
        <button 
          onClick={sendMessage}
          style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;