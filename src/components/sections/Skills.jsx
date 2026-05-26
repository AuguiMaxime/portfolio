import { useState } from "react";
import { skills, skillCategories } from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";
import "./Skills.css";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = activeCategory === "Tous"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <h2 className="section-title">Mes <span>compétences</span></h2>
        <p className="skills-subtitle">Les technologies que j'utilise au quotidien</p>

        <div className="skills-filters" role="group" aria-label="Filtrer par catégorie">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
