import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Social Links */}
        <div className="footer-social-links">
          <a 
            href="mailto:shinle666@gmail.com" 
            className="social-icon" 
            aria-label="Email" 
            title="Send me an Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/shin-le-b9727a238"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
            title="Visit my LinkedIn profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <a
            href="https://github.com/syl21b"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
            title="Visit my GitHub profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.731.084-.716.084-.716 1.192.085 1.815 1.229 1.815 1.229 1.064 1.801 2.792 1.277 3.473.974.108-.758.417-1.277.76-1.577-2.665-.299-5.464-1.332-5.464-5.93 0-1.31.465-2.381 1.235-3.221-.124-.3-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.876.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.801 5.625-5.471 5.922.429.369.814 1.096.814 2.219v3.292c0 .319.192.694.801.576C20.566 21.879 24 17.377 24 12 24 5.373 18.627 0 12 0z"/>
            </svg>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="footer-navigation">
          <a href="#home" className="footer-link">Home</a>
          <span className="footer-separator">•</span>
          <a href="#about" className="footer-link">About</a>
          <span className="footer-separator">•</span>
          <a href="#skills" className="footer-link">Skills</a>
          <span className="footer-separator">•</span>
          <a href="#projects" className="footer-link">Projects</a>
          <span className="footer-separator">•</span>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© {currentYear} Shin Le. All rights reserved.</p>
          <p className="footer-tagline">Data Analyst & Scientist</p>
        </div>
      </div>
    </footer>
  );
}