import { useEffect, useState } from 'react';
import { Code, Trophy, Coffee, Zap } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Code,
    label: "Projects Completed",
    value: 25,
    suffix: "+",
    color: "text-blue-500"
  },
  {
    icon: Trophy,
    label: "Competitions Won",
    value: 8,
    suffix: "",
    color: "text-yellow-500"
  },
  {
    icon: Coffee,
    label: "Cups of Coffee",
    value: 500,
    suffix: "+",
    color: "text-amber-600"
  },
  {
    icon: Zap,
    label: "Technologies Learned",
    value: 15,
    suffix: "+",
    color: "text-coral"
  }
];

interface CounterProps {
  end: number;
  duration?: number;
}

const Counter = ({ end, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

const QuickStats = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('quick-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="quick-stats" className="py-16 md:py-20 bg-white dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">At a glance</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2">A few quick stats that highlight my work so far</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-[1.03] transition-transform duration-200"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-3 md:mb-4 group-hover:bg-coral/10 transition-colors duration-200`}>
                  <Icon className={`h-8 w-8 ${stat.color} group-hover:text-coral transition-colors duration-200`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-0.5">
                  {inView ? <Counter end={stat.value} /> : 0}
                  <span className="text-coral">{stat.suffix}</span>
                </div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;