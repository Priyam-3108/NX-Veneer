import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { contactMethods } from '../data/constants';
import ScrollReveal from '../components/ScrollReveal';

const ContactPage = () => (
  <div className="space-y-12">
    <ScrollReveal as="header" className="space-y-4 text-center md:text-left fade-in-up">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Connect</p>
      <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl">Contact Us</h1>
      <p className="mx-auto max-w-2xl text-base text-neutral-600 md:mx-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique, velit a sodales aliquam,
        orci odio ullamcorper lacus, ac placerat risus felis a augue.
      </p>
    </ScrollReveal>
    <ScrollReveal
      as="section"
      className="grid gap-10 rounded-3xl bg-stone-200/60 px-8 py-12 md:grid-cols-[0.9fr_1.1fr] md:px-12"
      delay={0.05}
    >
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-neutral-900">Studio Details</h2>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="rounded-2xl bg-stone-50 p-6 shadow-sm transition-transform duration-300 ease-out"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: index * 0.02 }}
            >
              <h3 className="text-lg font-semibold text-neutral-900">{method.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{method.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.form
        className="space-y-6 rounded-3xl bg-stone-50 p-8 shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Enter your company"
            className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-neutral-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Share your project details"
            className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-amber-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
          />
        </div>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
        >
          Submit Inquiry
        </button>
      </motion.form>
    </ScrollReveal>
    <ScrollReveal
      as="section"
      className="overflow-hidden rounded-3xl border border-stone-200 bg-white/70 px-8 py-12 text-center"
      delay={0.1}
    >
      <h2 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
        Schedule a Studio Consultation
      </h2>
      <p className="mt-4 text-base text-neutral-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat pharetra nunc, a
        fermentum sapien gravida at.
      </p>
      <button
        type="button"
        className="mt-6 inline-flex items-center rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-stone-50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
      >
        Book an Appointment
        <ChevronRight className="ml-2 h-4 w-4" />
      </button>
    </ScrollReveal>
  </div>
);

export default ContactPage;

