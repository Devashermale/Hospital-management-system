import React from 'react'
import { Link } from 'react-router-dom'
import { HeartPulse, Calendar, ShieldCheck, UserCheck } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Top Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-6 w-6 text-emerald-600" />
            <span className="font-bold text-xl text-slate-900 tracking-wide">MedDash</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/Login" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition">
              Login
            </Link>
            <Link to="/patientreg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
              Register Now
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center lg:text-left lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 space-y-6">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-semibold text-sm px-4 py-1.5 rounded-full">
              Your Health, Simplified
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Manage your medical journey in <span className="text-emerald-600">one single place.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Skip the phone queues. Book appointments, complete your patient registration forms, and track your upcoming healthcare visits seamlessly online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/patientreg" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-center px-8 py-3.5 rounded-xl font-medium shadow-md transition">
                Create Account
              </Link>
              <Link to="/patientdash" className="w-full sm:w-auto bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-center px-8 py-3.5 rounded-xl font-medium shadow-sm transition">
                Explore Dashboard
              </Link>
            </div>
          </div>

          {/* Right Hero Image/Graphic Placeholder */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="w-full max-w-md bg-linear-to-tr from-emerald-600 to-teal-500 rounded-3xl shadow-xl aspect-square flex items-center justify-center p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
              <div className="relative z-10 text-center space-y-4">
                <Calendar className="h-16 w-16 mx-auto opacity-90" />
                <h3 className="text-2xl font-bold">Smart Scheduling</h3>
                <p className="text-emerald-50 max-w-xs text-sm">Access 24/7 real-time appointment booking with your primary care physicians.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-white border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">Designed for modern patient care</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <UserCheck className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Easy Digital Registration</h3>
                <p className="text-slate-600 text-sm">Fill out paperwork securely online before your visit to minimize wait room times.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <Calendar className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Booking</h3>
                <p className="text-slate-600 text-sm">Select dates, filter by practitioner, and lock in your appointment in seconds.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Secure Health Data</h3>
                <p className="text-slate-600 text-sm">Your personal information and history are strictly guarded with top-tier encryption.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home