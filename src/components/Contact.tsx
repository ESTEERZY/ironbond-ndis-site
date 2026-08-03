import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';


interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Contact & Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
            Visit Harbour Dental Studio.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Located conveniently in Hobart, our clinic is open 6 days a week. Get in touch with our team or schedule your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact Information & Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-navy border-b border-slate-200 pb-3">
                Clinic Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</h4>
                    <p className="text-sm font-bold text-navy mt-0.5">Harbour Dental Studio</p>
                    <p className="text-xs sm:text-sm text-slate-600">123 Harbour Street, Hobart TAS 7000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</h4>
                    <a href="tel:0361000000" className="text-sm font-bold text-teal hover:underline mt-0.5 block">
                      (03) 6100 0000
                    </a>
                    <p className="text-[11px] text-slate-500">Triage line open during clinic hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</h4>
                    <a href="mailto:hello@harbourdentalstudio.com.au" className="text-sm font-bold text-navy hover:text-teal mt-0.5 block">
                      hello@harbourdentalstudio.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-2 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Opening Hours</h4>
                    <div className="text-xs text-slate-700 space-y-1 font-medium">
                      <div className="flex justify-between">
                        <span>Monday – Friday:</span>
                        <span className="font-bold text-navy">8:00am – 6:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-bold text-navy">9:00am – 1:00pm</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
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
                  className="flex-1 bg-navy hover:bg-navy-mid text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone size={14} className="text-teal" /> Call (03) 6100 0000
                </a>
                <button
                  onClick={onOpenBooking}
                  className="flex-1 bg-teal hover:bg-teal/90 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Calendar size={14} /> Book Online
                </button>
              </div>

              {/* Demo Badge */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-800 flex items-start gap-2">
                <AlertCircle size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Demo Disclaimer:</strong> Harbour Dental Studio is a fictional dental practice website concept created by <strong>Ironbond Digital</strong> for demonstration purposes.
                </span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-100 border border-slate-200 rounded-3xl h-56 relative overflow-hidden flex flex-col justify-end p-4 group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Map view of Hobart Waterfront"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent"></div>
              
              <div className="relative z-10 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold flex items-center gap-1 text-teal-light">
                    <MapPin size={14} /> 123 Harbour St, Hobart
                  </p>
                  <p className="text-[11px] text-slate-300">Central Hobart · On-site parking available</p>
                </div>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                  Map View
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h3 className="text-2xl font-black text-navy mb-2">Send an Enquiry</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Have a question for our reception team? Fill out the form below and we will get back to you promptly.
            </p>

            {submitted ? (
              <div className="bg-emerald/10 border-2 border-emerald text-emerald-900 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 size={40} className="text-emerald mx-auto" />
                <h4 className="text-xl font-bold text-navy">Enquiry Received (Demo)</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.service}</strong> has been submitted.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-navy text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-navy-mid transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5">Enquiry Subject</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white text-navy font-medium"
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
                  <label className="block text-xs font-bold text-navy mb-1.5">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can our dental team help you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal hover:bg-teal/90 text-white font-bold py-4 rounded-xl transition-all shadow-md shadow-teal/20 text-sm flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Enquiry
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
