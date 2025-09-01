import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  color: 'primary' | 'secondary';
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Product Management',
    color: 'primary',
    skills: [
      { name: 'Product Strategy & Roadmapping', percentage: 95 },
      { name: 'User Research & Testing', percentage: 90 },
      { name: 'Agile Project Management', percentage: 92 },
      { name: 'Market Research & Analysis', percentage: 88 }
    ]
  },
  {
    title: 'Technical Expertise',
    color: 'secondary',
    skills: [
      { name: 'UI/UX Design (Figma)', percentage: 85 },
      { name: 'Data Analysis (SQL, Power BI)', percentage: 80 },
      { name: 'Product Analytics (Mixpanel)', percentage: 90 },
      { name: 'SDLC & Version Control', percentage: 75 }
    ]
  }
];

const certifications = [
  { name: 'Product Management', issuer: 'HDNB - May 2025', color: 'primary' },
  { name: 'Digital Product Management', issuer: 'University of Virginia', color: 'secondary' },
  { name: 'UX Design', issuer: 'Google Certification', color: 'accent' }
];

function ProgressBar({ skill, color, isVisible }: { skill: Skill; color: string; isVisible: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.percentage]);

  return (
    <div data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <div className="flex justify-between mb-2">
        <span className="text-foreground">{skill.name}</span>
        <span className="text-muted-foreground">{skill.percentage}%</span>
      </div>
      <div className="progress-bar bg-muted rounded-full h-2">
        <div 
          className={`progress-fill bg-${color} h-2 rounded-full`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text" data-testid="skills-title">
            Core Competencies
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, x: catIndex === 0 ? -30 : 30 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: catIndex === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1, ease: "easeOut" }}
                className="glass-card p-8 rounded-3xl"
                data-testid={`skill-category-${catIndex}`}
              >
                <h3 className={`text-2xl font-bold mb-6 text-${category.color}`} data-testid={`skill-category-title-${catIndex}`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar 
                      key={skillIndex} 
                      skill={skill} 
                      color={category.color} 
                      isVisible={isIntersecting}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground" data-testid="certifications-title">
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="glass-card p-6 rounded-2xl text-center"
                  data-testid={`certification-${index}`}
                >
                  <div className={`w-12 h-12 bg-${cert.color}/20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <CheckCircle className={`w-6 h-6 text-${cert.color}`} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2" data-testid={`certification-name-${index}`}>
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`certification-issuer-${index}`}>
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
