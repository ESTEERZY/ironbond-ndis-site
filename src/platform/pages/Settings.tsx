import React, { useState } from 'react';
import { Building, ShieldCheck, Key, Bell } from 'lucide-react';

export const Settings: React.FC = () => {
  const [tab, setTab] = useState<'org' | 'roles' | 'notifications' | 'api'>('org');

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Organisation & System Settings</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Provider registration details, RBAC permissions, document templates & security audit logs
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-navy p-4 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-1">
          {[
            { id: 'org', label: 'Organisation Details', icon: Building },
            { id: 'roles', label: 'Roles & Permissions', icon: ShieldCheck },
            { id: 'notifications', label: 'Notification Preferences', icon: Bell },
            { id: 'api', label: 'API Keys & Integrations', icon: Key },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs font-bold transition-all ${
                  tab === item.id
                    ? 'bg-teal text-white shadow-sm'
                    : 'text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-3 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
          {tab === 'org' && (
            <div className="space-y-6">
              <h3 className="font-bold text-navy dark:text-white text-base border-b border-slate-100 dark:border-white/10 pb-3">
                Provider Organisation Profile
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Organisation Name</label>
                  <input type="text" readOnly value="Horizon Support Services Pty Ltd" className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-navy dark:text-white font-bold" />
                </div>
                <div>
                  <label className="block font-bold text-slate-500 mb-1">NDIS Registration Number</label>
                  <input type="text" readOnly value="4050023456" className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-navy dark:text-white font-mono font-bold" />
                </div>
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Australian Business Number (ABN)</label>
                  <input type="text" readOnly value="51 287 436 892" className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-navy dark:text-white font-mono" />
                </div>
                <div>
                  <label className="block font-bold text-slate-500 mb-1">Primary Head Office Location</label>
                  <input type="text" readOnly value="Level 3, 84 William Street, Melbourne VIC 3000" className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-navy dark:text-white" />
                </div>
              </div>
            </div>
          )}

          {tab !== 'org' && (
            <div className="text-center py-12 text-xs text-slate-400">
              <p className="font-bold text-navy dark:text-white mb-1">System Module Configured</p>
              <p>Role-based access control and audit security logging active across all modules.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
