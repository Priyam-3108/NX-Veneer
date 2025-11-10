import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { newsItems } from '../data/constants';
import ScrollReveal from '../components/ScrollReveal';

const NewsPage = () => (
  <div className="space-y-12">
    <ScrollReveal as="header" className="space-y-4 fade-in-up">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Insights</p>
      <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">News & Events</h1>
      <p className="max-w-2xl text-base text-neutral-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus.
      </p>
    </ScrollReveal>
    <ScrollReveal as="div" className="grid gap-8 md:grid-cols-2 xl:grid-cols-3" delay={0.05}>
      {newsItems.map((item, index) => (
        <motion.article
          key={item.title}
          className="flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-sm transition-transform duration-300 ease-out"
          whileHover={{ y: -12, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22, delay: index * 0.01 }}
        >
          <motion.img
            src={item.image}
            alt={item.title}
            className="h-52 w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex flex-1 flex-col space-y-4 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              {item.date}
            </p>
            <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
            <p className="text-sm text-neutral-600">{item.excerpt}</p>
            <button
              type="button"
              className="mt-auto inline-flex items-center text-sm font-semibold text-amber-900 transition-all duration-300 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
            >
              Read Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.article>
      ))}
    </ScrollReveal>
    <ScrollReveal
      as="section"
      className="overflow-hidden rounded-3xl bg-stone-900 px-8 py-12 text-stone-100 md:px-12"
      delay={0.1}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Newsletter
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">Stay Informed</h2>
          <p className="max-w-xl text-sm text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lacinia dui. Integer
            vel urna id dolor tempor aliquet.
          </p>
        </div>
        <form className="flex w-full flex-col gap-3 rounded-full bg-stone-900/40 p-2 text-neutral-900 sm:flex-row sm:rounded-full sm:bg-stone-100 sm:p-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-full bg-transparent px-4 py-3 text-sm text-stone-50 placeholder:text-stone-400 focus:outline-none focus:ring-0 sm:bg-transparent sm:text-stone-900"
          />
          <button
            type="button"
            className="rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-stone-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 sm:bg-amber-700 sm:hover:bg-amber-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </ScrollReveal>
  </div>
);

export default NewsPage;

