import { useEffect } from "react";
import "../styles/modal.css";
import { Project, Experience } from "../data/projects";

interface ProjectModalProps {
  project: Project | Experience;
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

  const getContextTags = (_p: Project | Experience): string[] => {
    return [project.role];
  };

  const getToolTags = (p: Project | Experience): string[] => {
    return Array.isArray(p.skills) ? p.skills : [];
  };

  const getBullets = (p: Project | Experience): string[] => {
    return Array.isArray(p.bullets) ? p.bullets : [];
  };

  const bullets = getBullets(project);
  const contextTags = getContextTags(project);
  const toolTags = getToolTags(project);
  const dateLabel = project.date;

  const photos = project.images?.length ? project.images : [];
  const normalizeSrc = (s?: string) => (s ? (s.startsWith("/") ? s : `/${s}`) : s);
  const photosNormalized = photos.map(normalizeSrc).filter(Boolean) as string[];

  type GalleryItem = { src: string; title?: string; desc?: string; link?: string };

  const deliverableGallery: GalleryItem[] = [];
  if (Array.isArray((project as Project).deliverables) && (project as Project).deliverables!.length) {
    (project as Project).deliverables!.forEach((d) => {
      if (Array.isArray(d.images)) {
        d.images.forEach((s) => {
          const src = normalizeSrc(s);
          if (src) deliverableGallery.push({ src, title: d.title, desc: d.desc, link: d.link });
        });
      }
    });
  }

  const gallerySource: GalleryItem[] =
    photosNormalized.length > 0
      ? photosNormalized.map((s) => ({ src: s, title: project.title, desc: project.desc }))
      : deliverableGallery;

  const isSinglePhoto = gallerySource.length === 1;

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
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="modal-title">{project.title}</div>

        <div className="modal-body-grid">
          {gallerySource.length > 0 && (
            <div className={`modal-gallery${isSinglePhoto ? " modal-gallery--single" : ""}`}>
              {gallerySource.map((g, i) => {
                const tileInner = (
                  <>
                    <img src={g.src} alt={`${project.title} photo ${i + 1}`} />
                    {(g.title || g.desc) && (
                      <div className="modal-gallery-caption">
                        {g.title && <div className="modal-gallery-caption-title">{g.title}</div>}
                        {g.desc && <div className="modal-gallery-caption-desc">{g.desc}</div>}
                      </div>
                    )}
                  </>
                );

                if (g.link) {
                  return (
                    <a
                      key={g.src + i}
                      className="modal-gallery-tile"
                      href={g.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {tileInner}
                    </a>
                  );
                }

                return (
                  <div key={g.src + i} className="modal-gallery-tile">
                    {tileInner}
                  </div>
                );
              })}
            </div>
          )}

          <div className="modal-info">
            {dateLabel && <div className="modal-date">{dateLabel}</div>}

            {project.org && (
              <div className="modal-info-block">
                <div className="modal-info-value">{project.org}</div>
              </div>
            )}

            {contextTags.length > 0 && (
              <div className="modal-tag-row">
                {contextTags.map((tag) => (
                  <span key={tag} className="project-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {toolTags.length > 0 && (
              <div className="modal-tag-row">
                {toolTags.map((tag) => (
                  <span key={tag} className="project-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {(project.desc || bullets.length > 0) && (
              <div className="modal-info-block">
                {project.desc && <p className="modal-desc">{project.desc}</p>}
                {bullets.length > 0 && (
                  <ul className="modal-bullets">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {'link' in project && project.link && (
              <div className="modal-info-block">
                <a className="btn-outline" href={project.link} target="_blank" rel="noreferrer">
                  {project.link}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}