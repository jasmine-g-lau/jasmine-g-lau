import { useState } from "react";
import "../styles/home.css";
import Carousel from "../components/Carousel";
import ProjectModal from "../components/ProjectModal";
import { PROJECTS, Project } from "../data/projects";

interface HomeProps {
  scrollProgress: number;
}

export default function Home({ scrollProgress }: HomeProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* scroll progress bar */}
      <div className="scroll-bar" style={{ width: `${scrollProgress}%` }} />

      {/* ── Hero ── */}
      <section className="hero">
        <span className="corner corner-tl">╔══╗</span>
        <span className="corner corner-tr">╔══╗</span>
        <span className="corner corner-bl">╚══╝</span>
        <span className="corner corner-br">╚══╝</span>

        <div className="hero-divider">╔══════════════════════════════╗</div>
        <h1 className="hero-ascii-name">JASMINE LAU</h1>
        <div className="hero-divider">╚══════════════════════════════╝</div>
        <p className="hero-sub">DEVELOPER · DESIGNER · MAKER</p>
        <p className="hero-location">SAN FRANCISCO, CA</p>

        <div className="hero-scroll-hint">▼ SCROLL TO EXPLORE ▼</div>
      </section>

      {/* ── Carousel section ── */}
      <section className="carousel-section">
        <div className="section-label">// SELECTED WORK</div>
        <h2 className="section-title">PORTFOLIO</h2>

        <Carousel
          projects={PROJECTS}
          onSelect={setSelectedProject}
          scrollSpin
        />
      </section>

      {/* gives the page enough height to scroll and spin the carousel */}
      <div style={{ height: 120 }} />

      {/* project detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}