import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
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
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn more about my journey, passion, and what drives me in the world of technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image & Info */}
            <motion.div variants={slideVariants} className="space-y-8">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-80 h-80 mx-auto glass-card-strong rounded-3xl p-8 relative overflow-hidden"
                >
                  {/* Profile Avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center relative">
                    <span className="text-6xl font-bold text-primary-foreground">AJ</span>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                      className="absolute top-4 right-4 w-8 h-8 bg-accent/30 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                      className="absolute bottom-4 left-4 w-6 h-6 bg-secondary/30 rounded-full"
                    />
                  </div>
                  
                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10" />
                </motion.div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 glass-card p-3 rounded-xl"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute -bottom-4 -right-4 glass-card p-3 rounded-xl"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={slideVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-heading font-semibold mb-4">
                  Passionate Developer & CS Student
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a Computer Science undergraduate with an insatiable curiosity for technology and innovation. 
                  My journey in programming started with a simple "Hello World" and has evolved into a passion 
                  for creating meaningful digital solutions.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently pursuing my BTech in Computer Science, I'm constantly learning and exploring 
                  new technologies, from full-stack development to artificial intelligence. I believe in 
                  the power of code to transform ideas into reality.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me contributing to open-source projects, learning about 
                  emerging technologies, or collaborating with fellow developers to build something amazing.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Projects Built', value: '15+' },
                  { label: 'Technologies', value: '12+' },
                  { label: 'Years Learning', value: '3+' },
                  { label: 'Coffee Cups', value: '∞' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-4 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-heading font-semibold text-center mb-12">Education</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: 'BTech Computer Science',
                  institution: 'XYZ University',
                  period: '2022 - 2026',
                  description: 'Currently pursuing Bachelor of Technology in Computer Science with focus on software engineering and AI.'
                },
                {
                  icon: BookOpen,
                  title: 'Core Subjects',
                  institution: 'Relevant Coursework',
                  period: 'Current',
                  description: 'Data Structures, Algorithms, Operating Systems, Database Management, Software Engineering.'
                },
                {
                  icon: Award,
                  title: 'Achievements',
                  institution: 'Academic Excellence',
                  period: '2022 - Present',
                  description: 'Consistent academic performance with active participation in coding competitions and hackathons.'
                }
              ].map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="glass-card border-primary/20 h-full hover:glow-primary transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h4 className="font-heading font-semibold text-xl mb-2">{edu.title}</h4>
                        <p className="text-primary font-medium mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;