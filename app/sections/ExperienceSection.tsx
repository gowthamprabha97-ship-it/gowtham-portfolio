"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Artificial Penetration Software Solutions Pvt Ltd",
    shortName: "APSS Pvt Ltd",
    role: "AI Engineer / Generative AI Intern",
    period: "May 2025 — Present",
    location: "Hyderabad, India",
    type: "Current",
    color: "neural-blue",
    gradient: "from-neural-blue to-plasma-violet",
    highlights: [
  "Built AI automation workflows using N8N and Slack integrations",
  "Developed AI assistants and chatbot solutions for business use cases",
  "Worked on E-Commerce Machine Learning and data analytics projects",
  "Created Power BI dashboards and business intelligence reports",
  "Designed Generative AI solutions using ChatGPT, Claude and Gemini",
],
    tech: ["Claude AI", "ChatGPT", "N8N", "Power BI", "Python", "RAG", "LangChain"],
  },
  {
    company: "Vanitha TV",
    shortName: "Vanitha TV",
    role: "Assistant Producer & Media Coordinator",
    period: "May 2021 — Present",
    location: "Hyderabad, India",
    type: "Concurrent",
    color: "gold-spark",
    gradient: "from-gold-spark to-orange-500",
    highlights: [
      "Led production of live television shows reaching millions of viewers",
      "Coordinated multi-camera setups for high-stakes live events",
      "Developed scripting frameworks for interview and panel shows",
      "Managed cross-functional teams of 20+ production staff",
      "Pioneered integration of digital content strategies with TV production",
    ],
    tech: ["Television Production", "Script Writing", "Live Events", "Interview Direction", "Content Strategy"],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden neural-grid-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-plasma-violet/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-gold-spark/30 text-gold-spark text-xs font-mono tracking-widest uppercase mb-4">
            Work History
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ghost-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-spark via-plasma-violet to-neural-blue opacity-20 md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 pl-16 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 -translate-x-1/2 rounded-full bg-gradient-to-br from-neural-blue to-plasma-violet border-2 border-deep-space shadow-lg shadow-neural-blue/40 z-10" />

                {/* Content - alternating sides */}
                <div className={`${i % 2 === 0 ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}>
                  <div className="glass-strong rounded-2xl p-7 border border-white/5 hover:border-neural-blue/30 transition-colors duration-300 relative overflow-hidden group">
                    {/* Top gradient line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.gradient} opacity-60`} />

                    {/* Header */}
                    <div className={`flex flex-col gap-1 mb-5 ${i % 2 === 0 ? "md:items-end" : ""}`}>
                      <span className={`inline-block px-3 py-1 glass text-xs font-mono text-${exp.color} border border-${exp.color}/20 rounded-full w-fit`}>
                        {exp.type}
                      </span>
                      <h3 className="font-display font-bold text-xl text-ghost-white mt-1">{exp.shortName}</h3>
                      <p className={`text-${exp.color} font-semibold text-sm`}>{exp.role}</p>

                      <div className={`flex items-center gap-4 text-xs text-muted-silver mt-1 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Full company name */}
                    <p className="text-xs text-muted-silver/60 mb-4 italic">{exp.company}</p>

                    {/* Highlights */}
                    <ul className={`space-y-2 mb-5 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((h) => (
                        <li key={h} className={`flex items-start gap-2 text-sm text-muted-silver ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <span className={`w-1.5 h-1.5 rounded-full bg-${exp.color} mt-1.5 flex-shrink-0`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 glass text-xs text-muted-silver border border-white/5 rounded-full hover:text-ghost-white transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty spacer for alternating */}
                {i % 2 === 0 && <div className="hidden md:block" />}
                {i % 2 !== 0 && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
