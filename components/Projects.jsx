import { useState } from "react";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

const getProjects = async () => {
  const res = await fetch("https://shafiul-tuhin.vercel.app/projects.json");
  const data = await res.json();
  return data;
};
const projects = await getProjects();

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-section-padding px-6 md:px-12 bg-surface-container-lowest/50">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-headline-lg text-4xl text-white">My Projects</h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* PAGINATION (PREV / NEXT) */}
        <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
          {/* Prev Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-xs font-label-mono uppercase border transition-all ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed border-primary-container/20"
                : "border-primary-container/30 text-primary-container hover:bg-primary-container/10"
            }`}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 text-xs font-label-mono uppercase border transition-all ${
                currentPage === i + 1
                  ? "bg-primary-container text-black"
                  : "border-primary-container/30 text-primary-container hover:bg-primary-container/10"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-xs font-label-mono uppercase border transition-all ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed border-primary-container/20"
                : "border-primary-container/30 text-primary-container hover:bg-primary-container/10"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
