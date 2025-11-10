import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({
  as: Component = 'div',
  children,
  delay = 0,
  offset = '-10%',
  className = '',
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: offset,
  });

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default ScrollReveal;

