const mongoose = require('mongoose')

const PatientsignSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
    type:String,
    required:true
    }
},{
    timestamps:true
})

const patientsign = mongoose.model('Doctor', PatientsignSchema)
module.exports =patientsign
