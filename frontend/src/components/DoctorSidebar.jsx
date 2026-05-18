import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function DoctorSidebar() {
  const location = useLocation();

  // Helper function to highlight the active link
  const linkStyle = (path) => `
    block px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm
    ${location.pathname === path 
      ? 'bg-blue-600 text-white shadow-md' 
      : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
  `;

  return (
    <div className='w-64 h-screen bg-gray-900 text-white p-5 flex flex-col justify-between border-r border-gray-800 sticky top-0'>
      <div>
        {/* Sidebar Brand/Header */}
        <div className='flex items-center gap-2 px-2 py-4 mb-6 border-b border-gray-800'>
          <span className='text-2xl'>🏥</span>
          <h2 className='text-lg font-bold tracking-wide'>MedAdmin Pro</h2>
        </div>
        
        {/* Navigation Links */}
        <nav className='flex flex-col gap-2'>
          <Link to="/doctordash" className={linkStyle('/doctordash')}>
            🏠 Dashboard Home
          </Link>
          <Link to="/patientreg" className={linkStyle('/patientreg')}>
            👤 Patient Registration
          </Link>
          <Link to="/appointment" className={linkStyle('/appointment')}>
            📅 Create/Show Appointments
          </Link>
          <Link to="/patient-details" className={linkStyle('/patient-details')}>
            📋 Patient Details
          </Link>
        </nav>
      </div>

      {/* Optional Admin Profile Footer section */}
      <div className='p-2 border-t border-gray-800 flex items-center gap-3'>
        <div className='w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm'>
          DR
        </div>
        <div>
          <p className='text-xs font-semibold text-gray-200'>Dr. Devidas</p>
          <p className='text-[10px] text-gray-400'>Medical Admin</p>
          <button className='mt-1 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm font-medium transition-colors duration-150'>
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}
      

export default DoctorSidebar;