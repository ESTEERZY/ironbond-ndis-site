import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, Plus } from 'lucide-react';
import { supportWorkers } from '../data/mockData';

export const SupportWorkers: React.FC = () => {
  const expiringWorkers = supportWorkers.filter(
    (w) =>
      w.firstAid.status === 'expiring' ||
      w.firstAid.status === 'expired' ||
      w.cpr.status === 'expired' ||
      w.policeCheck.status === 'expired'
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
            <p className="text-xs font-bold text-emerald uppercase tracking-widest">Workforce & Safeguarding Management</p>
          </div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Support Worker Roster & Compliance</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Worker screening checks, qualifications, CPR/First Aid tracking & participant assignments
          </p>
        </div>

        <button className="bg-teal hover:bg-teal/90 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm shadow-teal/20">
          <Plus size={16} />
          <span>Onboard Support Worker</span>
        </button>
      </div>

      {/* Compliance Expiry Banner Alert */}
      {expiringWorkers.length > 0 && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle size={20} className="text-amber-500 flex-shrink-0" />
            <div className="text-xs">
              <span className="font-bold">Credential Warning: </span>
              {expiringWorkers.length} support workers have expiring or expired compliance credentials (First Aid / Police Check).
            </div>
          </div>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
            Requires Action
          </span>
        </div>
      )}

      {/* Worker Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportWorkers.map((worker) => (
          <div
            key={worker.id}
            className="bg-white dark:bg-navy rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden flex flex-col justify-between"
          >
            <div className="p-6 space-y-4">
              {/* Header Profile */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal/20 text-teal flex items-center justify-center font-bold text-base">
                    {worker.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy dark:text-white text-sm">{worker.name}</h3>
                    <p className="text-xs text-slate-400">{worker.role}</p>
                    <span className="text-[10px] font-semibold text-slate-500">{worker.employmentType} · {worker.suburb}</span>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                  worker.status === 'active' ? 'bg-emerald/10 text-emerald' : 'bg-rose-500/10 text-rose-500'
                }`}>
                  {worker.status.toUpperCase()}
                </span>
              </div>

              {/* Qualifications */}
              <div className="text-xs space-y-1">
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Qualifications</span>
                <div className="flex flex-wrap gap-1">
                  {worker.qualifications.map((q) => (
                    <span key={q} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/70 text-[10px] font-medium">
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mandatory NDIS Compliance Checks */}
              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-white/10 text-xs">
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Mandatory NDIS Checks</span>

                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500 dark:text-white/60">Worker Screening Check</span>
                  <span className="text-emerald font-bold flex items-center gap-1">
                    <CheckCircle2 size={12} /> Valid ({worker.workerScreening.expiryDate})
                  </span>
                </div>

                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500 dark:text-white/60">First Aid Check</span>
                  <span className={`font-bold flex items-center gap-1 ${
                    worker.firstAid.status === 'current' ? 'text-emerald' : worker.firstAid.status === 'expiring' ? 'text-amber-500' : 'text-rose-500'
                  }`}>
                    {worker.firstAid.status === 'current' ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
                    {worker.firstAid.expiryDate}
                  </span>
                </div>

                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-500 dark:text-white/60">Police Check</span>
                  <span className={`font-bold flex items-center gap-1 ${
                    worker.policeCheck.status === 'current' ? 'text-emerald' : 'text-rose-500'
                  }`}>
                    {worker.policeCheck.status === 'current' ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                    {worker.policeCheck.expiryDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions Footer */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-white/60 font-medium">
                {worker.hoursThisWeek} hrs scheduled this week
              </span>
              <button className="text-teal font-bold hover:underline">
                View Full Dossier →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
