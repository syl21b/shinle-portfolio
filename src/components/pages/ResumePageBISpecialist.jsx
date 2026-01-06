import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Globe, Github } from "lucide-react";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";

export default function ResumePageBISpecialist() {
  const resumeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
      
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

      // Balanced spacing constants
      const SECTION_SPACING = 5; // Space between sections
      const ITEM_SPACING = 4;    // Space between items within a section
      const LINE_SPACING = 4.5;  // Line height for text

      pdf.setFont('helvetica', 'normal');
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(20);
      pdf.text('SHIN LE', pageWidth / 2, yPos, { align: 'center' });
      yPos += 7;

      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(11);
      pdf.text('Business Intelligence Specialist', pageWidth / 2, yPos, { align: 'center' });
      yPos += 5;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      
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
      
      pdf.setTextColor(0, 0, 0);
      pdf.text(emailText, contactX, yPos);
      contactX += emailWidth + separatorWidth;
      
      pdf.text(phoneText, contactX, yPos);
      contactX += phoneWidth + separatorWidth;
      
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink(linkedinText, contactX, yPos, { url: 'https://linkedin.com/in/shin-le-b9727a238' });
      contactX += linkedinWidth + separatorWidth;
      
      pdf.textWithLink(githubText, contactX, yPos, { url: 'https://github.com/syl21b' });
      contactX += githubWidth + separatorWidth;
      
      pdf.textWithLink(portfolioText, contactX, yPos, { url: 'https://syl21b.github.io/shinle-portfolio' });
      
      pdf.setTextColor(0, 0, 0);
      
      yPos += 4;
      pdf.setLineWidth(0.5);
      pdf.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 6;

      const addSection = (title) => {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.text(title.toUpperCase(), margin, yPos);
        yPos += 1;
        pdf.setLineWidth(0.3);
        pdf.line(margin, yPos, pageWidth - margin, yPos);
        yPos += SECTION_SPACING;
      };

      // PROFESSIONAL SUMMARY
      addSection('PROFESSIONAL SUMMARY');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const summary = 'Business Intelligence Specialist with expertise in transforming complex data into strategic insights that drive business growth. Proven ability to design and implement comprehensive BI solutions, develop interactive dashboards, and establish data-driven decision-making frameworks. Skilled in bridging the gap between technical data analysis and business strategy to optimize performance and ROI.';
      const summaryLines = pdf.splitTextToSize(summary, contentWidth);
      pdf.text(summaryLines, margin, yPos);
      yPos += summaryLines.length * LINE_SPACING + SECTION_SPACING - 3;

      // TECHNICAL SKILLS
      addSection('TECHNICAL SKILLS');
      pdf.setFontSize(9);
      
      const skills = [
        {category: 'BI Tools & Platforms', skills: 'Tableau, Power BI, QlikView, Looker, SQL Server Reporting Services (SSRS), MicroStrategy'},
        {category: 'Data Warehousing & ETL', skills: 'ETL/ELT Processes, Data Modeling (Star/Snowflake Schema), Data Pipeline Design, Data Integration, Data Quality Management'},
        {category: 'Dashboard & Reporting', skills: 'Executive Dashboards, KPI Development, Interactive Reports, Data Storytelling, Performance Metrics Design'},
        {category: 'Business Analysis', skills: 'Requirements Gathering, Stakeholder Management, Process Optimization, ROI Analysis, Business Process Modeling'},
        {category: 'Data Analytics', skills: 'SQL (Advanced Queries), Python (Pandas, NumPy), Statistical Analysis, Predictive Analytics, Trend Analysis'}
      ];

      skills.forEach(({category, skills}) => {
        pdf.setFont('helvetica', 'bold');
        const categoryText = `${category}: `;
        const categoryWidth = pdf.getTextWidth(categoryText);
        pdf.text(categoryText, margin, yPos);
        
        pdf.setFont('helvetica', 'normal');
        const skillsLines = pdf.splitTextToSize(skills, contentWidth - categoryWidth);
        pdf.text(skillsLines, margin + categoryWidth, yPos);
        yPos += skillsLines.length * LINE_SPACING;
      });
      yPos += SECTION_SPACING;

      // BUSINESS INTELLIGENCE PROJECTS
      addSection('BUSINESS INTELLIGENCE PROJECTS');
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Enterprise Retail Analytics Platform', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('June 2025 – Present', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project1 = [
        '• Designed and implemented a comprehensive BI platform serving 200+ retail locations nationwide',
        '• Developed executive dashboards that reduced decision-making time by 40% through real-time KPI monitoring',
        '• Established automated reporting system that eliminated 20+ hours of manual reporting weekly',
        '• Created data governance framework ensuring data accuracy and consistency across all business units'
      ];
      project1.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * LINE_SPACING;
      });
      yPos += SECTION_SPACING;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Sales Performance Optimization Dashboard', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio/showcase/4' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('April 2025 – May 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project2 = [
        '• Built interactive Tableau dashboards that revealed 19% profit peak in Q1 2017 and identified 15% revenue loss from late shipments',
        '• Implemented drill-down capabilities allowing regional managers to analyze performance at store level',
        '• Developed predictive models forecasting sales trends with 88% accuracy for inventory planning',
        '• Created data-driven recommendations that improved operational efficiency by 12%'
      ];
      project2.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * LINE_SPACING;
      });
      yPos += SECTION_SPACING;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Financial Services Risk Assessment Platform', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio/showcase/5' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('May 2025 – June 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project3 = [
        '• Developed risk assessment dashboards analyzing 60+ global brands across 5 market sectors',
        '• Created real-time alert system for market volatility, reducing portfolio risk exposure by 25%',
        '• Designed executive-level reports that translated complex financial data into actionable business insights',
        '• Implemented data validation processes ensuring 99.9% accuracy in financial reporting'
      ];
      project3.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * LINE_SPACING;
      });
      yPos += SECTION_SPACING;

      // PROFESSIONAL EXPERIENCE
      addSection('PROFESSIONAL EXPERIENCE');
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('BI Analytics Consultant', margin, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text('January 2024 – Present', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Freelance / Contract', margin, yPos);
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const exp1 = [
        '• Consulted with 5+ clients across retail, healthcare, and finance sectors to implement BI solutions',
        '• Developed custom Tableau dashboards that improved data visibility and reduced reporting time by 60%',
        '• Trained business users on self-service analytics, empowering teams to make data-driven decisions',
        '• Established data governance policies ensuring compliance and data integrity across organizations'
      ];
      exp1.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * LINE_SPACING;
      });
      yPos += SECTION_SPACING;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Mathematics Tutor & Academic Coach', margin, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text('August 2024 – April 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Mathnasium Learning Center', margin, yPos);
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const exp2 = [
        '• Developed data tracking and analysis system that improved student learning outcomes by 25%',
        '• Created progress visualization reports translating academic data into understandable insights for parents',
        '• Applied statistical analysis to measure teaching effectiveness and optimize curriculum delivery',
        '• Analyzed performance patterns to customize teaching approaches for diverse learning styles'
      ];
      exp2.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * LINE_SPACING;
      });
      yPos += SECTION_SPACING;

      // EDUCATION
      addSection('EDUCATION');
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Bachelor of Science in Applied Mathematics', margin, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Florida State University', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text('Relevant Coursework: Statistical Methods, Data Analysis, Computational Mathematics, Business Analytics', margin, yPos);
      yPos += SECTION_SPACING;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Associate of Arts in Mathematics', margin, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Indian River State College', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text('Graduated with Honors, Dean\'s List', margin, yPos);
      
      // ADD EXTRA SPACE HERE
      yPos += SECTION_SPACING + 3;
      
      // CERTIFICATIONS
      addSection('CERTIFICATIONS');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Tableau Desktop Specialist', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('August 2023', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;

      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('IBM Data Analyst Professional Certificate', margin, yPos, { url: 'https://coursera.org/share/6f4a5c892079cf1212f1669b9539e20b' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('July 2023', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;

      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Power BI Data Analyst Associate', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('June 2023', pageWidth - margin, yPos, { align: 'right' });

      pdf.save('Shin_Le_BI_Specialist_Resume.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  const ContactInfo = () => {
    if (isMobile) {
      return (
        <div className="contact-info">
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
          <h2 className="professional-title">Business Intelligence Specialist</h2>
          <ContactInfo />
        </header>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
          </div>
          <p className="summary-text">
            Business Intelligence Specialist with expertise in transforming complex data into strategic insights that drive business growth. Proven ability to design and implement comprehensive BI solutions, develop interactive dashboards, and establish data-driven decision-making frameworks. Skilled in bridging the gap between technical data analysis and business strategy to optimize performance and ROI.
          </p>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">TECHNICAL SKILLS</h3>
          </div>
          <div className="skills-list">
            <div className="skill-line"><span className="skill-category">BI Tools & Platforms:</span> Tableau, Power BI, QlikView, Looker, SQL Server Reporting Services (SSRS), MicroStrategy</div>
            <div className="skill-line"><span className="skill-category">Data Warehousing & ETL:</span> ETL/ELT Processes, Data Modeling (Star/Snowflake Schema), Data Pipeline Design, Data Integration, Data Quality Management</div>
            <div className="skill-line"><span className="skill-category">Dashboard & Reporting:</span> Executive Dashboards, KPI Development, Interactive Reports, Data Storytelling, Performance Metrics Design</div>
            <div className="skill-line"><span className="skill-category">Business Analysis:</span> Requirements Gathering, Stakeholder Management, Process Optimization, ROI Analysis, Business Process Modeling</div>
            <div className="skill-line"><span className="skill-category">Data Analytics:</span> SQL (Advanced Queries), Python (Pandas, NumPy), Statistical Analysis, Predictive Analytics, Trend Analysis</div>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">BUSINESS INTELLIGENCE PROJECTS</h3>
          </div>
          
          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://syl21b.github.io/shinle-portfolio" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Enterprise Retail Analytics Platform
                </a>
              </h4>
              <span className="project-date">June 2025 – Present</span>
            </div>
            <ul className="project-bullets">
              <li>Designed and implemented a comprehensive BI platform serving 200+ retail locations nationwide</li>
              <li>Developed executive dashboards that reduced decision-making time by 40% through real-time KPI monitoring</li>
              <li>Established automated reporting system that eliminated 20+ hours of manual reporting weekly</li>
              <li>Created data governance framework ensuring data accuracy and consistency across all business units</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://syl21b.github.io/shinle-portfolio/showcase/4"
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Sales Performance Optimization Dashboard
                </a>
              </h4>
              <span className="project-date">April 2025 – May 2025</span>
            </div>
            <ul className="project-bullets">
              <li>Built interactive Tableau dashboards that revealed <strong>19% profit peak in Q1 2017</strong> and identified <strong>15% revenue loss</strong> from late shipments</li>
              <li>Implemented drill-down capabilities allowing regional managers to analyze performance at store level</li>
              <li>Developed predictive models forecasting sales trends with <strong>88% accuracy</strong> for inventory planning</li>
              <li>Created data-driven recommendations that improved operational efficiency by <strong>12%</strong></li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://syl21b.github.io/shinle-portfolio/showcase/5" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Financial Services Risk Assessment Platform
                </a>
              </h4>
              <span className="project-date">May 2025 – June 2025</span>
            </div>
            <ul className="project-bullets">
              <li>Developed risk assessment dashboards analyzing <strong>60+ global brands</strong> across 5 market sectors</li>
              <li>Created real-time alert system for market volatility, reducing portfolio risk exposure by <strong>25%</strong></li>
              <li>Designed executive-level reports that translated complex financial data into actionable business insights</li>
              <li>Implemented data validation processes ensuring <strong>99.9% accuracy</strong> in financial reporting</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h4 className="experience-title">BI Analytics Consultant</h4>
              <span className="experience-date">January 2024 – Present</span>
            </div>
            <p className="company-name">Freelance / Contract</p>
            <ul className="experience-bullets">
              <li>Consulted with <strong>5+ clients</strong> across retail, healthcare, and finance sectors to implement BI solutions</li>
              <li>Developed custom Tableau dashboards that improved data visibility and reduced reporting time by <strong>60%</strong></li>
              <li>Trained business users on self-service analytics, empowering teams to make data-driven decisions</li>
              <li>Established data governance policies ensuring compliance and data integrity across organizations</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h4 className="experience-title">Mathematics Tutor & Academic Coach</h4>
              <span className="experience-date">August 2024 – April 2025</span>
            </div>
            <p className="company-name">Mathnasium Learning Center</p>
            <ul className="experience-bullets">
              <li>Developed data tracking and analysis system that improved student learning outcomes by <strong>25%</strong></li>
              <li>Created progress visualization reports translating academic data into understandable insights for parents</li>
              <li>Applied statistical analysis to measure teaching effectiveness and optimize curriculum delivery</li>
              <li>Analyzed performance patterns to customize teaching approaches for diverse learning styles</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">EDUCATION</h3>
          </div>
          <div className="education-item">
            <div className="education-header">
              <h4 className="education-title">Bachelor of Science in Applied Mathematics</h4>
              <span className="education-institution">Florida State University</span>
            </div>
            <p className="education-details">Relevant Coursework: Statistical Methods, Data Analysis, Computational Mathematics, Business Analytics</p>
          </div>
          <div className="education-item">
            <div className="education-header">
              <h4 className="education-title">Associate of Arts in Mathematics</h4>
              <span className="education-institution">Indian River State College</span>
            </div>
            <p className="education-details">Graduated with Honors, Dean's List</p>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">CERTIFICATIONS</h3>
          </div>
          <div className="cert-item">
            <a href="https://syl21b.github.io/shinle-portfolio" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cert-link">
              Tableau Desktop Specialist
            </a>
            <span className="cert-date">August 2023</span>
          </div>
          <div className="cert-item">
            <a href="https://coursera.org/share/6f4a5c892079cf1212f1669b9539e20b" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cert-link">
              IBM Data Analyst Professional Certificate
            </a>
            <span className="cert-date">July 2023</span>
          </div>
          <div className="cert-item">
            <a href="https://syl21b.github.io/shinle-portfolio" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cert-link">
              Power BI Data Analyst Associate
            </a>
            <span className="cert-date">June 2023</span>
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