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
              I am a Senior Web Developer with over 8 years of experience in
              engineering high-performance digital environments. My core focus
              lies in bridging the gap between sophisticated backend logic and
              premium, user-centric interfaces.
            </p>

            <p className="about-text font-body-lg text-lg text-on-surface-variant leading-relaxed">
              Specializing in distributed systems and low-latency architectures,
              I architect solutions that are built to scale. From fintech
              protocols to decentralized infrastructure, I approach every
              project with technical precision and a commitment to engineering
              excellence.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="about-card">
              <h4 className="font-label-mono text-sm text-primary-container mb-2 uppercase">
                Core Principles
              </h4>
              <ul className="font-body-md text-sm text-slate-400 space-y-1">
                <li>• Scalable Architecture</li>
                <li>• Sub-100ms Latency</li>
                <li>• Security-First Design</li>
              </ul>
            </div>

            <div className="about-card">
              <h4 className="font-label-mono text-sm text-primary-container mb-2 uppercase">
                Industry Focus
              </h4>
              <ul className="font-body-md text-sm text-slate-400 space-y-1">
                <li>• FinTech Solutions</li>
                <li>• Web3 & Cloud Infra</li>
                <li>• Enterprise SaaS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
