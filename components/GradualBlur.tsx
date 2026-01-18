'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradualBlurProps {
  children: ReactNode;
  isBlurred?: boolean;
  blurAmount?: number;
  duration?: number;
  className?: string;
}

export default function GradualBlur({
  children,
  isBlurred = false,
  blurAmount = 5,
  duration = 0.3,
  className = '',
}: GradualBlurProps) {
  return (
    <motion.div
      animate={{
        filter: isBlurred ? `blur(${blurAmount}px)` : 'blur(0px)',
      }}
      transition={{
        duration,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
