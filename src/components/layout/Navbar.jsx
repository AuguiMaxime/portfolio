import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-inner">
        <a href="#hero" className="navbar-logo" aria-label="Maxime Augui - Retour en haut">
          MA.
        </a>

        <ul className="navbar-links" role="navigation" aria-label="Navigation principale">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar-link">{link.label}</a>
            </li>
          ))}
          <li>
            <a href="/cv-maxime-augui.pdf" download className="navbar-cv">CV</a>
          </li>
        </ul>

        <button
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span className={`burger-line ${menuOpen ? "open-top" : ""}`} />
          <span className={`burger-line ${menuOpen ? "open-middle" : ""}`} />
          <span className={`burger-line ${menuOpen ? "open-bottom" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" role="navigation" aria-label="Menu mobile">
          <ul className="mobile-menu-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/cv-maxime-augui.pdf" download className="mobile-cv">
                Télécharger mon CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
