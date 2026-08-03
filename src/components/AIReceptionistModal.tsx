import React, { useState, useEffect, useRef } from 'react';
import { X, Bot, Mic, Send, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';


interface AIReceptionistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AIReceptionistModal: React.FC<AIReceptionistModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Hello! Welcome to Harbour Dental Studio. I'm your Virtual Receptionist. How can I assist you today? I can help with clinic hours, service information, emergency advice, or booking requests.",
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const quickPrompts = [
    "What are your opening hours?",
    "Do you handle emergency dental?",
    "How much does teeth whitening cost?",
    "Can I book a check-up for next week?",
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI response logic tailored for dental clinic enquiries
    setTimeout(() => {
      let replyText = "Thank you for reaching out to Harbour Dental Studio! Our team would be delighted to assist you further.";
      const lower = text.toLowerCase();

      if (lower.includes('hours') || fontMatch(lower, ['open', 'opening', 'time', 'when'])) {
        replyText = "Harbour Dental Studio in Hobart is open Monday to Friday from 8:00am to 6:00pm, and Saturdays from 9:00am to 1:00pm. We are closed on Sundays.";
      } else if (lower.includes('emergenc') || fontMatch(lower, ['pain', 'toothache', 'broken', 'chipped', 'urgent'])) {
        replyText = "For emergency dental care in Hobart, we hold daily reserve appointments! Please call our emergency triage line immediately at (03) 6100 0000 or submit an emergency callback request.";
      } else if (lower.includes('whiten') || lower.includes('cost') || fontMatch(lower, ['price', 'fee', 'cosmetic'])) {
        replyText = "We offer both professional in-chair teeth whitening and custom take-home whitening kits. In-chair whitening starts from $550. We also provide transparent treatment plans before any procedure.";
      } else if (fontMatch(lower, ['book', 'appointment', 'schedule', 'check-up', 'clean', 'visit'])) {
        replyText = "You can book directly using our online scheduler! Or I can take your name, phone number, and preferred day, and our receptionist will confirm your slot right away.";
      }

      const aiMsg: Message = {
        sender: 'ai',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3000);
    }, 1200);
  };

  function fontMatch(str: string, words: string[]) {
    return words.some(w => str.includes(w));
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-lg overflow-hidden flex flex-col h-[620px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-navy via-navy-mid to-navy p-4 px-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-teal/20 border border-teal/40 flex items-center justify-center text-teal">
                <Bot size={22} />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald border-2 border-navy rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white leading-none">Harbour AI Receptionist</h3>
                <span className="bg-teal/20 text-teal border border-teal/30 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                  Virtual Assistant
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">24/7 Dental Support Demo · Ironbond Digital</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsVoiceMode(!isVoiceMode)}
              className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                isVoiceMode ? 'bg-teal text-white' : 'bg-white/10 hover:bg-white/20 text-white/80'
              }`}
              title="Toggle Voice Mode Demo"
            >
              <Mic size={14} />
              <span className="hidden sm:inline">Voice</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Voice Mode Banner */}
        {isVoiceMode && (
          <div className="bg-teal/10 border-b border-teal/20 px-4 py-2.5 flex items-center justify-between text-xs text-teal">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal animate-ping"></span>
              <span className="font-bold">Virtual Phone Receptionist Preview:</span> Voice speech-to-text active
            </div>
            {isSpeaking && (
              <span className="flex items-center gap-1 font-mono text-[10px] text-emerald bg-emerald/10 px-2 py-0.5 rounded-full font-bold">
                <Volume2 size={12} /> Speaking Audio...
              </span>
            )}
          </div>
        )}

        {/* Message Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-teal text-white rounded-br-none shadow-sm'
                    : 'bg-white text-navy border border-slate-200/80 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="flex items-center gap-1.5 font-bold text-[11px] text-teal mb-1">
                    <Sparkles size={12} /> Harbour AI Receptionist
                  </div>
                )}
                {msg.text}
              </div>
              <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white border border-slate-200 rounded-2xl px-4 py-3 max-w-[140px]">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-bounce [animation-delay:0.4s]"></span>
              <span className="text-[11px] font-semibold text-slate-400">Typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 bg-white border-t border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2">
          {quickPrompts.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="text-[11px] font-medium bg-slate-100 hover:bg-teal/10 hover:text-teal text-slate-700 px-3 py-1.5 rounded-full border border-slate-200/80 transition-all flex-shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
          <input
            type="text"
            placeholder={isVoiceMode ? "Voice input simulated... or type here" : "Ask a question about Harbour Dental Studio..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-slate-50/50 text-navy"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-xl bg-teal hover:bg-teal/90 disabled:opacity-50 text-white flex items-center justify-center transition-colors shadow-sm"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>

        {/* Ironbond Demo Footer Note */}
        <div className="bg-slate-900 text-slate-400 px-4 py-2 text-[10px] flex items-center justify-between">
          <span className="flex items-center gap-1">
            <CheckCircle2 size={10} className="text-emerald" /> AI Phone & Web Receptionist Integration
          </span>
          <span className="text-teal font-bold">Powered by Ironbond Digital</span>
        </div>
      </div>
    </div>
  );
};

export default AIReceptionistModal;
