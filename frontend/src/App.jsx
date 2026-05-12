import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Doctorreg from './pages/Doctorreg'
import PatientReg from './pages/PatientReg';
import Login from './pages/Login'
import Patientdetails from './pages/Patientdetails'
import Doctordetails from './pages/Doctordetails'
import Patientdash from './pages/Patientdash';
function App() {

  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/patientdash' element={<Patientdash/>}/>
      <Route path='/drreg' element={<Doctorreg/>}/>
      <Route path='/patientreg' element ={<PatientReg/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/patient-details' element={<Patientdetails/>}/>
      <Route path='doctor-details' element ={<Doctordetails/>}/> 
      <Route path='/' />
    </Routes>
    
    
    </>
  )
}

export default App
 