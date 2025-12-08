import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-time Chat App",
    description: "Built a real-time chat application with Firebase for real-time database, authentication, and user session management. Features include audio/video calling and secure user authentication.",
    tech: ["React.js", "Redux", "Firebase", "Tailwind CSS"],
    period: "Apr 2025 - May 2025",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Kings Cricket Live App",
    description: "Responsive cricket live score and news web app with real-time scores, match news, and advanced score details. Integrated third-party APIs with Axios for live cricket data.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "REST API"],
    period: "May 2025 - Jul 2025",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "React Weather App",
    description: "Responsive weather application fetching real-time weather data using third-party APIs. Managed state efficiently with Redux and enhanced functionality with npm tools.",
    tech: ["React.js", "Redux", "Tailwind CSS", "Axios"],
    period: "Feb 2025 - Apr 2025",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Movies-Flex App",
    description: "Responsive movie website displaying upcoming Bollywood, South Indian, and Hollywood movies. Features user login/signup and animated UI components.",
    tech: ["React.js", "Node.js", "CSS3", "JSON Server"],
    period: "Aug 2023 - Mar 2024",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Todo Schedule App",
    description: "Fully functional Todo Schedule web application with CRUD operations for managing tasks efficiently. Includes user authentication and mobile-first responsive design.",
    tech: ["React.js", "CSS3", "JSON Server", "Axios"],
    period: "May 2023 - Jun 2023",
    gradient: "from-primary/20 to-accent/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">{"// My Work"}</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in React.js development, 
            API integration, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="card-glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                {/* Project header with gradient */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Layers className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2 border-t border-border">
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
