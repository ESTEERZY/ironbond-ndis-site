import { Link } from 'react-router-dom'
import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

/* ─────────────────────────────────────────────
   Inline dashboard mockups — pure Tailwind UI
   ──────────────────────────────────────────── */

const IntakePortalMockup = () => (
  <div className="flex h-full font-sans">
    {/* Sidebar */}
    <div className="w-24 bg-navy flex-shrink-0 flex flex-col gap-0.5 p-2 overflow-hidden">
      <div className="text-[7px] font-black text-teal uppercase tracking-wide px-1 mb-2 mt-1">Meridian Digital</div>
      {[['● Dashboard', false], ['● Referrals', true], ['● Participants', false], ['● Consent', false], ['● Reports', false]].map(([item, active]) => (
        <div key={String(item)} className={`px-2 py-1 rounded-md text-[7px] font-medium ${active ? 'bg-teal/20 text-teal' : 'text-white/40 hover:text-white/70'}`}>{String(item)}</div>
      ))}
    </div>
    {/* Main content */}
    <div className="flex-1 bg-slate-50 p-2.5 overflow-hidden min-w-0">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-[8px] font-bold text-navy">Referral Queue</div>
        <div className="flex items-center gap-1.5">
          <div className="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[6px] text-slate-400">Search...</div>
          <div className="bg-teal text-white text-[6px] font-bold px-2 py-0.5 rounded-md">+ New Referral</div>
        </div>
      </div>
      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="grid gap-0 bg-slate-50 border-b border-slate-100 px-2 py-1" style={{ gridTemplateColumns: '2fr 1.5fr 1.5fr 1fr 1fr' }}>
          {['Participant', 'NDIS Number', 'Support Type', 'Status', 'Assigned'].map(h => (
            <div key={h} className="text-[5.5px] font-bold text-slate-400 uppercase tracking-wide">{h}</div>
          ))}
        </div>
        {[
          ['Sarah Chen', '9001 2345', 'OT Assessment', 'new', 'J. Walsh'],
          ['Marcus Obi', '9005 6789', 'Plan Management', 'review', 'P. Patel'],
          ['Lily Nguyen', '9009 0123', 'Community Access', 'approved', 'S. Chen'],
          ['Robert Kelly', '9003 4567', 'Physiotherapy', 'new', '—'],
          ['Amara Dube', '9007 8901', 'SIL Support', 'review', 'J. Walsh'],
          ['Wei Zhang', '9002 3456', 'Behaviour Support', 'approved', 'P. Patel'],
        ].map(([name, ndis, type, status, assigned]) => (
          <div key={name} className="grid border-b border-slate-50 px-2 py-1 hover:bg-slate-50/80 transition-colors" style={{ gridTemplateColumns: '2fr 1.5fr 1.5fr 1fr 1fr' }}>
            <div className="text-[7px] font-semibold text-navy truncate">{name}</div>
            <div className="text-[6.5px] text-slate-400 font-mono">{ndis}</div>
            <div className="text-[6.5px] text-slate-500 truncate">{type}</div>
            <div>
              <span className={`text-[5px] font-bold px-1.5 py-0.5 rounded-full ${status === 'new' ? 'bg-blue-100 text-blue-600' : status === 'approved' ? 'bg-emerald/10 text-emerald' : 'bg-amber-100 text-amber-600'}`}>
                {status === 'new' ? '● New' : status === 'approved' ? '✓ Ready' : '⌛ Review'}
              </span>
            </div>
            <div className="text-[6.5px] text-slate-400">{assigned}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StaffDashboardMockup = () => {
  const workers = ['Sarah Chen', 'Marcus Williams', 'Priya Patel', 'James Walsh'];
  const days = ['Mon 21', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'];
  const shifts: Record<string, Record<string, { name: string; time: string; color: string }>> = {
    'Sarah Chen': { 'Mon 21': { name: 'Robert Kelly', time: '8–2pm', color: 'bg-teal/20 text-teal border-teal/30' }, 'Wed 23': { name: 'Lily Nguyen', time: '9–3pm', color: 'bg-teal/20 text-teal border-teal/30' } },
    'Marcus Williams': { 'Tue 22': { name: 'Sarah Chen', time: '10–4pm', color: 'bg-blue-50 text-blue-600 border-blue-200' }, 'Thu 24': { name: 'Amara Dube', time: '8–12pm', color: 'bg-blue-50 text-blue-600 border-blue-200' } },
    'Priya Patel': { 'Mon 21': { name: 'Marcus Obi', time: '9–5pm', color: 'bg-violet-50 text-violet-600 border-violet-200' }, 'Fri 25': { name: 'Wei Zhang', time: '1–5pm', color: 'bg-violet-50 text-violet-600 border-violet-200' } },
    'James Walsh': { 'Wed 23': { name: 'Robert Kelly', time: '8–2pm', color: 'bg-amber-50 text-amber-600 border-amber-200' }, 'Fri 25': { name: 'Sarah Chen', time: '10–4pm', color: 'bg-amber-50 text-amber-600 border-amber-200' } },
  };
  return (
    <div className="flex flex-col h-full bg-slate-50 p-2.5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-[8px] font-bold text-navy">Staff Roster — Week 21–25 Jul 2025</div>
        <div className="flex gap-1">
          <div className="bg-white border border-slate-200 text-[6px] text-slate-400 px-2 py-0.5 rounded-md">‹ Prev</div>
          <div className="bg-teal text-white text-[6px] font-bold px-2 py-0.5 rounded-md">+ Add Shift</div>
        </div>
      </div>
      {/* Grid */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm flex-1">
        {/* Day headers */}
        <div className="grid border-b border-slate-100 bg-slate-50" style={{ gridTemplateColumns: '72px repeat(5, 1fr)' }}>
          <div className="px-2 py-1 text-[5.5px] font-bold text-slate-400 uppercase">Worker</div>
          {days.map(d => <div key={d} className="px-1 py-1 text-[5.5px] font-bold text-slate-400 uppercase text-center">{d}</div>)}
        </div>
        {/* Worker rows */}
        {workers.map((worker) => (
          <div key={worker} className="grid border-b border-slate-50" style={{ gridTemplateColumns: '72px repeat(5, 1fr)' }}>
            <div className="px-2 py-2 text-[7px] font-semibold text-navy flex items-center">{worker.split(' ')[0]}</div>
            {days.map(day => {
              const shift = shifts[worker]?.[day];
              return (
                <div key={day} className="px-0.5 py-1 flex items-center">
                  {shift ? (
                    <div className={`w-full px-1 py-0.5 rounded border ${shift.color} text-[5.5px] font-semibold leading-tight`}>
                      <div className="truncate">{shift.name}</div>
                      <div className="opacity-70">{shift.time}</div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProviderWebsiteMockup = () => (
  <div className="h-full bg-white overflow-hidden flex flex-col">
    {/* Mock browser nav */}
    <div className="bg-navy px-3 py-2 flex-shrink-0">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[7px] font-black text-white flex items-center gap-1.5">
          <div className="w-4 h-4 bg-teal rounded flex items-center justify-center text-[5px] font-black">SR</div>
          Sunrise NDIS Services
        </div>
        <div className="flex items-center gap-2">
          {['Home', 'Services', 'About', 'Contact'].map(n => (
            <span key={n} className="text-[6px] text-white/50">{n}</span>
          ))}
          <div className="bg-teal text-white text-[6px] font-bold px-2 py-0.5 rounded-md ml-1">Get Started</div>
        </div>
      </div>
    </div>
    {/* Hero area */}
    <div className="flex-1 p-4 flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-50 to-white">
      <div className="text-[6px] font-bold text-teal uppercase tracking-widest mb-2 bg-teal/10 border border-teal/20 px-2 py-0.5 rounded-full">NDIS Registered Provider</div>
      <div className="text-[11px] font-black text-navy leading-tight mb-2">Accessible, Caring NDIS<br />Support Across Australia</div>
      <div className="text-[7px] text-slate-500 mb-3 max-w-[200px]">Supporting participants with allied health, core supports, and plan management — participant-centred, compliance-first.</div>
      <div className="flex gap-2 mb-4">
        <div className="bg-teal text-white text-[6px] font-bold px-3 py-1 rounded-lg">Find Support</div>
        <div className="border border-navy/20 text-navy text-[6px] font-bold px-3 py-1 rounded-lg">About Us</div>
      </div>
      <div className="flex gap-2">
        {['✓ WCAG 2.2 AA', '✓ NDIS Registered', '✓ Allied Health'].map(b => (
          <span key={b} className="text-[5.5px] font-semibold text-emerald bg-emerald/8 border border-emerald/20 px-1.5 py-0.5 rounded-full">{b}</span>
        ))}
      </div>
    </div>
    {/* Service strip */}
    <div className="bg-slate-50 border-t border-slate-100 px-4 py-2 flex gap-2 flex-shrink-0">
      {['Support Coordination', 'OT Assessment', 'Plan Management', 'Core Supports'].map(s => (
        <div key={s} className="bg-white border border-slate-100 rounded-lg px-2 py-1 text-[6px] font-semibold text-navy whitespace-nowrap shadow-sm">{s}</div>
      ))}
    </div>
  </div>
);

const ClientPortalMockup = () => (
  <div className="h-full bg-slate-100 flex items-center justify-center p-3 overflow-hidden">
    {/* Phone frame */}
    <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl border-4 border-slate-200 w-40 flex-shrink-0 flex flex-col" style={{ height: '230px' }}>
      {/* Status bar */}
      <div className="bg-navy px-3 py-1.5 flex items-center justify-between flex-shrink-0">
        <span className="text-[5.5px] text-white/60">9:41 AM</span>
        <div className="text-[5.5px] font-black text-white text-center">My NDIS Plan</div>
        <span className="text-[5.5px] text-white/60">●●●</span>
      </div>
      {/* Scrollable content */}
      <div className="flex-1 overflow-hidden p-2 bg-slate-50 flex flex-col gap-1.5">
        {/* Budget card */}
        <div className="bg-white rounded-xl border border-slate-100 p-2 shadow-sm">
          <div className="text-[6px] font-bold text-slate-400 mb-1">Core Supports Budget</div>
          <div className="text-[10px] font-black text-navy mb-1">$8,240 <span className="text-[7px] font-semibold text-slate-400">remaining</span></div>
          <div className="w-full bg-slate-100 rounded-full h-1 mb-0.5">
            <div className="bg-teal h-1 rounded-full" style={{ width: '58%' }}></div>
          </div>
          <div className="text-[5.5px] text-slate-400">$11,400 total · 58% used · 127 days left</div>
        </div>
        {/* Next service */}
        <div className="bg-white rounded-xl border border-slate-100 p-2 shadow-sm">
          <div className="text-[6px] font-bold text-slate-400 mb-1">Next Service</div>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-[7px] text-teal">📅</span>
            </div>
            <div>
              <div className="text-[7px] font-bold text-navy">OT Session</div>
              <div className="text-[6px] text-slate-400">Wed 23 Jul · 10:00 AM</div>
            </div>
          </div>
        </div>
        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-1">
          {[['📋', 'View Plan'], ['📎', 'Upload Doc'], ['💬', 'Contact']].map(([icon, label]) => (
            <div key={label} className="bg-white border border-slate-100 rounded-lg p-1 text-center">
              <div className="text-[8px]">{icon}</div>
              <div className="text-[5px] font-semibold text-navy mt-0.5">{label}</div>
            </div>
          ))}
        </div>
        {/* Document */}
        <div className="bg-white rounded-xl border border-slate-100 p-2 shadow-sm flex items-center gap-1.5">
          <div className="w-5 h-5 bg-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-[7px]">📄</span>
          </div>
          <div>
            <div className="text-[6.5px] font-bold text-navy">NDIS Plan 2025</div>
            <div className="text-[5.5px] text-emerald font-semibold">✓ Approved · Exp: Mar 2026</div>
          </div>
        </div>
      </div>
    </div>

    {/* Desktop side panel */}
    <div className="flex-1 ml-3 hidden sm:flex flex-col gap-2 h-full py-1 overflow-hidden">
      <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm">
        <div className="text-[7px] font-bold text-navy mb-2">Recent Activity</div>
        {[
          ['Progress note submitted', 'Sarah C · 2h ago', 'teal'],
          ['Invoice paid', '$1,250.00 · PRODA · Today', 'emerald'],
          ['Consent updated', 'New form signed · Yesterday', 'blue'],
        ].map(([action, detail, color]) => (
          <div key={action} className="flex items-start gap-1.5 mb-1.5 last:mb-0">
            <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${color === 'teal' ? 'bg-teal' : color === 'emerald' ? 'bg-emerald' : 'bg-blue-400'}`}></div>
            <div>
              <div className="text-[6.5px] font-semibold text-navy">{action}</div>
              <div className="text-[6px] text-slate-400">{detail}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm">
        <div className="text-[7px] font-bold text-navy mb-1.5">Plan Categories</div>
        {[
          ['Core Supports', 58, 'teal'],
          ['Capacity Building', 32, 'violet'],
          ['Capital', 15, 'amber'],
        ].map(([cat, pct, color]) => (
          <div key={String(cat)} className="mb-1.5">
            <div className="flex justify-between mb-0.5">
              <span className="text-[6px] text-slate-500">{cat}</span>
              <span className="text-[6px] font-bold text-navy">{pct}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-0.5">
              <div className={`h-0.5 rounded-full ${color === 'teal' ? 'bg-teal' : color === 'violet' ? 'bg-violet-400' : 'bg-amber-400'}`} style={{ width: `${pct}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Main Projects Section
   ──────────────────────────────────────────── */
const solutions = [
  {
    id: 'industrial-loft',
    mockup: IntakePortalMockup,
    title: 'Participant Intake Portal',
    category: 'Allied Health & Support Coordinators',
    ndisTag: 'NDIS Registered',
    description: 'Replace paper-based referral bottlenecks with a smart, WCAG-compliant digital intake system that routes participants to the right supports automatically — consent captured, eligibility checked, and coordinator assigned in minutes.',
    features: ['Digital referral queue with status tracking', 'WCAG 2.2 AA accessible intake forms', 'Automated consent collection & audit trail', 'Coordinator assignment & notifications'],
  },
  {
    id: 'suburban-elegance',
    mockup: StaffDashboardMockup,
    title: 'Staff Management Dashboard',
    category: 'Core Support Providers',
    ndisTag: 'Practice Standards Aligned',
    description: 'Full roster visibility across your entire support workforce — weekly scheduling, shift management, mobile progress notes, and incident reporting in one NDIS-compliant platform built for core supports providers.',
    features: ['Visual weekly rostering with drag-and-drop', 'Mobile app for shift notes & progress records', 'Incident reporting with compliance flagging', 'Staff availability & qualification tracking'],
  },
  {
    id: 'minimalist-pavilion',
    mockup: ProviderWebsiteMockup,
    title: 'Provider Website',
    category: 'All NDIS Providers',
    ndisTag: 'WCAG 2.2 AA',
    description: 'A production-ready, WCAG 2.2 AA compliant public website for your NDIS organisation — built to pass registration audits, convert referrals, and clearly communicate your services to participants, families, and support coordinators.',
    features: ['WCAG 2.2 AA compliant from day one', 'Registration-ready trust architecture', 'Accessible service pages & contact forms', 'Mobile-first, fast-loading design'],
  },
  {
    id: 'client-portal',
    mockup: ClientPortalMockup,
    title: 'Client / Participant Portal',
    category: 'All Provider Types',
    ndisTag: 'Privacy Act 1988 Compliant',
    description: 'A secure, participant-facing web portal where NDIS participants can track their plan budget, view upcoming services, sign consent forms, upload documents, and communicate with their provider — all from any device.',
    features: ['Real-time NDIS plan budget visibility', 'Upcoming service schedule & notifications', 'Document upload & consent management', 'Secure messaging with coordinator'],
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Our NDIS Platform Suite</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            Four purpose-built platforms.<br />One complete ecosystem.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every NDIS provider need covered — from participant intake and staff rostering to your public website and a participant self-service portal.
          </p>
        </motion.div>

        {/* 2×2 Solution Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.12 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {solutions.map((sol) => {
            const Mockup = sol.mockup;
            return (
              <motion.div
                key={sol.id}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden hover:border-teal/30 hover:shadow-2xl hover:shadow-teal/5 transition-all duration-500 group flex flex-col"
              >
                {/* Dashboard preview */}
                <div className="relative overflow-hidden border-b border-slate-100 bg-slate-100 flex-shrink-0" style={{ height: '240px' }}>
                  {/* Browser chrome */}
                  <div className="bg-slate-200 flex items-center gap-1.5 px-3 py-2 border-b border-slate-300 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald/70"></div>
                    <div className="flex-1 mx-3 bg-white rounded text-[7px] text-slate-400 px-2 py-0.5 text-center truncate">
                      app.meridiandigital.com.au/{sol.id.replace('-', '/')}
                    </div>
                  </div>
                  {/* Dashboard content */}
                  <div className="absolute inset-0 mt-8 overflow-hidden">
                    <Mockup />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-teal text-xs font-bold tracking-wide uppercase mb-1">
                        {sol.category}
                      </span>
                      <h3 className="text-xl font-black text-navy group-hover:text-teal transition-colors duration-300">
                        {sol.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1 flex-shrink-0 px-2.5 py-1 bg-emerald/8 border border-emerald/20 rounded-full text-emerald text-[10px] font-bold">
                      <ShieldCheck size={10} /> {sol.ndisTag}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {sol.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check size={14} className="text-teal mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-5 border-t border-slate-100">
                    <Link
                      to={sol.id === 'client-portal' ? '/industrial-loft.html' : `/${sol.id}.html`}
                      className="group/btn inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-navy transition-colors duration-300"
                    >
                      View Platform Details
                      <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-14 border-t border-slate-100 text-center"
        >
          <h3 className="text-3xl font-black text-navy mb-3">Need a custom platform?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            We build bespoke NDIS digital infrastructure for providers with unique workflows. Book a free discovery call to discuss your requirements.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group bg-teal text-white px-10 py-4 text-sm font-bold rounded-xl hover:bg-teal/90 transition-all duration-300 inline-flex items-center gap-2.5 shadow-lg shadow-teal/20"
          >
            Book a Free Audit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
