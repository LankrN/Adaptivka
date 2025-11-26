import React, { useEffect, useState } from 'react';
import { TimeOfDay } from '../types';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface WeatherEffectsProps {
  timeOfDay: TimeOfDay;
}

const WeatherEffects: React.FC<WeatherEffectsProps> = ({ timeOfDay }) => {
  const [raindrops, setRaindrops] = useState<number[]>([]);
  const [snowflakes, setSnowflakes] = useState<number[]>([]);
  
  // Parallax Hooks
  const { scrollY } = useScroll();
  const sunY = useTransform(scrollY, [0, 500], [0, 150]); // Sun moves down slowly
  const rainY = useTransform(scrollY, [0, 1000], [0, 50]); // Subtle shift for rain container
  const snowY = useTransform(scrollY, [0, 1000], [0, -50]); // Snow container floats up slightly

  useEffect(() => {
    setRaindrops(Array.from({ length: 80 }, (_, i) => i));
    setSnowflakes(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence mode="wait">
        
        {/* Morning: Sun */}
        {timeOfDay === TimeOfDay.MORNING && (
          <motion.div
            key="morning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            {/* Sun Body with Parallax */}
            <motion.div 
              style={{ y: sunY }}
              className="absolute top-[-5%] right-[-5%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] rounded-full bg-gradient-to-br from-yellow-200 to-orange-100 blur-3xl opacity-50"
            />
             <motion.div 
               style={{ y: sunY }}
               className="absolute top-10 right-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-yellow-300 blur-2xl opacity-60" 
             />
            
            {/* Sun Rays Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,200,100,0.15)_0%,transparent_70%)]" />
            
            {/* Ambient Warmth at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-100/30 to-transparent" />
          </motion.div>
        )}

        {/* Noon: Rain */}
        {timeOfDay === TimeOfDay.NOON && (
          <motion.div
            key="noon"
            style={{ y: rainY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-slate-400/5"
          >
             <style>
              {`
                @keyframes rainDrop {
                  0% { transform: translateY(-10vh); opacity: 0; }
                  20% { opacity: 0.6; }
                  100% { transform: translateY(110vh); opacity: 0; }
                }
              `}
            </style>
            {raindrops.map((i) => {
              const delay = Math.random() * 2;
              const duration = 0.8 + Math.random() * 0.5;
              const left = Math.random() * 100;
              return (
                <div
                  key={`rain-${i}`}
                  className="absolute top-0 w-[1px] bg-blue-400/60"
                  style={{
                    left: `${left}%`,
                    height: `${20 + Math.random() * 20}px`,
                    animation: `rainDrop ${duration}s linear infinite`,
                    animationDelay: `-${delay}s`,
                  }}
                />
              );
            })}
          </motion.div>
        )}

        {/* Night: Snow */}
        {timeOfDay === TimeOfDay.NIGHT && (
          <motion.div
            key="night"
            style={{ y: snowY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <style>
              {`
                @keyframes snowFall {
                  0% { transform: translateY(-10vh) translateX(0); opacity: 0; }
                  10% { opacity: 0.9; }
                  100% { transform: translateY(110vh) translateX(20px); opacity: 0.2; }
                }
              `}
            </style>
            {snowflakes.map((i) => {
              const delay = Math.random() * 5;
              const duration = 4 + Math.random() * 4;
              const left = Math.random() * 100;
              const size = 2 + Math.random() * 4;
              return (
                <div
                  key={`snow-${i}`}
                  className="absolute top-0 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                  style={{
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: 0.8,
                    animation: `snowFall ${duration}s linear infinite`,
                    animationDelay: `-${delay}s`,
                  }}
                />
              );
            })}
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default WeatherEffects;