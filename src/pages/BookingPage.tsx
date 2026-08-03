import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileStickyBar from '../components/MobileStickyBar';
import { Phone, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

import { Link } from 'react-router-dom';

interface BookingPageProps {
  onOpenAIReceptionist: () => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ onOpenAIReceptionist }) => {
  const [patientType, setPatientType] = useState<'new' | 'existing'>('new');
  const [appointmentType, setAppointmentType] = useState('Dental Check-up & Clean');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning');
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans">
      <Header onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-32 lg:pt-40 pb-24">
        {/* Page Hero */}
        <section className="py-12 border-b border-charcoal/10 bg-white">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block mb-3">
              ONLINE APPOINTMENT REQUEST
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal">
              Book an Appointment
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-2 leading-relaxed font-sans">
              Choose the type of appointment you're looking for and let us know when you'd prefer to visit. Our team will confirm your appointment details.
            </p>
          </div>
        </section>

        {/* Form Container */}
        <section className="py-16 container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="bg-white rounded-3xl border border-charcoal/10 p-8 lg:p-12 shadow-lg">
            
            {submitted ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-forest/10 border-2 border-forest text-forest rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-3xl font-normal text-charcoal">
                    Thanks — we've received your request.
                  </h2>
                  <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed font-sans">
                    One of our team members will be in touch shortly to confirm your appointment details.
                  </p>
                </div>

                <div className="bg-ivory border border-charcoal/10 rounded-2xl p-6 max-w-md mx-auto text-left text-xs space-y-2.5 font-sans">
                  <div className="flex justify-between border-b border-charcoal/10 pb-2">
                    <span className="text-charcoal-muted font-medium">Patient:</span>
                    <span className="font-bold text-charcoal">{firstName} {lastName}</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/10 pb-2">
                    <span className="text-charcoal-muted font-medium">Appointment Type:</span>
                    <span className="font-bold text-forest">{appointmentType}</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/10 pb-2">
                    <span className="text-charcoal-muted font-medium">Preferred Time:</span>
                    <span className="font-bold text-charcoal">{preferredDate} ({preferredTime})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-muted font-medium">Phone:</span>
                    <span className="font-bold text-charcoal">{phone}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/"
                    className="bg-charcoal hover:bg-forest text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors text-center"
                  >
                    Return to Home
                  </Link>

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
              <form onSubmit={handleSubmit} className="space-y-8 font-sans">
                
                {/* STEP 1 — PATIENT TYPE */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
                    Are you a new or existing patient? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPatientType('new')}
                      className={`py-3.5 px-4 rounded-xl border text-xs font-bold transition-all text-center ${
                        patientType === 'new'
                          ? 'border-forest bg-forest text-white shadow-sm'
                          : 'border-charcoal/20 text-charcoal bg-ivory hover:bg-sand-light'
                      }`}
                    >
                      I'm a New Patient
                    </button>

                    <button
                      type="button"
                      onClick={() => setPatientType('existing')}
                      className={`py-3.5 px-4 rounded-xl border text-xs font-bold transition-all text-center ${
                        patientType === 'existing'
                          ? 'border-forest bg-forest text-white shadow-sm'
                          : 'border-charcoal/20 text-charcoal bg-ivory hover:bg-sand-light'
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
                    className={`w-full px-4 py-3.5 rounded-xl border text-xs font-medium focus:outline-none bg-white text-charcoal ${
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
                      className={`w-full px-4 py-3.5 rounded-xl border text-xs font-medium focus:outline-none bg-white text-charcoal ${
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
                      className="w-full px-4 py-3.5 rounded-xl border border-charcoal/20 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-forest bg-white text-charcoal"
                    >
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="No preference">No preference</option>
                    </select>
                  </div>
                </div>

                {/* STEP 5 — PATIENT DETAILS */}
                <div className="space-y-4 pt-4 border-t border-charcoal/10">
                  <h3 className="font-serif text-xl font-normal text-charcoal">Your Details</h3>
                  
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
                    rows={3}
                    placeholder="Tell us briefly about what you'd like help with."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 text-xs focus:outline-none focus:ring-1 focus:ring-forest bg-white"
                  />
                </div>

                {/* SUBMISSION */}
                <div className="space-y-3 pt-4">
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
        </section>
      </main>

      <Footer onOpenAIReceptionist={onOpenAIReceptionist} />
      <MobileStickyBar onOpenBooking={() => {}} onOpenAIReceptionist={onOpenAIReceptionist} />
    </div>
  );
};

export default BookingPage;
