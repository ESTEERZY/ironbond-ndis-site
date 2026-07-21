import React, { useState } from 'react';
import { Send, Search } from 'lucide-react';
import { messages as initialMessages } from '../data/mockData';

export const Messaging: React.FC = () => {
  const [activeMessage, setActiveMessage] = useState(initialMessages[0]);
  const [replyText, setReplyText] = useState('');

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText) return;
    setReplyText('');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-navy p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-navy dark:text-white">Internal Communications & Participant Messaging</h1>
          <p className="text-xs text-slate-500 dark:text-white/60">
            Secure messaging between Coordinators, Support Workers, Administration & Families
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white dark:bg-navy rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden min-h-[500px]">
        {/* Left Inbox List */}
        <div className="border-r border-slate-200 dark:border-white/10 p-4 space-y-3">
          <div className="relative mb-3">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs text-navy dark:text-white focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            {initialMessages.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMessage(m)}
                className={`w-full text-left p-3 rounded-2xl border transition-all ${
                  activeMessage.id === m.id
                    ? 'bg-teal/10 border-teal text-navy dark:text-white shadow-sm'
                    : 'bg-white dark:bg-navy border-slate-100 dark:border-white/10 hover:border-teal/30'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-navy dark:text-white">{m.from}</span>
                  <span className="text-[10px] text-slate-400">{m.time}</span>
                </div>
                <p className="text-xs font-semibold text-slate-700 dark:text-white/80 truncate mb-1">{m.subject}</p>
                <p className="text-[11px] text-slate-400 truncate">{m.preview}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Right Active Message Thread */}
        <div className="lg:col-span-2 p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-4">
              <div>
                <h3 className="font-bold text-navy dark:text-white text-base">{activeMessage.subject}</h3>
                <p className="text-xs text-slate-400">From: <span className="font-semibold text-slate-600 dark:text-white/70">{activeMessage.from}</span></p>
              </div>
              <span className="text-xs text-slate-400">{activeMessage.time}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-xs text-slate-700 dark:text-white/80 leading-relaxed">
              <p>{activeMessage.preview}</p>
              <p className="mt-2 text-slate-500">
                Please review the latest participant goals and let me know if any updates are required for the next roster period.
              </p>
            </div>
          </div>

          {/* Reply Form */}
          <form onSubmit={handleSendReply} className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your response..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="flex-1 px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs text-navy dark:text-white focus:outline-none focus:border-teal"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-teal hover:bg-teal/90 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Send size={14} /> Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
