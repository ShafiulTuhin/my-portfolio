// const technologies = [
//   { icon: "terminal", label: "TypeScript" },
//   { icon: "database", label: "PostgreSQL" },
//   { icon: "cloud", label: "AWS / K8s" },
//   { icon: "javascript", label: "React.js" },
//   { icon: "bolt", label: "Rust Core" },
//   { icon: "view_quilt", label: "Tailwind" },
// ];

// export default function TechStack() {
//   return (
//     <section className="py-section-padding px-6 md:px-12 max-w-7xl mx-auto">
//       <h2 className="font-headline-lg text-4xl text-white mb-12">
//         Core Technology
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {technologies.map((tech, index) => (
//           <div
//             key={index}
//             className="glass-card p-6 flex flex-col items-center justify-center text-center rounded-lg hover:scale-105 transition-all"
//           >
//             <span className="material-symbols-outlined text-primary-container text-3xl mb-3">
//               {tech.icon}
//             </span>
//             <span className="font-label-mono text-xs uppercase tracking-tighter text-slate-300">
//               {tech.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

const technologies = [
  { icon: "terminal", label: "TypeScript" },
  { icon: "database", label: "PostgreSQL" },
  { icon: "cloud", label: "AWS / K8s" },
  { icon: "javascript", label: "React.js" },
  { icon: "bolt", label: "Rust Core" },
  { icon: "view_quilt", label: "Tailwind" },
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
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
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
