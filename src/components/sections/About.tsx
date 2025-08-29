import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Trophy, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'IIT Excellence',
      description: 'Top performer at Indian Institute of Technology with distinction in Computer Science & Engineering'
    },
    {
      icon: Trophy,
      title: 'Academic Achievements',
      description: 'Multiple hackathon wins, research publications, and Kaggle competition medals'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Expertise in translating complex business challenges into elegant data-driven solutions'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Passionate about exploring cutting-edge AI technologies and their real-world applications'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neural">
          About Me
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A passionate data scientist with a strong foundation in mathematics, statistics, and computer science. 
          My journey at IIT has equipped me with both theoretical knowledge and practical expertise in solving 
          complex problems through data analysis and machine learning.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              My fascination with data began during my early days at IIT, where I discovered the power 
              of extracting meaningful insights from seemingly chaotic datasets. What started as curiosity 
              about patterns in data quickly evolved into a deep passion for machine learning and AI.
            </p>
            <p>
              Throughout my academic journey, I've maintained a strong focus on applying theoretical 
              concepts to real-world problems. From predicting stock market trends to building 
              recommendation systems, I believe in the transformative power of data science.
            </p>
            <p>
              My adaptability and continuous learning mindset have allowed me to stay ahead of the 
              rapidly evolving field of data science, always eager to explore new technologies 
              and methodologies that can drive innovation.
            </p>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="card-glass hover:shadow-glow transition-all duration-300 interactive-scale h-full">
                <CardContent className="p-6">
                  <highlight.icon className="text-primary mb-4" size={32} />
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;