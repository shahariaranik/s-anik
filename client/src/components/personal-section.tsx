import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface Hobby {
  name: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'accent' | 'orange';
}

const hobbies: Hobby[] = [
  {
    name: 'Chess',
    description: 'Strategic thinking and problem-solving through the royal game',
    icon: '♛',
    color: 'primary'
  },
  {
    name: 'Guitar Playing',
    description: 'Musical expression and creativity through strings and melodies',
    icon: '🎸',
    color: 'secondary'
  },
  {
    name: "Rubik's Cube",
    description: 'Algorithmic puzzle solving and pattern recognition mastery',
    icon: '🧩',
    color: 'accent'
  },
  {
    name: 'Audio Engineering',
    description: 'Speaker building and sound system optimization',
    icon: '🔊',
    color: 'orange'
  }
];

export function PersonalSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="personal" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text" data-testid="personal-title">
            Beyond Work
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isIntersecting ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="glass-card p-6 rounded-3xl hover:scale-105 transition-transform duration-300 text-center"
                data-testid={`hobby-card-${index}`}
              >
                <div className={`w-16 h-16 bg-${hobby.color === 'orange' ? 'orange' : hobby.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl" data-testid={`hobby-icon-${index}`}>
                    {hobby.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`hobby-name-${index}`}>
                  {hobby.name}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`hobby-description-${index}`}>
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mental Health Advocacy */}
          <div className="max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="glass-card p-8 rounded-3xl text-center"
              data-testid="mental-health-advocacy"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="advocacy-title">
                Mental Health Advocate
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="advocacy-description">
                Passionate about mental health awareness and community support. Volunteered at Kaan Pete Roi helpline, 
                responding to 300+ calls including 150 high-risk cases, and served as First Responder for Robi Axiata's 
                "Kotha Hobe Bondhu" project.
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center" data-testid="stat-calls">
                  <div className="text-2xl font-bold text-primary">300+</div>
                  <div className="text-sm text-muted-foreground">Helpline Calls</div>
                </div>
                <div className="text-center" data-testid="stat-interventions">
                  <div className="text-2xl font-bold text-secondary">150</div>
                  <div className="text-sm text-muted-foreground">Crisis Interventions</div>
                </div>
                <div className="text-center" data-testid="stat-years">
                  <div className="text-2xl font-bold text-accent">2+</div>
                  <div className="text-sm text-muted-foreground">Years Service</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
