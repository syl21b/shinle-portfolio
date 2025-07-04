// App.jsx
import React, { useEffect } from "react";
import "./App.css";
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

// A component to group all the sections of your main landing page
function HomeContent() {
  const location = useLocation();

  useEffect(() => {
    // This effect runs once after the component mounts
    // and whenever location.pathname or location.hash changes.

    // CORRECTED: Check if we are on the root path ('/') and there is no hash in the URL
    if (location.pathname === '/' && !location.hash) {
      // Use a timeout to ensure the DOM has rendered and the element exists
      // before attempting to scroll. A small delay is usually sufficient.
      setTimeout(() => {
        const homeElement = document.getElementById('home');
        if (homeElement) {
          homeElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // 100ms delay
    }
  }, [location]); // Re-run effect if location changes

  return (
    <>
      <HeroSection /> {/* Assuming HeroSection contains <section id="root"> */}
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
      <Router>
        <Navbar />

        <Routes>
          {/* Route for the main page (e.g., your-domain.com/shinle-portfolio/) */}
          <Route path="/" element={<HomeContent />} />

          {/* Other routes */}
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>

       <Thanks />
        <Footer />
      </Router>
    </div>
  );
}