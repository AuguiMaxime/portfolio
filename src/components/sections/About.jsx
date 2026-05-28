import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <h2 className="section-title">À <span>propos</span></h2>

        <div className="about-grid">
          <div className="about-left">
            <img src="/maxime.jpg" alt="Photo de Maxime Augui" className="about-avatar" />
            <div>
              <p className="about-name">Maxime Augui</p>
              <p className="about-role">Développeur Full-Stack · Toulouse</p>
            </div>
            <div className="about-social-links">
              <a href="https://github.com/AuguiMaxime" target="_blank" rel="noopener noreferrer" className="about-social-link" aria-label="Profil GitHub">GitHub</a>
              <a href="https://www.linkedin.com/in/maxime-augui-09975b2b1/" target="_blank" rel="noopener noreferrer" className="about-social-link" aria-label="Profil LinkedIn">LinkedIn</a>
            </div>
          </div>

          <div className="about-right">
            <p className="about-text">
              Issu d’un parcours dans la logistique et la restauration, j’ai entrepris une reconversion dans le développement web, un domaine qui me passionne depuis mes premiers projets.
            </p>
            <p className="about-text">
              J'ai énormément d'imagination et j'aime donner vie à mes idées. Ce qui me différencie, c'est cette capacité à créer quelque chose de toutes pièces — voir un projet naître de zéro et prendre forme, c'est ce qui me motive profondément.
            </p>
            <p className="about-text">
              En 6 mois de formation intensive, j'ai acquis une stack complète : React et Node.js côté full-stack. Je suis capable de travailler des heures sans voir le temps passer.
            </p>
            <a href="#contact" className="btn-purple">Me contacter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
