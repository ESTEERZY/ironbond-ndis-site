import React, { useState } from 'react';
import { ChevronDown, Phone, Calendar } from 'lucide-react';


interface FAQSectionProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'Harbour Dental Studio offers comprehensive dental care including general dental check-ups, professional cleans, fillings, emergency dental care, cosmetic dentistry, teeth whitening, clear aligner therapy, dental implants, and gentle children’s dentistry.',
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can easily book online using our "Book an Appointment" scheduling tool on this website, or call our friendly Hobart clinic team directly at (03) 6100 0000 during operating hours.',
    },
    {
      question: 'Do you accept new patients?',
      answer: 'Yes! We warmly welcome new individual and family patients to Harbour Dental Studio. During your first visit, we conduct a comprehensive oral health assessment and discuss your dental history and goals.',
    },
    {
      question: 'What should I do if I have a dental emergency?',
      answer: 'If you are experiencing severe dental pain, a broken tooth, or dental trauma, call our clinic immediately at (03) 6100 0000. We reserve emergency slots every business day so we can assess and assist you as quickly as possible.',
    },
    {
      question: 'Can I reschedule my appointment?',
      answer: 'Yes, you can easily reschedule or cancel your appointment by giving us a call at least 24 hours in advance so we can offer the slot to another patient.',
    },
    {
      question: 'Do you offer payment options?',
      answer: 'Yes. We accept all major credit cards, EFTPOS, and private health insurance claims via HICAPS for on-the-spot claiming. We also discuss clear treatment quotes prior to any major procedures.',
    },
    {
      question: 'Do you offer clear aligners?',
      answer: 'Yes, we provide clear aligner consultation and treatment for patients looking for a subtle, comfortable alternative to traditional braces to straighten their teeth.',
    },
    {
      question: 'How do I contact the clinic?',
      answer: 'You can reach Harbour Dental Studio by calling (03) 6100 0000, emailing hello@harbourdentalstudio.com.au, or visiting us at 123 Harbour Street, Hobart TAS 7000.',
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
            Everything you need to know.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Find quick answers to common questions about our Hobart clinic services, appointments, and care.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-navy">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-teal text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 max-w-xl mx-auto text-center bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-navy text-sm">Have a question not listed here?</h4>
            <p className="text-xs text-slate-500">Our Hobart reception team is happy to help.</p>
          </div>
          <div className="flex gap-2">
            <a
              href="tel:0361000000"
              className="bg-slate-100 hover:bg-slate-200 text-navy font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
            >
              <Phone size={14} className="text-teal" /> Call Us
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-teal hover:bg-teal/90 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
            >
              <Calendar size={14} /> Book Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
