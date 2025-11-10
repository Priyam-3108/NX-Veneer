import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { featuredProducts } from '../data/constants';
import ScrollReveal from '../components/ScrollReveal';
import TransformShowcase from '../components/TransformShowcase';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-20">
      <HeroSection />

      <ScrollReveal
        as="section"
        className="space-y-10 fade-in-up"
        delay={0.05}
      >
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Featured Collection
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-900 md:text-4xl">
              Signature Veneers Curated for Distinction
            </h2>
          </div>
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="inline-flex items-center rounded-full border border-amber-900 px-5 py-2 text-sm font-semibold text-amber-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-900 hover:text-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
          >
            Explore All
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <motion.article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-50 shadow-sm transition-transform duration-300 ease-out"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            >
              <div className="relative">
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-neutral-950/80 px-3 py-1 text-xs uppercase tracking-widest text-neutral-100">
                  Limited
                </span>
              </div>
              <div className="flex flex-1 flex-col space-y-4 p-6">
                <h3 className="text-lg font-semibold text-neutral-900">{product.name}</h3>
                <p className="text-sm text-neutral-600">{product.description}</p>
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-semibold text-amber-900 transition-all duration-300 group-hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </ScrollReveal>

      <TransformShowcase />

      <ScrollReveal
        as="section"
        className="grid gap-14 rounded-3xl bg-stone-200/50 px-8 py-14 md:grid-cols-[1.2fr_1fr] md:px-12"
        delay={0.1}
      >
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">About Us</p>
          <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
            Sustainable Quality, Unmatched Design
          </h2>
          <p className="text-base text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas, tortor id tincidunt
            auctor, mi ante volutpat odio, sit amet dapibus velit leo non risus. Aliquam erat volutpat.
          </p>
          <button
            type="button"
            onClick={() => navigate('/about-us')}
            className="inline-flex items-center rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
          >
            Learn More
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="https://placehold.co/1000x800/B8A693/1F1F1F?text=Crafted+Layers"
            alt="Sustainable Veneer"
            className="h-full w-full object-cover"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="overflow-hidden rounded-3xl border border-stone-200 bg-white/70"
        delay={0.15}
      >
        <div className="grid gap-10 px-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-14 md:py-16">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Projects</p>
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Crafting Iconic Spaces for Visionary Brands
            </h2>
            <p className="text-base text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies nibh vitae
              sollicitudin scelerisque. Nulla facilisi. Suspendisse potenti. Curabitur eget quam sit amet
              orci viverra egestas.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate('/clients')}
                className="inline-flex items-center rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-stone-50 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
              >
                View Client Work
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center rounded-full border border-amber-900/50 px-6 py-3 text-sm font-semibold text-amber-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-amber-900 hover:bg-amber-900 hover:text-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
              >
                Contact Our Studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://placehold.co/1200x800/8A6F4D/FFFFFF?text=Veneer+Collection"
                alt="Client Project"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-6 rounded-3xl bg-neutral-100 px-6 py-6">
              <div>
                <p className="text-sm font-semibold text-neutral-900">Global Project Delivery</p>
                <p className="text-sm text-neutral-600">Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-neutral-400" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default HomePage;

