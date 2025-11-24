
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
  <footer className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-coral/10">
      <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div>
      <h3 className="text-2xl font-bold mb-2">Deepak Maheta</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Web Developer & Data Analyst
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-coral hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-coral hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-coral hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-coral dark:hover:text-coral transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-coral dark:hover:text-coral transition-colors">Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-coral dark:hover:text-coral transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-600 dark:text-gray-400 hover:text-coral dark:hover:text-coral transition-colors">Education</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-coral dark:hover:text-coral transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">deepakmaheta49@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-400">8849719200</p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-coral/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Deepak Maheta. All rights reserved.
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <p className="flex items-center">
              Made with <Heart className="w-4 h-4 text-coral mx-1 animate-pulse" /> in Rajkot, Gujarat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
