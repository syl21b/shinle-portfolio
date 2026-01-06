import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Globe, Github } from "lucide-react";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";

export default function ResumePageDataAnalyst() {
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
      pdf.text('Data Analyst', pageWidth / 2, yPos, { align: 'center' });
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
      const summary = 'Results-driven Data Analyst with a strong mathematics background and a knack for uncovering actionable insights from complex datasets. I combine technical expertise in SQL, Python, and Tableau with business acumen to drive data-informed decisions. Proven ability to translate raw data into compelling narratives that stakeholders can use to optimize operations and boost profitability.';
      const summaryLines = pdf.splitTextToSize(summary, contentWidth);
      pdf.text(summaryLines, margin, yPos);
      yPos += summaryLines.length * LINE_SPACING + SECTION_SPACING -3;

      // TECHNICAL SKILLS
      addSection('TECHNICAL SKILLS');
      pdf.setFontSize(9);
      
      const skills = [
        {category: 'Data Analysis', skills: 'SQL (PostgreSQL, MySQL), Python (Pandas, NumPy, Matplotlib, Seaborn), R, Excel (Advanced Formulas, PivotTables, VLOOKUP), Statistical Analysis'},
        {category: 'Data Visualization', skills: 'Tableau, Power BI, Dashboard Design, KPI Development, Data Storytelling, Interactive Reports'},
        {category: 'Business Intelligence', skills: 'Data Warehousing, ETL Processes, Data Modeling, Report Automation, Business Metrics, Performance Analytics'},
        {category: 'Tools & Platforms', skills: 'Git/GitHub, Jupyter Notebooks, Google Sheets, AWS (S3, Redshift), REST APIs, JSON, Google Analytics'},
        {category: 'Statistical Methods', skills: 'A/B Testing, Hypothesis Testing, Regression Analysis, Time Series Analysis, Predictive Modeling, Data Mining'}
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

      // DATA ANALYSIS PROJECTS
      addSection('DATA ANALYSIS PROJECTS');
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Mentivio: Mental Health Assessment Analytics', margin, yPos, { url: 'https://mentivio-web.onrender.com/home?lang=en' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('September 2025 – Present', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project1 = [
        '• Analyzed clinical assessment data to identify patterns and correlations in mental health indicators',
        '• Designed data collection protocols and quality assurance checks for sensitive health information',
        '• Created visualization dashboards that track user engagement and assessment trends over time',
        '• Implemented statistical analysis to validate assessment accuracy and identify improvement areas'
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
      pdf.textWithLink('World Stock Market Analysis & Prediction', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio/showcase/5' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('May 2025 – June 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project2 = [
        '• Conducted comparative analysis of 60+ global brands across 5 market sectors using 20+ financial indicators',
        '• Engineered SQL queries to process and analyze 5+ years of historical market data',
        '• Designed Tableau dashboards that visualized risk assessment, sector performance, and investment opportunities',
        '• Developed predictive models that achieved 85% accuracy in identifying market trends for timing decisions'
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
      pdf.textWithLink('Superstore Performance Analysis & Business Intelligence', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio/showcase/4' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('April 2025 – May 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project3 = [
        '• Analyzed 4 years of retail data (10,000+ transactions) to identify profitability trends and operational bottlenecks',
        '• Built interactive Tableau dashboards that revealed a 19% profit peak in Q1 2017 and identified late shipments costing 15% in lost revenue',
        '• Developed 10+ actionable recommendations that could improve operational efficiency by 12%',
        '• Created executive-level reports that communicated complex findings to non-technical stakeholders'
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
      const exp1 = [
        '• Developed a data tracking system to monitor student progress, resulting in 25% faster learning outcomes',
        '• Analyzed student performance patterns to customize teaching approaches, improving average math grades by 1.5 points',
        '• Created progress visualization reports for parents, translating complex academic data into understandable insights',
        '• Used statistical analysis to measure teaching effectiveness and optimize curriculum delivery for diverse learners'
      ];
      exp1.forEach(item => {
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
      pdf.text('Relevant Coursework: Statistical Methods, Data Analysis, Computational Mathematics, Probability Theory', margin, yPos);
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
      
      // ADD EXTRA SPACE HERE - This is the key fix!
      yPos += SECTION_SPACING + 3; // Add extra 2mm for more space
      
      // CERTIFICATIONS
      addSection('CERTIFICATIONS');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('IBM Data Analyst Professional Certificate', margin, yPos, { url: 'https://coursera.org/share/6f4a5c892079cf1212f1669b9539e20b' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('July 2023', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;

      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('IBM Data Science Professional Certificate', margin, yPos, { url: 'https://coursera.org/share/c483954137c683f173873918b09024f2' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('May 2023', pageWidth - margin, yPos, { align: 'right' });

      pdf.save('Shin_Le_Data_Analyst_Resume.pdf');
      
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
          <h2 className="professional-title">Data Analyst</h2>
          <ContactInfo />
        </header>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
          </div>
          <p className="summary-text">
            Results-driven Data Analyst with a strong mathematics background and a knack for uncovering actionable insights from complex datasets. I combine technical expertise in SQL, Python, and Tableau with business acumen to drive data-informed decisions. Proven ability to translate raw data into compelling narratives that stakeholders can use to optimize operations and boost profitability.
          </p>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">TECHNICAL SKILLS</h3>
          </div>
          <div className="skills-list">
            <div className="skill-line"><span className="skill-category">Data Analysis:</span> SQL (PostgreSQL, MySQL), Python (Pandas, NumPy, Matplotlib, Seaborn), R, Excel (Advanced Formulas, PivotTables, VLOOKUP), Statistical Analysis</div>
            <div className="skill-line"><span className="skill-category">Data Visualization:</span> Tableau, Power BI, Dashboard Design, KPI Development, Data Storytelling, Interactive Reports</div>
            <div className="skill-line"><span className="skill-category">Business Intelligence:</span> Data Warehousing, ETL Processes, Data Modeling, Report Automation, Business Metrics, Performance Analytics</div>
            <div className="skill-line"><span className="skill-category">Tools & Platforms:</span> Git/GitHub, Jupyter Notebooks, Google Sheets, AWS (S3, Redshift), REST APIs, JSON, Google Analytics</div>
            <div className="skill-line"><span className="skill-category">Statistical Methods:</span> A/B Testing, Hypothesis Testing, Regression Analysis, Time Series Analysis, Predictive Modeling, Data Mining</div>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">DATA ANALYSIS PROJECTS</h3>
          </div>
          
          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://mentivio-web.onrender.com/home?lang=en" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Mentivio: Mental Health Assessment Analytics
                </a>
              </h4>
              <span className="project-date">September 2025 – Present</span>
            </div>
            <ul className="project-bullets">
              <li>Analyzed clinical assessment data to identify patterns and correlations in mental health indicators</li>
              <li>Designed data collection protocols and quality assurance checks for sensitive health information</li>
              <li>Created visualization dashboards that track user engagement and assessment trends over time</li>
              <li>Implemented statistical analysis to validate assessment accuracy and identify improvement areas</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://syl21b.github.io/shinle-portfolio/showcase/5" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  World Stock Market Analysis & Prediction
                </a>
              </h4>
              <span className="project-date">May 2025 – June 2025</span>
            </div>
            <ul className="project-bullets">
              <li>Conducted comparative analysis of <strong>60+ global brands</strong> across 5 market sectors using <strong>20+ financial indicators</strong></li>
              <li>Engineered SQL queries to process and analyze 5+ years of historical market data</li>
              <li>Designed Tableau dashboards that visualized risk assessment, sector performance, and investment opportunities</li>
              <li>Developed predictive models that achieved <strong>85% accuracy</strong> in identifying market trends for timing decisions</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://syl21b.github.io/shinle-portfolio/showcase/4"
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Superstore Performance Analysis & Business Intelligence
                </a>
              </h4>
              <span className="project-date">April 2025 – May 2025</span>
            </div>
            <ul className="project-bullets">
              <li>Analyzed 4 years of retail data (10,000+ transactions) to identify profitability trends and operational bottlenecks</li>
              <li>Built interactive Tableau dashboards that revealed a <strong>19% profit peak in Q1 2017</strong> and identified late shipments costing <strong>15% in lost revenue</strong></li>
              <li>Developed <strong>10+ actionable recommendations</strong> that could improve operational efficiency by 12%</li>
              <li>Created executive-level reports that communicated complex findings to non-technical stakeholders</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h4 className="experience-title">Mathematics Tutor & Academic Coach</h4>
              <span className="experience-date">August 2024 – April 2025</span>
            </div>
            <p className="company-name">Mathnasium Learning Center</p>
            <ul className="experience-bullets">
              <li>Developed a data tracking system to monitor student progress, resulting in <strong>25% faster learning outcomes</strong></li>
              <li>Analyzed student performance patterns to customize teaching approaches, improving average math grades by <strong>1.5 points</strong></li>
              <li>Created progress visualization reports for parents, translating complex academic data into understandable insights</li>
              <li>Used statistical analysis to measure teaching effectiveness and optimize curriculum delivery for diverse learners</li>
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
            <p className="education-details">Relevant Coursework: Statistical Methods, Data Analysis, Computational Mathematics, Probability Theory</p>
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
            <a href="https://coursera.org/share/6f4a5c892079cf1212f1669b9539e20b" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cert-link">
              IBM Data Analyst Professional Certificate
            </a>
            <span className="cert-date">July 2023</span>
          </div>
          <div className="cert-item">
            <a href="https://coursera.org/share/c483954137c683f173873918b09024f2" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cert-link">
              IBM Data Science Professional Certificate
            </a>
            <span className="cert-date">May 2023</span>
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