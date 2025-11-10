import React, { useState, useCallback } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/constants';
import logoMark from '../assets/logo.jpg';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavigate = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={handleNavigate}
          className="flex items-center gap-3 text-neutral-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
        >
          <img
            src={logoMark}
            alt="NX Veneer logo"
            className="h-11 w-11 rounded-full border border-neutral-200 object-cover"
          />
          <span className="text-xl font-semibold tracking-[0.3em] text-neutral-900">
            NX VENEER
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`relative text-sm uppercase tracking-[0.25em] transition-colors duration-200 hover:text-amber-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 ${
                isActive(link.path)
                  ? 'text-amber-900 after:absolute after:left-0 after:bottom-[-10px] after:h-[2px] after:w-full after:bg-amber-900'
                  : 'text-neutral-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full border border-neutral-300 p-2 text-neutral-700 transition hover:border-neutral-500 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 md:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isMobileOpen && (
        <div className="border-t border-stone-200 bg-stone-50 md:hidden">
          <nav className="mx-auto flex max-w-6xl animate-[fadeInUp_0.4s_ease-out] flex-col space-y-2 px-6 py-6 text-base font-medium text-neutral-700">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={handleNavigate}
                className={`flex items-center justify-between rounded-lg border border-transparent px-4 py-3 transition duration-300 ease-in-out hover:-translate-y-0.5 hover:border-amber-900/20 hover:bg-white ${
                  isActive(link.path) ? 'bg-white text-amber-900' : ''
                }`}
              >
                {link.label}
                <ChevronRight className="h-5 w-5 text-neutral-400" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

