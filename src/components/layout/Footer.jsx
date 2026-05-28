import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">© {year} Maxime Augui — Développeur Full-Stack</p>
      <p className="footer-sub">Conçu et développé avec React + CSS</p>
    </footer>
  );
}
