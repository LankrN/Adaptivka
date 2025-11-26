import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Chefs from './pages/Chefs';
import Acknowledgments from './pages/Acknowledgments';
import Contact from './pages/Contact';
import WeatherEffects from './components/WeatherEffects';
import { Page, ThemeStyle, TimeOfDay } from './types';
import { THEMES } from './constants';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [currentThemeStyle, setCurrentThemeStyle] = useState<ThemeStyle>(ThemeStyle.ROYAL);
  const [currentTimeOfDay, setCurrentTimeOfDay] = useState<TimeOfDay>(TimeOfDay.NOON);

  const activeTheme = THEMES[currentThemeStyle][currentTimeOfDay];

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Automatic Theme Change every 20 minutes (1,200,000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimeOfDay((prevTime) => {
        if (prevTime === TimeOfDay.MORNING) return TimeOfDay.NOON;
        if (prevTime === TimeOfDay.NOON) return TimeOfDay.NIGHT;
        return TimeOfDay.MORNING;
      });
    }, 20 * 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home theme={activeTheme} setPage={setCurrentPage} />;
      case Page.MENU: return <Menu theme={activeTheme} />;
      case Page.CHEFS: return <Chefs theme={activeTheme} />;
      case Page.REVIEWS: return <Acknowledgments theme={activeTheme} />;
      case Page.CONTACT: return <Contact theme={activeTheme} />;
      default: return <Home theme={activeTheme} setPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out ${activeTheme.bg} font-sans relative`}>
      {/* Background Weather Effects */}
      <WeatherEffects timeOfDay={currentTimeOfDay} />

      <Navbar setPage={setCurrentPage} currentPage={currentPage} theme={activeTheme} />

      {/* Theme Controls (Fixed Widget) */}
      <div className={`fixed bottom-4 left-4 z-50 p-2 rounded-lg shadow-xl backdrop-blur-md flex flex-col gap-2 transition-colors duration-500 ${activeTheme.cardBg} border border-white/20`}>
        <div className="flex gap-2">
           <span className={`text-xs font-bold uppercase w-12 flex items-center ${activeTheme.text}`}>Стиль:</span>
           {Object.values(ThemeStyle).map((style) => (
             <button
               key={style}
               onClick={() => setCurrentThemeStyle(style)}
               className={`w-6 h-6 rounded-full border-2 transition-all ${
                 currentThemeStyle === style ? 'border-current scale-110' : 'border-transparent opacity-50'
               } ${activeTheme.text}`}
               title={style}
               style={{ backgroundColor: style === ThemeStyle.ROYAL ? '#d97706' : style === ThemeStyle.MODERN ? '#3b82f6' : '#65a30d'}}
             />
           ))}
        </div>
        <div className="flex gap-2">
            <span className={`text-xs font-bold uppercase w-12 flex items-center ${activeTheme.text}`}>Время:</span>
            {Object.values(TimeOfDay).map((time) => (
             <button
               key={time}
               onClick={() => setCurrentTimeOfDay(time)}
               className={`text-xs px-2 py-0.5 rounded border transition-all ${
                 currentTimeOfDay === time ? `bg-current text-white` : `opacity-50 hover:opacity-100 ${activeTheme.text}`
               }`}
               style={{ borderColor: 'currentColor' }}
             >
               {time === TimeOfDay.MORNING ? 'Утро' : time === TimeOfDay.NOON ? 'День' : 'Ночь'}
             </button>
           ))}
        </div>
      </div>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer theme={activeTheme} />
    </div>
  );
};

export default App;