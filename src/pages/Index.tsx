import { lazy, Suspense } from 'react';
import Navbar from '@/components/NavbarOptimized';
import Hero from '@/components/HeroOptimized';
import Footer from '@/components/Footer';


// Lazy load non-critical components
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
