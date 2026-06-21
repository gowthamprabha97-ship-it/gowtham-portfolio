"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, Zap, Brain, BarChart3, Workflow, Bot, ChevronRight } from "lucide-react";

const certifications = [
  {
    title: "Generative AI",
    subtitle: "Foundations & Applications",
    icon: Brain,
    gradient: "from-plasma-violet to-pink-500",
    glow: "rgba(139,92,246,0.3)",
    level: "Advanced",
  },
  {
    title: "Prompt Engineering",
    subtitle: "Advanced Prompting Techniques",
    icon: Zap,
    gradient: "from-neural-blue to-signal-cyan",
    glow: "rgba(14,165,233,0.3)",
    level: "Expert",
  },
  {
    title: "Claude AI Ecosystem",
    subtitle: "Constitutional AI Mastery",
    icon: Bot,
    gradient: "from-signal-cyan to-teal-400",
    glow: "rgba(6,182,212,0.3)",
    level: "Specialist",
  },
  {
    title: "N8N Automation",
    subtitle: "Workflow Design & Deployment",
    icon: Workflow,
    gradient: "from-gold-spark to-orange-500",
    glow: "rgba(245,158,11,0.3)",
    level: "Professional",
  },
  {
    title: "Power BI",
    subtitle: "Business Intelligence & Analytics",
    icon: BarChart3,
    gradient: "from-red-500 to-orange-400",
    glow: "rgba(239,68,68,0.3)",
    level: "Certified",
  },
  {
    title: "Machine Learning",
    subtitle: "Supervised & Unsupervised Learning",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.3)",
    level: "Practitioner",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian to-deep-space" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neural-blue/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-gold-spark/30 text-gold-spark text-xs font-mono tracking-widest uppercase mb-4">
            Credentials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ghost-white">
            Certifications &{" "}
            <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-strong rounded-2xl p-6 border border-white/5 hover:border-white/10 group relative overflow-hidden cursor-default"
                style={{ boxShadow: `0 4px 30px rgba(0,0,0,0.3)` }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 20%, ${cert.glow} 0%, transparent 60%)` }}
                />

                {/* Badge ring decoration */}
                <div className="relative z-10 flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    {/* Outer ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-2 rounded-full border border-dashed border-white/10"
                    />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: `0 0 20px ${cert.glow}` }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Award badge */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold-spark flex items-center justify-center">
                      <Award className="w-3 h-3 text-obsidian" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-mono bg-gradient-to-r ${cert.gradient} text-white mb-2`}>
                      {cert.level}
                    </div>
                    <h3 className="font-display font-bold text-ghost-white text-base leading-tight group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-silver mt-1">{cert.subtitle}</p>
                  </div>
                </div>

                <div className="relative z-10 mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-muted-silver font-mono">Verified</span>
                  <div className="flex items-center gap-1 text-xs text-neural-blue">
                    <span>View</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 glass-strong rounded-2xl p-6 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-spark to-orange-500 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-ghost-white">Continuously Learning</h4>
              <p className="text-sm text-muted-silver">Always earning new certifications in the AI space</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-2xl font-display font-black text-gradient">6+</p>
              <p className="text-xs text-muted-silver">Certifications</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-display font-black text-gradient">2025</p>
              <p className="text-xs text-muted-silver">Active Year</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-display font-black text-gradient">100%</p>
              <p className="text-xs text-muted-silver">Completion</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
