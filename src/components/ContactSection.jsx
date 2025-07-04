// src/components/ContactSection.jsx
import React from "react";
// No explicit Button import from './ui/button' needed, as we'll use standard HTML elements
// with custom CSS classes for styling.

export default function ContactSection() {
  return (
    // The main section for the Contact content.
    // 'contact' class is from App.css for its overall layout and background.
    // 'section-dark' is from index.css for general section padding and dark theme.
    <section className="contact section-dark" id="contact">
      {/* The inner div serving as a Call to Action (CTA) block.
          'container' ensures consistent max-width.
          'cta-section' from index.css provides the gradient, shadows, and internal padding. */}
      <div className=" cta-section">
        {/* The content within the CTA.
            'cta-content' acts as a wrapper to control z-index if needed for background effects. */}
        <div className="cta-content">
          {/* Heading for the CTA section. Styles are inherited from 'cta-section h2' in index.css. */}
          <h2>Let's Work Together</h2>
          {/* Paragraph description. Styles are inherited from 'cta-section p' in index.css. */}
          <p>
            Interested in collaborating or learning more about my work? I'm currently open to new opportunities
            and consulting engagements in data science and analytics.
          </p>
          {/* Container for the buttons. This will use simple flexbox to arrange them,
              similar to how 'hero-buttons' works, adapted for this section. */}
          <div className="hero-buttons"> {/* Reusing hero-buttons class for consistent button group styling */}
            {/* Primary button for Email Me. Uses 'btn' for base styles and 'btn-primary' for the gradient look. */}
            <a href="mailto:shinle666@gmail.com" className="btn btn-primary">
              Email Me
            </a>
            {/* Outline button for Download Resume. Uses 'btn' for base styles and 'btn-outline' for the bordered look. */}
            <a
              href="ShinLe_Resume.pdf" 
              className="download-resume-button btn btn-outline"
              download="ShinLe_Resume.pdf"
              aria-label="Download Resume as PDF"
            >
              Download Resume
        </a>
          </div>
        </div>
      </div>
    </section>
  );
}
