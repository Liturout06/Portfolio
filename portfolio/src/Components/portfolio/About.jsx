import React from 'react';
import { Code2, Palette, Zap, Users, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Development',
      description: 'Expertise in React, TypeScript, Node.js, and modern web technologies',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating intuitive user interfaces with attention to detail and usability',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver excellent user experiences',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams to achieve project goals',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      year: '2015 - 2019',
      description: 'Specialized in Software Engineering and Human-Computer Interaction'
    },
    {
      degree: 'Certified Full Stack Developer',
      institution: 'Professional Certification',
      year: '2020',
      description: 'Advanced training in modern web development frameworks and best practices'
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Tailwind CSS',
    'Next.js', 'Express', 'MongoDB', 'PostgreSQL',
    'Git', 'Docker', 'AWS', 'Figma'
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I'm a passionate full-stack developer with a strong foundation in computer science and a love for 
            creating elegant solutions to complex problems. After graduating from UC Berkeley with a degree in 
            Computer Science, I've spent the past 5+ years building web applications that make a difference.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            My journey in tech began with curiosity about how websites work, which quickly evolved into a 
            deep passion for both the technical and creative aspects of web development. I believe that the 
            best products are built at the intersection of great design and solid engineering.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, 
            or exploring new technologies. I'm always eager to learn, collaborate, and take on challenging projects 
            that push my skills to the next level.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-indigo-200 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Award className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-indigo-600 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {edu.year}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}