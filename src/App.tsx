import React from "react";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./components/theme-switcher";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Cursor } from "./components/cursor";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cursor />
      <div className="fixed top-6 right-6 z-50">
        <ThemeSwitcher />
      </div>
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}