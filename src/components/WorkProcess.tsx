import React, { useState } from "react";
import { Search, Compass, Layout, Code2, ShieldCheck, Rocket, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const WorkProcess: React.FC = () => {
  const { processSteps } = PORTFOLIO_DATA;
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Search className="w-5 h-5 text-[#E11D35]" />;
      case "02":
        return <Layout className="w-5 h-5 text-[#B8A4FF]" />;
      case "03":
        return <Code2 className="w-5 h-5 text-[#60A5FA]" />;
      case "04":
        return <ShieldCheck className="w-5 h-5 text-[#93C5FD]" />;
      case "05":
        return <Rocket className="w-5 h-5 text-[#3B82F6]" />;
      default:
        return <Compass className="w-5 h-5 text-[#60A5FA]" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#0c0c0c] relative border-t border-white/[0.06]">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#1E3A8A]/10 rounded-full blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#93C5FD] uppercase">
              <span>04</span>
              <span className="w-6 h-[1px] bg-[#2563EB]" />
              <span>METHODOLOGY & EXECUTION</span>
            </div>
            <h2 className="font-['Outfit'] font-black text-4xl sm:text-5xl md:text-6xl text-[#DBEAFE] uppercase tracking-tight">
              WORK PROCESS
            </h2>
            <p className="text-[#93C5FD]/80 text-base max-w-xl">
              A five-phase engineering discipline transforming ambitious design visions into battle-tested digital infrastructure.
            </p>
          </div>
          <div className="text-xs font-mono text-[#93C5FD] border-l border-[#2563EB] pl-3 py-1">
            ESTIMATED TIMELINE: 2 — 6 WEEKS SPRINT CADENCE
          </div>
        </div>

        {/* Vertical Timeline with 5 Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Subtle animated connecting line */}
          <div 
            className="absolute left-6 md:left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#1E3A8A] via-[#3B82F6] to-[#93C5FD] opacity-40" 
            aria-hidden="true"
          />

          <div className="space-y-8">
            {(processSteps || []).map((step, index) => {
              const isSelected = selectedStep === index;
              return (
                <div
                  key={step.number}
                  onClick={() => setSelectedStep(index)}
                  className={`group relative pl-16 md:pl-20 transition-all duration-300 cursor-pointer ${
                    isSelected ? "opacity-100" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Step Node Circle on Timeline */}
                  <div
                    className={`absolute left-2.5 md:left-4 top-2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isSelected
                        ? "bg-[#1E3A8A] border-[#3B82F6] text-white shadow-lg shadow-[#1E3A8A]/50 scale-110"
                        : "bg-[#111111] border-blue-900/40 text-[#93C5FD]/70 group-hover:border-[#3B82F6]"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content Card */}
                  <div
                    className={`p-6 md:p-8 bg-[#111111] border transition-all duration-300 ${
                      isSelected
                        ? "border-[#3B82F6]/60 shadow-xl shadow-black/40 bg-[#121620]"
                        : "border-blue-900/20 hover:border-blue-900/40"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-[#080808] border border-blue-900/30">
                          {getStepIcon(step.number)}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-[#60A5FA] font-bold tracking-widest uppercase">
                            PHASE {step.number}
                          </span>
                          <h3 className="font-['Outfit'] font-bold text-2xl text-[#DBEAFE] uppercase tracking-tight">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-[#93C5FD] uppercase tracking-wider">
                        {step.tagline}
                      </div>
                    </div>

                    <p className="text-[#93C5FD]/80 text-sm md:text-base leading-relaxed max-w-2xl">
                      {step.description}
                    </p>

                    {/* Deliverables tags */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono text-[#93C5FD]/70 uppercase tracking-wider mr-2">
                        Deliverables:
                      </span>
                      {step.deliverables.map((del) => (
                        <span
                          key={del}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#080808] border border-blue-900/40 text-xs font-mono text-[#BFDBFE]"
                        >
                          <Check className="w-3 h-3 text-[#60A5FA]" />
                          <span>{del}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
