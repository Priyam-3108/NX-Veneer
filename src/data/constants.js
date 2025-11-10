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

export const featuredProducts = [
  {
    name: 'Premium Oak Veneer',
    image: 'https://placehold.co/800x600/C6B09C/1E1E1E?text=Premium+Oak',
    description: 'Curated texture with a contemporary edge.',
  },
  {
    name: 'Midnight Walnut Panel',
    image: 'https://placehold.co/800x600/5B4636/F9F4EE?text=Midnight+Walnut',
    description: 'Rich, smoky grains for timeless interiors.',
  },
  {
    name: 'Satin Ash Finish',
    image: 'https://placehold.co/800x600/DACBBE/2D2D2D?text=Satin+Ash',
    description: 'Minimalist elegance with lasting warmth.',
  },
  {
    name: 'Desert Maple Layer',
    image: 'https://placehold.co/800x600/B89F87/F5F0EA?text=Desert+Maple',
    description: 'Organic tones ideal for hospitality spaces.',
  },
];

export const productCollections = [
  'https://placehold.co/800x600/927E6A/F7F5F0?text=Smoked+Ash+Burl',
  'https://placehold.co/800x600/6E5C4C/F3ECE4?text=Silvered+Walnut',
  'https://placehold.co/800x600/8C7663/F8F2EC?text=Honey+Elm',
  'https://placehold.co/800x600/5A4535/F0E9E0?text=Charred+Oak',
  'https://placehold.co/800x600/9F8775/F5EFE6?text=Oiled+Teak',
  'https://placehold.co/800x600/7A6653/F8F1EA?text=Weathered+Birch',
  'https://placehold.co/800x600/6B5646/EEE5DC?text=Bronzed+Walnut',
  'https://placehold.co/800x600/9C836E/F6EFE7?text=Ivory+Maple',
  'https://placehold.co/800x600/7D6655/F2EBE3?text=Desert+Mahogany',
  'https://placehold.co/800x600/8A6F5A/F5EEE4?text=Forest+Walnut',
  'https://placehold.co/800x600/AC947F/F7F1EA?text=Pearl+Oak',
  'https://placehold.co/800x600/6F5847/EEE6DE?text=Sandstone+Elm',
];

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

