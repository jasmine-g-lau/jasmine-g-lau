export interface Project {
  id: string;
  category: "ENGINEERING" | "DESIGN";
  title: string;
  org?: string;

  date: string;
  location?: string;
  images?: string[];
  desc: string;
  bullets: string[];
  skills: string[];
  role: "Course Project" | "Personal" | "Contest" | "Designathon" | "Student Organization";

  link: string;
  
  deliverables?: {
    title: string;
    desc?: string;
    images?: string[];
    link?: string;
    linkText?: string;
  }[];
}

export interface Experience {
  id: string;
  category: "ENGINEERING" | "DESIGN";
  title: string;
  org: string;

  date: string;
  location: string;
  images?: string[];
  desc: string;
  bullets: string[];
  skills: string[];
  role: "Research" | "Internship" | "Full Time";

  link?: string;
}

export const NAV_ITEMS = [
  { key: "HOME",   label: "HOME" },
  { key: "ENGINEERING", label: "ENGINEERING" },
  { key: "DESIGN", label: "DESIGN" },
  { key: "ABOUT",  label: "ABOUT" },
] as const;

export type PageKey = typeof NAV_ITEMS[number]["key"];

export const CATEGORIES = ["ALL", "ENGINEERING", "DESIGN"] as const;
export type Category = typeof CATEGORIES[number];

