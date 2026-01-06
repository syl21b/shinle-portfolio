import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Import components
import Navbar from "./components/pages/Navbar";
import HeroSection from "./components/pages/HeroSection";
import AboutSection from "./components/pages/AboutSection";
import SkillsSection from "./components/pages/SkillsSection";
import ContactSection from "./components/pages/ContactSection";
import Footer from "./components/pages/Footer";
import Thanks from "./components/pages/Thanks";
import Learning from "./components/pages/Learning";
import ResumePage from "./components/pages/ResumePage.jsx";
import ResumePage1 from "./components/pages/ResumePageDataAnalyst.jsx";
import ResumePage2 from "./components/pages/ResumePageBISpecialist.jsx";
import ResumePage3 from "./components/pages/ResumePageDataScientist.jsx";
import ResumePage4 from "./components/pages/ResumePageMLEngineer.jsx";
import Showcase from "./components/pages/Showcase.jsx";
import FeaturedProjects from "./components/pages/FeaturedProjects.jsx";

function HomeContent() {
  const location = useLocation();

  useEffect(() => {
    // Remove the hash handling since we're using React Router
    // Instead, handle scroll based on the current route
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

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <Routes>
        {/* Home route */}
        <Route path="/" element={<HomeContent />} />
        
        {/* Showcase routes - both with and without projectId */}
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/showcase/:projectId" element={<Showcase />} />
        
        {/* Other routes */}
        <Route path="/learning" element={<Learning />} />
        <Route path="/resume" element={<ResumePage1 />} />
        
        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Thanks />
      <Footer />
    </div>
  );
}