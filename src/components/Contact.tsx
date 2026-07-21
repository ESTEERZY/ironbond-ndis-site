import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  participantName: string;
  service: string;
  suburb: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '', phone: '', email: '', participantName: '', service: '', suburb: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            Ready to get started?<br />We'd love to hear from you.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Whether you're a participant, family member, support coordinator, or hospital discharge planner — reach out today. We respond to all enquiries within one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            {/* Phone */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-teal/25 transition-all shadow-sm">
              <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                <Phone size={18} className="text-teal" />
              </div>
              <h4 className="font-bold text-navy mb-1">Phone</h4>
              <a href="tel:1300467426" className="text-teal font-bold text-lg hover:underline">1300 467 426</a>
              <p className="text-xs text-slate-400 mt-1">Mon – Fri, 8am – 6pm</p>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-semibold">After-hours emergency:</p>
                <a href="tel:0412000000" className="text-sm font-bold text-navy hover:text-teal transition-colors">0412 000 000</a>
              </div>
            </div>
            {/* Email */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-teal/25 transition-all shadow-sm">
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mb-4">
                <Mail size={18} className="text-violet-500" />
              </div>
              <h4 className="font-bold text-navy mb-1">Email</h4>
              <a href="mailto:hello@horizonsupport.com.au" className="text-teal font-semibold text-sm hover:underline break-all">
                hello@horizonsupport.com.au
              </a>
              <p className="text-xs text-slate-400 mt-1">We respond within 1 business day</p>
            </div>
            {/* Office */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-teal/25 transition-all shadow-sm">
              <div className="w-10 h-10 bg-emerald/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin size={18} className="text-emerald" />
              </div>
              <h4 className="font-bold text-navy mb-1">Office</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Level 3, 84 William Street<br />Melbourne VIC 3000</p>
            </div>
            {/* Hours */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <Clock size={18} className="text-amber-500" />
              </div>
              <h4 className="font-bold text-navy mb-3">Office Hours</h4>
              <div className="flex flex-col gap-1.5 text-sm">
                {[['Monday – Friday', '8:00am – 6:00pm'], ['Saturday', '9:00am – 1:00pm'], ['Sunday', 'Closed'], ['After-hours emergency', 'Available 24/7']].map(([day, time]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-slate-500">{day}</span>
                    <span className="font-semibold text-navy">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Referral form (spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-navy/5 p-8">
              <h3 className="text-xl font-black text-navy mb-1">Referral & Enquiry Form</h3>
              <p className="text-sm text-slate-500 mb-7">Complete this form and a member of our team will contact you within one business day.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mb-4">
                    <ShieldCheck size={32} className="text-emerald" />
                  </div>
                  <h4 className="text-xl font-black text-navy mb-2">Thank you — we'll be in touch.</h4>
                  <p className="text-slate-500 text-sm max-w-sm">
                    A member of our team will contact you within one business day to discuss how we can help. If your need is urgent, please call us directly on 1300 467 426.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">Your Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl"
                        placeholder="04XX XXX XXX"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl"
                        placeholder="jane@example.com.au"
                      />
                    </div>
                    <div>
                      <label htmlFor="participantName" className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">Participant Name</label>
                      <input type="text" id="participantName" name="participantName" value={formData.participantName} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl"
                        placeholder="If referring for someone else"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">Service Interested In</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl"
                      >
                        <option value="">Select a service...</option>
                        <option>Support Coordination</option>
                        <option>Core Supports / Daily Living</option>
                        <option>Community Participation</option>
                        <option>Supported Independent Living (SIL)</option>
                        <option>Short-Term Accommodation / Respite</option>
                        <option>Allied Health (OT, Physio, Speech, Psychology)</option>
                        <option>Early Childhood Supports</option>
                        <option>Plan Management</option>
                        <option>Not sure — need advice</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="suburb" className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">Your Suburb / Area</label>
                      <input type="text" id="suburb" name="suburb" value={formData.suburb} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl"
                        placeholder="E.g. Richmond, Doncaster..."
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">Tell Us About Your Needs</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                      className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl resize-none"
                      placeholder="Briefly describe the participant's needs, any current supports, and what you're hoping Horizon can help with..."
                    />
                  </div>
                  <button type="submit"
                    className="w-full bg-teal text-white py-4 text-sm font-bold rounded-xl hover:bg-teal/90 transition-all shadow-lg shadow-teal/20"
                  >
                    Submit Referral / Enquiry
                  </button>
                  <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck size={12} className="text-emerald" />
                    Your information is protected under the Privacy Act 1988 (Cth) — Horizon Support Services Pty Ltd
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
