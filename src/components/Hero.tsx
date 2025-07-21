import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Saloni Khillare
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Web Developer & Designer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about turning complex problems into simple, elegant solutions.
          </p>
          
          {/* <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-6 h-6 text-green-600" />
            </a>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToAbout()}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;