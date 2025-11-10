import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 bg-neutral-900 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;

