import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Database, Brain, MessageSquare, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'fraud-detection',
      title: 'Real-time Fraud Detection System',
      description: 'Built an ML pipeline using ensemble methods and anomaly detection to identify fraudulent transactions in real-time with 99.2% accuracy.',
      longDescription: 'Developed a comprehensive fraud detection system using Random Forest, Isolation Forest, and Neural Networks. Implemented real-time processing with Apache Kafka and deployed on AWS with auto-scaling capabilities.',
      icon: Database,
      tech: ['Python', 'Scikit-Learn', 'Apache Kafka', 'AWS', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      metrics: { accuracy: '99.2%', latency: '<50ms', throughput: '10K/sec' }
    },
    {
      id: 'stock-prediction',
      title: 'Advanced Stock Price Predictor',
      description: 'LSTM-based deep learning model for stock price prediction incorporating sentiment analysis from news and social media data.',
      longDescription: 'Created a sophisticated stock prediction system combining LSTM neural networks with sentiment analysis from Twitter and news articles. Features technical indicators, fundamental analysis, and real-time prediction capabilities.',
      icon: TrendingUp,
      tech: ['TensorFlow', 'LSTM', 'NLP', 'Twitter API', 'Flask'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      metrics: { accuracy: '87.3%', 'sharpe ratio': '2.4', 'max drawdown': '8.2%' }
    },
    {
      id: 'ai-chatbot',
      title: 'Intelligent Customer Support Bot',
      description: 'Transformer-based conversational AI system with multi-intent recognition and contextual response generation.',
      longDescription: 'Developed an intelligent chatbot using BERT for intent classification and GPT-2 for response generation. Integrated with knowledge base and escalation system for complex queries.',
      icon: MessageSquare,
      tech: ['BERT', 'GPT-2', 'FastAPI', 'Redis', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      metrics: { 'intent accuracy': '94.5%', 'resolution rate': '78%', 'user satisfaction': '4.6/5' }
    },
    {
      id: 'recommendation-engine',
      title: 'Personalized Recommendation Engine',
      description: 'Hybrid recommendation system combining collaborative filtering and deep learning for e-commerce personalization.',
      longDescription: 'Built a scalable recommendation system using matrix factorization, neural collaborative filtering, and content-based methods. Deployed with MLflow for model versioning and A/B testing.',
      icon: Brain,
      tech: ['PyTorch', 'MLflow', 'Spark', 'MongoDB', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      metrics: { 'click-through rate': '+23%', 'conversion rate': '+15%', 'user engagement': '+31%' }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neural">
          Featured Projects
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A showcase of innovative data science projects demonstrating expertise in machine learning, 
          deep learning, and end-to-end system development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Card className={`card-glass transition-all duration-300 h-full ${
              hoveredProject === project.id ? 'shadow-glow transform scale-105' : ''
            }`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <project.icon className="text-primary" size={28} />
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-muted/20 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-2 flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    className="flex items-center space-x-2 flex-1 bg-gradient-primary"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;