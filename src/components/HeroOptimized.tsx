import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Critical Hero component - minimal imports
const Hero = memo(() => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Anand Jha';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] via-[hsl(var(--hero-gradient-end))] to-[hsl(var(--hero-gradient-accent))]">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-black/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4">
              Hello, I'm
            </p>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6">
              {currentText}
              <span className="animate-pulse">|</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-primary-foreground/90 mb-6">
              CS Student & Developer
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Passionate about creating innovative solutions and building amazing digital experiences
            </p>
            
            {/* Critical CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
              >
                Download Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;