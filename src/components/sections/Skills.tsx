import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'R', level: 88, icon: '📊' },
        { name: 'SQL', level: 92, icon: '🗃️' },
        { name: 'JavaScript', level: 85, icon: '🌐' },
      ]
    },
    {
      category: 'Machine Learning',
      skills: [
        { name: 'Scikit-Learn', level: 94, icon: '🤖' },
        { name: 'TensorFlow', level: 90, icon: '🧠' },
        { name: 'PyTorch', level: 87, icon: '🔥' },
        { name: 'XGBoost', level: 89, icon: '⚡' },
      ]
    },
    {
      category: 'Data Science',
      skills: [
        { name: 'Pandas', level: 96, icon: '🐼' },
        { name: 'NumPy', level: 94, icon: '🔢' },
        { name: 'Matplotlib', level: 91, icon: '📈' },
        { name: 'Seaborn', level: 88, icon: '🎨' },
      ]
    },
    {
      category: 'Big Data & Cloud',
      skills: [
        { name: 'Apache Spark', level: 82, icon: '⚡' },
        { name: 'AWS', level: 79, icon: '☁️' },
        { name: 'Docker', level: 85, icon: '🐳' },
        { name: 'Kubernetes', level: 78, icon: '⚓' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neural">
          Technical Skills
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive toolkit spanning machine learning, data analysis, and cloud technologies 
          developed through rigorous academic training and hands-on project experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
          >
            <Card className="card-glass h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.6 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                          className={`h-full bg-gradient-primary rounded-full ${
                            hoveredSkill === skill.name ? 'shadow-glow' : ''
                          } transition-all duration-300`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Interactive 3D Skills Visualization Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground text-sm">
          Hover over skills to see interactive effects • Skills continuously evolving through practice
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;