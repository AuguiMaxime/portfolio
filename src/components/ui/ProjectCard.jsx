import { useState } from "react";
import Lightbox from "./Lightbox";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, tags, image, github, demo, context } = project;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <article className="project-card">
        <div
          className={`project-card-img ${image ? "project-card-img-clickable" : ""}`}
          onClick={() => image && setLightboxOpen(true)}
          role={image ? "button" : undefined}
          tabIndex={image ? 0 : undefined}
          onKeyDown={(e) => e.key === "Enter" && image && setLightboxOpen(true)}
          aria-label={image ? `Agrandir l'image de ${title}` : undefined}
        >
          {image ? (
            <>
              <img src={image} alt={`Capture du projet ${title}`} loading="lazy" />
              <div className="project-card-img-overlay" aria-hidden="true">
                <span className="project-card-img-zoom">+</span>
              </div>
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
            {tags.map((tag) => (
              <span key={tag} className="project-card-tag">{tag}</span>
            ))}
          </div>
          <div className="project-card-links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="project-card-link" aria-label={`Code source de ${title} sur GitHub`}>
                GitHub
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card-link demo" aria-label={`Demo de ${title}`}>
                Demo live
              </a>
            )}
          </div>
        </div>
      </article>

      {lightboxOpen && (
        <Lightbox image={image} title={title} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
}
