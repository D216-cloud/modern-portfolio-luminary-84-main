
import NavBar from '@/components/NavBar';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationPage = () => {
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
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;
