import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ['0%', '25%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-3xl bg-neutral-900 text-neutral-50 min-h-[420px] md:min-h-[520px] lg:min-h-[560px]"
    >
      <motion.img
        src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80"
        alt="Veneer Hero"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        style={{ scale: imageScale, opacity: imageOpacity }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/65 to-transparent" />
      <motion.div
        className="relative z-10 flex min-h-[420px] flex-col justify-center px-8 py-16 md:min-h-[520px] md:px-14 lg:min-h-[560px] lg:px-20 lg:py-28"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div
          className="max-w-xl space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.4em] text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Veneer Studio
          </motion.p>
          <motion.h1
            className="text-4xl font-semibold leading-tight text-neutral-50 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Perfection in Every Layer
          </motion.h1>
          <motion.p
            className="text-base text-neutral-200 md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curated veneers that redefine luxury
            interiors with sustainable craftsmanship.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="inline-flex items-center justify-center rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-stone-50 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
            >
              Discover Our Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/clients')}
              className="inline-flex items-center justify-center rounded-full border border-amber-300/60 px-6 py-3 text-sm font-semibold text-stone-50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-amber-200 hover:bg-amber-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
            >
              View Client Gallery
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

