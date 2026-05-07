const bed = require('../model/bedmodel')

const bedall = async (req,res) => {
    try {
        const beds = await bed.find({})
        res.status(200).json(beds)
    } catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}
const bedbyid = async (req,res) => {
    const {id} = req.param
    try {
        const beds = await bed.findById(id)
        res.status(200).json(beds)
    }   
    catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}
const bedcreate = async (req,res) => {
    const {bedno,status} = req.body
    try {
        const beds = await bed.create({
            bedno,status
        })
        res.status(200).json(beds)
    }catch(error){
        res.status(404).json({
            error:error.message
        })
    }
}
const bedupdate = async (req,res) => {
    const {id} = req.param
    const {bedno,status} = req.body
    try {
        const beds = await bed.findByIdAndUpdate(id,{
            bedno,status
        })
        res.status(200).json(beds)
    }catch(error){
        res.status(404).json({
            error:error.message
        })
    }
}
const beddelete = async (req,res) => {
    const {id} = req.param
    try {
        const beds = await bed.findByIdAndDelete(id)
        res.status(200).json(beds)
    }
    catch (error) {
        res.status(404).json({
            error:error.message
        })
        }
}   
module.exports = {
    bedall,
    bedbyid,
    bedcreate,
    bedupdate,
    beddelete
}