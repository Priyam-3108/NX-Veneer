import {
  Leaf,
  Layers,
  ShieldCheck,
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

export const NAV_LINKS = [
  { id: 'Home', label: 'Home', path: '/' },
  { id: 'Products', label: 'Products', path: '/products' },
  { id: 'About', label: 'About Us', path: '/about-us' },
  { id: 'Clients', label: 'Clients', path: '/clients' },
  { id: 'News', label: 'News & Events', path: '/news' },
  { id: 'Contact', label: 'Contact Us', path: '/contact' },
];

export const productCatalog = [
  {
    slug: 'smoked-ash-burl',
    name: 'Smoked Ash Burl',
    category: 'Signature Veneers',
    code: 'V-101',
    heroImage: 'https://placehold.co/1600x1000/927E6A/F7F5F0?text=Smoked+Ash+Burl',
    gallery: [
      'https://placehold.co/1200x800/7F6A58/F8F3EE?text=Smoked+Ash+Detail',
      'https://placehold.co/1200x800/6A5849/F5EEE6?text=Lobby+Installation',
      'https://placehold.co/1200x800/8D7865/F6F0EA?text=Retail+Concept',
    ],
    summary: 'Dark, bookmatched veneer with a swirling grain that adds drama to flagship interiors.',
    description:
      'Smoked Ash Burl combines artisanal bookmatching with a deep fumed tone, offering a bold yet refined surface for statement millwork. Each sheet is balanced for continuity across walls, cabinetry, and feature ceilings.',
    highlights: [
      'Artisanal bookmatched grain sequencing',
      'Fumed tonal depth for elevated warmth',
      'Arrives pre-sanded for quick finishing in the shop',
    ],
    applications: ['Luxury hospitality lobbies', 'Flagship retail environments', 'Executive boardrooms', 'Statement cabinetry'],
    finishes: ['Matte oil-rubbed', 'High-gloss lacquer', 'Open-pore polyurethane'],
    specifications: [
      { label: 'Sheet Size', value: '1220 x 2440 mm (4 x 8 ft)' },
      { label: 'Thickness', value: '0.6 mm face veneer, 18 mm plywood core' },
      { label: 'Backing', value: 'Balancing veneer on request' },
      { label: 'Fire Rating', value: 'ASTM E84 Class B (upon request)' },
      { label: 'Lead Time', value: '2 – 3 weeks for standard panels' },
    ],
    sustainability: {
      certification: 'FSC Chain-of-Custody available',
      statement: 'Sustainably harvested hardwood sourced from managed North American forests.',
    },
  },
  {
    slug: 'silvered-walnut',
    name: 'Silvered Walnut',
    category: 'Architectural Panels',
    code: 'V-118',
    heroImage: 'https://placehold.co/1600x1000/6E5C4C/F3ECE4?text=Silvered+Walnut',
    gallery: [
      'https://placehold.co/1200x800/584838/F5EFE7?text=Hospitality+Suite',
      'https://placehold.co/1200x800/7A6653/F8F1EA?text=Residential+Wall',
      'https://placehold.co/1200x800/5E4E3F/F2EBE3?text=Showroom+Display',
    ],
    summary: 'Soft silver wash over American walnut for a contemporary, desaturated look.',
    description:
      'Silvered Walnut is pre-finished with a controlled desaturation process that softens the walnut grain without muting its character. The result is a panel that pairs effortlessly with stone, brass, and muted textiles.',
    highlights: [
      'Pre-toned finish eliminates on-site staining',
      'UV-cured topcoat for enhanced abrasion resistance',
      'Consistent color tolerance across production batches',
    ],
    applications: ['Boutique hospitality suites', 'Residential wall cladding', 'Boutique retail fixtures'],
    finishes: ['Matte UV lacquer', 'Weathered satin', 'Wire-brushed texture'],
    specifications: [
      { label: 'Panel Size', value: '1220 x 2745 mm (4 x 9 ft)' },
      { label: 'Thickness', value: '16 mm MDF core with veneer face' },
      { label: 'Edge Detail', value: 'Square edge, eased edge available' },
      { label: 'Weight', value: '11.8 kg/m²' },
      { label: 'Fire Rating', value: 'EN 13501-1 B-s2, d0 (on request)' },
    ],
    sustainability: {
      certification: 'CARB II compliant core',
      statement: 'Finished using low-VOC coatings for healthier interiors.',
    },
  },
  {
    slug: 'honey-elm',
    name: 'Honey Elm',
    category: 'Bespoke Veneers',
    code: 'V-132',
    heroImage: 'https://placehold.co/1600x1000/8C7663/F8F2EC?text=Honey+Elm',
    gallery: [
      'https://placehold.co/1200x800/9A826F/F6EFE8?text=Hospitality+Bar',
      'https://placehold.co/1200x800/7D6655/F3ECE4?text=Residential+Cabinetry',
      'https://placehold.co/1200x800/9F8775/F5EFE6?text=Hotel+Suite',
    ],
    summary: 'Warm-toned elm veneer with elongated cathedral grain for inviting hospitality spaces.',
    description:
      'Honey Elm balances golden undertones with a linear grain that visually expands interior volumes. Ideal for hospitality and residential millwork seeking approachable luxury.',
    highlights: [
      'Radiant undertones that uplift ambient lighting',
      'Sequenced sets available for wrap-around installations',
      'Accepts custom stains and glazing techniques',
    ],
    applications: ['Boutique hotel suites', 'Residential kitchens', 'Hospitality bars & lounges', 'Branded workplace lounges'],
    finishes: ['Natural matte', 'Hand-rubbed oil', 'Cerused glaze'],
    specifications: [
      { label: 'Sheet Size', value: '1270 x 3050 mm (5 x 10 ft)' },
      { label: 'Thickness', value: '0.6 mm veneer on phenolic core' },
      { label: 'Matching Edge Banding', value: 'Prefinished ABS banding available' },
      { label: 'Acoustic Backing', value: 'Micro-perforated option available' },
      { label: 'Lead Time', value: '4 weeks including custom staining' },
    ],
    sustainability: {
      certification: 'PEFC certified species',
      statement: 'Harvested from responsibly managed European forests with full traceability.',
    },
  },
  {
    slug: 'charred-oak',
    name: 'Charred Oak',
    category: 'Performance Surfaces',
    code: 'V-146',
    heroImage: 'https://placehold.co/1600x1000/5A4535/F0E9E0?text=Charred+Oak',
    gallery: [
      'https://placehold.co/1200x800/4B3A2E/EEE6DE?text=Restaurant+Facade',
      'https://placehold.co/1200x800/6B5646/EEE5DC?text=Feature+Wall',
      'https://placehold.co/1200x800/5A4637/F2EBE2?text=Hospitality+Reception',
    ],
    summary: 'Charring-inspired oak surface with a deep satin sheen and tactile brushed finish.',
    description:
      'Charred Oak interprets the traditional Shou Sugi Ban process into a stable, interior-ready panel. A multi-layer finishing system locks in the tactile texture while keeping surfaces easy to maintain.',
    highlights: [
      'Tactile brushed texture with satin sheen',
      'High-performance topcoat resists fingerprints',
      'Compatible with curved panel fabrication',
    ],
    applications: [
      'Restaurant feature walls',
      'Hospitality reception desks',
      'Corporate lobby art walls',
      'Premium residential joinery',
    ],
    finishes: ['Satin charcoal', 'Graphite glaze', 'Soft matte black'],
    specifications: [
      { label: 'Panel Size', value: '1220 x 3050 mm (4 x 10 ft)' },
      { label: 'Thickness', value: '18 mm lightweight MDF core' },
      { label: 'Texture Depth', value: '0.8 mm brushed relief' },
      { label: 'Maintenance', value: 'Wipe with lint-free cloth; no solvents required' },
      { label: 'Warranty', value: '10-year finish warranty' },
    ],
    sustainability: {
      certification: 'Low-VOC finish system',
      statement: 'Manufactured using recycled wood fibers with formaldehyde-free adhesives.',
    },
  },
];

export const productCollections = productCatalog;

export const featuredProducts = productCatalog.slice(0, 4).map(({ slug, name, heroImage, summary }) => ({
  slug,
  name,
  image: heroImage,
  description: summary,
}));

export const values = [
  {
    title: 'Sustainability',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: Leaf,
  },
  {
    title: 'Craftsmanship',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: Layers,
  },
  {
    title: 'Integrity',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovation',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
    icon: Sparkles,
  },
];

export const teamMembers = [
  {
    name: 'Avery Laurent',
    role: 'Creative Director',
    image: 'https://placehold.co/400x400/DED4CC/1F1F1F?text=Avery+Laurent',
  },
  {
    name: 'Jordan Harper',
    role: 'Lead Material Specialist',
    image: 'https://placehold.co/400x400/CFC4BA/1F1F1F?text=Jordan+Harper',
  },
  {
    name: 'Taylor Reed',
    role: 'Design Strategist',
    image: 'https://placehold.co/400x400/BFB3A6/1F1F1F?text=Taylor+Reed',
  },
];

export const clientLogos = [
  'https://placehold.co/300x120/DED4CC/1F1F1F?text=Designhaus',
  'https://placehold.co/300x120/CFC4BA/1F1F1F?text=Studio+North',
  'https://placehold.co/300x120/BBB0A5/1F1F1F?text=Axis+Collective',
  'https://placehold.co/300x120/AA9E92/1F1F1F?text=Formline',
  'https://placehold.co/300x120/9C8F83/1F1F1F?text=LuxeWorks',
  'https://placehold.co/300x120/8C7E71/1F1F1F?text=Moderna',
  'https://placehold.co/300x120/7C6D61/1F1F1F?text=Reflect+Studio',
  'https://placehold.co/300x120/6E6055/1F1F1F?text=Horizon+Group',
  'https://placehold.co/300x120/5F5248/1F1F1F?text=Arcadia',
  'https://placehold.co/300x120/51463D/FAF7F2?text=Linea+Partners',
];

export const newsItems = [
  {
    title: 'Design Week Showcase',
    date: 'October 12, 2025',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae lacus ac sapien ultricies imperdiet.',
    image: 'https://placehold.co/800x600/C8B8A6/1F1F1F?text=Design+Showcase',
  },
  {
    title: 'Sustainable Sourcing Initiative',
    date: 'September 30, 2025',
    excerpt:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: 'https://placehold.co/800x600/B8A693/1F1F1F?text=Sustainability',
  },
  {
    title: 'Architect Collaboration Spotlight',
    date: 'August 18, 2025',
    excerpt:
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    image: 'https://placehold.co/800x600/A89480/1F1F1F?text=Collaboration',
  },
];

export const contactMethods = [
  {
    title: 'Showroom',
    details: '123 Veneer Avenue, Suite 400, Design District, NY 10013',
  },
  {
    title: 'Phone',
    details: '+1 (212) 555-0190',
  },
  {
    title: 'Email',
    details: 'hello@veneerstudio.com',
  },
  {
    title: 'Business Hours',
    details: 'Monday – Friday, 9:00 AM – 6:00 PM EST',
  },
];

export const socialLinks = [
  { label: 'Instagram', icon: Instagram },
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'Facebook', icon: Facebook },
];

