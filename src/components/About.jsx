import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React.js", level: 95, color: "primary" },
  { name: "Redux", level: 90, color: "primary" },
  { name: "Tailwind CSS", level: 95, color: "primary" },
  { name: "CSS3", level: 95, color: "accent" },
  { name: "Firebase", level: 85, color: "accent" },
  { name: "MongoDB", level: 80, color: "accent" },
  { name: "Node.js", level: 75, color: "primary" },
  { name: "SQL", level: 80, color: "accent" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">{"// About Me"}</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Turning Ideas Into{" "}
            <span className="text-gradient">Digital Reality</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Motivated and detail-oriented Front-End Developer with 1+ year of hands-on experience 
            in React.js. Proficient in building responsive and dynamic web applications using 
            modern JavaScript frameworks with strong understanding of component-based architecture, 
            state management, and RESTful API integration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-primary rounded-full" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        skill.color === "primary" 
                          ? "bg-gradient-to-r from-primary to-primary/70" 
                          : "bg-gradient-to-r from-accent to-accent/70"
                      }`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-primary rounded-full" />
                Experience
              </h3>
              <div className="space-y-6">
                <div className="card-glass p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">React.js Developer</h4>
                      <p className="text-primary font-mono text-sm">Info Stans Pvt Ltd</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono bg-secondary px-3 py-1 rounded-full">
                      Aug 2024 - Present
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Ahmedabad, India • Working with React.js, Firebase, MongoDB
                  </p>
                </div>

                <div className="card-glass p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">MERN Stack Developer</h4>
                      <p className="text-accent font-mono text-sm">Jspider Pvt Ltd</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono bg-secondary px-3 py-1 rounded-full">
                      Jun 2023 - Jun 2024
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Bangalore, India • Internship
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-primary rounded-full" />
                Education
              </h3>
              <div className="card-glass p-6 rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Computer Applications</h4>
                    <p className="text-primary font-mono text-sm">Gujarat University</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono bg-secondary px-3 py-1 rounded-full">
                    2020 - 2023
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">Ahmedabad, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
