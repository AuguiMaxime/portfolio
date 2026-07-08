import { useEffect, useState } from "react";
import "./Lightbox.css";

export default function Lightbox({ images, title, onClose, startIndex = 0 }) {
  const gallery = Array.isArray(images) ? images : [images];
  const [index, setIndex] = useState(startIndex);
  const hasMultiple = gallery.length > 1;

  const goPrev = () => setIndex((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === gallery.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowLeft") goPrev();
      if (hasMultiple && e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, hasMultiple]);

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Image agrandie : ${title}`}>
      <button className="lightbox-close" onClick={onClose} aria-label="Fermer">X</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {hasMultiple && (
          <button className="lightbox-nav lightbox-prev" onClick={goPrev} aria-label="Image précédente">‹</button>
        )}
        <img src={gallery[index]} alt={`Capture agrandie de ${title}`} className="lightbox-img" />
        {hasMultiple && (
          <button className="lightbox-nav lightbox-next" onClick={goNext} aria-label="Image suivante">›</button>
        )}
        <p className="lightbox-title">
          {title}
          {hasMultiple && <span className="lightbox-counter"> — {index + 1}/{gallery.length}</span>}
        </p>
      </div>
    </div>
  );
}
