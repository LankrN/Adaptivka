import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThemeConfig } from '../types';

interface ContactProps {
  theme: ThemeConfig;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const mapY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen py-20 px-4 flex items-center" ref={containerRef}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Info Section */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${theme.text} ${theme.fontHeading}`}>
              Свяжитесь с нами
            </h2>
            <p className={`text-lg mb-8 opacity-80 ${theme.text} ${theme.fontBody} max-w-md`}>
              Забронируйте столик для особого вечера или просто загляните к нам на обед.
              Мы всегда рады видеть вас.
            </p>

            <div className={`space-y-8 ${theme.text} ${theme.fontBody}`}>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-6"
              >
                <div className={`p-4 rounded-full ${theme.accent} text-white shadow-lg`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Телефон</p>
                  <p className="opacity-80">+7 (999) 123-45-67</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-6"
              >
                 <div className={`p-4 rounded-full ${theme.accent} text-white shadow-lg`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Адрес</p>
                  <p className="opacity-80">ул. Гастрономическая, д. 1, Москва</p>
                </div>
              </motion.div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-12 px-10 py-5 rounded-lg font-bold shadow-xl w-full sm:w-auto transition-all ${theme.accent} text-white uppercase tracking-wider`}
            >
              Забронировать столик
            </motion.button>
          </div>

          {/* Map Visual with Parallax */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl relative order-1 lg:order-2 border-4 ${theme.cardBg} border-opacity-30`}
          >
            <motion.div 
              style={{ y: mapY }}
              className="w-full h-[120%] relative -top-[10%]"
            >
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" 
                alt="Restaurant Location" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`p-6 rounded-xl shadow-2xl ${theme.navBg} ${theme.text} text-center backdrop-blur-md`}
              >
                <p className="font-bold text-xl mb-1">LAREM</p>
                <p className="text-sm opacity-80">Центр высокой кухни</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;