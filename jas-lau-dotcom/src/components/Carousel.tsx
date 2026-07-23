import { useState, useEffect, useRef } from "react";
import "../styles/carousel.css";

interface CarouselProps {
  projects: any[];
  /** Called when user clicks a card */
  onSelect: (item: any) => void;
  /** If true, scroll events on the window will spin the carousel */
  scrollSpin?: boolean;
  /** Hide the filter UI (carousel used on home) */
  showFilter?: boolean;
}

export default function Carousel({ projects, onSelect, scrollSpin = false }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const lastScrollY = useRef(0);
  const scrollAccum = useRef(0);

  const filtered = projects || [];

  const count = filtered.length;
  const angleStep = count > 0 ? 360 / count : 0;
  const radius = Math.max(280, count * 44);

  // clamp index when items change
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

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      {/* 3-D ring */}
      <div className="carousel-stage">
        <div
          className="carousel-ring"
          style={{ transform: `rotateY(${-index * angleStep}deg)` }}
        >
          {filtered.map((proj, i) => {
            const angle = i * angleStep;
            const isActive = i === index;
            const category = proj.category ?? "";
            const ascii = proj.ascii ?? "";
            const year = proj.year ?? proj.date ?? "";

            const candidateImage =
              proj.image ?? proj.images?.[0] ?? proj.source?.images?.[0] ?? null;
            const imgSrc = candidateImage ? (candidateImage.startsWith("/") ? candidateImage : `/${candidateImage}`) : null;

            return (
              <div
                key={proj.id}
                className={`carousel-card${isActive ? " active-card" : ""}`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
                onClick={() => onSelect(proj.source ?? proj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onSelect(proj.source ?? proj)}
                aria-label={`${proj.title} – ${category}`}
              >
                <div className="card-category">{category}</div>
                {imgSrc ? (
                  <div className="card-image-wrapper">
                    <img src={imgSrc} className="card-image" alt={proj.title} />
                  </div>
                ) : (
                  <div className="card-ascii-art">{ascii}</div>
                )}
                <div className="card-title">{proj.title}</div>
                <div className="card-year">{year}</div>
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
    </div>
  );
}