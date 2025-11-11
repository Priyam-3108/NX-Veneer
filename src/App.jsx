import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutUsPage from './pages/AboutUsPage';
import ClientsPage from './pages/ClientsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  const location = useLocation();

  return (
    <div
      className="min-h-screen bg-stone-100"
      style={{ fontFamily: 'Akkurat, Arial, Helvetica, sans-serif' }}
    >
      <ScrollProgressBar />
      <ScrollToTop behavior="instant" />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productSlug" element={<ProductDetailPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
