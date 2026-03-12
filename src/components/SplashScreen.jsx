import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function SplashScreen({ onComplete }) {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  // The dominant edge colors from the AI generated images
  // For dark theme, it's a very dark indigo/navy: #0d0f19
  // For light theme, it's a soft slate blue-grey tint: #d2daeb
  const bgStyle = theme === 'dark' ? '#0d0f19' : '#d2daeb';

  useEffect(() => {
    // Show splash for 2.5 seconds, then trigger fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation to finish before unmounting
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            margin: 0,
            padding: 0
          }}
        >
          {/* Main App Background injected into Splash Screen */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <div className="app-background" style={{ position: 'absolute', inset: 0 }}>
              <div className="floating-orb orb-1"></div>
              <div className="floating-orb orb-2"></div>
              <div className="floating-orb orb-3"></div>
              <div className="floating-orb orb-4"></div>
            </div>
          </div>

          {/* Animated Logo Container - perfectly centered */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              zIndex: 10
            }}
          >
            {/* The exact image logo with a perfectly transparent radial CSS mask */}
            <img 
              src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'} 
              alt="Karyam Exact Logo" 
              style={{
                width: '100%',
                maxWidth: '480px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto',
                filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.25))',
                // This mask seamlessly fades out the square outer edges while preserving the exact inner logo
                WebkitMaskImage: 'radial-gradient(closest-side, black 70%, transparent 100%)',
                maskImage: 'radial-gradient(closest-side, black 70%, transparent 100%)'
              }}
            />
            
            {/* Loading Indicator beneath the logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                marginTop: '30px'
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: ["0%", "-60%", "0%"] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: theme === 'dark' ? '#22d3ee' : '#0891b2',
                    boxShadow: theme === 'dark' ? '0 0 10px rgba(34, 211, 238, 0.5)' : 'none'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
