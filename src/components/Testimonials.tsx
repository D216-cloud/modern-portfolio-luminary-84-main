import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Prof. Sarah Johnson",
    role: "Computer Science Professor",
    company: "Marwadi University",
    content: "Deepak is an exceptional student with a keen eye for detail and innovative problem-solving skills. His projects consistently exceed expectations.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Senior Developer",
    company: "Tech Solutions Inc.",
    content: "Working with Deepak on our internship program was amazing. His React.js skills and data analysis capabilities are impressive for a student.",
    rating: 5,
    avatar: "RP"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "UI/UX Designer",
    company: "Creative Design Studio",
    content: "Deepak's design sense and technical implementation skills make him a valuable team member. He bridges the gap between design and development beautifully.",
    rating: 5,
    avatar: "PS"
  },
  {
    id: 4,
    name: "Dr. Amit Kumar",
    role: "Data Science Lead",
    company: "Analytics Corp",
    content: "His data analysis projects show deep understanding of complex concepts. Deepak has great potential in the field of data science.",
    rating: 5,
    avatar: "AK"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-coral/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
            What People Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Testimonials from professors, colleagues, and industry professionals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden shadow-lg border border-coral/10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto md:mx-0 shadow-lg">
                    {currentTestimonial.avatar}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-coral font-medium">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {currentTestimonial.company}
                  </p>
                  <div className="flex justify-center md:justify-start gap-1 mt-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <Quote className="h-12 w-12 text-coral/30 mb-4" />
                  <blockquote className="text-base md:text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                    "{currentTestimonial.content}"
                  </blockquote>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="icon"
                  className="border-coral/20 text-coral hover:bg-coral/10 transition-colors duration-200"
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-coral scale-125'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-coral/50'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="icon"
                  className="border-coral/20 text-coral hover:bg-coral/10 transition-colors duration-200"
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;