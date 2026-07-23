import { useState } from "react";
import "../styles/nav.css";
import { NAV_ITEMS, PageKey } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import { PROJECTS, Project } from "../data/projects";


interface NavBarProps {
  activePage: PageKey;
  onNavigate: (page: PageKey) => void;
}

export default function NavBar({ activePage, onNavigate }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (key: PageKey) => {
    onNavigate(key);
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div
        className="nav-logo"
        onClick={() => handleNav("HOME")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleNav("HOME")}
      >
        JL
      </div>

      {/* desktop links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map(({ key, label }: { key: PageKey; label: string }) => (
          <li key={key}>
            <a
              href="#"
              className={activePage === key ? "active" : ""}
              onClick={(e) => { e.preventDefault(); handleNav(key); }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* mobile hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}