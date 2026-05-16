import axios from 'axios';
import React, { useEffect } from 'react';

function Doctordetails() {
  const [doctors, setDoctors] = React.useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctorreg/doctorreg');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="p-6 bg-slate-50 min-h-screen font-sans">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm w-full max-w-6xl mx-auto overflow-hidden">
        
        {/* Table Header Section */}
        <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Doctor Management</h1>
            <p className="text-sm text-slate-500 mt-1">View, track, and manage registered medical staff and availability.</p>
          </div>
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200">
            Total Staff: {doctors.length}
          </span>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                <th className="p-4 text-sm font-semibold text-slate-700">Doctor Name</th>
                <th className="p-4 text-sm font-semibold text-slate-700">Specialization</th>
                <th className="p-4 text-sm font-semibold text-slate-700">Email Address</th>
                <th className="p-4 text-sm font-semibold text-slate-700">Security Access</th>
                <th className="p-4 text-sm font-semibold text-slate-700">Availability Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {doctors.length > 0 ? (
                doctors.map((doctor) => (
                  <tr key={doctor._id} className="hover:bg-slate-50/80 transition-colors duration-150">
                    {/* Name column with profile avatar placeholder */}
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs uppercase">
                        {doctor.name ? doctor.name.substring(0, 2) : 'DR'}
                      </div>
                      <span className="font-semibold text-slate-800">Dr. {doctor.name}</span>
                    </td>

                    {/* Specialization with custom badge formatting */}
                    <td className="p-4">
                      <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-md border border-indigo-100">
                        {doctor.specialization || 'General Medicine'}
                      </span>
                    </td>

                    {/* Dynamic Mailto anchor template literals fixing string interpolation */}
                    <td className="p-4">
                      <a 
                        href={`mailto:${doctor.email}`} 
                        className="text-sm text-blue-600 hover:underline font-medium"
                      >
                        {doctor.email}
                      </a>
                    </td>

                    {/* Password placeholder block hidden securely */}
                    <td className="p-4 text-sm text-slate-400 font-mono tracking-widest">
                      ••••••••
                    </td>

                    {/* Standard medical operations shifts */}
                    <td className="p-4 text-sm text-slate-600 font-medium">
                      <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2 py-1 rounded text-xs border border-emerald-100">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        Mon - Fri (Standard Shift)
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-slate-400 text-sm">
                    No verified doctor records found in the system registry.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Doctordetails;