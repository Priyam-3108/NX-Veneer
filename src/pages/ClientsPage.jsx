import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { clientLogos } from '../data/constants';
import ScrollReveal from '../components/ScrollReveal';
import usePageMetadata from '../hooks/usePageMetadata';

const ClientsPage = () => {
  usePageMetadata({
    title: 'Clients',
    description:
      'Explore Veneer collaborations with visionary brands and design studios, showcasing flagship environments finished with premium veneer surfaces.',
  });

  return (
    <div className="space-y-12">
    <ScrollReveal as="header" className="space-y-4 text-center md:text-left fade-in-up">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Collaborations</p>
      <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">Trusted By The Best</h1>
      <p className="mx-auto max-w-2xl text-base text-neutral-600 md:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas.
      </p>
    </ScrollReveal>
    <ScrollReveal
      as="section"
      className="grid gap-6 rounded-3xl bg-stone-200/60 px-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      delay={0.05}
    >
      {clientLogos.map((logo, index) => (
        <motion.div
          key={logo}
          className="flex items-center justify-center rounded-2xl bg-stone-50 p-6 shadow-sm transition-transform duration-300 ease-out"
          whileHover={{ scale: 1.05, translateY: -6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18, delay: index * 0.01 }}
        >
          <motion.img
            src={logo}
            alt="Client Logo"
            className="h-16 w-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      ))}
    </ScrollReveal>
    <ScrollReveal
      as="section"
      className="grid gap-10 rounded-3xl border border-stone-200 bg-white/70 px-8 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-12"
      delay={0.1}
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Case Study</p>
        <h2 className="text-3xl font-semibold text-neutral-900">Flagship Retail Experience</h2>
        <p className="text-base text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo, risus eget vehicula
          pretium, lectus mauris molestie erat, vitae posuere neque massa nec quam.
        </p>
        <p className="text-base text-neutral-600">
          Integer vulputate ornare nibh, nec laoreet ex hendrerit vel. Phasellus in tincidunt dolor.
        </p>
        <button
          type="button"
          className="inline-flex items-center rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
        >
          View Full Story
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <motion.img
          src="https://placehold.co/800x600/8C7764/F8F2EC?text=Retail+Interior"
          alt="Retail Interior"
          className="h-full w-full rounded-3xl object-cover shadow-lg transition-transform duration-500 ease-out"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <motion.img
          src="https://placehold.co/800x600/6E5A4B/F6EFE7?text=Detailing"
          alt="Detailing"
          className="h-full w-full rounded-3xl object-cover shadow-lg transition-transform duration-500 ease-out"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </ScrollReveal>
    </div>
  );
};

export default ClientsPage;

