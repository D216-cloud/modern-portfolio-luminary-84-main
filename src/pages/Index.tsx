
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ProgressBar from '@/components/ProgressBar';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProgressBar />
      <NavBar />
      <main className="flex-grow">
        <Hero />
        {/* Subtle divider to enhance flow after removing QuickStats */}
        <div aria-hidden className="my-10 md:my-14">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-coral/20 to-transparent" />
        </div>
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
  {/* LiveChat removed in favor of dedicated /chat page */}
    </div>
  );
};

export default Index;
