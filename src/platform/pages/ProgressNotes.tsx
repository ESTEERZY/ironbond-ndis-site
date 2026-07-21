import React, { useState } from 'react';
import { Plus, AlertCircle } from 'lucide-react';
import { progressNotes as initialNotes } from '../data/mockData';

export const ProgressNotes: React.FC = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [showModal, setShowModal] = useState(false);
  const [participant, setParticipant] = useState('Sarah Chen');
  const [activities, setActivities] = useState('');
  const [outcomes, setOutcomes] = useState('');

  const approveNote = (id: string) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: 'approved' as const } : n))
    );
  };

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote = {
      id: `N00${notes.length + 1}`,
      participant,
      worker: 'Sophie Anderson',
      date: new Date().toISOString().split('T')[0],
      shift: 'Core Support Shift',
      goals: ['Community participation', 'Daily Living Skills'],
      activities: activities || 'Supported participant with community access and meal prep.',
      outcomes: outcomes || 'Shift completed successfully with full participant engagement.',
      concerns: null,
      mood: 'happy',
      status: 'approved' as const,
      supervisor: 'Brooke Simmons'
    };
    setNotes([newNote, ...notes]);
    setShowModal(false);
    setActivities('');
    setOutcomes('');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">Shift Documentation & Audit Trail</p>
          </div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Participant Progress Notes</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Mandatory post-shift documentation, goal outcomes & supervisor sign-offs
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-teal hover:bg-teal/90 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm shadow-teal/20"
        >
          <Plus size={16} />
          <span>Log New Progress Note</span>
        </button>
      </div>

      {/* Progress Notes List */}
      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 dark:border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-navy dark:text-white text-base">{note.participant}</span>
                  <span className="text-xs text-slate-400">({note.shift})</span>
                </div>
                <p className="text-xs text-slate-500">Worker: <span className="font-semibold">{note.worker}</span> · Logged on {note.date}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  note.status === 'approved' ? 'bg-emerald/10 text-emerald border border-emerald/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                }`}>
                  {note.status === 'approved' ? '✓ Approved by Supervisor' : 'Pending Approval'}
                </span>

                {note.status === 'pending' && (
                  <button
                    onClick={() => approveNote(note.id)}
                    className="px-3 py-1 rounded-xl bg-emerald text-white text-xs font-bold hover:bg-emerald/90"
                  >
                    Approve Note
                  </button>
                )}
              </div>
            </div>

            {/* Goals Worked On */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-400">Goals Addressed:</span>
              {note.goals.map((g) => (
                <span key={g} className="px-2.5 py-0.5 rounded-full bg-teal/10 text-teal text-[11px] font-semibold">
                  {g}
                </span>
              ))}
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                <span className="font-bold text-navy dark:text-white uppercase tracking-wider text-[10px] block mb-1">Activities Conducted</span>
                <p className="text-slate-600 dark:text-white/70 leading-relaxed">{note.activities}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                <span className="font-bold text-navy dark:text-white uppercase tracking-wider text-[10px] block mb-1">Outcomes & Progress</span>
                <p className="text-slate-600 dark:text-white/70 leading-relaxed">{note.outcomes}</p>
              </div>
            </div>

            {/* Concerns Flag if any */}
            {note.concerns && (
              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5 text-rose-500" />
                <div>
                  <span className="font-bold">Supervisor Concern Flagged: </span>
                  {note.concerns}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* New Note Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-navy border border-slate-200 dark:border-white/10 rounded-3xl p-6 w-full max-w-lg shadow-2xl space-y-4 animate-fade-in">
            <h3 className="text-lg font-black text-navy dark:text-white">Log Progress Note</h3>
            <form onSubmit={handleCreateNote} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-white/70 mb-1">Participant</label>
                <select
                  value={participant}
                  onChange={(e) => setParticipant(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs text-navy dark:text-white"
                >
                  <option>Sarah Chen</option>
                  <option>Michael Torres</option>
                  <option>Emma Walsh</option>
                  <option>James Okafor</option>
                  <option>Linda Murphy</option>
                  <option>Ryan Kim</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-white/70 mb-1">Shift Activities</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe activities, community access, meal prep, tasks..."
                  value={activities}
                  onChange={(e) => setActivities(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs text-navy dark:text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-white/70 mb-1">Goal Outcomes</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe participant engagement and progress towards NDIS goals..."
                  value={outcomes}
                  onChange={(e) => setOutcomes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs text-navy dark:text-white resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-navy dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-teal text-white text-xs font-bold hover:bg-teal/90"
                >
                  Submit & Sign Progress Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
