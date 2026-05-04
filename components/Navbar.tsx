"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["projects", "tech", "skills", "contact"];

    const handleScroll = () => {
      let current = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120) {
          current = `#${id}`;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getClass = (hash: string) =>
    `transition-all duration-300 font-headline-md text-sm uppercase tracking-tighter pb-1 ${
      active === hash
        ? "text-cyan-400 border-b-2 border-cyan-400"
        : "text-slate-400 hover:text-cyan-400"
    }`;

  const handleClick = (hash: string) => {
    setActive(hash);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="text-xl font-black tracking-widest text-white font-headline-md">
          Shaf<span className="text-cyan-400 font-bold">iul Tu</span>hin
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            onClick={() => handleClick("#projects")}
            className={getClass("#projects")}
          >
            Projects
          </a>

          <a
            href="#tech"
            onClick={() => handleClick("#tech")}
            className={getClass("#tech")}
          >
            Tech
          </a>

          <a
            href="#skills"
            onClick={() => handleClick("#skills")}
            className={getClass("#skills")}
          >
            Skills
          </a>

          <a
            href="#contact"
            onClick={() => handleClick("#contact")}
            className={getClass("#contact")}
          >
            Contact
          </a>
        </div>

        {/* WhatsApp (desktop only) */}
        <a
          href="https://wa.me/8801711270867"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <button className="bg-slate-950 border border-cyan-400 text-cyan-400 px-6 py-2 font-label-mono text-sm uppercase hover:bg-cyan-400 hover:text-slate-950 transition-all flex gap-2 items-center">
            Get in Touch <FaWhatsapp />
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-slate-950/95 border-t border-white/10 px-6 py-4 flex flex-col gap-5"
          >
            <a
              href="#projects"
              onClick={() => handleClick("#projects")}
              className={getClass("#projects")}
            >
              Projects
            </a>

            <a
              href="#tech"
              onClick={() => handleClick("#tech")}
              className={getClass("#tech")}
            >
              Tech
            </a>

            <a
              href="#skills"
              onClick={() => handleClick("#skills")}
              className={getClass("#skills")}
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={() => handleClick("#contact")}
              className={getClass("#contact")}
            >
              Contact
            </a>

            <a
              href="https://wa.me/8801711270867"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-slate-950 border border-cyan-400 text-cyan-400 px-6 py-2 font-label-mono text-sm uppercase hover:bg-cyan-400 hover:text-slate-950 transition-all flex gap-2 items-center w-full justify-center">
                Get in Touch <FaWhatsapp />
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
