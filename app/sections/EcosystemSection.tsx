"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const nodes = [
  { id: "claude", label: "Claude AI", x: 50, y: 20, color: "#8B5CF6", size: 36 },
  { id: "chatgpt", label: "ChatGPT", x: 80, y: 35, color: "#0EA5E9", size: 30 },
  { id: "gemini", label: "Gemini", x: 75, y: 65, color: "#06B6D4", size: 28 },
  { id: "n8n", label: "N8N", x: 50, y: 78, color: "#F59E0B", size: 32 },
  { id: "powerbi", label: "Power BI", x: 20, y: 65, color: "#EF4444", size: 28 },
  { id: "python", label: "Python", x: 15, y: 35, color: "#10B981", size: 30 },
  { id: "rag", label: "RAG", x: 30, y: 15, color: "#F59E0B", size: 26 },
  { id: "automation", label: "Automation", x: 65, y: 48, color: "#0EA5E9", size: 26 },
  { id: "gowth", label: "GOWTHAM", x: 50, y: 47, color: "#F8FAFC", size: 44, isCenter: true },
];

const connections = [
  ["gowth", "claude"], ["gowth", "chatgpt"], ["gowth", "gemini"],
  ["gowth", "n8n"], ["gowth", "powerbi"], ["gowth", "python"],
  ["gowth", "rag"], ["gowth", "automation"],
  ["claude", "rag"], ["n8n", "automation"], ["chatgpt", "automation"],
  ["python", "powerbi"], ["gemini", "automation"],
];

export default function EcosystemSection() {
  const ref = useRef(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animPhase, setAnimPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setAnimPhase((p) => (p + 1) % nodes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isInView]);

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <section id="ecosystem" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-deep-space to-obsidian" />
      <div className="absolute inset-0 neural-grid-bg opacity-50" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-plasma-violet/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-neural-blue/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-plasma-violet/30 text-plasma-violet text-xs font-mono tracking-widest uppercase mb-4">
            Connected Intelligence
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-ghost-white">
            Generative AI <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="mt-4 text-muted-silver max-w-lg mx-auto">
            An interconnected network of AI platforms, automation tools, and data systems — orchestrated as one.
          </p>
        </motion.div>

        {/* Network Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-3xl mx-auto"
        >
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            className="w-full aspect-square max-h-[600px]"
            style={{ filter: "drop-shadow(0 0 40px rgba(14,165,233,0.1))" }}
          >
            {/* Connection lines */}
            {connections.map(([from, to]) => {
              const f = getNode(from);
              const t = getNode(to);
              const isActive = activeNode === from || activeNode === to || 
                (animPhase < nodes.length && (nodes[animPhase].id === from || nodes[animPhase].id === to));
              return (
                <motion.line
                  key={`${from}-${to}`}
                  x1={f.x}
                  y1={f.y}
                  x2={t.x}
                  y2={t.y}
                  stroke={isActive ? f.color : "rgba(148,163,184,0.1)"}
                  strokeWidth={isActive ? "0.4" : "0.2"}
                  animate={{ opacity: isActive ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node, i) => (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className="cursor-pointer"
              >
                {/* Outer glow ring */}
                <motion.circle
                  r={node.size / 8 + 3}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="0.3"
                  animate={{
                    r: [node.size / 8 + 2, node.size / 8 + 5, node.size / 8 + 2],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                />

                {/* Node circle */}
                <motion.circle
                  r={node.size / 8}
                  fill={node.isCenter ? "rgba(248,250,252,0.08)" : "rgba(8,11,18,0.8)"}
                  stroke={node.color}
                  strokeWidth={node.isCenter ? "0.6" : "0.4"}
                  animate={{
                    r: activeNode === node.id ? [node.size / 8, node.size / 8 + 1.5, node.size / 8] : node.size / 8,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Label */}
                <text
                  textAnchor="middle"
                  dy="0.4em"
                  fill={node.isCenter ? "#F8FAFC" : node.color}
                  fontSize={node.isCenter ? "2.5" : "2"}
                  fontWeight={node.isCenter ? "700" : "500"}
                  fontFamily="JetBrains Mono, monospace"
                  className="select-none pointer-events-none"
                >
                  {node.isCenter ? node.label.split(" ").map((w, wi) => (
                    <tspan key={wi} x="0" dy={wi === 0 ? "-1" : "2.8"} fontSize="2">{w}</tspan>
                  )) : node.label}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {nodes.filter((n) => !n.isCenter).map((node) => (
            <div
              key={node.id}
              className="flex items-center gap-2 px-3 py-1.5 glass rounded-full border border-white/5 text-xs"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: node.color }} />
              <span className="text-muted-silver hover:text-ghost-white transition-colors">{node.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
