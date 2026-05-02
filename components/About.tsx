"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutImg from "../public/about.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Title
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Paragraphs
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Cards
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: ".about-card",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-section-padding px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <div className="relative group about-image">
          <div className="absolute -inset-4 bg-primary-container/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative glass-card rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              alt="Senior Web Developer Portrait"
              fill
              className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              src={AboutImg}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-8">
          {/* TITLE */}
          <div className="inline-block border-l-2 border-primary-container pl-4 about-title">
            <h2 className="font-headline-lg text-4xl text-white">About Me</h2>
          </div>

          {/* TEXT */}
          <div className="space-y-6">
            <p className="about-text font-body-lg text-lg text-on-surface-variant leading-relaxed">
              I’m Shafiul Azam Tuhin, a passionate web developer from Bangladesh
              who enjoys building modern, responsive, and user-focused web
              applications. I love transforming ideas into interactive digital
              experiences using technologies like Next.js, TypeScript, and
              modern frontend tools.
            </p>

            <p className="about-text font-body-lg text-lg text-on-surface-variant leading-relaxed">
              Working on new and challenging projects excites me because it
              helps me grow both creatively and technically. I’m always eager to
              learn emerging technologies, improve my problem-solving skills,
              and create applications that leave a lasting impression. My goal
              is to build meaningful products that combine clean design, smooth
              performance, and real-world impact.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="about-card">
              <h4 className="font-label-mono text-sm text-primary-container mb-2 uppercase">
                Core Strengths
              </h4>
              <ul className="font-body-md text-sm text-slate-400 space-y-1">
                <li>• Responsive UI Design</li>
                <li>• Interactive Animations</li>
                <li>• Clean & Scalable Code</li>
              </ul>
            </div>

            <div className="about-card">
              <h4 className="font-label-mono text-sm text-primary-container mb-2 uppercase">
                Development Focus
              </h4>
              <ul className="font-body-md text-sm text-slate-400 space-y-1">
                <li>• Full Stack Web Apps</li>
                <li>• Modern Frontend Development</li>
                <li>• User-Centered Experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
