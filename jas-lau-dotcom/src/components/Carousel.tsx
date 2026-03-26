import { useState, useEffect, useRef } from "react";
import "../styles/carousel.css";
import { Project, CATEGORIES } from "../data/projects";
import FilterBar from "./FilterBar";

type Category = typeof CATEGORIES[number];

interface CarouselProps {
  projects: Project[];
  /** Called when user clicks a card */
  onSelect: (project: Project) => void;
  /** If true, scroll events on the window will spin the carousel */
  scrollSpin?: boolean;
}

export default function Carousel({ projects, onSelect, scrollSpin = false }: CarouselProps) {
  const [activeFilter, setActiveFilter] = useState<Category>("ALL");
  const [index, setIndex] = useState(0);

  const lastScrollY = useRef(0);
  const scrollAccum = useRef(0);

  const filtered =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const count = filtered.length;
  const angleStep = count > 0 ? 360 / count : 0;
  const radius = Math.max(280, count * 44);

  // clamp index when filter changes
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(count - 1, 0)));
  }, [count]);

  // scroll → spin
  useEffect(() => {
    if (!scrollSpin || count === 0) return;

    const onScroll = () => {
      const dy = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      scrollAccum.current += dy;

      if (Math.abs(scrollAccum.current) > 60) {
        const dir = scrollAccum.current > 0 ? 1 : -1;
        setIndex((i) => (i + dir + count) % count);
        scrollAccum.current = 0;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollSpin, count]);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  const handleFilterChange = (cat: Category) => {
    setActiveFilter(cat);
    setIndex(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <FilterBar active={activeFilter} onChange={handleFilterChange} />

      {/* 3-D ring */}
      <div className="carousel-stage">
        <div
          className="carousel-ring"
          style={{ transform: `rotateY(${-index * angleStep}deg)` }}
        >
          {filtered.map((proj, i) => {
            const angle = i * angleStep;
            const isActive = i === index;
            return (
              <div
                key={proj.id}
                className={`carousel-card${isActive ? " active-card" : ""}`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
                onClick={() => onSelect(proj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onSelect(proj)}
                aria-label={`${proj.title} – ${proj.category}`}
              >
                <div className="card-category">{proj.category}</div>
                <div className="card-ascii-art">{proj.ascii}</div>
                <div className="card-title">{proj.title}</div>
                <div className="card-year">{proj.year}</div>
                <div className="card-click-hint">[ CLICK TO VIEW ]</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* controls */}
      <div className="carousel-nav">
        <button className="carousel-arrow" onClick={prev} aria-label="Previous">◁</button>
        <div className="carousel-counter">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </div>
        <button className="carousel-arrow" onClick={next} aria-label="Next">▷</button>
      </div>

      {scrollSpin && (
        <div className="carousel-hint">── SCROLL TO SPIN · CLICK TO OPEN ──</div>
      )}
    </div>
  );
}