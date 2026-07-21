import React from 'react';
import { Plus } from 'lucide-react';
import { incidents } from '../data/mockData';

export const Incidents: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <p className="text-xs font-bold text-rose-500 uppercase tracking-widest">NDIS Commission Notifiable Incidents</p>
          </div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Incident & Investigation Register</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Mandatory NDIS Quality & Safeguards Commission incident reporting & corrective actions
          </p>
        </div>

        <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm shadow-rose-600/20">
          <Plus size={16} />
          <span>Report New Incident</span>
        </button>
      </div>

      <div className="space-y-4">
        {incidents.map((inc) => (
          <div key={inc.id} className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-rose-500 text-sm">{inc.id}</span>
                  <span className="font-bold text-navy dark:text-white text-base">{inc.participant}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    inc.severity === 'critical' ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                  }`}>
                    {inc.severity.toUpperCase()} SEVERITY
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Type: {inc.type} · Reported by {inc.reportedBy} on {inc.date}</p>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                inc.status === 'open' ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 'bg-emerald/10 text-emerald border border-emerald/20'
              }`}>
                STATUS: {inc.status.toUpperCase()}
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/10">
              {inc.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
