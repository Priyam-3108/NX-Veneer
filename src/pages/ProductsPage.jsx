import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { productCollections } from '../data/constants';
import ScrollReveal from '../components/ScrollReveal';

const ProductsPage = () => (
  <div className="space-y-12">
    <ScrollReveal as="header" className="space-y-4 fade-in-up">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
        curated range
      </p>
      <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">Our Collections</h1>
      <p className="max-w-2xl text-base text-neutral-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam a urna interdum dictum.
        Maecenas pellentesque turpis vitae sem efficitur, id hendrerit erat ullamcorper.
      </p>
    </ScrollReveal>
    <ScrollReveal as="div" className="flex flex-wrap gap-3 fade-in-up" delay={0.05}>
      {['All', 'Walnut', 'Oak', 'Exotic', 'Limited'].map((filter) => (
        <button
          key={filter}
          type="button"
          className="rounded-full border border-stone-300 px-5 py-2 text-sm font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-900 hover:text-amber-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
        >
          {filter}
        </button>
      ))}
    </ScrollReveal>
    <ScrollReveal as="div" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" delay={0.1}>
      {productCollections.map((image, index) => (
        <motion.article
          key={image}
          className="flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-sm transition-transform duration-300 ease-out"
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        >
          <motion.img
            src={image}
            alt={`Product ${index + 1}`}
            className="h-48 w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          />
          <div className="flex flex-1 flex-col space-y-4 p-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Smoked Ash Burl</h3>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Code: V-10{index + 1}</p>
            </div>
            <p className="text-sm text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend ante vel.
            </p>
            <button
              type="button"
              className="mt-auto inline-flex items-center text-sm font-semibold text-amber-900 transition-all duration-300 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
            >
              View Specification
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.article>
      ))}
    </ScrollReveal>
  </div>
);

export default ProductsPage;

