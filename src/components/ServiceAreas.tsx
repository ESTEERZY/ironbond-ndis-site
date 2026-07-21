import { motion } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';

const melbourneAreas = [
  'Inner Melbourne', 'Carlton & Fitzroy', 'Richmond & Collingwood',
  'South Yarra & Prahran', 'St Kilda & Port Melbourne', 'Footscray & Williamstown',
  'Brunswick & Northcote', 'Preston & Thornbury', 'Ivanhoe & Heidelberg',
  'Doncaster & Box Hill', 'Camberwell & Hawthorn', 'Glen Waverley',
  'Dandenong & Springvale', 'Frankston & Mornington', 'Knox & Ringwood',
  'Mooroolbark & Lilydale', 'Werribee & Hoppers Crossing', 'Melton & Sunbury',
];
const regionalAreas = [
  'Geelong & Surf Coast', 'Ballarat & Central Highlands',
  'Bendigo & Loddon Mallee', 'Shepparton & Goulburn Valley',
  'Latrobe Valley & Gippsland', 'Wangaratta & Albury-Wodonga',
];

const ServiceAreas = () => (
  <section id="areas" className="py-20 lg:py-28 bg-slate-50">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Service Areas</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-5 leading-tight">
            Supporting participants<br />across Victoria.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Our support workers, coordinators, and allied health clinicians are located throughout Melbourne and regional Victoria — able to visit participants at home, in the community, or at one of our clinic locations.
          </p>
          <p className="text-base text-slate-500 leading-relaxed mb-8">
            Not sure if we service your suburb? Give our team a call on <a href="tel:1300467426" className="text-teal font-bold">1300 467 426</a> and we'll let you know the best options available in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center justify-center gap-2 bg-teal text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-teal/90 transition-all shadow-lg shadow-teal/20"
            >
              <MapPin size={15} /> Find Support Near Me
            </a>
          </div>
        </motion.div>

        {/* Right: area lists */}
        <motion.div
          initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {/* Melbourne */}
          <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm">
            <h3 className="text-base font-bold text-navy mb-5 flex items-center gap-2">
              <span className="w-5 h-5 bg-teal/10 rounded-md flex items-center justify-center"><MapPin size={11} className="text-teal" /></span>
              Melbourne Metropolitan
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {melbourneAreas.map(area => (
                <div key={area} className="flex items-center gap-1.5 text-sm text-slate-600">
                  <Check size={12} className="text-teal flex-shrink-0" /> {area}
                </div>
              ))}
            </div>
          </div>

          {/* Regional */}
          <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm">
            <h3 className="text-base font-bold text-navy mb-5 flex items-center gap-2">
              <span className="w-5 h-5 bg-emerald/10 rounded-md flex items-center justify-center"><MapPin size={11} className="text-emerald" /></span>
              Regional Victoria
            </h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {regionalAreas.map(area => (
                <div key={area} className="flex items-center gap-1.5 text-sm text-slate-600">
                  <Check size={12} className="text-emerald flex-shrink-0" /> {area}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServiceAreas;
