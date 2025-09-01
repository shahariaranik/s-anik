import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  color: 'primary' | 'secondary' | 'accent';
}

const experiences: ExperienceItem[] = [
  {
    title: 'MTO - Product Manager',
    company: 'Sheba Platform Limited',
    period: 'Apr 2025 – Present',
    location: 'Dhaka, Bangladesh',
    color: 'primary',
    achievements: [
      'Led cross-functional teams (Design, Dev, QA, Business, SOC, DevOps) delivering impactful features',
      'Applied A/B testing and conducted 100+ merchant interviews for data-driven growth',
      'Created weekly performance reports (WAU, crash analytics, ANR, retention)'
    ]
  },
  {
    title: 'Product Manager',
    company: 'Psycure Limited',
    period: 'Oct 2023 – Dec 2024',
    location: 'Dhaka, Bangladesh',
    color: 'secondary',
    achievements: [
      'Reduced psychologist booking steps from 7 to 4, boosting session conversions',
      'Improved website performance by 50% through optimization strategies',
      'Launched wellness tools including counseling booking, meditation, and interactive quizzes'
    ]
  },
  {
    title: 'Creative Lead',
    company: 'Psycure Limited',
    period: 'Jul 2023 – Oct 2023',
    location: 'Dhaka, Bangladesh',
    color: 'accent',
    achievements: [
      'Executed 8+ marketing campaigns driving 468% growth and reaching 420K+ users',
      'Enhanced product UI/UX to improve user satisfaction and engagement'
    ]
  }
];

export function ExperienceSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text" data-testid="experience-title">
            Professional Journey
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="glass-card p-8 rounded-3xl hover:scale-[1.02] transition-transform duration-300"
                  data-testid={`experience-card-${index}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid={`experience-title-${index}`}>
                        {exp.title}
                      </h3>
                      <p className={`text-${exp.color} font-semibold`} data-testid={`experience-company-${index}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground" data-testid={`experience-period-${index}`}>
                        {exp.period}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`experience-location-${index}`}>
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start" data-testid={`experience-achievement-${index}-${achIndex}`}>
                        <div className={`w-2 h-2 bg-${exp.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
