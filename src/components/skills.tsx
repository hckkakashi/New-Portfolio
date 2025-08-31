import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Skills = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

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

  const designSkills = [
    { name: "UI Design", value: 95, icon: "lucide:layout" },
    { name: "UX Research", value: 90, icon: "lucide:search" },
    { name: "Wireframing", value: 92, icon: "lucide:box-select" },
    { name: "Prototyping", value: 88, icon: "lucide:layers" },
  ];

  const toolSkills = [
    { name: "Figma", value: 95, icon: "logos:figma" },
    { name: "Adobe XD", value: 50, icon: "logos:adobe-xd" },
    { name: "Canva", value: 85, icon: "logos:canva" },
    { name: "Photoshop", value: 50, icon: "logos:adobe-photoshop" },
  ];

  const services = [
    {
      title: "UI Design",
      description: "Creating visually stunning interfaces that engage users and enhance brand identity.",
      icon: "lucide:layout-dashboard",
    },
    {
      title: "UX Research",
      description: "Conducting user research to understand behaviors, needs, and motivations through observation and feedback.",
      icon: "lucide:search",
    },
    {
      title: "Wireframing",
      description: "Building structural blueprints that establish hierarchy and key functionalities.",
      icon: "lucide:box-select",
    },
    {
      title: "Prototyping",
      description: "Creating interactive models that simulate user experience and test functionality.",
      icon: "lucide:layers",
    },
    {
      title: "Design Systems",
      description: "Developing cohesive design languages that ensure consistency across products.",
      icon: "lucide:component",
    },
    {
      title: "Mobile App Design",
      description: "Crafting intuitive mobile experiences with a focus on usability and engagement.",
      icon: "lucide:smartphone",
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-28 bg-content2/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-foreground/70 max-w-2xl mx-auto text-pretty">
              I specialize in creating user-centered designs that are both beautiful and functional.
              My expertise spans across various design disciplines and tools.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Design Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardBody className="p-6">
                  <h4 className="text-xl font-medium mb-6">Design Expertise</h4>
                  <div className="space-y-6">
                    {designSkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <Icon icon={skill.icon} className="text-primary" />
                            <span>{skill.name}</span>
                          </div>
                          <span className="text-sm font-medium">{skill.value}%</span>
                        </div>
                        <Progress
                          aria-label={`${skill.name} skill level`}
                          value={skill.value}
                          className="h-1.5"
                          color="primary"
                        />
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <h4 className="text-xl font-medium mb-6">Tools & Software</h4>
                  <div className="space-y-6">
                    {toolSkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <Icon icon={skill.icon} className="text-primary" />
                            <span>{skill.name}</span>
                          </div>
                          <span className="text-sm font-medium">{skill.value}%</span>
                        </div>
                        <Progress
                          aria-label={`${skill.name} skill level`}
                          value={skill.value}
                          className="h-1.5"
                          color="primary"
                        />
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-center">Services I Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 group-hover:shadow-md">
                    <CardBody className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon icon={service.icon} className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                      <p className="text-foreground/70 text-sm text-pretty">{service.description}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};