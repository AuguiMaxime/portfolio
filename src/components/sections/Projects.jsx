import { useState } from "react";
import { projects, filters } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <h2 className="section-title">Mes <span>projets</span></h2>
        <p className="projects-subtitle">Une sélection de ce que j'ai construit</p>

        <div className="projects-filters" role="group" aria-label="Filtrer les projets">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
