'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollVelocityProps {
  children: ReactNode;
  defaultVelocity?: number;
  className?: string;
}

export default function ScrollVelocity({
  children,
  defaultVelocity = 5,
  className = '',
}: ScrollVelocityProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, defaultVelocity * 100]
  );

  return (
    <div ref={targetRef} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
