import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

export const Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-mid text-slate-800 dark:text-white flex font-sans transition-colors duration-200">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${collapsed ? 'pl-20' : 'pl-64'}`}>
        <TopNav collapsed={collapsed} />
        <main className="flex-1 pt-24 lg:pt-28 p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
