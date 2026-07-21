import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Calendar,
  UserCheck,
  UserPlus,
  FileText,
  AlertTriangle,
  Clock,
  ShieldAlert,
  Plus,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import {
  participants,
  appointments,
  supportWorkers,
  referrals,
  complianceItems,
  incidents
} from '../data/mockData';

export const Dashboard: React.FC = () => {
  const summaryCards = [
    { title: 'Active Participants', value: participants.length.toString(), change: '+2 this month', icon: Users, color: 'text-teal', bg: 'bg-teal/10 border-teal/20', link: '/platform/participants' },
    { title: "Today's Appointments", value: appointments.length.toString(), change: '5 confirmed, 1 pending', icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/20', link: '/platform/scheduling' },
    { title: 'Active Support Workers', value: supportWorkers.filter(w => w.status === 'active').length.toString(), change: '1 on leave', icon: UserCheck, color: 'text-emerald', bg: 'bg-emerald/10 border-emerald/20', link: '/platform/workers' },
    { title: 'New Referrals', value: referrals.filter(r => r.stage === 'new').length.toString(), change: '7 total in pipeline', icon: UserPlus, color: 'text-violet-500', bg: 'bg-violet-500/10 border-violet-500/20', link: '/platform/referrals' },
    { title: 'Outstanding Progress Notes', value: '1', change: '1 pending supervisor approval', icon: FileText, color: 'text-amber-500', bg: 'bg-amber-500/10 border-amber-500/20', link: '/platform/progress-notes' },
    { title: 'Incident Reports', value: incidents.length.toString(), change: '1 critical open incident', icon: AlertTriangle, color: 'text-rose-500', bg: 'bg-rose-500/10 border-rose-500/20', link: '/platform/incidents' },
    { title: 'Funding Reviews Due', value: '1', change: 'Linda Murphy — 21 days left', icon: Clock, color: 'text-indigo-500', bg: 'bg-indigo-500/10 border-indigo-500/20', link: '/platform/funding' },
    { title: 'Compliance Alerts', value: complianceItems.length.toString(), change: '2 critical worker screening', icon: ShieldAlert, color: 'text-rose-600', bg: 'bg-rose-600/10 border-rose-600/20', link: '/platform/compliance' },
  ];

  const quickActions = [
    { label: 'New Referral', path: '/platform/referrals', color: 'bg-teal text-white hover:bg-teal/90' },
    { label: 'Schedule Shift', path: '/platform/scheduling', color: 'bg-blue-600 text-white hover:bg-blue-700' },
    { label: 'Log Incident', path: '/platform/incidents', color: 'bg-rose-600 text-white hover:bg-rose-700' },
    { label: 'Add Progress Note', path: '/platform/progress-notes', color: 'bg-emerald text-white hover:bg-emerald/90' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome & Quick Actions Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
            <p className="text-xs font-bold text-teal uppercase tracking-widest">Provider Operating System</p>
          </div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Operational Control Centre</h1>
          <p className="text-xs text-slate-500 dark:text-white/60 mt-0.5">
            Melbourne Metro & Regional Victoria Operations · {new Date().toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Quick Actions Bar */}
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.path}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${action.color}`}
            >
              <Plus size={14} />
              <span>{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Operational Summary Grid (8 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              to={card.link}
              className="bg-white dark:bg-navy p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-teal/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 dark:text-white/60">{card.title}</span>
                <div className={`p-2 rounded-xl ${card.bg} ${card.color}`}>
                  <Icon size={18} />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-navy dark:text-white group-hover:text-teal transition-colors">{card.value}</span>
                <span className="text-[10px] text-slate-400 dark:text-white/40">{card.change}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Main Dashboard Split Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Today's Schedule & Recent Referrals */}
        <div className="lg:col-span-2 space-y-8">
          {/* Today's Schedule Card */}
          <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-navy dark:text-white">Today's Shift Schedule</h3>
                <p className="text-xs text-slate-400 dark:text-white/40">5 shifts scheduled for today across Melbourne</p>
              </div>
              <Link to="/platform/scheduling" className="text-xs font-bold text-teal hover:underline flex items-center gap-1">
                <span>View Full Roster</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="space-y-3">
              {appointments.slice(0, 5).map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-teal/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-12 rounded-full ${app.color}`}></div>
                    <div>
                      <h4 className="text-xs font-bold text-navy dark:text-white">{app.participant}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-white/60">Worker: <span className="font-semibold">{app.worker}</span> · {app.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-navy dark:text-white">{app.startTime} – {app.endTime}</span>
                    <p className="text-[10px] text-slate-400 dark:text-white/40">{app.suburb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Referrals Pipeline */}
          <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-navy dark:text-white">Active Referral Pipeline</h3>
                <p className="text-xs text-slate-400 dark:text-white/40">7 referrals currently progressing through onboarding</p>
              </div>
              <Link to="/platform/referrals" className="text-xs font-bold text-teal hover:underline flex items-center gap-1">
                <span>Open Kanban Board</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-white/10 text-slate-400 dark:text-white/40">
                    <th className="pb-3 font-bold">Participant</th>
                    <th className="pb-3 font-bold">Referred By</th>
                    <th className="pb-3 font-bold">Services</th>
                    <th className="pb-3 font-bold">Stage</th>
                    <th className="pb-3 font-bold text-right">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {referrals.slice(0, 5).map((r) => (
                    <tr key={r.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                      <td className="py-3 font-bold text-navy dark:text-white">{r.name}</td>
                      <td className="py-3 text-slate-500 dark:text-white/60">{r.referredBy}</td>
                      <td className="py-3 text-slate-500 dark:text-white/60">{r.services.join(', ')}</td>
                      <td className="py-3">
                        <span className="capitalize px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal/10 text-teal border border-teal/20">
                          {r.stage}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          r.priority === 'high' ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald/10 text-emerald'
                        }`}>
                          {r.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Compliance Alerts, Staff Availability, Quick Activity */}
        <div className="space-y-8">
          {/* Critical Compliance Alerts */}
          <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-navy dark:text-white flex items-center gap-2">
                <AlertCircle size={18} className="text-rose-500" />
                <span>Compliance Watchlist</span>
              </h3>
              <Link to="/platform/compliance" className="text-xs font-bold text-teal hover:underline">
                View All (8)
              </Link>
            </div>

            <div className="space-y-2.5">
              {complianceItems.slice(0, 4).map((c) => (
                <div
                  key={c.id}
                  className={`p-3 rounded-2xl border text-xs ${
                    c.priority === 'critical'
                      ? 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'
                      : 'bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-300'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold mb-1">
                    <span>{c.type}</span>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold">{c.status}</span>
                  </div>
                  <p className="text-[11px] font-medium opacity-90">{c.item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support Worker Availability */}
          <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-navy dark:text-white">Staff Roster Status</h3>
              <Link to="/platform/workers" className="text-xs font-bold text-teal hover:underline">
                Manage Staff
              </Link>
            </div>

            <div className="space-y-3">
              {supportWorkers.map((w) => (
                <div key={w.id} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-teal/20 text-teal flex items-center justify-center font-bold text-xs">
                      {w.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy dark:text-white">{w.name}</p>
                      <p className="text-[10px] text-slate-400">{w.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      w.status === 'active' ? 'bg-emerald/10 text-emerald' : 'bg-rose-500/10 text-rose-500'
                    }`}>
                      {w.status === 'active' ? `${w.hoursThisWeek}h active` : 'On Leave'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
