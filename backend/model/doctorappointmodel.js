const mongoose = require('mongoose');

const doctorappointschema = new mongoose.Schema({

    userid:{
        type:Number,
        required:true,
        default:Math.floor(Math.random() * 1000000) + 1
    },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },    
    doctor: {
    type: String,
    required: true,
    
  },
  status: {
    type: String,
    default: 'pending',
    required: true
  },    
}, {
  timestamps: true, 
});

const doctorappointment = mongoose.model('doctorappointment', doctorappointschema);

module.exports = doctorappointment;
