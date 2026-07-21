import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Can you help me understand and use my NDIS plan?',
    a: 'Yes — this is exactly what our Support Coordinators do. They\'ll explain your plan in plain language, help you identify the right supports, connect you with providers, and ensure your funding is used in a way that works toward your goals. If you\'re self-managed, plan-managed, or NDIA-managed, we can work with any plan type.'
  },
  {
    q: 'Do I need to be plan-managed to use Horizon\'s services?',
    a: 'No. We support participants who are NDIA-managed, plan-managed, and self-managed. If you\'re not sure which funding management type suits you best, our team can walk you through the differences and help you make the right choice for your situation.'
  },
  {
    q: 'Can I change from my current provider to Horizon?',
    a: 'Yes — you can change NDIS providers at any time. You\'ll need to give notice as per your existing service agreement (usually 2 to 4 weeks), and then we\'ll take care of everything to make the transition smooth. Our team handles the paperwork and helps ensure there\'s no gap in your supports.'
  },
  {
    q: 'Do you service my suburb?',
    a: 'We operate across Metropolitan Melbourne and many parts of regional Victoria — including Geelong, Ballarat, Bendigo, and Shepparton. If you\'re not sure, call us on 1300 467 426 or use our contact form and we\'ll confirm coverage in your area within one business day.'
  },
  {
    q: 'How quickly can my supports start?',
    a: 'In many cases, we can begin supports within 5 to 10 business days of completing your service agreement. For urgent situations — such as hospital discharge or carer breakdown — we can often arrange supports faster. Call our team directly and we\'ll do everything we can to move quickly.'
  },
  {
    q: 'What happens if my needs change after we start?',
    a: 'We review every participant\'s supports regularly — typically every 3 to 6 months — and whenever your circumstances change. If you need more support, different services, or your NDIS plan is due for review, your coordinator will work with you to adjust your supports and if needed, request a plan review with the NDIA.'
  },
  {
    q: 'Can you support my child with early childhood intervention?',
    a: 'Yes. Our Early Childhood team works with children under 9 who have a confirmed disability or developmental delay — including those who don\'t yet have an NDIS plan. We partner with families to deliver therapy, build capacity, and connect children with the right services at the right time in their development.'
  },
  {
    q: 'Do you offer after-hours or emergency support?',
    a: 'Yes. We have an after-hours emergency line available 7 days a week for existing participants. For SIL participants, staff are on-site or on-call 24/7. Emergency support requests are prioritised, and our on-call coordinator will contact you as quickly as possible.'
  },
  {
    q: 'What does a support coordinator actually do day-to-day?',
    a: 'Your support coordinator is your guide to the NDIS. On a day-to-day basis, they connect you with providers, handle service agreements, monitor your budget, prepare for plan reviews, and advocate for your needs. They act as a bridge between you and the system — so you don\'t have to navigate it alone.'
  },
  {
    q: 'How do I make a referral for someone else?',
    a: 'You can make a referral using our contact form on this page, by calling 1300 467 426, or by emailing hello@horizonsupport.com.au. Please include the participant\'s name, location, current NDIS plan type, and the supports they\'re looking for. We\'ll follow up within one business day.'
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Common Questions</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            Questions about<br />our services.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Real answers to the questions participants and families ask most. If you don't see yours here, call us — we're happy to help.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ staggerChildren: 0.06 }}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                className={`bg-slate-50 rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i ? 'border-teal/30 shadow-md shadow-teal/5' : 'border-slate-100 hover:border-teal/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-base font-bold text-navy">{faq.q}</span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-teal text-white' : 'bg-slate-200 text-slate-500'}`}>
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-slate-400 text-sm mt-10"
          >
            Still have questions? Call us on{' '}
            <a href="tel:1300467426" className="text-teal font-bold hover:underline">1300 467 426</a>{' '}
            or{' '}
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-teal font-bold hover:underline"
            >
              send us a message →
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
