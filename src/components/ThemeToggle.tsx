import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Monitor, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { toast } from '@/hooks/use-toast';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // Show popup reminder after 3 seconds if user hasn't seen it
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('theme-popup-shown');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setHasShownPopup(true);
        localStorage.setItem('theme-popup-shown', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-hide popup after 4 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleThemeChange = () => {
    const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(nextTheme);
    
    const themeMessages = {
      light: '☀️ Light mode activated!',
      dark: '🌙 Dark mode activated!',
      system: '💻 System theme activated!'
    };
    
    toast({
      title: themeMessages[nextTheme],
      description: `Switched to ${nextTheme} theme`,
    });

    // Hide popup when user interacts with toggle
    setShowPopup(false);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return Sun;
      case 'dark':
        return Moon;
      default:
        return Monitor;
    }
  };

  const Icon = getIcon();

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={handleThemeChange}
          className="relative glass-card border-primary/20 hover:border-primary/40 hover:glow-primary transition-all duration-300 group"
          aria-label="Toggle theme"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
          </motion.div>
          
          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </Button>
      </motion.div>

      {/* Popup Reminder */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="absolute top-12 right-0 z-50"
          >
            <div className="glass-card-strong border-primary/30 rounded-xl p-4 max-w-xs shadow-2xl">
              {/* Arrow pointing to toggle */}
              <div className="absolute -top-2 right-4 w-4 h-4 bg-gradient-to-br from-primary/20 to-secondary/20 rotate-45 border-l border-t border-primary/30" />
              
              <div className="flex items-start space-x-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex-shrink-0 p-2 bg-gradient-to-br from-primary to-secondary rounded-lg"
                >
                  <Lightbulb className="w-4 h-4 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1 text-vibrant">
                    🌙 Dark Mode Available!
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Click the theme toggle to switch between light, dark, and system themes for a better viewing experience.
                  </p>
                </div>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Close popup"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme indicator dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {['light', 'dark', 'system'].map((t) => (
          <motion.div
            key={t}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              theme === t 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;