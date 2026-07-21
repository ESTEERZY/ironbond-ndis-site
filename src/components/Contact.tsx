import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Get started</p>
              <h2 className="text-4xl font-black text-navy leading-tight mb-4">
                Start your free<br />
                <span className="text-teal">NDIS audit.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Tell us about your organisation. Our NDIS digital specialists will respond within one business day with a tailored compliance gap report.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-5">
              {[
                { num: '01', label: 'Gap Analysis', desc: 'We audit your digital footprint against NDIS and WCAG standards.' },
                { num: '02', label: 'Platform Build', desc: 'Compliant, participant-ready platform engineered to your workflow.' },
                { num: '03', label: 'Go Live', desc: 'Launch with confidence. Ongoing monitoring included.' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal/10 border border-teal/20 text-teal flex items-center justify-center rounded-lg text-sm font-black">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{item.label}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Notice */}
            <div className="flex items-start gap-3 p-4 bg-emerald/8 border border-emerald/20 rounded-xl">
              <ShieldCheck size={18} className="text-emerald flex-shrink-0 mt-0.5" />
              <p className="text-sm text-emerald font-semibold leading-relaxed">
                <span className="font-bold">NDIS Quality & Safeguards Commission Aligned.</span> Every platform we build meets regulatory requirements for registered NDIS providers.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <h3 className="text-2xl font-bold text-navy mb-1">Request My Free Audit</h3>
            <p className="text-slate-500 mb-8">We'll be in touch within one business day.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-navy/60 uppercase tracking-widest mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text" id="name" name="name" value={formData.name}
                    onChange={handleChange} required
                    className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-navy/60 uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    type="email" id="email" name="email" value={formData.email}
                    onChange={handleChange} required
                    className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl"
                    placeholder="jane@ndisprovider.com.au"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-xs font-bold text-navy/60 uppercase tracking-widest mb-2">
                  Provider Type *
                </label>
                <select
                  id="budget" name="budget" value={formData.budget}
                  onChange={handleChange} required
                  className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all rounded-xl"
                >
                  <option value="" disabled>Select your provider type</option>
                  <option value="allied_health">Allied Health</option>
                  <option value="support_coordinator">Support Coordinator</option>
                  <option value="plan_manager">Plan Manager</option>
                  <option value="core_supports">Core Supports Provider</option>
                  <option value="other">Other NDIS Organisation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-navy/60 uppercase tracking-widest mb-2">
                  Your Biggest Digital Challenge *
                </label>
                <textarea
                  id="message" name="message" value={formData.message}
                  onChange={handleChange} required rows={4}
                  className="w-full px-4 py-3 bg-slate-50 text-navy text-sm border border-slate-200 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none rounded-xl"
                  placeholder="E.g. Our intake process is manual, our website isn't accessible..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-teal text-white px-6 py-4 text-sm font-bold rounded-xl hover:bg-teal/90 transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-teal/20"
              >
                Request My Free Audit
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>

              <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-2">
                <ShieldCheck size={12} className="text-emerald" />
                Protected under the Privacy Act 1988 (Cth) &amp; NDIS Practice Standards
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
