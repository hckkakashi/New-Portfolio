import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-xl md:text-2xl font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pratik Tamang<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Button
                as="a"
                href={item.href}
                variant="light"
                className="font-medium text-sm"
                onPress={() => {
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.name}
              </Button>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          isIconOnly
          variant="light"
          className="md:hidden"
          onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <span
            className={`block w-5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? "h-0" : "h-0.5"
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45" : "my-1"
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? "-translate-y-0.5 -rotate-45" : ""
            }`}
          ></span>
        </Button>

        {/* Mobile Menu */}
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          className="fixed top-0 right-0 bottom-0 w-64 bg-content1 shadow-xl z-50 p-6 flex flex-col"
        >
          <div className="flex justify-end mb-8">
            <Button
              isIconOnly
              variant="light"
              onPress={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="sr-only">Close</span>
              <span className="block w-5 h-0.5 bg-foreground rotate-45"></span>
              <span className="block w-5 h-0.5 bg-foreground -translate-y-0.5 -rotate-45"></span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                as="a"
                href={item.href}
                variant="light"
                className="justify-start font-medium"
                onPress={() => {
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};