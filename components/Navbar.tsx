import React, { useState } from 'react';
import { Page, ThemeConfig } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  setPage: (page: Page) => void;
  currentPage: Page;
  theme: ThemeConfig;
}

const Navbar: React.FC<NavbarProps> = ({ setPage, currentPage, theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Page.HOME, label: 'Главная' },
    { id: Page.MENU, label: 'Меню' },
    { id: Page.CHEFS, label: 'Повара' },
    { id: Page.REVIEWS, label: 'Отзывы' },
    { id: Page.CONTACT, label: 'Контакты' },
  ];

  const handleMobileNavClick = (pageId: Page) => {
    setPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${theme.navBg} shadow-sm backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer z-50 relative" onClick={() => setPage(Page.HOME)}>
              <h1 className={`text-3xl font-bold tracking-widest ${theme.fontHeading} ${theme.text}`}>
                LAREM
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPage(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                      currentPage === item.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                    } ${theme.text} ${theme.fontBody}`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${theme.accent}`} />
                    {currentPage === item.id && (
                      <motion.div
                        layoutId="underline"
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${theme.accent}`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50 relative">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${theme.text} focus:outline-none hover:bg-black/5 transition-colors`}
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown & Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Click Outside Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/50 z-30 md:hidden"
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-20 left-0 w-full ${theme.navBg} border-b border-gray-200/20 z-40 md:hidden shadow-xl`}
              >
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleMobileNavClick(item.id)}
                      className={`block w-full text-center px-3 py-4 rounded-lg text-xl font-medium transition-transform active:scale-95 ${
                        currentPage === item.id 
                          ? `${theme.accent} text-white shadow-lg` 
                          : `${theme.text} hover:bg-black/5`
                      } ${theme.fontBody}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      {/* Spacer to prevent content hiding behind fixed nav */}
      <div className="h-20" /> 
    </>
  );
};

export default Navbar;