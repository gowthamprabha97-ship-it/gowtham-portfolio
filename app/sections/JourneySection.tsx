"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Tv2,
  Brain,
  ArrowRight,
  Camera,
  Mic,
  Film,
  Database,
  BarChart3,
  Workflow,
} from "lucide-react";

const mediaSkills = [
  { icon: Tv2, label: "Television Production" },
  { icon: Film, label: "Script Planning" },
  { icon: Mic, label: "Interview Management" },
  { icon: Camera, label: "Event Coverage" },
];

const aiSkills = [
  { icon: Brain, label: "Generative AI" },
  { icon: Database, label: "Machine Learning" },
  { icon: Workflow, label: "N8N Automation" },
  { icon: BarChart3, label: "Power BI Analytics" },
];

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="journey"
      ref={ref}
      className="relative py-32 overflow-hidden neural-grid-bg"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-plasma-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-plasma-violet/30 text-plasma-violet text-xs font-mono tracking-widest uppercase mb-4">
            My Journey
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-ghost-white leading-tight">
            From{" "}
            <span className="text-gradient-gold">Television</span>
            <br />
            To{" "}
            <span className="text-gradient">Artificial Intelligence</span>
          </h2>

          <p className="mt-4 text-muted-silver max-w-2xl mx-auto">
            A unique transition from media storytelling to AI engineering,
            combining creativity, automation, machine learning and business
            intelligence.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-spark via-plasma-violet to-neural-blue opacity-30 -translate-x-1/2" />

          {/* Television Journey */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:grid lg:grid-cols-2 lg:gap-16 mb-16 lg:mb-24"
          >
            <div className="lg:text-right lg:pr-16">
              <div className="glass-strong rounded-2xl p-8 border border-gold-spark/20 hover:border-gold-spark/40 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold-spark/5 blur-2xl" />

                <div className="flex items-center gap-3 mb-6 lg:flex-row-reverse">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-spark to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Tv2 className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <p className="text-gold-spark font-mono text-sm tracking-widest">
                      2021 — Present
                    </p>
                    <h3 className="text-ghost-white font-display font-bold text-xl">
                      Vanitha TV
                    </h3>
                  </div>
                </div>

                <p className="text-plasma-violet font-semibold text-sm uppercase tracking-wider mb-3">
                  Assistant Producer & Media Coordinator
                </p>

                <p className="text-muted-silver text-sm mb-6 leading-relaxed">
                  Built strong storytelling, content planning and production
                  skills through live television programs, event coordination
                  and audience-focused content creation.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {mediaSkills.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 lg:flex-row-reverse"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gold-spark/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-gold-spark" />
                      </div>
                      <span className="text-xs text-muted-silver">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2"
              style={{ top: "4rem" }}
            >
              <div className="w-4 h-4 rounded-full bg-gold-spark shadow-lg shadow-gold-spark/50" />
            </div>

            <div className="hidden lg:block" />
          </motion.div>

          {/* Transition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-3 my-8 lg:my-0"
          >
            <div className="flex items-center gap-4 glass px-6 py-3 rounded-full border border-white/10">
              <span className="text-muted-silver text-sm font-medium">
                Media Professional
              </span>

              <ArrowRight className="w-4 h-4 text-neural-blue" />

              <span className="text-muted-silver text-sm font-medium">
                AI Enthusiast
              </span>

              <ArrowRight className="w-4 h-4 text-plasma-violet" />

              <span className="text-neural-blue text-sm font-semibold">
                AI Engineer
              </span>
            </div>
          </motion.div>

          {/* AI Journey */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:grid lg:grid-cols-2 lg:gap-16 mt-16 lg:mt-24"
          >
            <div className="hidden lg:block" />

            <div className="lg:pl-16">
              <div className="glass-strong rounded-2xl p-8 border border-neural-blue/20 hover:border-neural-blue/40 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-neural-blue/5 blur-2xl" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neural-blue to-plasma-violet flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <p className="text-neural-blue font-mono text-sm tracking-widest">
                      2025 — Present
                    </p>
                    <h3 className="text-ghost-white font-display font-bold text-xl">
                      APSS Pvt Ltd
                    </h3>
                  </div>
                </div>

                <p className="text-signal-cyan font-semibold text-sm uppercase tracking-wider mb-3">
                  AI Engineer / Generative AI Intern
                </p>

                <p className="text-muted-silver text-sm mb-6 leading-relaxed">
                  Building AI-powered automation systems, machine learning
                  solutions, business intelligence dashboards and Generative AI
                  applications using Python, N8N, Power BI, ChatGPT, Claude and
                  Gemini.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {aiSkills.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-neural-blue/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-neural-blue" />
                      </div>

                      <span className="text-xs text-muted-silver">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {[
            { value: "4+", label: "Years TV Production" },
            { value: "6+", label: "AI Platforms" },
            { value: "15+", label: "AI Projects Built" },
            { value: "∞", label: "Ideas To Build" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-xl p-5 text-center border border-white/5 hover:border-neural-blue/30 transition-colors duration-300"
            >
              <p className="text-3xl font-display font-black text-gradient mb-1">
                {value}
              </p>

              <p className="text-xs text-muted-silver tracking-wide">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}