// src/components/HeroSection.jsx
import React, { useRef, useState, useEffect } from "react"; // Add useRef, useState, useEffect
// Replaced Tableau with LayoutDashboard as a generic icon for data dashboards
import { Mail, Github, Linkedin, LayoutDashboard, MoveRight } from "lucide-react";
// Import your image from the assets folder
import avatarImage from "./image/profile.jpeg"; // Correct path to your image
import avatarImage1 from "./image/profile1.jpg"; // Correct path to your image (for fallback)
import tableauLogo from "./image/tableau.png"; // Correct path to your image (for fallback)
import linkedinLogo from "./image/linkedin.png"; // Correct path to your image (for fallback)
import GithubLogo from "./image/github.png"; // Correct path to your image (for fallback)
import EmailLogo from "./image/email.png"; // Correct path to your image (for fallback)
import Background from "./image/background2.png"; // Correct path to your image (for fallback)



export default function HeroSection() {
  const sectionRef = useRef(null); // Create a ref for the section
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // If the section is intersecting (visible in the viewport)
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optional: If you want the animation to play only once, uncomment the line below
            // observer.unobserve(entry.target);
          } else {
            // If the section scrolls out of view, reset the state to replay animation on scroll back
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3, // Percentage of the target element which is visible to trigger the callback
                     // 0.3 means 30% of the section must be visible. Adjust as needed (0.0 to 1.0)
        // rootMargin: "0px 0px -100px 0px" // Optional: Adjust the viewport 'root' for trigger
      }
    );

    // Observe the section when the component mounts
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function: stop observing when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <section
      className={`about hero-main ${isVisible ? 'animate-in' : ''}`} // Add 'animate-in' class when visible
      id="home"
      ref={sectionRef} // Attach the ref to the section
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
          <a href="contact" className="btn btn-primary">
            Get In Touch
            <MoveRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}