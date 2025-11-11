import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { productCatalog } from '../data/constants';
import ScrollReveal from '../components/ScrollReveal';
import usePageMetadata from '../hooks/usePageMetadata';

const ProductsPage = () => {
  usePageMetadata({
    title: 'Products',
    description:
      'Browse Veneer’s curated range of premium wood veneers, exotic burls, and specialty finishes tailored for architects, designers, and bespoke millwork.',
  });

  const navigate = useNavigate();
  const filters = useMemo(
    () => ['All', ...Array.from(new Set(productCatalog.map((item) => item.category)))],
    [],
  );
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') return productCatalog;
    return productCatalog.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-12">
      <ScrollReveal as="header" className="space-y-4 fade-in-up">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          curated range
        </p>
        <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">Our Collections</h1>
        <p className="max-w-2xl text-base text-neutral-600">
          Discover signature veneers and architectural panels crafted for elevated hospitality, residential, and
          commercial environments. Each collection is engineered for impeccable visual continuity.
        </p>
      </ScrollReveal>

      <ScrollReveal as="div" className="flex flex-wrap gap-3 fade-in-up" delay={0.05}>
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100 ${
                isActive
                  ? 'border-amber-900 bg-amber-900 text-stone-50 shadow-sm'
                  : 'border-stone-300 text-neutral-700 hover:-translate-y-0.5 hover:border-amber-900 hover:text-amber-900'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </ScrollReveal>

      <ScrollReveal as="div" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" delay={0.1}>
        {filteredProducts.map((product) => (
          <motion.article
            key={product.slug}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-sm transition-transform duration-300 ease-out"
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            <motion.img
              src={product.heroImage}
              alt={product.name}
              className="h-48 w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            />
            <div className="flex flex-1 flex-col space-y-4 p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-stone-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                  {product.category}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                  {product.code}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900">{product.name}</h3>
                <p className="text-sm text-neutral-600">{product.summary}</p>
              </div>
              <div className="space-y-2 text-sm text-neutral-500">
                {product.highlights.slice(0, 2).map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-0.5 h-4 w-4 text-amber-900" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => navigate(`/products/${product.slug}`)}
                className="mt-auto inline-flex items-center rounded-full border border-amber-900 px-5 py-2 text-sm font-semibold text-amber-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-900 hover:text-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
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
};

export default ProductsPage;

