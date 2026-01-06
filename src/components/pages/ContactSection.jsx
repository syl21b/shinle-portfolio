import React from "react";

export default function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-header">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">Let's Work Together</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Interested in collaborating or learning more about my work? I'm currently open to new opportunities
              and consulting engagements in data science and analytics.
            </p>
          </div>
          
          <div className="contact-actions">
            <a 
              href="mailto:shinle666@gmail.com" 
              className="btn btn-primary btn-icon"
              aria-label="Send email to shinle666@gmail.com"
            >
              <svg className="btn-icon-left" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email Me
            </a>
            
            <a
              href="/shinle-portfolio/Shin_Le_Data_Analyst_Resume.pdf" 
              className="btn btn-outline btn-icon"
              download="Shin_Le_Data_Analyst_Resume.pdf"
              aria-label="Download Shin Le's Resume"
            >
              <svg className="btn-icon-left" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            
            <div className="contact-info">
              <div className="contact-info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Available for calls</span>
              </div>
              <div className="contact-info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}