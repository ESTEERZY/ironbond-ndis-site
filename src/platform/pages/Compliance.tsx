import React from 'react';
import { complianceItems } from '../data/mockData';

export const Compliance: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
            <p className="text-xs font-bold text-emerald uppercase tracking-widest">Operational Health Dashboard</p>
          </div>
          <h1 className="text-2xl font-black text-navy dark:text-white">NDIS Quality & Compliance Centre</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Real-time audit preparedness · Worker screening expiry · Plan review watchlists
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-navy p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Screening Compliance</p>
          <p className="text-2xl font-black text-emerald mt-1">92.5%</p>
          <p className="text-[10px] text-slate-400 mt-1">2 workers requiring renewal</p>
        </div>
        <div className="bg-white dark:bg-navy p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Progress Note Audit Pass</p>
          <p className="text-2xl font-black text-teal mt-1">98.1%</p>
          <p className="text-[10px] text-slate-400 mt-1">1 note awaiting approval</p>
        </div>
        <div className="bg-white dark:bg-navy p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Signed Agreements</p>
          <p className="text-2xl font-black text-indigo-500 mt-1">94.0%</p>
          <p className="text-[10px] text-slate-400 mt-1">1 unsigned agreement</p>
        </div>
        <div className="bg-white dark:bg-navy p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">NDIS Commission Audit Status</p>
          <p className="text-2xl font-black text-emerald mt-1">Audit Ready</p>
          <p className="text-[10px] text-slate-400 mt-1">Last internal audit: 15 Jun 2025</p>
        </div>
      </div>

      <div className="bg-white dark:bg-navy rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-white/10">
          <h3 className="font-bold text-xs text-navy dark:text-white">Active Compliance Action Register ({complianceItems.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-400 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-6 font-bold">Category</th>
                <th className="py-3 px-4 font-bold">Action Item</th>
                <th className="py-3 px-4 font-bold">Priority</th>
                <th className="py-3 px-4 font-bold">Due Date</th>
                <th className="py-3 px-4 font-bold">Assigned Person</th>
                <th className="py-3 px-6 font-bold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {complianceItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-6 font-bold text-navy dark:text-white">{item.type}</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-white/70">{item.item}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      item.priority === 'critical' ? 'bg-rose-500/10 text-rose-500' : 'bg-amber-500/10 text-amber-600'
                    }`}>
                      {item.priority.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{item.dueDate}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-600 dark:text-white/70">{item.assignedTo}</td>
                  <td className="py-3.5 px-6 text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white">
                      {item.status}
                    </span>
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
