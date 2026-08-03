import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactProps {
  onOpenBooking?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!name.trim()) {
      errs.name = 'Please enter your full name.';
    }
    if (!phone.trim() || phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (email.trim() && (!email.includes('@') || !email.includes('.'))) {
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
    <section id="contact" className="py-20 bg-ivory relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block mb-3">
            CONTACT & LOCATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal mb-3">
            Visit Harbour Dental Studio
          </h2>
          <p className="text-sm text-charcoal-muted font-sans leading-relaxed">
            Located conveniently in Hobart, our clinic is open 6 days a week. Get in touch with our team or schedule your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact Information & Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-charcoal/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-serif text-xl font-normal text-charcoal border-b border-charcoal/10 pb-3">
                Clinic Information
              </h3>

              <div className="space-y-5 font-sans">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-ivory text-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">Address</h4>
                    <p className="text-sm font-bold text-charcoal mt-0.5">Harbour Dental Studio</p>
                    <p className="text-xs text-charcoal-muted">123 Harbour Street, Hobart TAS 7000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-ivory text-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">Phone</h4>
                    <a href="tel:0361000000" className="text-sm font-bold text-forest hover:underline mt-0.5 block">
                      (03) 6100 0000
                    </a>
                    <p className="text-[11px] text-charcoal-light">Triage line open during clinic hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-ivory text-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">Email</h4>
                    <a href="mailto:hello@harbourdentalstudio.com.au" className="text-sm font-bold text-charcoal hover:text-forest mt-0.5 block">
                      hello@harbourdentalstudio.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-2 border-t border-charcoal/10">
                  <div className="w-9 h-9 rounded-full bg-ivory text-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-xs font-bold text-charcoal-muted uppercase tracking-wider mb-1">Opening Hours</h4>
                    <div className="text-xs text-charcoal space-y-1 font-medium">
                      <div className="flex justify-between border-b border-charcoal/5 pb-1">
                        <span>Monday – Friday:</span>
                        <span className="font-bold text-charcoal">8:00am – 6:00pm</span>
                      </div>
                      <div className="flex justify-between border-b border-charcoal/5 pb-1">
                        <span>Saturday:</span>
                        <span className="font-bold text-charcoal">9:00am – 1:00pm</span>
                      </div>
                      <div className="flex justify-between text-charcoal-muted">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0361000000"
                  className="flex-1 bg-charcoal hover:bg-forest text-white font-sans font-bold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
                >
                  <Phone size={14} className="text-sand" /> Call Clinic
                </a>
                {onOpenBooking && (
                  <button
                    onClick={() => onOpenBooking()}
                    className="flex-1 bg-forest hover:bg-forest-light text-white font-sans font-bold py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors uppercase tracking-wider shadow-sm"
                  >
                    <Calendar size={14} /> Book Online
                  </button>
                )}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-sand-light border border-charcoal/10 rounded-3xl h-56 relative overflow-hidden flex flex-col justify-end p-4 group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Map view of Hobart Waterfront"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-75"
              />
              <div className="absolute inset-0 bg-charcoal/30"></div>
              
              <div className="relative z-10 text-white flex items-center justify-between font-sans">
                <div>
                  <p className="text-xs font-bold flex items-center gap-1 text-sand">
                    <MapPin size={14} /> 123 Harbour St, Hobart
                  </p>
                  <p className="text-[11px] text-slate-200">Central Hobart · On-site parking available</p>
                </div>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                  Map View
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-charcoal/10 rounded-3xl p-6 sm:p-10 shadow-sm font-sans">
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">Send an Enquiry</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mb-6">
              Have a question for our Hobart reception team? Fill out the form below and we will get back to you promptly.
            </p>

            {submitted ? (
              <div className="bg-forest/10 border-2 border-forest text-forest rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 size={40} className="text-forest mx-auto" />
                <h4 className="font-serif text-2xl text-charcoal">Enquiry Submitted</h4>
                <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Your message regarding <strong>{service}</strong> has been received by our reception team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-charcoal text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-forest transition-colors uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none bg-ivory/50 ${
                        errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-charcoal/20 focus:ring-1 focus:ring-forest'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="04XX XXX XXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none bg-ivory/50 ${
                        errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-charcoal/20 focus:ring-1 focus:ring-forest'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="john@example.com.au"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none bg-ivory/50 ${
                      errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-charcoal/20 focus:ring-1 focus:ring-forest'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">Enquiry Subject</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 text-xs focus:outline-none focus:ring-1 focus:ring-forest bg-ivory/50 text-charcoal font-medium"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Check-up & Clean">Check-up & Clean</option>
                    <option value="Emergency Dental">Emergency Dental</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Clear Aligners">Clear Aligners</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1.5">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how our dental team can help you..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 text-xs focus:outline-none focus:ring-1 focus:ring-forest bg-ivory/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest py-4 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={15} /> Submit Enquiry
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
