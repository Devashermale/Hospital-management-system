const mongoose = require('mongoose')
const billingSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    bedno:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum: ['Available', 'Occupied', 'Cleaning', 'Maintenance'],
        default:'available'
    }
})
const billing = mongoose.model('billing',billingSchema)
module.exports = billing