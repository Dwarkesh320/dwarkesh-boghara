import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, -50, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span className="text-gradient">Dwarkesh</span>
              <br />
              <span className="text-muted-foreground">Boghara</span>
            </motion.h1>

            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-4 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {"<"}<span className="text-primary">React</span>{" "}Developer {"/>"}
            </motion.p>

            <motion.p 
              className="text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Building responsive and dynamic web applications with modern JavaScript frameworks.
              1+ years of hands-on experience in React.js development.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="glow" size="xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            <motion.div 
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a 
                href="https://github.com/Dwarkesh320" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/dwarkesh-boghara-722527235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:dwarkeshpatel616@gmail.com"
                className="p-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                <img 
                  src={profileImage} 
                  alt="Dwarkesh Boghara - React Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-border rounded-lg font-mono text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-primary">React.js</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-border rounded-lg font-mono text-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-accent">Firebase</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-mono">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
