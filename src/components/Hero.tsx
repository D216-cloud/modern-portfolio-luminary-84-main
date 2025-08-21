import { Github, Linkedin, Instagram, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import TypeWriter from './TypeWriter';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section id="hero" className="h-screen relative overflow-hidden bg-gradient-to-br from-coral/10 via-transparent to-background dark:from-coral/20 dark:via-gray-900/30 dark:to-background flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-coral/5 rounded-full blur-2xl"></div>
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-coral/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="md:w-1/2 animate-fade-in order-2 md:order-1 text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral/10 text-coral text-xs font-medium mb-3 animate-glow">
            <Sparkles className="h-3 w-3" />
            <TypeWriter 
              texts={[
                "Web Developer & Data Analyst",
                "React.js Enthusiast",
                "Problem Solver",
                "UI/UX Designer"
              ]} 
            />
          </span>
          {/* Availability chip */}
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] md:text-xs font-medium border border-emerald-500/20">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for freelance & internships
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 leading-tight">
            Hello, I'm <span className="text-coral">Deepak Maheta</span>
          </h1>
          
          <h2 className="text-sm md:text-lg mb-3 text-gray-700 dark:text-gray-300 font-normal">
            4th Year Student at Marwadi University
          </h2>
          
          <p className="text-sm md:text-base mb-6 text-gray-600 dark:text-gray-400 max-w-xl">
            Passionate about building innovative solutions and exploring cutting-edge technologies. I specialize in web development and data analysis.
          </p>
          {/* Highlights */}
          <ul className="flex flex-wrap gap-2 mb-6">
            {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Data Analysis'].map((tag) => (
              <li key={tag} className="px-2.5 py-1 rounded-md text-[11px] md:text-xs bg-white/70 dark:bg-gray-800/60 text-gray-700 dark:text-gray-200 border border-gray-200/60 dark:border-gray-700/60 shadow-sm">
                {tag}
              </li>
            ))}
          </ul>
          
          <div className="flex gap-3 mb-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral/10">
              <Github className="h-4 w-4 md:h-5 md:w-5 text-gray-800 dark:text-white/90" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral/10">
              <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-gray-800 dark:text-white/90" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral/10">
              <Instagram className="h-4 w-4 md:h-5 md:w-5 text-gray-800 dark:text-white/90" />
            </a>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link to="/projects">
              <Button 
                className="bg-coral hover:bg-coral-dark text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-xs md:text-sm group hover:animate-glow"
              >
                View Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline"
                className="border-coral text-coral hover:bg-coral/10 px-4 py-2 md:px-6 md:py-2.5 rounded-lg transition-all duration-200 text-xs md:text-sm"
              >
                Contact Me
              </Button>
            </Link>
            <a
              href="/resume-deepak-maheta.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="secondary"
                className="bg-background border-2 border-coral/20 text-coral hover:bg-coral/5 px-4 py-2 md:px-6 md:py-2.5 rounded-lg transition-all duration-200 text-xs md:text-sm group"
              >
                <Download className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                Resume
                <span className="ml-2 group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
              </Button>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 order-1 md:order-2 animate-fade-in flex justify-center mb-6 md:mb-0">
          <div className="relative">
            {/* Soft glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-coral/20 via-transparent to-coral-light/20 rounded-full blur-2xl"></div>
            {/* Animated halo ring */}
            <div className="absolute inset-0 flex items-center justify-center -z-0">
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-coral via-pink-400 to-coral opacity-25 animate-spin [animation-duration:8s]"></div>
            </div>
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-coral shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition duration-300 relative z-10 bg-white/70 dark:bg-gray-900/60 backdrop-blur">
              <img
                src="/deepak-uploads/user-hero.jpg"
                alt="Deepak Maheta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/95 dark:bg-gray-800/95 rounded-full shadow-md flex items-center justify-center z-20">
              <span className="text-coral font-bold text-[10px] md:text-xs">Web Dev</span>
            </div>
            {!isMobile && (
              <>
                <div className="absolute top-5 -right-5 w-10 h-10 bg-white/95 dark:bg-gray-800/95 rounded-full shadow-md flex items-center justify-center z-20 animate-bounce [animation-duration:3s]">
                  <span className="text-coral font-bold text-xs">React</span>
                </div>
                <div className="absolute bottom-5 -left-5 w-10 h-10 bg-white/95 dark:bg-gray-800/95 rounded-full shadow-md flex items-center justify-center z-20 animate-pulse [animation-duration:2.5s]">
                  <span className="text-coral font-bold text-xs">Data</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
