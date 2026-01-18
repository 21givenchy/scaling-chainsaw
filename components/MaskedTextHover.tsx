'use client';

import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MaskedTextHoverProps {
  children: ReactNode;
  className?: string;
  hoverColor?: string;
}

export default function MaskedTextHover({
  children,
  className = '',
  hoverColor = '#000000',
}: MaskedTextHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{
          clipPath: isHovered ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
        }}
        transition={{
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          backgroundColor: hoverColor,
          zIndex: 0,
        }}
      />
      <motion.span
        className="absolute inset-0 flex items-center"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{
          clipPath: isHovered ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
        }}
        transition={{
          duration: 0.4,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          color: '#ffffff',
          mixBlendMode: 'difference',
          zIndex: 20,
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
