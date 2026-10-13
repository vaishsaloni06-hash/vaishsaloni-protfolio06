import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeId =
  | "ruby-noir"
  | "emerald-matrix"
  | "amethyst-nebula"
  | "amber-gold"
  | "midnight-navy"
  | "studio-light";

export interface ThemeOption {
  id: ThemeId;
  name: string;
  tagline: string;
  primaryColor: string;
  accentColor: string;
  bgColor: string;
  isLight?: boolean;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "ruby-noir",
    name: "Ruby Noir",
    tagline: "Crimson & Obsidian Luxury",
    primaryColor: "#E11D48",
    accentColor: "#FB7185",
    bgColor: "#090608",
  },
  {
    id: "emerald-matrix",
    name: "Obsidian Emerald",
    tagline: "Matrix Jade & Deep Carbon",
    primaryColor: "#059669",
    accentColor: "#34D399",
    bgColor: "#040A06",
  },
  {
    id: "amethyst-nebula",
    name: "Amethyst Nebula",
    tagline: "Cosmic Violet & Lilac Glow",
    primaryColor: "#7C3AED",
    accentColor: "#A78BFA",
    bgColor: "#07050F",
  },
  {
    id: "amber-gold",
    name: "Amber Bronze",
    tagline: "Warm Espresso & 24k Gold",
    primaryColor: "#D97706",
    accentColor: "#FBBF24",
    bgColor: "#090704",
  },
  {
    id: "midnight-navy",
    name: "Midnight Sapphire",
    tagline: "Deep Electric Navy & Ice",
    primaryColor: "#1E3A8A",
    accentColor: "#60A5FA",
    bgColor: "#080808",
  },
  {
    id: "studio-light",
    name: "Studio Paper",
    tagline: "Architectural Clean Light",
    primaryColor: "#0F172A",
    accentColor: "#2563EB",
    bgColor: "#F8FAFC",
    isLight: true,
  },
];

interface ThemeContextType {
  currentTheme: ThemeId;
  themeConfig: ThemeOption;
  setTheme: (theme: ThemeId) => void;
  availableThemes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "portfolio_theme_active";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null) : null;
    if (saved && THEME_OPTIONS.some((t) => t.id === saved)) {
      return saved;
    }
    return "ruby-noir";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
    } catch {
      // ignore localstorage error
    }
  }, [currentTheme]);

  const themeConfig =
    THEME_OPTIONS.find((t) => t.id === currentTheme) || THEME_OPTIONS[0];

  const setTheme = (theme: ThemeId) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeConfig,
        setTheme,
        availableThemes: THEME_OPTIONS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
