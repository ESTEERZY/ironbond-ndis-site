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
      text: "Hello! Welcome to Harbour Dental Studio. I'm your Virtual Receptionist. How can I assist you today? I can help with clinic hours, service information, emergency advice, or appointment requests.",
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

    setTimeout(() => {
      let replyText = "Thank you for reaching out to Harbour Dental Studio! Our team would be delighted to assist you further.";
      const lower = text.toLowerCase();

      if (lower.includes('hours') || fontMatch(lower, ['open', 'opening', 'time', 'when'])) {
        replyText = "Harbour Dental Studio in Hobart is open Monday to Friday from 8:00am to 6:00pm, and Saturdays from 9:00am to 1:00pm. We are closed on Sundays.";
      } else if (lower.includes('emergenc') || fontMatch(lower, ['pain', 'toothache', 'broken', 'chipped', 'urgent'])) {
        replyText = "For emergency dental care in Hobart, we hold daily reserve appointments! Please call our emergency line immediately at (03) 6100 0000 or submit an emergency booking request.";
      } else if (lower.includes('whiten') || lower.includes('cost') || fontMatch(lower, ['price', 'fee', 'cosmetic'])) {
        replyText = "We offer both professional in-chair teeth whitening and custom take-home whitening kits. In-chair whitening starts from $550. We also provide transparent treatment quotes prior to any procedure.";
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fade-in font-sans">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-charcoal/10 w-full max-w-lg overflow-hidden flex flex-col h-[620px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-charcoal p-4 px-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-forest text-white flex items-center justify-center font-bold">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-white leading-none">Harbour AI Receptionist</h3>
              <p className="text-[10px] text-sand font-mono uppercase tracking-wider mt-1">24/7 Virtual Assistant · Ironbond Digital</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsVoiceMode(!isVoiceMode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 uppercase tracking-wider ${
                isVoiceMode ? 'bg-forest text-white' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
              title="Toggle Voice Mode Demo"
            >
              <Mic size={13} />
              <span>Voice</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close Assistant"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Voice Banner */}
        {isVoiceMode && (
          <div className="bg-forest/10 border-b border-forest/20 px-4 py-2 flex items-center justify-between text-xs text-forest">
            <span className="font-bold">Virtual Phone Receptionist Active</span>
            {isSpeaking && (
              <span className="flex items-center gap-1 font-mono text-[10px] text-forest font-bold">
                <Volume2 size={12} /> Speaking Audio...
              </span>
            )}
          </div>
        )}

        {/* Message Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-ivory/30">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-forest text-white rounded-br-none shadow-sm'
                    : 'bg-white text-charcoal border border-charcoal/10 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.sender === 'ai' && (
                  <div className="flex items-center gap-1.5 font-bold text-[11px] text-forest mb-1">
                    <Sparkles size={12} /> Harbour AI Receptionist
                  </div>
                )}
                {msg.text}
              </div>
              <span className="text-[10px] text-charcoal-light mt-1 px-1">{msg.time}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-charcoal-muted bg-white border border-charcoal/10 rounded-2xl px-4 py-3 max-w-[140px]">
              <span className="w-1.5 h-1.5 rounded-full bg-forest animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-forest animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-forest animate-bounce [animation-delay:0.4s]"></span>
              <span className="text-[11px] font-semibold text-charcoal-muted">Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="p-3 bg-white border-t border-charcoal/10 overflow-x-auto whitespace-nowrap flex gap-2">
          {quickPrompts.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="text-[11px] font-medium bg-ivory hover:bg-sand-light text-charcoal px-3 py-1.5 rounded-full border border-charcoal/10 transition-all flex-shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-charcoal/10 flex items-center gap-2">
          <input
            type="text"
            placeholder={isVoiceMode ? "Voice input simulated... or type question here" : "Ask a question about Harbour Dental Studio..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2.5 rounded-xl border border-charcoal/20 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-forest bg-ivory/50 text-charcoal"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="px-4 py-2.5 rounded-xl bg-forest hover:bg-forest-light disabled:opacity-50 text-white font-bold text-xs transition-colors flex items-center gap-1.5 uppercase tracking-wider"
          >
            <span>Ask</span>
            <Send size={14} />
          </button>
        </div>

        {/* Demo Footer Note */}
        <div className="bg-charcoal text-slate-400 px-4 py-2 text-[10px] flex items-center justify-between">
          <span className="flex items-center gap-1 text-slate-300">
            <CheckCircle2 size={10} className="text-sand" /> Voice & Web Virtual Receptionist Demo
          </span>
          <span className="text-sand font-bold">Powered by Ironbond Digital</span>
        </div>
      </div>
    </div>
  );
};

export default AIReceptionistModal;
