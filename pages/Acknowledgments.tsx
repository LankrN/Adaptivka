import React from 'react';
import { motion } from 'framer-motion';
import { ThemeConfig } from '../types';
import { REVIEWS } from '../constants';

interface AcknowledgmentsProps {
  theme: ThemeConfig;
}

const Acknowledgments: React.FC<AcknowledgmentsProps> = ({ theme }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`text-4xl md:text-5xl font-bold text-center mb-16 ${theme.text} ${theme.fontHeading}`}
      >
        Благодарности
      </motion.h2>

      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 rounded-2xl relative ${theme.cardBg} shadow-md`}
          >
            {/* Quote Icon */}
            <div className={`absolute top-4 right-6 text-6xl opacity-10 font-serif ${theme.text}`}>"</div>
            
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < review.rating ? theme.accentText : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className={`mb-6 italic text-lg leading-relaxed ${theme.text} ${theme.fontHeading}`}>
              "{review.text}"
            </p>

            <div className={`font-bold ${theme.text} ${theme.fontBody}`}>
              — {review.name}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className={`mt-16 text-center max-w-2xl p-6 border rounded-lg ${theme.text} border-current opacity-70`}
      >
        <p className={`${theme.fontBody}`}>
          Мы благодарны каждому гостю за то, что вы выбираете нас. Ваше удовольствие — наша главная награда.
        </p>
      </motion.div>
    </div>
  );
};

export default Acknowledgments;