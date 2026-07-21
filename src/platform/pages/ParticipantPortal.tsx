import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart } from 'lucide-react';
import { participants, appointments } from '../data/mockData';

export const ParticipantPortal: React.FC = () => {
  const participant = participants[0]; // Sarah Chen
  const upcomingShifts = appointments.filter(a => a.participant === participant.name);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-mid text-slate-800 dark:text-white p-4 sm:p-8 animate-fade-in font-sans">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Portal Header */}
        <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal text-white flex items-center justify-center font-black text-lg shadow-md shadow-teal/20">
              {participant.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-teal uppercase tracking-widest">Participant Self-Service Portal</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald/10 text-emerald font-bold">
                  NDIS Reg #4050023456
                </span>
              </div>
              <h1 className="text-xl font-black text-navy dark:text-white">Welcome back, {participant.name}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/platform" className="text-xs font-bold text-slate-400 hover:text-teal">
              ← Switch to Staff Platform
            </Link>
          </div>
        </div>

        {/* Quick Actions & Contact Coordinator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Support Coordinator Card */}
          <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider">
              <Heart size={14} /> My Support Coordinator
            </div>
            <h3 className="font-bold text-navy dark:text-white text-base">{participant.coordinator}</h3>
            <p className="text-xs text-slate-500">Horizon Support Services Melbourne</p>
            <div className="pt-2 flex items-center gap-2">
              <a href="tel:1300467426" className="flex-1 text-center py-2 bg-teal text-white text-xs font-bold rounded-xl hover:bg-teal/90">
                Call Brooke
              </a>
              <Link to="/platform/messages" className="flex-1 text-center py-2 bg-slate-100 dark:bg-white/10 text-navy dark:text-white text-xs font-bold rounded-xl">
                Message
              </Link>
            </div>
          </div>

          {/* Funding Summary Widget */}
          <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-3 md:col-span-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-navy dark:text-white">My NDIS Budget Status</span>
              <span className="text-slate-400">Plan Ends: {participant.planEndDate}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Total Allocation</span>
                <p className="text-xl font-black text-navy dark:text-white">${participant.fundingTotal.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-emerald/10 rounded-2xl border border-emerald/20">
                <span className="text-[10px] text-emerald uppercase font-bold">Remaining Budget</span>
                <p className="text-xl font-black text-emerald">${participant.fundingRemaining.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Support Shifts */}
        <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
          <h3 className="font-bold text-navy dark:text-white text-base">My Upcoming Support Shifts</h3>
          <div className="space-y-3">
            {upcomingShifts.map((shift) => (
              <div key={shift.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal/20 text-teal flex items-center justify-center font-bold text-xs">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy dark:text-white text-xs">{shift.service}</h4>
                    <p className="text-[11px] text-slate-500">Support Worker: <span className="font-semibold">{shift.worker}</span> · {shift.suburb}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-navy dark:text-white">{shift.startTime} – {shift.endTime}</span>
                  <span className="text-[10px] text-emerald block font-bold">Confirmed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
