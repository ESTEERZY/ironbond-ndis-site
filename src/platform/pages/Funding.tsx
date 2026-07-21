import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { fundingData, weeklyFundingTrend, participantFundingBreakdown } from '../data/mockData';

export const Funding: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Funding & NDIS Budget Analytics</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Real-time burn rate, category allocation & plan exhaustion forecasting
          </p>
        </div>
      </div>

      {/* 3 Main Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-3">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="font-bold text-teal uppercase tracking-wider">Core Supports</span>
            <span>PROPORTION 60%</span>
          </div>
          <p className="text-3xl font-black text-navy dark:text-white">${fundingData.coreSupports.spent.toLocaleString()}</p>
          <p className="text-xs text-slate-500">Spent of ${fundingData.coreSupports.total.toLocaleString()} Allocated</p>
          <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
            <div className="bg-teal h-full rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>

        <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-3">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="font-bold text-emerald uppercase tracking-wider">Capacity Building</span>
            <span>PROPORTION 30%</span>
          </div>
          <p className="text-3xl font-black text-navy dark:text-white">${fundingData.capacityBuilding.spent.toLocaleString()}</p>
          <p className="text-xs text-slate-500">Spent of ${fundingData.capacityBuilding.total.toLocaleString()} Allocated</p>
          <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
            <div className="bg-emerald h-full rounded-full" style={{ width: '48%' }}></div>
          </div>
        </div>

        <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-3">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="font-bold text-violet-500 uppercase tracking-wider">Capital Supports</span>
            <span>PROPORTION 10%</span>
          </div>
          <p className="text-3xl font-black text-navy dark:text-white">${fundingData.capital.spent.toLocaleString()}</p>
          <p className="text-xs text-slate-500">Spent of ${fundingData.capital.total.toLocaleString()} Allocated</p>
          <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
            <div className="bg-violet-500 h-full rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>

      {/* Recharts Area Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
          <h3 className="text-sm font-bold text-navy dark:text-white mb-4">Monthly Funding Drawdown Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyFundingTrend}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="week" stroke="#888888" fontSize={11} />
                <YAxis stroke="#888888" fontSize={11} />
                <Tooltip />
                <Area type="monotone" dataKey="core" stackId="1" stroke="#00B4D8" fill="#00B4D8" opacity={0.6} />
                <Area type="monotone" dataKey="capacity" stackId="1" stroke="#10B981" fill="#10B981" opacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Distribution */}
        <div className="bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-sm font-bold text-navy dark:text-white mb-2">Category Distribution</h3>
          <div className="w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={participantFundingBreakdown} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={4}>
                  {participantFundingBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 text-[10px] font-bold">
            <span className="text-teal">● Core</span>
            <span className="text-emerald">● Capacity</span>
            <span className="text-violet-500">● Capital</span>
          </div>
        </div>
      </div>
    </div>
  );
};
