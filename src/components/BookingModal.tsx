import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(initialService || 'Dental Check-up & Clean');
  const [dentist, setDentist] = useState('Dr. Sophie Mitchell (Principal Dentist)');
  const [date, setDate] = useState('2026-08-10');
  const [time, setTime] = useState('09:30 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isNewPatient, setIsNewPatient] = useState(true);
  const [notes, setNotes] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const servicesList = [
    'Dental Check-up & Clean',
    'General Dentistry & Fillings',
    'Emergency Dental Care',
    'Cosmetic Dentistry',
    'Teeth Whitening',
    'Dental Implants Consultation',
    'Clear Aligners Consultation',
    "Children's Dentistry",
  ];

  const dentistsList = [
    'Dr. Sophie Mitchell (Principal Dentist)',
    'Dr. James Carter (Dentist)',
    'Sarah Jenkins (Senior Dental Hygienist)',
    'First Available Practitioner',
  ];

  const timeSlots = [
    '08:30 AM', '09:30 AM', '10:45 AM', '11:30 AM',
    '01:15 PM', '02:30 PM', '03:45 PM', '04:30 PM',
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) {
      if (!name || !phone) return;
      const randomRef = 'HDS-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setStep(4);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-navy via-navy-mid to-navy p-6 text-white flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal/20 border border-teal/40 flex items-center justify-center text-teal">
              <Calendar size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white leading-none">Harbour Dental Studio</h3>
                <span className="bg-teal/20 border border-teal/30 text-teal text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                  Online Booking
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">Book your appointment at 123 Harbour Street, Hobart</p>
            </div>
          </div>
          <button 
            onClick={resetAndClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span className={step >= 1 ? 'text-teal font-bold' : ''}>1. Service & Dentist</span>
            <ChevronRight size={14} />
            <span className={step >= 2 ? 'text-teal font-bold' : ''}>2. Date & Time</span>
            <ChevronRight size={14} />
            <span className={step >= 3 ? 'text-teal font-bold' : ''}>3. Patient Details</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Select Dental Service</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesList.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setService(item)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                        service === item 
                          ? 'border-teal bg-teal/5 text-navy font-bold shadow-sm' 
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <span>{item}</span>
                      {service === item && <CheckCircle2 size={16} className="text-teal flex-shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">Preferred Practitioner</label>
                <select
                  value={dentist}
                  onChange={(e) => setDentist(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white text-navy font-medium"
                >
                  {dentistsList.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-teal hover:bg-teal/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-teal/20 text-sm flex items-center justify-center gap-2"
                >
                  Select Time & Date <ChevronRight size={16} />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-navy mb-2 flex items-center gap-2">
                  <Calendar size={16} className="text-teal" /> Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min="2026-08-04"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white text-navy font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2 flex items-center gap-2">
                  <Clock size={16} className="text-teal" /> Available Appointment Slots
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                        time === slot
                          ? 'border-teal bg-teal text-white shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-navy bg-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-teal/5 border border-teal/20 rounded-xl text-xs text-slate-600 flex items-start gap-3">
                <ShieldCheck size={18} className="text-teal flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Convenient Reminders:</strong> We send SMS reminders 48 hours prior to your appointment. Free cancellations up to 24 hours in advance.
                </p>
              </div>

              <div className="pt-2 flex justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 text-sm"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-teal hover:bg-teal/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-teal/20 text-sm flex items-center justify-center gap-2"
                >
                  Enter Details <ChevronRight size={16} />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                    <User size={14} className="text-teal" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                    <Phone size={14} className="text-teal" /> Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                  <Mail size={14} className="text-teal" /> Email Address
                </label>
                <input
                  type="email"
                  placeholder="sarah@example.com.au"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                />
              </div>

              <div className="flex items-center gap-3 py-1">
                <input
                  type="checkbox"
                  id="newPatient"
                  checked={isNewPatient}
                  onChange={(e) => setIsNewPatient(e.target.checked)}
                  className="w-4 h-4 rounded text-teal focus:ring-teal"
                />
                <label htmlFor="newPatient" className="text-xs text-slate-700 font-medium cursor-pointer">
                  I am a new patient to Harbour Dental Studio
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">Additional Notes / Symptoms (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Any sensitivity, preferences, or specific concerns..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                />
              </div>

              <div className="pt-3 flex justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 text-sm"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-teal hover:bg-teal/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md shadow-teal/20 text-sm flex items-center justify-center gap-2"
                >
                  Confirm Booking <CheckCircle2 size={16} />
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald/10 border-2 border-emerald text-emerald rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <span className="inline-block bg-teal/10 text-teal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                  Demo Booking Simulated
                </span>
                <h3 className="text-2xl font-black text-navy">Appointment Requested!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Thank you, <strong>{name}</strong>. Your appointment for <strong>{service}</strong> with <strong>{dentist}</strong> on <strong>{date}</strong> at <strong>{time}</strong> has been received.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Booking Reference:</span>
                  <span className="font-mono font-bold text-navy">{bookingRef}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Clinic Address:</span>
                  <span className="font-bold text-navy">123 Harbour St, Hobart</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Status:</span>
                  <span className="font-bold text-emerald">Confirmed (Demo)</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 max-w-md mx-auto">
                <Sparkles size={14} className="inline mr-1 text-amber-600" />
                <strong>Ironbond Digital Demo:</strong> In a live deployment, this connects directly to dental PMS scheduling (Dental4Windows, Exact, Cliniko).
              </div>

              <button
                onClick={resetAndClose}
                className="bg-navy hover:bg-navy-mid text-white font-bold px-8 py-3 rounded-xl transition-all text-sm mt-4"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
