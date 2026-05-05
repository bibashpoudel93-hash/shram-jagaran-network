"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export default function GlobalUI() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.getAttribute('role') === 'button'
      );
    };

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Custom Cursor */}
      <motion.div 
        className="cursor-dot hidden md:block"
        animate={{ 
          x: mousePosition.x - 4, 
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div 
        className="cursor-outline hidden md:block"
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Back to Top */}
      <AnimatePresence>
        {hasScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[60] w-14 h-14 bg-brand-red text-white rounded-2xl shadow-2xl shadow-brand-red/40 flex items-center justify-center hover:bg-brand-blue transition-all"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
