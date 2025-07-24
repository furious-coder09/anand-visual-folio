import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy load components that are not immediately visible
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
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
