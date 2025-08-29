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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #64748b 2px, transparent 0), radial-gradient(circle at 75px 75px, #64748b 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Professional Photo Frame */}
        <div className="relative">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-100">
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Upload your professional photo</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left lg:flex-1">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
            Brindha
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-4 font-medium">
            Data Scientist | AI Enthusiast
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Transforming raw data into actionable insights through cutting-edge machine learning, 
            deep learning, and statistical analysis. Passionate about solving complex real-world problems 
            with data-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Button>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-300 rounded-lg text-gray-700 shadow-md hover:shadow-lg"
              >
                <Github size={24} />
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-300 rounded-lg text-gray-700 shadow-md hover:shadow-lg"
              >
                <Linkedin size={24} />
              </a>
              
              <a
                href="mailto:contact@example.com"
                className="p-3 bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-300 rounded-lg text-gray-700 shadow-md hover:shadow-lg"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-700 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;