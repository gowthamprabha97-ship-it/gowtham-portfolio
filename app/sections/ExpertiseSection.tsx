"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles, Bot, Zap, BarChart3,
  MessageSquare, Cpu, Workflow, Database,
  Brain, ChevronRight
} from "lucide-react";

const expertiseCategories = [
  {
    title: "Generative AI",
    icon: Sparkles,
    gradient: "from-plasma-violet to-pink-500",
    glowColor: "rgba(139,92,246,0.2)",
    borderColor: "border-plasma-violet/30",
    items: [
      { label: "Prompt Engineering", desc: "Crafting precise instructions for LLMs at scale" },
      { label: "RAG Systems", desc: "Retrieval-augmented generation pipelines" },
      { label: "Multimodal AI", desc: "Text, image, audio fusion workflows" },
      { label: "AI Storytelling", desc: "Narrative-driven AI content creation" },
    ],
  },
  {
    title: "AI Platforms",
    icon: Bot,
    gradient: "from-neural-blue to-signal-cyan",
    glowColor: "rgba(14,165,233,0.2)",
    borderColor: "border-neural-blue/30",
    items: [
      { label: "Claude AI", desc: "Constitutional AI for nuanced outputs" },
      { label: "ChatGPT", desc: "OpenAI ecosystem integrations" },
      { label: "Gemini & Grok", desc: "Multi-platform AI orchestration" },
      { label: "Perplexity / NotebookLM", desc: "Research & knowledge synthesis" },
    ],
  },
  {
    title: "Automation",
    icon: Workflow,
    gradient: "from-signal-cyan to-teal-400",
    glowColor: "rgba(6,182,212,0.2)",
    borderColor: "border-signal-cyan/30",
    items: [
      { label: "N8N Workflows", desc: "Visual workflow automation at scale" },
      { label: "API Integrations", desc: "Connecting disparate systems" },
      { label: "Slack Workflows", desc: "Team productivity automation" },
      { label: "Trigger-based Systems", desc: "Event-driven automation pipelines" },
    ],
  },
  {
    title: "Analytics & Data",
    icon: BarChart3,
    gradient: "from-gold-spark to-orange-500",
    glowColor: "rgba(245,158,11,0.2)",
    borderColor: "border-gold-spark/30",
    items: [
      { label: "Power BI", desc: "Interactive AI-powered dashboards" },
      { label: "Python", desc: "Data pipelines & ML prototyping" },
      { label: "MySQL", desc: "Structured data management" },
      { label: "Machine Learning", desc: "Predictive modeling & analysis" },
    ],
  },
];

export default function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-obsidian to-obsidian" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neural-blue/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-neural-blue/30 text-neural-blue text-xs font-mono tracking-widest uppercase mb-4">
            Technical Arsenal
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ghost-white">
            AI <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-muted-silver max-w-lg mx-auto">
            A full-stack AI skill set — from model selection to production deployment.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {expertiseCategories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative glass-strong rounded-2xl p-6 border ${cat.borderColor} group cursor-default overflow-hidden`}
                style={{ boxShadow: `0 0 40px ${cat.glowColor}` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${cat.glowColor} 0%, transparent 70%)` }}
                />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display font-bold text-xl text-ghost-white mb-4 relative z-10">
                  {cat.title}
                </h3>

                <ul className="space-y-3 relative z-10">
                  {cat.items.map(({ label, desc }) => (
                    <li key={label} className="group/item">
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-muted-silver mt-0.5 flex-shrink-0 group-hover/item:text-neural-blue transition-colors" />
                        <div>
                          <p className="text-sm font-medium text-ghost-white/90 group-hover/item:text-ghost-white transition-colors">{label}</p>
                          <p className="text-xs text-muted-silver/70 mt-0.5 leading-tight">{desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Bottom gradient accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
              </motion.div>
            );
          })}
        </div>

        {/* Skills pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            "Prompt Engineering", "LangChain", "RAG", "Vector DBs",
            "Claude AI", "OpenAI API", "N8N", "Power BI",
            "Python", "MySQL", "Machine Learning", "AI Storytelling",
            "Workflow Automation", "Slack Bots", "API Design"
          ].map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.03 }}
              className="px-3 py-1.5 glass text-xs text-muted-silver border border-white/5 rounded-full hover:border-neural-blue/40 hover:text-ghost-white transition-all duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
