"use client";

import { motion } from "framer-motion";

const technologies = [
  { icon: "code", label: "TypeScript" },
  { icon: "javascript", label: "JavaScript" },
  { icon: "bolt", label: "React.js" },
  { icon: "layers", label: "Next.js" },
  { icon: "dns", label: "Node.js" },
  { icon: "storage", label: "MongoDB" },
  { icon: "electric_bolt", label: "Express.js" },

  { icon: "animation", label: "Framer Motion" },
  { icon: "scroll", label: "Lenis" },
  { icon: "auto_awesome", label: "GSAP" },

  { icon: "smart_toy", label: "ChatGPT" },
  { icon: "psychology", label: "Claude AI" },
  { icon: "genetics", label: "Gemini AI" },
  { icon: "auto_fix_high", label: "Stitch" },
  { icon: "experiment", label: "Antigravity" },

  { icon: "cloud", label: "Vercel" },
  { icon: "cloud_queue", label: "Netlify" },

  { icon: "terminal", label: "VS Code" },
  { icon: "hub", label: "GitHub" },
];

export default function TechStack() {
  return (
    <section className="py-section-padding px-6 md:px-12 max-w-7xl mx-auto">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="font-headline-lg text-4xl text-white mb-12"
      >
        Core Technology
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.04,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card p-6 flex flex-col items-center justify-center text-center rounded-lg"
          >
            <span className="material-symbols-outlined text-primary-container text-3xl mb-3">
              {tech.icon}
            </span>

            <span className="font-label-mono text-xs uppercase tracking-tighter text-slate-300">
              {tech.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
