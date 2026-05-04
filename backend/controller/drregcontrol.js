const doctorreg = require('../model/doctorregmodel')

const doctorregcreate = async(req,res)=>{
    const {name,email,password,specialization} = req.body   
    try {
        const doctorregistration = await doctorreg.create({
            name,email,password,specialization
        })
        res.status(200).json(doctorregistration)
    }

    catch (error) { 
        res.status(404).json({
            error:error.message
        })
    }
}
const doctorregall = async(req,res)=>{      
    try {
        const doctorregistration = await doctorreg.find({})
        res.status(200).json(doctorregistration)
    }   
    catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}
const doctorregbyid = async(req,res)=>{
    const {id} = req.params
    try {
        const doctorregistration = await doctorreg.findById(id)
        res.status(200).json(doctorregistration)
    }   
    catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}
const doctorregupdate = async(req,res)=>{
    const {id} = req.param      
    const {name,email,password,specialization} = req.body   
    try {   
        const doctorregistration = await doctorreg.findByIdAndUpdate(id,{   
            name,email,password,specialization
        })
        res.status(200).json(doctorregistration)
    }       
    catch (error) { 
        res.status(404).json({  
            error:error.message
        })      
    }   

}
const doctorregdelete = async(req,res)=>{
    const {id} = req.param
    try {
        const doctorregistration = await doctorreg.findByIdAndDelete(id)    
        res.status(200).json(doctorregistration)
    }           
    catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}

module.exports = {
    doctorregcreate,
    doctorregall,
    doctorregbyid,
    doctorregupdate,
    doctorregdelete
}   


