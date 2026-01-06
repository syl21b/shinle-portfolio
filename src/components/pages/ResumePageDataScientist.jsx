import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Globe, Github } from "lucide-react";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";

export default function ResumePageDataScientist() {
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

      pdf.setFont('helvetica', 'normal');
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(28);
      pdf.text('SHIN LE', pageWidth / 2, yPos, { align: 'center' });
      yPos += 8;

      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(11);
      pdf.text('Data Scientist', pageWidth / 2, yPos, { align: 'center' });
      yPos += 6;

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
      
      yPos += 5;
      pdf.setLineWidth(0.5);
      pdf.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 7;

      const addSection = (title) => {
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.text(title.toUpperCase(), margin, yPos);
        yPos += 1;
        pdf.setLineWidth(0.3);
        pdf.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 5;
      };

      addSection('PROFESSIONAL SUMMARY');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const summary = 'Data Scientist with strong mathematical foundations and expertise in advanced statistical modeling, machine learning, and predictive analytics. Specializes in extracting meaningful insights from complex datasets and developing data-driven solutions to business challenges. Proven ability to apply rigorous scientific methodology to real-world problems, from hypothesis formulation to model deployment and impact measurement.';
      const summaryLines = pdf.splitTextToSize(summary, contentWidth);
      pdf.text(summaryLines, margin, yPos);
      yPos += summaryLines.length * 4.5 + 4;

      addSection('TECHNICAL SKILLS');
      pdf.setFontSize(9);
      
      const skills = [
        {category: 'Statistical Modeling', skills: 'Regression Analysis, Time Series Forecasting, Bayesian Inference, Experimental Design, Statistical Hypothesis Testing, Multivariate Analysis'},
        {category: 'Machine Learning', skills: 'Python, Ensemble Methods, Neural Networks, Natural Language Processing, Dimensionality Reduction'},
        {category: 'Data Analysis', skills: 'Exploratory Data Analysis (EDA), Data Mining, Feature Engineering, A/B Testing, Causal Inference, Statistical Power Analysis'},
        {category: 'Big Data & Tools', skills: 'SQL (Advanced), PySpark, Hadoop, Jupyter Notebooks, Git, Docker, Cloud Platforms (AWS, GCP)'},
        {category: 'Visualization & Communication', skills: 'Matplotlib, Seaborn, Plotly, Tableau, Data Storytelling, Report Writing, Presentation Skills'}
      ];

      skills.forEach(({category, skills}) => {
        pdf.setFont('helvetica', 'bold');
        const categoryText = `${category}: `;
        const categoryWidth = pdf.getTextWidth(categoryText);
        pdf.text(categoryText, margin, yPos);
        
        pdf.setFont('helvetica', 'normal');
        const skillsLines = pdf.splitTextToSize(skills, contentWidth - categoryWidth);
        pdf.text(skillsLines, margin + categoryWidth, yPos);
        yPos += skillsLines.length * 4.5;
      });
      yPos += 3;

      addSection('DATA SCIENCE PROJECTS');
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Clinical Mental Health Risk Prediction Model', margin, yPos, { url: 'https://mentivio-web.onrender.com/home?lang=en' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('September 2025 – Present', pageWidth - margin, yPos, { align: 'right' });
      yPos += 5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project1 = [
        '• Developed ensemble machine learning model achieving 94% accuracy in predicting mental health risk factors',
        '• Conducted rigorous statistical validation including cross-validation, bootstrap confidence intervals, and ROC analysis',
        '• Implemented feature importance analysis using SHAP values to identify key clinical indicators',
        '• Published research methodology and results in technical documentation with complete reproducibility'
      ];
      project1.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4.5;
      });
      yPos += 2.5;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Financial Market Prediction Using Time Series Analysis', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio/showcase/5' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('May 2025 – June 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += 5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project2 = [
        '• Engineered 20+ predictive features from financial time series data using statistical transformations',
        '• Implemented LSTM, ARIMA, and Prophet models for market trend prediction with 85% directional accuracy',
        '• Conducted comprehensive backtesting with walk-forward validation to ensure model robustness',
        '• Performed Monte Carlo simulations to quantify prediction uncertainty and risk metrics'
      ];
      project2.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4.5;
      });
      yPos += 2.5;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Customer Churn Prediction & Segmentation Analysis', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio/showcase/1' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('March 2025 – April 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += 5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project3 = [
        '• Developed predictive model identifying customers at high risk of churn with 82% precision',
        '• Conducted survival analysis using Cox Proportional Hazards model to understand churn drivers',
        '• Implemented customer segmentation using K-means and hierarchical clustering techniques',
        '• Designed A/B testing framework to evaluate intervention strategies reducing churn by 15%'
      ];
      project3.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4.5;
      });
      yPos += 3;

      addSection('PROFESSIONAL EXPERIENCE');
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Data Science Consultant', margin, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text('January 2025 – Present', pageWidth - margin, yPos, { align: 'right' });
      yPos += 5;
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Freelance / Contract', margin, yPos);
      yPos += 5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
