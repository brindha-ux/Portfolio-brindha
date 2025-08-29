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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Professional Photo Frame */}
        <div className="relative">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Upload your professional photo</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800"></div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left lg:flex-1">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
            Brindha
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-4 font-medium">
            Data Scientist | AI Enthusiast
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Transforming raw data into actionable insights through cutting-edge machine learning, 
            deep learning, and statistical analysis. Passionate about solving complex real-world problems 
            with data-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Button>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 transition-all duration-300 rounded-lg text-white shadow-md hover:shadow-lg"
              >
                <Github size={24} />
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 transition-all duration-300 rounded-lg text-white shadow-md hover:shadow-lg"
              >
                <Linkedin size={24} />
              </a>
              
              <a
                href="mailto:contact@example.com"
                className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 transition-all duration-300 rounded-lg text-white shadow-md hover:shadow-lg"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;