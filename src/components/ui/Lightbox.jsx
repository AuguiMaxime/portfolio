import { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({ image, title, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Image agrandie : ${title}`}>
      <button className="lightbox-close" onClick={onClose} aria-label="Fermer">X</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={`Capture agrandie de ${title}`} className="lightbox-img" />
        <p className="lightbox-title">{title}</p>
      </div>
    </div>
  );
}
