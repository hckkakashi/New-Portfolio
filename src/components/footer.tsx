import React from "react";
import { motion } from "framer-motion";
import { Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-content1">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="text-2xl font-semibold">
              Pratik<span className="text-primary">.</span>
            </a>
            <p className="text-foreground/70 mt-2 max-w-md">
              UI/UX Designer crafting beautiful digital experiences that solve real problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
          >
            
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Icon icon="logos:linkedin-icon" className="w-5 h-5" />
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
              <Icon icon="logos:instagram-icon" className="w-5 h-5" />
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
              <Icon icon="logos:twitter" className="w-5 h-5" />
              <span className="sr-only">X (Twitter)</span>
            </motion.a>
          </motion.div>
        </div>

        <Divider className="my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground/60 text-sm">
            © {currentYear} Pratik Tamang. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};