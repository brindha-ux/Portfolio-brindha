import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Data Science Intern',
      company: 'Goldman Sachs',
      location: 'Mumbai, India',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Developed ML models for algorithmic trading strategies, achieving 15% improvement in prediction accuracy. Worked with time-series forecasting and risk management systems.',
      achievements: [
        'Built real-time trading algorithms using Python and TensorFlow',
        'Optimized portfolio risk models reducing potential losses by 12%',
        'Collaborated with quants team on high-frequency trading strategies'
      ],
      tech: ['Python', 'TensorFlow', 'Pandas', 'SQL', 'AWS'],
      icon: Briefcase
    },
    {
      type: 'work',
      title: 'Machine Learning Research Assistant',
      company: 'IIT Delhi AI Lab',
      location: 'Delhi, India',
      duration: 'Jan 2024 - Present',
      description: 'Research on deep learning applications in computer vision and NLP. Published research on transformer architectures and contributed to open-source ML libraries.',
      achievements: [
        'Published 2 research papers in top-tier conferences',
        'Developed novel attention mechanisms for time-series analysis',
        'Mentored 5+ junior students in ML research projects'
      ],
      tech: ['PyTorch', 'CUDA', 'Transformers', 'OpenCV', 'Git'],
      icon: Briefcase
    },
    {
      type: 'work',
      title: 'Data Analytics Intern',
      company: 'Flipkart',
      location: 'Bangalore, India',
      duration: 'May 2023 - Jul 2023',
      description: 'Analyzed customer behavior patterns and built recommendation systems. Worked on A/B testing frameworks and conversion rate optimization.',
      achievements: [
        'Increased recommendation click-through rates by 23%',
        'Built ETL pipelines processing 10M+ daily transactions',
        'Implemented A/B testing framework for product features'
      ],
      tech: ['Spark', 'Hive', 'Python', 'Tableau', 'Kafka'],
      icon: Briefcase
    }
  ];

  const education = [
    {
      type: 'education',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Indian Institute of Technology (IIT) Delhi',
      location: 'Delhi, India',
      duration: '2021 - 2025',
      description: 'Specialization in Data Science and Machine Learning. Current CGPA: 9.2/10.0. Active member of Data Science Society and Robotics Club.',
      achievements: [
        'Dean\'s List for academic excellence (4 semesters)',
        'President, Data Science Society (2023-2024)',
        'Winner of Inter-IIT Tech Meet ML Competition'
      ],
      tech: ['Machine Learning', 'Data Structures', 'Algorithms', 'Statistics', 'Linear Algebra'],
      icon: GraduationCap
    },
    {
      type: 'education',
      degree: 'Higher Secondary Education',
      institution: 'Delhi Public School',
      location: 'Delhi, India', 
      duration: '2019 - 2021',
      description: 'PCM with Computer Science. Secured 98.2% in CBSE boards. National level finalist in various science olympiads.',
      achievements: [
        'All India Rank 247 in JEE Advanced',
        'School topper in Mathematics and Physics',
        'National finalist in International Mathematics Olympiad'
      ],
      tech: ['Mathematics', 'Physics', 'Computer Science', 'Python'],
      icon: GraduationCap
    }
  ];

  const allExperiences = [...experiences, ...education];

  return (
    <section id="experience" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neural">
          Experience & Education
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional experience and academic journey that shaped my expertise in data science, 
          machine learning, and software engineering.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

        <div className="space-y-12">
          {allExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-2 z-10 shadow-glow"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <Card className="card-glass hover:shadow-glow transition-all duration-300 interactive-scale">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <exp.icon className="text-primary flex-shrink-0" size={24} />
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.type === 'education' ? (exp as any).degree : (exp as any).title}
                          </h3>
                          <div className="flex items-center text-primary font-medium">
                            <Building size={16} className="mr-1" />
                            {exp.type === 'education' ? (exp as any).institution : (exp as any).company}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 flex-shrink-0">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;