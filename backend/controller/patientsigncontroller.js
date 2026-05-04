const patientsigndata = require('../model/patientsign')


const getallpatientsign = async (req ,res) => {
    try{
      const patientsign = await patientsigndata.find({})
      res.status(200).json(patientsign)
    }catch(error){
         res.status(404).json({
            error:error.message
         }
         )
    }
}
const patientsignbyid = async (req,res) => {
    const {id} =req.params
    try {
        const patientsign = await patientsigndata.findById(id)
        res.status(200).json(patientsign)
    } catch (error) {
         res.status(404).json({
            error:error.message
         }
         )
    }
}
const patientsignpost = async (req ,res) => {
    const {email, password} = req.body
    try {
        const patientsign = await patientsigndata.create({email, password})
        res.status(200).json(patientsign)
    } catch (error) {
          res.status(404).json({
            error:error.message
         }
         )
    }
}
const patientsignput = async (req,res) => {
    const {id} = req.params
    const {email, password} = req.body
    try {
        const patientsign = await patientsigndata.findByIdAndUpdate(id,{email, password},{new:true})
        res.status(200).json(patientsign)
    } catch (error) {
         res.status(404).json({
            error:error.message
         }) 
    }
}
const patientsigndelete = async (req,res) => {
    const {id} = req.params
    try {
    const patientsign = await patientsigndata.findByIdAndDelete(id)
    res.status(200).json(patientsign)    
    } catch (error) {
    res.status(404).json({
    error:error.message
    }) 
    }
}
module.exports = {
    getallpatientsign,
    patientsignbyid,
    patientsignpost,
    patientsignput,
    patientsigndelete

}