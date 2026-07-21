import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { referrals as initialReferrals } from '../data/mockData';

const stages = [
  { id: 'new', title: 'New Referral', color: 'border-blue-500' },
  { id: 'eligibility', title: 'Eligibility Review', color: 'border-violet-500' },
  { id: 'documents', title: 'Awaiting Documents', color: 'border-amber-500' },
  { id: 'assessment', title: 'Assessment', color: 'border-indigo-500' },
  { id: 'agreement', title: 'Service Agreement', color: 'border-teal' },
  { id: 'ready', title: 'Ready To Start', color: 'border-emerald' },
  { id: 'active', title: 'Active Participant', color: 'border-emerald' },
];

export const Referrals: React.FC = () => {
  const [referralsList, setReferralsList] = useState(initialReferrals);
  const [showNewModal, setShowNewModal] = useState(false);
  const [newReferralName, setNewReferralName] = useState('');
  const [newReferralDisability, setNewReferralDisability] = useState('');

  const moveReferral = (id: string, newStage: string) => {
    setReferralsList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, stage: newStage } : r))
    );
  };

  const handleAddReferral = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReferralName) return;
    const newRef = {
      id: `R00${referralsList.length + 1}`,
      name: newReferralName,
      disability: newReferralDisability || 'Intellectual Disability',
      referredBy: 'Support Coordinator',
      date: new Date().toISOString().split('T')[0],
      services: ['Core Supports'],
      stage: 'new',
      priority: 'high',
      suburb: 'Melbourne'
    };
    setReferralsList([newRef, ...referralsList]);
    setNewReferralName('');
    setNewReferralDisability('');
    setShowNewModal(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
            <p className="text-xs font-bold text-teal uppercase tracking-widest">Intake & Referral Pipeline</p>
          </div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Referral Kanban Board</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Track prospective participants from first contact to active service delivery
          </p>
        </div>

        <button
          onClick={() => setShowNewModal(true)}
          className="bg-teal hover:bg-teal/90 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm shadow-teal/20"
        >
          <Plus size={16} />
          <span>New Intake Referral</span>
        </button>
      </div>

      {/* Kanban Columns Overflow */}
      <div className="overflow-x-auto pb-6">
        <div className="flex gap-4 min-w-[1400px]">
          {stages.map((stage) => {
            const stageReferrals = referralsList.filter((r) => r.stage === stage.id);

            return (
              <div
                key={stage.id}
                className="w-72 bg-slate-100/70 dark:bg-navy-mid/60 p-4 rounded-3xl border border-slate-200/80 dark:border-white/10 flex flex-col flex-shrink-0"
              >
                {/* Column Header */}
                <div className={`flex items-center justify-between pb-3 mb-3 border-b-2 ${stage.color}`}>
                  <h3 className="font-bold text-xs text-navy dark:text-white">{stage.title}</h3>
                  <span className="w-5 h-5 rounded-full bg-white dark:bg-navy text-slate-600 dark:text-white/70 text-[10px] font-black flex items-center justify-center border border-slate-200 dark:border-white/10">
                    {stageReferrals.length}
                  </span>
                </div>

                {/* Referral Cards */}
                <div className="space-y-3 flex-1 overflow-y-auto max-h-[600px] pr-1">
                  {stageReferrals.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white dark:bg-navy p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all group space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-400 font-bold">{item.id}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                          item.priority === 'high' ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald/10 text-emerald'
                        }`}>
                          {item.priority.toUpperCase()}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-xs text-navy dark:text-white group-hover:text-teal transition-colors">{item.name}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-white/60">{item.disability}</p>
                      </div>

                      <div className="text-[10px] text-slate-400 space-y-0.5 pt-2 border-t border-slate-100 dark:border-white/10">
                        <div>Referred by: <span className="font-medium text-slate-600 dark:text-white/70">{item.referredBy}</span></div>
                        <div>Suburb: <span className="font-medium text-slate-600 dark:text-white/70">{item.suburb}</span></div>
                      </div>

                      {/* Quick Move Controls */}
                      <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-white/10">
                        <span className="text-[9px] text-slate-400">{item.date}</span>
                        <select
                          value={item.stage}
                          onChange={(e) => moveReferral(item.id, e.target.value)}
                          className="text-[10px] bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-lg px-2 py-1 text-navy dark:text-white font-semibold focus:outline-none"
                        >
                          {stages.map((s) => (
                            <option key={s.id} value={s.id}>
                              Move to: {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}

                  {stageReferrals.length === 0 && (
                    <div className="text-center py-8 text-[11px] text-slate-400 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl">
                      No referrals in stage
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* New Referral Modal */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-navy border border-slate-200 dark:border-white/10 rounded-3xl p-6 w-full max-w-md shadow-2xl space-y-4 animate-fade-in">
            <h3 className="text-lg font-black text-navy dark:text-white">Create Intake Referral</h3>
            <form onSubmit={handleAddReferral} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-white/70 mb-1">Participant Name *</label>
                <input
                  type="text"
                  required
                  placeholder="E.g. Samuel Henderson"
                  value={newReferralName}
                  onChange={(e) => setNewReferralName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs text-navy dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-white/70 mb-1">Primary Disability</label>
                <input
                  type="text"
                  placeholder="E.g. Autism Spectrum Disorder"
                  value={newReferralDisability}
                  onChange={(e) => setNewReferralDisability(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs text-navy dark:text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-navy dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-teal text-white text-xs font-bold hover:bg-teal/90"
                >
                  Add to Kanban Pipeline
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
