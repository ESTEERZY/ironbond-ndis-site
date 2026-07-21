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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-navy border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal/5 via-navy to-navy"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >

            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
              Start Your Free <span className="text-teal">NDIS Audit.</span>
            </h2>

            <p className="text-xl text-white/60 font-medium leading-relaxed tracking-tight">
              Tell us about your organisation. Our NDIS digital specialists will respond within one business day with a tailored compliance gap report.
            </p>

            {/* Process Steps */}
            <div className="space-y-6 pt-6">
              {[
                { num: '01', label: 'Gap Analysis', desc: 'We audit your current digital footprint against NDIS and WCAG standards.' },
                { num: '02', label: 'Platform Build', desc: 'Compliant, participant-ready platform engineered to your workflow.' },
                { num: '03', label: 'Go Live', desc: 'Launch with confidence. Ongoing monitoring and sector support included.' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-light text-teal flex items-center justify-center rounded-[2px] text-sm font-black border border-teal/20">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-base font-bold text-white">{item.label}</p>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Notice */}
            <div className="flex items-start gap-3 p-4 bg-emerald/5 border border-emerald/20 rounded-[2px]">
              <ShieldCheck size={20} className="text-emerald flex-shrink-0 mt-0.5" />
              <p className="text-sm text-emerald/90 font-medium leading-relaxed">
                <span className="font-bold">NDIS Quality &amp; Safeguards Commission Aligned.</span> Every platform we build meets regulatory requirements for registered NDIS providers.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-navy-light p-10 lg:p-12 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)] rounded-[2px]"
          >
            <h3 className="text-3xl font-bold text-white mb-2">Request My Free Audit</h3>
            <p className="text-lg text-white/60 mb-8 font-medium tracking-tight">Tell us about your NDIS organisation. We will be in touch within one business day.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-navy/60 text-white text-base border border-white/10 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all rounded-[2px]"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-navy/60 text-white text-base border border-white/10 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all rounded-[2px]"
                    placeholder="jane@myndisprovider.com.au"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                  Provider Type *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-navy/60 text-white text-base border border-white/10 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all rounded-[2px]"
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
                <label htmlFor="message" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                  Tell Us Your Biggest Digital Challenge *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-navy/60 text-white text-base border border-white/10 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all resize-none rounded-[2px]"
                  placeholder="E.g. Our intake process is manual, our website isn't accessible, we're facing a registration renewal and need to get compliant fast..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full bg-teal text-navy px-4 md:px-10 py-4 md:py-5 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-teal/90 transition-all duration-500 inline-flex items-center justify-center gap-2 md:gap-3 shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] rounded-[2px] whitespace-nowrap"
                >
                  Request My Free Audit
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={20} />
                </button>
              </div>

              <div className="flex justify-center pt-4">
                <p className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/5 border border-emerald/20 rounded-[2px] text-xs font-semibold text-emerald/80 tracking-wide">
                  <span className="text-emerald font-black tracking-tighter">✓</span>
                  PROTECTED UNDER THE PRIVACY ACT 1988 (CTH) &amp; NDIS PRACTICE STANDARDS.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
