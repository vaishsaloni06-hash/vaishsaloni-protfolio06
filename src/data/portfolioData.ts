export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  metrics: string[];
  liveUrl: string;
  repoUrl: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "SALONI VAISH",
    initials: "SV.",
    scriptIntro: "Hello, I'm",
    role: "WEB DEVELOPER & CREATIVE DEVELOPER",
    headline: "Building bold digital architecture and editorial web experiences.",
    bio: "Passionate about building modern websites and immersive digital experiences where mathematical precision meets high-fashion dark luxury aesthetics. Dedicated to sub-second load times, fluid physics, and uncompromising typography.",
    availability: "AVAILABLE FOR Web development",
    location: "Dehradun",
    email: "vaishsaloni06@gmail.com",
    githubUrl: "https://github.com/vaishsaloni06-hash",
    linkedinUrl: "https://www.linkedin.com/in/saloni-vaish-931795389",
    instagramlink: "https://www.instagram.com/saloni.vaish_",
    portraitImage: "/src/assets/images/saloni_profile_1791916193429.jpg",
    workspaceImage: "/src/assets/images/laptop_workspace_1791916284883.jpg",
  },
  stats: [
    { value: "8+", label: "Projects Completed" },
    { value: "1+", label: "Years Experience" },
    { value: "16+", label: "Technologies Mastered" },
    { value: "100%", label: "Client Satisfaction" },
  ],
  projects: [
    {
      id: "aeterna",
      number: "01",
      title: "AETERNA Haute Horlogerie",
      category: "E-Commerce Website",
      year: "2026",
      tagline: "Ultra-luxury Swiss timepiece boutique with 3D product showcase",
      description: "A headless luxury e-commerce platform engineered with bespoke typography, fluid cart micro-interactions, high-resolution horological showcases, and an instant checkout flow optimized for global high-net-worth clients.",
      image: "/src/assets/images/project_ecommerce_1791916212253.jpg",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Stripe", "Zustand"],
      metrics: ["+184% Conversion Rate", "99 Lighthouse Score", "< 0.8s First Paint"],
      liveUrl: "https://aeterna-luxury.example.com",
      repoUrl: "https://github.com/salonivaish/aeterna-ecommerce",
      highlights: [
        "Interactive 3D timepiece material customizer",
        "Sub-second page transitions via prefetching",
        "Bespoke audio micro-clicks and luxury cart sheet"
      ],
    },
    {
      id: "aether",
      number: "02",
      title: "AETHER Cloud Intelligence",
      category: "SaaS Dashboard",
      year: "2025",
      tagline: "Real-time telemetry and executive forecasting suite",
      description: "An enterprise SaaS analytics command deck visualizing over 50,000 live streaming events per second. Features obsidian glass widgets, live interactive anomaly detection, and customizable multi-metric canvases.",
      image: "/src/assets/images/project_saas_1791916233040.jpg",
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "WebSockets", "D3.js", "Node.js"],
      metrics: ["50k+ Live Events/sec", "< 16ms Render Budget", "4.9/5 User Rating"],
      liveUrl: "https://aether-analytics.example.com",
      repoUrl: "https://github.com/salonivaish/aether-saas",
      highlights: [
        "WebWorker-driven high-frequency chart rendering",
        "Custom dark luxury data visualization palette",
        "Zero-latency multi-tenant state orchestration"
      ],
    },
    {
      id: "raw-agency",
      number: "03",
      title: "RAW // Studio & Architecture",
      category: "Creative Agency Website",
      year: "2025",
      tagline: "Award-winning brutalist portfolio for an avant-garde design studio",
      description: "An editorial portfolio built for a renowned architectural practice. Combines oversized modernist typography, dynamic grid disruption, smooth locomotive scrolling, and interactive spatial archives.",
      image: "/src/assets/images/project_agency_1791916258790.jpg",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GLSL Shaders", "Contentful"],
      metrics: ["Awwwards Site of the Day", "FWA Nominee", "450k+ Impressions"],
      liveUrl: "https://raw-architecture.example.com",
      repoUrl: "https://github.com/salonivaish/raw-creative",
      highlights: [
        "Custom canvas cursor physics and magnetic buttons",
        "Dynamic layout morphing on scroll velocity",
        "Fluid responsive typography with strict baseline rhythm"
      ],
    },
  ] as Project[],
  education: [
    {
      degree: "BCA. in Computer Science & Artificial intelligence",
      institution: "ICFAI University, Dehradun",
      period: "2025 - 2028",
      description: "Specialized in Computer Science, Artificial Intelligence, and modern software architectures.",
    },
  ],
  background: [
    {
      role: "Lead Creative Developer",
      company: "Studio Hyperion",
      period: "2025 - Present",
      description: "Directing frontend architecture for tier-one global brands across fashion, finance, and automotive sectors. Spearheading modern React migrations and bespoke design systems.",
    },
    {
      role: "Web Developer",
      company: "Vesper Labs",
      period: "2025 - Present",
      description: "Architected high-throughput financial analytics interfaces, authored core component libraries, and optimized web performance to 99+ Lighthouse scores.",
    },
  ],
  skillsList: [
    "HTML5",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Responsive Web Design",
    "Three.js",
    "REST APIs",
    "GraphQL",
    "Figma",
    "Web Performance",
  ],
  skillCategories: [
    {
      name: "Core Development",
      skills: ["React 19", "Next.js", "TypeScript", "JavaScript (ESNext)", "HTML5 Semantic", "CSS3 / Modern CSS"],
    },
    {
      name: "Styling & Motion",
      skills: ["Tailwind CSS", "Framer Motion", "Three.js / WebGL", "Responsive Design", "Design Systems", "CSS Grid & Flexbox"],
    },
    {
      name: "Backend & Systems",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Git & GitHub", "Vercel / Cloud CI/CD"],
    },
  ] as SkillCategory[],
  philosophy: {
    quote: "Good code is invisible; extraordinary code moves the human spirit.",
    body: "I reject generic developer templates and soulless layouts. Every website I construct is treated as an editorial masterpiece: structured with mathematical discipline, responsive to the microsecond, and infused with tactile visual elegance.",
    signature: "Saloni.Vaish_<3",
  },
  processSteps: [
    {
      number: "01",
      title: "Discover",
      tagline: "Uncover Brand DNA & Core Objectives",
      description: "I deconstruct the brand ethos, audience mental models, functional requirements, and technical constraints to establish a bulletproof strategic foundation.",
      deliverables: ["Product Specification", "Audience Persona Audit", "Tech Stack Architecture Plan"],
    },
    {
      number: "02",
      title: "Plan",
      tagline: "System Architecture & Editorial Wireframes",
      description: "Architecting interactive wireframes, modular component hierarchies, strict typography scales, and performance budgets before writing a single line of code.",
      deliverables: ["Component Hierarchy", "Design Tokens & Grids", "Performance & SEO Budgets"],
    },
    {
      number: "03",
      title: "Develop",
      tagline: "Precision Engineering & Fluid Motion",
      description: "Writing pristine, type-safe TypeScript with semantic React components, optimized Tailwind CSS, and hardware-accelerated micro-animations that respond instantaneously.",
      deliverables: ["Clean Modular Codebase", "Zero-Latency UI Systems", "Responsive Mobile Refinements"],
    },
    {
      number: "04",
      title: "Test",
      tagline: "Cross-Device Verification & Speed Audit",
      description: "Subjecting every view to extreme scrutiny: WCAG 2.1 AA accessibility standards, cross-browser compatibility, touch usability, and Lighthouse 100 performance benchmarking.",
      deliverables: ["Lighthouse 100 Audit", "WCAG AA Verification", "Multi-Device Cross-Testing"],
    },
    {
      number: "05",
      title: "Deliver",
      tagline: "Edge Deployment & Flawless Handoff",
      description: "Deploying to ultra-fast global edge infrastructure with automated CI/CD pipelines, complete architectural documentation, and continuing technical guidance.",
      deliverables: ["Production Edge Deployment", "Clean Handoff Documentation", "30-Day Post-Launch Support"],
    },
  ] as ProcessStep[],
};
