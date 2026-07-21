import React, { useState } from 'react';
import { FileText, Upload, Download, Eye } from 'lucide-react';

const documentFolders = [
  { name: 'NDIS Plans', count: 12, icon: FileText, color: 'text-teal' },
  { name: 'Service Agreements', count: 14, icon: FileText, color: 'text-emerald' },
  { name: 'Consent Forms', count: 18, icon: FileText, color: 'text-violet-500' },
  { name: 'Risk Assessments', count: 8, icon: FileText, color: 'text-rose-500' },
  { name: 'Behaviour Support Plans', count: 4, icon: FileText, color: 'text-amber-500' },
  { name: 'Invoices & Billing', count: 42, icon: FileText, color: 'text-blue-500' },
  { name: 'Incident Reports', count: 6, icon: FileText, color: 'text-rose-600' },
  { name: 'Organisation Policies', count: 15, icon: FileText, color: 'text-indigo-500' },
];

const mockFiles = [
  { id: 'F001', name: 'Sarah Chen — NDIS Plan 2025-2026.pdf', category: 'NDIS Plans', size: '2.4 MB', date: '15 Jan 2025', version: 'v1.2', status: 'verified' },
  { id: 'F002', name: 'Michael Torres — Service Agreement Signed.pdf', category: 'Service Agreements', size: '1.8 MB', date: '01 Aug 2024', version: 'v2.0', status: 'verified' },
  { id: 'F003', name: 'Emma Walsh — Behaviour Support Plan (OT).pdf', category: 'Behaviour Support Plans', size: '4.1 MB', date: '01 Mar 2025', version: 'v1.0', status: 'verified' },
  { id: 'F004', name: 'James Okafor — Risk Assessment 2025.pdf', category: 'Risk Assessments', size: '1.2 MB', date: '12 Dec 2024', version: 'v1.1', status: 'verified' },
  { id: 'F005', name: 'Linda Murphy — Consent Form Photo & Medical.pdf', category: 'Consent Forms', size: '850 KB', date: '15 Jun 2024', version: 'v1.0', status: 'verified' },
];

export const Documents: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Document Management Centre</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Encrypted Document Repository · NDIS Quality & Safeguards Compliant
          </p>
        </div>

        <button className="bg-teal hover:bg-teal/90 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm shadow-teal/20">
          <Upload size={16} />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Folders Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {documentFolders.map((folder) => {
          const Icon = folder.icon;
          return (
            <button
              key={folder.name}
              onClick={() => setSelectedFolder(selectedFolder === folder.name ? null : folder.name)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedFolder === folder.name
                  ? 'bg-teal/10 border-teal text-navy dark:text-white shadow-md'
                  : 'bg-white dark:bg-navy border-slate-200 dark:border-white/10 hover:border-teal/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon size={20} className={folder.color} />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-white/60">
                  {folder.count} files
                </span>
              </div>
              <p className="font-bold text-xs text-navy dark:text-white">{folder.name}</p>
            </button>
          );
        })}
      </div>

      {/* Files Table */}
      <div className="bg-white dark:bg-navy rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <h3 className="font-bold text-xs text-navy dark:text-white">
            {selectedFolder ? `Files in "${selectedFolder}"` : 'All Active Documents'}
          </h3>
          <span className="text-xs text-slate-400">256-bit AES Encryption Active</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 text-slate-400 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-6 font-bold">Document Name</th>
                <th className="py-3 px-4 font-bold">Folder Category</th>
                <th className="py-3 px-4 font-bold">Version</th>
                <th className="py-3 px-4 font-bold">File Size</th>
                <th className="py-3 px-4 font-bold">Upload Date</th>
                <th className="py-3 px-6 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {mockFiles
                .filter((f) => !selectedFolder || f.category === selectedFolder)
                .map((file) => (
                  <tr key={file.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-navy dark:text-white flex items-center gap-2">
                      <FileText size={16} className="text-teal" />
                      <span>{file.name}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 dark:text-white/60">{file.category}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-400">{file.version}</td>
                    <td className="py-3.5 px-4 text-slate-500">{file.size}</td>
                    <td className="py-3.5 px-4 text-slate-500">{file.date}</td>
                    <td className="py-3.5 px-6 text-right">
                      <div className="flex items-center justify-end gap-3 text-teal">
                        <button className="hover:underline flex items-center gap-1 font-bold">
                          <Eye size={14} /> Preview
                        </button>
                        <button className="hover:underline flex items-center gap-1 font-bold">
                          <Download size={14} /> Download
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
