import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ThemeConfig, Chef } from '../types';
import { CHEFS } from '../constants';

interface ChefsProps {
  theme: ThemeConfig;
}

// Internal component for Parallax Image Card
const ParallaxCard: React.FC<{ chef: Chef; index: number; theme: ThemeConfig }> = ({ chef, index, theme }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Image moves slightly opposite to scroll direction to create depth
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2 }}
      className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${theme.cardBg}`}
    >
      <div className="h-80 overflow-hidden relative">
        <motion.img 
          style={{ y, scale: 1.15 }}
          src={chef.image} 
          alt={chef.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 relative z-10">
        <h3 className={`text-2xl font-bold mb-1 ${theme.text} ${theme.fontHeading}`}>{chef.name}</h3>
        <p className={`text-sm font-bold uppercase tracking-wider mb-4 ${theme.accentText} ${theme.fontBody}`}>{chef.role}</p>
        <p className={`opacity-70 leading-relaxed ${theme.text} ${theme.fontBody}`}>
          {chef.bio}
        </p>
      </div>
    </motion.div>
  );
};

const Chefs: React.FC<ChefsProps> = ({ theme }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme.text} ${theme.fontHeading}`}>
            Команда Мастеров
          </h2>
          <p className={`max-w-2xl mx-auto opacity-80 ${theme.text} ${theme.fontBody}`}>
            Люди, которые создают магию вкуса каждый день.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHEFS.map((chef, index) => (
            <ParallaxCard key={chef.id} chef={chef} index={index} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;