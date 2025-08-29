import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Calendar, Shield, Code, Database, Cloud, Brain, Users, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Google Cloud Professional Machine Learning Engineer',
      issuer: 'Google Cloud',
      date: '2024',
      validUntil: '2026',
      credentialId: 'GCP-ML-2024-001',
      description: 'Advanced certification demonstrating expertise in designing, building, and productionizing ML models on Google Cloud Platform.',
      skills: ['Machine Learning', 'TensorFlow', 'BigQuery', 'Vertex AI'],
      icon: Brain,
      color: 'bg-blue-500',
      link: 'https://cloud.google.com/certification'
    },
    {
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2024',
      validUntil: '2027',
      credentialId: 'AWS-SAP-2024-002',
      description: 'Expert-level certification for designing distributed applications and systems on AWS.',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Security'],
      icon: Cloud,
      color: 'bg-orange-500',
      link: 'https://aws.amazon.com/certification'
    },
    {
      title: 'Microsoft Azure Data Scientist Associate',
      issuer: 'Microsoft',
      date: '2023',
      validUntil: '2025',
      credentialId: 'MS-DS-2023-003',
      description: 'Certification for implementing and running machine learning workloads on Azure.',
      skills: ['Azure ML', 'Python', 'Data Science', 'MLOps'],
      icon: Database,
      color: 'bg-blue-600',
      link: 'https://docs.microsoft.com/certifications'
    },
    {
      title: 'Certified Kubernetes Application Developer',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      validUntil: '2026',
      credentialId: 'CKAD-2023-004',
      description: 'Demonstrates ability to design, build and deploy cloud-native applications for Kubernetes.',
      skills: ['Kubernetes', 'Docker', 'DevOps', 'Microservices'],
      icon: Code,
      color: 'bg-purple-500',
      link: 'https://www.cncf.io/certification'
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      date: '2023',
      validUntil: '2026',
      credentialId: 'TF-DEV-2023-005',
      description: 'Validates skills in building and training neural network models using TensorFlow.',
      skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Python'],
      icon: Brain,
      color: 'bg-orange-400',
      link: 'https://www.tensorflow.org/certificate'
    },
    {
      title: 'Scrum Master Certified (SMC)',
      issuer: 'Scrum Alliance',
      date: '2023',
      validUntil: '2025',
      credentialId: 'SMC-2023-006',
      description: 'Certification in Agile methodologies and Scrum framework for project management.',
      skills: ['Scrum', 'Agile', 'Project Management', 'Team Leadership'],
      icon: Users,
      color: 'bg-green-500',
      link: 'https://www.scrumalliance.org'
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neural">
          Certificate Gallery
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional certifications and credentials showcasing expertise across 
          cloud platforms, data science, and software development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            <Card className="card-glass hover:shadow-glow transition-all duration-300 interactive-scale h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-full ${cert.color} text-white`}>
                    <cert.icon size={24} />
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20">
                    <CheckCircle size={12} className="mr-1" />
                    Verified
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-medium">{cert.issuer}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {cert.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar size={12} className="mr-2" />
                    Issued: {cert.date} • Valid until: {cert.validUntil}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <strong>Credential ID:</strong> {cert.credentialId}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Shield size={14} />
                    <span>Verify Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Certificate Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Active Certificates', value: '6', icon: Award },
          { label: 'Cloud Platforms', value: '3', icon: Cloud },
          { label: 'ML Certifications', value: '3', icon: Brain },
          { label: 'Years Experience', value: '5+', icon: CheckCircle }
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

export default Certificates;