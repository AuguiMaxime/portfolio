import { useState } from "react";
import Lightbox from "./Lightbox";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, tags, image, images, github, demo, demoLabel, context, portrait } = project;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const gallery = images && images.length ? images : image ? [image] : [];
  const thumbnail = gallery[0];

  return (
    <>
      <article className="project-card">
        <div
          className={`project-card-img ${thumbnail ? "project-card-img-clickable" : ""} ${portrait ? "project-card-img-portrait" : ""}`}
          onClick={() => thumbnail && setLightboxOpen(true)}
          role={thumbnail ? "button" : undefined}
          tabIndex={thumbnail ? 0 : undefined}
          onKeyDown={(e) => e.key === "Enter" && thumbnail && setLightboxOpen(true)}
          aria-label={thumbnail ? `Agrandir l'image de ${title}` : undefined}
        >
          {thumbnail ? (
            <>
              <img src={thumbnail} alt={`Capture du projet ${title}`} loading="lazy" />
              <div className="project-card-img-overlay" aria-hidden="true">
                <span className="project-card-img-zoom">+</span>
              </div>
              {gallery.length > 1 && (
                <span className="project-card-img-count">+{gallery.length - 1}</span>
              )}
            </>
          ) : (
            <span className="project-card-placeholder">{title[0]}</span>
          )}
        </div>

        <div className="project-card-body">
          <div>
            <p className="project-card-context">{context}</p>
            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-description">{description}</p>
          </div>
          <div className="project-card-tags">
            {tags.slice(0, 4).map((tag) => (
              <span key={tag} className="project-card-tag">{tag}</span>
            ))}
            {tags.length > 4 && (
              <span className="project-card-tag project-card-tag-more">+{tags.length - 4}</span>
            )}
          </div>
          <div className="project-card-links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="project-card-link" aria-label={`Code source de ${title} sur GitHub`}>
                GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card-link demo" aria-label={`${demoLabel || "Demo"} de ${title}`}>
                {demoLabel || "Demo live"}
              </a>
            )}
          </div>
        </div>
      </article>

      {lightboxOpen && (
        <Lightbox images={gallery} title={title} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
}
