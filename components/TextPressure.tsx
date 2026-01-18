'use client';

import { useEffect, useRef } from 'react';

interface TextPressureProps {
  text: string;
  fontFamily?: string;
  fontUrl?: string;
  minFontSize?: number;
  textColor?: string;
}

export default function TextPressure({
  text,
  fontFamily = 'Compressa VF',
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
  minFontSize = 320,
  textColor = '#FFFFFF',
}: TextPressureProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const fontLoadedRef = useRef(false);

  useEffect(() => {
    // Load custom font
    const loadFont = async () => {
      if (fontLoadedRef.current) return;

      try {
        const font = new FontFace(fontFamily, `url(${fontUrl})`);
        await font.load();
        document.fonts.add(font);
        fontLoadedRef.current = true;
      } catch (error) {
        console.error('Error loading font:', error);
      }
    };

    loadFont();
  }, [fontFamily, fontUrl]);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = textElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate pressure based on distance from center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );
      const maxDistance = Math.sqrt(
        Math.pow(centerX, 2) + Math.pow(centerY, 2)
      );
      
      const pressure = Math.max(0, 1 - distance / maxDistance);
      const fontVariation = 50 + pressure * 100; // Range from 50 to 150
      
      textElement.style.fontVariationSettings = `"wdth" ${fontVariation}`;
    };

    const handleMouseLeave = () => {
      textElement.style.fontVariationSettings = `"wdth" 100`;
    };

    textElement.addEventListener('mousemove', handleMouseMove);
    textElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      textElement.removeEventListener('mousemove', handleMouseMove);
      textElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        fontFamily: fontFamily,
        fontSize: `${minFontSize}px`,
        color: textColor,
        fontWeight: 'bold',
        lineHeight: 1,
        userSelect: 'none',
        cursor: 'default',
        fontVariationSettings: '"wdth" 100',
        transition: 'font-variation-settings 0.1s ease',
      }}
    >
      {text}
    </div>
  );
}
