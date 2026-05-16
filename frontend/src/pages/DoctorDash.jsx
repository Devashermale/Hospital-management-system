import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorSidebar from '../components/DoctorSidebar'; 

const DoctorDash = () => {
    const [appointments, setAppointments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [stats, setStats] = useState({ total: 0, critical: 0, pending: 0 });

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/patients/appointments');
                setAppointments(res.data);
                
                // Calculate metrics for admin panels
                const total = res.data.length;
                const critical = res.data.filter(p => 
                    ['heart', 'cardio', 'breathing', 'accident', 'severe'].some(kw => p.disease.toLowerCase().includes(kw))
                ).length;
                
                setStats({ total, critical, pending: total - critical });
            } catch (err) {
                console.error("Error fetching dashboard data", err);
            }
        };

        fetchAppointments();
        const interval = setInterval(fetchAppointments, 10000);
        return () => clearInterval(interval);
    }, []); 

    const filteredAppointments = appointments.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
            
            <DoctorSidebar />

            <div style={{ flex: 1, padding: '40px' }}>
                
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', justifyContent: 'space-between' }}>
                    <div>
                        <h1 style={{ margin: '0 0 5px 0', color: '#1e293b', fontSize: '28px' }}>Doctor Dashboard</h1>
                        <p style={{ margin: 0, color: '#64748b' }}>Monitor incoming bot appointments and patient triaging in real-time.</p>
                    </div>
                    
                    {/* Search Field */}
                    <div style={{ position: 'relative' }}>
                        <input 
                            type="text" 
                            placeholder="🔍 Search patient by name..." 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            style={{ 
                                padding: '12px 16px 12px 40px', 
                                width: '300px', 
                                borderRadius: '8px', 
                                border: '1px solid #cbd5e1', 
                                fontSize: '14px',
                                outline: 'none',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                            }}
                        />
                    </div>
                </div>

                {/* --- ANALYTICS/STATS CARDS --- */}
                <div style={{ display: 'flex', gap: '20px', marginBottom: '35px' }}>
                    <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
                        <div style={{ color: '#64748b', fontSize: '14px', fontWeight: '600' }}>Total Checked In</div>
                        <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b', marginTop: '5px' }}>{stats.total}</div>
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.06)', borderLeft: '4px solid #ef4444' }}>
                        <div style={{ color: '#64748b', fontSize: '14px', fontWeight: '600' }}>Urgent Attention Needed</div>
                        <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ef4444', marginTop: '5px' }}>{stats.critical}</div>
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
                        <div style={{ color: '#64748b', fontSize: '14px', fontWeight: '600' }}>Routine Checkups</div>
                        <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6', marginTop: '5px' }}>{stats.pending}</div>
                    </div>
                </div>

                {/* --- DATA TABLE CONTAINER --- */}
                <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
                                <th style={{ padding: '16px 20px', color: '#475569', fontWeight: '600', fontSize: '14px' }}>Patient Details</th>
                                <th style={{ padding: '16px 20px', color: '#475569', fontWeight: '600', fontSize: '14px' }}>Symptoms / Disease</th>
                                <th style={{ padding: '16px 20px', color: '#475569', fontWeight: '600', fontSize: '14px' }}>Department</th>
                                <th style={{ padding: '16px 20px', color: '#475569', fontWeight: '600', fontSize: '14px' }}>Address</th>
                                <th style={{ padding: '16px 20px', color: '#475569', fontWeight: '600', fontSize: '14px' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAppointments.length > 0 ? (
                                filteredAppointments.map((patient) => {
                                    const isCritical = ['heart', 'cardio', 'severe', 'breathing', 'accident'].some(kw => patient.disease.toLowerCase().includes(kw));
                                    
                                    return (
                                        <tr key={patient._id} style={{ 
                                            borderBottom: '1px solid #f1f5f9', 
                                            backgroundColor: searchTerm && patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ? '#fef08a' : 'transparent',
                                            transition: 'background-color 0.2s'
                                        }}>
                                            {/* Patient Meta */}
                                            <td style={{ padding: '16px 20px' }}>
                                                <div style={{ fontWeight: '600', color: '#1e293b' }}>{patient.name}</div>
                                                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{patient.gender}</div>
                                            </td>
                                            
                                            {/* Disease */}
                                            <td style={{ padding: '16px 20px', color: '#334155', fontSize: '15px' }}>
                                                {patient.disease}
                                            </td>
                                            
                                            {/* Department */}
                                            <td style={{ padding: '16px 20px', color: '#475569' }}>
                                                <span style={{ padding: '4px 8px', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '4px', fontSize: '13px', fontWeight: '500' }}>
                                                    {patient.department}
                                                </span>
                                            </td>
                                            
                                            {/* Address */}
                                            <td style={{ padding: '16px 20px', color: '#64748b', fontSize: '14px' }}>
                                                {patient.address}
                                            </td>
                                            
                                            {/* Dynamic Status Badge */}
                                            <td style={{ padding: '16px 20px' }}>
                                                <span style={{ 
                                                    padding: '6px 12px', 
                                                    borderRadius: '50px', 
                                                    fontSize: '12px', 
                                                    fontWeight: '600',
                                                    backgroundColor: isCritical ? '#fee2e2' : '#dcfce7',
                                                    color: isCritical ? '#991b1b' : '#166534'
                                                }}>
                                                    {isCritical ? '🚨 High Priority' : '✅ Scheduled'}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ padding: '30px', textAlign: 'center', color: '#94a3b8' }}>
                                        No active patient appointments found.
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

export default DoctorDash;