// App.jsx
import React from "react";
// Import the global App.css, which also imports your fonts and defines variables.
import "./App.css";

// Import React Router components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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




// Import the Showcase component for the dedicated route
import Showcase from "./components/pages/Showcase.jsx"; // Ensure this path is correct

// A component to group all the sections of your main landing page
function HomeContent() {
  return (
    <>
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
    // The 'app-wrapper' class will inherit styles from the <body> in App.css,
    // providing the global background and text color defined in your CSS.
    <div className="app-wrapper">
      {/* BrowserRouter wraps your entire application to enable routing */}
      <Router>
        {/* Navbar Section: This will be fixed at the top and appears on all pages */}
        <Navbar />

        {/* Routes define which component to render based on the URL path */}
        <Routes>
          {/* Route for the main page (e.g., your-domain.com/) */}
          <Route path="/" element={<HomeContent />} />

          {/* Route for the dedicated Showcase page (e.g., your-domain.com/showcase) */}
          <Route path="/showcase" element={<Showcase />} />

          <Route path="/learning" element={<Learning />} />

          <Route path="/resume" element={<ResumePage />} />

          {/* Add more routes here if you have other dedicated pages */}
        </Routes>
        
       <Thanks />
        {/* Footer: This will also appear on all pages (main and showcase) */}
        <Footer />
             

      </Router>
    </div>
  );
  
}