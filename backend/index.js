const express = require('express')
const dotenv = require('dotenv')
const app = express()
 dotenv.config()

const mongoose = require('mongoose')
const doctorroute = require('./route/doctorroute')
const records = require('./route/patientrecordroute')
const patientsign = require('./route/patientsignroute')
const patientreg = require('./route/patientregroute')

app.use(express.json())
app.use('/api/doctorsign',doctorroute)
app.use('/api/patientrecord',records)
app.use('/api/patientsign',patientsign)
app.use('/api/patientreg',patientreg)

port = process.env.PORT 
mongodb =process.env.MONGO_URL
mongoose.connect(mongodb)  
.then(() => {
    console.log('connected to database')
    app.listen(port,() => {
        console.log(`http://localhost:${port}`)
    })
}).catch(()=>{
    console.log('failed');
    
})