import React, { useEffect } from "react";
import "./App.css"; // Ensure your App-level CSS is imported
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import your existing section components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Thanks from "./components/Thanks";
import Learning from "./components/Learning";
import ResumePage  from "./components/ResumePage.jsx";
import Showcase from "./components/pages/Showcase.jsx";

// Component to group all main landing page sections
function HomeContent() {
  const location = useLocation();

  useEffect(() => {
    // This effect runs when the component mounts and when 'location' changes.
    // It checks if we are on the root path ('/') AND there's no hash (e.g., #about).
    if (location.pathname === '/' && !location.hash) {
      // Use a timeout to ensure the DOM has fully rendered the #home element
      // before attempting to scroll to it.
      setTimeout(() => {
        const homeElement = document.getElementById('home'); // Target your HeroSection's ID
        if (homeElement) {
          homeElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay (100ms)
    }
  }, [location]); // Dependency array: re-run if location object changes

  return (
    <>
      {/* HeroSection MUST contain <section id="home"> or equivalent */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <div className="app-wrapper">
      {/* BrowserRouter is defined in main.jsx, so we don't need it here again.
          The 'as Router' alias is not needed if you just use Routes/Route directly.
          If you want to keep the 'Router' alias for clarity in App.jsx, ensure it's imported
          as { BrowserRouter as Router } and used around Routes.
          However, since main.jsx wraps App in BrowserRouter, you can simplify like this:
      */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>

      <Thanks />
      <Footer />
    </div>
  );
}