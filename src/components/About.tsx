import React from 'react';
import { Code, Palette, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    // { name: 'JavaScript/TypeScript', level: 60 },
    // { name: 'React/Next.js', level: 85 },
    // { name: 'Node.js', level: 80 },
    // { name: 'Python', level: 75 },
    // { name: 'UI/UX Design', level: 85 },
    // { name: 'Database Design', level: 80 },
    { name: 'JavaScript', level: 60 },
    { name: 'Html', level: 85 },
    { name: 'CSS', level: 80 },
    // { name: 'Python', level: 75 },
    // { name: 'UI/UX Design', level: 85 },
    // { name: 'Database Design', level: 80 },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks like React and Vue.js.'
    },
    // {
    //   icon: <Database className="w-8 h-8" />,
    //   title: 'Backend Development',
    //   description: 'Building robust server-side applications and APIs with Node.js, Python, and various databases.'
    // },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Designing user-centered interfaces that are both beautiful and highly functional.'
    },
    // {
    //   icon: <Globe className="w-8 h-8" />,
    //   title: 'Full Stack Solutions',
    //   description: 'End-to-end development from concept to deployment, ensuring seamless user experiences.'
    // }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate developer with 1+ years of experience creating digital solutions 
              that make a difference. I love turning complex problems into simple, beautiful designs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">My Story</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a passion for creating 
                meaningful digital experiences. I believe that great software is not just about code, 
                but about understanding users and solving real problems.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;