import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis.";
    if (!form.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "L'email n'est pas valide.";
    }
    if (!form.message.trim()) newErrors.message = "Le message est requis.";
    else if (form.message.trim().length < 10) newErrors.message = "Le message est trop court.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  if (sent) {
    return (
      <section id="contact" className="contact">
        <div className="contact-inner">
          <h2 className="section-title">Me <span>contacter</span></h2>
          <div className="contact-success" role="alert">
            <p className="contact-success-icon">✓</p>
            <p className="contact-success-title">Message envoyé !</p>
            <p className="contact-success-text">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
            <button className="contact-success-btn" onClick={() => setSent(false)}>
              Envoyer un autre message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2 className="section-title">Me <span>contacter</span></h2>
        <p className="contact-subtitle">Une opportunité, un projet, une question ? Je suis disponible.</p>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className={`form-input ${errors.name ? "error" : ""}`}
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
              autoComplete="name"
            />
            {errors.name && <p id="name-error" className="form-error" role="alert">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className={`form-input ${errors.email ? "error" : ""}`}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              autoComplete="email"
            />
            {errors.email && <p id="email-error" className="form-error" role="alert">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message..."
              className={`form-textarea ${errors.message ? "error" : ""}`}
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p id="message-error" className="form-error" role="alert">{errors.message}</p>}
          </div>

          <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}
