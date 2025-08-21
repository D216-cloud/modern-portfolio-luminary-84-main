
import { MapPin, Calendar, Star } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

const educationItems: EducationItem[] = [
  {
    id: 'university',
    institution: 'Marwadi University',
    degree: 'B.Tech in Computer Science & Engineering',
    duration: '2021 - Present',
    location: 'Rajkot, Gujarat',
  description: 'Currently in 4th year, focusing on advanced programming, data structures, algorithms, and web development technologies.',
    achievements: ['Dean\'s List 2022-2023', 'Technical Club Member', 'Hackathon Finalist']
  },
  {
    id: 'highschool',
    institution: 'Ambica Science School',
    degree: '12th Grade (Higher Secondary)',
    duration: '2019 - 2021',
    location: 'Ahmedabad, Gujarat',
    description: 'Completed Higher Secondary with a focus on Science and Mathematics, achieving 85% marks overall.',
    achievements: ['Science Club President', '2nd Prize in State Science Fair', 'Mathematics Olympiad Participant']
  },
  {
    id: 'school',
    institution: 'Shree Swami Narayan School',
    degree: '10th Grade (Secondary)',
    duration: '2018 - 2019',
    location: 'Surat, Gujarat',
    description: 'Completed Secondary School with distinction, scoring 92% marks with excellence in Mathematics and Science.',
    achievements: ['School Topper', 'Excellence in Mathematics Award', 'Perfect Attendance']
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">Educational Journey</h3>
          <p className="text-gray-600 dark:text-gray-400">My academic background and qualifications</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {educationItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-br from-coral/20 to-coral/5 dark:from-coral/10 dark:to-coral/5 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.institution}</h3>
                  
                  <div className="flex items-center text-coral font-medium mb-3">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    <span className="text-sm">{item.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <h4 className="text-lg text-coral mb-3 font-medium">{item.degree}</h4>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{item.description}</p>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <h5 className="font-medium mb-2 text-sm flex items-center">
                      <Star className="w-3.5 h-3.5 mr-1.5 text-coral" />
                      Achievements
                    </h5>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {item.achievements.map((achievement, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-coral mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-400 text-xs">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
