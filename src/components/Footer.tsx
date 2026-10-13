import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/[0.06] text-[#93C5FD]/75 text-xs font-mono py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand mark */}
          <div className="flex items-center gap-3">
            <span className="font-['Outfit'] font-extrabold text-lg text-[#DBEAFE] tracking-wider">
              {profile.name}
            </span>
            <span className="text-[#3B82F6]">/</span>
            <span className="text-xs uppercase tracking-widest text-[#93C5FD]">
              PORTFOLIO 2026
            </span>
          </div>

          {/* Local Time in Dehradun */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="text-[#93C5FD]/80">DEHRADUN (IST):</span>
            <span className="text-[#BFDBFE] font-bold tabular-nums">
              {time || "16:30:00"} IST
            </span>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#111111] hover:bg-[#1a1a1a] text-[#DBEAFE] border border-blue-900/40 hover:border-[#3B82F6] hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#60A5FA]" />
          </button>
        </div>

        {/* Bottom copyright & navigation links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#93C5FD]/70">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            <span>•</span>
            <span>Editorial Dark Luxury Edition</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#93C5FD]/80 hover:text-[#DBEAFE] transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#93C5FD]/80 hover:text-[#DBEAFE] transition-colors"
            >
              LinkedIn
            </a>
            {profile.instagramlink && (
              <a
                href={profile.instagramlink}
                target="_blank"
                rel="noreferrer"
                className="text-[#93C5FD]/80 hover:text-[#DBEAFE] transition-colors"
              >
                Instagram
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="text-[#93C5FD]/80 hover:text-[#DBEAFE] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
