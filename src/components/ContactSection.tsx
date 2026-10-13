import React, { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Copy, Check, Send, MapPin, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "New Project Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "New Project Inquiry",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] relative border-t border-white/[0.06] overflow-hidden">
      {/* Background Glows */}
      <div 
        className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#1E3A8A]/15 rounded-full blur-[180px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Headline */}
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#93C5FD] uppercase">
            <span>05</span>
            <span className="w-6 h-[1px] bg-[#2563EB]" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#DBEAFE] uppercase tracking-tight leading-[1]">
            LET'S BUILD SOMETHING AMAZING
          </h2>
          <p className="text-[#93C5FD]/85 text-base md:text-lg leading-relaxed pt-2">
            Have a project in mind, a vision to realize, or an opportunity to explore? I'm currently accepting select freelance commissions and full-stack creative development contracts.
          </p>
        </div>

        {/* 2-Column Split: Interactive Form & Details on Left, Stylish Laptop Workspace Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Form & Social Links (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#111111] border border-blue-900/30 p-8 space-y-6">
              <h3 className="font-['Outfit'] font-bold text-xl text-[#DBEAFE] uppercase tracking-wide">
                Direct Communication Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wider text-[#93C5FD]">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Lin"
                      className="w-full px-4 py-3 bg-[#080808] border border-blue-900/40 focus:border-[#3B82F6] focus:outline-none text-sm text-[#EFF6FF] font-sans placeholder-[#475569] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-[#93C5FD]">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@company.com"
                      className="w-full px-4 py-3 bg-[#080808] border border-blue-900/40 focus:border-[#3B82F6] focus:outline-none text-sm text-[#EFF6FF] font-sans placeholder-[#475569] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono uppercase tracking-wider text-[#93C5FD]">
                    Project Focus
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#080808] border border-blue-900/40 focus:border-[#3B82F6] focus:outline-none text-sm text-[#EFF6FF] font-sans transition-colors cursor-pointer"
                  >
                    <option value="New Project Inquiry">New Project Inquiry</option>
                    <option value="Luxury E-Commerce Flagship">Luxury E-Commerce Flagship</option>
                    <option value="High-Performance SaaS Dashboard">High-Performance SaaS Dashboard</option>
                    <option value="Creative Direction & WebGL">Creative Direction & WebGL</option>
                    <option value="Full-Stack Technical Consultation">Full-Stack Technical Consultation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-wider text-[#93C5FD]">
                    Project Brief & Goals *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the goals, timeline, and architectural expectations..."
                    className="w-full px-4 py-3 bg-[#080808] border border-blue-900/40 focus:border-[#3B82F6] focus:outline-none text-sm text-[#EFF6FF] font-sans placeholder-[#475569] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-[#1E3A8A] hover:bg-[#2563EB] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#1E3A8A]/30 border border-[#3B82F6]/30 disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <span>DISPATCHING BRIEF...</span>
                  ) : status === "success" ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#93C5FD]" />
                      <span>MESSAGE TRANSMITTED SUCCESSFULLY</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>DISPATCH PROJECT INQUIRY</span>
                      <Send className="w-3.5 h-3.5 text-[#93C5FD]" />
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Contact & Verified Profile Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Box */}
              <div className="p-4 bg-[#111111] border border-blue-900/30 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 bg-[#080808] border border-blue-900/30 text-[#60A5FA]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono uppercase text-[#93C5FD]/70">Direct Email</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs text-[#DBEAFE] hover:text-[#93C5FD] transition-colors truncate block font-mono"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-[#93C5FD]/70 hover:text-[#DBEAFE] hover:bg-[#1a1a1a] transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-[#60A5FA]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="p-4 bg-[#111111] border border-blue-900/30 flex items-center gap-3">
                <div className="p-2 bg-[#080808] border border-blue-900/30 text-[#93C5FD]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#93C5FD]/70">Primary Base</div>
                  <div className="text-xs text-[#DBEAFE] font-mono">
                    {profile.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-blue-900/40 hover:border-[#3B82F6] text-xs font-mono text-[#DBEAFE] hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-[#60A5FA]" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3 text-[#93C5FD]/70" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-blue-900/40 hover:border-[#3B82F6] text-xs font-mono text-[#DBEAFE] hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#93C5FD]" />
                <span>LinkedIn Network</span>
                <ArrowUpRight className="w-3 h-3 text-[#93C5FD]/70" />
              </a>
              {profile.instagramlink && (
                <a
                  href={profile.instagramlink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-blue-900/40 hover:border-[#3B82F6] text-xs font-mono text-[#DBEAFE] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#F472B6]" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-[#93C5FD]/70" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Stylish Laptop Workspace Preview Mockup (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group overflow-hidden border border-white/[0.08] bg-[#111111] shadow-2xl">
              {/* Top Window Bar */}
              <div className="px-4 py-3 bg-[#0c0c0c] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[#999999] text-[11px] uppercase tracking-wider">
                  workspace :: active_dev
                </span>
                <span className="text-[10px] text-[#93C5FD]">60 FPS</span>
              </div>
              
              {/* Laptop Workspace Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#080808]">
                <img
                  src={profile.workspaceImage}
                  alt="Developer Dark Aesthetic Workspace Setup"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Ambient Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                {/* Floating Studio Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#111111]/90 backdrop-blur-md border border-white/[0.1] text-xs space-y-1">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-[#60A5FA] font-bold">READY TO COMMENCE</span>
                    <span className="text-[#999999]">Q4 / Q1 CYCLES</span>
                  </div>
                  <p className="text-[#999999] text-[11px] leading-relaxed">
                    Available for high-impact web design, creative frontend leadership, and performance contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
