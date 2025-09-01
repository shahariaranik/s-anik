import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight" data-testid="hero-title">
            <span className="gradient-text">Product</span><br />
            <span className="text-foreground">Manager</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
            Passionate about driving product excellence and innovation. Transforming ideas into successful, customer-centric solutions at <span className="text-primary font-semibold">Sheba Platform</span>.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="glass-card px-8 py-4 rounded-2xl text-lg font-medium hover:text-primary transition-all duration-300 data-cursor-hover"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 animate-glow data-cursor-hover"
              data-testid="button-contact"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer"
        onClick={scrollToAbout}
        data-testid="scroll-indicator"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
