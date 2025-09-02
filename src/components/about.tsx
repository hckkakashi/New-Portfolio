import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import myimage from "../myimage.jpg";


export const About = () => {
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
        staggerChildren: 0.2,
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-visible">
              <CardBody className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur"></div>
                      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                        <img
                          src={myimage}
                          alt="Pratik Tamanag"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-4">
                      UI/UX Designer & Creative Problem Solver
                    </h3>
                    <p className="text-foreground/80 mb-6 text-pretty">
                      I'm Pratik Tamanag, a passionate UI/UX designer with a keen eye for detail and a love for creating beautiful, functional digital experiences. With a background in visual design and user research, I specialize in crafting interfaces that are not only aesthetically pleasing but also intuitive and user-friendly.
                    </p>
                    <p className="text-foreground/80 mb-6 text-pretty">
                      My design philosophy centers around understanding user needs and business goals to create solutions that bridge the gap between them. I believe that great design should be invisible, allowing users to accomplish their tasks effortlessly while enjoying the journey.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:mail" className="text-primary" />
                        <span>tamangpratik0102@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:phone" className="text-primary" />
                        <span>9863896222</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:map-pin" className="text-primary" />
                        <span>Kathmandu, Nepal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon icon="lucide:briefcase" className="text-primary" />
                        <span>Available for freelance</span>
                      </div>
                    </div>

                    <Divider className="my-6" />

                    <div className="flex flex-wrap gap-4">
                      <div className="flex flex-col">
                        <span className="text-3xl font-bold text-primary">1+</span>
                        <span className="text-sm text-foreground/70">Years Experience</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-3xl font-bold text-primary">15+</span>
                        <span className="text-sm text-foreground/70">Projects Completed</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-3xl font-bold text-primary">10+</span>
                        <span className="text-sm text-foreground/70">Happy Clients</span>
                      </div>
                      {/* <div className="flex flex-col">
                        <span className="text-3xl font-bold text-primary">12+</span>
                        <span className="text-sm text-foreground/70">Design Awards</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};