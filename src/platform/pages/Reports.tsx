import React from 'react';
import { Download } from 'lucide-react';

const reportTemplates = [
  { id: 'REP-01', title: 'Participant Master Summary Report', type: 'Participant Reports', format: 'PDF / CSV', desc: 'Comprehensive details on all active participants, disability breakdown, and funding allocations.' },
  { id: 'REP-02', title: 'NDIS Funding Utilization & Burn Rate Report', type: 'Funding Reports', format: 'Excel / CSV', desc: 'Detailed financial breakdown of Core, Capacity Building, and Capital supports across all active plans.' },
  { id: 'REP-03', title: 'Worker Screening & Qualification Audit Report', type: 'Compliance Reports', format: 'PDF / Excel', desc: 'Auditable compliance dossier covering Police Checks, First Aid, CPR, and NDIS Worker Screening expiry dates.' },
  { id: 'REP-04', title: 'Shift Progress Notes & Goals Outcome Report', type: 'Progress Reports', format: 'PDF', desc: 'Synthesized report of progress notes, shift outcomes, and goal achievement metrics for NDIA plan reviews.' },
  { id: 'REP-05', title: 'NDIS Commission Incident & Hazard Report Log', type: 'Incident Reports', format: 'PDF / CSV', desc: 'Official incident register export suitable for NDIS Quality and Safeguards Commission audits.' },
];

export const Reports: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Reports & Audit Data Exporter</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Generate NDIS compliance, participant, funding & workforce reports in PDF, Excel or CSV
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTemplates.map((r) => (
          <div key={r.id} className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-teal uppercase tracking-widest">{r.type}</span>
                <span className="text-[10px] font-mono font-semibold text-slate-400">{r.format}</span>
              </div>
              <h3 className="font-bold text-navy dark:text-white text-base mb-2">{r.title}</h3>
              <p className="text-xs text-slate-500 dark:text-white/60 leading-relaxed">{r.desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">{r.id}</span>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/10 text-navy dark:text-white text-xs font-bold hover:bg-teal hover:text-white transition-all flex items-center gap-1">
                  <Download size={13} /> Export PDF
                </button>
                <button className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/10 text-navy dark:text-white text-xs font-bold hover:bg-emerald hover:text-white transition-all flex items-center gap-1">
                  <Download size={13} /> Export CSV
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
