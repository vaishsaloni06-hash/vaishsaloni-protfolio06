import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Check if pointer is fine and not prefers-reduced-motion
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('a, button, input, textarea, select, [role="button"], article');
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? "w-12 h-12 scale-110"
            : "w-8 h-8 scale-100"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          borderColor: isHovered ? "var(--accent)" : "rgba(255,255,255,0.35)",
          backgroundColor: isHovered ? "var(--primary-subtle)" : "transparent",
        }}
      />
      {/* Center dot */}
      <div
        className={`fixed top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ${
          isHovered ? "w-2 h-2" : "w-1.5 h-1.5"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          backgroundColor: "var(--accent)",
        }}
      />
    </div>
  );
};
