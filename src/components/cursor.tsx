import React from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerDetection = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const computedStyle = hoveredElement ? window.getComputedStyle(hoveredElement).cursor : "";
      setIsPointer(computedStyle === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handlePointerDetection);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handlePointerDetection);
    };
  }, [mousePosition.x, mousePosition.y]);

  // Only show custom cursor on desktop
  const isMobile = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-50 hidden md:flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 800,
          damping: 30,
        }}
      >
        {isPointer && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        )}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          mass: 0.05,
          stiffness: 1000,
          damping: 20,
        }}
      />
    </>
  );
};