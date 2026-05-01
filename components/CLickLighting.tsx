"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ClickLightning() {
  const [click, setClick] = useState<null | { x: number; y: number }>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      setClick({ x: e.clientX, y: e.clientY });

      setTimeout(() => {
        setClick(null);
      }, 500);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <AnimatePresence>
      {click && (
        <motion.div
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale: 5, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed pointer-events-none z-[99999] rounded-full"
          style={{
            left: click.x - 25,
            top: click.y - 25,
            width: 50,
            height: 50,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.9) 0%, transparent 70%)",
          }}
        />
      )}
    </AnimatePresence>
  );
}
