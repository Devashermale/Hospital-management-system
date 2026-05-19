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

const patientsignup = async (req ,res) => {
    const {email, password} = req.body
    try {
        const patientsign = await patientsigndata.patientsignup(email, password)
        res.status(200).json(patientsign)
    } catch (error) {
          res.status(404).json({
            error:error.message
         }
         )
    }
}

const patientlogin = async (req,res) => {
    const {email,password} = req.body
    try {
        const patientsign = await patientsigndata.patientlogin(email,password)
        res.status(200).json(patientsign)
    }catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}
module.exports = {
    getallpatientsign,
    patientsignup,
    patientlogin

}