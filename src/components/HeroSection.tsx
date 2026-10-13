import React from "react";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface HeroSectionProps {
  onOpenTalk: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTalk }) => {
  const { profile, stats } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#080808]">
      {/* Enormous Background Word: "PORTFOLIO" */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-['Outfit'] font-black text-[15vw] md:text-[18vw] leading-none tracking-tighter uppercase text-stroke-subtle block whitespace-nowrap opacity-40">
          PORTFOLIO
        </span>
      </div>

      {/* Atmospheric Ambient Glows behind Portrait */}
      <div 
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1E3A8A]/25 rounded-full blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/4 right-1/6 w-80 h-80 bg-[#3B82F6]/15 rounded-full blur-[120px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Handwritten Greeting, Bold Name, Role, Bio & CTAs */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-blue-900/40 text-xs font-mono text-[#F5F5F5]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
              </span>
              <span className="tracking-widest uppercase text-[11px] font-medium text-[#93C5FD]">
                {profile.availability}
              </span>
            </div>

            {/* Handwritten Greeting */}
            <div>
              <p className="font-['Caveat'] text-3xl md:text-4xl text-[#93C5FD] rotate-[-2deg] origin-left select-none mb-1">
                {profile.scriptIntro}
              </p>
              {/* Bold Name with Navy Blue styling */}
              <h1 className="font-['Outfit'] font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#DBEAFE] hover:text-[#BFDBFE] uppercase leading-[0.95] transition-colors">
                {profile.name}
              </h1>
            </div>

            {/* Role Header */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#2563EB]" />
              <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#60A5FA] font-['Outfit']">
                {profile.role}
              </p>
            </div>

            {/* Bio copy with navy blue tone */}
            <p className="text-[#93C5FD]/85 text-base md:text-lg leading-relaxed max-w-xl font-normal">
              {profile.bio}
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#F5F5F5] hover:bg-white text-[#080808] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-white/5 active:scale-[0.98]"
              >
                <span>Selected Works</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#1E3A8A]" />
              </a>

              <button
                type="button"
                onClick={onOpenTalk}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent border border-blue-900/50 hover:border-[#3B82F6] text-[#F5F5F5] hover:text-[#93C5FD] font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                <span>Initiate Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#60A5FA]" />
              </button>
            </div>
          </div>

          {/* Center-Right Area: Developer Portrait (Clean Editorial Presentation) */}
          <div className="lg:col-span-4 relative flex flex-col items-center order-first lg:order-none">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none aspect-[3/4] group">
              {/* Subtle Atmospheric Frame Backdrop */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10 pointer-events-none" 
              />
              <div 
                className="absolute -inset-1 bg-gradient-to-tr from-[#1E3A8A]/30 to-[#3B82F6]/20 opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-700"
              />
              
              {/* Portrait Container */}
              <div className="relative w-full h-full overflow-hidden border border-white/[0.1] bg-[#111111] shadow-2xl">
                <img
                  src={profile.portraitImage}
                  alt="Portrait of Saloni Vaish, Creative Web Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Clean Bottom Gradient to blend into dark canvas */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
                
                {/* Corner Accent Decorators */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#3B82F6]/70 pointer-events-none" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#3B82F6]/70 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#3B82F6]/70 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#3B82F6]/70 pointer-events-none" />

                {/* Subtle Editorial Tag Badge */}
                <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-white/70">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SV // CREATIVE DEV
                  </span>
                  <span className="text-white/40">2026 ED.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Statistics */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-4 lg:space-y-6 lg:pl-4">
            <div className="text-[10px] font-mono tracking-widest text-[#93C5FD] uppercase pb-1 border-b border-blue-900/30">
              METRICS & REACH
            </div>
            {(stats || []).map((stat) => {
              const val = String(stat.value || "");
              const hasSuffix = val.length > 1 && !/^\d+$/.test(val);
              const mainPart = hasSuffix ? val.slice(0, -1) : val;
              const suffixPart = hasSuffix ? val.slice(-1) : "";

              return (
                <div 
                  key={stat.label} 
                  className="p-3 bg-[#111111]/80 border border-blue-900/30 hover:border-[#3B82F6]/60 transition-colors"
                >
                  <div className="font-['Outfit'] font-extrabold text-2xl md:text-3xl text-[#DBEAFE] tabular-nums tracking-tight">
                    <span className="text-[#60A5FA]">{mainPart}</span>
                    {suffixPart && <span className="text-[#93C5FD]">{suffixPart}</span>}
                  </div>
                  <div className="text-xs text-[#93C5FD]/80 tracking-wide mt-0.5 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Hero Bottom Bar with Scroll Indicator and Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 flex items-center justify-between text-xs text-[#93C5FD]/80 border-t border-white/[0.06]">
        <div className="flex items-center gap-3">
          <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span className="font-mono text-[11px] tracking-wider uppercase text-[#BFDBFE]">
            React 19 • TypeScript • Next.js • Tailwind CSS • Three.js
          </span>
        </div>
        <a 
          href="#projects" 
          className="hidden sm:flex items-center gap-2 text-[#93C5FD] hover:text-[#DBEAFE] transition-colors font-mono text-[11px] uppercase tracking-wider"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#60A5FA]" />
        </a>
      </div>
    </section>
  );
};
