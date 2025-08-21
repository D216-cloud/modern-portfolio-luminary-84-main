import { Link } from 'react-router-dom';
import { Code2, BarChart2, Palette } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/5 animate-fade-in sticky top-28">
            <div className="relative">
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-coral/10 rounded-2xl transform rotate-3"></div>
              <div className="rounded-2xl overflow-hidden border-2 border-coral shadow-xl transform hover:rotate-2 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070" 
                  alt="Deepak Maheta" 
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 py-2 px-4 rounded-full shadow-lg font-medium text-coral">
                Web Developer
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/70 dark:border-gray-700/60">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6">About Me</h3>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hi, I'm <span className="font-medium text-coral">Deepak Maheta</span>, a passionate 4th-year student at Marwadi University. I'm driven by curiosity and love exploring technology, coding, and creating impactful projects.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My goal is to build a career in software development while continuously learning and growing. I believe in the power of technology to solve real-world problems and make life easier.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me reading science fiction novels, exploring new technologies, and playing cricket with friends.
                </p>
                {/* Feature grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="group rounded-xl p-4 bg-gray-50 dark:bg-gray-800/70 border border-gray-200/70 dark:border-gray-700/60 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center mb-3">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h5 className="font-semibold mb-1">Web Development</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Modern, responsive and accessible web apps.</p>
                  </div>
                  <div className="group rounded-xl p-4 bg-gray-50 dark:bg-gray-800/70 border border-gray-200/70 dark:border-gray-700/60 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center mb-3">
                      <BarChart2 className="w-5 h-5" />
                    </div>
                    <h5 className="font-semibold mb-1">Data Analysis</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Turning data into insights and decisions.</p>
                  </div>
                  <div className="group rounded-xl p-4 bg-gray-50 dark:bg-gray-800/70 border border-gray-200/70 dark:border-gray-700/60 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center mb-3">
                      <Palette className="w-5 h-5" />
                    </div>
                    <h5 className="font-semibold mb-1">UI/UX</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Clean, user-first design and interactions.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="/resume-deepak-maheta.pdf" 
                  download="Deepak_Maheta_Resume.pdf"
                  className="group flex items-center justify-center gap-3 bg-coral hover:bg-coral-dark text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
                <Link 
                  to="/contact"
                  aria-label="Open the Contact page"
                  className="group flex items-center justify-center gap-3 bg-white dark:bg-gray-700 border-2 border-coral text-coral hover:bg-coral hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </Link>
              </div>

              <div className="mt-10">
                <h4 className="text-xl font-semibold mb-6 flex items-center">
                  <div className="w-12 h-1 bg-coral rounded-full mr-3"></div>
                  Personal Information
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="glass-card p-4 rounded-xl relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-coral/10 rounded-full"></div>
                    <p className="font-medium text-coral">Name:</p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">Deepak Maheta</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-coral/10 rounded-full"></div>
                    <p className="font-medium text-coral">Email:</p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">deepak.maheta117671@marwadiuniversity.ac.in</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-coral/10 rounded-full"></div>
                    <p className="font-medium text-coral">University:</p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">Marwadi University, Rajkot</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-coral/10 rounded-full"></div>
                    <p className="font-medium text-coral">Year of Study:</p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">4th Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
