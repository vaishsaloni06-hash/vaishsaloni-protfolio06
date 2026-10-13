import React, { useState, useEffect } from "react";
import { X, Send, Check } from "lucide-react";

interface QuickTalkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickTalkModal: React.FC<QuickTalkModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timeline: "Immediate / 2 Weeks",
    budget: "$5,000 — $15,000+",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#111111] border border-white/[0.12] p-6 sm:p-8 shadow-2xl shadow-black space-y-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="talk-modal-title"
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <h3 id="talk-modal-title" className="font-['Outfit'] font-bold text-lg text-[#DBEAFE] uppercase tracking-wide">
              Initiate Project Inquiry
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#93C5FD]/70 hover:text-[#DBEAFE] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {status === "success" ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-blue-950/40 border border-[#3B82F6] text-[#60A5FA] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-['Outfit'] font-bold text-xl text-[#DBEAFE]">
              Inquiry Dispatched
            </h4>
            <p className="text-xs font-mono text-[#93C5FD]/80">
              Thank you! I will review your specifications and reply to {formData.email || "you"} within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="quick-name" className="text-xs font-mono uppercase text-[#93C5FD]">
                Name *
              </label>
              <input
                id="quick-name"
                required
                type="text"
                placeholder="Your Name / Studio"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#080808] border border-blue-900/40 focus:border-[#3B82F6] focus:outline-none text-sm text-[#EFF6FF] font-sans placeholder-[#475569]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="quick-email" className="text-xs font-mono uppercase text-[#93C5FD]">
                Email Address *
              </label>
              <input
                id="quick-email"
                required
                type="email"
                placeholder="name@organization.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#080808] border border-blue-900/40 focus:border-[#3B82F6] focus:outline-none text-sm text-[#EFF6FF] font-sans placeholder-[#475569]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="quick-timeline" className="text-xs font-mono uppercase text-[#93C5FD]">
                  Timeline
                </label>
                <select
                  id="quick-timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#080808] border border-blue-900/40 focus:border-[#3B82F6] text-xs text-[#EFF6FF] font-sans"
                >
                  <option value="Immediate / 2 Weeks">Immediate / 2 Weeks</option>
                  <option value="1 — 2 Months">1 — 2 Months</option>
                  <option value="Flexible / Q1">Flexible / Q1</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="quick-budget" className="text-xs font-mono uppercase text-[#93C5FD]">
                  Budget Scope
                </label>
                <select
                  id="quick-budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#080808] border border-blue-900/40 focus:border-[#3B82F6] text-xs text-[#EFF6FF] font-sans"
                >
                  <option value="$5k — $10k">$5k — $10k</option>
                  <option value="$10k — $25k">$10k — $25k</option>
                  <option value="$25k+ Enterprise">$25k+ Enterprise</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="quick-message" className="text-xs font-mono uppercase text-[#93C5FD]">
                Brief Overview *
              </label>
              <textarea
                id="quick-message"
                required
                rows={3}
                placeholder="Describe your design goals, timeline or features..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#080808] border border-white/[0.1] focus:border-[#3B82F6] focus:outline-none text-sm text-[#F5F5F5] font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 bg-[#1E3A8A] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#1E3A8A]/30 border border-[#3B82F6]/30 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span>DISPATCHING...</span>
              ) : (
                <>
                  <span>DISPATCH INQUIRY</span>
                  <Send className="w-3.5 h-3.5 text-[#93C5FD]" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