export const PROJECTS: Project[] = [
  {
    id: "dusk-to-don",
    category: "DESIGN",
    title: "Dusk to Don",
    org: "Alpha Kappa Psi",

    date: "Feb - April 2026",
    location: "Merced, CA",
    images: ["",],
    desc: "Business Lead for a hybrid hospitality concept targeting college towns. Built a $280k–$350k startup budget, break-even model (~143 daily customers), and designed 24 sound-dampened private cubicles with 1 Gbps fiber. Developed brand identity and go-to-market strategy.",
    bullets: [
      "Built a $280k–$350k startup budget and break-even model for a hybrid hospitality concept.",
      "Designed 24 sound-dampened private cubicles with 1 Gbps fiber for focused work sessions.",
      "Created brand identity and go-to-market strategy for college-town customers.",
    ],
    skills: ["Business Dev", "Graphic Design", "Branding", "Marketting"],
    role: "Student Organization",
    
    link: "https://www.instagram.com/dusktodon_209/",

    deliverables: [
      {
        title: "First 100 Dine-In Orders Promotion",
        desc: "Promotional social media graphic created for the annual fundraiser.",
        images: ["images/d2d-100.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DV1_J-JD0Kx/",
        linkText: "View Promotion Instagram Post"
      },
      {
        title: "Matcha Latte Spotlight",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-matcha.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DVzOU1zEoXq/",
        linkText: "View Spotlight Instagram Post"
      },
      {
        title: "Tonkatsu Ramen Spotlight",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-tonkatsu.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DVzOHlVksXa/",
        linkText: "View Spotlight Instagram Post"
      },
      {
        title: "Spicy Miso Ramen Spotlight",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-spicy-miso.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DVzN74MEoHL/",
        linkText: "View Spotlight Instagram Post"
      },
      {
        title: "Tonkatsu Udon Spotlight",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-t-udon.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DVzNyF_kjza/",
        linkText: "View Spotlight Instagram Post"
      },
      {
        title: "Curry Udon Spotlight",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-curry.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DVzNyF_kjza/",
        linkText: "View Spotlight Instagram Post"
      },
      {
        title: "Giveaway Raffle Promotion",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-giveaway-1.jpg", "images/d2d-giveaway-2.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DVxQDr_EYQU/",
        linkText: "View Promotion Instagram Post"
      },
      {
        title: "Book to Bowl Tagline Promotion",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-tagline.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DVui6H_Ebgm/",
        linkText: "View Promotion Instagram Post"
      },
      {
        title: "Menu",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-menu.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DVufydfkZqG/",
        linkText: "View Menu Instagram Post"
      },
      {
        title: "Dusk to Don Coming Soon Promotion 2",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-coming-soon-2.png"],
        link: "https://www.instagram.com/dusktodon_209/p/DVueSzUmopc/",
        linkText: "View Promotion Instagram Post"
      },
      {
        title: "Coming Soon Promotion",
        desc: "Main poster design for the end-of-year dance showcase.",
        images: ["images/d2d-coming-soon.jpg"],
        link: "https://www.instagram.com/dusktodon_209/p/DVuD7efknyU/",
        linkText: "View Promotion Instagram Post"
      },

    ]
  },
  {
    id: "akspi",
    category: "DESIGN",
    title: "Event Promotion",
    org: "Alpha Kappa Psi",

    date: "Feb - April 2026",
    location: "Merced, CA",
    images: ["",],
    desc: "Graphics to promote fundraisers, external events, financial literacy workshops, and professional development workshops",
    bullets: [
      "Produced social media promotional material supporting marketing, outreach, and campus events.",
      "Collaborated with various committee teams to create visuals that are informative and eye-catching.",
    ],
    skills: ["Graphic Design", "Branding", "Marketting"],
    role: "Student Organization",
    
    link: "",

    deliverables: [
      {
        title: "External Event",
        desc: "Promotional social media graphic created for the annual fundraiser.",
        images: ["images/akpsi-external.png"],
        // link: "https://www.instagram.com/dusktodon_209/p/DV1_J-JD0Kx/",
        // linkText: "View Promotion Instagram Post"
      },
      {
        title: "Financial Workshop",
        desc: "Promotional social media graphic created for the annual fundraiser.",
        images: ["images/akpsi-fin.png"],
        // link: "https://www.instagram.com/dusktodon_209/p/DV1_J-JD0Kx/",
        // linkText: "View Promotion Instagram Post"
      },
      {
        title: "Hot Cocoa Fundraiser",
        desc: "Promotional social media graphic created for the annual fundraiser.",
        images: ["images/akpsi-fundraiser.png"],
        // link: "https://www.instagram.com/dusktodon_209/p/DV1_J-JD0Kx/",
        // linkText: "View Promotion Instagram Post"
      },
      {
        title: "Shark Tank Professional Workshop",
        desc: "Promotional social media graphic created for the annual fundraiser.",
        images: ["images/akpsi-sharktank.png"],
        // link: "https://www.instagram.com/dusktodon_209/p/DV1_J-JD0Kx/",
        // linkText: "View Promotion Instagram Post"
      },
    ]
  },
  {
    id: "somus",
    category: "DESIGN",
    title: "Somus",
    org: "FigBuild 2026",


    date: "April 2026",
    location: "Remote",
    images: ["images/somus-logo.jpg", "images/somus-wireframe.jpg"],
    desc: "FigBuild designathon project. Speculative wearable that tracks interoceptive load (HRV, muscle tension, respiratory rate, body temp) and triggers a grounding sequence before anxiety escalates. Designed full UI/UX in Figma.",
    bullets: [
      "Designed a wearable concept that tracks interoceptive load and triggers grounding support.",
      "Created UI/UX flows and screens in Figma for anxiety prevention and user reflection.",
      "Developed a speculative product narrative for prototypes shown in a designathon setting.",
      "Prototype: figma.com/file/9WnPR3vcwFeRK9k6oJnVLq/Somus-Prototype"
    ],
    skills: ["Figma", "UI/UX", "Designathon"],
    role: "Designathon",

    link: "https://www.figma.com/deck/EEPIQUHkV4YspuT9fIWnRG/Somus-2026?node-id=46-107",
  },
  {
    id: "umamii",
    category: "DESIGN",
    title: "Umamii",
    org: "Catalyst 2025 Designathon",

    date: "April 2025",
    location: "Remote",
    images: ["images/umamii-logo.jpg", "images/umamii-branddeck.jpg"],
    desc: "Submission to Boston University's Catalyst 2025 UI/UX Designathon (Travel track). Swipe-based restaurant matching app designed to eliminate decision fatigue and excessive scrolling from travel and restaurant guide apps.",
    bullets: [
      "Designed a swipe-based restaurant matching experience to reduce decision fatigue.",
      "Built UX flows for travel-focused restaurant discovery and personalized recommendations.",
      "Created interaction patterns that minimized scrolling and simplified exploration.",
    ],
    skills: ["Figma", "Adobe CC", "UI/UX"],
    role: "Designathon",

    link: "https://devpost.com/software/umamii",

  },
  {
    id: "eyh-logo",
    category: "DESIGN",
    title: "SWE EYH Logo",
    org: "UC Merced SWE",

    date: "December 2024",
    location: "Merced, CA",
    images: ["images/swe-eyh-bw.jpg", "images/swe-eyh-mono.jpg", "images/swe-eyh-p.jpg"],
    desc: "Won first place in UC Merced Society of Women Engineers' logo design contest for the yearly 'Expanding Your Horizons' event. Design was featured as the official event logo and T-shirt. Proposed monochromatic, grayscale, color, and purple variants.",
    bullets: [
      "Designed an award-winning logo for the Expanding Your Horizons event.",
      "Produced brand variations for print, digital, and apparel applications.",
      "Delivered a visual system that aligned with SWE's conference identity and accessibility goals.",
    ],
    skills: ["Adobe CC", "Graphic Design", "Contest Winner", "Branding"],
    role: "Contest",

    link: "https://www.linkedin.com/in/jasmine-giching-lau/overlay/Project/1153609903/image-list/?profileId=ACoAADgQPtEB2M8CCmb5bFe8cRP5La5a7pNfl0c",
  },
  {
    id: "kairos",
    category: "DESIGN",
    title: "Kairos Design",
    org: "Kairos Dance Group",

    date: "Sep 2023 – March 2025",
    location: "Merced, CA",
    images: [""],
    desc: "Graphic Design for Kairos UC Merced's Design Tech Crew. Produced event graphics, fundraiser materials, and promotional assets across 12+ pieces over two years.",
    bullets: [
      "Designed event graphics, promotional assets, and fundraiser materials for campus programs.",
      "Produced 12+ design pieces supporting marketing, outreach, and campus events.",
      "Collaborated with student leadership to align visuals with Kairos' creative brand.",
    ],
    skills: ["Graphic Design", "UI/UX", "Marketting"],
    role: "Student Organization",

    link: "#",

    deliverables: [
    {
      title: "Valentine's Day Fundraiser",
      desc: "Promotional social media graphic created for the annual fundraiser.",
      images: ["images/kairos-valentines-1.jpg", "images/kairos-valentines-2.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/DGCog1hRKMB/",
      linkText: "View Valentines Instagram Post"
    },
    {
      title: "Lunar New Year Social",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-lny.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/DFYtc7CTEvv/",
      linkText: "View Social Instagram Post"
    },
    {
      title: "Sponsored Units",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-sponsored-1.jpg", "images/kairos-sponsored-2.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/DBZocJ_TbjB/",
      linkText: "View Unit Instagram Post"
    },
    {
      title: "Movie Social",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-movie.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/DBLGVeURBen/",
      linkText: "View Social Instagram Post"
    },
    {
      title: "Bong Ga Ka Day Subunit",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-hotdog.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/DA9gRTASS4u/",
      linkText: "View Subunit Instagram Post"
    },
    {
      title: "Member Dues Announcement",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-dues-1.jpg", "images/kairos-dues-2.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/DA1MprhSv9f/",
      linkText: "View Dues Instagram Post"
    },
    {
      title: "Boyfriend Day Fundraiser",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-bf.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/DAmPXCYTFFf/",
      linkText: "View BF Day Fundraiser Instagram Post"
    },
    {
      title: "ASIP Fundraiser",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-asip-1.jpg", "images/kairos-asip-2.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/DARaZE1TYHV/",
      linkText: "View ASIP Fundraiser Post"
    },
    {
      title: "Charm Making Social",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-charm.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/C6cGQLNSZJE/",
      linkText: "View Social Post"
    },
    {
      title: "Summer Crafts Social",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-summer.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/C51e5HLSZgU/",
      linkText: "View Social Instagram Post"
    },
    {
      title: "RRR Cultural",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-rrr.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/C5T7tjWS51k/",
      linkText: "View Cultural Instagram Post"
    },
    {
      title: "Indoor Picnic Social",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-picnic.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/C4rmgxPLiET/",
      linkText: "View Social Instagram Post"
    },
    {
      title: "UndocuPride Cultural",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-undocupride.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/C33aVqnyYRE/",
      linkText: "View Cultural Instagram Post"
    },
    {
      title: "ETA Subunit",
      desc: "Main poster design for the end-of-year dance showcase.",
      images: ["images/kairos-eta.jpg"],
      link: "https://www.instagram.com/ucmkairos/p/C2-x_URScFS/",
      linkText: "View Subunit Instagram Post"
    },
  ],

  },
  {
    id: "ml-python",
    category: "ENGINEERING",
    title: "ML with Python",
    
    date: "2024",
    images: [""],
    desc: "Honors project for Machine Learning with Python certification. Developed a Python program to clean and apply classification algorithms to Australian Government rainfall datasets. Preprocessed data for optimal model accuracy.",
    bullets: [
      "Built data-cleaning pipelines for Australian Government rainfall datasets.",
      "Applied classification algorithms and evaluated model performance.",
      "Optimized preprocessing to improve prediction accuracy and reliability.",
    ],
    skills: ["Python", "Pandas", "Machine Learning"],
    role: "Course Project",

    link: "https://github.com/jasmine-g-lau/MLwithPython",
  },
  {
    id: "mips-algo",
    category: "ENGINEERING",
    title: "MIPS Algorithm",

    date: "2024",
    images: [""],
    desc: "UC Merced Computer Organization course project. Implemented selection sort and recursive summation in MIPS assembly language, translating directly from C code.",
    bullets: [
      "Implemented selection sort and recursive summation using MIPS assembly.",
      "Translated C-language logic into low-level instruction sequences.",
      "Tested assembly workflows for correctness and performance.",
    ],
    skills: ["MIPS Assembly", "C"],
    role: "Course Project",
    
    link: "https://github.com/jasmine-g-lau/CSE-031",
  },
];


export const EXPERIENCE: Experience[] = [
  {
    id: "oit-web-dev",
    category: "ENGINEERING",
    title: "Web Developer Student Assistant",
    org: "UC Merced — Office of Information Technology",

    date: "Dec 2024 – April 2026",
    location: "Merced, CA",
    images: [""],

    desc: "",
    bullets: [
      "Built and maintained responsive campus applications using React, TypeScript, JavaScript, and Tailwind CSS",
      "Developed a production-ready internal component library by translating UX wireframes into reusable, design-system-compliant components",
      "Implemented WCAG-compliant accessibility patterns across 5+ web applications",
      "Conducted cross-browser testing and resolved rendering inconsistencies",
    ],
    role: "Internship",
    skills: ["React", "TypeScript", "Tailwind CSS", "Accessibility"],
  },
  {
    id: "padsys-ra",
    category: "ENGINEERING",
    title: "Research Assistant",
    org: "Parallel & Distributed Systems Laboratory",
    
    date: "Feb 2025 – December 2025",
    location: "Merced, CA",
    images: [""],

    desc: "",
    bullets: [
      "Profiled CNN training workloads using strace to identify checkpointing and resource utilization bottlenecks",
      "Trained CNNs achieving 85% object detection accuracy on 10,000+ labeled images, optimizing YOLOv4 for real-world deployment",
      "Created matplotlib-based visualizations revealing CPU, memory, and I/O utilization patterns",
      "Researched checkpoint–restart mechanisms for distributed training environments",
    ],
    role: "Research",
    skills: ["YOLOv8", "Python", "PyTorch", "matplotlib"],
  },
  {
    id: "startnoo-data-ai",
    category: "ENGINEERING",
    title: "Data & AI Intern",
    org: "StartNoo",

    date: "Jun 2025 – Aug 2025",
    location: "New York, NY · Remote",
    images: [""],
    desc: "",
    bullets: [
      "Built an autonomous AI chatbot using LangChain handling 7+ support use cases, reducing response time for common queries",
      "Engineered context-aware, multi-turn conversation flows for students, donors, universities, and nonprofits",
      "Built a Communities feature supporting 4+ user types across 4+ user types across 14 distinct pages using Ruby on Rails and PostgreSQL",
      "Implemented discussion threads, events, and campaigns using optimized Active Record associations",
    ],
    role: "Internship",
    skills: ["LangChain", "Python", "Ruby on Rails", "PostgreSQL"],
  },
  {
    id: "evolabs-ra",
    category: "ENGINEERING",
    title: "Research Assistant — EVOLabs",
    org: "University of California, Merced",

    date: "Jan 2025 – May 2025",
    location: "Merced, CA",
    images: [""],
    desc: "",
    bullets: [
      "Integrated LLMs into VR NPCs to enable natural language interaction for experimental psychology studies",
      "Developed behavior trees and autonomous agent pipelines in C++ with Unreal Engine 5",
      "Collaborated on AI-driven social simulations, supporting behavioral data collection and analysis",
    ],
    role: "Research",
    skills: ["OpenAI API", "Python", "C++", "Unreal Engine 5"],
  },
  {
    id: "simbrain-lab",
    category: "ENGINEERING",
    title: "Lab Intern",
    org: "Simbrain",

    date: "Jun 2024 – Dec 2024",
    location: "Merced, CA",
    images: [""],
    desc: "",
    bullets: [
      "Identified bugs and authored detailed reports with proposed fixes to improve application stability",
      "Designed and implemented informational UI components using Kotlin and Markdown",
      "Assisted in testing neural network simulations representing cognitive processes",
    ],
    role: "Internship",
    skills: ["Java", "Kotlin", "UI/UX"],
  },
  {
    id: "blackstone-launchpad",
    category: "DESIGN",
    title: "Blackstone Launchpad Student Intern",
    org: "UCM Innovation + Design Hub",

    date: "Jan 2024 – Dec 2024",
    location: "UC Merced · On-site",
    images: ["images/idhub-christmas1.png", "images/idhub-christmas2.png"],
    desc: "",
    bullets: [
      "Maintained the UC Merced Innovation website using Drupal and HTML",
      "Executed marketing strategies for workshops, hackathons, and innovation programs",
      "Produced multimedia marketing content — graphics, reels, and social campaigns",
      "Coordinated campus outreach through tabling, presentations, and student org partnerships",
    ],
    role: "Internship",
    skills: ["Drupal", "Adobe CC", "Graphic Design", "HTML"],

    link: "https://www.instagram.com/ucminnovate/"
  },
];

// Resolve image asset paths for files present in `src/data/images`.
// Uses webpack's require.context to return the bundled URL for images referenced
// as relative strings like "images/foo.jpg" or "data/images/bar.jpg". If a
// path already starts with `/` it is treated as a public asset and left alone.
declare const require: any;
let imagesContext: ((p: string) => string) | null = null;
try {
  imagesContext = (require as any).context("./images", false, /\.(png|jpe?g|svg)$/);
} catch (e) {
  imagesContext = null;
}

const resolveImage = (s?: string) => {
  if (!s) return s;
  if (s.startsWith("/")) return s; // public path
  // strip optional leading folder prefixes
  const candidate = s.replace(/^[\/*]/, "").replace(/^(data\/)?images\//, "");
  if (imagesContext) {
    try {
      return imagesContext(`./${candidate}`);
    } catch (err) {
      return `/${s}`; // fallback to public path
    }
  }
  return `/${s}`;
};

// Post-process PROJECTS and EXPERIENCE to normalize image paths
PROJECTS.forEach((p) => {
  if (Array.isArray(p.images)) p.images = p.images.map(resolveImage).filter(Boolean) as string[];
  if (Array.isArray(p.deliverables)) {
    p.deliverables.forEach((d) => {
      if (Array.isArray(d.images)) d.images = d.images.map(resolveImage).filter(Boolean) as string[];
    });
  }
});

EXPERIENCE.forEach((e) => {
  if (Array.isArray(e.images)) e.images = e.images.map(resolveImage).filter(Boolean) as string[];
});
 
 
export const EDUCATION = {
  degree: "B.S. Computer Science & Engineering",
  school: "University of California, Merced",
  date: "2022 – 2026",
  details: "Relevant coursework: Data Structures, Algorithms, Computer Organization, Machine Learning, Human-Computer Interaction.",
};
  
export const SKILLS = {
  cse:    ["React", "TypeScript", "JavaScript", "Python", "Tailwind CSS", "Ruby on Rails", "PostgreSQL", "LangChain", "C++", "Java", "MIPS Assembly", "Node.js"],
  design: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe CC", "UI/UX", "Graphic Design", "Branding"],
  other:  ["Git", "Drupal", "Unreal Engine 5", "YOLOv8", "matplotlib", "Pandas", "Kotlin"],
};
 
export const INTERESTS = [
  "Risograph", "Zine-making", "Typography", "Hackathons",
  "Matcha", "Film photography", "Designathons", "Rock climbing",
];
 