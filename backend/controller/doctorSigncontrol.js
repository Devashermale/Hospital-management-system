
const Doctorsign = require('../model/doctorsign')


const Signdoctorall = async (req, res) => {
    
    try {
       const doctor = await Doctorsign.find({})
       res.status(200).json(doctor)
    } catch (error) {
        res.status(500).json({
           error: error.message
        })
    }
}

const doctorsignup = async (req ,res) => {
     const {email , password} = req.body
     try {
        const doctor = await Doctorsign.doctorsignup(email, password)
        res.status(201).json(doctor)
     } catch (error) {
        res.status(500).json({
            error:error.message
        })
     }
}
const doctorlogin = async (req,res) => {
    const {email,password} = req.body
    try {
        const doctor = await Doctorsign.doctorlogin(email,password)
        res.status(200).json(doctor)
    }catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}
   

   

module.exports = {
        Signdoctorall,
        doctorsignup,
        doctorlogin
    }