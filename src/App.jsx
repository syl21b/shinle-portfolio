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
    if (location.pathname === "/" && !location.hash) {
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
        <Route path="/" element={<HomeContent />} />
        <Route path="/showcase/:projectId?" element={<Showcase />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/resume" element={<ResumePage1 />} />
      </Routes>

      <Thanks />
      <Footer />
    </div>
  );
}