import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, socialLinks } from '../data/constants';
import logoMark from '../assets/logo.jpg';

const Footer = () => (
  <footer className="mt-8 md:mt-10 rounded-t-3xl bg-stone-900 text-stone-300">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="NX Veneer logo"
            className="h-11 w-11 rounded-full border border-neutral-800 object-cover"
          />
          <h3 className="text-xl font-semibold tracking-[0.3em] text-stone-50">NX VENEER</h3>
        </div>
        <p className="text-sm leading-relaxed text-stone-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur, ipsum eleifend
          interdum, nibh nisl fermentum diam, non placerat massa.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-stone-400">Contact</h4>
        <p className="text-sm text-stone-400">
          123 Veneer Avenue, Design District, NY 10013
          <br />
          +1 (212) 555-0190
          <br />
          hello@veneerstudio.com
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-stone-400">Quick Links</h4>
        <nav className="flex flex-col space-y-2 text-sm text-stone-200">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-left transition duration-200 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-stone-400">Follow</h4>
        <div className="flex gap-3">
          {socialLinks.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-200 transition duration-200 hover:border-amber-500 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-stone-800 py-6 text-center text-xs uppercase tracking-[0.3em] text-stone-500">
      © 2025 Veneer. All rights reserved.
    </div>
  </footer>
);

export default Footer;

