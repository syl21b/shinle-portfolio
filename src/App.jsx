import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Thanks from "./components/Thanks";
import Learning from "./components/Learning";
import ResumePage from "./components/ResumePage.jsx";
import Showcase from "./components/pages/Showcase.jsx";
import ShowProject from "./components/pages/ShowProject.jsx";

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
      <ShowProject />
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
        <Route path="/showcase/:projectId" element={<Showcase />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>

      <Thanks />
      <Footer />
    </div>
  );
}