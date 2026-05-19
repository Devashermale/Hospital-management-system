const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const DoctorsignSchema = mongoose.Schema({
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
    },

},{
    timestamps:true
})
DoctorsignSchema.statics.doctorsignup = async function(email,password){
    if(!email || !password){
        throw new Error('email and password are required')
    }
    if(validator.isEmail(email)){
        throw new Error('invalid email')
    }
    const existingDoctor = await this.findOne({email
    })
    if(existingDoctor){
        throw new Error('email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const doctorregistration = await this.create({email,password:hashedPassword})
    return doctorregistration
}
    
DoctorsignSchema.statics.doctorlogin = async function(email,password){
    if(!email || !password){
        throw new Error('email and password are required')
    }
        const doctordata = await this.findOne({email
        })
        if(!doctordata){
            throw new Error('invalid email')
        }
        if(validator.isEmail(email)){
            throw new Error('invalid email')
        }
        const isMatch = await bcrypt.compare(password,doctordata.password)
        if(!isMatch){
            throw new Error('invalid password')
        }
    const doctordatadata = await this.findOne({email,password})
    return doctordata
}


const doctorsign = mongoose.model('Doctor', DoctorsignSchema)
module.exports = doctorsign