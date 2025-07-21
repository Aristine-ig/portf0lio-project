import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    // {
    //   id: 1,
    //   title: 'E-Commerce Platform',
    //   description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.',
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    //   demoUrl: 'https://demo.example.com',
    //   githubUrl: 'https://github.com/example/project'
    // },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Html', 'CSS', 'Javascript'],
      // demoUrl: 'https://demo.example.com',
      // githubUrl: 'https://github.com/example/project'
    },
    // {
    //   id: 3,
    //   title: 'Weather Dashboard',
    //   description: 'A responsive weather dashboard that provides detailed forecasts, interactive maps, and personalized weather alerts using multiple APIs.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: ['React', 'TypeScript', 'Chart.js', 'Weather API', 'PWA'],
    //   demoUrl: 'https://demo.example.com',
    //   githubUrl: 'https://github.com/example/project'
    // },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Html', 'CSS', 'Javascript'],
      // demoUrl: 'https://demo.example.com',
      // githubUrl: 'https://github.com/example/project'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating 
              innovative digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;