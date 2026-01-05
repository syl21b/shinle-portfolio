import React, { useRef, useState, useEffect } from "react";
import { MoveRight, FileText, Mail, Github, Linkedin, BarChart3 } from "lucide-react";
import { Link } from 'react-router-dom';

import avatarImage from "/src/components/image/profile3.jpg";
import avatarImage1 from "/src/components/image/profile1.jpg";
import ResumePage from "/src/components/pages/ResumePage.jsx";


export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`hero-main ${isVisible ? 'animate-in' : ''}`}
      id="home"
      ref={sectionRef}
    >
      {/* Background Pattern */}
      <div className="hero-background-pattern"></div>
      
      <div className="hero-content container">
        <div className="hero-text">
          <p className="greet-heading">Hello, I'm</p>
          <h1 className="my-heading">
            Shin Le
          </h1>
          <p className="hero-description">
            Full-stack data professional specializing in AI/ML applications, predictive analytics, 
              and data visualization. I architect end-to-end solutions from data pipelines to 
              interactive dashboards, with expertise in Python, SQL, Tableau, and cloud platforms. 
              Passionate about building scalable data products that solve real-world problems.
          </p>
          
          <div className="hero-subheading">
            <span className="subheading-item">Data Analyst</span>
            <span className="subheading-item">Data Scientist</span>
            <span className="subheading-item">Math Tutor</span>
          </div>

          {/* Social Links with Icons */}
          <div className="social-links">
            <a 
              href="mailto:shinle666@gmail.com" 
              className="logo" 
              aria-label="Email"
              title="Email: shinle666@gmail.com"
            >
              <Mail size={20} className="logo-img" style={{ color: 'var(--primary)' }} />
            </a>
            <a 
              href="https://github.com/syl21b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="logo" 
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <Github size={20} className="logo-img" style={{ color: 'var(--dark)' }} />
            </a>
            <a 
              href="https://linkedin.com/in/shin-le-b9727a238" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="logo" 
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} className="logo-img" style={{ color: '#0077B5' }} />
            </a>
            <a
              href="https://public.tableau.com/app/profile/shin.le1940"
              target="_blank"
              rel="noopener noreferrer"
              className="logo"
              aria-label="Tableau Public"
              title="Tableau Public Profile"
            >
              <BarChart3 size={20} className="logo-img" style={{ color: '#E97627' }} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <Link to="/#contact" className="btn btn-primary">
              Get In Touch
              <MoveRight size={18} />
            </Link>
            <Link 
              to="/resume"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
              <FileText size={18} />
            </Link>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="hero-visual">
          <div className="hero-avatar-container">
            <img
              src={avatarImage}
              alt="Professional portrait of Shin Le"
              className="hero-avatar"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = avatarImage1; 
              }}
              loading="eager"
            />
            <div className="hero-avatar-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
}