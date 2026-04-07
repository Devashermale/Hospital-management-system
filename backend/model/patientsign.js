const mongoose = require('mongoose')

const patientsignSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const patientsign = mongoose.model('patientsign', patientsignSchema)

module.exports = patientsign