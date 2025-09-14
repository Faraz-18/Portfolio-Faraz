import React, { useState, useEffect } from "react";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={` fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-slate-200"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-600">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden text-white md:block">
            <div className="ml-10 flex items-baseline space-x-8 ">
              {["About", "Projects", "Skills", "Certificates"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-black  hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-200  "
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-3">
              <a
                href="https://github.com/Faraz-18"
                className="text-slate-600 hover:text-blue-600 transition-colors "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mr-faraz-ahmed/"
                className="text-slate-600 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=farazertugrul18@gmail.com&tf=cm"
                className="text-slate-600 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
              </a>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2">
              <Download size={16} />
              <a
                href="\Public\Professional Resume.pdf"
                download="Resume.pdf"
                className="text-white no-underline"
              >
                Resume
              </a>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-slate-200">
              {["About", "Projects", "Skills", "Certificates"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-600 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left"
                  >
                    {item}
                  </button>
                )
              )}
              <div className="pt-4 pb-2 border-t border-slate-200">
                <div className="flex justify-center space-x-6 mb-4">
                  <a
                    href="https://github.com/Faraz-18"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mr-faraz-ahmed/"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=farazertugrul18@gmail.com&tf=cm"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2">
                  <Download size={16} />
                  <a
                    href="./Public/resume.pdf"
                    download="Faraz_Resume.pdf"
                    className="text-white no-underline"
                  >
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
