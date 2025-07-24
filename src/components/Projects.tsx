import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations and glassmorphism design.',
      longDescription: 'This project showcases my skills in frontend development with a focus on user experience and modern design trends. Features include smooth scroll animations, interactive elements, and optimized performance.',
      image: '/placeholder.svg',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      github: '#',
      live: '#',
      stats: { stars: 24, forks: 8, watchers: 12 },
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A full-stack task management application with real-time collaboration, built using React, Node.js, and PostgreSQL.',
      longDescription: 'Complete task management solution with user authentication, real-time updates, team collaboration features, and comprehensive analytics dashboard.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      category: 'Full Stack',
      github: '#',
      live: '#',
      stats: { stars: 42, forks: 15, watchers: 28 },
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      longDescription: 'Weather application featuring geolocation services, multiple API integrations, interactive weather maps, and detailed forecast analytics with beautiful data visualizations.',
      image: '/placeholder.svg',
      tags: ['React', 'APIs', 'Chart.js', 'CSS3'],
      category: 'Frontend',
      github: '#',
      live: '#',
      stats: { stars: 18, forks: 6, watchers: 9 }
    },
    {
      id: 4,
      title: 'E-commerce Backend',
      description: 'Scalable e-commerce backend API with payment integration, inventory management, and comprehensive admin dashboard.',
      longDescription: 'RESTful API built with Node.js and Express, featuring JWT authentication, payment processing, inventory tracking, order management, and detailed analytics.',
      image: '/placeholder.svg',
      tags: ['Node.js', 'Express', 'MongoDB', 'Stripe'],
      category: 'Backend',
      github: '#',
      live: '#',
      stats: { stars: 35, forks: 12, watchers: 20 }
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with group messaging, file sharing, and end-to-end encryption features.',
      longDescription: 'Secure messaging platform with real-time communication, file sharing capabilities, group management, and modern UI/UX design principles.',
      image: '/placeholder.svg',
      tags: ['React', 'Socket.io', 'Node.js', 'Redis'],
      category: 'Full Stack',
      github: '#',
      live: '#',
      stats: { stars: 67, forks: 23, watchers: 45 }
    },
    {
      id: 6,
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization dashboard for analyzing and presenting complex datasets with custom chart components.',
      longDescription: 'Powerful data visualization platform with support for multiple data sources, custom chart types, interactive filters, and export capabilities.',
      image: '/placeholder.svg',
      tags: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'Data Science',
      github: '#',
      live: '#',
      stats: { stars: 29, forks: 9, watchers: 16 }
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Data Science'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <section id="projects" className="py-20 bg-section-gradient-3 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground glow-primary'
                    : 'glass-card border-primary/20 hover:border-primary/40'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layout
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`glass-card border-primary/20 h-full hover:glow-primary transition-all duration-300 group overflow-hidden ${
                    project.featured ? 'ring-2 ring-primary/20' : ''
                  }`}>
                    <CardContent className="p-0">
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-bold text-white/50">
                            {project.title.split(' ').map(word => word[0]).join('')}
                          </div>
                        </div>
                        
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}

                        {/* Project Stats */}
                        <div className="absolute top-4 right-4 space-y-1">
                          <div className="flex items-center space-x-1 text-white/80 text-xs">
                            <Star className="w-3 h-3" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-white/80 text-xs">
                            <GitFork className="w-3 h-3" />
                            <span>{project.stats.forks}</span>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/80"
                            asChild
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </a>
                          </Button>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Eye className="w-4 h-4 mr-1" />
                            {project.stats.watchers}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="p-2 h-8 w-8"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="p-2 h-8 w-8"
                              asChild
                            >
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                          
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="glass-card border-primary/30 hover:border-primary/60 hover:glow-primary transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;