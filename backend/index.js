const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
 dotenv.config()

const mongoose = require('mongoose')
const doctorroute = require('./route/doctorroute')
const records = require('./route/patientrecordroute')
const patientsign = require('./route/patientsignroute')
const drreg = require('./route/drregroute')
const billing = require('./route/billingroute')
const bedroute = require('./route/bedroute')
const botroute = require('./route/bot') 

app.use(express.json())
app.use(cors()) // Enable CORS for all routes
//patient
app.use('/api/patientsign',patientsign) //patientsignroute is used for patientsign route   ok

//doctor
 app.use('/api/doctorsign',doctorroute) //presently doctorroute is used for doctorsign route ok 
app.use('/api/patientrecord',records)//patientrecordroute is used for patientrecord route  //pharma (lab reports or records) ok


//admin 
app.use('/api/doctorreg',drreg)// ok 

//bill
app.use('/api/billing',billing) //reception  ok 

//bed 
app.use('/api/bed',bedroute)// not tested 
app.use('/api/bot',botroute) // chatbot route

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