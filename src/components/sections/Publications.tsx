import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, BookOpen, Users, ExternalLink, Calendar, Trophy, Medal, Star } from 'lucide-react';

const Publications = () => {
  const achievements = [
    {
      type: 'publication',
      title: 'Deep Learning Approaches for Real-time Fraud Detection in Financial Transactions',
      venue: 'IEEE International Conference on Data Science (ICDS 2024)',
      date: '2024',
      description: 'Novel ensemble approach combining LSTM and attention mechanisms for real-time fraud detection with 99.2% accuracy.',
      status: 'Published',
      link: 'https://doi.org/example',
      impact: 'Cited 23 times',
      icon: BookOpen
    },
    {
      type: 'publication',
      title: 'Sentiment-Enhanced Stock Price Prediction Using Transformer Networks',
      venue: 'Journal of Financial Technology & Data Science',
      date: '2024',
      description: 'Research on incorporating social media sentiment and news analysis into stock prediction models using BERT and financial indicators.',
      status: 'Under Review',
      link: null,
      impact: 'Submitted',
      icon: BookOpen
    },
    {
      type: 'competition',
      title: 'Kaggle Competition: Customer Churn Prediction',
      venue: 'Kaggle Platform',
      date: '2023',
      description: 'Achieved top 3% ranking in customer churn prediction challenge with innovative feature engineering and ensemble methods.',
      status: 'Gold Medal',
      link: 'https://kaggle.com/competition',
      impact: 'Top 3%',
      icon: Trophy
    },
    {
      type: 'hackathon',
      title: 'Smart City Analytics Dashboard',
      venue: 'IIT Delhi Hackathon 2024',
      date: '2024',
      description: 'First place winner for developing real-time urban analytics platform using IoT data and machine learning for traffic optimization.',
      status: '1st Place',
      link: 'https://github.com/project',
      impact: '₹1L Prize',
      icon: Award
    },
    {
      type: 'competition',
      title: 'DrivenData: Pump it Up Challenge',
      venue: 'DrivenData Platform',
      date: '2023',
      description: 'Silver medal in water pump functionality prediction challenge, developing models to identify non-functional water pumps in Tanzania.',
      status: 'Silver Medal',
      link: 'https://drivendata.org/competition',
      impact: 'Top 10%',
      icon: Medal
    },
    {
      type: 'certification',
      title: 'Google Cloud Professional Machine Learning Engineer',
      venue: 'Google Cloud',
      date: '2024',
      description: 'Advanced certification demonstrating expertise in designing, building, and productionizing ML models on Google Cloud Platform.',
      status: 'Certified',
      link: 'https://cloud.google.com/certification',
      impact: 'Valid until 2026',
      icon: Star
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'publication': return 'bg-primary/10 text-primary border-primary/20';
      case 'competition': return 'bg-accent/10 text-accent border-accent/20';
      case 'hackathon': return 'bg-warning/10 text-warning border-warning/20';
      case 'certification': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': case '1st Place': case 'Gold Medal': return 'bg-success/10 text-success';
      case 'Under Review': case 'Submitted': return 'bg-warning/10 text-warning';
      case 'Silver Medal': case 'Certified': return 'bg-primary/10 text-primary';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <section id="publications" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neural">
          Publications & Achievements
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Research contributions, competition victories, and professional certifications 
          demonstrating academic excellence and practical expertise in data science.
        </p>
      </motion.div>

      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            <Card className="card-glass hover:shadow-glow transition-all duration-300 interactive-scale">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <achievement.icon className="text-primary flex-shrink-0" size={24} />
                      <Badge className={getTypeColor(achievement.type)} variant="outline">
                        {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                      </Badge>
                      <Badge className={getStatusColor(achievement.status)}>
                        {achievement.status}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {achievement.date}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-3">
                      {achievement.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center text-primary">
                        <Users size={14} className="mr-1" />
                        {achievement.venue}
                      </div>
                      <div className="flex items-center text-accent">
                        <Trophy size={14} className="mr-1" />
                        {achievement.impact}
                      </div>
                    </div>
                  </div>

                  {achievement.link && (
                    <div className="flex-shrink-0">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center space-x-2"
                        asChild
                      >
                        <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          <span>View</span>
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Publications', value: '2+', icon: BookOpen },
          { label: 'Competitions Won', value: '3+', icon: Trophy },
          { label: 'Certifications', value: '5+', icon: Award },
          { label: 'Citations', value: '25+', icon: Star }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="text-center p-6 card-glass"
          >
            <stat.icon className="text-primary mx-auto mb-2" size={32} />
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Publications;