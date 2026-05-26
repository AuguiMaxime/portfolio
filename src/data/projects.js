export const projects = [
  {
    id: 1,
    title: "Kasa",
    category: "Formation",
    description:
      "Application web de location immobilière entre particuliers. Développement front-end complet à partir de maquettes Figma, avec navigation multipages et affichage dynamique des données.",
    tags: ["React", "React Router", "Sass", "Vite"],
    image: "/screenshots/kasa.png",
    github: "https://github.com/AuguiMaxime/Kasa",
    demo: "https://kasa-green-xi.vercel.app/",
    context: "Projet de formation OpenClassrooms — 60h",
    skills: [
      "Architecture React en composants réutilisables",
      "Configuration du routage avec React Router",
      "Gestion des données dynamiques depuis un fichier JSON",
      "Structuration CSS avancée avec Sass",
    ],
  },
  {
    id: 2,
    title: "Mon Vieux Grimoire",
    category: "Formation",
    description:
      "Back-end d'un site communautaire de notation de livres. API RESTful sécurisée avec authentification JWT, opérations CRUD et base de données MongoDB.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    image: "/screenshots/mvg.png",
    github: "https://github.com/AuguiMaxime/mon-vieux-grimoire",
    demo: "",
    context: "Projet de formation OpenClassrooms — 60h",
    skills: [
      "Création d'une API REST complète avec opérations CRUD",
      "Authentification sécurisée avec JWT",
      "Modélisation des données avec Mongoose",
      "Architecture MVC et Green Code",
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    category: "Perso",
    description:
      "Mon portfolio professionnel — conçu et développé de A à Z avec React et Tailwind CSS. Architecture pensée pour évoluer facilement.",
    tags: ["React", "Tailwind CSS", "Sass", "Vite"],
    image: "/screenshots/portfolio.png",
    github: "https://github.com/AuguiMaxime/portfolio",
    demo: "",
    context: "Projet personnel",
    skills: [
      "Design system cohérent",
      "Responsive mobile-first",
      "Optimisation SEO et accessibilité",
    ],
  },
  {
    id: 4,
    title: "SuperSmash",
    category: "Perso",
    description:
      "Site vitrine pour un restaurant de smash burgers toulousain. Interface moderne avec menu filtrable, identité visuelle forte et design orienté conversion.",
    tags: ["React", "Vite", "Sass"],
    image: "/screenshots/supersmash.png",
    github: "https://github.com/AuguiMaxime/supersmash",
    demo: "https://supersmash-omega.vercel.app/",
    context: "Projet personnel",
    skills: [
      "Conception d'une identité visuelle complète",
      "Catalogue produits avec filtres dynamiques",
      "Responsive design orienté expérience utilisateur",
      "Architecture React en composants réutilisables",
    ],
  },
  {
    id: 5,
    title: "GrowSwap",
    category: "Perso",
    description:
      "Marketplace dédiée aux équipements de culture en occasion. Plateforme style Leboncoin avec dépôt d'annonces, filtres par catégorie, recherche et système d'authentification.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/screenshots/growswap.png",
    github: "https://github.com/AuguiMaxime/growswap",
    demo: "https://growswap.vercel.app/",
    context: "Projet personnel",
    skills: [
      "Application full-stack React + Node.js",
      "Système d'authentification et gestion des annonces",
      "Filtres dynamiques et recherche en temps réel",
      "Déploiement front-end Vercel",
    ],
  },
];

export const filters = ["Tous", "Formation", "Perso"];
