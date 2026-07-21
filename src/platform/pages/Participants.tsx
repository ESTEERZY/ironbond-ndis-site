import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, ChevronRight, Grid, List } from 'lucide-react';
import { participants, ParticipantStatus, RiskLevel } from '../data/mockData';

export const Participants: React.FC = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [riskFilter, setRiskFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  const filteredParticipants = participants.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.ndisNumber.includes(search) ||
      p.suburb.toLowerCase().includes(search.toLowerCase()) ||
      p.primaryDisability.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    const matchesRisk = riskFilter === 'all' || p.riskLevel === riskFilter;
    return matchesSearch && matchesStatus && matchesRisk;
  });

  const getRiskBadge = (risk: RiskLevel) => {
    switch (risk) {
      case 'critical':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">Critical Risk</span>;
      case 'high':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20">High Risk</span>;
      case 'medium':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20">Medium Risk</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald/10 text-emerald border border-emerald/20">Low Risk</span>;
    }
  };

  const getStatusBadge = (status: ParticipantStatus) => {
    switch (status) {
      case 'active':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald/10 text-emerald border border-emerald/20">Active</span>;
      case 'pending':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">Pending Intake</span>;
      case 'suspended':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">Suspended</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-500/10 text-slate-500 border border-slate-500/20">Exited</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Participant Directory</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Active NDIS Profiles · Participant 360 Master Records
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* View Mode Toggle */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-colors ${viewMode === 'table' ? 'bg-white dark:bg-navy text-teal shadow-sm' : 'text-slate-400'}`}
              title="Table View"
            >
              <List size={16} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-navy text-teal shadow-sm' : 'text-slate-400'}`}
              title="Grid View"
            >
              <Grid size={16} />
            </button>
          </div>

          <Link
            to="/platform/referrals"
            className="bg-teal hover:bg-teal/90 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm shadow-teal/20"
          >
            <Plus size={16} />
            <span>Intake New Participant</span>
          </Link>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-navy p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div className="relative flex-1 w-full">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by participant name, NDIS number, disability, suburb..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-navy dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-semibold text-navy dark:text-white focus:outline-none focus:border-teal"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active Only</option>
            <option value="pending">Pending Intake</option>
            <option value="suspended">Suspended</option>
          </select>

          {/* Risk Level Filter */}
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-semibold text-navy dark:text-white focus:outline-none focus:border-teal"
          >
            <option value="all">All Risk Levels</option>
            <option value="low">Low Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="high">High Risk</option>
            <option value="critical">Critical Risk</option>
          </select>
        </div>
      </div>

      {/* Participants Table or Grid View */}
      {viewMode === 'table' ? (
        <div className="bg-white dark:bg-navy rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-400 dark:text-white/40 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3.5 px-6 font-bold">Participant</th>
                  <th className="py-3.5 px-4 font-bold">NDIS Number</th>
                  <th className="py-3.5 px-4 font-bold">Coordinator</th>
                  <th className="py-3.5 px-4 font-bold">Status</th>
                  <th className="py-3.5 px-4 font-bold">Funding Remaining</th>
                  <th className="py-3.5 px-4 font-bold">Plan End Date</th>
                  <th className="py-3.5 px-4 font-bold">Risk Level</th>
                  <th className="py-3.5 px-6 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {filteredParticipants.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/70 dark:hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-teal/20 text-teal flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {p.avatar}
                        </div>
                        <div>
                          <Link to={`/platform/participants/${p.id}`} className="font-bold text-navy dark:text-white hover:text-teal transition-colors">
                            {p.name}
                          </Link>
                          <p className="text-[11px] text-slate-400">{p.primaryDisability} · {p.suburb}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono text-slate-600 dark:text-white/70">{p.ndisNumber}</td>
                    <td className="py-4 px-4 font-medium text-slate-600 dark:text-white/70">{p.coordinator}</td>
                    <td className="py-4 px-4">{getStatusBadge(p.status)}</td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-navy dark:text-white">${p.fundingRemaining.toLocaleString()}</div>
                      <div className="w-24 bg-slate-100 dark:bg-white/10 rounded-full h-1.5 mt-1 overflow-hidden">
                        <div
                          className="bg-teal h-full rounded-full"
                          style={{ width: `${Math.round((p.fundingSpent / p.fundingTotal) * 100)}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600 dark:text-white/70 font-medium">{p.planEndDate}</td>
                    <td className="py-4 px-4">{getRiskBadge(p.riskLevel)}</td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        to={`/platform/participants/${p.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-teal hover:text-navy dark:hover:text-white transition-colors"
                      >
                        <span>View 360 Profile</span>
                        <ChevronRight size={14} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParticipants.map((p) => (
            <div key={p.id} className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-teal/20 text-teal flex items-center justify-center font-bold text-sm">
                      {p.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy dark:text-white text-sm">{p.name}</h3>
                      <p className="text-[11px] text-slate-400">{p.primaryDisability}</p>
                    </div>
                  </div>
                  {getStatusBadge(p.status)}
                </div>

                <div className="space-y-2 text-xs py-3 border-y border-slate-100 dark:border-white/10 text-slate-600 dark:text-white/70">
                  <div className="flex justify-between">
                    <span className="text-slate-400">NDIS #:</span>
                    <span className="font-mono font-bold">{p.ndisNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coordinator:</span>
                    <span className="font-medium">{p.coordinator}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Remaining Budget:</span>
                    <span className="font-bold text-emerald">${p.fundingRemaining.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                {getRiskBadge(p.riskLevel)}
                <Link
                  to={`/platform/participants/${p.id}`}
                  className="bg-slate-100 dark:bg-white/10 text-navy dark:text-white hover:bg-teal hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                >
                  <span>Open Record</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
