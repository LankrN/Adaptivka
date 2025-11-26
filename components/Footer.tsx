import React from 'react';
import { ThemeConfig } from '../types';

interface FooterProps {
  theme: ThemeConfig;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`py-12 ${theme.navBg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={`text-xl font-bold mb-4 ${theme.fontHeading} ${theme.text}`}>Larem</h3>
            <p className={`text-sm opacity-80 ${theme.text} ${theme.fontBody}`}>
              Высокая кухня, где традиции встречаются с инновациями.
              Погрузитесь в атмосферу вкуса.
            </p>
          </div>
          <div>
            <h3 className={`text-xl font-bold mb-4 ${theme.fontHeading} ${theme.text}`}>Контакты</h3>
            <ul className={`space-y-2 text-sm opacity-80 ${theme.text} ${theme.fontBody}`}>
              <li>+7 (999) 123-45-67</li>
              <li>info@larem.ru</li>
              <li>ул. Гастрономическая, д. 1</li>
            </ul>
          </div>
          <div>
            <h3 className={`text-xl font-bold mb-4 ${theme.fontHeading} ${theme.text}`}>Часы работы</h3>
            <ul className={`space-y-2 text-sm opacity-80 ${theme.text} ${theme.fontBody}`}>
              <li>Пн-Вс: 10:00 - 23:00</li>
              <li>Кухня до 22:30</li>
            </ul>
          </div>
        </div>
        <div className={`mt-8 pt-8 border-t border-gray-200/20 text-center text-xs opacity-60 ${theme.text}`}>
          © 2024 Larem. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;