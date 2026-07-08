import "./SkillBadge.css";

export default function SkillBadge({ name, icon }) {
  return (
    <div className="skill-badge">
      <img src={icon} alt={`Logo ${name}`} className="skill-badge-icon" loading="lazy" />
      <span className="skill-badge-name">{name}</span>
    </div>
  );
}
