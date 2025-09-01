import { useEffect } from 'react';
import { CustomCursor } from '@/components/custom-cursor';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { PersonalSection } from '@/components/personal-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('#home');
      if (hero) {
        (hero as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <PersonalSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border" data-testid="footer">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground" data-testid="footer-text">
            © 2024 Shahariar Anik. Crafted with passion for innovation and excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}
