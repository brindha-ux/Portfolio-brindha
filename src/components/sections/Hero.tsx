import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Hero Content */}
      <div className="text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          Arjun
          <br />
          Sharma
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-mono">
          Data Scientist | AI Enthusiast | IIT Topper
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transforming raw data into actionable insights through cutting-edge machine learning, 
          deep learning, and statistical analysis. Passionate about solving complex real-world problems 
          with data-driven solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-full text-white"
            >
              <Github size={24} />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-full text-white"
            >
              <Linkedin size={24} />
            </a>
            
            <a
              href="mailto:contact@example.com"
              className="p-3 bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-full text-white"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;