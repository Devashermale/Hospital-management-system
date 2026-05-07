
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
const doctorsignid = async (req ,res) => {
    const {id} = req.params
    try {
        const doctor = await Doctorsign.findById(id)
        res.status(200).json(doctor)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}
const doctorsignpost = async (req ,res) => {
     const {email , password} = req.body
     try {
        const doctor = await Doctorsign.create({email,password})
        res.status(201).json(doctor)
     } catch (error) {
        res.status(500).json({
            error:error.message
        })
     }
}
   

   

module.exports = {
        Signdoctorall,
        doctorsignid,   
        doctorsignpost,
    }