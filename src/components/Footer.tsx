import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
              <p className="text-gray-400 leading-relaxed">
                Passionate about creating digital experiences that make a difference. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {/* <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a> */}
                <a
                  href="mailto:salonikhillare20.com"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {currentYear} Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>and React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;