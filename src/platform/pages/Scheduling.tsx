import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, CheckCircle } from 'lucide-react';
import { appointments, supportWorkers } from '../data/mockData';

export const Scheduling: React.FC = () => {
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');

  const daysOfWeek = [
    { day: 'Mon', date: '21 Jul' },
    { day: 'Tue', date: '22 Jul' },
    { day: 'Wed', date: '23 Jul' },
    { day: 'Thu', date: '24 Jul' },
    { day: 'Fri', date: '25 Jul' },
    { day: 'Sat', date: '26 Jul' },
    { day: 'Sun', date: '27 Jul' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">Shift Management & Rostering</p>
          </div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Shift Scheduling & Roster</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Real-time shift management, conflict detection, and staff availability
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* View Picker */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
            {(['day', 'week', 'month'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                  viewMode === mode
                    ? 'bg-white dark:bg-navy text-teal shadow-sm'
                    : 'text-slate-500 dark:text-white/60 hover:text-navy dark:hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <button className="bg-teal hover:bg-teal/90 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm shadow-teal/20">
            <Plus size={16} />
            <span>Create Shift</span>
          </button>
        </div>
      </div>

      {/* Week Navigation Strip */}
      <div className="flex items-center justify-between bg-white dark:bg-navy p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-white">
            <ChevronLeft size={18} />
          </button>
          <span className="font-bold text-sm text-navy dark:text-white">Week of 21 July – 27 July 2025</span>
          <button className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-white">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-emerald">
            <CheckCircle size={14} /> Zero Roster Conflicts Detected
          </span>
          <span className="text-slate-400">Total Shift Hours: 110 hrs</span>
        </div>
      </div>

      {/* Roster Grid (Week View) */}
      <div className="bg-white dark:bg-navy rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
        <div className="grid grid-cols-8 divide-x divide-slate-200 dark:divide-white/10 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-center text-xs py-3 font-bold text-slate-500 dark:text-white/60">
          <div className="px-3 text-left uppercase tracking-wider text-[10px]">Support Worker</div>
          {daysOfWeek.map((d) => (
            <div key={d.day} className={d.date.includes('22') ? 'text-teal font-black' : ''}>
              <div>{d.day}</div>
              <div className="text-[10px] text-slate-400 font-normal">{d.date}</div>
            </div>
          ))}
        </div>

        {/* Worker Roster Rows */}
        <div className="divide-y divide-slate-100 dark:divide-white/5">
          {supportWorkers.map((worker) => (
            <div key={worker.id} className="grid grid-cols-8 divide-x divide-slate-100 dark:divide-white/5 min-h-[90px]">
              {/* Staff Cell */}
              <div className="p-3 bg-slate-50/50 dark:bg-white/5 flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal/20 text-teal flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {worker.avatar}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-navy dark:text-white truncate">{worker.name}</p>
                    <p className="text-[10px] text-slate-400 truncate">{worker.employmentType}</p>
                  </div>
                </div>
              </div>

              {/* Days Columns */}
              {daysOfWeek.map((d, index) => {
                const dayAppointments = appointments.filter(
                  (a) => a.worker === worker.name && index === 1 // Tue 22 Jul match for demo
                );

                return (
                  <div key={d.day} className="p-2 relative bg-white dark:bg-navy hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                    {index === 1 && dayAppointments.map((app) => (
                      <div
                        key={app.id}
                        className={`p-2 rounded-xl text-white text-[11px] font-bold shadow-sm ${app.color} space-y-1`}
                      >
                        <div className="flex items-center justify-between text-[9px] opacity-90">
                          <span>{app.startTime} - {app.endTime}</span>
                          <span>{app.suburb}</span>
                        </div>
                        <p className="truncate">{app.participant}</p>
                        <p className="text-[9px] font-normal opacity-80 truncate">{app.service}</p>
                      </div>
                    ))}

                    {index !== 1 && index < 5 && worker.availability.includes(d.day) && (
                      <div className="h-full flex items-center justify-center">
                        <span className="text-[10px] text-slate-300 dark:text-white/20 font-medium">Available</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
