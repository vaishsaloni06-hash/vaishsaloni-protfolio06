import React, { useEffect } from "react";
import { X, Printer } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, education, background, skillsList } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/[0.12] flex flex-col overflow-hidden shadow-2xl shadow-black"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#0a0a0a] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E11D35] rounded-full" />
            <span id="resume-modal-title" className="font-mono text-xs text-[#F5F5F5] uppercase tracking-wider font-bold">
              CURRICULUM VITAE // SALONI VAISH
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] hover:bg-[#252525] border border-blue-900/40 text-xs font-mono text-[#DBEAFE] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#93C5FD]/70 hover:text-[#60A5FA] transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0e0e0e] text-[#BFDBFE] font-sans">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-['Outfit'] font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#DBEAFE]">
                {profile.name}
              </h1>
              <p className="text-sm font-mono text-[#60A5FA] uppercase tracking-widest mt-1">
                {profile.role}
              </p>
            </div>
            <div className="text-xs font-mono text-[#93C5FD]/80 space-y-1">
              <div>{profile.email}</div>
              <div>{profile.location}</div>
              <div className="text-[#93C5FD]">Status: {profile.availability}</div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] border-b border-blue-900/40 pb-1">
              Executive Profile
            </h2>
            <p className="text-sm text-[#93C5FD]/85 leading-relaxed">
              Forward-thinking creative web developer with 1+ years of experience engineering high-performance web applications, modern websites, and interactive digital experiences. Proficient in modern React architectures, TypeScript invariants, and fluid micro-interaction design.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] border-b border-blue-900/40 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {background.map((item) => (
                <div key={item.company} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-[#DBEAFE]">{item.role}</span>
                    <span className="text-xs font-mono text-[#60A5FA]">{item.period}</span>
                  </div>
                  <div className="text-xs font-mono text-[#93C5FD]/75">{item.company}</div>
                  <p className="text-xs text-[#93C5FD]/80 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] border-b border-blue-900/40 pb-1">
              Academic Background
            </h2>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-[#DBEAFE]">{item.degree}</span>
                    <span className="text-xs font-mono text-[#60A5FA]">{item.period}</span>
                  </div>
                  <div className="text-xs font-mono text-[#93C5FD]/75">{item.institution}</div>
                  <p className="text-xs text-[#93C5FD]/80 leading-relaxed pt-0.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Arsenal */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] border-b border-blue-900/40 pb-1">
              Verified Technical Stack
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {skillsList.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-[#161616] border border-blue-900/40 text-xs font-mono text-[#DBEAFE]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
