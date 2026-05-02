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

        {/* CTA Section */}
        {/* <section className="py-section-padding px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary-container/20 blur-[80px] rounded-full"></div>
            <h2 className="font-headline-lg text-4xl text-white mb-6 relative z-10">
              Start the Protocol?
            </h2>
            <p className="font-body-lg text-lg text-on-surface-variant mb-10 relative z-10">
              Currently accepting select projects for Q3-Q4 2024. Reach out for
              engineering consultation or full-stack architecture.
            </p>
            <div className="relative z-10">
              <button className="bg-primary-container text-on-primary px-10 py-5 font-label-mono text-sm uppercase font-bold tracking-widest transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                Initialize Contact
              </button>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </main>
  );
}
