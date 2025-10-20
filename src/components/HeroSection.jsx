import React, { useRef, useState, useEffect } from "react";
// Add Link from react-router-dom
import { Mail, Github, Linkedin, LayoutDashboard, MoveRight } from "lucide-react";
import { Link } from 'react-router-dom'; // <<< Import Link

// Import your image from the assets folder
import avatarImage from "./image/profile3.jpg";
import avatarImage1 from "./image/profile1.jpg";
import tableauLogo from "./image/tableau.png";
import linkedinLogo from "./image/linkedin.png";
import GithubLogo from "./image/github.png";
import EmailLogo from "./image/email.png";
import Background from "./image/background2.png";



export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const zoomLevel = 1.4; // adjust here or via a state variable

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
        threshold: 0.3,
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
      className={`about hero-main ${isVisible ? 'animate-in' : ''}`}
      id="home"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-content">
      <img
        src={avatarImage}
        alt="Shin Le's Avatar"
        className="hero-avatar"
        style={{ transform: `scale(${zoomLevel})` }}

          onError={(e) => { e.target.onerror = null; e.target.src = avatarImage1; }}
        />

        <p className="greet-heading floating">Hello, I'm</p>
        <h1 className="my-heading text-gradient glow-text">
          Shin Le
        </h1>
        <p>
          Transforming Data into Strategic Insights
        </p>
        <p className="sub-heading">
          Data Analyst | Data Scientist | Math Tutor
        </p>

        <div className="social-links pt-6">
          <a href="mailto:shinle666@gmail.com" className=" logo" aria-label="Email" title="Send me an Email">
              <img
              src={EmailLogo}
              alt="Email Logo"
              className="logo-img"
            />
          </a>
          <a href="https://github.com/syl21b" target="_blank" rel="noopener noreferrer" className="logo" aria-label="GitHub" title="View my Github Repository">
              <img
              src={GithubLogo}
              alt="Github Logo"
              className="logo-img"
            />
          </a>
          <a href="https://linkedin.com/in/shin-le-b9727a238" target="_blank" rel="noopener noreferrer" className=" logo" aria-label="LinkedIn" title="View my LinkedIn Profile">
             <img
              src={linkedinLogo}
              alt="Linkedin Logo"
              className="logo-img"
            />
          </a>
          <a
            href="https://public.tableau.com/app/profile/shin.le1940"  target="_blank"  rel="noopener noreferrer"  className="logo" aria-label="Tableau Public Profile" title="View my Tableau dashboards"
          >
            <img
              src={tableauLogo}
              alt="Tableau Logo"
              className="logo-img"
            />
          </a>
        </div>

        <div className="hero-buttons pt-8">
          {/* Changed <a> to <Link> and href to to="/#contact" */}
          <Link to="/#contact" className="btn btn-primary">
            Get In Touch
            <MoveRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}