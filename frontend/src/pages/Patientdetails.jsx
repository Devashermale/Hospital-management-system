import React from 'react'

function Patientdetails() {
  return (
    <>
        <div className=' border-2 p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto mt-8'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Patient Details</h1>
      <table className='table-auto border-collapse  border-2 w-full'>
        <thead className=''>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody className=' table-auto border-collapse  border-2 w-full'>
          <tr>
            <td>John Doe</td>
            <td>30</td> 
            <td>Male</td>
            <td>
              <a href="mailto:john.doe@email.com">john.doe@email.com</a>
            </td>
            <td>123 Main St, City, State</td>
          </tr>
        </tbody>
      </table>
    </div>

</>
  )
}

export default Patientdetails