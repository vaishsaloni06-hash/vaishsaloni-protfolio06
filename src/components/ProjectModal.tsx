import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Project, PORTFOLIO_DATA } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const { projects } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#111111] border border-white/[0.12] flex flex-col overflow-hidden shadow-2xl shadow-black"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0a0a0a] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#60A5FA]">
              {project.number}
            </span>
            <span className="text-[#999999]" aria-hidden="true">/</span>
            <span className="font-mono text-xs text-[#93C5FD] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-[#999999]" aria-hidden="true">•</span>
            <span className="font-mono text-xs text-[#999999]">
              {project.year}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              className="p-1.5 text-[#999999] hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
              title="Previous project"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="p-1.5 text-[#999999] hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
              title="Next project"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#999999] hover:text-[#60A5FA] hover:bg-white/[0.06] transition-colors ml-2 cursor-pointer"
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Main Title & Tagline */}
          <div className="space-y-2">
            <h2 id="modal-project-title" className="font-['Outfit'] font-black text-3xl sm:text-4xl md:text-5xl text-[#DBEAFE] uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#93C5FD]/85">
              {project.tagline}
            </p>
          </div>

          {/* Hero Mockup in Lightbox */}
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-blue-900/30 bg-[#050505]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, i) => (
              <div key={metric} className="p-4 bg-[#0a0a0a] border border-blue-900/40">
                <div className="text-[11px] font-mono text-[#60A5FA] uppercase tracking-wider">
                  KEY RESULT 0{i + 1}
                </div>
                <div className="font-['Outfit'] font-bold text-lg text-[#DBEAFE] mt-1">
                  {metric}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-white/[0.06]">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-['Outfit'] font-bold text-lg text-[#DBEAFE] uppercase tracking-wider">
                Architectural Breakdown
              </h3>
              <p className="text-[#93C5FD]/85 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-[#93C5FD] tracking-wider block">
                  Core Innovations:
                </span>
                <ul className="space-y-2 text-sm text-[#93C5FD]/80">
                  {project.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div>
                <h3 className="font-['Outfit'] font-bold text-sm text-[#DBEAFE] uppercase tracking-wider mb-3">
                  Applied Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#0a0a0a] border border-blue-900/40 text-xs font-mono text-[#BFDBFE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#1E3A8A] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#3B82F6]/30 shadow-lg shadow-[#1E3A8A]/30"
                >
                  <span>Launch Live Simulation</span>
                  <ExternalLink className="w-4 h-4 text-[#93C5FD]" />
                </a>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#0a0a0a] border border-white/[0.1] hover:border-white text-[#F5F5F5] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
