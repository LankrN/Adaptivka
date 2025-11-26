import React from 'react';
import { motion } from 'framer-motion';
import { ThemeConfig } from '../types';
import { MENU_ITEMS } from '../constants';

interface MenuProps {
  theme: ThemeConfig;
}

const Menu: React.FC<MenuProps> = ({ theme }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const categories = Array.from(new Set(MENU_ITEMS.map(i => i.category)));

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${theme.text} ${theme.fontHeading}`}
        >
          Наше Меню
        </motion.h2>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <h3 className={`text-2xl font-bold mb-6 border-b pb-2 opacity-80 ${theme.text} ${theme.fontHeading} border-current`}>
              {category}
            </h3>
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-6"
            >
              {MENU_ITEMS.filter(item => item.category === category).map((item) => (
                <motion.div 
                  key={item.id} 
                  variants={itemAnim}
                  className={`p-6 rounded-lg shadow-sm flex justify-between items-start transition-colors duration-300 ${theme.cardBg}`}
                >
                  <div className="flex-1 pr-4">
                    <h4 className={`text-xl font-bold mb-2 ${theme.text} ${theme.fontHeading}`}>{item.name}</h4>
                    <p className={`text-sm opacity-70 ${theme.text} ${theme.fontBody}`}>{item.description}</p>
                  </div>
                  <div className={`text-lg font-bold whitespace-nowrap ${theme.accentText} ${theme.fontBody}`}>
                    {item.price}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;