import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Globe, Github } from "lucide-react";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";

export default function ResumePage() {
  const resumeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      
      // Check on initial render
      checkIfMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkIfMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      let yPos = margin;

      // Header
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(28);
      pdf.text('SHIN LE', pageWidth / 2, yPos, { align: 'center' });
      yPos += 8;

      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(11);
      pdf.text('Full-Stack Machine Learning Engineer & Data Scientist', pageWidth / 2, yPos, { align: 'center' });
      yPos += 6;

      // Contact Info - ALL IN ONE LINE
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      
      // Calculate widths for centering
      const emailText = 'shinle666@gmail.com';
      const phoneText = '772-285-6483';
      const linkedinText = 'LinkedIn';
      const githubText = 'GitHub';
      const portfolioText = 'Portfolio';
      const separator = ' | ';
      
      const emailWidth = pdf.getTextWidth(emailText);
      const phoneWidth = pdf.getTextWidth(phoneText);
      const linkedinWidth = pdf.getTextWidth(linkedinText);
      const githubWidth = pdf.getTextWidth(githubText);
      const portfolioWidth = pdf.getTextWidth(portfolioText);
      const separatorWidth = pdf.getTextWidth(separator);
      
      const totalContactWidth = emailWidth + separatorWidth + phoneWidth + separatorWidth + 
                               linkedinWidth + separatorWidth + githubWidth + separatorWidth + portfolioWidth;
      
      let contactX = (pageWidth - totalContactWidth) / 2;
      
      // Email (black text)
      pdf.setTextColor(0, 0, 0);
      pdf.text(emailText, contactX, yPos);
      contactX += emailWidth + separatorWidth;
      
      // Phone (black text)
      pdf.text(phoneText, contactX, yPos);
      contactX += phoneWidth + separatorWidth;
      
      // LinkedIn (blue link)
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink(linkedinText, contactX, yPos, { url: 'https://linkedin.com/in/shin-le-b9727a238' });
      contactX += linkedinWidth + separatorWidth;
      
      // GitHub (blue link)
      pdf.textWithLink(githubText, contactX, yPos, { url: 'https://github.com/syl21b' });
      contactX += githubWidth + separatorWidth;
      
      // Portfolio (blue link)
      pdf.textWithLink(portfolioText, contactX, yPos, { url: 'https://syl21b.github.io/shinle-portfolio' });
      
      // Reset color
      pdf.setTextColor(0, 0, 0);
      
      yPos += 5;
      pdf.setLineWidth(0.5);
      pdf.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 7;

      // Section header helper
      const addSection = (title) => {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.text(title.toUpperCase(), margin, yPos);
        yPos += 1;
        pdf.setLineWidth(0.3);
        pdf.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 5;
      };

      // Professional Summary
      addSection('PROFESSIONAL SUMMARY');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const summary = 'Full-stack machine learning engineer with expertise in building end-to-end AI applications from research to production. Combines strong mathematical foundations with practical experience in developing enterprise-grade solutions. Proven ability to architect and deploy scalable ML systems, implement advanced predictive models, and create intuitive data visualizations.';
      const summaryLines = pdf.splitTextToSize(summary, contentWidth);
      pdf.text(summaryLines, margin, yPos);
      yPos += summaryLines.length * 4.5 + 4;

      // Technical Skills
      addSection('TECHNICAL SKILLS');
      pdf.setFontSize(8.5);
      
      const skills = [
        ['Machine Learning & AI:', 'Python (Pandas, NumPy, scikit-learn), XGBoost, Random Forest, LSTM, Predictive Modeling, Feature Engineering, Time Series Analysis, LLM Integration (Gemini API)'],
        ['Full-Stack Development:', 'React.js, Flask, RESTful APIs, PostgreSQL, Redis, JWT Authentication, HTML/CSS, Docker, CI/CD'],
        ['Data Engineering & Analysis:', 'SQL, ETL Pipelines, Data Preprocessing, Statistical Analysis, Data Wrangling, Exploratory Data Analysis'],
        ['Business Intelligence:', 'Tableau, Dashboard Design, Data Visualization, KPI Development, Data Storytelling'],
        ['Cloud & DevOps:', 'AWS (EC2, S3, RDS), Git/GitHub, Docker, Application Deployment']
      ];

      const skillLabelWidth = 55;
      skills.forEach(([label, text]) => {
        pdf.setFont('helvetica', 'bold');
        pdf.text(label, margin, yPos);
        pdf.setFont('helvetica', 'normal');
        const skillLines = pdf.splitTextToSize(text, contentWidth - skillLabelWidth);
        pdf.text(skillLines, margin + skillLabelWidth, yPos);
        yPos += Math.max(skillLines.length * 4, 4) + 1.5;
      });
      yPos += 3;

      // Technical Projects
      addSection('TECHNICAL PROJECTS');
      
      // Project 1
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Mentivio: AI-Powered Mental Health Assessment Platform', margin, yPos, { url: 'https://mentivio-web.onrender.com/home?lang=en' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Sep 2025 – Present', pageWidth - margin, yPos, { align: 'right' });
      yPos += 4.5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      const project1 = [
        '• Architected full-stack platform using React, Flask, PostgreSQL, achieving 94% diagnostic accuracy with clinical ML models',
        '• Implemented multi-language AI chatbot using Gemini API with 200+ safety rules, supporting 4 languages',
        '• Designed HIPAA-inspired security architecture with end-to-end encryption and JWT authentication'
      ];
      project1.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4;
      });
      yPos += 2.5;

      // Project 2
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('World Stock Market Analysis & Prediction', margin, yPos, { url: 'https://public.tableau.com/views/StockMarket_17475986132330/Menu' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('May 2025 – Jun 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += 4.5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      const project2 = [
        '• Engineered 20+ financial, behavioral, and technical indicators for 60+ brands using Python & SQL',
        '• Implemented LSTM, XGBoost, and Random Forest models achieving 85% signal accuracy for market timing',
        '• Designed Tableau dashboards visualizing risk trends and sector performance'
      ];
      project2.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4;
      });
      yPos += 2.5;

      // Project 3
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Superstore Performance Analysis & Business Intelligence', margin, yPos, { url: 'https://public.tableau.com/views/Superstore_17455418407990/ExecutiveSummaryDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Apr 2025 – May 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += 4.5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      const project3 = [
        '• Conducted deep-dive business analysis on 4 years of retail data, identifying profit trends and operational bottlenecks',
        '• Uncovered 19.09% profit peak in Q1 2017 and flagged late shipments impacting profitability',
        '• Delivered strategic report with 10+ actionable recommendations for optimization'
      ];
      project3.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4;
      });
      yPos += 3;

      // Professional Experience
      addSection('PROFESSIONAL EXPERIENCE');
      
      // Experience 1
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Mathematics Tutor & Academic Coach', margin, yPos);
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Aug 2024 – Apr 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += 4.5;
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Mathnasium Learning Center', margin, yPos);
      yPos += 4.5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      const exp1 = [
        '• Provided individualized instruction to 10+ K-12 students, improving average math grades by 1.5 points',
        '• Adapted curriculum to diverse learning needs, emphasizing conceptual understanding',
        '• Developed data tracking system to monitor student progress'
      ];
      exp1.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4;
      });
      yPos += 2.5;

      // Experience 2
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('GED Mathematics Instructor', margin, yPos);
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Jul 2022 – Jan 2023', pageWidth - margin, yPos, { align: 'right' });
      yPos += 4.5;
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Online Tutoring Platform', margin, yPos);
      yPos += 4.5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      const exp2 = [
        '• Created personalized mathematics curriculum for adult learners preparing for GED examination',
        '• Coached two students to successful GED Math section completion',
        '• Implemented adaptive teaching methods based on learning style assessments'
      ];
      exp2.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4;
      });
      yPos += 3;

      // Education
      addSection('EDUCATION');
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('B.S. in Applied Mathematics', margin, yPos);
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Florida State University', pageWidth - margin, yPos, { align: 'right' });
      yPos += 4.5;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      pdf.text('Relevant Coursework: Statistical Methods, Computational Mathematics, Data Structures', margin, yPos);
      yPos += 5;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('A.A. in Mathematics', margin, yPos);
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Indian River State College', pageWidth - margin, yPos, { align: 'right' });
      yPos += 4.5;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.5);
      pdf.text('Graduated with Honors', margin, yPos);
      yPos += 5;

      // Certifications
      addSection('CERTIFICATIONS');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('IBM Data Science Professional Certificate', margin, yPos, { url: 'https://coursera.org/share/c483954137c683f173873918b09024f2' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('July 2023', pageWidth - margin, yPos, { align: 'right' });
      yPos += 4.5;

      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('IBM Data Analyst Professional Certificate', margin, yPos, { url: 'https://coursera.org/share/6f4a5c892079cf1212f1669b9539e20b' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('May 2023', pageWidth - margin, yPos, { align: 'right' });

      pdf.save('ShinLe_Resume_DataScientist.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  // Contact info component
  const ContactInfo = () => {
    if (isMobile) {
      // Mobile layout: Two lines, no separators
      return (
        <div className="contact-info">
          {/* First line: Email and Phone */}
          <div className="contact-line-mobile" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
            <span className="contact-item">
              <Mail size={16} />
              <span className="contact-text">shinle666@gmail.com</span>
            </span>
            <span className="contact-item">
              <Phone size={16} />
              <span className="contact-text">772-285-6483</span>
            </span>
          </div>
          
          {/* Second line: LinkedIn, GitHub, Portfolio */}
          <div className="contact-line-mobile" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <span className="contact-item">
              <Linkedin size={16} />
              <a href="https://linkedin.com/in/shin-le-b9727a238" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            </span>
            <span className="contact-item">
              <Github size={16} />
              <a href="https://github.com/syl21b" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            </span>
            <span className="contact-item">
              <Globe size={16} />
              <a href="https://syl21b.github.io/shinle-portfolio" target="_blank" rel="noopener noreferrer" className="contact-link">Portfolio</a>
            </span>
          </div>
        </div>
      );
    } else {
      // Desktop layout: One line with separators
      return (
        <div className="contact-info">
          <div className="contact-line">
            <span className="contact-item">
              <Mail size={16} />
              <span className="contact-text">shinle666@gmail.com</span>
            </span>
            <span className="separator">|</span>
            <span className="contact-item">
              <Phone size={16} />
              <span className="contact-text">772-285-6483</span>
            </span>
            <span className="separator">|</span>
            <span className="contact-item">
              <Linkedin size={16} />
              <a href="https://linkedin.com/in/shin-le-b9727a238" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            </span>
            <span className="separator">|</span>
            <span className="contact-item">
              <Github size={16} />
              <a href="https://github.com/syl21b" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            </span>
            <span className="separator">|</span>
            <span className="contact-item">
              <Globe size={16} />
              <a href="https://syl21b.github.io/shinle-portfolio" target="_blank" rel="noopener noreferrer" className="contact-link">Portfolio</a>
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <main className="resume-container" ref={resumeRef}>
        <header className="resume-header">
          <h1>SHIN LE</h1>
          <h2 className="professional-title">Full-Stack Machine Learning Engineer & Data Scientist</h2>
          <ContactInfo />
        </header>

        {/* Rest of your JSX remains the same */}
        <section className="resume-section">
          <h3>PROFESSIONAL SUMMARY</h3>
          <p className="summary-text">
            Full-stack machine learning engineer with expertise in building end-to-end AI applications from research to production. Combines strong mathematical foundations with practical experience in developing enterprise-grade solutions. Proven ability to architect and deploy scalable ML systems, implement advanced predictive models, and create intuitive data visualizations.
          </p>
        </section>

        <section className="resume-section">
          <h3>TECHNICAL SKILLS</h3>
          <div className="skills-container">
            <p className="skill-line">
              <strong>Machine Learning & AI:</strong> Python (Pandas, NumPy, scikit-learn), XGBoost, Random Forest, LSTM, Predictive Modeling, Feature Engineering, Time Series Analysis, LLM Integration (Gemini API)
            </p>
            <p className="skill-line">
              <strong>Full-Stack Development:</strong> React.js, Flask, RESTful APIs, PostgreSQL, Redis, JWT Authentication, HTML/CSS, Docker, CI/CD
            </p>
            <p className="skill-line">
              <strong>Data Engineering & Analysis:</strong> SQL, ETL Pipelines, Data Preprocessing, Statistical Analysis, Data Wrangling, Exploratory Data Analysis
            </p>
            <p className="skill-line">
              <strong>Business Intelligence:</strong> Tableau, Dashboard Design, Data Visualization, KPI Development, Data Storytelling
            </p>
            <p className="skill-line">
              <strong>Cloud & DevOps:</strong> AWS (EC2, S3, RDS), Git/GitHub, Docker, Application Deployment
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h3>TECHNICAL PROJECTS</h3>
          
          <div className="project">
            <div className="project-header">
              <h4>
                <a href="https://mentivio-web.onrender.com/home?lang=en" target="_blank" rel="noopener noreferrer" className="project-link">
                  Mentivio: AI-Powered Mental Health Assessment Platform
                </a>
              </h4>
              <span className="project-date">Sep 2025 – Present</span>
            </div>
            <ul>
              <li>Architected full-stack platform using <strong>React, Flask, PostgreSQL</strong>, achieving <strong>94% diagnostic accuracy</strong> with clinical ML models</li>
              <li>Implemented multi-language AI chatbot using <strong>Gemini API</strong> with 200+ safety rules, supporting 4 languages</li>
              <li>Designed <strong>HIPAA-inspired security architecture</strong> with end-to-end encryption and JWT authentication</li>
            </ul>
          </div>

          <div className="project">
            <div className="project-header">
              <h4>
                <a href="https://public.tableau.com/views/StockMarket_17475986132330/Menu" target="_blank" rel="noopener noreferrer" className="project-link">
                  World Stock Market Analysis & Prediction
                </a>
              </h4>
              <span className="project-date">May 2025 – Jun 2025</span>
            </div>
            <ul>
              <li>Engineered 20+ financial, behavioral, and technical indicators for 60+ brands using <strong>Python & SQL</strong></li>
              <li>Implemented <strong>LSTM, XGBoost, and Random Forest</strong> models achieving 85% signal accuracy for market timing</li>
              <li>Designed Tableau dashboards visualizing risk trends and sector performance</li>
            </ul>
          </div>

          <div className="project">
            <div className="project-header">
              <h4>
                <a href="https://public.tableau.com/views/Superstore_17455418407990/ExecutiveSummaryDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer" className="project-link">
                  Superstore Performance Analysis & Business Intelligence
                </a>
              </h4>
              <span className="project-date">Apr 2025 – May 2025</span>
            </div>
            <ul>
              <li>Conducted deep-dive business analysis on 4 years of retail data, identifying profit trends and operational bottlenecks</li>
              <li>Uncovered 19.09% profit peak in Q1 2017 and flagged late shipments impacting profitability</li>
              <li>Delivered strategic report with 10+ actionable recommendations for optimization</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h3>PROFESSIONAL EXPERIENCE</h3>
          
          <div className="experience-item">
            <div className="project-header">
              <h4>Mathematics Tutor & Academic Coach</h4>
              <span className="project-date">Aug 2024 – Apr 2025</span>
            </div>
            <p className="company-name">Mathnasium Learning Center</p>
            <ul>
              <li>Provided individualized instruction to 10+ K-12 students, improving average math grades by 1.5 points</li>
              <li>Adapted curriculum to diverse learning needs, emphasizing conceptual understanding</li>
              <li>Developed data tracking system to monitor student progress</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <div className="project-header">
              <h4>GED Mathematics Instructor</h4>
              <span className="project-date">Jul 2022 – Jan 2023</span>
            </div>
            <p className="company-name">Online Tutoring Platform</p>
            <ul>
              <li>Created personalized mathematics curriculum for adult learners preparing for GED examination</li>
              <li>Coached two students to successful GED Math section completion</li>
              <li>Implemented adaptive teaching methods based on learning style assessments</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h3>EDUCATION</h3>
          <div className="education-item">
            <div className="project-header">
              <h4>B.S. in Applied Mathematics</h4>
              <span className="project-date">Florida State University</span>
            </div>
            <p className="education-details">Relevant Coursework: Statistical Methods, Computational Mathematics, Data Structures</p>
          </div>
          <div className="education-item">
            <div className="project-header">
              <h4>A.A. in Mathematics</h4>
              <span className="project-date">Indian River State College</span>
            </div>
            <p className="education-details">Graduated with Honors</p>
          </div>
        </section>

        <section className="resume-section">
          <h3>CERTIFICATIONS</h3>
          <div className="cert-item">
            <a href="https://coursera.org/share/c483954137c683f173873918b09024f2" target="_blank" rel="noopener noreferrer" className="cert-link">
              IBM Data Science Professional Certificate
            </a>
            <span className="project-date">July 2023</span>
          </div>
          <div className="cert-item">
            <a href="https://coursera.org/share/6f4a5c892079cf1212f1669b9539e20b" target="_blank" rel="noopener noreferrer" className="cert-link">
              IBM Data Analyst Professional Certificate
            </a>
            <span className="project-date">May 2023</span>
          </div>
        </section>

        <section className="resume-download-section">
          <button
            onClick={downloadPDF}
            className="download-resume-button"
            aria-label="Download Resume as PDF"
          >
            <FaFileDownload size={18} style={{ marginRight: '8px' }} />
            Download Resume (PDF)
          </button>
        </section>
      </main>
      
    </>
  );
}