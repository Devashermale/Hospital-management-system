const mongoose = require('mongoose')

const patientrespondSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
    type:String,
    required:true
    },
    medicalhistory:{
        type:String,
       required:true
    },
    notes:{
        type:String,
        required:true
    }
})
const patientrecord = mongoose.model('patientrecord', patientrespondSchema)
module.exports = patientrecord