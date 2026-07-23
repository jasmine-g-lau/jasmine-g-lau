import { useMemo, useState } from "react";
import "../styles/home.css";
import FilterBar, { EMPTY_FILTER_STATE, FilterState } from "../components/FilterBar";
import ProjectModal from "../components/ProjectModal";
import { PROJECTS, EXPERIENCE, Project, Experience } from "../data/projects";
import { parseDateSpan, spanIncludes } from "../components/DateFilter";
import { useItemUrlSync } from "../components/UrlHook";

interface GalleryItem {
  id: string;
  title: string;
  org?: string;
  date: string;
  image?: string;
  images?: string[];
  tags: string[];
  role: string;
  workType: string;
  source: Project | Experience;
}

function fromProject(project: Project): GalleryItem {
  return {
    id: `project-${project.id}`,
    title: project.title,
    org: project.org,
    date: project.date,
    image:
      project.images?.[0] ??
      project.deliverables?.find((d) => Array.isArray(d.images) && d.images.length > 0)?.images?.[0],
    images: project.images,
    tags: project.skills,
    role: project.role,
    workType: project.role,
    source: project,
  };
}

function fromExperience(experience: Experience): GalleryItem {
  return {
    id: `experience-${experience.id}`,
    title: experience.title,
    org: experience.org,
    date: experience.date,
    image: experience.images?.[0],
    images: experience.images,
    tags: experience.skills,
    role: experience.role,
    workType: experience.role,
    source: experience,
  };
}

const ALL_ITEMS: (Project | Experience)[] = [
  ...PROJECTS.filter((p) => p.category === "DESIGN"),
  ...EXPERIENCE.filter((e) => e.category === "DESIGN"),
];


export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<Project | Experience | null>(null);
  const [filters, setFilters] = useState<FilterState>(EMPTY_FILTER_STATE);

  useItemUrlSync("DESIGN", ALL_ITEMS, selectedItem, setSelectedItem);
    
  const galleryItems = useMemo(() => {
    const projectItems = PROJECTS.filter((project) => project.category === "DESIGN").map(fromProject);
    const experienceItems = EXPERIENCE.filter((experience) => experience.category === "DESIGN").map(fromExperience);
    return [...experienceItems, ...projectItems].sort((a, b) => {
      const spanA = parseDateSpan(a.date);
      const spanB = parseDateSpan(b.date);
      return (spanB?.endYear ?? 0) - (spanA?.endYear ?? 0);
    });
  }, []);

  const roleOptions = useMemo(
    () => Array.from(new Set(galleryItems.map((item) => item.role))).sort(),
    [galleryItems]
  );

  const workTypeOptions = useMemo(
    () => Array.from(new Set(galleryItems.map((item) => item.workType))).sort(),
    [galleryItems]
  );

  const { minYear, maxYear } = useMemo(() => {
    const years: number[] = [];
    galleryItems.forEach((item) => {
      const span = parseDateSpan(item.date);
      if (span) years.push(span.startYear, span.endYear);
    });
    const now = new Date().getFullYear();
    if (years.length === 0) return { minYear: now, maxYear: now };
    return { minYear: Math.min(...years), maxYear: Math.max(...years) };
  }, [galleryItems]);

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      if (filters.roles.length > 0 && !filters.roles.includes(item.role)) return false;
      if (filters.workTypes.length > 0 && !filters.workTypes.includes(item.workType)) return false;
      if (filters.date) {
        const span = parseDateSpan(item.date);
        if (!spanIncludes(span, filters.date.year, filters.date.month)) return false;
      }
      return true;
    });
  }, [galleryItems, filters]);

  return (
    <div className="page">
      <div className="project-toolbar">
        <h1 className="page-title">DESIGN</h1>
        <FilterBar
          value={filters}
          onChange={setFilters}
          roleOptions={roleOptions}
          workTypeOptions={workTypeOptions}
          minYear={minYear}
          maxYear={maxYear}
          showCategory={false}
        />
      </div>
      <p>Filter</p>

      <div className="portfolio-section">
        <div className="project-grid">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="project-card"
              onClick={() => setSelectedItem(item.source)}
            >
              {item.image && (
                <div className="project-card-image-wrapper">
                  <img src={item.image} className="project-card-image" alt={item.title} />
                </div>
              )}
              <div className="project-card-meta">
                {item.org && <span>{item.org}</span>}
                <span>{item.date}</span>
              </div>
              <div className="project-card-title">{item.title}</div>
              <div className="project-card-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="project-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="empty-state">No items match these filters.</p>
        )}
      </div>

      {selectedItem && (
        <ProjectModal project={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
