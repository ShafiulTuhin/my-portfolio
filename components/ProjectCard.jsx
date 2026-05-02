import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div>
      {" "}
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: project.id * 0.15 }}
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
          <div className="space-y-4">
            <h3 className="font-headline-md text-2xl text-white">
              {project.title}
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[10px] uppercase tracking-wider rounded-full border border-primary-container/20 bg-primary-container/5 text-primary-container font-label-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          {/* <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 border border-primary-container/30 text-primary-container font-label-mono text-[10px] uppercase tracking-widest hover:bg-primary-container/10 transition-all"
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
              className="flex-1 flex items-center justify-center gap-2 py-2 border border-primary-container/30 text-primary-container font-label-mono text-[10px] uppercase tracking-widest hover:bg-primary-container/10 transition-all"
            >
              <CgLivePhoto />
              Live
            </motion.a>
          </div> */}
          <Link href={`projects/${project.id}`}>
            <button className="w-full py-2 border border-primary-container/30 text-primary-container font-label-mono text-[10px] uppercase tracking-widest hover:bg-primary-container/10 transition-all">
              Details
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
