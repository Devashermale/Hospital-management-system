 const patientreg = require('../model/patientregmodel')


 const patientregall = async (req,res) => {
    try {
        const patientregistration = await patientreg.find({})
        res.status(200).json(patientregistration)
    } catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
 }

 const patientregbyid = async (req,res) => {
    const {id} = req.param
    try {
        const patientregistration = await patientreg.findById(id)
        res.status(200).json(patientregistration)   
    } catch (error) {
      res.status(404).json({       
         error:error.message
      })          
    }
 }
 const patientregcreate = async (req,res) => {
    const {name,email,age,diasease,date} = req.body     
    try {
        const patientregistration = await patientreg.create({
            name,email,age,diasease,date
        })
        res.status(200).json(patientregistration)   
    }
    catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
    }
    const patientregupdate = async (req,res) => {
    const {id} = req.param
    const {name,email,age,diasease,date} = req.body         
    try {
        const patientregistration = await patientreg.findByIdAndUpdate(id,{
                name,email,age,diasease,date


        })      
          res.status(200).json(patientregistration)   
    }   catch (error) {     
        res.status(404).json({
            error:error.message
        })
    }       
    }
 const patientregdelete = async (req,res) => {
    const {id} = req.param      
    try {
        const patientregistration = await patientreg.findByIdAndDelete(id)
        res.status(200).json(patientregistration)   
    }   

    catch (error) {
        res.status(404).json({
            error:error.message
        })
    }   
}
module.exports = {
    patientregall,
    patientregbyid, 
    patientregcreate,
    patientregupdate,
    patientregdelete
}   