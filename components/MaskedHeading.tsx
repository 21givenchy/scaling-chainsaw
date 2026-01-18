'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MaskedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function MaskedHeading({
  children,
  className = '',
  delay = 0,
}: MaskedHeadingProps) {
  const maskVariants = {
    hidden: { 
      clipPath: 'inset(0 100% 0 0)',
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: 1,
        delay,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={maskVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
