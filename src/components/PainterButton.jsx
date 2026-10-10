import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const wallpaperPanels = [
  { name: 'Blau', fromTop: true },
  { name: 'Grün', fromTop: false },
  { name: 'Orange', fromTop: true },
  { name: 'Rot', fromTop: false }
];

export default function PainterButton({ 
  as = "a",
  href = "#kontakt", 
  type = "button",
  onClick,
  size = "default", // 'default' | 'sm' | 'lg'
  icon = "up-right", // 'up-right' | 'right'
  className = "",
  children 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const isSmall = size === "sm";
  const isLarge = size === "lg";

  const paddingClass = isSmall 
    ? "pl-4 sm:pl-5 pr-1.5 py-1.5" 
    : isLarge
    ? "pl-8 sm:pl-10 pr-3 py-3.5"
    : "pl-7 sm:pl-8 pr-2.5 py-2.5";

  const textClass = isSmall
    ? "text-[13px] sm:text-[13.5px]"
    : isLarge
    ? "text-[16px] sm:text-[17px]"
    : "text-[15px] sm:text-[15.5px]";

  const orbSize = isSmall
    ? "w-7 h-7 sm:w-8 sm:h-8"
    : isLarge
    ? "w-11 h-11 sm:w-12 sm:h-12"
    : "w-9 h-9 sm:w-10 sm:h-10";

  const iconSize = isSmall
    ? "w-3.5 h-3.5"
    : isLarge
    ? "w-5 h-5"
    : "w-4 h-4 sm:w-4.5 sm:h-4.5";

  const commonProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick,
    className: `relative inline-flex items-center justify-center ${paddingClass} overflow-hidden rounded-full shadow-md hover:shadow-xl transition-all duration-300 active:scale-[0.98] group cursor-pointer border border-white/20 select-none ${className}`
  };

  const content = (
    <>
      {/* 4-Farben Verlauf im Hintergrund passend zur Jessica Meyer Marken-Identität */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0084C7] via-[#10B981] via-[#F59E0B] to-[#E11D48] pointer-events-none" />

      {/* 4 wechselnde weiße Übertapezierelemente für den Hover-Effekt:
          - Blau (0): Oben nach Unten
          - Grün (1): Unten nach Oben
          - Orange (2): Oben nach Unten
          - Rot (3): Unten nach Oben
      */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none">
        {wallpaperPanels.map((panel, idx) => (
          <div 
            key={idx} 
            className="flex-1 relative h-full overflow-hidden"
          >
            <motion.div
              initial={{ y: panel.fromTop ? '-102%' : '102%' }}
              animate={{ y: isHovered ? '0%' : (panel.fromTop ? '-102%' : '102%') }}
              transition={{
                duration: 0.26,
                delay: isHovered ? idx * 0.09 : (3 - idx) * 0.04,
                ease: [0.25, 1, 0.5, 1]
              }}
              className="absolute -inset-x-1 inset-y-0 bg-white z-10"
            />
          </div>
        ))}
      </div>

      {/* Vollflächiger Nahtlos-Weiß-Abschluss bei vollständigem Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ delay: isHovered ? 0.36 : 0, duration: 0.12 }}
        className="absolute inset-0 bg-white pointer-events-none z-15"
      />

      {/* Button-Inhalt */}
      <span className="relative z-20 inline-flex items-center justify-center space-x-3 sm:space-x-4">
        <span 
          className={`${textClass} font-headline font-bold tracking-wide transition-colors duration-300 ${
            isHovered ? 'text-[#171815]' : 'text-white'
          }`}
          style={!isHovered ? { textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.35)' } : {}}
        >
          {children || 'Projekt unverbindlich anfragen'}
        </span>

        {/* Action Orb mit perfekt zentriertem Pfeil */}
        <span 
          className={`${orbSize} rounded-full flex items-center justify-center shadow-sm transition-all duration-300 shrink-0 ${
            isHovered 
              ? 'bg-[#171815] text-white scale-105' 
              : 'bg-white/95 text-[#0084C7]'
          }`}
        >
          {icon === "right" ? (
            <ArrowRight 
              className={`${iconSize} block ${
                isHovered ? 'text-white' : 'text-[#0084C7]'
              } transition-colors duration-200`} 
              strokeWidth={2.5} 
            />
          ) : (
            <ArrowUpRight 
              className={`${iconSize} block ${
                isHovered ? 'text-white' : 'text-[#0084C7]'
              } transition-colors duration-200`} 
              strokeWidth={2.5} 
            />
          )}
        </span>
      </span>
    </>
  );

  if (as === "button") {
    return (
      <button type={type} {...commonProps}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} {...commonProps}>
      {content}
    </a>
  );
}
