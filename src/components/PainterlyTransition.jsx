import React from 'react';
import { motion } from 'framer-motion';

export default function PainterlyTransition() {
  return (
    <div className="relative w-full pb-6 sm:pb-8 md:pb-10 select-none pointer-events-none">
      <div className="max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full flex flex-col items-center"
        >
          {/* Hauchfeine, architektonische Designer-Linie mit dezentem 4-Farben-Verlauf */}
          <div className="relative w-full h-[1px]">
            {/* Feine Basislinie */}
            <div className="absolute inset-0 bg-slate-200/50" />
            
            {/* Zarter, edler 4-Farben-Farbverlauf der Meistermarke (präzise, dezent, hochwertig) */}
            <div 
              className="absolute inset-0 opacity-45"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #0084C7 15%, #10B981 38%, #F59E0B 62%, #E11D48 85%, transparent 100%)'
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
