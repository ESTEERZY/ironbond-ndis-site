import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  Camera,
  FileText,
  Navigation,
  ShieldCheck
} from 'lucide-react';
import { appointments, participants } from '../data/mockData';

export const MobileWorkerApp: React.FC = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [signed, setSigned] = useState(false);

  const activeShift = appointments[0]; // Sarah Chen
  const participant = participants[0];

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between max-w-md mx-auto relative shadow-2xl border-x border-white/10 font-sans">
      {/* Mobile Header Bar */}
      <div className="p-4 bg-navy border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-teal text-navy font-black flex items-center justify-center text-xs">
            SA
          </div>
          <div>
            <h3 className="font-bold text-xs">Sophie Anderson</h3>
            <span className="text-[9px] text-teal font-semibold">Field Support Worker</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-emerald/20 text-emerald text-[9px] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></span> Offline Sync Ready
          </span>
          <Link to="/platform" className="text-[10px] text-white/50 hover:text-white">Exit</Link>
        </div>
      </div>

      {/* Main Shift View */}
      <div className="p-4 space-y-4 flex-1 overflow-y-auto">
        {/* Active Shift Card */}
        <div className="p-5 rounded-3xl bg-navy-mid border border-white/10 space-y-3 shadow-xl">
          <div className="flex items-center justify-between text-xs">
            <span className="text-teal font-bold uppercase tracking-wider text-[10px]">Active Shift Today</span>
            <span className="font-mono text-white/70">{activeShift.startTime} – {activeShift.endTime}</span>
          </div>

          <div>
            <h2 className="text-lg font-black text-white">{activeShift.participant}</h2>
            <p className="text-xs text-white/60">{activeShift.service} · {activeShift.suburb}</p>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-xs space-y-1">
            <p className="text-[10px] text-white/40 uppercase font-bold">Medical Alert Note</p>
            <p className="text-rose-400 font-semibold">{participant.medicalAlerts[0]}</p>
          </div>

          {/* GPS Navigation Link */}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(participant.address)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/10 text-xs font-bold hover:bg-white/20 transition-colors"
          >
            <Navigation size={14} className="text-teal" />
            <span>Navigate to {participant.suburb}</span>
          </a>
        </div>

        {/* Check In / Check Out Controls */}
        <div className="p-5 rounded-3xl bg-navy-mid border border-white/10 space-y-3">
          <h4 className="font-bold text-xs uppercase tracking-wider text-white/70">Shift Status & Timecard</h4>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setCheckedIn(true)}
              disabled={checkedIn}
              className={`py-3 rounded-2xl text-xs font-bold transition-all ${
                checkedIn ? 'bg-emerald text-white shadow-md' : 'bg-teal text-navy font-black hover:bg-teal/90'
              }`}
            >
              {checkedIn ? '✓ Checked In (09:01)' : 'Check In to Shift'}
            </button>

            <button
              onClick={() => setCheckedOut(true)}
              disabled={!checkedIn || checkedOut}
              className={`py-3 rounded-2xl text-xs font-bold transition-all ${
                checkedOut
                  ? 'bg-emerald text-white shadow-md'
                  : checkedIn
                  ? 'bg-rose-500 text-white font-bold hover:bg-rose-600'
                  : 'bg-white/10 text-white/30 cursor-not-allowed'
              }`}
            >
              {checkedOut ? '✓ Checked Out' : 'Check Out Shift'}
            </button>
          </div>
        </div>

        {/* Mobile Documentation Features */}
        {checkedIn && (
          <div className="p-5 rounded-3xl bg-navy-mid border border-white/10 space-y-4 animate-fade-in">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white/70">Field Shift Documentation</h4>

            {/* Upload Activity Photo */}
            <button
              onClick={() => setPhotoUploaded(!photoUploaded)}
              className="w-full py-3 px-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-2">
                <Camera size={16} className="text-teal" />
                <span>{photoUploaded ? '✓ Activity Photo Attached' : 'Attach Activity Photo'}</span>
              </span>
              <span className="text-[10px] text-teal font-semibold">{photoUploaded ? '1 Uploaded' : '+ Add'}</span>
            </button>

            {/* E-Signature Box */}
            <button
              onClick={() => setSigned(!signed)}
              className="w-full py-3 px-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-2">
                <FileText size={16} className="text-emerald" />
                <span>{signed ? '✓ Participant E-Signed' : 'Collect Participant Signature'}</span>
              </span>
              <span className="text-[10px] text-emerald font-semibold">{signed ? 'Signed' : 'Sign'}</span>
            </button>

            {/* Incident Trigger */}
            <button
              className="w-full py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <AlertTriangle size={14} />
              <span>Report Field Incident</span>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Footer */}
      <div className="p-3 bg-navy border-t border-white/10 text-center text-[10px] text-white/40 flex items-center justify-center gap-1">
        <ShieldCheck size={12} className="text-emerald" />
        <span>Horizon Support Services Field Worker App v4.2</span>
      </div>
    </div>
  );
};
