import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, FileText, Palette, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

const NavbarThemePicker: React.FC = () => {
  const { currentTheme, setTheme, availableThemes, themeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#93C5FD]/80 hover:text-[#DBEAFE] transition-colors px-2.5 py-1.5 border border-white/10 hover:border-white/25 cursor-pointer bg-black/20"
        title="Switch Visual Theme"
      >
        <span
          className="w-2.5 h-2.5 rounded-full inline-block shadow-sm"
          style={{ backgroundColor: themeConfig.primaryColor }}
        />
        <Palette className="w-3.5 h-3.5 text-[#60A5FA]" />
        <span className="hidden xl:inline">{themeConfig.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-[#120C11] border border-white/15 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
          <div className="text-[10px] font-mono uppercase tracking-wider text-white/50 px-2 py-1 border-b border-white/10 mb-1">
            Themes
          </div>
          <div className="space-y-1">
            {availableThemes.map((t) => {
              const active = t.id === currentTheme;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 text-xs transition-all cursor-pointer ${
                    active
                      ? "bg-white/15 text-white font-bold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full border border-black/30 shrink-0"
                      style={{ backgroundColor: t.primaryColor }}
                    />
                    <span className="font-['Outfit']">{t.name}</span>
                  </div>
                  {active && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTalk: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenTalk }) => {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#DBEAFE] whitespace-nowrap shrink-0"
          aria-label="Saloni Vaish Portfolio Home"
        >
          <span className="font-['Outfit'] font-extrabold tracking-wider text-xl group-hover:text-white transition-colors">
            {PORTFOLIO_DATA.profile.initials}
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform" />
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#93C5FD] ml-1 font-mono font-medium">
            CREATIVE DEV
          </span>
        </a>

        {/* Navigation Links Zone */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#93C5FD]/75">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#DBEAFE] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#2563EB] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Zone */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Quick Theme Switcher in Navbar */}
          <NavbarThemePicker />

          <button
            type="button"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#93C5FD]/80 hover:text-[#DBEAFE] transition-colors px-3 py-2 cursor-pointer"
            title="View Resume / CV"
          >
            <FileText className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={onOpenTalk}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-[#2563EB] active:scale-[0.98] transition-all rounded-none cursor-pointer shadow-lg shadow-[#1E3A8A]/30 border border-[#3B82F6]/30"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#93C5FD]" />
          </button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F5F5] hover:text-[#60A5FA] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0c0c0c] border-b border-white/[0.08] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#999999] hover:text-[#93C5FD] hover:translate-x-1 transition-all py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            {/* Mobile Theme Selection Row */}
            <div className="py-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                <Palette className="w-3.5 h-3.5" />
                <span>Visual Theme</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {availableThemes.map((t) => {
                  const active = t.id === currentTheme;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTheme(t.id)}
                      className={`flex items-center gap-2 px-2.5 py-1.5 text-xs transition-colors border text-left cursor-pointer ${
                        active
                          ? "bg-white/15 border-white/40 text-white font-bold"
                          : "bg-white/5 border-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: t.primaryColor }}
                      />
                      <span className="truncate">{t.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#999999] border border-white/[0.1] hover:text-[#93C5FD] transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#60A5FA]" />
              <span>View Resume</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTalk();
              }}
              className="flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-[#2563EB] transition-colors cursor-pointer"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 text-[#93C5FD]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
