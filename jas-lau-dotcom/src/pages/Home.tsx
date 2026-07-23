import { useEffect, useMemo, useState } from "react";
import "../styles/home.css";
import Carousel from "../components/Carousel";
import ProjectModal from "../components/ProjectModal";
import { PROJECTS, EXPERIENCE, Project, Experience } from "../data/projects";
import { parseDateSpan } from "../components/DateFilter";

type HomeItem =
  | (Project & { itemType: "project"; itemId: string; itemSlug: string; image: string })
  | (Experience & { itemType: "experience"; itemId: string; itemSlug: string; image: string });

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

    const CURRENT_YEAR = new Date().getFullYear();

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Project | Experience | null>(null);

  const galleryItems = useMemo(() => {
    const projectItems = PROJECTS.map((p) => ({ ...p, itemType: "project", source: p }));
    const experienceItems = EXPERIENCE.map((e) => ({ ...e, itemType: "experience", source: e }));
    const combined = [...projectItems, ...experienceItems];
    combined.sort((a, b) => {
      const spanA = parseDateSpan(a.date);
      const spanB = parseDateSpan(b.date);
      return (spanB?.endYear ?? 0) - (spanA?.endYear ?? 0);
    });
    return combined.slice(0, 8).map((it) => ({
      id: `${it.itemType}-${it.id}`,
      title: it.title,
      category: it.category,
      date: it.date,
      year: it.date,
      ascii: "",
      source: it.source,
    }));
  }, []);

  return (
    <>
      <section className="hero">
        <section className="hero-text">
          <h1 className="hero-name">JASMINE LAU</h1>
          <h3>Software Engineering / Systems Optimization / Human Behavior in San Francisco</h3>
          <p>Industrial Engineering & Operations Research Meng @ UC Berkeley</p>
          <p>Computer Science & Engineering BS, Cognitive Science Minor @ UC Merced</p>
        </section>
        <section className="hero-image">
        </section>
      </section>

      <section className="carousel-section">
        <h2 className="section-title">PORTFOLIO</h2>

        <Carousel projects={galleryItems} onSelect={(s) => setSelectedItem(s)} scrollSpin />
      </section>

      <div style={{ height: 160 }} />

      {selectedItem && (
        <ProjectModal project={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}