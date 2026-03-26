export interface Project {
  id: number;
  category: string;
  title: string;
  year: string;
  desc: string;
  ascii: string;
  link: string;
}

export interface GithubRepo {
  name: string;
  desc: string;
  lang: string;
  stars: number;
  url: string;
}

export const NAV_ITEMS = [
  { key: "HOME",   label: "HOME" },
  { key: "RESUME", label: "RESUME" },
  { key: "GITHUB", label: "GITHUB" },
  { key: "DESIGN", label: "DESIGN" },
  { key: "ABOUT",  label: "ABOUT" },
] as const;

export type PageKey = typeof NAV_ITEMS[number]["key"];

export const CATEGORIES = ["ALL", "WEB DEV", "GRAPHIC DESIGN", "ART", "EVENTS"] as const;

export const PROJECTS: Project[] = [
  {
    id: 1,
    category: "WEB DEV",
    title: "Portfolio v1",
    year: "2024",
    desc: "Personal site built with React + Three.js. Scroll-driven animations, custom shader backgrounds.",
    ascii: `
 ┌─────────────┐
 │  </>  PORT  │
 │  FOLIO  v1  │
 │  ░░░░░░░░░  │
 │  ─────────  │
 └─────────────┘`,
    link: "#",
  },
  {
    id: 2,
    category: "WEB DEV",
    title: "Event Dashboard",
    year: "2024",
    desc: "Full-stack event management tool. Node.js, PostgreSQL, real-time updates via WebSockets.",
    ascii: `
 ┌─────────────┐
 │  ▓▓ DASH ▓▓ │
 │  ── ─── ──  │
 │  █ EVENT █  │
 │  ░░░░░░░░░  │
 └─────────────┘`,
    link: "#",
  },
  {
    id: 3,
    category: "GRAPHIC DESIGN",
    title: "Brand Identity",
    year: "2023",
    desc: "Complete brand identity system: logo suite, color palette, typography, brand guidelines doc.",
    ascii: `
 ┌─────────────┐
 │   ◈ BRAND  │
 │  ─────────  │
 │   IDENTITY  │
 │  ◈ ◈ ◈ ◈  │
 └─────────────┘`,
    link: "#",
  },
  {
    id: 4,
    category: "ART",
    title: "Ink & Digital",
    year: "2023",
    desc: "Mixed media series blending traditional ink drawings with digital manipulation and glitch effects.",
    ascii: `
 ┌─────────────┐
 │  ~~ ART ~~  │
 │  /\\  /\\  /\\ │
 │  ▒▒▒▒▒▒▒▒▒  │
 │  ink+digital│
 └─────────────┘`,
    link: "#",
  },
  {
    id: 5,
    category: "EVENTS",
    title: "Hackathon 2024",
    year: "2024",
    desc: "Organized 200+ person hackathon. Led sponsorship, logistics, judging, and workshop programming.",
    ascii: `
 ┌─────────────┐
 │  ★ HACK ★  │
 │  A THON 24  │
 │  200+ DEVS  │
 │  ─────────  │
 └─────────────┘`,
    link: "#",
  },
  {
    id: 6,
    category: "GRAPHIC DESIGN",
    title: "Poster Series",
    year: "2023",
    desc: "Series of 12 event posters exploring brutalist typography and geometric composition.",
    ascii: `
 ┌─────────────┐
 │  ▬▬ POST ▬▬ │
 │  ER SERIES  │
 │  ▪▪▪▪▪▪▪▪▪  │
 │  x12 PRINTS │
 └─────────────┘`,
    link: "#",
  },
  {
    id: 7,
    category: "EVENTS",
    title: "Design Workshop",
    year: "2024",
    desc: "Led Figma & design thinking workshop series for 80 students. Curriculum design + facilitation.",
    ascii: `
 ┌─────────────┐
 │  ◻ WORK  ◻  │
 │  ─  SHOP ─  │
 │  FIGMA + UX │
 │  80 STUDENTS│
 └─────────────┘`,
    link: "#",
  },
  {
    id: 8,
    category: "ART",
    title: "Zine Collection",
    year: "2022",
    desc: "Self-published zine collection. Hand-lettered, screen-printed covers, risograph interior pages.",
    ascii: `
 ┌─────────────┐
 │  ▣ ZINE ▣   │
 │  COLLECTION │
 │  hand-made  │
 │  ░ ░ ░ ░ ░  │
 └─────────────┘`,
    link: "#",
  },
];

export const GITHUB_REPOS: GithubRepo[] = [
  { name: "jas-dot-com",       desc: "This site. ASCII-art personal portfolio built with React.",               lang: "TypeScript", stars: 12, url: "https://github.com" },
  { name: "event-dashboard",   desc: "Full-stack event management system. Real-time WebSocket updates.",        lang: "JavaScript", stars: 8,  url: "https://github.com" },
  { name: "ascii-art-gen",     desc: "CLI tool to convert images into ASCII art with custom character sets.",   lang: "Python",     stars: 34, url: "https://github.com" },
  { name: "design-tokens-cli", desc: "Export Figma design tokens to CSS variables and JSON automatically.",     lang: "TypeScript", stars: 21, url: "https://github.com" },
  { name: "zine-template",     desc: "Open-source InDesign/Affinity templates for zine layout & printing.",     lang: "—",          stars: 56, url: "https://github.com" },
  { name: "hackathon-kit",     desc: "Starter kit for running university hackathons. Judging, logistics, etc.", lang: "JavaScript", stars: 17, url: "https://github.com" },
];

export const SKILLS = [
  "React", "TypeScript", "Node.js", "Python",
  "Figma", "Illustrator", "Photoshop", "PostgreSQL",
  "Three.js", "Git", "HTML/CSS", "Risograph",
];

export const INTERESTS = [
  "Risograph", "Zine-making", "Typography", "Hackathons",
  "Lo-fi music", "Rock climbing", "Matcha", "Film photography",
];