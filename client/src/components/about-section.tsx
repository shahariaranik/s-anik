import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text" data-testid="about-title">
              About Me
            </h2>
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground" data-testid="about-subtitle">
                    Dynamic Product Manager
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid="about-description-1">
                    Based in Dhaka, Bangladesh, I'm a results-driven Product Manager with a proven track record in product strategy, user-centric design, and cross-functional leadership. Currently empowering 1M+ SMEs at Sheba Platform.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid="about-description-2">
                    Passionate about leveraging technology to solve real-world problems and drive business growth. Experienced in managing agile teams, optimizing workflows, and delivering scalable solutions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm" data-testid="skill-tag-strategy">
                      Product Strategy
                    </span>
                    <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm" data-testid="skill-tag-research">
                      User Research
                    </span>
                    <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm" data-testid="skill-tag-leadership">
                      Agile Leadership
                    </span>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold mb-4 text-foreground" data-testid="quick-facts-title">
                    Quick Facts
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between" data-testid="fact-location">
                      <span className="text-muted-foreground">Location</span>
                      <span className="text-foreground">Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex justify-between" data-testid="fact-experience">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="text-foreground">3+ Years</span>
                    </div>
                    <div className="flex justify-between" data-testid="fact-role">
                      <span className="text-muted-foreground">Current Role</span>
                      <span className="text-foreground">Product Manager</span>
                    </div>
                    <div className="flex justify-between" data-testid="fact-education">
                      <span className="text-muted-foreground">Education</span>
                      <span className="text-foreground">BSc CSE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
