import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileStickyBar from '../components/MobileStickyBar';
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles } from 'lucide-react';


interface BookingPageProps {
  onOpenAIReceptionist: () => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ onOpenAIReceptionist }) => {
  const [patientType, setPatientType] = useState<'new' | 'existing'>('new');
  const [reason, setReason] = useState('Dental Check-up & Clean');
  const [practitioner, setPractitioner] = useState('Dr. Sophie Mitchell (Principal Dentist)');
  const [prefDay, setPrefDay] = useState('2026-08-10');
  const [prefTime, setPrefTime] = useState('09:30 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refNo, setRefNo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const randomRef = 'HDS-' + Math.floor(100000 + Math.random() * 900000);
    setRefNo(randomRef);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-navy font-sans">
      <Header onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-32 lg:pt-36 pb-20">
        <section className="bg-slate-50 py-12 border-b border-slate-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
            <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Online Appointment System
            </span>
            <h1 className="text-4xl font-black text-navy">Book an Appointment</h1>
            <p className="text-sm text-slate-600 mt-2">
              Request your preferred visit date and time at Harbour Dental Studio in Hobart.
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-lg">
            
            {submitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-emerald/10 border-2 border-emerald text-emerald rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-2">
                  <span className="bg-teal/10 text-teal text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                    Appointment Requested
                  </span>
                  <h2 className="text-3xl font-black text-navy">Thank You, {name}!</h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    We have received your appointment request for <strong>{reason}</strong> on <strong>{prefDay}</strong> at <strong>{prefTime}</strong>.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-md mx-auto text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Reference Code:</span>
                    <span className="font-mono font-bold text-navy">{refNo}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Practitioner:</span>
                    <span className="font-bold text-navy">{practitioner}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">Location:</span>
                    <span className="font-bold text-navy">123 Harbour St, Hobart</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Patient Status:</span>
                    <span className="font-bold text-emerald">{patientType === 'new' ? 'New Patient' : 'Existing Patient'}</span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-800 max-w-md mx-auto">
                  <Sparkles size={14} className="inline mr-1 text-amber-600" />
                  <strong>Ironbond Digital Demo:</strong> In a live production environment, this integrates seamlessly with your dental practice management software (PMS).
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-navy text-white font-bold px-8 py-3 rounded-xl hover:bg-navy-mid transition-colors text-xs"
                >
                  Make Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Patient Type */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-navy">Are you a new or existing patient? *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPatientType('new')}
                      className={`py-3.5 px-4 rounded-xl border text-xs font-bold transition-all text-center ${
                        patientType === 'new'
                          ? 'border-teal bg-teal/10 text-navy ring-2 ring-teal/30'
                          : 'border-slate-200 text-slate-600 bg-slate-50'
                      }`}
                    >
                      New Patient
                    </button>

                    <button
                      type="button"
                      onClick={() => setPatientType('existing')}
                      className={`py-3.5 px-4 rounded-xl border text-xs font-bold transition-all text-center ${
                        patientType === 'existing'
                          ? 'border-teal bg-teal/10 text-navy ring-2 ring-teal/30'
                          : 'border-slate-200 text-slate-600 bg-slate-50'
                      }`}
                    >
                      Existing Patient
                    </button>
                  </div>
                </div>

                {/* 2. Reason for Appointment */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-navy">Reason for Appointment *</label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white font-medium text-navy"
                  >
                    <option value="Dental Check-up & Clean">Dental Check-up & Clean</option>
                    <option value="General Dentistry & Fillings">General Dentistry & Fillings</option>
                    <option value="Emergency Dental Care">Emergency Dental Care</option>
                    <option value="Cosmetic Dentistry Consultation">Cosmetic Dentistry Consultation</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Dental Implants Consultation">Dental Implants Consultation</option>
                    <option value="Clear Aligners Consultation">Clear Aligners Consultation</option>
                    <option value="Children's Dentistry">Children's Dentistry</option>
                  </select>
                </div>

                {/* 3. Practitioner */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-navy">Preferred Practitioner</label>
                  <select
                    value={practitioner}
                    onChange={(e) => setPractitioner(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white font-medium text-navy"
                  >
                    <option value="Dr. Sophie Mitchell (Principal Dentist)">Dr. Sophie Mitchell (Principal Dentist)</option>
                    <option value="Dr. James Carter (Dentist)">Dr. James Carter (Dentist)</option>
                    <option value="Sarah Jenkins (Senior Dental Hygienist)">Sarah Jenkins (Senior Dental Hygienist)</option>
                    <option value="First Available Practitioner">First Available Practitioner</option>
                  </select>
                </div>

                {/* 4. Preferred Day & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy mb-2 flex items-center gap-1.5">
                      <Calendar size={14} className="text-teal" /> Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      min="2026-08-04"
                      value={prefDay}
                      onChange={(e) => setPrefDay(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-2 flex items-center gap-1.5">
                      <Clock size={14} className="text-teal" /> Preferred Time *
                    </label>
                    <select
                      value={prefTime}
                      onChange={(e) => setPrefTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white font-medium"
                    >
                      <option value="08:30 AM">08:30 AM</option>
                      <option value="09:30 AM">09:30 AM</option>
                      <option value="10:45 AM">10:45 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:15 PM">01:15 PM</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="03:45 PM">03:45 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* 5. Contact Details */}
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                      <Phone size={14} className="text-teal" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0400 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">Additional Notes / Symptoms (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Describe any concerns or preferences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-teal hover:bg-teal/90 text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md shadow-teal/20 flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={18} /> REQUEST APPOINTMENT
                  </button>
                </div>
              </form>
            )}

          </div>
        </section>
      </main>

      <Footer onOpenAIReceptionist={onOpenAIReceptionist} />
      <MobileStickyBar onOpenBooking={() => {}} onOpenAIReceptionist={onOpenAIReceptionist} />
    </div>
  );
};

export default BookingPage;
