const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const patientsignSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
})
patientsignSchema.statics.patientsignup = async function(email,password){
    if(!email || !password){
        throw new Error('email and password are required')
    }
    if(validator.isEmail(email)){
        throw new Error('invalid email')
    }
    const existingPatient = await this.findOne({email
    })
    if(existingPatient){
        throw new Error('email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const patientregistration = await this.create({email,password:hashedPassword})
    return patientregistration
}
    
patientsignSchema.statics.patientlogin = async function(email,password){
    if(!email || !password){
        throw new Error('email and password are required')
    }
        const patientreg = await this.findOne({email
        })
        if(!patientregistration){
            throw new Error('invalid email')

        }
        if(validator.isEmail(email)){
            throw new Error('invalid email')
        }

        const isMatch = await bcrypt.compare(password,patientregistration.password)
        if(!isMatch){
            throw new Error('invalid password')
        }

    const patientregistration = await this.findOne({email,password})
    return patientregistration
}

const patientsign = mongoose.model('patientsign', patientsignSchema)

module.exports = patientsign