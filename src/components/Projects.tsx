
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'Hotel Management System',
    description: 'A comprehensive hotel management solution with booking, room allocation, and billing features.',
    image: '/deepak maheta/hotel.png',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    demoUrl: 'https://stayease-animate-main-1.onrender.com',
    githubUrl: 'https://github.com/D216-cloud/stayease-animate-main',
  },
  {
    title: 'YouTube Automation',
    description: 'Automated YouTube content management using YouTube API, Google Auth, and Gemini AI.',
    image: '/deepak maheta/youtube.png',
    technologies: ['Next.js', 'YouTube API', 'Google Auth', 'Gemini API'],
    demoUrl: 'https://yt-ai-main.vercel.app/',
    githubUrl: 'https://github.com/D216-cloud/Yt-Ai-main',
  },
  {
    title: 'AI-Powered HRMS',
    description: 'An intelligent Human Resource Management System leveraging AI for employee management.',
    image: '/deepak maheta/ai-hrms.png',
    technologies: ['React', 'Node.js', 'Open API', 'MongoDB'],
    demoUrl: 'https://ai-hrms-main-dewu.vercel.app/',
    githubUrl: 'https://github.com/D216-cloud/ai-hrms-main',
  },
  {
    title: 'Personal Portfolio',
    description: 'A responsive portfolio website built with React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-commerce Website',
    description: 'A full-featured online store with product listings, cart functionality, and payment integration.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Manager App',
    description: 'A productivity application to help users organize and track their daily tasks.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather App',
    description: 'A weather application that provides real-time forecasts and conditions for any location.',
    image: 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=2074',
    technologies: ['JavaScript', 'OpenWeather API', 'CSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">My Projects</h3>
          <p className="text-gray-600 dark:text-gray-400">Showcasing my creative work and technical skills</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Click on my name in the assistant to learn more about my projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold mb-2 group-hover:text-coral transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-coral hover:text-coral-dark transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-700 dark:text-gray-300 hover:text-coral dark:hover:text-coral transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button 
              className="bg-coral hover:bg-coral-dark text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg flex items-center gap-2 group mx-auto"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
