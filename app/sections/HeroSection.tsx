"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = [
  "AI Engineer",
  "Generative AI Specialist",
  "Prompt Engineer",
  "Automation Engineer",
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const scrollDown = () => {
    const el = document.getElementById("journey");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Video */}
      <video
  ref={videoRef}
  className="absolute inset-0 w-full h-full object-cover"
  src="/videos/introduction.mp4"
  autoPlay
  loop
  controls
  playsInline
  preload="auto"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />

      {/* Content - Bottom Left */}
      <div className="relative z-20 h-full flex items-end pb-24">
        <div className="max-w-xl ml-6 md:ml-12 lg:ml-20 text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-cyan-400 border border-cyan-500/30 text-sm uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              AI Engineer • Hyderabad
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-black leading-none"
          >
            <span className="block text-white text-4xl md:text-6xl lg:text-7xl">
              GOWTHAM
            </span>

            <span className="block text-cyan-400 text-4xl md:text-6xl lg:text-7xl">
              REDDY
            </span>

            <span className="block text-white/80 text-xl md:text-3xl tracking-[0.25em] mt-2">
              ADDULA
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-2 mt-5"
          >
            {roles.map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="max-w-md mt-5 text-gray-300 text-sm md:text-base leading-relaxed"
          >
            Transforming Ideas Into{" "}
            <span className="text-cyan-400 font-semibold">
              Intelligent Experiences
            </span>
            <br />
            Through AI, Automation & Storytelling
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex gap-3 mt-6"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
            >
              View My Work
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              Let's Connect
            </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll */}
      <button
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}