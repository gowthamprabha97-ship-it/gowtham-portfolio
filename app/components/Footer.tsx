"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: { x: number; y: number; r: number; op: number; speed: number; phase: number }[] = [];
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        op: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animId: number;
    let t = 0;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      t += 0.01;

      stars.forEach((s) => {
        const opacity = (Math.sin(t * s.speed * 10 + s.phase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(248, 250, 252, ${opacity * 0.8})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const navLinks = [
  { label: "Journey", href: "#journey" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-obsidian overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0 h-full">
        <StarField />
      </div>

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neural-blue/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Main tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          {/* Animated name */}
          <motion.h2
            className="font-display text-5xl sm:text-6xl md:text-7xl font-black mb-4"
          >
            {"GOWTHAM".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-gradient"
              >
                {char}
              </motion.span>
            ))}
            {" "}
            {"REDDY".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 8) * 0.05 }}
                className="text-ghost-white"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-muted-silver text-sm sm:text-base font-light tracking-[0.2em] uppercase"
          >
            Powered By{" "}
            <span className="text-plasma-violet">Creativity</span>,{" "}
            <span className="text-neural-blue">Storytelling</span> and{" "}
            <span className="text-signal-cyan">Artificial Intelligence</span>
          </motion.p>
        </motion.div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-silver hover:text-ghost-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm text-muted-silver">
          <a href="tel:+919640306927" className="flex items-center gap-2 hover:text-neural-blue transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-neural-blue" />
            +91 9640306927
          </a>
          <a href="mailto:Gowthamprabha97@gmail.com" className="flex items-center gap-2 hover:text-neural-blue transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-plasma-violet" />
            Gowthamprabha97@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan" />
            Hyderabad, India
          </span>
        </div>

        {/* Bottom */}
        <div className="text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          <p className="text-xs text-muted-silver/50 font-mono">
            © {new Date().getFullYear()} Gowtham Reddy Addula. Built with Next.js, Framer Motion & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
