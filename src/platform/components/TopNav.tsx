import React, { useState } from 'react';
import { Search, Bell, Plus, ShieldCheck, ExternalLink } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

interface TopNavProps {
  collapsed: boolean;
}

export const TopNav: React.FC<TopNavProps> = ({ collapsed }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: 'High Incident Reported', desc: 'Ryan Kim — Restrictive Practice incident submitted.', time: '10m ago', urgent: true },
    { id: 2, title: 'Worker Qualification Expiring', desc: 'Marcus Williams — First Aid Check expires in 24 days.', time: '1h ago', urgent: false },
    { id: 3, title: 'Plan Review Due', desc: 'Linda Murphy NDIS plan expires in 21 days.', time: '3h ago', urgent: false },
  ];

  return (
    <header className={`fixed top-0 right-0 z-30 h-16 bg-white dark:bg-navy-mid border-b border-slate-200 dark:border-white/10 transition-all duration-300 flex items-center justify-between px-6 ${collapsed ? 'left-20' : 'left-64'}`}>
      {/* Search Bar */}
      <div className="flex items-center gap-3 w-72 lg:w-96">
        <div className="relative w-full">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/40" />
          <input
            type="text"
            placeholder="Search participants, NDIS numbers, staff, files... (Cmd+K)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-teal dark:focus:border-teal text-navy dark:text-white placeholder-slate-400 dark:placeholder-white/40 transition-colors"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* NDIS Registration Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs font-semibold">
          <ShieldCheck size={14} />
          <span>NDIS Reg #4050023456</span>
        </div>

        {/* Public Site Link */}
        <Link
          to="/"
          target="_blank"
          className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-white/60 hover:text-teal dark:hover:text-teal transition-colors"
        >
          <span>Public Site</span>
          <ExternalLink size={13} />
        </Link>

        {/* Quick Action Button */}
        <button
          onClick={() => navigate('/platform/referrals')}
          className="bg-teal hover:bg-teal/90 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm shadow-teal/20"
        >
          <Plus size={15} />
          <span className="hidden sm:inline">New Referral</span>
        </button>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-slate-600 dark:text-white/70 hover:text-teal dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            title="Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-navy border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl p-4 z-50 animate-fade-in">
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-white/10 pb-2">
                <h4 className="text-xs font-bold text-navy dark:text-white">Notifications</h4>
                <span className="text-[10px] text-teal font-bold bg-teal/10 px-2 py-0.5 rounded-full">3 New</span>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {notifications.map((n) => (
                  <div key={n.id} className={`p-2.5 rounded-xl border text-xs ${n.urgent ? 'bg-rose-500/5 border-rose-500/20' : 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10'}`}>
                    <div className="flex items-center justify-between font-bold text-navy dark:text-white mb-0.5">
                      <span>{n.title}</span>
                      <span className="text-[9px] text-slate-400">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-white/60">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
