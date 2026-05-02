"use client";

import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skill from "@/components/Skill";

export default function Home() {
  useEffect(() => {
    const hero = document.getElementById("hero");

    if (hero) {
      hero.scrollIntoView({ behavior: "auto" });
      window.history.replaceState(null, "", "#hero");
    }
  }, []);

  return (
    <main className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      <div className="pt-24">
        <section id="hero">
          <Hero />
        </section>

        <About />

        <section id="projects">
          <Projects />
        </section>

        <section id="tech">
          <TechStack />
        </section>

        <section id="skills">
          <Skill />
        </section>

        <Experience />

        <section id="contact">
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}
