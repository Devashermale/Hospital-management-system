const mongoose = require('mongoose')

const regpageSchema = mongoose.Schema({
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

module.exports = regpage
