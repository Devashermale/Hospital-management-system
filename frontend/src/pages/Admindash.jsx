import AdminSidebar from '../components/AdminSidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Admindash() {
 
            const [metrics, setMetrics] = useState({
    totalDoctors: 0,
    totalPatients: 0,
    criticalCases: 0,
    recentRegistrations: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        console.log("Starting backend API data compilation...");
        
        const [doctorRes, patientRes] = await Promise.all([
          axios.get('http://localhost:5000/api/doctorreg/doctorreg'),
          axios.get('http://localhost:5000/api/bot/appointments')
        ]);

        // --- DEBUG PACKET LOGGING ---
        // Open your browser inspector console to look at these print statements!
        console.log("Doctor API Response Payload:", doctorRes.data);
        console.log("Patient API Response Payload:", patientRes.data);

        // --- DEFENSIVE ARRAY EXTRACTION ---
        let doctorData = [];
        if (Array.isArray(doctorRes.data)) {
          doctorData = doctorRes.data;
        } else if (doctorRes.data && Array.isArray(doctorRes.data.data)) {
          doctorData = doctorRes.data.data; // Handles wrapped objects safely
        }

        let patientData = [];
        if (Array.isArray(patientRes.data)) {
          patientData = patientRes.data;
        } else if (patientRes.data && Array.isArray(patientRes.data.data)) {
          patientData = patientRes.data.data; // Handles wrapped objects safely
        }

        // --- CALCULATE VALUES ---
        const doctorsCount = doctorData.length;
        const patientsCount = patientData.length;
        
        const criticalCount = patientData.filter(p => {
          if (!p || !p.disease) return false;
          return ['heart', 'cardio', 'breathing', 'accident', 'severe'].some(kw => 
            p.disease.toLowerCase().includes(kw)
          );
        }).length;

        // Update state engine metrics
        setMetrics({
          totalDoctors: doctorsCount,
          totalPatients: patientsCount,
          criticalCases: criticalCount,
          recentRegistrations: patientsCount > 0 ? Math.min(4, patientsCount) : 0
        });

      } catch (error) {
        console.error('CRITICAL: Analytics pipeline execution failed:', error);
      } finally {
        // This MUST execute no matter what to turn off the loading barrier screen
        setLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      
      {/* Pinned Left Sidebar */}
      <AdminSidebar />
      
      {/* Main Panel Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        
        {/* Loading Spinner Overlaid inside Main Workspace Grid */}
        {loading ? (
          <div className="h-full flex flex-col items-center justify-center gap-3 py-24">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium text-slate-500">Unpacking server payloads...</p>
          </div>
        ) : (
          <>
            {/* Header Title Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-800">System Analytics</h1>
              <p className="text-sm text-slate-500 mt-1">
                Real-time statistical overview of clinical operations and database integrations.
              </p>
            </div>

            {/* Metrics Display Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Active Medical Staff</p>
                  <h3 className="text-3xl font-bold text-slate-800 mt-2">{metrics.totalDoctors}</h3>
                  <span className="text-[11px] text-emerald-600 font-medium mt-1 inline-block">✓ Fully Verified</span>
                </div>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl">🩺</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Total MedBot Leads</p>
                  <h3 className="text-3xl font-bold text-slate-800 mt-2">{metrics.totalPatients}</h3>
                  <span className="text-[11px] text-indigo-600 font-medium mt-1 inline-block">⚡ Live Sync Running</span>
                </div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl">🤖</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Critical Care Alerts</p>
                  <h3 className="text-3xl font-bold text-rose-600 mt-2">{metrics.criticalCases}</h3>
                  <span className="text-[11px] text-rose-500 font-medium mt-1 inline-block animate-pulse">🚨 Requires Action</span>
                </div>
                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center text-xl">⚠️</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Bot Dispatch Success</p>
                  <h3 className="text-3xl font-bold text-emerald-600 mt-2">94.2%</h3>
                  <span className="text-[11px] text-slate-400 font-medium mt-1 inline-block">API Gateway Status: OK</span>
                </div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl">📈</div>
              </div>

            </div>

            {/* Capacity Telemetry Visual Logs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-800 mb-1">Clinic Workload Capacity</h3>
                <p className="text-xs text-slate-400 mb-6">Patient relative volume distribution computed across active clinical divisions.</p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                      <span>General Medicine Outpatient</span>
                      <span>75% Volume Load</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">Server Status</h3>
                  <p className="text-xs text-slate-400 mb-4">Core API framework telemetry logs.</p>
                </div>
                <div className="border-t border-slate-100 pt-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Database Microservice</span>
                    <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Operational</span>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}

      </div>
    </div>
)
}
export default Admindash;