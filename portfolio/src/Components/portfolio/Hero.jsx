
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/50 via-white to-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-wide text-indigo-600 uppercase">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                  [Your Name]
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
                [Your Role/Title]
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                I create beautiful, functional digital experiences that combine elegant design 
                with clean code. Specializing in modern web applications and user interfaces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all h-12 px-8"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-300 hover:bg-gray-50 h-12 px-8"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-500">Connect with me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full"></div>
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-200/50 to-purple-200/50 rounded-full -z-10 blur-2xl"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-indigo-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-900">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
