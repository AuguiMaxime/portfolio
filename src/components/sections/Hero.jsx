import { useState, useEffect } from "react";
import "./Hero.css";

const TYPING_TEXT = "Développeur Full-Stack";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(TYPING_TEXT.slice(0, index + 1));
      index++;
      if (index === TYPING_TEXT.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-tag" aria-label="Développeur Full-Stack">
          {displayedText}
          <span className={`hero-cursor ${typingDone ? "hero-cursor-blink" : ""}`}>|</span>
        </p>

        <h1 className="hero-title hero-slide-up" style={{ animationDelay: "0.3s" }}>
          Maxime <span>Augui</span>
        </h1>

        <p className="hero-description hero-slide-up" style={{ animationDelay: "0.6s" }}>
          Passionné par la création d'applications web de A à Z.
          Basé près de Toulouse, je donne vie à mes idées avec React, Node.js et MongoDB.
        </p>

        <div className="hero-buttons hero-slide-up" style={{ animationDelay: "0.9s" }}>
          <a href="#projects" className="btn-primary">Voir mes projets</a>
          <a href="/cv-maxime-augui.pdf" download="CV-Maxime-Augui.pdf" className="btn-outline">
            Télécharger mon CV
          </a>
        </div>

        <div className="hero-socials hero-slide-up" style={{ animationDelay: "1.1s" }}>
          <a href="https://github.com/AuguiMaxime" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Profil GitHub de Maxime Augui">
            GitHub
          </a>
          <span className="hero-social-separator">—</span>
          <a href="https://www.linkedin.com/in/maxime-augui-09975b2b1/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Profil LinkedIn de Maxime Augui">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
