export interface Project {
  id: number;
  category: "CSE" | "DESIGN" | "RESEARCH" | "EVENTS";
  title: string;
  year: string;
  desc: string;
  ascii: string;
  link: string;
  tags: string[];
}

export interface Experience {
  title: string;
  org: string;
  date: string;
  location: string;
  bullets: string[];
  skills: string[];
  category: "CSE" | "DESIGN" | "RESEARCH";
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

export const CATEGORIES = ["ALL", "CSE", "DESIGN", "RESEARCH", "EVENTS"] as const;
export type Category = typeof CATEGORIES[number];

export const PROJECTS: Project[] = [
  {
    id: 1,
    category: "CSE",
    title: "Dusk to Don",
    year: "2026",
    desc: "Business Lead for a hybrid hospitality concept targeting college towns. Built a $280k–$350k startup budget, break-even model (~143 daily customers), and designed 24 sound-dampened private cubicles with 1 Gbps fiber. Developed brand identity and go-to-market strategy.",
    ascii: `
 ┌─────────────┐
 │  ☕ DUSK   │
 │   TO DON   │
 │  ─────────  │
 │  study+eat  │
 └─────────────┘`,
    link: "#",
    tags: ["Business Dev", "Graphic Design", "Branding"],
  },
  {
    id: 2,
    category: "DESIGN",
    title: "Somus",
    year: "2026",
    desc: "FigBuild designathon project. Speculative wearable that tracks interoceptive load (HRV, muscle tension, respiratory rate, body temp) and triggers a grounding sequence before anxiety escalates. Designed full UI/UX in Figma.",
    ascii: `
 ┌─────────────┐
 │  ◎ SOMUS   │
 │  ─────────  │
 │  biometric  │
 │  wearable   │
 └─────────────┘`,
    link: "#",
    tags: ["Figma", "UI/UX", "Designathon"],
  },
  {
    id: 3,
    category: "DESIGN",
    title: "Umamii",
    year: "2025",
    desc: "Submission to Boston University's Catalyst 2025 UI/UX Designathon (Travel track). Swipe-based restaurant matching app designed to eliminate decision fatigue and excessive scrolling from travel and restaurant guide apps.",
    ascii: `
 ┌─────────────┐
 │  〜 UMAMII  │
 │  ─────────  │
 │  swipe to   │
 │  discover   │
 └─────────────┘`,
    link: "#",
    tags: ["Figma", "Adobe CC", "UI/UX"],
  },
  {
    id: 4,
    category: "DESIGN",
    title: "SWE EYH Logo",
    year: "2024",
    desc: "Won first place in UC Merced Society of Women Engineers' logo design contest for the yearly 'Expanding Your Horizons' event. Design was featured as the official event logo and T-shirt. Proposed monochromatic, grayscale, color, and purple variants.",
    ascii: `
 ┌─────────────┐
 │  ★ SWE ★   │
 │  EYH 2024   │
 │  ─────────  │
 │  1ST PLACE  │
 └─────────────┘`,
    link: "#",
    tags: ["Adobe CC", "Graphic Design", "Contest Winner"],
  },
  {
    id: 5,
    category: "DESIGN",
    title: "Kairos Design",
    year: "2023–2025",
    desc: "Graphic Design for Kairos UC Merced's Design Tech Crew. Produced event graphics, fundraiser materials, and promotional assets across 12+ pieces over two years.",
    ascii: `
 ┌─────────────┐
 │  ✦ KAIROS  │
 │  ─────────  │
 │  GRAPHIC    │
 │  DESIGN     │
 └─────────────┘`,
    link: "#",
    tags: ["Graphic Design", "UI/UX"],
  },
  {
    id: 6,
    category: "CSE",
    title: "ML with Python",
    year: "2024",
    desc: "Honors project for Machine Learning with Python certification. Developed a Python program to clean and apply classification algorithms to Australian Government rainfall datasets. Preprocessed data for optimal model accuracy.",
    ascii: `
 ┌─────────────┐
 │  ⌥  ML     │
 │  PYTHON     │
 │  ─────────  │
 │  kaggle+py  │
 └─────────────┘`,
    link: "https://github.com/jasmine-g-lau/MLwithPython",
    tags: ["Python", "Pandas", "Machine Learning"],
  },
  {
    id: 7,
    category: "CSE",
    title: "MIPS Algorithm",
    year: "2024",
    desc: "UC Merced Computer Organization course project. Implemented selection sort and recursive summation in MIPS assembly language, translating directly from C code.",
    ascii: `
 ┌─────────────┐
 │  > MIPS     │
 │  ASSEMBLY   │
 │  ─────────  │
 │  sort+recur │
 └─────────────┘`,
    link: "https://github.com/jasmine-g-lau/CSE-031",
    tags: ["MIPS Assembly", "C"],
  },
  {
    id: 8,
    category: "RESEARCH",
    title: "AI Chatbot",
    year: "2025",
    desc: "Built at StartNoo internship. Autonomous AI chatbot using LangChain handling 7+ support use cases with context-aware multi-turn conversation flows tailored to students, donors, universities, and nonprofits.",
    ascii: `
 ┌─────────────┐
 │  ⬡ AI BOT  │
 │  ─────────  │
 │  langchain  │
 │  multi-turn │
 └─────────────┘`,
    link: "#",
    tags: ["LangChain", "Python", "AI"],
  },
];
 
// ── Work Experience ───────────────────────────────────────────────────────────
 
export const EXPERIENCE: Experience[] = [
  {
    title: "Web Developer Student Assistant",
    org: "UC Merced — Office of Information Technology",
    date: "Dec 2024 – Present",
    location: "Merced, CA · Hybrid",
    category: "CSE",
    bullets: [
      "Built and maintained responsive campus applications using React, TypeScript, JavaScript, and Tailwind CSS",
      "Developed a production-ready internal component library by translating UX wireframes into reusable, design-system-compliant components",
      "Implemented WCAG-compliant accessibility patterns across 5+ web applications",
      "Conducted cross-browser testing and resolved rendering inconsistencies",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Accessibility"],
  },
  {
    title: "Research Assistant",
    org: "PADSYS Lab — Parallel & Distributed Systems Laboratory",
    date: "Feb 2025 – Present",
    location: "Merced, CA · Hybrid",
    category: "RESEARCH",
    bullets: [
      "Profiled CNN training workloads using strace to identify checkpointing and resource utilization bottlenecks",
      "Trained CNNs achieving 85% object detection accuracy on 10,000+ labeled images, optimizing YOLOv4 for real-world deployment",
      "Created matplotlib-based visualizations revealing CPU, memory, and I/O utilization patterns",
      "Researched checkpoint–restart mechanisms for distributed training environments",
    ],
    skills: ["YOLOv8", "Python", "PyTorch", "matplotlib"],
  },
  {
    title: "Data & AI Intern",
    org: "StartNoo",
    date: "Jun 2025 – Aug 2025",
    location: "New York, NY · Remote",
    category: "CSE",
    bullets: [
      "Built an autonomous AI chatbot using LangChain handling 7+ support use cases, reducing response time for common queries",
      "Engineered context-aware, multi-turn conversation flows for students, donors, universities, and nonprofits",
      "Built a Communities feature supporting 4+ user types across 14 distinct pages using Ruby on Rails and PostgreSQL",
      "Implemented discussion threads, events, and campaigns using optimized Active Record associations",
    ],
    skills: ["LangChain", "Python", "Ruby on Rails", "PostgreSQL"],
  },
  {
    title: "Research Assistant — EVOLabs",
    org: "University of California, Merced",
    date: "Jan 2025 – May 2025",
    location: "Merced, CA",
    category: "RESEARCH",
    bullets: [
      "Integrated LLMs into VR NPCs to enable natural language interaction for experimental psychology studies",
      "Developed behavior trees and autonomous agent pipelines in C++ with Unreal Engine 5",
      "Collaborated on AI-driven social simulations, supporting behavioral data collection and analysis",
    ],
    skills: ["OpenAI API", "Python", "C++", "Unreal Engine 5"],
  },
  {
    title: "Lab Intern — Simbrain",
    org: "University of California, Merced",
    date: "Jun 2024 – Dec 2024",
    location: "Merced, CA",
    category: "CSE",
    bullets: [
      "Identified bugs and authored detailed reports with proposed fixes to improve application stability",
      "Designed and implemented informational UI components using Kotlin and Markdown",
      "Assisted in testing neural network simulations representing cognitive processes",
    ],
    skills: ["Java", "Kotlin", "UI/UX"],
  },
  {
    title: "Blackstone Launchpad Student Intern",
    org: "UCM Innovation + Design Hub",
    date: "Jan 2024 – Dec 2024",
    location: "UC Merced · On-site",
    category: "DESIGN",
    bullets: [
      "Maintained the UC Merced Innovation website using Drupal and HTML",
      "Executed marketing strategies for workshops, hackathons, and innovation programs",
      "Produced multimedia marketing content — graphics, reels, and social campaigns",
      "Coordinated campus outreach through tabling, presentations, and student org partnerships",
    ],
    skills: ["Drupal", "Adobe CC", "Graphic Design", "HTML"],
  },
];
 
// ── Education ─────────────────────────────────────────────────────────────────
 
export const EDUCATION = {
  degree: "B.S. Computer Science & Engineering",
  school: "University of California, Merced",
  date: "2022 – 2026",
  details: "Relevant coursework: Data Structures, Algorithms, Computer Organization, Machine Learning, Human-Computer Interaction.",
};
 
// ── Skills ────────────────────────────────────────────────────────────────────
 
export const SKILLS = {
  cse:    ["React", "TypeScript", "JavaScript", "Python", "Tailwind CSS", "Ruby on Rails", "PostgreSQL", "LangChain", "C++", "Java", "MIPS Assembly", "Node.js"],
  design: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe CC", "UI/UX", "Graphic Design", "Branding"],
  other:  ["Git", "Drupal", "Unreal Engine 5", "YOLOv8", "matplotlib", "Pandas", "Kotlin"],
};
 
export const INTERESTS = [
  "Risograph", "Zine-making", "Typography", "Hackathons",
  "Matcha", "Film photography", "Designathons", "Rock climbing",
];
 
// ── GitHub repos ──────────────────────────────────────────────────────────────
 
export const GITHUB_REPOS: GithubRepo[] = [
  { name: "MLwithPython",  desc: "Honors project — classification algorithms applied to Australian rainfall datasets.", lang: "Python",     stars: 0, url: "https://github.com/jasmine-g-lau/MLwithPython" },
  { name: "CSE-031",       desc: "MIPS assembly: selection sort and recursive summation translated from C.",           lang: "MIPS",       stars: 0, url: "https://github.com/jasmine-g-lau/CSE-031" },
];