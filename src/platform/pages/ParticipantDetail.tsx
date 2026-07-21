import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldAlert,
  AlertTriangle,
  CheckCircle,
  Plus,
  Edit
} from 'lucide-react';
import { participants, appointments, progressNotes, incidents } from '../data/mockData';

export const ParticipantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<
    'overview' | 'goals' | 'funding' | 'documents' | 'notes' | 'appointments' | 'messages' | 'incidents' | 'timeline'
  >('overview');

  const participant = participants.find((p) => p.id === id) || participants[0];

  const participantAppointments = appointments.filter((a) => a.participant === participant.name);
  const participantNotes = progressNotes.filter((n) => n.participant === participant.name);
  const participantIncidents = incidents.filter((i) => i.participant === participant.name);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'goals', label: 'Support Goals (4)' },
    { id: 'funding', label: 'Funding & Plan' },
    { id: 'documents', label: 'Documents (8)' },
    { id: 'notes', label: `Progress Notes (${participantNotes.length})` },
    { id: 'appointments', label: `Shifts (${participantAppointments.length})` },
    { id: 'messages', label: 'Messages' },
    { id: 'incidents', label: `Incidents (${participantIncidents.length})` },
    { id: 'timeline', label: 'Activity Timeline' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Breadcrumb & Actions Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            to="/platform/participants"
            className="p-2 rounded-xl bg-white dark:bg-navy border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/70 hover:text-teal transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-teal uppercase tracking-widest">Participant 360 Master Record</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 font-semibold">
                NDIS #{participant.ndisNumber}
              </span>
            </div>
            <h1 className="text-2xl font-black text-navy dark:text-white">{participant.name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-xl bg-white dark:bg-navy border border-slate-200 dark:border-white/10 text-xs font-bold text-navy dark:text-white hover:bg-slate-50 transition-colors flex items-center gap-1.5">
            <Edit size={14} />
            <span>Edit Profile</span>
          </button>
          <button className="px-3 py-2 rounded-xl bg-teal text-white text-xs font-bold hover:bg-teal/90 transition-all flex items-center gap-1.5 shadow-sm shadow-teal/20">
            <Plus size={14} />
            <span>Log Progress Note</span>
          </button>
        </div>
      </div>

      {/* HubSpot Style 360 Split Header */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sticky Summary Card */}
        <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
          {/* Identity */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal/20 text-teal flex items-center justify-center font-black text-xl shadow-inner">
              {participant.avatar}
            </div>
            <div>
              <h2 className="font-black text-navy dark:text-white text-lg">{participant.name}</h2>
              <p className="text-xs text-slate-400">{participant.age} yrs · DOB {participant.dob}</p>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald/10 text-emerald border border-emerald/20">
                {participant.status.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Key Indicators */}
          <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-white/10 text-xs">
            <div>
              <span className="text-slate-400 text-[11px] block">Primary Disability</span>
              <span className="font-bold text-navy dark:text-white">{participant.primaryDisability}</span>
              {participant.secondaryDisability && (
                <span className="text-[11px] text-slate-500 block">Secondary: {participant.secondaryDisability}</span>
              )}
            </div>

            <div>
              <span className="text-slate-400 text-[11px] block">Support Coordinator</span>
              <span className="font-bold text-navy dark:text-white">{participant.coordinator}</span>
            </div>

            <div>
              <span className="text-slate-400 text-[11px] block">Primary Support Worker</span>
              <span className="font-bold text-navy dark:text-white">{participant.supportWorker}</span>
            </div>

            <div>
              <span className="text-slate-400 text-[11px] block">Emergency Contact</span>
              <span className="font-bold text-navy dark:text-white">
                {participant.emergencyContact.name} ({participant.emergencyContact.relation})
              </span>
              <span className="text-teal font-mono block text-[11px]">{participant.emergencyContact.phone}</span>
            </div>

            <div>
              <span className="text-slate-400 text-[11px] block">Location</span>
              <span className="font-medium text-navy dark:text-white">{participant.address}</span>
            </div>
          </div>

          {/* Quick Stats Widget */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Total NDIS Budget:</span>
              <span className="font-bold text-navy dark:text-white">${participant.fundingTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Funding Remaining:</span>
              <span className="font-bold text-emerald">${participant.fundingRemaining.toLocaleString()}</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-teal h-full rounded-full"
                style={{ width: `${Math.round((participant.fundingSpent / participant.fundingTotal) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Tabbed Content Body */}
        <div className="lg:col-span-3 space-y-6">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-white dark:bg-navy p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 overflow-x-auto custom-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-teal text-white shadow-sm shadow-teal/20'
                    : 'text-slate-500 dark:text-white/60 hover:text-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Panes */}
          <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Medical & Risk Banner */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300">
                    <h4 className="font-bold text-xs flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                      <ShieldAlert size={16} /> Medical Alerts & Allergies
                    </h4>
                    <ul className="space-y-1 text-xs">
                      {participant.medicalAlerts.map((alert, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{alert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300">
                    <h4 className="font-bold text-xs flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                      <AlertTriangle size={16} /> Accessibility Requirements
                    </h4>
                    <ul className="space-y-1 text-xs">
                      {participant.accessibilityReqs.map((req, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Behaviour Support Notes */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                  <h4 className="font-bold text-xs text-navy dark:text-white uppercase tracking-wider mb-2">
                    Behaviour Support & Engagement Notes
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">
                    {participant.behaviourNotes}
                  </p>
                </div>

                {/* Support Goals Summary */}
                <div>
                  <h4 className="font-bold text-xs text-navy dark:text-white uppercase tracking-wider mb-3">
                    Active Support Goals ({participant.goals.length})
                  </h4>
                  <div className="space-y-2">
                    {participant.goals.map((goal, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-xs">
                        <CheckCircle size={16} className="text-emerald flex-shrink-0" />
                        <span className="text-navy dark:text-white font-medium">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'goals' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
                  <h3 className="font-bold text-navy dark:text-white text-sm">NDIS Support Plan Goals</h3>
                  <button className="text-xs font-bold text-teal flex items-center gap-1">
                    <Plus size={14} /> Add New Goal
                  </button>
                </div>
                <div className="space-y-3">
                  {participant.goals.map((goal, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-teal uppercase tracking-widest">Goal 0{i + 1}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald/10 text-emerald">On Track</span>
                      </div>
                      <p className="text-xs font-bold text-navy dark:text-white">{goal}</p>
                      <p className="text-[11px] text-slate-500">Target Completion: NDIS Plan End ({participant.planEndDate})</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'funding' && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-teal/10 border border-teal/20">
                    <p className="text-[10px] font-bold text-teal uppercase tracking-wider">Core Supports</p>
                    <p className="text-xl font-black text-navy dark:text-white mt-1">${(participant.fundingTotal * 0.6).toLocaleString()}</p>
                    <p className="text-[10px] text-slate-500 mt-1">60% of total budget</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald/10 border border-emerald/20">
                    <p className="text-[10px] font-bold text-emerald uppercase tracking-wider">Capacity Building</p>
                    <p className="text-xl font-black text-navy dark:text-white mt-1">${(participant.fundingTotal * 0.3).toLocaleString()}</p>
                    <p className="text-[10px] text-slate-500 mt-1">30% of total budget</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                    <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">Capital Supports</p>
                    <p className="text-xl font-black text-navy dark:text-white mt-1">${(participant.fundingTotal * 0.1).toLocaleString()}</p>
                    <p className="text-[10px] text-slate-500 mt-1">10% of total budget</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-2">
                  <h4 className="font-bold text-xs text-navy dark:text-white">Plan Forecast</h4>
                  <p className="text-xs text-slate-500">Based on current shift burn rate, funding is projected to last until plan end date ({participant.planEndDate}).</p>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4">
                {participantNotes.map((note) => (
                  <div key={note.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-navy dark:text-white">{note.shift} · {note.date}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald/10 text-emerald uppercase">{note.status}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-white/70">{note.activities}</p>
                    <div className="text-[11px] text-slate-400 pt-1">Worker: {note.worker} · Supervisor: {note.supervisor}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-4 relative border-l-2 border-slate-200 dark:border-white/10 pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-teal"></div>
                  <p className="text-xs font-bold text-navy dark:text-white">Progress Note Submitted</p>
                  <p className="text-[11px] text-slate-400">Worker Sophie Anderson logged shift notes for Art Class participation.</p>
                  <span className="text-[10px] text-slate-400">Yesterday at 4:15 PM</span>
                </div>

                <div className="relative pt-4">
                  <div className="absolute -left-[31px] top-4 w-4 h-4 rounded-full bg-emerald"></div>
                  <p className="text-xs font-bold text-navy dark:text-white">Plan Review Completed</p>
                  <p className="text-[11px] text-slate-400">Support Coordinator Brooke Simmons conducted 6-month review with Mum Claire.</p>
                  <span className="text-[10px] text-slate-400">3 days ago</span>
                </div>
              </div>
            )}

            {['documents', 'appointments', 'messages', 'incidents'].includes(activeTab) && (
              <div className="text-center py-12 text-slate-400 text-xs">
                <p className="font-bold text-navy dark:text-white mb-1">Displaying records for {activeTab.toUpperCase()}</p>
                <p>All records active and synchronized with NDIS Quality and Safeguards Framework.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
