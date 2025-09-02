import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import Raktaveer from "../raktaveer.png";
import Pcps from "../pcps.png";
import Furniture from "../furniture.png";
import Hack from "../hackx.png";
import Evolve from "../evolve.png";
import epes from "../epes.png";


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
      title: "Raktaveer App",
      category: "mobile",
      image: Raktaveer,
      description: "Raktaveer is a life-saving mobile application designed to connect blood donors with those in urgent need. The app simplifies the process of requesting and donating blood by creating a trusted digital platform where patients, families, and donors can interact quickly and efficiently.",
      tags: ["UI Design", "UX Research", "Mobile App"],
      link: "https://www.figma.com/design/zspkl8zqucSL3E2LvDSNnU/MYM-RaktaVeer?node-id=0-1&t=lUeCzQp3vjTCPkKC-1",
    },
    {
      id: 2,
      title: "School Website",
      category: "web",
      image: epes,
      description: "A school website is an official digital platform that provides students, parents, teachers, and the community with easy access to important information. It typically includes details about the school’s history, vision, mission, academic programs, admission process, events, notices, and contact information.",
      tags: ["Web Design", "UI/UX", "School"],
      link: "https://www.figma.com/design/qVKszNIX3SwUvr6T2Bnty5/East-Point-English-School-Website?node-id=10-2&t=Cp1RMkdnHahpZ4fN-1",
    },
    {
      id: 3,
      title: "Furniture Website",
      category: "web",
      image: Furniture,
      description: "A furniture website is an online platform where customers can browse, explore, and purchase a wide range of furniture products. It serves as a digital showroom showcasing modern, classic, and custom-designed pieces for homes, offices, and outdoor spaces.",
      tags: ["UI Design", "UX Research", "E-commerce",],
      link: "https://www.figma.com/design/Cc7Rnw3PIX54bXn5ayQZDR/Furniture-Website?node-id=0-1&t=fcW2hH4louGdLSkq-1",
    },
    {
      id: 4,
      title: "PCPS LIFE",
      category: "mobile",
      image:Pcps ,
      description: "PCPS LIFE is an all-in-one mobile application designed exclusively for PCPS students, faculty, and staff. The app creates a digital ecosystem where academic, administrative, and social activities come together in one place. From accessing study materials and tracking academic progress to staying updated with events, notices, and campus life, PCPS LIFE ensures a smooth and connected college experience.",
      tags: ["Mobile App", "UI Design", "College"],
      link: "https://www.figma.com/design/Y1vk3r9920d7aHeLO65NVm/College-app?node-id=0-1&t=CSWRCVhBros8rNg8-1",
    },
    {
      id: 5,
      title: "Evolve LBEF Website",
      category: "web",
      image: Evolve,
      description: "EVOLVE is a flagship initiative of LBEF Campus aimed at empowering students and young professionals through innovation, collaboration, and skill development. It provides a platform to share ideas, attend workshops, network with experts, and showcase talents that can create real-world impact.",
      tags: ["Landing Page", "UI Design"],
      link: "https://www.figma.com/design/4fivsgqnbjdQ4MjftbNAHE/Evolve-Lbef?node-id=0-1&t=zztvkKMyMRm5TWzE-1",
    },
    {
      id: 6,
      title: "Hack-X Website",
      category: "web",
      image: Hack,
      description: "Hack X is a premier hackathon bringing together developers, designers, entrepreneurs, and innovators to solve real-world problems through technology. Participants collaborate in teams, brainstorm solutions, and build prototypes that push the boundaries of innovation.",
      tags: ["Hackthone", "Web App", "Ui Design"],
      link: "https://www.figma.com/design/jlMSuKnEcXfl2PZEscLdGR/HACK-X?node-id=0-1&t=fsGlg6JbgEzyHKhw-1",
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
              href="#"
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