const exp1 = [
'• Increased client revenue by 10-12% through predictive modeling and targeted interventions',
  '• Designed and implemented experimental frameworks including A/B testing to drive data-informed strategic decisions',
  '• Delivered comprehensive analysis reports translating complex findings into actionable business recommendations'
];

      exp1.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4.5;
      });
      yPos += 2.5;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Mathematics Tutor & Academic Coach', margin, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text('August 2024 – April 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += 5;
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(9);
      pdf.text('Mathnasium Learning Center', margin, yPos);
      yPos += 5;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
const exp2 = [
'• Forecasted student progress with 90% accuracy using statistical analysis and predictive models',
  '• Designed and executed randomized controlled trials to evaluate and refine teaching methodologies',
  '• Built data visualization dashboards to track educational metrics and measure intervention effectiveness'
];
      exp2.forEach(item => {
        const lines = pdf.splitTextToSize(item, contentWidth - 3);
        pdf.text(lines, margin + 2, yPos);
        yPos += lines.length * 4.5;
      });
      yPos += 3;

      addSection('EDUCATION');
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Bachelor of Science in Applied Mathematics', margin, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Florida State University', pageWidth - margin, yPos, { align: 'right' });
      yPos += 5;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text('Coursework: Statistical Methods, Probability Theory, Regression Analysis, Mathematical Statistics, Computational Data Analysis', margin, yPos);
      yPos += 5;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text('Associate of Arts in Mathematics', margin, yPos);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Indian River State College', pageWidth - margin, yPos, { align: 'right' });
      yPos += 5;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text('Graduated with Honors, Dean\'s List', margin, yPos);
      yPos += 5;

      addSection('CERTIFICATIONS');
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('IBM Data Science Professional Certificate', margin, yPos, { url: 'https://coursera.org/share/c483954137c683f173873918b09024f2' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('July 2023', pageWidth - margin, yPos, { align: 'right' });
      yPos += 5;

      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('IBM Data Science Professional Certificate', margin, yPos, { url: 'https://coursera.org/share/c483954137c683f173873918b09024f2' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('May 2023', pageWidth - margin, yPos, { align: 'right' });

      pdf.save('Shin_Le_Data_Scientist_Resume.pdf');
      
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
          <h2 className="professional-title">Data Scientist</h2>
          <ContactInfo />
        </header>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
          </div>
          <p className="summary-text">
            Data Scientist with strong mathematical foundations and expertise in advanced statistical modeling, machine learning, and predictive analytics. Specializes in extracting meaningful insights from complex datasets and developing data-driven solutions to business challenges. Proven ability to apply rigorous scientific methodology to real-world problems, from hypothesis formulation to model deployment and impact measurement.
          </p>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">TECHNICAL SKILLS</h3>
          </div>
          <div className="skills-list">
            <div className="skill-line"><span className="skill-category">Statistical Modeling:</span> Regression Analysis, Time Series Forecasting, Bayesian Inference, Experimental Design, Statistical Hypothesis Testing, Multivariate Analysis</div>
            <div className="skill-line"><span className="skill-category">Machine Learning:</span> Python, Ensemble Methods, Neural Networks, Natural Language Processing, Dimensionality Reduction</div>
            <div className="skill-line"><span className="skill-category">Data Analysis:</span> Exploratory Data Analysis (EDA), Data Mining, Feature Engineering, A/B Testing, Causal Inference, Statistical Power Analysis</div>
            <div className="skill-line"><span className="skill-category">Big Data & Tools:</span> SQL (Advanced), PySpark, Hadoop, Jupyter Notebooks, Git, Docker, Cloud Platforms (AWS, GCP)</div>
            <div className="skill-line"><span className="skill-category">Visualization & Communication:</span> Matplotlib, Seaborn, Plotly, Tableau, Data Storytelling, Report Writing, Presentation Skills</div>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">DATA SCIENCE PROJECTS</h3>
          </div>
          
          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://mentivio-web.onrender.com/home?lang=en" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Clinical Mental Health Risk Prediction Model
                </a>
              </h4>
              <span className="project-date">September 2025 – Present</span>
            </div>
            <ul className="project-bullets">
              <li>Developed ensemble machine learning model achieving <strong>94% accuracy</strong> in predicting mental health risk factors</li>
              <li>Conducted rigorous statistical validation including cross-validation, bootstrap confidence intervals, and ROC analysis</li>
              <li>Implemented feature importance analysis using <strong>SHAP values</strong> to identify key clinical indicators</li>
              <li>Published research methodology and results in technical documentation with complete reproducibility</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://syl21b.github.io/shinle-portfolio/showcase/5" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Financial Market Prediction Using Time Series Analysis
                </a>
              </h4>
              <span className="project-date">May 2025 – June 2025</span>
            </div>
            <ul className="project-bullets">
              <li>Engineered <strong>20+ predictive features</strong> from financial time series data using statistical transformations</li>
              <li>Implemented <strong>LSTM, ARIMA, and Prophet models</strong> for market trend prediction with 85% directional accuracy</li>
              <li>Conducted comprehensive backtesting with walk-forward validation to ensure model robustness</li>
              <li>Performed <strong>Monte Carlo simulations</strong> to quantify prediction uncertainty and risk metrics</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://syl21b.github.io/shinle-portfolio/showcase/1"
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Customer Churn Prediction & Segmentation Analysis
                </a>
              </h4>
              <span className="project-date">March 2025 – April 2025</span>
            </div>
            <ul className="project-bullets">
              <li>Developed predictive model identifying customers at high risk of churn with <strong>82% precision</strong></li>
              <li>Conducted survival analysis using <strong>Cox Proportional Hazards model</strong> to understand churn drivers</li>
              <li>Implemented customer segmentation using K-means and hierarchical clustering techniques</li>
              <li>Designed A/B testing framework to evaluate intervention strategies <strong>reducing churn by 15%</strong></li>
            </ul>
          </div>
        </section>

<section className="resume-section">
  <div className="section-header">
    <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>
  </div>
  
  <div className="experience-item">
    <div className="experience-header">
      <h4 className="experience-title">Data Science Consultant</h4>
      <span className="experience-date">January 2025 – Present</span>
    </div>
    <p className="company-name">Freelance / Contract</p>
    <ul className="experience-bullets">
      <li>Increased client revenue by <strong>10-12%</strong> through predictive modeling and targeted interventions</li>
      <li>Designed and implemented experimental frameworks including A/B testing to drive data-informed strategic decisions</li>
      <li>Delivered comprehensive analysis reports translating complex findings into actionable business recommendations</li>
    </ul>
  </div>

  <div className="experience-item">
    <div className="experience-header">
      <h4 className="experience-title">Mathematics Tutor & Academic Coach</h4>
      <span className="experience-date">August 2024 – April 2025</span>
    </div>
    <p className="company-name">Mathnasium Learning Center</p>
    <ul className="experience-bullets">
      <li>Forecasted student progress with <strong>90% accuracy</strong> using statistical analysis and predictive models</li>
      <li>Designed and executed randomized controlled trials to evaluate and refine teaching methodologies</li>
      <li>Built data visualization dashboards to track educational metrics and measure intervention effectiveness</li>
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
            <p className="education-details">Coursework: Statistical Methods, Probability Theory, Regression Analysis, Mathematical Statistics, Computational Data Analysis</p>
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
            <a href="https://coursera.org/share/c483954137c683f173873918b09024f2" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cert-link">
              IBM Data Science Professional Certificate
            </a>
            <span className="cert-date">July 2023</span>
          </div>
          <div className="cert-item">
            <a href="https://coursera.org/share/6f4a5c892079cf1212f1669b9539e20b" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cert-link">
              IBM Data Analyst Professional Certificate
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