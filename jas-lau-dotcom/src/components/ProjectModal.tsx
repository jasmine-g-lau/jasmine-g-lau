import { useEffect } from "react";
import "../styles/modal.css";
import { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top-row">
          <div className="modal-header">// PROJECT DETAIL</div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modal-title">{project.title}</div>
        <div className="modal-category">{project.category} · {project.year}</div>

        <hr className="modal-divider" />

        <pre className="modal-ascii">{project.ascii}</pre>
        <div className="modal-desc">{project.desc}</div>

        <a
          className="btn-outline"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          [ VIEW PROJECT ]
        </a>
      </div>
    </div>
  );
}