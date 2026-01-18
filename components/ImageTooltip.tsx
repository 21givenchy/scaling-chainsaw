'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImageTooltipProps {
  children: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

export default function ImageTooltip({
  children,
  imageSrc,
  imageAlt = 'Tooltip image',
  className = '',
}: ImageTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              left: mousePosition.x + 20,
              top: mousePosition.y + 20,
              pointerEvents: 'none',
              zIndex: 9999,
            }}
          >
            <div className="w-48 h-48 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
