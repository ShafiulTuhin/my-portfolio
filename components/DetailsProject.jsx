"use client";
import { FaGithub } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const DetailsProject = ({ project }) => {
  return (
    <div className="min-h-screen bg-background text-white px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        {/* BACK BUTTON */}
        <Link href="/#projects">
          <p className="text-sm text-primary-container mb-10 hover:underline">
            ← Back to Projects
          </p>
        </Link>

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden glass-card">
            {/* <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            /> */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
            <p className="text-primary-container mb-4">{project.type}</p>
            <p className="text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* TECH */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs border border-primary-container/30 rounded-full text-primary-container"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 border border-primary-container/30 text-primary-container font-label-mono text-[16px] uppercase tracking-widest hover:bg-primary-container/10 transition-all"
              >
                <FaGithub />
                GitHub
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 border border-primary-container/30 text-primary-container font-label-mono text-[16px] uppercase tracking-widest hover:bg-primary-container/10 transition-all"
              >
                <CgLivePhoto />
                Live
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {project.overview.map((item, i) => (
              <div
                key={i}
                className="p-4 border border-white/10 rounded-lg bg-white/5"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailsProject;
