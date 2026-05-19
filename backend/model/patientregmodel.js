const mongoose = require('mongoose')

const regpageSchema = mongoose.Schema({
    userid:{
        type:Number,
        required:true,
        default:Math.floor(Math.random() * 1000000) + 1
    },
    name:{
        type:String,
        required:true
    },
    email:{
         type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    diasease:{
        type:String,
        required:true
    },
    date:{
       type:Date,
       required:true
    }
})

const regpage = mongoose.model('reg',regpageSchema)

