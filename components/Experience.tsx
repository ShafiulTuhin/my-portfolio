// export default function Experience() {
//   return (
//     <section className="py-section-padding px-6 md:px-12 bg-surface-container-low/30">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
//           <div className="space-y-12">
//             <div className="inline-block border-l-2 border-primary-container pl-4">
//               <h2 className="font-headline-lg text-4xl text-white">Education</h2>
//             </div>
//             <div className="space-y-10">
//               <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-800">
//                 <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_#00f0ff]"></div>
//                 <span className="font-label-mono text-sm text-primary-container uppercase">2012 — 2016</span>
//                 <h3 className="font-headline-md text-2xl text-white mt-2">B.S. in Computer Science</h3>
//                 <p className="font-body-md text-sm text-slate-400">Massachusetts Institute of Technology (MIT)</p>
//                 <p className="font-body-md text-sm text-on-surface-variant mt-2">Focus on Distributed Systems and Algorithmic Efficiency.</p>
//               </div>
//               <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-800">
//                 <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_#00f0ff]"></div>
//                 <span className="font-label-mono text-sm text-primary-container uppercase">2017</span>
//                 <h3 className="font-headline-md text-2xl text-white mt-2">Advanced Cloud Architecture</h3>
//                 <p className="font-body-md text-sm text-slate-400">AWS Certified Solutions Architect Certification</p>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-12">
//             <div className="inline-block border-l-2 border-primary-container pl-4">
//               <h2 className="font-headline-lg text-4xl text-white">Experience</h2>
//             </div>
//             <div className="space-y-10">
//               {[
//                 {
//                   period: "2021 — PRESENT",
//                   title: "Senior Web Developer",
//                   company: "Quantum Systems Corp",
//                   desc: "Lead architect for high-performance financial dashboards and low-latency trading interfaces.",
//                 },
//                 {
//                   period: "2018 — 2021",
//                   title: "Full Stack Engineer",
//                   company: "Nexus Digital Agency",
//                   desc: "Engineered scalable SaaS solutions and complex data visualization tools for enterprise clients.",
//                 },
//                 {
//                   period: "2016 — 2018",
//                   title: "Junior Web Developer",
//                   company: "StartUp Labs",
//                   desc: "Developed core product features and maintained legacy codebase for high-growth consumer apps.",
//                 },
//               ].map((exp, i) => (
//                 <div key={i} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-800">
//                   <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_#00f0ff]"></div>
//                   <span className="font-label-mono text-sm text-primary-container uppercase">{exp.period}</span>
//                   <h3 className="font-headline-md text-2xl text-white mt-2">{exp.title}</h3>
//                   <p className="font-body-md text-sm text-slate-400">{exp.company}</p>
//                   <p className="font-body-md text-sm text-on-surface-variant mt-2">{exp.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animations (both sides)
      gsap.from(".exp-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Left column items (Education)
      gsap.from(".edu-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Right column items (Experience)
      gsap.from(".exp-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-section-padding px-6 md:px-12 bg-surface-container-low/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* EDUCATION */}
          <div className="space-y-12">
            <div className="inline-block border-l-2 border-primary-container pl-4">
              <h2 className="exp-title font-headline-lg text-4xl text-white">
                Education
              </h2>
            </div>

            <div className="space-y-10">
              {/* Degree */}
              <div className="edu-item relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-800">
                <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_#00f0ff]" />

                <span className="font-label-mono text-sm text-primary-container uppercase">
                  2026 — Present
                </span>

                <h3 className="font-headline-md text-2xl text-white mt-2">
                  M.Sc in Intelligence Systems
                </h3>

                <p className="font-body-md text-sm text-slate-400">
                  Novia University of Applied Sciences, Finland
                </p>

                <p className="font-body-md text-sm text-on-surface-variant mt-2">
                  Focus on Learning AI and Intelligent Systems
                </p>
              </div>
              <div className="edu-item relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-800">
                <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_#00f0ff]" />

                <span className="font-label-mono text-sm text-primary-container uppercase">
                  2004 — 2009
                </span>

                <h3 className="font-headline-md text-2xl text-white mt-2">
                  B.Sc in Computer Science & Engineering
                </h3>

                <p className="font-body-md text-sm text-slate-400">
                  International Islamic University Chittagong
                </p>

                <p className="font-body-md text-sm text-on-surface-variant mt-2">
                  Built strong foundation in programming, algorithms, and
                  software engineering principles.
                </p>
              </div>

              {/* Current / Advanced Learning */}
              <div className="edu-item relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-800">
                <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_#00f0ff]" />

                <span className="font-label-mono text-sm text-primary-container uppercase">
                  2025 — Present
                </span>

                <h3 className="font-headline-md text-2xl text-white mt-2">
                  Continuous Learning in Full-Stack Development
                </h3>

                <p className="font-body-md text-sm text-slate-400">
                  Modern Web Technologies (Next.js, MERN Stack, AI Tools)
                </p>

                <p className="font-body-md text-sm text-on-surface-variant mt-2">
                  Focused on building scalable web applications and mastering
                  modern frontend & backend ecosystems.
                </p>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-12">
            <div className="inline-block border-l-2 border-primary-container pl-4">
              <h2 className="exp-title font-headline-lg text-4xl text-white">
                Experience
              </h2>
            </div>

            <div className="space-y-10">
              {[
                {
                  period: "2025 — PRESENT",
                  title: "Web Developer",
                  company: "Self Projects",
                  desc: "Building modern full-stack web applications through self-driven projects using Next.js, React, Node.js, and MongoDB. Focused on creating responsive user interfaces, smooth animations, and scalable architectures while continuously improving development skills through hands-on practice.",
                },
                // {
                //   period: "2018 — 2021",
                //   title: "Full Stack Engineer",
                //   company: "Nexus Digital Agency",
                //   desc: "Engineered scalable SaaS solutions and complex data visualization tools for enterprise clients.",
                // },
                // {
                //   period: "2016 — 2018",
                //   title: "Junior Web Developer",
                //   company: "StartUp Labs",
                //   desc: "Developed core product features and maintained legacy codebase for high-growth consumer apps.",
                // },
              ].map((exp, i) => (
                <div
                  key={i}
                  className="exp-item relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-slate-800"
                >
                  <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_10px_#00f0ff]" />

                  <span className="font-label-mono text-sm text-primary-container uppercase">
                    {exp.period}
                  </span>

                  <h3 className="font-headline-md text-2xl text-white mt-2">
                    {exp.title}
                  </h3>

                  <p className="font-body-md text-sm text-slate-400">
                    {exp.company}
                  </p>

                  <p className="font-body-md text-sm text-on-surface-variant mt-2">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
