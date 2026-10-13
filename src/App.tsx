/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SelectedProjects } from "./components/SelectedProjects";
import { AboutEducationSkills } from "./components/AboutEducationSkills";
import { WorkProcess } from "./components/WorkProcess";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import { ResumeModal } from "./components/ResumeModal";
import { QuickTalkModal } from "./components/QuickTalkModal";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { CustomCursor } from "./components/CustomCursor";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeProvider } from "./context/ThemeContext";
import { Project } from "./data/portfolioData";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTalkOpen, setIsTalkOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#080808] text-[#BFDBFE] font-sans antialiased selection:bg-[#1E3A8A] selection:text-white relative">
        {/* Scroll Progress Bar at the Very Top */}
        <ScrollProgressBar />

        {/* Desktop Custom Cursor */}
        <CustomCursor />

        {/* Floating Theme Switcher Widget */}
        <ThemeSwitcher />

        {/* Navigation Bar */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTalk={() => setIsTalkOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <HeroSection onOpenTalk={() => setIsTalkOpen(true)} />

          {/* Selected Projects Showcase */}
          <SelectedProjects onSelectProject={(project) => setSelectedProject(project)} />

          {/* About, Education & Skills (3-Column Layout) */}
          <AboutEducationSkills />

          {/* Work Process (5-Step Vertical Timeline) */}
          <WorkProcess />

          {/* Contact Section with Laptop Mockup */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        <QuickTalkModal
          isOpen={isTalkOpen}
          onClose={() => setIsTalkOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
