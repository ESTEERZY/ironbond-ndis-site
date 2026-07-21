export interface ProjectMetric {
  label: string;
  value: string;
}

export interface GalleryItem {
  type: 'Platform Overview' | 'Dashboard View' | 'Participant Portal';
  image: string;
  description: string;
}

export interface CaseStudyData {
  id: string;
  title: string;
  location: string;
  scope: string;
  heroImage: string;
  overview: string;
  highlights: string[];
  metrics: ProjectMetric[];
  gallery: GalleryItem[];
}

export const projectsData: CaseStudyData[] = [
  {
    id: 'industrial-loft',
    title: 'Participant Intake Portal',
    location: 'Allied Health & Support Coordinators',
    scope: 'WCAG 2.2 AA / Automated Intake',
    heroImage: '/case-studies/industrial-loft/image1.png',
    overview: 'A fully accessible, WCAG 2.2 AA compliant participant intake platform built for allied health providers and support coordinators. The portal replaces paper-based referral processes with a smart, consent-driven digital intake system that automatically routes participants to appropriate supports.',
    highlights: [
      'Fully WCAG 2.2 AA compliant — screen-reader ready, keyboard navigable, ARIA-labelled',
      'Smart referral routing with automated eligibility screening and support need capture',
      'Digital consent management integrated with participant privacy rights under the Privacy Act 1988'
    ],
    metrics: [
      { label: 'Year Deployed', value: '2026' },
      { label: 'Compliance Standard', value: 'WCAG 2.2 AA' },
      { label: 'Tech Stack', value: 'React, Node.js, PostgreSQL' },
      { label: 'Data Security', value: 'ISO 27001 Aligned' },
      { label: 'Platform Lead', value: 'Meridian Digital' },
      { label: 'Admin Time Saved', value: '70% Reduction' }
    ],
    gallery: [
      {
        type: 'Dashboard View',
        image: '/case-studies/industrial-loft/image2.png',
        description: 'Provider dashboard showing real-time referral queue, participant status, and intake completion rates.'
      },
      {
        type: 'Participant Portal',
        image: '/case-studies/industrial-loft/image3.png',
        description: 'Participant-facing intake form with accessibility features — high contrast, large text options, and guided step-by-step navigation.'
      },
      {
        type: 'Platform Overview',
        image: '/case-studies/industrial-loft/image1.png',
        description: 'Full platform overview showing the compliant intake flow from referral receipt through to confirmed support allocation.'
      }
    ]
  },
  {
    id: 'minimalist-pavilion',
    title: 'Plan Management Dashboard',
    location: 'Registered Plan Managers',
    scope: 'PRODA-Ready / Real-Time Reporting',
    heroImage: '/case-studies/minimalist-pavilion/image1.png',
    overview: 'A real-time plan management command centre for NDIS registered plan managers. The platform delivers full budget visibility, automated invoice processing, participant reporting, and direct NDIS portal integration — all from a single PRODA-ready, compliant interface.',
    highlights: [
      'Real-time NDIS plan budget tracking with category-level spend visibility',
      'Automated invoice validation and submission to the NDIS portal via API integration',
      'Participant-facing budget statements with accessible, plain-language reporting'
    ],
    metrics: [
      { label: 'Year Deployed', value: '2026' },
      { label: 'Compliance Standard', value: 'PRODA-Ready' },
      { label: 'Tech Stack', value: 'Next.js, PostgreSQL, NDIS API' },
      { label: 'Data Security', value: 'APPs Compliant' },
      { label: 'Platform Lead', value: 'Meridian Digital' },
      { label: 'Invoice Processing', value: 'Fully Automated' }
    ],
    gallery: [
      {
        type: 'Dashboard View',
        image: '/case-studies/minimalist-pavilion/image2.png',
        description: 'Plan manager dashboard showing participant portfolio, budget utilisation, and pending invoice queue.'
      },
      {
        type: 'Participant Portal',
        image: '/case-studies/minimalist-pavilion/image3.png',
        description: 'Participant-accessible budget statement portal with category breakdowns and plain-language spending summaries.'
      },
      {
        type: 'Platform Overview',
        image: '/case-studies/minimalist-pavilion/image1.png',
        description: 'Full plan management platform overview with NDIS API integration, automated reporting, and real-time budget alerts.'
      }
    ]
  },
  {
    id: 'suburban-elegance',
    title: 'Core Supports Scheduling Suite',
    location: 'Core Support Providers',
    scope: 'NDIS Registered / Mobile-First',
    heroImage: '/case-studies/suburban-elegance/image1.png',
    overview: 'A mobile-first scheduling and workforce management suite designed for registered NDIS core support providers. The platform covers rostering, shift management, incident reporting, and progress notes — purpose-built for support workers delivering funded core supports in the community.',
    highlights: [
      'Mobile-first design for support workers — offline-capable shift notes and incident reports',
      'Automated rostering with NDIS funding category alignment and availability matching',
      'Integrated incident reporting mapped to NDIS Quality and Safeguards Commission requirements'
    ],
    metrics: [
      { label: 'Year Deployed', value: '2026' },
      { label: 'Compliance Standard', value: 'NDIS Practice Standards' },
      { label: 'Tech Stack', value: 'React Native, REST API' },
      { label: 'Data Security', value: 'Privacy Act 1988 (CTH)' },
      { label: 'Platform Lead', value: 'Meridian Digital' },
      { label: 'Worker App', value: 'iOS & Android' }
    ],
    gallery: [
      {
        type: 'Dashboard View',
        image: '/case-studies/suburban-elegance/image2.png',
        description: 'Operations dashboard showing live roster, shift confirmations, and incident flag alerts for supervisors.'
      },
      {
        type: 'Participant Portal',
        image: '/case-studies/suburban-elegance/image3.png',
        description: 'Support worker mobile app — shift notes, participant daily goals, and medication prompts in a clean, accessible interface.'
      },
      {
        type: 'Platform Overview',
        image: '/case-studies/suburban-elegance/image1.png',
        description: 'Full scheduling suite overview — from automated roster generation through to compliant incident report submission.'
      }
    ]
  }
];
