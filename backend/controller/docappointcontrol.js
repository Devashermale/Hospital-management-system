const doctorappointment = require('../model/doctorappointmodel');

 const doctorappointall = async (req,res) => {  
    try {
        const doctorappointments = await doctorappointment.find({})
        res.status(200).json(doctorappointments)
    }   

    catch (error) {
        res.status(404).json({
            error:error.message
        })
    }       

    }       

    const doctorappointbyid = async (req,res) => {  
    const {id} = req.param      
    try {
        const doctorappointments = await doctorappointment.findById(id)
        res.status(200).json(doctorappointments)   
    }      
    catch (error) {
        res.status(404).json({
            error:error.message
        })
    }       
    }       
        
    const doctorappointcreate = async (req,res) => {    
    const {name,email,date,time,doctor} = req.body
    try {
        const doctorappointments = await doctorappointment.create({
            name,email,date,time,doctor
        })  
        res.status(200).json(doctorappointments)   
    }   catch (error) {

        res.status(404).json({
            error:error.message
        })
    }           

    }       

    const doctorappointupdate = async (req,res) => {
    const {id} = req.params
    const {name,email,date,time,doctor} = req.body
    try {
        const doctorappointments = await doctorappointment.findByIdAndUpdate(id,{
            name,email,date,time,doctor
        })
        res.status(200).json(doctorappointments)
    }   catch (error) { 
        res.status(404).json({
            error:error.message
        })
    }       
    }
    const doctorappointdelete = async (req,res) => {
    const {id} = req.params
    try {                   
        const doctorappointments = await doctorappointment.findByIdAndDelete(id)    

        res.status(200).json(doctorappointments)            

    }   catch (error) { 
        res.status(404).json({  
            error:error.message
        })
    }   
    }
module.exports = {  
    doctorappointall,
    doctorappointbyid,
    doctorappointcreate,
    doctorappointupdate,
    doctorappointdelete 
}