import React, { useState, useRef, useEffect } from "react";
import { Palette, Check, Sparkles, X } from "lucide-react";
import { useTheme, ThemeId } from "../context/ThemeContext";

export const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme, availableThemes, themeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
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

  const handleSelectTheme = (id: ThemeId, name: string) => {
    setTheme(id);
    setToastMessage(`Theme changed to ${name}`);
    setIsOpen(false);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5 px-4 py-2.5 bg-black/90 text-white border border-white/20 shadow-2xl backdrop-blur-md text-xs font-mono uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Theme Button (Bottom Left for instant accessibility) */}
      <div ref={menuRef} className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2 px-3.5 py-2.5 bg-black/80 hover:bg-black text-white border border-white/15 hover:border-white/40 shadow-2xl backdrop-blur-md transition-all cursor-pointer"
          title="Change Theme"
          aria-label="Change Portfolio Theme"
        >
          <div
            className="w-3 h-3 rounded-full transition-transform group-hover:scale-110 shadow-sm"
            style={{ backgroundColor: themeConfig.primaryColor }}
          />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">
            {themeConfig.name}
          </span>
          <Palette className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
        </button>

        {/* Theme Drawer / Flyout */}
        {isOpen && (
          <div className="absolute bottom-12 left-0 mb-2 w-72 sm:w-80 bg-[#120C11] border border-white/20 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200 text-white z-50">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-white/80" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Select Visual Theme
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Close theme menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {availableThemes.map((t) => {
                const isActive = t.id === currentTheme;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectTheme(t.id, t.name)}
                    className={`w-full flex items-center justify-between p-2.5 text-left transition-all border cursor-pointer ${
                      isActive
                        ? "bg-white/10 border-white/40"
                        : "bg-black/30 border-white/5 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Color Palette Preview Swatch */}
                      <div className="flex items-center -space-x-1 shrink-0">
                        <span
                          className="w-4 h-4 rounded-full border border-black/40 shadow-sm"
                          style={{ backgroundColor: t.primaryColor }}
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-black/40 shadow-sm"
                          style={{ backgroundColor: t.accentColor }}
                        />
                        <span
                          className="w-4 h-4 rounded-full border border-black/40 shadow-sm"
                          style={{ backgroundColor: t.bgColor }}
                        />
                      </div>
                      <div>
                        <div className="font-['Outfit'] font-bold text-sm tracking-tight flex items-center gap-1.5">
                          {t.name}
                          {isActive && (
                            <span className="text-[10px] font-mono px-1 py-0.2 bg-white/20 text-white font-normal uppercase">
                              Active
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-white/60 font-mono">
                          {t.tagline}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <Check className="w-4 h-4 text-white shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
