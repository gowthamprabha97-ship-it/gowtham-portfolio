"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Download, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:Gowthamprabha97@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message + "\n\nFrom: " + name + "\nEmail: " + email)}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const contactDetails = [
    { icon: Phone, label: "Phone", value: "+91 9640306927", href: "tel:+919640306927" },
    { icon: Mail, label: "Email", value: "Gowthamprabha97@gmail.com", href: "mailto:Gowthamprabha97@gmail.com" },
    { icon: MapPin, label: "Location", value: "Hyderabad, India", href: "https://maps.google.com/?q=Hyderabad,India" },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden neural-grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-plasma-violet/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-plasma-violet/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-neural-blue/30 text-neural-blue text-xs font-mono tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-ghost-white leading-tight">
            Let&apos;s Build The
            <br />
            <span className="text-gradient">Future With AI</span>
          </h2>
          <p className="mt-4 text-muted-silver max-w-lg mx-auto">
            Have a project idea? Want to collaborate on AI? Or just want to say hello? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact details */}
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "Location" ? "_blank" : undefined}
                rel={label === "Location" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 glass-strong rounded-2xl p-5 border border-white/5 hover:border-neural-blue/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-neural-blue/20 to-plasma-violet/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-neural-blue" />
                </div>
                <div>
                  <p className="text-xs text-muted-silver font-mono uppercase tracking-wider">{label}</p>
                  <p className="text-ghost-white font-medium group-hover:text-neural-blue transition-colors">{value}</p>
                </div>
              </a>
            ))}

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <motion.a
                href="/resume.pdf"
                download="Gowtham_Reddy_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-4 py-3 glass-strong border border-neural-blue/30 text-neural-blue text-sm font-semibold rounded-xl hover:border-neural-blue/60 hover:bg-neural-blue/10 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/gowthamreddyaddula"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-4 py-3 glass-strong border border-plasma-violet/30 text-plasma-violet text-sm font-semibold rounded-xl hover:border-plasma-violet/60 hover:bg-plasma-violet/10 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/gowthamreddyaddula"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-4 py-3 glass-strong border border-white/10 text-ghost-white text-sm font-semibold rounded-xl hover:border-white/30 hover:bg-white/5 transition-all duration-300 col-span-2"
              >
                <Github className="w-4 h-4" />
                GitHub Profile
              </motion.a>
            </div>
          </motion.div>

          {/* Right column — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 border border-white/5 space-y-5">
              <h3 className="font-display font-bold text-xl text-ghost-white mb-6">Send a Message</h3>

              <div>
                <label className="block text-xs text-muted-silver font-mono uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-ghost-white placeholder-muted-silver/50 text-sm focus:outline-none focus:border-neural-blue/50 focus:bg-neural-blue/5 transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-xs text-muted-silver font-mono uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-ghost-white placeholder-muted-silver/50 text-sm focus:outline-none focus:border-neural-blue/50 focus:bg-neural-blue/5 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs text-muted-silver font-mono uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-ghost-white placeholder-muted-silver/50 text-sm focus:outline-none focus:border-neural-blue/50 focus:bg-neural-blue/5 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-neural-blue to-plasma-violet text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neural-blue/25 transition-all duration-300"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
