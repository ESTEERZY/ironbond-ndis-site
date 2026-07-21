import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
    <section id="contact" className="py-24 bg-charcoal border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-charcoal to-charcoal"></div>

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
              Begin Your <span className="text-gold">Journey.</span>
            </h2>

            <p className="text-xl text-white/60 font-medium leading-relaxed tracking-tight">
              Tell us about your project. Our consultants will respond within one business day.
            </p>

            {/* Process Steps */}
            <div className="space-y-6 pt-6">
              {[
                { num: '01', label: 'Consultation', desc: 'Discuss vision and budget.' },
                { num: '02', label: 'Design', desc: 'Tailored architectural drafting.' },
                { num: '03', label: 'Construction', desc: 'Precision build. Real-time updates.' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-gold flex items-center justify-center rounded-[2px] text-sm font-black">
                    {item.num}
                  </div>
                  <div>
                    <p className="text-base font-bold text-white">{item.label}</p>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-white/5 p-10 lg:p-12 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)] rounded-[2px]"
          >
            <h3 className="text-3xl font-bold text-white mb-2">Request a Consultation</h3>
            <p className="text-lg text-white/60 mb-8 font-medium tracking-tight">Share your vision. We will be in touch.</p>

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
                    className="w-full px-5 py-4 bg-white/5 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all rounded-[2px]"
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
                    className="w-full px-5 py-4 bg-white/5 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all rounded-[2px]"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                  Estimated Budget *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/5 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all rounded-[2px]"
                >
                  <option value="" disabled>Select a range</option>
                  <option value="500k_1m">$500k – $1M</option>
                  <option value="1m_2m">$1M – $2M</option>
                  <option value="2m_5m">$2M – $5M</option>
                  <option value="over_5m">$5M+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                  Tell Us Your Vision *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-white/5 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none rounded-[2px]"
                  placeholder="Describe your dream home, location, style preferences..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full bg-transparent border border-gold/50 text-gold px-4 md:px-10 py-4 md:py-5 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-500 inline-flex items-center justify-center gap-2 md:gap-3 shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] rounded-[2px] whitespace-nowrap"
                >
                  Start My Project
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={20} />
                </button>
              </div>

              <div className="flex justify-center pt-4">
                <p className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-[2px] text-xs font-semibold text-white tracking-wide">
                  <span className="text-gold font-black tracking-tighter">//</span>
                  YOUR DATA IS ENCRYPTED AND CONFIDENTIAL. WE RESPECT YOUR PRIVACY.
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
