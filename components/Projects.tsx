// import Image from "next/image";

// const projects = [
//   {
//     title: "Quantum Ledger",
//     type: "FinTech",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAZOmymVFZCmDTSh86rN7Azztr35KBlzSa51re6CzrfCxoBxMvFO5NZYmgPDHJwP91EOwHmJICBiA4NqwRd5d5a7C9QGPqrfK0YOqlLojfcx662dcnK0UZLgxXsa1mCVvtwwYx69VVmjbvUoGM2cbw5ZkG1Xg4WfdDcZVHUgjNgPfbxoSUzCr_fABOWgFhu2AK6wXLRFqwZE0YLWhlzy5bFuhLXhWRWJ-H3efkQXe0IWFwhOH8KISmMSPPqFU8RZOrKNA0pzW4KkDc",
//   },
//   {
//     title: "Nexus Nodes",
//     type: "Web3",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuB_CjFYrEe5ID7bjc6A3GZKbB4MqoRFLq9rLqYJPIIQFo1_tlsG-pef7MvoyfaME8BANKcBXwJVSketeY8kSWR0n1K_wLJvUq4gD-5SGayGDtMsA02v9BZPCLb29u2xZV2ovikhYbS80ADCBJ1HEY7jErcajtmxCfxXPeLzae2F8EhlSHkucptkro6WQMCGt7yLibdUt8I4XUvsy2c3wZ_VlXivzhWTm1rAhDTcPm-agsXGGphUuYKf8pSLLavc8fZs6eqk7FOMSKE",
//   },
//   {
//     title: "Ghost Firewall",
//     type: "Security",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuASWcjY5BEKDF5cmiFzwZU2bePryv7-oiTdjrWgTyrdp9VxxbUf_yaQ88VMTXHdV2rfABfwpX42fxOKGTC-4W3oPtN9rtbRAditgY6zQ7UFuYGGZpKi3Mc4FnO7P1Q8lfSOYZtS2ZxvBfDgDLKneltjtWw_RR_v_OyYBttUinqCKT2KZ7kGoo_WW87G-p-25taDOB9_zhF9YAzFqHBlNSvWjxp89FVXm1BgYmcckwdBUsUGk__2Mn1s4ZX8MbfF4eEczLyFnGVSjzY",
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="py-section-padding px-6 md:px-12 bg-surface-container-lowest/50">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-end mb-16">
//           <div>
//             <h2 className="font-headline-lg text-4xl text-white mb-4">
//               My Projects
//             </h2>
//             <p className="font-body-md text-sm text-on-surface-variant">
//               Proprietary solutions and open-source contributions.
//             </p>
//           </div>
//           <div className="hidden md:block">
//             <span className="font-label-mono text-sm text-slate-500 uppercase">
//               Archive / 2024
//             </span>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="glass-card rounded-xl overflow-hidden flex flex-col group"
//             >
//               <div className="h-64 relative">
//                 <Image
//                   alt={project.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                   src={project.image}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
//                 <div className="absolute top-4 right-4">
//                   <span className="font-label-mono text-[10px] text-primary-container uppercase bg-slate-900/80 px-2 py-1 rounded backdrop-blur-md border border-white/5">
//                     {project.type}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-8 space-y-6">
//                 <h3 className="font-headline-md text-2xl text-white">
//                   {project.title}
//                 </h3>
//                 <div className="flex gap-4">
//                   <a
//                     className="flex-1 text-center py-2 border border-primary-container/30 text-primary-container font-label-mono text-[10px] uppercase tracking-widest hover:bg-primary-container/10 transition-all"
//                     href="#"
//                   >
//                     GitHub
//                   </a>
//                   <a
//                     className="flex-1 text-center py-2 bg-primary-container text-on-primary font-label-mono text-[10px] uppercase tracking-widest hover:brightness-110 transition-all"
//                     href="#"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Quantum Ledger",
    type: "FinTech",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZOmymVFZCmDTSh86rN7Azztr35KBlzSa51re6CzrfCxoBxMvFO5NZYmgPDHJwP91EOwHmJICBiA4NqwRd5d5a7C9QGPqrfK0YOqlLojfcx662dcnK0UZLgxXsa1mCVvtwwYx69VVmjbvUoGM2cbw5ZkG1Xg4WfdDcZVHUgjNgPfbxoSUzCr_fABOWgFhu2AK6wXLRFqwZE0YLWhlzy5bFuhLXhWRWJ-H3efkQXe0IWFwhOH8KISmMSPPqFU8RZOrKNA0pzW4KkDc",
  },
  {
    title: "Nexus Nodes",
    type: "Web3",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_CjFYrEe5ID7bjc6A3GZKbB4MqoRFLq9rLqYJPIIQFo1_tlsG-pef7MvoyfaME8BANKcBXwJVSketeY8kSWR0n1K_wLJvUq4gD-5SGayGDtMsA02v9BZPCLb29u2xZV2ovikhYbS80ADCBJ1HEY7jErcajtmxCfxXPeLzae2F8EhlSHkucptkro6WQMCGt7yLibdUt8I4XUvsy2c3wZ_VlXivzhWTm1rAhDTcPm-agsXGGphUuYKf8pSLLavc8fZs6eqk7FOMSKE",
  },
  {
    title: "Ghost Firewall",
    type: "Security",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASWcjY5BEKDF5cmiFzwZU2bePryv7-oiTdjrWgTyrdp9VxxbUf_yaQ88VMTXHdV2rfABfwpX42fxOKGTC-4W3oPtN9rtbRAditgY6zQ7UFuYGGZpKi3Mc4FnO7P1Q8lfSOYZtS2ZxvBfDgDLKneltjtWw_RR_v_OyYBttUinqCKT2KZ7kGoo_WW87G-p-25taDOB9_zhF9YAzFqHBlNSvWjxp89FVXm1BgYmcckwdBUsUGk__2Mn1s4ZX8MbfF4eEczLyFnGVSjzY",
  },
];

export default function Projects() {
  return (
    <section className="py-section-padding px-6 md:px-12 bg-surface-container-lowest/50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="font-headline-lg text-4xl text-white mb-4">
              My Projects
            </h2>

            <p className="font-body-md text-sm text-on-surface-variant">
              Proprietary solutions and open-source contributions.
            </p>
          </div>

          <div className="hidden md:block">
            <span className="font-label-mono text-sm text-slate-500 uppercase">
              Archive / 2024
            </span>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-xl overflow-hidden flex flex-col group"
            >
              {/* IMAGE */}
              <div className="h-64 relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <Image
                    alt={project.title}
                    fill
                    className="object-cover"
                    src={project.image}
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />

                <div className="absolute top-4 right-4">
                  <span className="font-label-mono text-[10px] text-primary-container uppercase bg-slate-900/80 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-6">
                <h3 className="font-headline-md text-2xl text-white">
                  {project.title}
                </h3>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-2 border border-primary-container/30 text-primary-container font-label-mono text-[10px] uppercase tracking-widest hover:bg-primary-container/10 transition-all"
                    href="#"
                  >
                    GitHub
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-2 bg-primary-container text-on-primary font-label-mono text-[10px] uppercase tracking-widest hover:brightness-110 transition-all"
                    href="#"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
