import { useEffect } from 'react';

const BRAND_NAME = 'Veneer';
const DEFAULT_TITLE = `${BRAND_NAME} | Luxury Wood Veneers & Bespoke Surfaces`;
const DEFAULT_DESCRIPTION =
  'Veneer crafts premium wood veneers, bespoke panels, and design-led surfaces for architects, designers, and luxury interiors worldwide.';

const ensureElement = (selector, factory) => {
  if (typeof document === 'undefined') return null;
  const existing = document.head.querySelector(selector);
  if (existing) return existing;

  const element = factory();
  document.head.appendChild(element);
  return element;
};

const setMetaTag = (attributes, content) => {
  const selector = Object.entries(attributes)
    .map(([key, value]) => `[${key}="${value}"]`)
    .join('');

  const meta = ensureElement(`meta${selector}`, () => {
    const element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  });

  if (meta && typeof content === 'string') {
    meta.setAttribute('content', content);
  }
};

const setLinkTag = (rel, href) => {
  if (typeof href !== 'string' || href.length === 0) return;

  const link = ensureElement(`link[rel="${rel}"]`, () => {
    const element = document.createElement('link');
    element.setAttribute('rel', rel);
    return element;
  });

  if (link) {
    link.setAttribute('href', href);
  }
};

const usePageMetadata = ({ title, description, canonical } = {}) => {
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const formattedTitle = title ? `${title} | ${BRAND_NAME}` : DEFAULT_TITLE;
    const metaDescription = description?.trim().length ? description : DEFAULT_DESCRIPTION;
    const canonicalUrl =
      canonical ||
      (typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : undefined);

    document.title = formattedTitle;

    setMetaTag({ name: 'description' }, metaDescription);
    setMetaTag({ property: 'og:title' }, formattedTitle);
    setMetaTag({ property: 'og:description' }, metaDescription);
    setMetaTag({ property: 'og:type' }, 'website');
    if (canonicalUrl) {
      setMetaTag({ property: 'og:url' }, canonicalUrl);
    }

    setMetaTag({ name: 'twitter:title' }, formattedTitle);
    setMetaTag({ name: 'twitter:description' }, metaDescription);
    setMetaTag({ name: 'twitter:card' }, 'summary_large_image');

    if (canonicalUrl) {
      setLinkTag('canonical', canonicalUrl);
    }

    return undefined;
  }, [title, description, canonical]);
};

export default usePageMetadata;

