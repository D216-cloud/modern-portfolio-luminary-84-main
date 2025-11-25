
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProgressBar from '@/components/ProgressBar';
import LiveChat from '@/components/LiveChat';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
    title: 'Job & Internship Portal',
    description: 'A comprehensive platform connecting students with job and internship opportunities. Features include profile creation, application tracking, and direct company connections.',
    image: '/deepak maheta/job.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    demoUrl: 'https://careersnap.onrender.com',
    githubUrl: 'https://github.com/D216-cloud/smar_job_internship-p--main',
  },
  {
    title: 'AI Chat Application',
    description: 'Interactive chat platform featuring real-time conversations with an AI assistant. Built with modern web technologies and deployed on Vercel.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2070',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    demoUrl: 'https://topic-chat-flow-main-main.vercel.app/',
    githubUrl: 'https://github.com/D216-cloud/topic-chat-flow-main-main',
  },
  {
    title: 'Modern Portfolio',
    description: 'My personal portfolio showcasing projects and skills. Features dark mode, responsive design, and interactive components.',
    image: '/deepak maheta/portfolio.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://modern-portfolio-luminary-84-main-9xkh.onrender.com/',
    githubUrl: 'https://github.com/D216-cloud/modern-portfolio-luminary-84-main',
  },
  
];

const AllProjects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProgressBar />
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Link to="/" className="inline-flex items-center gap-2 text-coral hover:text-coral-dark transition-colors mb-6">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral/10 text-coral text-xs font-medium mb-3">
                Showcases
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-3">
                My <span className="text-coral">Projects</span>
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
                Explore my complete portfolio of projects spanning web development, mobile applications, and machine learning experiments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border border-gray-200/70 dark:border-gray-700/60"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="h-52 overflow-hidden relative">
                    {/* Deployment Status Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      {project.title === 'Job & Internship Portal' ? (
                        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-yellow-400/50">
                          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                          <span className="text-xs font-medium">Deployment in Progress</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-emerald-400/50">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-xs font-medium">Deployed</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-end justify-start p-6">
                      <div className="flex gap-4">
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1 text-sm font-medium ${project.demoUrl === '#' ? 'bg-gray-500 cursor-not-allowed' : 'bg-coral hover:bg-coral-dark'} px-3 py-1.5 rounded-full transition-colors text-white`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          {project.demoUrl === '#' ? 'Coming Soon' : 'Demo'}
                        </a>
                        <a 
                          href={project.githubUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-medium text-white bg-gray-800/80 px-3 py-1.5 rounded-full hover:bg-gray-900 transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      </div>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-coral transition-colors">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs font-medium bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/">
                <Button 
                  variant="outline" 
                  className="border-coral text-coral hover:bg-coral/10 px-8 py-4 text-lg rounded-lg transition-all duration-300 group flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Back to Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <LiveChat />
    </div>
  );
};

export default AllProjects;
