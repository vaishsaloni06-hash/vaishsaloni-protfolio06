import React, { useState } from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";

interface SelectedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>("all");
  const { projects } = PORTFOLIO_DATA;

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "e-commerce", label: "E-Commerce" },
    { id: "saas", label: "SaaS Dashboards" },
    { id: "creative", label: "Creative & Agency" },
  ];

  const filteredProjects = (projects || []).filter((project) => {
    if (filter === "all") return true;
    if (filter === "e-commerce") return project.category.toLowerCase().includes("commerce");
    if (filter === "saas") return project.category.toLowerCase().includes("saas");
    if (filter === "creative") return project.category.toLowerCase().includes("creative");
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#0c0c0c] relative border-t border-white/[0.06]">
      {/* Subtle radial ambient highlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1E3A8A]/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#93C5FD] uppercase">
              <span>02</span>
              <span className="w-6 h-[1px] bg-[#2563EB]" />
              <span>CURATED ARCHIVE</span>
            </div>
            <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl md:text-6xl text-[#DBEAFE] uppercase tracking-tight">
              SELECTED PROJECTS
            </h2>
            <p className="text-[#93C5FD]/80 text-base max-w-xl">
              Production web applications engineered with obsessive attention to aesthetic poise, zero runtime latency, and immersive interaction models.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#161616] border border-blue-900/30 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap ${
                  filter === cat.id
                    ? "bg-[#1E3A8A] text-[#EFF6FF] border border-[#3B82F6]"
                    : "text-[#93C5FD]/70 hover:text-[#DBEAFE]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Large Cards Horizontal Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-[#111111] border border-white/[0.08] hover:border-[#3B82F6]/60 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#1E3A8A]/20"
            >
              {/* Top Meta Bar */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-white/[0.06] bg-[#0c0c0c]/80 text-xs font-mono">
                <span className="text-[#60A5FA] font-bold tracking-widest">
                  {project.number}
                </span>
                <span className="text-[#93C5FD]/70 uppercase tracking-wider text-[11px]">
                  {project.year}
                </span>
              </div>

              {/* High-Quality Mockup Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#080808]">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Hover Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                {/* View Case Study Pill on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E3A8A] border border-[#3B82F6] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#93C5FD]" />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#93C5FD] mb-1.5 font-semibold">
                    {project.category}
                  </div>
                  <h3 className="font-['Outfit'] font-bold text-2xl text-[#DBEAFE] group-hover:text-[#93C5FD] transition-colors tracking-tight flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#93C5FD]/70 group-hover:text-[#60A5FA] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2" />
                  </h3>
                  <p className="text-[#93C5FD]/80 text-sm leading-relaxed mt-2.5 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Unboxed Tech Stack Separated by Dots (Anti-Pill discipline) */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#93C5FD]/80 flex-wrap font-mono">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="text-[#93C5FD]/80 group-hover:text-[#DBEAFE] transition-colors">
                        {tech}
                      </span>
                      {i < Math.min(project.techStack.length, 4) - 1 && (
                        <span className="text-[#3B82F6]" aria-hidden="true">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner with Client Trust Statement */}
        <div className="mt-16 p-6 md:p-8 bg-[#111111] border border-blue-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-950/40 border border-[#3B82F6]/40 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-[#60A5FA]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#DBEAFE] font-['Outfit']">
                Looking for Custom Engineering & Creative Architecture?
              </h4>
              <p className="text-sm text-[#93C5FD]/80">
                All client projects are delivered with comprehensive documentation, clean modular codebases, and 100% test coverage.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectProject(projects[0])}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#93C5FD] hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Explore Full Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-[#60A5FA]" />
          </button>
        </div>
      </div>
    </section>
  );
};
