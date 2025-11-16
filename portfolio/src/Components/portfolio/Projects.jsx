import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built for scalability and performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool featuring real-time updates, drag-and-drop task boards, team chat, and progress tracking. Designed for remote teams.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts. Features smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['React', 'OpenWeather API', 'Charts'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Portfolio Generator',
      description: 'A SaaS tool that helps developers and designers create stunning portfolio websites in minutes. Features customizable templates and one-click deployment.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Next.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Fitness Tracker',
      description: 'Track workouts, nutrition, and progress with beautiful data visualizations. Includes workout plans, calorie tracking, and achievement badges.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      tags: ['React', 'Recharts', 'Express'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Real Estate Platform',
      description: 'Modern property listing platform with advanced search filters, virtual tours, and mortgage calculators. Optimized for both buyers and agents.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['React', 'Google Maps API', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A selection of my recent work showcasing various technologies and design approaches. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden border border-gray-200 rounded-xl bg-white hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gray-100 h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <Github className="h-4 w-4 text-gray-900" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg"
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button
            className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:bg-indigo-50 hover:border-indigo-600 hover:text-indigo-600 h-12 px-8 text-sm font-medium transition-all"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}