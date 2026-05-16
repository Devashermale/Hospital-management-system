import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Patientdetails = () => {
    const [appointments, setAppointments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // ✅ FIXED: Changed from useState to useEffect for API fetching
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/bot/appointments');
                setAppointments(res.data);
            } catch (err) {
                console.error("Error fetching data", err);
            }
        };

        // Fetch immediately on mount
        fetchAppointments();

        // Optional: Poll backend every 10 seconds to auto-refresh live bot bookings
        const interval = setInterval(fetchAppointments, 10000);
        return () => clearInterval(interval);
    }, []);

    // Dynamic filtering based on search input
    const filteredAppointments = appointments.filter(patient =>
        patient.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 bg-slate-50 min-h-screen font-sans flex-1">
            <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                
                {/* Header Container */}
                <div className="p-6 border-b border-slate-200 bg-slate-50/50 sm:flex sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                            Patient Appointments <span>🩺</span>
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">Monitor real-time patient incoming registrations and triage data.</p>
                    </div>

                    {/* Search Field */}
                    <div className="relative mt-3 sm:mt-0 flex items-center gap-2">
                        <input 
                            type="text" 
                            placeholder="🔍 Search patient by name..." 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            className="w-72 px-4 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        />
                        {searchTerm && (
                            <button 
                                onClick={() => setSearchTerm('')} 
                                className="px-3 py-2 text-xs font-medium text-slate-500 bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Table Layout */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 text-sm font-semibold">
                                <th className="p-4">Patient Name</th>
                                <th className="p-4">Disease / Symptoms</th>
                                <th className="p-4">Address</th>
                                <th className="p-4">Gender</th>
                                <th className="p-4">Department</th>
                                <th className="p-4">Date Booked</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600 text-sm">
                            {filteredAppointments.length > 0 ? (
                                filteredAppointments.map((patient) => {
                                    // Highlight if matching active search queries
                                    const isSearchingThis = searchTerm && patient.name?.toLowerCase().includes(searchTerm.toLowerCase());
                                    
                                    return (
                                        <tr 
                                            key={patient._id} 
                                            className={`hover:bg-slate-50/80 transition-colors ${isSearchingThis ? 'bg-amber-50 font-medium' : ''}`}
                                        >
                                            <td className="p-4 text-slate-900 font-semibold">{patient.name}</td>
                                            <td className="p-4 max-w-xs truncate" title={patient.disease}>{patient.disease}</td>
                                            <td className="p-4">{patient.address}</td>
                                            <td className="p-4 capitalize">{patient.gender}</td>
                                            <td className="p-4">
                                                <span className="bg-indigo-50 text-indigo-700 text-xs px-2.5 py-1 rounded-md font-medium border border-indigo-100">
                                                    {patient.department}
                                                </span>
                                            </td>
                                            <td className="p-4 text-xs text-slate-400">
                                                {patient.createdAt ? new Date(patient.createdAt).toLocaleString() : 'N/A'}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-12 text-center text-slate-400">
                                        No active matching appointments found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Patientdetails;