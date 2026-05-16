import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function AdminSidebar() {
  const location = useLocation();

  // Updated to check if path matches exactly OR if it's the root dashboard path for analytics
  const isActive = (path) => {
    if (path === '/admindash') {
      return location.pathname === '/admindash' ;
    }
    return location.pathname === path;
  };

  const navItems = [
    // Points to the main admin dashboard view
    { path: '/admindash', label: 'Analytics', icon: '📊' }, 
    { path: '/drreg', label: 'Doctor Registration', icon: '➕' },
    { path: '/doctor-details', label: 'Doctor Details', icon: '🩺' },
    { path: '/patient-details', label: 'Patient Details', icon: '📋' },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-slate-300 flex flex-col justify-between p-4 sticky top-0 font-sans shrink-0 border-r border-slate-800">
      
      {/* Upper Panel */}
      <div className="flex flex-col gap-8">
        
        {/* Brand/System Title */}
        <div className="flex items-center gap-3 px-2 py-3 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
            HQ
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide uppercase">Admin Console</h2>
            <p className="text-[10px] text-slate-500 font-medium">Control Management</p>
          </div>
        </div>

        {/* Navigation Link Stack */}
        <nav className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                  active
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                    : 'hover:bg-slate-800/60 hover:text-slate-100'
                }`}
              >
                <span className={`text-base ${active ? 'opacity-100' : 'opacity-70'}`}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Meta Profile block */}
      <div className="p-2 border-t border-slate-800 flex items-center gap-3 mt-auto">
        <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-sm font-bold text-slate-300 border border-slate-700">
          AD
        </div>
        <div className="truncate">
          <p className="text-xs font-semibold text-slate-200 truncate">System Administrator</p>
          <span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
            <span className="w-1 h-1 bg-emerald-500 rounded-full inline-block animate-pulse"></span>
            Secure Session
          </span>
        </div>
      </div>

    </div>
  );
}

export default AdminSidebar;