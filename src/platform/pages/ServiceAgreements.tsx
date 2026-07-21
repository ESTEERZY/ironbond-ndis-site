import React from 'react';
import { Plus } from 'lucide-react';

const mockAgreements = [
  { id: 'SA-2025-01', participant: 'Sarah Chen', type: 'Core Supports & Support Coordination', status: 'signed', sentDate: '2025-01-10', signedDate: '2025-01-14', totalValue: 48750 },
  { id: 'SA-2025-02', participant: 'Michael Torres', type: 'Personal Care & SIL Support', status: 'signed', sentDate: '2024-07-28', signedDate: '2024-08-01', totalValue: 125000 },
  { id: 'SA-2025-03', participant: 'James Okafor', type: 'Employment Support & Skill Dev', status: 'sent', sentDate: '2025-07-08', signedDate: null, totalValue: 58400 },
  { id: 'SA-2025-04', participant: 'Linda Murphy', type: 'Domestic & OT Therapy Support', status: 'draft', sentDate: null, signedDate: null, totalValue: 95000 },
];

export const ServiceAgreements: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-navy dark:text-white">NDIS Service Agreements</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Digital Service Contracts · E-Signatures · Price Guide Compliance
          </p>
        </div>

        <button className="bg-teal hover:bg-teal/90 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm shadow-teal/20">
          <Plus size={16} />
          <span>Draft Service Agreement</span>
        </button>
      </div>

      <div className="bg-white dark:bg-navy rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-400 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-6 font-bold">Agreement ID</th>
                <th className="py-3 px-4 font-bold">Participant</th>
                <th className="py-3 px-4 font-bold">Service Type</th>
                <th className="py-3 px-4 font-bold">Contract Value</th>
                <th className="py-3 px-4 font-bold">Status</th>
                <th className="py-3 px-6 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {mockAgreements.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-teal">{a.id}</td>
                  <td className="py-4 px-4 font-bold text-navy dark:text-white">{a.participant}</td>
                  <td className="py-4 px-4 text-slate-500 dark:text-white/60">{a.type}</td>
                  <td className="py-4 px-4 font-bold text-navy dark:text-white">${a.totalValue.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      a.status === 'signed' ? 'bg-emerald/10 text-emerald border border-emerald/20' : a.status === 'sent' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-slate-500/10 text-slate-500 border border-slate-500/20'
                    }`}>
                      {a.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-xs font-bold text-teal hover:underline">
                      View Contract →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
