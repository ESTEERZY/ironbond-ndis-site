import { motion } from 'framer-motion';

const integrations = [
  { name: 'PRODA', abbr: 'PR', desc: 'NDIS payment portal', color: 'bg-blue-600', textColor: 'text-white' },
  { name: 'Microsoft 365', abbr: 'M', desc: 'Documents & email', color: 'bg-[#D83B01]', textColor: 'text-white' },
  { name: 'Google Workspace', abbr: 'G', desc: 'Collaboration suite', color: 'bg-white border border-slate-200', textColor: 'text-[#4285F4]' },
  { name: 'Xero', abbr: 'X', desc: 'Accounting & invoicing', color: 'bg-[#13B5EA]', textColor: 'text-white' },
  { name: 'Brevo', abbr: 'Br', desc: 'Email & SMS marketing', color: 'bg-[#0B996E]', textColor: 'text-white' },
  { name: 'HubSpot', abbr: 'H', desc: 'CRM & intake tracking', color: 'bg-[#FF7A59]', textColor: 'text-white' },
  { name: 'Cliniko', abbr: 'Cl', desc: 'Allied health practice mgmt', color: 'bg-[#2AAEE0]', textColor: 'text-white' },
  { name: 'Power Diary', abbr: 'PD', desc: 'Practice management', color: 'bg-[#5B5EA6]', textColor: 'text-white' },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Integrations</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            Works with your<br />existing tools.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Seamlessly connects to the platforms your NDIS organisation already relies on — no double-entry, no data silos.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.07 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {integrations.map((tool) => (
            <motion.div
              key={tool.name}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="group bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center text-center hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              {/* Logo tile */}
              <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                <span className={`text-base font-black ${tool.textColor}`}>{tool.abbr}</span>
              </div>
              <h4 className="text-sm font-bold text-navy mb-1 group-hover:text-teal transition-colors duration-300">{tool.name}</h4>
              <p className="text-xs text-slate-400">{tool.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-400 mt-8"
        >
          API-first architecture means we can integrate with almost any tool your organisation uses.{' '}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-teal font-semibold hover:underline"
          >
            Ask us about custom integrations →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default IntegrationsSection;
