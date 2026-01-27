import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";

// Import components
import Navbar from "./components/pages/Navbar";
import HeroSection from "./components/pages/HeroSection";
import AboutSection from "./components/pages/AboutSection";
import SkillsSection from "./components/pages/SkillsSection";
import ContactSection from "./components/pages/ContactSection";
import Footer from "./components/pages/Footer";
import Thanks from "./components/pages/Thanks";
import Learning from "./components/pages/Learning";
import ResumePage5 from "./components/pages/resume.jsx";

import Showcase from "./components/pages/Showcase.jsx";
import FeaturedProjects from "./components/pages/FeaturedProjects.jsx";

function HomeContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/shinle-portfolio/") {
      setTimeout(() => {
        const homeElement = document.getElementById("home");
        if (homeElement) {
          homeElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}

// Add this component to handle SPA redirects
function SPARedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're in a GitHub Pages SPA redirect
    if (location.search) {
      const search = location.search;
      // Check if the search starts with ?/ (SPA redirect pattern)
      if (search.startsWith('?/')) {
        // Extract the path from the query parameter
        const path = search.substring(2); // Remove "?/"
        const decodedPath = path.replace(/~and~/g, '&');
        
        // Navigate to the correct path
        if (decodedPath) {
          navigate(decodedPath, { replace: true });
        }
      }
    }
  }, [location, navigate]);

  return null;
}

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <SPARedirectHandler /> {/* Add the redirect handler */}
      
      <Routes>
        {/* Home route */}
        <Route path="/" element={<HomeContent />} />
        
        {/* Showcase routes */}
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/showcase/:projectId" element={<Showcase />} />
        
        {/* Other routes */}
        <Route path="/learning" element={<Learning />} />
        <Route path="/resume" element={<ResumePage5 />} />
        
        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Thanks />
      <Footer />
    </div>
  );
}