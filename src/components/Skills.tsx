
import { useEffect, useRef, useState } from 'react';
import { Layout, Code2, Database, Beaker, FileCode2, Brain, Award, Star } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  {
    name: 'HTML & CSS',
    percentage: 90,
    icon: <Layout className="w-10 h-10" />,
    color: '#E34F26',
  },
  {
    name: 'JavaScript',
    percentage: 85,
    icon: <Code2 className="w-10 h-10" />,
    color: '#F7DF1E',
  },
  {
    name: 'React',
    percentage: 80,
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="#61DAFB"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>,
    color: '#61DAFB',
  },
  {
    name: 'MongoDB',
    percentage: 75,
    icon: <Database className="w-10 h-10" />,
    color: '#4DB33D',
  },
  {
    name: 'Python',
    percentage: 70,
    icon: <Beaker className="w-10 h-10" />,
    color: '#3776AB',
  },
  {
    name: 'Data Analytics',
    percentage: 65,
    icon: <Brain className="w-10 h-10" />,
    color: '#EE4C2C',
  },
  {
    name: 'TypeScript',
    percentage: 78,
    icon: <FileCode2 className="w-10 h-10" />,
    color: '#3178C6',
  },
  {
    name: 'Node.js',
    percentage: 72,
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="#8CC84B"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2z"/><path d="M12 22.15c-.27 0-.55-.07-.78-.2l-7.44-4.3c-.48-.28-.78-.8-.78-1.36V7.71c0-.56.3-1.08.78-1.36l7.44-4.3c.46-.26 1.04-.26 1.5 0l7.44 4.3c.48.28.78.8.78 1.36v8.58c0 .56-.3 1.08-.78 1.36l-7.44 4.3c-.23.13-.51.2-.78.2z" fill="#8CC84B"/></svg>,
    color: '#8CC84B',
  },
  {
    name: 'Git & GitHub',
    percentage: 82,
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="#F05032"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.717.713 1.880 0 2.596-.719.719-1.896.719-2.613 0-.717-.716-.717-1.878 0-2.596.177-.177.384-.297.609-.382V8.688c-.227-.088-.438-.21-.609-.382-.543-.543-.674-1.343-.396-1.997L8.93 4.898l-8.475 8.477c-.604.604-.604 1.584 0 2.187l10.48 10.477c.604.604 1.582.604 2.186 0l10.425-10.426c.603-.603.603-1.582 0-2.186"/></svg>,
    color: '#F05032',
  },
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Map skill names to a few concise tags to replace the old progress bar
  const tagsMap: Record<string, string[]> = {
    'HTML & CSS': ['Semantic', 'Responsive', 'Tailwind'],
    'JavaScript': ['ES6+', 'Async', 'DOM'],
    'React': ['Hooks', 'Router', 'State'],
    'MongoDB': ['Schema', 'Queries', 'Aggregation'],
    'Python': ['Pandas', 'Scripts', 'Automation'],
    'Data Analytics': ['Exploration', 'Charts', 'Insights'],
    'TypeScript': ['Types', 'Generics', 'Strict'],
    'Node.js': ['APIs', 'Express', 'REST'],
    'Git & GitHub': ['Branching', 'PRs', 'Reviews']
  };

  const getLevel = (percentage: number) => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 70) return 'Proficient';
    if (percentage >= 60) return 'Intermediate';
    return 'Beginner';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const el = skillsRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-coral/10 p-3 rounded-full">
              <Award className="w-8 h-8 text-coral" />
            </div>
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-coral to-coral-dark">Technical Skills</h3>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Proficient in modern web technologies with hands-on experience in full-stack development
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>Continuously learning and improving</span>
          </div>
        </div>
        
        <div 
          ref={skillsRef} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 dark:to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500" style={{ backgroundColor: skill.color }}></div>
              
              <div className="p-6 flex flex-col items-center relative z-10">
                <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-2xl bg-white dark:bg-gray-700 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2" style={{ borderColor: skill.color + '20', color: skill.color }}>
                  {skill.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800 dark:text-white group-hover:text-coral transition-colors duration-300">{skill.name}</h3>

                {/* Level pill derived from percentage (no progress bar) */}
                <div className="mb-3">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                    style={{ backgroundColor: skill.color + '20', color: skill.color }}
                  >
                    {getLevel(skill.percentage)}
                  </span>
                </div>

                {/* Helpful tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {(tagsMap[skill.name] || []).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] md:text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 transition-all duration-300 ${
                        i < Math.round(skill.percentage / 20) 
                          ? 'fill-current text-yellow-400' 
                          : 'text-gray-300 dark:text-gray-600'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
