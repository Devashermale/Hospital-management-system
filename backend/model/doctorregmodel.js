const mongoose = require('mongoose');

const doctorregSchema = mongoose.Schema({   
    userid:{
        type:Number,
        required:true,
        default:mongoose.Types.ObjectId
    },
    name:{
        type:String,    
        required:true
    },
    email:{
        type:String,
        required:true   
    },  
    password:{
        type:String,    
     required:true   
    },  
    specialization:{    
        type:String,
        required:true
    },  
})          

const doctorreg = mongoose.model('doctorreg', doctorregSchema)

module.exports = doctorreg  