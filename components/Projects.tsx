"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";

// const projects = [
//   {
//     id: 1,
//     title: "Book City",
//     type: "Digital Library Platform",
//     description:
//       "Book-City is a modern full-stack digital library platform where users can explore, search, and borrow books through an interactive and user-friendly experience.",
//     image: "https://i.ibb.co.com/8LxbBgvR/Homepage.png",
//     tech: [
//       "NextJs",
//       "Tailwind Css",
//       "Hero UI",
//       "animate css",
//       "Mongodb",
//       "better-auth",
//     ],
//     github: "https://github.com/ShafiulTuhin/book-city",
//     live: "https://book-city.vercel.app",
//   },
//   {
//     id: 2,
//     title: "Dragoon News",
//     type: "Content Management News Platform",
//     description:
//       "Dragon News is a full-stack news portal where users can browse, publish, and manage news articles with authentication and role-based access.",
//     image: "https://i.ibb.co.com/39TYDkN6/dragon.png",
//     tech: [
//       "NextJs",
//       "Tailwind Css",
//       "Hero UI",
//       "animate css",
//       "Mongodb",
//       "better-auth",
//     ],
//     github: "https://github.com/ShafiulTuhin/Dragon-news-next.js",
//     live: "https://dragon-news-next-js.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "Issue Tracker",
//     type: "Issue Management System",
//     description:
//       "An Issue Tracker App is a collaborative project management tool that helps developers report, track, and resolve bugs or tasks efficiently with organized workflows.",
//     image: "https://i.ibb.co.com/zVYT2Wq6/issue.png",
//     tech: ["Reactjs", "Tailwind Css", "Daisy UI", "Toastify"],
//     github: "https://github.com/ShafiulTuhin/issue-tracker-convert-to-react",
//     live: "https://github-issue-tracker-react.netlify.app/",
//   },
//   {
//     id: 4,
//     title: "Issue Tracker",
//     type: "Issue Management System",
//     description:
//       "An Issue Tracker App is a collaborative project management tool that helps developers report, track, and resolve bugs or tasks efficiently with organized workflows.",
//     image: "https://i.ibb.co.com/zVYT2Wq6/issue.png",
//     tech: ["Reactjs", "Tailwind Css", "Daisy UI", "Toastify"],
//     github: "https://github.com/ShafiulTuhin/issue-tracker-convert-to-react",
//     live: "https://github-issue-tracker-react.netlify.app/",
//   },
// ];

const getProjects = async () => {
  const res = await fetch("https://shafiul-tuhin.vercel.app/projects.json");
  const data = await res.json();
  return data;
};

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const projects = getProjects();

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
                <div className="flex gap-4">
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
                </div>
                {/* <Link href={`projects/${project.id}`}>
                  <button className="w-full py-2 border border-primary-container/30 text-primary-container font-label-mono text-[10px] uppercase tracking-widest hover:bg-primary-container/10 transition-all">
                    Details
                  </button>
                </Link> */}
              </div>
            </motion.div>
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
