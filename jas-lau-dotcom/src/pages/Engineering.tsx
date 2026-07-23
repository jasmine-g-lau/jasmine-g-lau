import { useMemo, useState } from "react";
import "../styles/home.css";
import "../styles/engineering.css";
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

function firstImage(images?: string[]) {
  return images?.find((src) => !!src);
}

function fromProject(project: Project): GalleryItem {
  return {
    id: `project-${project.id}`,
    title: project.title,
    org: project.org,
    date: project.date,
    image:
      firstImage(project.images) ??
      project.deliverables?.find((d) => Array.isArray(d.images) && firstImage(d.images))?.images?.[0],
    images: project.images?.filter(Boolean),
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
    image: firstImage(experience.images),
    images: experience.images?.filter(Boolean),
    tags: experience.skills,
    role: experience.role,
    workType: experience.role,
    source: experience,
  };
}

const ALL_ITEMS: (Project | Experience)[] = [
  ...PROJECTS.filter((p) => p.category === "ENGINEERING"),
  ...EXPERIENCE.filter((e) => e.category === "ENGINEERING"),
];

export default function Engineering() {
    const [selectedItem, setSelectedItem] = useState<Project | Experience | null>(null);
    const [filters, setFilters] = useState<FilterState>(EMPTY_FILTER_STATE);

    useItemUrlSync("ENGINEERING", ALL_ITEMS, selectedItem, setSelectedItem);

    const galleryItems = useMemo(() => {
        const projectItems = PROJECTS.filter((p) => p.category === "ENGINEERING").map(fromProject);
        const experienceItems = EXPERIENCE.filter((e) => e.category === "ENGINEERING").map(fromExperience);
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
    
    const skillOptions = useMemo(
        () => Array.from(new Set(galleryItems.flatMap((item) => item.tags))).sort(),
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
        if (filters.workTypes.length > 0) {
            // filters.workTypes represents selected skills; item.tags is array of skills
            const hasAny = item.tags.some((t) => filters.workTypes.includes(t));
            if (!hasAny) return false;
        }
        if (filters.date) {
            const span = parseDateSpan(item.date);
            if (!spanIncludes(span, filters.date.year, filters.date.month)) return false;
        }
        return true;
        });
    }, [galleryItems, filters]);

    const filteredExperience = filteredItems.filter((item) => item.id.startsWith("experience-"));
    const filteredProjects = filteredItems.filter((item) => item.id.startsWith("project-"));

  return (
    <div className="page">

        <div className="project-toolbar">
            <h1 className="page-title">ENGINEERING</h1>
            <FilterBar
            value={filters}
            onChange={setFilters}
            roleOptions={roleOptions}
            skillOptions={skillOptions}
            minYear={minYear}
            maxYear={maxYear}
            showCategory={false}
            />
            <p>Filter</p>
        </div>
    
        {/* <div className="project-section">
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
                    <img
                        src={item.image}
                        className="project-card-image"
                        alt={item.title}
                    />
                    </div>
                )}
                <div className="project-card-title">{item.title}</div>
                <div className="project-card-meta">
                    {item.org && <span>{item.org}</span>}
                    <span>{item.date}</span>
                </div>
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
        </div> */}

        <section className="timeline-section">
            <h2 className="section-label">Experience</h2>
            <div className="timeline">
                {filteredExperience.map((item) => (
                <button
                    key={item.id}
                    type="button"
                    className="timeline-item"
                    onClick={() => setSelectedItem(item.source)}
                >
                    <div className="timeline-logo">
                    {item.image && <img src={item.image} alt={item.title} />}
                    </div>
                    <div className="timeline-main">
                    <div className="timeline-title">{item.title}</div>
                    {item.org && <div className="timeline-org">{item.org}</div>}
                    </div>
                    <div className="timeline-date">{item.date}</div>
                </button>
                ))}
            </div>
            </section>

            <section className="project-section">
            <h2 className="section-label">Projects</h2>
            <div className="project-grid">
                {filteredProjects.map((item) => (
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
                    <div className="project-card-title">{item.title}</div>
                    <div className="project-card-meta">
                    {item.org && <span>{item.org}</span>}
                    <span>{item.date}</span>
                    </div>
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
            </section>

      {selectedItem && (
        <ProjectModal
          project={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}