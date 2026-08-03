export interface TreatmentDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  heroImage: string;
  overview: string;
  whatItInvolves: string[];
  suitability: string[];
  whatToExpect: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const treatmentsData: TreatmentDetail[] = [
  {
    id: 'general-dentistry',
    slug: 'general-dentistry',
    title: 'General Dentistry',
    category: 'Preventative & Restorative',
    shortDescription: 'Comprehensive oral health assessments, Tooth-coloured fillings, and routine maintenance to preserve your natural smile.',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    overview: 'General dentistry forms the foundation of lifelong oral health. At Harbour Dental Studio, our focus is on early detection, gentle preventative care, and high-quality restorations to keep your teeth strong and healthy.',
    whatItInvolves: [
      'Comprehensive dental examination & soft tissue check',
      'High-resolution digital dental radiographs (X-rays)',
      'Tooth-coloured composite resin fillings',
      'Customized oral hygiene plan & advice',
      'Gum health assessment and treatment',
    ],
    suitability: [
      'Patients due for a regular 6-month check-up',
      'Individuals experiencing minor tooth sensitivity or decay',
      'Patients needing replacement of worn or compromised fillings',
      'Anyone looking to maintain optimal long-term oral health',
    ],
    whatToExpect: [
      {
        step: 1,
        title: 'Initial Consultation & Assessment',
        description: 'Our dentist reviews your medical history, listens to any concerns, and performs a thorough examination of your teeth and gums.',
      },
      {
        step: 2,
        title: 'Digital Imaging (If Required)',
        description: 'Low-dose digital X-rays are taken to detect any hidden decay between teeth or under existing restorations.',
      },
      {
        step: 3,
        title: 'Personalised Treatment Plan',
        description: 'We discuss our findings clearly and present a transparent treatment plan with all costs outlined prior to starting.',
      },
      {
        step: 4,
        title: 'Gentle Treatment & Advice',
        description: 'Any required fillings or restorative treatments are completed using modern, comfortable techniques.',
      },
    ],
    faqs: [
      {
        question: 'How often should I visit the dentist for a general check-up?',
        answer: 'We generally recommend a check-up and clean every 6 months to catch minor issues before they become complex or uncomfortable.',
      },
      {
        question: 'Are composite (white) fillings as strong as metal fillings?',
        answer: 'Modern composite resins bond directly to the tooth structure, offering excellent durability while matching the natural shade of your teeth.',
      },
    ],
  },
  {
    id: 'checkups-cleans',
    slug: 'checkups-cleans',
    title: 'Check-ups & Cleans',
    category: 'Preventative Care',
    shortDescription: 'Gentle professional scaling, polishing, and topical fluoride treatments to protect against plaque and gum disease.',
    heroImage: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
    overview: 'Even with thorough daily brushing and flossing, plaque and calculus (tartar) naturally build up in hard-to-reach areas. Regular professional hygiene cleans keep your gums healthy and your breath fresh.',
    whatItInvolves: [
      'Ultrasonic & hand scaling to remove stubborn calculus',
      'Gentle tooth polishing to lift surface stain',
      'Topical fluoride treatment to strengthen tooth enamel',
      'Periodontal screening to monitor gum health',
      'Tailored home hygiene instruction',
    ],
    suitability: [
      'Adults and teenagers wanting clean, fresh teeth',
      'Patients with early signs of gingivitis or bleeding gums',
      'Anyone looking to prevent tooth decay and gum disease',
    ],
    whatToExpect: [
      {
        step: 1,
        title: 'Gum & Tooth Examination',
        description: 'Your hygienist checks for pocketing or inflammation around the gumline.',
      },
      {
        step: 2,
        title: 'Gentle Scaling',
        description: 'Using ultrasonic technology, we remove calculus deposits above and below the gumline.',
      },
      {
        step: 3,
        title: 'Polishing & Fluoride',
        description: 'Teeth are polished to remove superficial stains, followed by a mineralizing fluoride application.',
      },
    ],
    faqs: [
      {
        question: 'Will a dental clean hurt if I have sensitive teeth?',
        answer: 'Our hygienists use gentle techniques and warm water scaling. We can also apply topical numbing gel if you have sensitive gums.',
      },
      {
        question: 'Does private health insurance cover dental cleans?',
        answer: 'Most dental extras policies cover preventative check-ups and cleans twice per year. We process HICAPS claims on the spot.',
      },
    ],
  },
  {
    id: 'emergency-dental',
    slug: 'emergency-dental',
    title: 'Emergency Dental',
    category: 'Urgent Care',
    shortDescription: 'Prompt relief for severe toothaches, broken teeth, facial swelling, or unexpected dental trauma in Hobart.',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    overview: 'Dental emergencies can happen unexpectedly and cause significant discomfort. Harbour Dental Studio reserves daily emergency appointment slots to provide prompt relief and emergency triage.',
    whatItInvolves: [
      'Immediate pain relief & diagnosis',
      'Emergency root canal treatment or temporary fillings',
      'Management of chipped, cracked, or dislodged teeth',
      'Treatment for wisdom tooth flare-ups and infections',
      'Soft tissue injury care',
    ],
    suitability: [
      'Severe, throbbing tooth pain',
      'Trauma resulting in a cracked, broken, or knocked-out tooth',
      'Swelling in the face, gums, or jaw',
      'Lost crowns or broken fillings causing pain',
    ],
    whatToExpect: [
      {
        step: 1,
        title: 'Immediate Triage Call',
        description: 'Call (03) 6100 0000. Our reception team will advise on immediate steps before you arrive.',
      },
      {
        step: 2,
        title: 'Targeted Examination',
        description: 'We focus directly on the source of pain using digital X-rays to assess the underlying nerve or tooth structure.',
      },
      {
        step: 3,
        title: 'Stabilisation & Relief',
        description: 'We provide immediate treatment to relieve pain and stabilize the tooth, outlining follow-up care if required.',
      },
    ],
    faqs: [
      {
        question: 'What should I do if a permanent tooth is knocked out?',
        answer: 'Handle the tooth by the crown (not the root), gently rinse it in milk or saline without scrubbing, and keep it in milk while heading to our clinic immediately.',
      },
      {
        question: 'Do you offer same-day emergency appointments?',
        answer: 'Yes. We hold dedicated emergency slots every day during business hours for Hobart patients in pain.',
      },
    ],
  },
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    category: 'Aesthetics & Restorations',
    shortDescription: 'Custom porcelain veneers, aesthetic composite bonding, and tailored smile designs to boost your confidence.',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    overview: 'Cosmetic dentistry combines art and dental science to enhance the appearance of your teeth. Whether addressing minor chips, gaps, discolouration, or worn edges, our treatments are designed to look naturally beautiful.',
    whatItInvolves: [
      'Porcelain & composite veneers',
      'Cosmetic tooth bonding & contouring',
      'Ceramic crowns & aesthetic bridgework',
      'Comprehensive digital smile design consultations',
    ],
    suitability: [
      'Patients wishing to correct chipped, uneven, or discoloured teeth',
      'Individuals looking to close gaps between front teeth',
      'Anyone interested in a harmonious, refreshed smile',
    ],
    whatToExpect: [
      {
        step: 1,
        title: 'Aesthetic Consultation',
        description: 'We discuss your aesthetic preferences, analyze your facial structure, and take photos for digital smile planning.',
      },
      {
        step: 2,
        title: 'Mock-up & Trial',
        description: 'For major cosmetic work, we create a temporary digital or physical mock-up so you can preview the proposed shape before committing.',
      },
      {
        step: 3,
        title: 'Precision Placement',
        description: 'Veneers or restorations are crafted with extreme detail and bonded securely to your teeth.',
      },
    ],
    faqs: [
      {
        question: 'How long do porcelain veneers typically last?',
        answer: 'With proper oral hygiene and regular dental check-ups, porcelain veneers can last 10 to 15+ years.',
      },
      {
        question: 'Does composite bonding damage natural teeth?',
        answer: 'Composite bonding is a minimally invasive treatment that requires little to no removal of natural enamel.',
      },
    ],
  },
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    category: 'Cosmetic',
    shortDescription: 'Safe, professional in-chair whitening and custom take-home whitening kits to brighten discoloured teeth.',
    heroImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80',
    overview: 'Over time, coffee, tea, red wine, and natural aging can stain tooth enamel. Professional dental whitening is a safe, effective way to lighten surface and deep-set stains under dentist supervision.',
    whatItInvolves: [
      'In-chair professional whitening treatments',
      'Custom-moulded take-home whitening trays & gel',
      'Pre-whitening shade assessment & sensitivity protection',
    ],
    suitability: [
      'Adults with healthy teeth looking to brighten yellowing or stained enamel',
      'Patients preparing for a special event or wedding',
    ],
    whatToExpect: [
      {
        step: 1,
        title: 'Shade & Health Check',
        description: 'We check that your gums and teeth are healthy prior to whitening to ensure optimal, pain-free results.',
      },
      {
        step: 2,
        title: 'In-Chair or Custom Tray Creation',
        description: 'For in-chair whitening, protective barrier gel is applied to gums followed by professional whitening gel. For take-home kits, precise impressions are made.',
      },
      {
        step: 3,
        title: 'Shade Comparison',
        description: 'We compare your post-treatment shade against your starting baseline so you can see your brighter smile.',
      },
    ],
    faqs: [
      {
        question: 'Is professional teeth whitening safe for enamel?',
        answer: 'Yes. When supervised by a registered dentist, professional whitening products are safe and preserve enamel integrity.',
      },
      {
        question: 'How many shades lighter can my teeth become?',
        answer: 'Results vary depending on starting shade and stain type, but most patients achieve 3 to 8 shades lighter.',
      },
    ],
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: 'Dental Implants',
    category: 'Restorative & Surgical',
    shortDescription: 'Permanent, natural-looking replacement roots and crowns engineered to restore function and confidence.',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    overview: 'Dental implants provide a stable, long-term solution for missing teeth. A biocompatible titanium post acts as a replacement tooth root, supporting a custom-crafted porcelain crown that looks and feels like a natural tooth.',
    whatItInvolves: [
      '3D CBCT digital imaging & surgical planning',
      'Titanium implant post placement',
      'Custom porcelain crown attachment',
      'Implant maintenance & hygiene care',
    ],
    suitability: [
      'Adults missing one or more natural teeth',
      'Patients with adequate jawbone density and good oral health',
      'Individuals seeking an alternative to removable dentures',
    ],
    whatToExpect: [
      {
        step: 1,
        title: '3D Imaging & Consultation',
        description: 'We capture detailed 3D CBCT scans to evaluate jawbone volume and plan exact implant placement.',
      },
      {
        step: 2,
        title: 'Gentle Placement',
        description: 'The implant post is positioned into the jawbone under local anaesthetic.',
      },
      {
        step: 3,
        title: 'Osseointegration Period',
        description: 'Over 3 to 6 months, the bone integrates naturally with the titanium post to form a solid root foundation.',
      },
      {
        step: 4,
        title: 'Crown Fitting',
        description: 'A custom porcelain crown is crafted and connected to complete your permanent new tooth.',
      },
    ],
    faqs: [
      {
        question: 'Do dental implants feel like natural teeth?',
        answer: 'Yes. Because the implant integrates directly with your jawbone, it functions, feels, and can be brushed just like a natural tooth.',
      },
      {
        question: 'Am I suitable for a dental implant?',
        answer: 'Most healthy adults with sufficient bone density are good candidates. We assess suitability during a comprehensive consultation.',
      },
    ],
  },
  {
    id: 'clear-aligners',
    slug: 'clear-aligners',
    title: 'Clear Aligners',
    category: 'Orthodontics',
    shortDescription: 'Discreet, comfortable transparent aligners designed to straighten teeth without traditional metal braces.',
    heroImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
    overview: 'Clear aligner therapy uses a series of custom-made, removable transparent trays to gradually guide your teeth into improved alignment. They offer a subtle, practical option for adults and teens.',
    whatItInvolves: [
      '3D intraoral digital scanning (no messy impressions)',
      'Digital 3D treatment plan simulation',
      'Series of custom clear aligner trays',
      'Regular progress monitoring visits',
    ],
    suitability: [
      'Adults and teenagers with mild to moderate crowding or spacing',
      'Patients seeking a discrete alternative to fixed metal braces',
      'Individuals looking for removable aligners that make eating and brushing easy',
    ],
    whatToExpect: [
      {
        step: 1,
        title: '3D Digital Scan',
        description: 'We take a quick 3D digital scan of your mouth to create a precise digital model of your teeth.',
      },
      {
        step: 2,
        title: 'Digital Treatment Preview',
        description: 'You will see a 3D animation showing step-by-step how your teeth will move into final alignment.',
      },
      {
        step: 3,
        title: 'Aligner Wear & Review',
        description: 'You wear each set of aligners for 1 to 2 weeks, removing them only to eat, drink, brush, and floss.',
      },
    ],
    faqs: [
      {
        question: 'How many hours a day do I need to wear clear aligners?',
        answer: 'Aligners should be worn for 20 to 22 hours per day for optimal movement.',
      },
      {
        question: 'Are clear aligners noticeable when talking?',
        answer: 'Clear aligners are virtually invisible at conversational distance, making them popular with working professionals.',
      },
    ],
  },
  {
    id: 'childrens-dentistry',
    slug: 'childrens-dentistry',
    title: "Children's Dentistry",
    category: 'Preventative & Family',
    shortDescription: 'Gentle, positive dental visits designed to build confidence and healthy oral habits for kids of all ages.',
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    overview: "Early dental experiences shape a child's attitude toward oral health for life. At Harbour Dental Studio, we create a warm, non-threatening environment where kids feel safe and engaged.",
    whatItInvolves: [
      'Gentle first dental assessments & cleans',
      'Fissure sealants to protect back molars from decay',
      'Fluoride treatments for growing enamel',
      'Custom sports mouthguards for young athletes',
      'Medicare Child Dental Benefits Schedule (CDBS) bulk billing for eligible children',
    ],
    suitability: [
      'Infants getting their first baby teeth',
      'Toddlers and school-aged children',
      'Teenagers needing preventative care or mouthguards',
    ],
    whatToExpect: [
      {
        step: 1,
        title: 'Friendly Introduction',
        description: 'We introduce your child to the dental chair and instruments in a fun, relaxed manner.',
      },
      {
        step: 2,
        title: 'Gentle Check & Clean',
        description: 'We count teeth, check for early decay, and gently clean away any plaque.',
      },
      {
        step: 3,
        title: 'Preventative Guidance & CDBS Check',
        description: 'We show kids how to brush effectively and inform parents about CDBS eligibility.',
      },
    ],
    faqs: [
      {
        question: 'When should my child have their first dental visit?',
        answer: 'We recommend bringing your child for their first visit around their first birthday or when their first tooth appears.',
      },
      {
        question: 'What is the Medicare Child Dental Benefits Schedule (CDBS)?',
        answer: 'CDBS provides up to $1,095 in benefits over two calendar years for eligible children aged 0–17 for basic dental services.',
      },
    ],
  },
];
