"use client";

import { motion } from "framer-motion";

const frontendSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "GSAP Basics",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "AWS Basics",
  "REST APIs",
];

export default function Skill() {
  return (
    <section className="py-section-padding px-6 md:px-12 max-w-7xl mx-auto">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-headline-lg text-4xl text-white mb-12"
      >
        Skills & Expertise
      </motion.h2>

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* FRONTEND */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 rounded-2xl p-6 glass-card"
        >
          <h3 className="text-xl text-white font-semibold mb-6 border-b border-white/10 pb-3">
            Frontend Development
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {frontendSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-white/10 rounded-lg px-4 py-3 text-center text-sm text-slate-300 hover:border-primary-container transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 rounded-2xl p-6 glass-card"
        >
          <h3 className="text-xl text-white font-semibold mb-6 border-b border-white/10 pb-3">
            Backend Development
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {backendSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-white/10 rounded-lg px-4 py-3 text-center text-sm text-slate-300 hover:border-primary-container transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
