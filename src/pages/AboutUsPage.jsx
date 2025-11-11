import React from 'react';
import { motion } from 'framer-motion';
import { values, teamMembers } from '../data/constants';
import ScrollReveal from '../components/ScrollReveal';
import usePageMetadata from '../hooks/usePageMetadata';

const AboutUsPage = () => {
  usePageMetadata({
    title: 'About Us',
    description:
      'Learn about Veneer’s story, decades of craftsmanship, sustainable sourcing, and the design team creating bespoke veneer experiences worldwide.',
  });

  return (
    <div className="space-y-16">
    <ScrollReveal as="section" className="overflow-hidden rounded-3xl bg-stone-900 text-stone-100 fade-in-up">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col justify-center space-y-6 px-8 py-16 text-neutral-50 md:px-12 lg:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">About Veneer</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Decades of Craftsmanship, Tailored for Tomorrow
          </h1>
          <p className="text-base text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat, orci id tincidunt
            finibus, orci arcu vehicula est, in posuere ligula nisl eu ex. Fusce lacinia eleifend congue.
          </p>
        </div>
        <motion.img
          src="https://placehold.co/1400x1000/4A3A2D/F5EFE6?text=About+Veneer"
          alt="About Veneer"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </ScrollReveal>

    <ScrollReveal
      as="section"
      className="grid gap-10 rounded-3xl bg-stone-200/60 px-8 py-12 md:grid-cols-2 md:px-12"
      delay={0.05}
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-neutral-900">Our Story</h2>
        <p className="text-base text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in libero at urna dapibus
          maximus sit amet id elit. Phasellus imperdiet nisl non malesuada fermentum. Vestibulum
          ullamcorper imperdiet dui, vel gravida nisl laoreet ut.
        </p>
        <p className="text-base text-neutral-600">
          Sed ac nisl id elit congue aliquet. Aenean laoreet porta neque, quis consequat ipsum molestie
          vitae. Quisque et sem a sapien pretium rutrum sed sit amet turpis. Mauris vel efficitur lorem.
        </p>
        <p className="text-base text-neutral-600">
          Etiam finibus, nisl eu semper ultricies, justo risus vehicula sapien, a congue ligula lorem sed
          nulla. Donec at leo quis sapien malesuada semper quis sit amet tortor.
        </p>
      </div>
      <div className="grid gap-4 rounded-3xl bg-white p-8 shadow-sm">
        <div className="space-y-3 border-b border-neutral-200 pb-6">
          <h3 className="text-xl font-semibold text-neutral-900">Our Promise</h3>
          <p className="text-sm text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, urna eget laoreet
            ullamcorper, nibh lacus dapibus enim, at pretium nisi sapien nec neque.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <span>Custom projects annually</span>
            <span className="text-base font-semibold text-neutral-900">150+</span>
          </div>
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <span>Global design partners</span>
            <span className="text-base font-semibold text-neutral-900">85</span>
          </div>
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <span>Sustainable sourcing</span>
            <span className="text-base font-semibold text-neutral-900">100%</span>
          </div>
        </div>
      </div>
    </ScrollReveal>

      <ScrollReveal as="section" className="space-y-10 fade-in-up" delay={0.1}>
      <h2 className="text-3xl font-semibold text-neutral-900">Core Values</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {values.map(({ title, description, icon: Icon }) => (
          <motion.div
            key={title}
            className="flex flex-col gap-4 rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm transition-transform duration-300 ease-out"
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900/5"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 6 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            >
              <Icon className="h-6 w-6 text-neutral-900" />
            </motion.div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
              <p className="text-sm text-neutral-600">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollReveal>

    <ScrollReveal
      as="section"
      className="space-y-10 rounded-3xl bg-stone-200/60 px-8 py-12 md:px-12"
      delay={0.15}
    >
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h2 className="text-3xl font-semibold text-neutral-900">Meet the Team</h2>
        <p className="max-w-xl text-sm text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, velit acongue
          dignissim, lectus lorem fermentum enim, sit amet vehicula ligula orci vitae ligula.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="space-y-4 rounded-3xl bg-stone-50 p-6 shadow-sm transition-transform duration-300 ease-out"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: index * 0.02 }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="h-64 w-full rounded-2xl object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">{member.name}</h3>
              <p className="text-sm text-neutral-600">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollReveal>
    </div>
  );
};

export default AboutUsPage;

