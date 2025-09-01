import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

interface ContactMethod {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: 'blue' | 'red' | 'green';
}

const contactMethods: ContactMethod[] = [
  {
    name: 'LinkedIn',
    description: 'Professional Network',
    href: 'https://linkedin.com/in/shahariaranik',
    icon: <Linkedin className="w-6 h-6" />,
    color: 'blue'
  },
  {
    name: 'Email',
    description: 'connect.shahariar@gmail.com',
    href: 'mailto:connect.shahariar@gmail.com',
    icon: <Mail className="w-6 h-6" />,
    color: 'red'
  },
  {
    name: 'WhatsApp',
    description: 'Direct Message',
    href: 'https://wa.me/8801919594804',
    icon: <MessageCircle className="w-6 h-6" />,
    color: 'green'
  }
];

export function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text" data-testid="contact-title">
            Let's Connect
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-3xl text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="contact-subtitle">
                Ready to collaborate?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="contact-description">
                I'm always excited to connect with fellow professionals, thought leaders, and enthusiasts 
                in the product management space. Let's discuss product strategies, industry trends, or 
                collaborate on innovative solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group data-cursor-hover"
                    data-testid={`contact-method-${method.name.toLowerCase()}`}
                  >
                    <div className={`w-12 h-12 bg-${method.color}-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${method.color}-500/30 transition-colors duration-300`}>
                      <div className={`text-${method.color}-500`}>
                        {method.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1" data-testid={`contact-method-name-${index}`}>
                      {method.name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`contact-method-description-${index}`}>
                      {method.description}
                    </p>
                  </motion.a>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground" data-testid="contact-info">
                  <span className="text-foreground font-semibold">Location:</span> Dhaka, Bangladesh<br />
                  <span className="text-foreground font-semibold">Phone:</span> +880 1919-594804
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
