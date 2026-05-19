import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Doctorreg from './pages/Doctorreg'
import PatientReg from './pages/PatientReg';
import Login from './pages/Login'
import Patientdetails from './pages/Patientdetails'
import Doctordetails from './pages/Doctordetails'
import Patientdash from './pages/Patientdash';
import DoctorDash from './pages/DoctorDash'
import AdminDash from './pages/AdminDash'
import Aiguidancebot from './components/Aiguidancebot';
import AdminLogin from './components/AdminLogin';
import PatientLogin from './components/PatientLogin';
import { useState } from 'react'
function App() {
  const [refresh, setRefresh] = useState(false);
    const triggerRefresh = () => {
        setRefresh(prev => !prev);
    };

  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
      <Route path='/admin-login' element={<AdminLogin/>} />
      <Route path='/patient-login' element={<PatientLogin/>} />
      <Route path='/patientdash' element={<Patientdash/>}/>
      <Route path='/doctordash' element={<DoctorDash/>}/>
      <Route path='/drreg' element={<Doctorreg/>}/>
      <Route path='/appointment' element={<Aiguidancebot onNewAppointment={triggerRefresh}/>}/>
      <Route path='/patientreg' element ={<PatientReg/>}/>
  

      <Route path='/patient-details' element={<Patientdetails refreshTrigger={refresh} />}/>
      <Route path='/doctor-details' element ={<Doctordetails/>}/> 
      <Route path='/admindash' element={<AdminDash/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
 