
import NavBar from '@/components/NavBar';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SkillsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="container mx-auto px-4 mt-24 mb-6">
        <Link to="/">
          <Button variant="ghost" className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-coral">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Button>
        </Link>
      </div>
      <main className="flex-grow">
        <section className="py-8 md:py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                My <span className="text-coral">Skills</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Tools and technologies I work with daily.</p>
            </div>
            <Skills />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
