import axios from 'axios'
import React, { useEffect } from 'react'
function Doctordetails() {
  const [doctors, setDoctors] = React.useState([])


  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <div className=' border-2 p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto mt-8'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Doctor Details</h1>
     {doctors.map((doctor) => (
       
      <table key={doctor._id} className='table-auto border-collapse  border-2 w-full'>
        <thead className=''>
          <tr>
            <th>Name </th>
            <th>Specialization </th>
            <th>email</th>
            <th>password</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody className=' table-auto border-collapse  border-2 w-full'>
          <tr>
            <td>Dr. John Doe{doctor.name}</td>
            <td>Cardiology{doctor.specialization}</td>
            <td>
              <a href="mailto:{doctor.email}">john.doe@hospital.com{doctor.email}</a>
            </td>
            <td>••••••••{doctor.password}</td>
            <td>Monday - Friday, 9:00 AM - 5:00 PM</td>
          </tr>
        </tbody>
      </table>
     ))}
      </div>
    </div>
  )
}

export default Doctordetails