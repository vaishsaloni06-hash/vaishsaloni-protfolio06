import React, { useState } from "react";
import { GraduationCap, Briefcase, Quote, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const AboutEducationSkills: React.FC = () => {
  const { education, background, skillsList, skillCategories, philosophy } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filterTabs = ["All", "Core Development", "Styling & Motion", "Backend & Systems"];

  const displayedSkills =
    activeCategory === "All"
      ? skillsList
      : skillCategories.find((c) => c.name === activeCategory)?.skills || skillsList;

  return (
    <section id="about" className="py-24 bg-[#080808] relative border-t border-white/[0.06]">
      {/* Background radial accent */}
      <div 
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#93C5FD] uppercase">
            <span>03</span>
            <span className="w-6 h-[1px] bg-[#2563EB]" />
            <span>PEDIGREE & CAPABILITIES</span>
          </div>
          <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl md:text-6xl text-[#DBEAFE] uppercase tracking-tight">
            ABOUT, EDUCATION & SKILLS
          </h2>
          <p className="text-[#93C5FD]/80 text-base max-w-2xl">
            A synthesis of classical computer science fundamentals, contemporary web architecture, and uncompromising editorial aesthetics.
          </p>
        </div>

        {/* 3-Column Sophisticated Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* COLUMN ONE: Education, Professional Background & Introduction */}
          <div className="space-y-8 bg-[#111111] border border-blue-900/30 p-8 h-full flex flex-col justify-between">
            <div className="space-y-6">
              {/* Personal Bio */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#60A5FA] block mb-2 font-semibold">
                  01 // PROFILE & PASSION
                </span>
                <h3 className="font-['Outfit'] font-bold text-xl text-[#DBEAFE] mb-2">
                  Engineering with an Art Director's Eye
                </h3>
                <p className="text-[#93C5FD]/80 text-sm leading-relaxed">
                  I specialize in crafting bespoke web experiences where mathematical precision meets high-fashion dark luxury aesthetics. With a deep foundation in full-stack architecture and frontend performance, I bridge the gap between design vision and faultless execution.
                </p>
              </div>

              {/* Education Block */}
              <div className="pt-4 border-t border-white/[0.06] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#93C5FD]">
                  <GraduationCap className="w-4 h-4 text-[#60A5FA]" />
                  <span>Education</span>
                </div>
                <div className="space-y-4">
                  {(education || []).map((edu) => (
                    <div key={edu.degree} className="space-y-1">
                      <div className="text-sm font-semibold text-[#DBEAFE]">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-[#60A5FA] font-mono">
                        {edu.institution} • {edu.period}
                      </div>
                      <div className="text-xs text-[#93C5FD]/70 leading-relaxed pt-0.5">
                        {edu.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Background Block */}
              <div className="pt-4 border-t border-white/[0.06] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#93C5FD]">
                  <Briefcase className="w-4 h-4 text-[#60A5FA]" />
                  <span>Professional Experience</span>
                </div>
                <div className="space-y-4">
                  {(background || []).map((bg) => (
                    <div key={bg.company} className="space-y-1">
                      <div className="text-sm font-semibold text-[#DBEAFE]">
                        {bg.role}
                      </div>
                      <div className="text-xs text-[#60A5FA] font-mono">
                        {bg.company} • {bg.period}
                      </div>
                      <div className="text-xs text-[#93C5FD]/70 leading-relaxed pt-0.5">
                        {bg.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#93C5FD]/70">
              <span>STATUS</span>
              <span className="text-[#DBEAFE] font-medium">Global Engagements Open</span>
            </div>
          </div>

          {/* COLUMN TWO: Skills as Minimal Outlined Tags */}
          <div id="skills" className="space-y-6 bg-[#111111] border border-blue-900/30 p-8 h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#60A5FA] block mb-2 font-semibold">
                  02 // ARSENAL
                </span>
                <h3 className="font-['Outfit'] font-bold text-xl text-[#DBEAFE] mb-2">
                  Technical Stack & Core Fluency
                </h3>
                <p className="text-[#93C5FD]/80 text-sm leading-relaxed">
                  Only technologies vetted through production workloads. No superficial buzzwords — every tool listed is actively deployed.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-1 p-1 bg-[#080808] border border-blue-900/40">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveCategory(tab)}
                    className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      activeCategory === tab
                        ? "bg-[#1E3A8A] text-[#EFF6FF] border border-[#3B82F6]"
                        : "text-[#93C5FD]/70 hover:text-[#DBEAFE]"
                    }`}
                  >
                    {tab === "Core Development" ? "Core" : tab === "Styling & Motion" ? "Motion" : tab === "Backend & Systems" ? "Backend" : "All"}
                  </button>
                ))}
              </div>

              {/* Minimal Outlined Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(displayedSkills || []).map((skill) => (
                  <div
                    key={skill}
                    className="group px-3 py-1.5 bg-[#080808] border border-blue-900/40 hover:border-[#3B82F6] hover:bg-blue-950/30 transition-all duration-200 cursor-default"
                  >
                    <span className="text-xs font-mono text-[#BFDBFE] group-hover:text-[#EFF6FF] transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stack Architecture Highlights */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#93C5FD] flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Engineering Invariants</span>
                </div>
                <ul className="text-xs text-[#93C5FD]/80 space-y-1.5 list-disc list-inside">
                  <li>Strict TypeScript type-safety & zero-any policies</li>
                  <li>Core Web Vitals ≥ 98 across mobile & desktop</li>
                  <li>WCAG 2.1 AA accessible semantic markup</li>
                  <li>Hardware-accelerated 60fps compositor motion</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#93C5FD]/70">
              <span>ACTIVE STACK COUNT</span>
              <span className="text-[#93C5FD] font-bold">16+ Verified Technologies</span>
            </div>
          </div>

          {/* COLUMN THREE: Large Decorative Quotation, Philosophy & Signature */}
          <div className="bg-[#111111] border border-blue-900/30 p-8 h-full flex flex-col justify-between relative overflow-hidden">
            {/* Ambient subtle navy blue background light */}
            <div 
              className="absolute -top-12 -right-12 w-48 h-48 bg-[#1E3A8A]/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#60A5FA] block mb-2 font-semibold">
                  03 // PHILOSOPHY
                </span>
                <h3 className="font-['Outfit'] font-bold text-xl text-[#DBEAFE] mb-4">
                  The Editorial Manifesto
                </h3>
              </div>

              {/* Large Decorative Quotation */}
              <div className="relative pt-4">
                <Quote className="w-12 h-12 text-[#2563EB]/25 absolute -top-3 -left-2 rotate-180 pointer-events-none" />
                <blockquote className="font-['Outfit'] font-bold text-2xl md:text-3xl text-[#DBEAFE] leading-snug tracking-tight pl-6">
                  "{philosophy.quote}"
                </blockquote>
              </div>

              {/* Personal Design & Development Philosophy */}
              <div className="pt-6 space-y-3">
                <p className="text-[#93C5FD]/85 text-sm leading-relaxed">
                  {philosophy.body}
                </p>
                <p className="text-[#93C5FD]/80 text-sm leading-relaxed">
                  I believe that true luxury lies in restraint: eliminating visual clutter, polishing micro-interactions to tactile perfection, and building software that respects human attention.
                </p>
              </div>
            </div>

            {/* Elegant Signature-Style Name */}
            <div className="pt-8 border-t border-white/[0.06] mt-8 relative z-10 flex flex-col items-end">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#93C5FD]/70 mb-1">
                Handcrafted By
              </span>
              <div className="font-['Caveat'] text-4xl sm:text-5xl text-[#93C5FD] rotate-[-3deg] select-none tracking-wide">
                {philosophy.signature}
              </div>
              <span className="text-[10px] font-mono text-[#93C5FD]/70 mt-1 uppercase tracking-widest">
                Web Developer & Creative Engineer
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
