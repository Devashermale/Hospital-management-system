const patientrecord = require('../model/patientrecord')

const getpatientrecord = async (req ,res) => {
    try {
        const patient = await patientrecord.find({})
        res.status(200).json(patient)        
    } catch (error) {
       res.status(500).json({
        error:error.message
       }) 
    }
}

const patientrecordbyid = async (req,res ) => {
    const {id} = req.params
    try {
        const patient = await patientrecord.findById(id)
        res.status(200).json(patient)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}
const patientrecordpost = async (req ,res) => {
    const {name ,email , notes , medicalhistory, gender} =req.body
    try{
        const patient = await patientrecord.create({name ,email , notes , medicalhistory, gender})
      res.status(201).json(patient)
    }catch(error){
       res.status(500).json({
            error:error.message
        })
    }
}
const patientrecordput = async (req,res) => {
    const {id} = req.params
    try {
        const patient = await patientrecord.findByIdAndUpdate(id)
         res.status(200).json(patient)
    } catch (error) {
         res.status(500).json({
            error:error.message
        })
    }
}
const patientrecorddelete = async (req ,res) => {
     const {id} = req.params
    try {
        res.status(200).findByIdAndDelete(id)
         res.status(200).json(patient)
    } catch (error) {
         res.status(500).json({
            error:error.message
        })
    }
}
module.exports = {
    getpatientrecord,
    patientrecordbyid,
    patientrecorddelete,
    patientrecordpost,
    patientrecordput
}