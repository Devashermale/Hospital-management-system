import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// Optional: If you use lucide-react for icons. If not, you can remove them.
import { Home, UserPlus, Calendar, LogOut, HeartPulse } from 'lucide-react'

function Sidebar() {
  const location = useLocation();

  // Helper function to handle active link styling
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen w-64 bg-slate-900 text-slate-300 border-r border-slate-800 p-4 justify-between">
      {/* Top Section: Brand/Logo */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2 py-3 border-b border-slate-800">
          <HeartPulse className="h-6 w-6 text-emerald-500" />
          <span className="font-bold text-lg text-white tracking-wide">MedDash</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          <Link 
            to="/patientdash" 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
              isActive('/patientdash') 
                ? 'bg-emerald-600 text-white' 
                : 'hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>

          <Link 
            to="/patientreg"  
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
              isActive('/patientreg') 
                ? 'bg-emerald-600 text-white' 
                : 'hover:bg-slate-800 hover:text-white'
            }`}
          >
            <UserPlus className="h-5 w-5" />
            <span>Registration</span>
          </Link>

          <Link 
            to="/appointment" 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
              isActive('/appointment') 
                ? 'bg-emerald-600 text-white' 
                : 'hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Calendar className="h-5 w-5" />
            <span>Appointments</span>
          </Link>
        </nav>
      </div>

      {/* Bottom Section: Logout */}
      <div className="border-t border-slate-800 pt-4">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-rose-400 hover:bg-rose-950/30 hover:text-rose-300 transition-all duration-200 font-medium text-left">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar