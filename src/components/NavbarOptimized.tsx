import { memo } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = memo(() => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-heading font-bold text-primary">
          AJ
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        
        <ThemeToggle />
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;