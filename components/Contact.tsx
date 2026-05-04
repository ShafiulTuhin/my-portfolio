"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-section-padding px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* TITLE */}
          <div className="inline-block border-l-2 border-primary-container pl-4">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-white">
              Connect
            </h2>
          </div>

          {/* SOCIAL + PHONE WRAPPER */}
          <div className="flex flex-col gap-6">
            {/* SOCIAL GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                {
                  icon: "public",
                  label: "Facebook",
                  link: "https://www.facebook.com/shafiul.tuhin",
                },
                {
                  icon: "hub",
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/shafiul-tuhin/",
                },
                {
                  icon: "mail",
                  label: "Gmail",
                  link: "mailto:tuhin6488@gmail.com",
                },
                {
                  icon: "terminal",
                  label: "GitHub",
                  link: "https://github.com/ShafiulTuhin",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-4 rounded-xl flex items-center gap-4"
                >
                  <span className="material-symbols-outlined text-slate-400">
                    {social.icon}
                  </span>

                  <span className="font-label-mono text-xs uppercase text-slate-400 hidden lg:block">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* PHONE CARD */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-4 md:p-5 rounded-xl flex items-center gap-3 md:gap-4 w-full"
            >
              <span className="material-symbols-outlined text-slate-400 text-xl md:text-2xl">
                call
              </span>

              <div className="flex flex-col min-w-0">
                <span className="font-label-mono   uppercase text-slate-400 text[22px]">
                  Get Immediately
                </span>

                <a
                  href="tel:+8801711270867"
                  className="text-white hover:text-primary-container transition-colors text-sm md:text-base"
                >
                  +8801711270867
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* TITLE */}
          <div className="inline-block border-l-2 border-primary-container pl-4">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-white">
              Initialize Signal
            </h2>
          </div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 md:p-12 rounded-2xl space-y-6"
          >
            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-mono text-[10px] uppercase text-primary-container tracking-widest block ml-1">
                  Identifier
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border-white/10 focus:border-primary-container transition-all"
                  placeholder="Full Name"
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-mono text-[10px] uppercase text-primary-container tracking-widest block ml-1">
                  Return Channel
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border-white/10 focus:border-primary-container transition-all"
                  placeholder="Email Address"
                  type="email"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="font-label-mono text-[10px] uppercase text-primary-container tracking-widest block ml-1">
                Payload Data
              </label>

              <textarea
                className="w-full px-4 py-3 rounded-lg border-white/10 focus:border-primary-container transition-all min-h-[150px]"
                placeholder="Describe the mission scope..."
              />
            </div>

            {/* BUTTON */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-primary-container text-on-primary px-10 md:px-12 py-4 font-label-mono text-sm uppercase font-bold tracking-widest transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
