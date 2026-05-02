"use client";

import Image from "next/image";

import HeroImg from "../public/hero.png";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload, FaGithub } from "react-icons/fa";

const words = ["Web", "Development"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false); // hide first

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setShow(true); // show next
      }, 400); // small gap before next word appears
    }, 1600); // total cycle time

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="min-h-[716px] flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-container/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary-container/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative p-1 rounded-full border-2 border-primary-container/30 overflow-hidden w-[160px] h-[160px]">
            <Image
              alt="Developer Portrait"
              src={HeroImg}
              fill
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* BADGE */}

        <motion.span className="font-label-mono text-sm text-primary-container uppercase tracking-widest mb-6 block">
          {/* fixed part */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Available for Next-Level{" "}
          </motion.span>

          {/* Web */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -10],
            }}
            transition={{
              duration: 3,
              times: [0, 0.2, 0.6, 1],
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
            className="inline-block ml-2 text-[20px] font-bold"
          >
            Web
          </motion.span>

          {/* Development */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0, 1, 1, 0],
              y: [20, 20, 0, 0, -10],
            }}
            transition={{
              duration: 3,
              times: [0, 0.3, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
            className="inline-block ml-2 text-[20px] font-bold"
          >
            Development
          </motion.span>
        </motion.span>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-headline-xl text-5xl md:text-7xl text-gradient mb-8 leading-tight"
        >
          Hello, I am
          <br />
          MD SHAFIUL AZAM
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
        >
          Senior Software Engineer specializing in low-latency architectures,
          distributed systems, and premium interface engineering. Based in the
          digital frontier.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary px-8 py-4 font-label-mono text-sm uppercase font-bold tracking-widest transition-all hover:brightness-110"
          >
            <a
              href="https://drive.google.com/file/d/1VHnBBRzveLe418GrAgghHgY7gBbOy7WH/view?usp=sharing"
              target="_blank"
            >
              <span className="flex gap-3 items-center">
                <FaDownload />
                Download CV
              </span>
            </a>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/10 glass-card px-8 py-4 font-label-mono text-sm uppercase tracking-widest hover:border-primary-container transition-all"
          >
            <a href="https://github.com/ShafiulTuhin" target="_blank">
              <span className="flex gap-3 items-center">
                <FaGithub />
                GitHub Protocol
              </span>
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
