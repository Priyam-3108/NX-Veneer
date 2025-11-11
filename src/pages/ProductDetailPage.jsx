import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  PhoneCall,
  Sparkles,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import usePageMetadata from '../hooks/usePageMetadata';
import { productCatalog } from '../data/constants';

const ProductDetailPage = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  const product = useMemo(
    () => productCatalog.find((item) => item.slug === productSlug),
    [productSlug],
  );

  useEffect(() => {
    if (!product) {
      const timeout = setTimeout(() => {
        navigate('/products', { replace: true });
      }, 600);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [product, navigate]);

  usePageMetadata(
    product
      ? {
          title: `${product.name} Specification`,
          description: `${product.summary} Explore technical data, finish options, and recommended applications for ${product.name}.`,
        }
      : { title: 'Product Details' },
  );

  if (!product) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
          Redirecting
        </p>
        <p className="max-w-md text-base text-neutral-600">
          The product you were searching for is unavailable. We are guiding you back to the collections
          overview.
        </p>
      </div>
    );
  }

  const {
    name,
    category,
    code,
    heroImage,
    summary,
    description,
    gallery,
    highlights,
    applications,
    finishes,
    specifications,
    sustainability,
  } = product;

  return (
    <div className="space-y-14">
      <section className="overflow-hidden rounded-3xl bg-neutral-950 text-stone-50 shadow-xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between space-y-8 px-8 py-12 md:px-12 lg:px-14">
            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <button
                type="button"
                onClick={() => navigate('/products')}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-50 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to collections
              </button>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-600">/</span>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">{name}</span>
            </div>

            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-stone-50/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-stone-200">
                {category}
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{name}</h1>
              <p className="max-w-xl text-base text-neutral-300">{summary}</p>
            </div>

            <div className="grid gap-4 text-sm text-neutral-300 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Product Code</p>
                <p className="mt-1 text-base font-semibold text-stone-50">{code}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Ideal Applications</p>
                <p className="mt-1 text-base font-semibold text-stone-50">
                  {applications.slice(0, 2).join(' • ')}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                <PhoneCall className="h-4 w-4" />
                Book a consultation
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-50 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                <FileText className="h-4 w-4" />
                Download spec sheet
              </button>
            </div>
          </div>
          <motion.div
            className="relative h-full min-h-[360px] overflow-hidden"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={heroImage} alt={name} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      <ScrollReveal
        as="section"
        className="grid gap-8 rounded-3xl bg-white/70 px-8 py-12 text-neutral-900 shadow-sm md:px-12 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="space-y-5">
          <h2 className="flex items-center gap-2 text-2xl font-semibold">
            <Sparkles className="h-5 w-5 text-amber-700" />
            Narrative & Craft
          </h2>
          <p className="text-base text-neutral-600">{description}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
                <p className="text-sm text-neutral-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5 rounded-3xl border border-stone-200 bg-stone-50/80 p-6">
          <h3 className="text-xl font-semibold text-neutral-900">Finish Options</h3>
          <p className="text-sm text-neutral-600">
            Curated finishes ensure the veneer performs beautifully under varied lighting and usage conditions.
          </p>
          <div className="flex flex-wrap gap-2">
            {finishes.map((finish) => (
              <span
                key={finish}
                className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700"
              >
                {finish}
              </span>
            ))}
          </div>
          <div className="rounded-2xl bg-neutral-900 px-5 py-4 text-sm text-stone-200">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Sustainability</p>
            <p className="mt-2 font-semibold">{sustainability.certification}</p>
            <p className="mt-1 text-neutral-300">{sustainability.statement}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="grid gap-6 rounded-3xl border border-stone-200 bg-stone-50 px-8 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-12"
        delay={0.05}
      >
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-neutral-900">Recommended Applications</h2>
          <p className="text-sm text-neutral-600">
            Crafted for interior environments demanding a balance of beauty and performance.
          </p>
          <ul className="space-y-3 text-sm text-neutral-700">
            {applications.map((application) => (
              <li key={application} className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-4 w-4 text-amber-900" />
                <span>{application}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">Technical Specifications</h3>
          <div className="grid gap-3 rounded-2xl bg-white p-6 shadow-sm">
            {specifications.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1 rounded-xl border border-stone-100 bg-stone-50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  {label}
                </p>
                <p className="text-sm font-medium text-neutral-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="space-y-6 overflow-hidden rounded-3xl bg-neutral-100 px-8 py-12 md:px-12"
        delay={0.1}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">Project Gallery</h2>
            <p className="text-sm text-neutral-600">
              Inspiration from recent installations using {name}.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-900 hover:text-amber-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100"
          >
            <Sparkles className="h-4 w-4" />
            Discuss Custom Finish
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((image) => (
            <motion.div
              key={image}
              className="overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img src={image} alt={`${name} application`} className="h-64 w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProductDetailPage;

