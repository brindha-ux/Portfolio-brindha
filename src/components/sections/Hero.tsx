import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from '../3d/ParticleBackground';
import NeuralNetwork from '../3d/NeuralNetwork';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
          <Stars radius={300} depth={60} count={20000} factor={7} />
          <ParticleBackground />
          <NeuralNetwork />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-glow">Arjun</span>
            <br />
            <span className="text-neural">Sharma</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            Data Scientist | AI Enthusiast | IIT Topper
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming raw data into actionable insights through cutting-edge machine learning, 
            deep learning, and statistical analysis. Passionate about solving complex real-world problems 
            with data-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 card-glass hover:shadow-glow transition-all duration-300 rounded-full"
              >
                <Github size={24} />
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 card-glass hover:shadow-glow transition-all duration-300 rounded-full"
              >
                <Linkedin size={24} />
              </a>
              
              <a
                href="mailto:contact@example.com"
                className="p-3 card-glass hover:shadow-glow transition-all duration-300 rounded-full"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;