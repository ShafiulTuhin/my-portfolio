// import Link from "next/link";

// import { FaWhatsapp } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-6 md:px-12 py-4">
//       <div className="text-xl font-black tracking-widest text-white font-headline-md">
//         Shaf<span className="text-cyan-400 font-bold">iul Tu</span>
//         hin
//       </div>
//       <div className="hidden md:flex items-center gap-8">
//         <a
//           href="#projects"
//           className="text-cyan-400 border-b-2 border-cyan-400 pb-1 font-headline-md text-sm uppercase tracking-tighter"
//         >
//           Projects
//         </a>

//         <Link
//           href={"#tech"}
//           className={` text-slate-400 hover:text-cyan-400 transition-all duration-300 font-headline-md text-sm uppercase tracking-tighter`}
//         >
//           Tech
//         </Link>

//         <a
//           href="#skills"
//           className="text-slate-400 hover:text-cyan-400 transition-all duration-300 font-headline-md text-sm uppercase tracking-tighter"
//         >
//           Skills
//         </a>

//         <a
//           href="#contact"
//           className="text-slate-400 hover:text-cyan-400 transition-all duration-300 font-headline-md text-sm uppercase tracking-tighter"
//         >
//           Contact
//         </a>
//       </div>
//       <a
//         href="https://wa.me/8801711270867"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <button className="bg-slate-950 border border-primary-container text-primary-container px-6 py-2 font-label-mono text-sm uppercase hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 scale-95 active:opacity-80 flex gap-2 items-center">
//           Get in Touch
//           <FaWhatsapp />
//         </button>
//       </a>
//     </nav>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("#projects");

  useEffect(() => {
    const sections = ["projects", "tech", "skills", "contact"];

    const handleScroll = () => {
      let current = "#projects";

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
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 flex justify-between items-center px-6 md:px-12 py-4">
      {/* Logo */}
      <div className="text-xl font-black tracking-widest text-white font-headline-md">
        Shaf<span className="text-cyan-400 font-bold">iul Tu</span>hin
      </div>

      {/* Links */}
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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8801711270867"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-slate-950 border border-cyan-400 text-cyan-400 px-6 py-2 font-label-mono text-sm uppercase hover:bg-cyan-400 hover:text-slate-950 transition-all flex gap-2 items-center">
          Get in Touch <FaWhatsapp />
        </button>
      </a>
    </nav>
  );
}
