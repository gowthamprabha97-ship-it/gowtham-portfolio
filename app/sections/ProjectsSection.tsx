"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Film, Workflow, BarChart3, Brain, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "1947 Tho Modati Prema Katha",
    subtitle: "AI Historical Storytelling",
    description: "A cinematic AI-generated short film blending historical India with a timeless love story. Every frame crafted with generative AI — from script to screen.",
    longDesc: "A pioneering AI storytelling project that reconstructs 1947 India through cinematic AI video generation, original AI-composed music, AI voice synthesis, and historically accurate visual aesthetics. This project represents the convergence of creative storytelling instincts with cutting-edge generative AI technology.",
    tags: ["AI Storytelling", "AI Video Generation", "AI Music", "AI Voice", "Historical Cinematics"],
    icon: Film,
    gradient: "from-plasma-violet via-pink-500 to-red-500",
    glowColor: "rgba(139,92,246,0.3)",
    accentColor: "text-plasma-violet",
    metrics: ["AI Video", "AI Music", "AI Voice", "Prompt Design"],
    status: "Completed",
  },
  {
    id: 2,
    title: "N8N AI Automation Workflows",
    subtitle: "Production Automation Suite",
    description: "End-to-end automation pipelines connecting AI models, Slack, databases, and APIs — reducing manual work by 80%.",
    longDesc: "A comprehensive automation ecosystem built on N8N, integrating multiple AI models with business tools. Includes intelligent document processing, automated reporting, Slack notification systems, and multi-step AI decision workflows that operate 24/7 without human intervention.",
    tags: ["N8N", "API Integration", "AI Workflows", "Slack", "Automation"],
    icon: Workflow,
    gradient: "from-signal-cyan to-teal-400",
    glowColor: "rgba(6,182,212,0.3)",
    accentColor: "text-signal-cyan",
    metrics: ["80% Time Saved", "15+ Integrations", "24/7 Operations", "Zero Downtime"],
    status: "Active",
  },
  {
  id: 3,
  title: "Superstore Sales Analysis",
  subtitle: "Retail Business Intelligence",
  description: "Comprehensive retail sales analysis using Python, Pandas, Plotly and Power BI to uncover business insights and sales trends.",
  longDesc: "Performed end-to-end data preprocessing, outlier handling, exploratory data analysis and business intelligence reporting using the Superstore Sales dataset. Generated actionable insights on categories, customer behavior and sales performance.",
  tags: ["Python", "Pandas", "Plotly", "Power BI", "EDA"],
  icon: BarChart3,
  gradient: "from-gold-spark to-orange-500",
  glowColor: "rgba(245,158,11,0.3)",
  accentColor: "text-gold-spark",
  metrics: ["22 Columns", "Sales Insights", "Interactive Dashboards", "Business Analytics"],
  status: "Completed",
},
  {
  id: 4,
  title: "E-Commerce Sales Prediction",
  subtitle: "Machine Learning Regression",
  description: "Sales forecasting system using Machine Learning to predict revenue and customer purchase behavior.",
  longDesc: "Built a regression model using Python and Scikit-Learn for predicting e-commerce sales. Implemented preprocessing, encoding, scaling, train-test split, model training and evaluation.",
  tags: ["Python", "Scikit-Learn", "Regression", "Machine Learning", "Prediction"],
  icon: Brain,
  gradient: "from-neural-blue to-plasma-violet",
  glowColor: "rgba(14,165,233,0.3)",
  accentColor: "text-neural-blue",
  metrics: ["Regression", "Feature Engineering", "Model Training", "Forecasting"],
  status: "Completed",
},
  {
  id: 5,
  title: "Slack AI Assistant",
  subtitle: "Conversational AI System",
  description: "AI-powered Slack assistant integrated with automation workflows and business tools.",
  longDesc: "Developed an intelligent Slack assistant capable of answering questions, automating tasks and integrating with enterprise workflows using N8N and Generative AI.",
  tags: ["Slack", "N8N", "AI Assistant", "Automation", "Generative AI"],
  icon: Workflow,
  gradient: "from-signal-cyan to-teal-400",
  glowColor: "rgba(6,182,212,0.3)",
  accentColor: "text-signal-cyan",
  metrics: ["Slack Bot", "Automation", "AI Assistant", "Workflow AI"],
  status: "Active",
},
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative glass-strong border border-white/10 rounded-3xl p-8 max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: `0 0 60px ${project.glowColor}` }}
      >
        {/* Gradient top bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-3xl`} />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center text-muted-silver hover:text-ghost-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon & title */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className={`text-xs font-mono ${project.accentColor} tracking-widest uppercase`}>{project.subtitle}</span>
            <h3 className="font-display font-bold text-2xl text-ghost-white mt-1">{project.title}</h3>
          </div>
        </div>

        <p className="text-muted-silver leading-relaxed mb-6">{project.longDesc}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {project.metrics.map((m) => (
            <div key={m} className="glass rounded-xl p-3 text-center border border-white/5">
              <p className="text-xs text-muted-silver">{m}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className={`px-3 py-1 glass text-xs border border-white/5 rounded-full ${project.accentColor}`}>{tag}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden neural-grid-bg">
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-plasma-violet/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-signal-cyan/30 text-signal-cyan text-xs font-mono tracking-widest uppercase mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ghost-white">
            Projects That <span className="text-gradient">Push Limits</span>
          </h2>
          <p className="mt-4 text-muted-silver max-w-lg mx-auto">
            Each project tells a story of human ingenuity amplified by artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                onClick={() => setSelectedProject(project)}
                className="glass-strong rounded-2xl p-7 border border-white/5 hover:border-neural-blue/30 cursor-pointer group overflow-hidden relative"
                style={{ boxShadow: `0 4px 40px rgba(0,0,0,0.3)` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${project.glowColor} 0%, transparent 60%)` }}
                />

                {/* Top bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                      <span className="text-xs text-muted-silver font-mono">{project.status}</span>
                    </div>
                  </div>

                  <p className={`text-xs font-mono ${project.accentColor} tracking-widest uppercase mb-1`}>
                    {project.subtitle}
                  </p>
                  <h3 className="font-display font-bold text-xl text-ghost-white mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-silver leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={`px-2.5 py-1 text-xs glass border border-white/5 rounded-full ${project.accentColor}/80`}>
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-xs text-muted-silver glass border border-white/5 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <button className="flex items-center gap-2 text-xs font-semibold text-muted-silver group-hover:text-neural-blue transition-colors">
                    <Play className="w-3.5 h-3.5" />
                    View Details
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
