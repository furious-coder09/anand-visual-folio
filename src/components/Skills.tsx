import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Terminal, 
  Cpu,
  Palette,
  GitBranch
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const skillCategories = [
    {
      icon: Globe,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      icon: Code,
      title: 'Languages',
      color: 'from-purple-500 to-pink-500',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java', 'Go']
    },
    {
      icon: Cpu,
      title: 'Database',
      color: 'from-orange-500 to-red-500',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase']
    },
    {
      icon: GitBranch,
      title: 'Tools & DevOps',
      color: 'from-indigo-500 to-purple-500',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'Linux']
    },
    {
      icon: Smartphone,
      title: 'Mobile & Others',
      color: 'from-teal-500 to-green-500',
      skills: ['React Native', 'Flutter', 'Figma', 'Adobe XD', 'Photoshop', 'Blender']
    }
  ];

  const techStack = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 88, color: 'bg-yellow-500' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
    { name: 'PostgreSQL', level: 75, color: 'bg-indigo-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}
        />
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
              Skills & Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-card border-primary/20 h-full hover:glow-primary transition-all duration-300 group">
                    <CardContent className="p-6">
                      {/* Icon Header */}
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-heading font-semibold">{category.title}</h3>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Proficiency Bars */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-semibold text-center mb-12">
              Proficiency Levels
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-lg">{tech.name}</span>
                    <span className="text-sm text-muted-foreground">{tech.level}%</span>
                  </div>
                  
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      className={`h-full ${tech.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning & Interests */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-heading font-semibold mb-6">
              Currently Learning & Exploring
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['Machine Learning', 'AI/LLMs', 'Blockchain', 'WebGL', 'Three.js', 'Rust', 'Kubernetes', 'Microservices'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card px-4 py-2 rounded-full border-accent/30 hover:border-accent/60 transition-all duration-300"
                >
                  <span className="text-accent font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Floating Tech Icons */}
          <div className="absolute top-1/4 right-8 hidden lg:block">
            <motion.div
              animate={{ 
                y: [-20, 20, -20],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="glass-card p-4 rounded-2xl"
            >
              <Terminal className="w-8 h-8 text-primary" />
            </motion.div>
          </div>

          <div className="absolute bottom-1/4 left-8 hidden lg:block">
            <motion.div
              animate={{ 
                y: [20, -20, 20],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 1
              }}
              className="glass-card p-4 rounded-2xl"
            >
              <Palette className="w-8 h-8 text-secondary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;