// src/components/HeroSection.jsx
import React from "react";
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
  return (
    // The main section for the Hero content.
    // 'hero-main' class is from index.css for its overall layout, background effects, and height.
    <section
      className="about hero-main"
      id="home"
      style={{
        backgroundImage: `url(${Background})`, // Corrected syntax here
        backgroundSize: 'cover', // Ensures the image covers the entire section
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        // You might want to add a semi-transparent overlay if the image makes text hard to read
        // For example, a linear-gradient overlay:
        // background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${Background}')`, // Use this if you want an overlay
      }}
    >
      {/* Wrapper for the hero content to apply animations and centering.
          'hero-content' from index.css manages these properties. */}
      <div className="hero-content">
        {/* Avatar Image - placed at the top of the content */}
        <img
          // Use the imported image variable as the src
          src={avatarImage}
          alt="Shin Le's Avatar"
          className="hero-avatar" // Apply avatar styling from App.css
          // Fallback on error - corrected syntax for assigning fallback image
          onError={(e) => { e.target.onerror = null; e.target.src = avatarImage1; }}
        />

        {/* Greeting heading. 'greet-heading' from App.css. */}
        <p className="greet-heading floating">Hello, I'm</p>
        {/* Main name heading. 'my-heading' from App.css, with 'text-gradient' and 'glow-text' from App.css. */}
        <h1 className="my-heading text-gradient glow-text">
          Shin Le
        </h1>
        {/* Primary description. Styled by 'hero-main p' in App.css. */}
        <p>
          Transforming Data into Strategic Insights
        </p>
        {/* Secondary description. Using 'sub-heading' from App.css. */}
        <p className="sub-heading">
          Data Scientist | Data Analyst | Math Tutor
        </p>

        {/* Social media links. Using 'social-links' for the container
            and 'footer-list-items' for individual circular icons,
            as defined in App.css for consistent social icon styling. */}
        <div className="social-links pt-6"> {/* Added pt-6 for top padding */}

          <a href="mailto:shinle666@gmail.com" className=" logo" aria-label="Email" title="Send me an Email">
             {/* <Mail />Icon styling handled by .footer-list-items svg */}
              <img
              src={EmailLogo}
              alt="Email Logo"
              className="logo-img"
            />
          </a>

          <a href="https://github.com/syl21b" target="_blank" rel="noopener noreferrer" className="logo" aria-label="GitHub" title="View my Github Repository">
             {/*<Github /> Icon styling handled by .footer-list-items svg */}
              <img
              src={GithubLogo}
              alt="Github Logo"
              className="logo-img"
            />
          </a>

          <a href="https://linkedin.com/in/shin-le-b9727a238" target="_blank" rel="noopener noreferrer" className=" logo" aria-label="LinkedIn" title="View my LinkedIn Profile">
            {/*<Linkedin />  Icon styling handled by .footer-list-items svg */}
             <img
              src={linkedinLogo}
              alt="Linkedin Logo"
              className="logo-img"
            />
          </a>

          {/* Tableau Profile Link - Updated with better accessibility */}
          <a
            href="https://public.tableau.com/app/profile/shin.le1940"  target="_blank"  rel="noopener noreferrer"  className="logo" aria-label="Tableau Public Profile" title="View my Tableau dashboards"
          >
            {/* Replaced <Tableau /> with <LayoutDashboard /> as Tableau is not available in lucide-react */}
            {/*<LayoutDashboard /> */}
            <img
              src={tableauLogo}
              alt="Tableau Logo"
              className="logo-img"
            />
          </a>

        </div>

        {/* Call to action button. Using 'hero-buttons' for the container
            and 'btn btn-primary' for the button styling. */}
        <div className="hero-buttons pt-8"> {/* Added pt-8 for top padding */}
          <a href="contact" className="btn btn-primary">
            Get In Touch
            <MoveRight className="ml-2" /> {/* ml-2 for margin left, size handled by button text */}
          </a>
        </div>
      </div>
    </section>
  );
}