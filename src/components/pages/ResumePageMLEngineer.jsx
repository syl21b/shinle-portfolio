import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Globe, Github } from "lucide-react";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";

export default function ResumePageMLEngineer() {
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
      pdf.text('Full-Stack Machine Learning Engineer', pageWidth / 2, yPos, { align: 'center' });
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
      const summary = 'Full-Stack Machine Learning Engineer specializing in building end-to-end AI applications from research to production deployment. Combines strong expertise in machine learning algorithms with full-stack development skills to create scalable, production-ready AI solutions. Proven ability to architect ML systems, implement advanced models, and deploy them in cloud environments with robust APIs and user interfaces.';
      const summaryLines = pdf.splitTextToSize(summary, contentWidth);
      pdf.text(summaryLines, margin, yPos);
      yPos += summaryLines.length * LINE_SPACING + SECTION_SPACING - 3;

      // TECHNICAL SKILLS
      addSection('TECHNICAL SKILLS');
      pdf.setFontSize(9);
      
      const skills = [
        {category: 'Machine Learning & AI', skills: 'Python (TensorFlow, PyTorch, scikit-learn), XGBoost, Random Forest, Neural Networks, LLM Integration (GPT, Gemini), Computer Vision, NLP, Reinforcement Learning'},
        {category: 'Full-Stack Development', skills: 'React.js, Next.js, Flask, FastAPI, RESTful APIs, GraphQL, PostgreSQL, MongoDB, Redis, Docker, Kubernetes'},
        {category: 'MLOps & Deployment', skills: 'Model Serving (TensorFlow Serving, TorchServe), CI/CD for ML, Model Monitoring, A/B Testing, Feature Stores, MLflow, Kubeflow'},
        {category: 'Cloud & Infrastructure', skills: 'AWS (SageMaker, EC2, S3, Lambda), Google Cloud (Vertex AI), Azure ML, Docker, Kubernetes, Terraform, GitHub Actions'},
        {category: 'Data Engineering', skills: 'Apache Spark, Apache Airflow, Data Pipelines, ETL/ELT, Feature Engineering, Data Versioning (DVC), Big Data Processing'}
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

      // ML ENGINEERING PROJECTS
      addSection('ML ENGINEERING PROJECTS');
      
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('Mentivio: Full-Stack AI Mental Health Platform', margin, yPos, { url: 'https://mentivio-web.onrender.com/home?lang=en' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('September 2025 – Present', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project1 = [
        '• Architected and deployed full-stack platform with React frontend, Flask API, and PostgreSQL database',
        '• Developed clinical ML models achieving 94% diagnostic accuracy using ensemble methods and neural networks',
        '• Implemented multi-language AI chatbot using Gemini API with 200+ safety rules and real-time response',
        '• Designed HIPAA-inspired security with JWT authentication, end-to-end encryption, and secure data handling'
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
      pdf.textWithLink('Real-Time Stock Prediction API Service', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio/showcase/5' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('May 2025 – June 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project2 = [
        '• Built real-time prediction API serving LSTM, XGBoost, and Random Forest models with 85% accuracy',
        '• Implemented microservices architecture with Flask, Redis for caching, and Celery for background tasks',
        '• Created automated model retraining pipeline with MLflow for experiment tracking and model versioning',
        '• Deployed on AWS with auto-scaling EC2 instances, S3 for model storage, and CloudWatch for monitoring'
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
      pdf.textWithLink('Automated ML Pipeline Framework', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio/showcase/1' });
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.text('March 2025 – April 2025', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const project3 = [
        '• Developed reusable ML pipeline framework reducing model development time by 60%',
        '• Implemented automated feature engineering, hyperparameter tuning, and model selection',
        '• Created Docker containers for consistent environment deployment across development and production',
        '• Integrated with Apache Airflow for workflow orchestration and GitHub Actions for CI/CD'
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
      pdf.text('ML Engineering Consultant', margin, yPos);
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
        '• Designed and implemented end-to-end ML solutions for 3+ startups across healthcare and fintech sectors',
        '• Developed production-ready APIs serving ML models with 99.9% uptime and sub-100ms response times',
        '• Created MLOps pipelines automating model training, validation, and deployment processes',
        '• Optimized model inference performance achieving 5x speedup through model quantization and optimization'
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
        '• Applied mathematical optimization techniques to develop personalized learning algorithms',
        '• Created data-driven recommendation systems for curriculum adaptation based on student performance',
        '• Implemented statistical analysis to measure teaching effectiveness and optimize learning outcomes',
        '• Developed progress tracking system with predictive analytics for student performance forecasting'
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
      pdf.text('Relevant Coursework: Machine Learning, Algorithms, Data Structures, Statistical Computing, Linear Algebra', margin, yPos);
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
      pdf.textWithLink('AWS Certified Machine Learning - Specialty', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('October 2023', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;

      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('TensorFlow Developer Certificate', margin, yPos, { url: 'https://syl21b.github.io/shinle-portfolio' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('September 2023', pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;

      pdf.setTextColor(30, 90, 142);
      pdf.textWithLink('IBM Data Science Professional Certificate', margin, yPos, { url: 'https://coursera.org/share/c483954137c683f173873918b09024f2' });
      pdf.setTextColor(0, 0, 0);
      pdf.text('July 2023', pageWidth - margin, yPos, { align: 'right' });

      pdf.save('Shin_Le_ML_Engineer_Resume.pdf');
      
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
          <h2 className="professional-title">Full-Stack Machine Learning Engineer</h2>
          <ContactInfo />
        </header>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
          </div>
          <p className="summary-text">
            Full-Stack Machine Learning Engineer specializing in building end-to-end AI applications from research to production deployment. Combines strong expertise in machine learning algorithms with full-stack development skills to create scalable, production-ready AI solutions. Proven ability to architect ML systems, implement advanced models, and deploy them in cloud environments with robust APIs and user interfaces.
          </p>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">TECHNICAL SKILLS</h3>
          </div>
          <div className="skills-list">
            <div className="skill-line"><span className="skill-category">Machine Learning & AI:</span> Python (TensorFlow, PyTorch, scikit-learn), XGBoost, Random Forest, Neural Networks, LLM Integration (GPT, Gemini), Computer Vision, NLP, Reinforcement Learning</div>
            <div className="skill-line"><span className="skill-category">Full-Stack Development:</span> React.js, Next.js, Flask, FastAPI, RESTful APIs, GraphQL, PostgreSQL, MongoDB, Redis, Docker, Kubernetes</div>
            <div className="skill-line"><span className="skill-category">MLOps & Deployment:</span> Model Serving (TensorFlow Serving, TorchServe), CI/CD for ML, Model Monitoring, A/B Testing, Feature Stores, MLflow, Kubeflow</div>
            <div className="skill-line"><span className="skill-category">Cloud & Infrastructure:</span> AWS (SageMaker, EC2, S3, Lambda), Google Cloud (Vertex AI), Azure ML, Docker, Kubernetes, Terraform, GitHub Actions</div>
            <div className="skill-line"><span className="skill-category">Data Engineering:</span> Apache Spark, Apache Airflow, Data Pipelines, ETL/ELT, Feature Engineering, Data Versioning (DVC), Big Data Processing</div>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">ML ENGINEERING PROJECTS</h3>
          </div>
          
          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://mentivio-web.onrender.com/home?lang=en" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Mentivio: Full-Stack AI Mental Health Platform
                </a>
              </h4>
              <span className="project-date">September 2025 – Present</span>
            </div>
            <ul className="project-bullets">
              <li>Architected and deployed full-stack platform with <strong>React frontend, Flask API, and PostgreSQL database</strong></li>
              <li>Developed clinical ML models achieving <strong>94% diagnostic accuracy</strong> using ensemble methods and neural networks</li>
              <li>Implemented multi-language AI chatbot using <strong>Gemini API</strong> with 200+ safety rules and real-time response</li>
              <li>Designed <strong>HIPAA-inspired security</strong> with JWT authentication, end-to-end encryption, and secure data handling</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://syl21b.github.io/shinle-portfolio/showcase/5" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Real-Time Stock Prediction API Service
                </a>
              </h4>
              <span className="project-date">May 2025 – June 2025</span>
            </div>
            <ul className="project-bullets">
              <li>Built real-time prediction API serving <strong>LSTM, XGBoost, and Random Forest models</strong> with 85% accuracy</li>
              <li>Implemented <strong>microservices architecture</strong> with Flask, Redis for caching, and Celery for background tasks</li>
              <li>Created automated model retraining pipeline with <strong>MLflow</strong> for experiment tracking and model versioning</li>
              <li>Deployed on <strong>AWS</strong> with auto-scaling EC2 instances, S3 for model storage, and CloudWatch for monitoring</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4 className="project-title">
                <a href="https://syl21b.github.io/shinle-portfolio/showcase/1"
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="project-link">
                  Automated ML Pipeline Framework
                </a>
              </h4>
              <span className="project-date">March 2025 – April 2025</span>
            </div>
            <ul className="project-bullets">
              <li>Developed reusable ML pipeline framework <strong>reducing model development time by 60%</strong></li>
              <li>Implemented automated feature engineering, hyperparameter tuning, and model selection</li>
              <li>Created <strong>Docker containers</strong> for consistent environment deployment across development and production</li>
              <li>Integrated with <strong>Apache Airflow</strong> for workflow orchestration and GitHub Actions for CI/CD</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h4 className="experience-title">ML Engineering Consultant</h4>
              <span className="experience-date">January 2024 – Present</span>
            </div>
            <p className="company-name">Freelance / Contract</p>
            <ul className="experience-bullets">
              <li>Designed and implemented end-to-end ML solutions for <strong>3+ startups</strong> across healthcare and fintech sectors</li>
              <li>Developed production-ready APIs serving ML models with <strong>99.9% uptime</strong> and sub-100ms response times</li>
              <li>Created MLOps pipelines automating model training, validation, and deployment processes</li>
              <li>Optimized model inference performance achieving <strong>5x speedup</strong> through model quantization and optimization</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h4 className="experience-title">Mathematics Tutor & Academic Coach</h4>
              <span className="experience-date">August 2024 – April 2025</span>
            </div>
            <p className="company-name">Mathnasium Learning Center</p>
            <ul className="experience-bullets">
              <li>Applied mathematical optimization techniques to develop personalized learning algorithms</li>
              <li>Created data-driven recommendation systems for curriculum adaptation based on student performance</li>
              <li>Implemented statistical analysis to measure teaching effectiveness and optimize learning outcomes</li>
              <li>Developed progress tracking system with predictive analytics for student performance forecasting</li>
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
            <p className="education-details">Relevant Coursework: Machine Learning, Algorithms, Data Structures, Statistical Computing, Linear Algebra</p>
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
              AWS Certified Machine Learning - Specialty
            </a>
            <span className="cert-date">October 2023</span>
          </div>
          <div className="cert-item">
            <a href="https://syl21b.github.io/shinle-portfolio" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="cert-link">
              TensorFlow Developer Certificate
            </a>
            <span className="cert-date">September 2023</span>
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