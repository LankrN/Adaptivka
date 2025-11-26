import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ThemeConfig, Page } from '../types';

interface HomeProps {
  theme: ThemeConfig;
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ theme, setPage }) => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, 100]);
  const yButton = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden relative">
      <motion.div
        style={{ y: yText, opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 max-w-4xl z-10"
      >
        <h2 className={`text-xl md:text-2xl font-light tracking-widest uppercase mb-4 ${theme.accentText} ${theme.fontBody}`}>
          Добро пожаловать
        </h2>
        <h1 className={`text-6xl md:text-9xl font-bold mb-8 ${theme.text} ${theme.fontHeading}`}>
          LAREM
        </h1>
        <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto opacity-90 ${theme.text} ${theme.fontBody}`}>
          Искусство высокой кухни в сердце города. Мы создаем не просто еду, мы создаем воспоминания. 
          Каждое блюдо — это история, рассказанная на языке вкуса.
        </p>

        <motion.button
          style={{ y: yButton }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(Page.MENU)}
          className={`px-10 py-4 rounded-full text-white font-bold tracking-wider shadow-lg ${theme.accent} ${theme.fontBody}`}
        >
          ПОСМОТРЕТЬ МЕНЮ
        </motion.button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce z-10"
      >
        <svg className={`w-8 h-8 ${theme.text} opacity-50`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Home;