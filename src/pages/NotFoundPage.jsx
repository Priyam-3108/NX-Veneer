import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search, Grid3x3 } from 'lucide-react';
import usePageMetadata from '../hooks/usePageMetadata';
import { NAV_LINKS } from '../data/constants';

const NotFoundPage = () => {
  const navigate = useNavigate();

  usePageMetadata({
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist. Return to Veneer homepage or browse our collections.',
  });

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-8xl font-bold text-neutral-900 md:text-9xl"
          >
            404
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -right-8 -top-4"
          >
            <Grid3x3 className="h-16 w-16 text-amber-900/20" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
            Page Not Found
          </h1>
          <p className="mx-auto max-w-md text-base text-neutral-600">
            The page you are looking for might have been removed, had its name changed, or is temporarily
            unavailable.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col items-center gap-4 sm:flex-row"
      >
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-900 hover:bg-amber-900 hover:text-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full max-w-2xl space-y-6 rounded-3xl border border-stone-200 bg-white/70 px-8 py-10 shadow-sm"
      >
        <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
          <Search className="h-4 w-4" />
          Popular Pages
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {NAV_LINKS.filter((link) => link.path !== '/').map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => navigate(link.path)}
              className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-3 text-left text-sm font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-amber-900 hover:bg-amber-900 hover:text-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
            >
              {link.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

