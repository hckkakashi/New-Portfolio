import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
};

export const Projects = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const sectionRef = React.useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Finance App Redesign",
      category: "mobile",
      image: "https://img.heroui.chat/image/finance?w=600&h=400&u=1",
      description: "A complete redesign of a financial management application with improved user experience and visual appeal.",
      tags: ["UI Design", "UX Research", "Mobile App"],
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
      description: "A modern e-commerce platform with intuitive navigation and seamless checkout process.",
      tags: ["Web Design", "UI/UX", "E-commerce"],
      link: "#",
    },
    {
      id: 3,
      title: "Health Tracking Dashboard",
      category: "web",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
      description: "A comprehensive health monitoring dashboard that visualizes user health data in an intuitive way.",
      tags: ["Dashboard", "Data Visualization", "Healthcare"],
      link: "#",
    },
    {
      id: 4,
      title: "Travel Companion App",
      category: "mobile",
      image: "https://img.heroui.chat/image/places?w=600&h=400&u=4",
      description: "A travel app that helps users discover, plan, and navigate their journeys with personalized recommendations.",
      tags: ["Mobile App", "UI Design", "Travel"],
      link: "#",
    },
    {
      id: 5,
      title: "Smart Home Control System",
      category: "web",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
      description: "An intuitive interface for controlling smart home devices with customizable dashboards.",
      tags: ["IoT", "Dashboard", "Smart Home"],
      link: "#",
    },
    {
      id: 6,
      title: "Social Media Platform",
      category: "web",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
      description: "A modern social platform focused on community building and content sharing.",
      tags: ["Social Media", "Web App", "Community"],
      link: "#",
    },
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-foreground/70 max-w-2xl mx-auto text-pretty">
              A showcase of my recent design projects, ranging from mobile applications to web platforms.
              Each project represents a unique challenge and solution.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <Tabs
              aria-label="Project categories"
              color="primary"
              variant="light"
              selectedKey={selectedCategory}
              onSelectionChange={setSelectedCategory as any}
              className="justify-center"
            >
              <Tab key="all" title="All Projects" />
              <Tab key="web" title="Web Design" />
              <Tab key="mobile" title="Mobile Apps" />
            </Tabs>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden h-full">
                  <CardBody className="p-0 flex flex-col">
                    <div className="relative overflow-hidden aspect-[3/2]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <Button
                            as="a"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            variant="flat"
                            size="sm"
                            className="w-full"
                            endContent={<Icon icon="lucide:external-link" />}
                          >
                            View Project
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-foreground/70 text-sm mb-4 text-pretty">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              as="a"
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              variant="bordered"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              View More on Dribbble
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};