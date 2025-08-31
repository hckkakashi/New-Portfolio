import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import myImage from "../assets/orewa.jpg"; 


export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-2"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
            >
              Pratik Tamanag
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground/80 mb-6"
            >
              UI/UX Designer & Creative Thinker
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-foreground/70 max-w-md mx-auto md:mx-0 mb-8 text-pretty"
            >
              I craft intuitive digital experiences that blend aesthetics with functionality,
              solving complex problems with elegant design solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button
                color="primary"
                variant="solid"
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" className="ml-1" />}
                onPress={() => {
                  document.querySelector("#projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="font-medium"
              >
                View My Work
              </Button>
              
              <Button
                variant="bordered"
                color="primary"
                size="lg"
                onPress={() => {
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="font-medium"
              >
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex gap-6 justify-center md:justify-start"
            >

              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Icon icon="logos:linkedin-icon" className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Icon icon="logos:instagram-icon" className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Icon icon="logos:twitter" className="w-6 h-6" />
                <span className="sr-only">X (Twitter)</span>
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 flex flex-col items-center md:items-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"></div>
              <img
                src={myImage}
                alt="Pratik Tamanag"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6"
            >
              <Button
                color="primary"
                variant="ghost"
                size="md"
                startContent={<Icon icon="lucide:download" className="w-4 h-4" />}
                as="a"
                href="/pratik-tamanag-cv.pdf"
                download
                className="font-medium"
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <Button
            isIconOnly
            variant="light"
            aria-label="Scroll down"
            onPress={() => {
              document.querySelector("#about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <Icon icon="lucide:chevron-down" className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};