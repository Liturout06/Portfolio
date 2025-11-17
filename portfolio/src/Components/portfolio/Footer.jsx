import React from 'react';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <Logo className="w-10 h-10" />
              <span className="text-xl font-bold">[Your Name]</span>
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} [Your Name]. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <Button
              onClick={scrollToTop}
              size="icon"
              className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full shadow-lg"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}