import React from "react";

export default function ContactSection() {
  return (
    <section className="section section-accent" id="contact">
      <div className="container">
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
          padding: 'var(--space-12) var(--space-6)'
        }}>
          <h2 className="my-heading" style={{ color: 'var(--text-inverse)' }}>
            Let's Work Together
          </h2>
          
          <p className="sub-heading" style={{ 
            color: 'var(--text-inverse)',
            opacity: 0.9,
            marginBottom: 'var(--space-8)'
          }}>
            Interested in collaborating or learning more about my work? I'm currently open to new opportunities
            and consulting engagements in data science and analytics.
          </p>

          <div style={{
            display: 'flex',
            gap: 'var(--space-4)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="mailto:shinle666@gmail.com" 
              className="btn btn-primary"
              style={{
                background: 'var(--text-inverse)',
                color: 'var(--primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--neutral-100)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--text-inverse)';
              }}
            >
              Email Me
            </a>
            
            <a
              href="/shinle-portfolio/ShinLe_Resume.pdf" 
              className="btn btn-outline"
              style={{
                borderColor: 'var(--text-inverse)',
                color: 'var(--text-inverse)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--text-inverse)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-inverse)';
              }}
              download="ShinLe_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}