const mongoose = require('mongoose')
const bedschema = mongoose.Schema({
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
const bed = mongoose.model('bed',bedschema)
module.exports = bed