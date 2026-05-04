 const bill = require('../model/billingmodel')
const billingall = async (req,res) => { 
        try {
        const bills = await bill.find({})
        res.status(200).json(bills)
        } catch (error) {
            res.status(404).json({
                error:error.message
            })
        }
}

const billingcreate = async (req,res) => {
    const {name,email,date,amount,status} = req.body    
    try {
        const bills = await bill.create({
            name,email,date,amount,status
        })
        res.status(200).json(bills)
    } catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}

const billingbyid = async (req,res) => {
    const {id} = req.param
    try {
        const bills = await bill.findById(id)
        res.status(200).json(bilsl)
    } catch (error) {
        res.status(404).json({
            error:error.message
        })
    }
}


const billingupdate = async (req,res) => {
    const {id} = req.param
    const {name,email,date,amount,status} = req.body
    try {
        const bills = await bill.findByIdAndUpdate(id,{
            name,email,date,amount,status
        })
        res.status(200).json(bills)
    } catch (error) {
            res.status(404).json({
            error:error.message
        })
    }
}


const billingdelete = async (req,res) => {
    const {id} = req.param
    try {
        const bills = await bill.findByIdAndDelete(id)
        res.status(200).json(bills)  
        } catch (error) {
        res.status(404).json({
            error:error.message 
            })
    }
}
module.exports ={
    billingall,
    billingcreate,
    billingbyid,
    billingupdate,
    billingdelete
}
