export interface ProjectMetric {
  label: string;
  value: string;
}

export interface GalleryItem {
  type: 'Structural Details' | 'Interior Framing' | 'Final Finishes';
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
    title: 'Industrial Loft',
    location: 'Hobart, TAS',
    scope: '1,200 sqm / Urban Transformation',
    heroImage: '/case-studies/industrial-loft/image1.png',
    overview: 'A restoration of a historic warehouse into a contemporary loft residence. The design balances raw industrial character with refined luxury, featuring original brickwork, steel elements, custom dark cabinetry, and an open mezzanine.',
    highlights: [
      'Preserved original historic brickwork and steel truss systems',
      'Custom-designed dark metal kitchen cabinetry with integrated lighting',
      'Monumental steel staircase leading to an open-plan mezzanine'
    ],
    metrics: [
      { label: 'Year Completed', value: '2026' },
      { label: 'Structural System', value: 'Masonry & Steel Frame' },
      { label: 'Primary Materials', value: 'Exposed Brick, Corrugated Steel, Concrete' },
      { label: 'Energy Rating', value: 'LEED Gold Certified' },
      { label: 'Architect in Charge', value: 'Cole' },
      { label: 'Interior Scale', value: '1,200 sqm' }
    ],
    gallery: [
      {
        type: 'Interior Framing',
        image: '/case-studies/industrial-loft/image2.png',
        description: 'Expansive open-plan living area featuring restored brick walls and a custom steel staircase.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/industrial-loft/image3.png',
        description: 'Dark-themed industrial kitchen with concrete finishes, black cabinetry, and warm accent lighting.'
      },
      {
        type: 'Structural Details',
        image: '/case-studies/industrial-loft/image1.png',
        description: 'Exterior view highlighting the contrast between the dark corrugated metal cladding and warm interior glow at dusk.'
      }
    ]
  },
  {
    id: 'minimalist-pavilion',
    title: 'Minimalist Pavilion',
    location: 'Launceston, TAS',
    scope: '650 sqm / Residential Sanctuary',
    heroImage: '/case-studies/minimalist-pavilion/image1.png',
    overview: 'A modernist pavilion nestled in a lush forest landscape. Designed as a residential sanctuary, the home utilizes floor-to-ceiling glass panel walls to dissolve the boundary between interior and exterior spaces, centered around a reflective pool.',
    highlights: [
      'Floor-to-ceiling glass panel walls providing 360-degree forest views',
      'Raw concrete structural core offset by a floating plaster roof line',
      'Reflective swimming pool aligned with the structural geometry'
    ],
    metrics: [
      { label: 'Year Completed', value: '2026' },
      { label: 'Structural System', value: 'Concrete & Steel Frame' },
      { label: 'Primary Materials', value: 'Polished Concrete, Limestone, Floor-to-Ceiling Glass' },
      { label: 'Energy Rating', value: 'LEED Platinum Certified' },
      { label: 'Architect in Charge', value: 'Vance & Associates' },
      { label: 'Interior Scale', value: '650 sqm' }
    ],
    gallery: [
      {
        type: 'Interior Framing',
        image: '/case-studies/minimalist-pavilion/image2.png',
        description: 'Expansive open-plan living lounge with low-profile contemporary sofa looking out onto the garden.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/minimalist-pavilion/image3.png',
        description: 'Minimalist modern kitchen showcasing warm integrated lighting, sleek beige cabinetry, and concrete countertops.'
      },
      {
        type: 'Structural Details',
        image: '/case-studies/minimalist-pavilion/image1.png',
        description: 'Exterior view of the flat-roofed pavilion at twilight, reflecting beautifully in the integrated swimming pool.'
      }
    ]
  },
  {
    id: 'suburban-elegance',
    title: 'Suburban Elegance',
    location: 'Devonport, TAS',
    scope: '550 sqm / Residential Estate',
    heroImage: '/case-studies/suburban-elegance/image1.png',
    overview: 'A masterfully crafted suburban home designed for modern family living. The residence features expansive open-plan spaces, a seamless transition to the outdoor entertaining deck, and an elegant two-story facade with warm timber accents.',
    highlights: [
      'Expansive open-plan living and kitchen area with natural light',
      'Covered outdoor entertaining deck with built-in BBQ',
      'Elegant two-story facade with modern rendered finish'
    ],
    metrics: [
      { label: 'Year Completed', value: '2026' },
      { label: 'Structural System', value: 'Timber Frame & Brick Veneer' },
      { label: 'Primary Materials', value: 'Rendered Brick, Timber, Glass' },
      { label: 'Energy Rating', value: '6-Star Energy Rating' },
      { label: 'Architect in Charge', value: 'Cole' },
      { label: 'Interior Scale', value: '550 sqm' }
    ],
    gallery: [
      {
        type: 'Interior Framing',
        image: '/case-studies/suburban-elegance/image2.png',
        description: 'Spacious open-plan living area and kitchen bathed in natural light, with a direct view to the pool.'
      },
      {
        type: 'Final Finishes',
        image: '/case-studies/suburban-elegance/image3.png',
        description: 'Expansive covered outdoor entertaining deck featuring a built-in BBQ and landscaped garden view.'
      },
      {
        type: 'Structural Details',
        image: '/case-studies/suburban-elegance/image1.png',
        description: 'Elegant two-story street-facing facade showcasing modern geometry and warm timber accents.'
      }
    ]
  }
];
