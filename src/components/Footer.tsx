import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-primary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='m20 20 20-20v40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo & Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">AJ</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Anand Jha</h3>
                <p className="text-sm text-muted-foreground">CS Student & Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Center - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-muted-foreground flex items-center justify-center space-x-2">
              <span>© {currentYear} Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by Anand Jha</span>
            </p>
            <p className="text-sm text-muted-foreground/70 mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </motion.div>

          {/* Right - Back to Top */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <ScrollLink to="hero" smooth={true} duration={800}>
              <Button
                variant="outline"
                size="sm"
                className="glass-card border-primary/30 hover:border-primary/60 hover:glow-primary transition-all duration-300 group"
              >
                <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Back to Top
              </Button>
            </ScrollLink>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-primary/10"
        >
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-4"
        >
          <p className="text-xs text-muted-foreground/50">
            ✨ Designed & developed with attention to detail ✨
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 left-8 w-6 h-6 bg-primary/20 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-8 right-8 w-8 h-8 bg-secondary/20 rounded-full blur-sm"
      />
    </footer>
  );
};

export default Footer;