import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';


interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [patientType, setPatientType] = useState<'new' | 'existing'>('new');
  const [appointmentType, setAppointmentType] = useState(initialService || 'Dental Check-up & Clean');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning');
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const appointmentOptions = [
    'Dental Check-up & Clean',
    'General Dentistry',
    'Emergency Dental',
    'Cosmetic Dentistry',
    'Teeth Whitening',
    'Clear Aligners Consultation',
    'Dental Implant Consultation',
    "Children's Dentistry",
    'Other',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!appointmentType) {
      errs.appointmentType = 'Please select an appointment type.';
    }
    if (!preferredDate) {
      errs.preferredDate = 'Please select a preferred date.';
    }
    if (!firstName.trim()) {
      errs.firstName = 'Please enter your first name.';
    }
    if (!phone.trim() || phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      errs.email = 'Please enter a valid email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fade-in font-sans">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-charcoal/10 w-full max-w-2xl overflow-hidden relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-charcoal px-6 py-5 text-white flex items-center justify-between border-b border-charcoal-mid">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-forest text-white flex items-center justify-center font-bold">
              <Calendar size={18} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal text-white leading-none">Harbour Dental Studio</h3>
              <p className="text-[11px] text-sand font-medium uppercase tracking-wider mt-1">
                Hobart Practice · Online Scheduling
              </p>
            </div>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-ivory/40">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-forest/10 border-2 border-forest text-forest rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 size={36} />
              </div>

              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-normal text-charcoal">
                  Thanks — we've received your request.
                </h2>
                <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
                  One of our team members will be in touch shortly to confirm your appointment details.
                </p>
              </div>

              <div className="bg-white border border-charcoal/10 rounded-2xl p-5 max-w-md mx-auto text-left text-xs space-y-2.5 shadow-sm">
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal-muted font-medium">Patient:</span>
                  <span className="font-bold text-charcoal">{firstName} {lastName}</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal-muted font-medium">Appointment:</span>
                  <span className="font-bold text-forest">{appointmentType}</span>
                </div>
                <div className="flex justify-between border-b border-charcoal/10 pb-2">
                  <span className="text-charcoal-muted font-medium">Preferred Time:</span>
                  <span className="font-bold text-charcoal">{preferredDate} ({preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-muted font-medium">Contact Phone:</span>
                  <span className="font-bold text-charcoal">{phone}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleResetAndClose}
                  className="bg-charcoal hover:bg-forest text-white font-sans text-xs font-bold uppercase tracking-widest px-7 py-3.5 transition-colors"
                >
                  Return to Home
                </button>
                <a
                  href="tel:0361000000"
                  className="border border-charcoal/20 hover:border-charcoal text-charcoal font-sans text-xs font-bold uppercase tracking-widest px-7 py-3.5 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={14} className="text-forest" />
                  Call the Clinic
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Heading & Supporting Copy */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal">Book an Appointment</h2>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-1 leading-relaxed">
                  Choose the type of appointment you're looking for and let us know when you'd prefer to visit. Our team will confirm your appointment details.
                </p>
              </div>

              {/* STEP 1 — PATIENT TYPE */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                  Are you a new or existing patient? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPatientType('new')}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all text-center ${
                      patientType === 'new'
                        ? 'border-forest bg-forest text-white shadow-sm'
                        : 'border-charcoal/20 text-charcoal bg-white hover:bg-sand-light'
                    }`}
                  >
                    I'm a New Patient
                  </button>

                  <button
                    type="button"
                    onClick={() => setPatientType('existing')}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all text-center ${
                      patientType === 'existing'
                        ? 'border-forest bg-forest text-white shadow-sm'
                        : 'border-charcoal/20 text-charcoal bg-white hover:bg-sand-light'
                    }`}
                  >
                    I'm an Existing Patient
                  </button>
                </div>
              </div>

              {/* STEP 2 — APPOINTMENT TYPE */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                  What would you like to book? *
                </label>
                <select
                  value={appointmentType}
                  onChange={(e) => setAppointmentType(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-xs font-medium focus:outline-none bg-white text-charcoal ${
                    errors.appointmentType ? 'border-rose-500 ring-1 ring-rose-500' : 'border-charcoal/20 focus:ring-1 focus:ring-forest'
                  }`}
                >
                  <option value="">Select an appointment type</option>
                  {appointmentOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.appointmentType && (
                  <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.appointmentType}
                  </p>
                )}
              </div>

              {/* STEP 3 & STEP 4 — PREFERRED DATE & PREFERRED TIME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                    What day would you prefer? *
                  </label>
                  <input
                    type="date"
                    min="2026-08-04"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="Select a preferred date"
                    className={`w-full px-4 py-3 rounded-xl border text-xs font-medium focus:outline-none bg-white text-charcoal ${
                      errors.preferredDate ? 'border-rose-500 ring-1 ring-rose-500' : 'border-charcoal/20 focus:ring-1 focus:ring-forest'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                    What time works best for you? *
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-forest bg-white text-charcoal"
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="No preference">No preference</option>
                  </select>
                </div>
              </div>

              {/* STEP 5 — PATIENT DETAILS */}
              <div className="space-y-4 pt-2 border-t border-charcoal/10">
                <h3 className="font-serif text-lg font-normal text-charcoal">Your Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal">First Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none bg-white ${
                        errors.firstName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-charcoal/20 focus:ring-1 focus:ring-forest'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/20 text-xs focus:outline-none focus:ring-1 focus:ring-forest bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="04XX XXX XXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none bg-white ${
                        errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-charcoal/20 focus:ring-1 focus:ring-forest'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal">Email Address *</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none bg-white ${
                        errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-charcoal/20 focus:ring-1 focus:ring-forest'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* STEP 6 — ADDITIONAL INFORMATION */}
              <div className="space-y-1 pt-2">
                <label className="block text-xs font-bold text-charcoal">Anything else we should know? (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Tell us briefly about what you'd like help with."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 text-xs focus:outline-none focus:ring-1 focus:ring-forest bg-white"
                />
              </div>

              {/* SUBMISSION & DISCLAIMER */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest py-4 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={16} /> Request Appointment
                </button>

                <p className="text-[11px] text-charcoal-muted text-center leading-relaxed">
                  Submitting this form does not guarantee an appointment. Our team will contact you to confirm availability and appointment details.
                </p>

                <p className="text-[10px] text-charcoal-light text-center flex items-center justify-center gap-1">
                  <ShieldCheck size={12} className="text-forest" />
                  Your information is used only to respond to your appointment enquiry.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
