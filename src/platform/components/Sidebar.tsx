import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Calendar,
  UserCheck,
  FileText,
  FolderKanban,
  DollarSign,
  FileCheck,
  AlertTriangle,
  ShieldAlert,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Smartphone,
  UserCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const mainNavItems = [
    { name: 'Dashboard', path: '/platform', icon: LayoutDashboard },
    { name: 'Participants', path: '/platform/participants', icon: Users, badge: '6' },
    { name: 'Referrals', path: '/platform/referrals', icon: UserPlus, badge: '7' },
    { name: 'Scheduling', path: '/platform/scheduling', icon: Calendar },
    { name: 'Support Workers', path: '/platform/workers', icon: UserCheck },
    { name: 'Progress Notes', path: '/platform/progress-notes', icon: FileText, badge: '1' },
    { name: 'Documents', path: '/platform/documents', icon: FolderKanban },
    { name: 'Funding & Plans', path: '/platform/funding', icon: DollarSign },
    { name: 'Service Agreements', path: '/platform/agreements', icon: FileCheck },
    { name: 'Incidents', path: '/platform/incidents', icon: AlertTriangle, badge: '2', badgeColor: 'bg-rose-500' },
    { name: 'Compliance', path: '/platform/compliance', icon: ShieldAlert, badge: '8', badgeColor: 'bg-amber-500' },
    { name: 'Reports', path: '/platform/reports', icon: BarChart3 },
    { name: 'Messages', path: '/platform/messages', icon: MessageSquare, badge: '2' },
    { name: 'Settings', path: '/platform/settings', icon: Settings },
  ];

  return (
    <aside className={`fixed top-0 left-0 bottom-0 z-40 bg-navy text-white transition-all duration-300 flex flex-col border-r border-white/10 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
        <NavLink to="/platform" className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-teal flex items-center justify-center font-black text-navy flex-shrink-0 shadow-md">
            H
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-none">
              <span className="font-black tracking-tight text-white text-sm">Horizon</span>
              <span className="text-[10px] text-teal font-semibold tracking-wider uppercase mt-0.5">NDIS Platform</span>
            </div>
          )}
        </NavLink>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation items */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/platform'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                  isActive
                    ? 'bg-teal text-white shadow-md shadow-teal/20'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
              title={collapsed ? item.name : undefined}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span className="flex-1 truncate">{item.name}</span>}
              {!collapsed && item.badge && (
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full text-white ${item.badgeColor || 'bg-teal/30'}`}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}

        {/* View Switchers */}
        <div className="pt-4 mt-4 border-t border-white/10 space-y-1">
          {!collapsed && <p className="px-3 text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Specialized Views</p>}
          <NavLink
            to="/platform/portal"
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-emerald hover:bg-emerald/10 transition-colors"
            title={collapsed ? "Participant Portal" : undefined}
          >
            <UserCircle size={18} className="flex-shrink-0" />
            {!collapsed && <span>Participant Portal</span>}
          </NavLink>
          <NavLink
            to="/platform/mobile-worker"
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-amber-400 hover:bg-amber-400/10 transition-colors"
            title={collapsed ? "Mobile Support Worker" : undefined}
          >
            <Smartphone size={18} className="flex-shrink-0" />
            {!collapsed && <span>Worker Mobile View</span>}
          </NavLink>
        </div>
      </div>

      {/* User & Footer */}
      <div className="p-3 border-t border-white/10 bg-navy-mid/50 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center gap-2 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-semibold transition-colors"
            title="Toggle theme mode"
          >
            {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-teal" />}
            {!collapsed && <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/5">
          <div className="w-8 h-8 rounded-lg bg-teal/20 text-teal flex items-center justify-center font-bold text-xs flex-shrink-0">
            {user?.avatar || 'BS'}
          </div>
          {!collapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold text-white truncate">{user?.name || 'Brooke Simmons'}</p>
              <p className="text-[10px] text-white/50 truncate">{user?.title || 'Support Coordinator'}</p>
            </div>
          )}
          <button
            onClick={() => {
              logout();
              navigate('/platform/login');
            }}
            className="text-white/40 hover:text-rose-400 p-1 transition-colors"
            title="Logout"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
};
