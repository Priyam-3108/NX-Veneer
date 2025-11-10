import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Move3d, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const marqueeWords = [
  'Architectural',
  'Tailored',
  'Luminescent',
  'Sustainable',
  'Expressive',
  'Adaptive',
];

const featurePills = [
  'Curated Grain Narratives',
  'Light-reactive Finishes',
  'Acoustic Diffusion Panels',
  'Configurable Profiles',
];

const metrics = [
  { label: 'Design Studios', value: '320+', icon: Move3d },
  { label: 'Sustainability Index', value: '97%', icon: Sparkles },
  { label: 'Lead Time', value: '14 days', icon: Zap },
];

const TransformShowcase = () => (
  <ScrollReveal
    as="section"
    className="relative overflow-hidden rounded-3xl bg-neutral-950 text-neutral-50"
    delay={0.08}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />
    <motion.div
      className="absolute -left-24 top-16 h-60 w-60 rounded-full bg-amber-300/10 blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -right-12 bottom-6 h-64 w-64 rounded-full bg-emerald-200/10 blur-3xl"
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
    />
    <div className="relative z-10 grid gap-14 px-8 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-12 lg:px-16 lg:py-20">
      <div className="space-y-12">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-neutral-300">
            <Layers className="h-4 w-4 text-neutral-200" />
            Kinetic Veneer Story
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-neutral-50 sm:text-4xl md:text-[44px] md:leading-tight">
            We choreograph veneers to move with the light, the audience, and the architecture.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Veneer surfaces reimagined with programmable depth, reflective geometries, and a soft glow that
            subtly transforms throughout the day. Crafted for destinations where materiality is the lead
            storyteller.
          </p>
        </div>

        <div className="relative h-32 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-xl">
          <motion.div
            className="absolute left-0 top-0 flex w-[220%] -translate-x-[12%] items-center gap-10 py-8 text-4xl font-semibold tracking-tight text-neutral-50 md:text-[44px]"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 12%, rgba(0,0,0,0.85) 88%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 12%, rgba(0,0,0,0.85) 88%, rgba(0,0,0,0) 100%)',
            }}
          >
            {[...marqueeWords, ...marqueeWords].map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="whitespace-nowrap bg-gradient-to-r from-neutral-100 via-amber-100 to-neutral-200 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(250,250,249,0.25)]"
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-neutral-200">
          {featurePills.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/40 hover:bg-white/10"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mx-auto grid w-full max-w-3xl gap-6 sm:grid-cols-3 md:max-w-4xl lg:max-w-5xl">
          {metrics.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="group flex flex-col items-center rounded-[22px] border border-white/20 bg-white/5 px-6 py-7 backdrop-blur-xl shadow-[0_20px_60px_rgba(10,10,10,0.35)] transition duration-300 hover:-translate-y-2 hover:border-white/28 hover:bg-white/12"
            >
              <div className="flex w-full flex-col items-center border-b border-white/10 pb-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/15 via-white/6 to-transparent text-neutral-100 mb-2 transition duration-300 group-hover:border-white/30 group-hover:from-white/25 group-hover:bg-white/16">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <div className="flex flex-col items-center">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-200/80 whitespace-nowrap">
                    {label.split(' ')[0]}
                  </span>
                  {label.split(' ').slice(1).length > 0 && (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-200/80 whitespace-nowrap">
                      {label.split(' ').slice(1).join(' ')}
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-6 text-[28px] font-semibold text-neutral-50 leading-tight text-center">
                {
                  typeof value === "string" && value.split(" ").length > 1
                    ? (
                      <>
                        {value.split(" ")[0]}<br /><span className="text-[22px] font-semibold">{value.split(" ").slice(1).join(" ")}</span>
                      </>
                    ) : (
                      value
                    )
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[36px] border border-white/12 bg-gradient-to-br from-neutral-900 via-neutral-800/90 to-neutral-950 p-6 shadow-[0_45px_120px_rgba(12,12,12,0.6)]"
          whileHover={{ rotateX: 8, rotateY: -8, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        >
          <motion.div
            className="absolute inset-0 rounded-[32px] border border-white/8"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-10 rounded-[28px] bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center"
            animate={{ scale: [1, 1.04, 1], rotate: [0, 0.6, 0] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-neutral-300/90">
                  Module
                </p>
                <h3 className="text-2xl font-semibold text-neutral-50">Halo Veneer Array</h3>
              </div>
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-100"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
              >
                <Sparkles className="h-4 w-4" />
                Live
              </motion.span>
            </div>

            <div className="space-y-4 rounded-[28px] bg-neutral-950/65 p-5 backdrop-blur-xl">
              <p className="text-sm leading-relaxed text-neutral-300">
                A layered veneer facade that captures kinetic lighting, morphing through subtle gradients as
                viewers move through the space. Engineered for hospitality, cultural, and flagship retail
                environments.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs font-medium text-neutral-200">
                <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                  <p className="text-neutral-400">Dimensions</p>
                  <p className="mt-1 text-neutral-50">900 x 2400 mm</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                  <p className="text-neutral-400">Finish</p>
                  <p className="mt-1 text-neutral-50">Ebonized Oak</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                  <p className="text-neutral-400">Lighting</p>
                  <p className="mt-1 text-neutral-50">Integrated Edge Glow</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                  <p className="text-neutral-400">Atmosphere</p>
                  <p className="mt-1 text-neutral-50">Warm Ember 3200K</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </ScrollReveal>
);

export default TransformShowcase;

