import React from 'react';
import { Icon } from '@iconify/react';
import { Switch, Tooltip } from '@heroui/react';
import { useTheme } from "@heroui/use-theme";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Tooltip 
        content={`Switch to ${isDark ? "light" : "dark"} mode`}
        placement="left"
      >
        <div className="flex items-center gap-2 bg-content1 p-2 rounded-full shadow-sm">
          <Icon icon={isDark ? "lucide:sun" : "lucide:moon"} className="text-primary w-5 h-5" />
          <Switch 
            isSelected={isDark}
            onValueChange={handleToggle}
            size="sm"
            color="primary"
            className="mx-1"
          />
        </div>
      </Tooltip>
    </motion.div>
  );
};

import { motion } from "framer-motion";