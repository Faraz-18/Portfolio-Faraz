import React from 'react';
import { Code, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Syed Faraz Ahmed
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I'm not just searching for a path - I'm building one, so it's easier for those who come after me..
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Faraz-18" 
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors hover:scale-110 transform duration-200"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mr-faraz-ahmed/" 
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors hover:scale-110 transform duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://mail.google.com/mail/u/0/?fs=1&to=farazertugrul18@gmail.com&tf=cm" 
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors hover:scale-110 transform duration-200"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Certificates'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Python Developer</li>
              <li>C/C++ Developer</li>
              <li>FrontEnd Developer</li>
              <li>Java Developer</li>
              <li>Azure Fundamental</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <p>Pakistan</p>
              <p>farazertugrul18@gmail.com</p>
              <p>+92 312-3567785</p>
            </div>
            
            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
              >
                <ArrowUp size={16} />
                Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="text-slate-400 text-center md:text-right">
              <p>&copy; {currentYear} FarazPortfolio. All rights reserved.</p>
              <p className="text-sm mt-1">Designed for the future</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;