import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      {}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
