import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Globe, Github } from "lucide-react";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import resumeAI from './resumeAI.json';
import resumeML from './resumeML.json';
import resumeDA from './resumeDA.json';
import resumeDS from './resumeDS.json';

// This is your original resumeDA.jsx code but made generic
export default function DynamicResume({ initialResume = 'Data Analyst' }) {
  const resumeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [resumeData, setResumeData] = useState(() => {
    switch(initialResume) {
      case 'AI Engineer': return resumeAI;
      case 'Machine Learning Engineer': return resumeML;
      case 'Data Analyst': return resumeDA;
      case 'Data Scientist': return resumeDS;
      default: return resumeAI;
    }
  });

  // Handle resume change
  const handleResumeChange = (resumeType) => {
    switch(resumeType) {
      case 'AI Engineer':
        setResumeData(resumeAI);
        break;
      case 'Machine Learning Engineer':
        setResumeData(resumeML);
        break;
      case 'Data Analyst':
        setResumeData(resumeDA);
        break;
      case 'Data Scientist':
        setResumeData(resumeDS);
        break;
      default:
        setResumeData(resumeAI);
    }
  };

  // Use the current resumeData
  const { name, title, contact, sections, pdf } = resumeData;
  const { 
    professionalSummary, 
    technicalSkills, 
    projects, 
    experience, 
    education, 
    certifications 
  } = sections;

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
    const pdfDoc = new jsPDF({
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
    const SECTION_SPACING = 5;
    const ITEM_SPACING = 4;
    const LINE_SPACING = 4.5;

    pdfDoc.setFont('helvetica', 'normal');
    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(20);
    pdfDoc.text(name, pageWidth / 2, yPos, { align: 'center' });
    yPos += 7;

    pdfDoc.setFont('helvetica', 'italic');
    pdfDoc.setFontSize(11);
    pdfDoc.text(title, pageWidth / 2, yPos, { align: 'center' });
    yPos += 5;

    pdfDoc.setFont('helvetica', 'normal');
    pdfDoc.setFontSize(9);
    
    const emailText = contact.email;
    const phoneText = contact.phone;
    const linkedinText = contact.linkedin.text;
    const githubText = contact.github.text;
    const portfolioText = contact.portfolio.text;
    const separator = ' | ';
    
    const emailWidth = pdfDoc.getTextWidth(emailText);
    const phoneWidth = pdfDoc.getTextWidth(phoneText);
    const linkedinWidth = pdfDoc.getTextWidth(linkedinText);
    const githubWidth = pdfDoc.getTextWidth(githubText);
    const portfolioWidth = pdfDoc.getTextWidth(portfolioText);
    const separatorWidth = pdfDoc.getTextWidth(separator);
    
    const totalContactWidth = emailWidth + separatorWidth + phoneWidth + separatorWidth + 
                             linkedinWidth + separatorWidth + githubWidth + separatorWidth + portfolioWidth;
    
    let contactX = (pageWidth - totalContactWidth) / 2;
    
    pdfDoc.setTextColor(0, 0, 0);
    pdfDoc.text(emailText, contactX, yPos);
    contactX += emailWidth + separatorWidth;
    
    pdfDoc.text(phoneText, contactX, yPos);
    contactX += phoneWidth + separatorWidth;
    
    pdfDoc.setTextColor(37, 99, 235)
    pdfDoc.textWithLink(linkedinText, contactX, yPos, { url: contact.linkedin.url });
    contactX += linkedinWidth + separatorWidth;
    
    pdfDoc.textWithLink(githubText, contactX, yPos, { url: contact.github.url });
    contactX += githubWidth + separatorWidth;
    
    pdfDoc.textWithLink(portfolioText, contactX, yPos, { url: contact.portfolio.url });
    
    pdfDoc.setTextColor(0, 0, 0);
    
    yPos += 4;
    pdfDoc.setLineWidth(0.5);
    pdfDoc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 6;

    const addSection = (title) => {
      pdfDoc.setFont('helvetica', 'bold');
      pdfDoc.setFontSize(11);
      pdfDoc.text(title.toUpperCase(), margin, yPos);
      yPos += 1;
      pdfDoc.setLineWidth(0.3);
      pdfDoc.line(margin, yPos, pageWidth - margin, yPos);
      yPos += SECTION_SPACING;
    };

    // PROFESSIONAL SUMMARY
    addSection(professionalSummary.title);
    pdfDoc.setFont('helvetica', 'normal');
    pdfDoc.setFontSize(9);
    const summaryLines = pdfDoc.splitTextToSize(professionalSummary.content, contentWidth);
    pdfDoc.text(summaryLines, margin, yPos);
    yPos += summaryLines.length * LINE_SPACING + SECTION_SPACING -3;

    // TECHNICAL SKILLS - FIXED to match second photo format
    addSection(technicalSkills.title);
    pdfDoc.setFontSize(9);
    
    technicalSkills.skills.forEach(({category, content}) => {
      pdfDoc.setFont('helvetica', 'bold');
      const categoryText = `${category}: `;
      const categoryWidth = pdfDoc.getTextWidth(categoryText);
      
      // Calculate available width for the first line (after category)
      const firstLineWidth = contentWidth - categoryWidth;
      
      // Split the content for the first line (after category)
      const firstLineContent = content;
      const firstLineChunks = pdfDoc.splitTextToSize(firstLineContent, firstLineWidth);
      
      // Print category and first chunk of content on same line
      pdfDoc.text(categoryText, margin, yPos);
      
      if (firstLineChunks.length > 0) {
        pdfDoc.setFont('helvetica', 'normal');
        pdfDoc.text(firstLineChunks[0], margin + categoryWidth, yPos);
        yPos += LINE_SPACING;
        
        // If there are more chunks (text wrapped), print them at margin + categoryWidth
        for (let i = 1; i < firstLineChunks.length; i++) {
          pdfDoc.text(firstLineChunks[i], margin + categoryWidth, yPos);
          yPos += LINE_SPACING;
        }
      } else {
        yPos += LINE_SPACING;
      }
    });
    
    yPos += SECTION_SPACING;

    // DATA ANALYSIS PROJECTS
    addSection(projects.title);
    
    projects.items.forEach((project, index) => {
      pdfDoc.setFont('helvetica', 'bold');
      pdfDoc.setFontSize(10);
      pdfDoc.setTextColor(37, 99, 235)
      pdfDoc.textWithLink(project.title, margin, yPos, { url: project.url });
      pdfDoc.setTextColor(0, 0, 0);
      pdfDoc.setFont('helvetica', 'normal');
      pdfDoc.text(project.date, pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      
      pdfDoc.setFont('helvetica', 'normal');
      pdfDoc.setFontSize(9);
      project.bullets.forEach(item => {
        const bulletItem = `• ${item}`;
        const lines = pdfDoc.splitTextToSize(bulletItem, contentWidth - 3);
        pdfDoc.text(lines, margin + 2, yPos);
        yPos += lines.length * LINE_SPACING;
      });
      
      if (index < projects.items.length - 1) {
        yPos += SECTION_SPACING;
      }
    });
    yPos += SECTION_SPACING;

    // PROFESSIONAL EXPERIENCE
    addSection(experience.title);
    
    experience.items.forEach((exp, index) => {
      pdfDoc.setFont('helvetica', 'bold');
      pdfDoc.setFontSize(10);
      pdfDoc.text(exp.title, margin, yPos);
      pdfDoc.setFont('helvetica', 'normal');
      pdfDoc.text(exp.date, pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      pdfDoc.setFont('helvetica', 'italic');
      pdfDoc.setFontSize(9);
      pdfDoc.text(exp.company, margin, yPos);
      yPos += ITEM_SPACING;
      
      pdfDoc.setFont('helvetica', 'normal');
      pdfDoc.setFontSize(9);
      exp.bullets.forEach(item => {
        const bulletItem = `• ${item}`;
        const lines = pdfDoc.splitTextToSize(bulletItem, contentWidth - 3);
        pdfDoc.text(lines, margin + 2, yPos);
        yPos += lines.length * LINE_SPACING;
      });
      
      if (index < experience.items.length - 1) {
        yPos += SECTION_SPACING;
      }
    });
    yPos += SECTION_SPACING;

    // EDUCATION
    addSection(education.title);
    
    education.items.forEach((edu, index) => {
      pdfDoc.setFont('helvetica', 'bold');
      pdfDoc.setFontSize(10);
      pdfDoc.text(edu.degree, margin, yPos);
      pdfDoc.setFont('helvetica', 'normal');
      pdfDoc.text(edu.institution, pageWidth - margin, yPos, { align: 'right' });
      yPos += ITEM_SPACING;
      pdfDoc.setFont('helvetica', 'normal');
      pdfDoc.setFontSize(9);
      pdfDoc.text(edu.details, margin, yPos);
      
      if (index < education.items.length - 1) {
        yPos += SECTION_SPACING;
      } else {
        yPos += SECTION_SPACING + 3;
      }
    });

    // CERTIFICATIONS
    addSection(certifications.title);
    pdfDoc.setFont('helvetica', 'normal');
    pdfDoc.setFontSize(9);
    
    certifications.items.forEach((cert, index) => {
      pdfDoc.setTextColor(37, 99, 235)
      pdfDoc.textWithLink(cert.name, margin, yPos, { url: cert.url });
      pdfDoc.setTextColor(0, 0, 0);
      pdfDoc.text(cert.date, pageWidth - margin, yPos, { align: 'right' });
      
      if (index < certifications.items.length - 1) {
        yPos += ITEM_SPACING;
      }
    });

    pdfDoc.save(pdf.fileName);
    
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
              <span className="contact-text">{contact.email}</span>
            </span>
            <span className="contact-item">
              <Phone size={16} />
              <span className="contact-text">{contact.phone}</span>
            </span>
          </div>
          
          <div className="contact-line-mobile" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <span className="contact-item">
              <Linkedin size={16} />
              <a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="contact-link">{contact.linkedin.text}</a>
            </span>
            <span className="contact-item">
              <Github size={16} />
              <a href={contact.github.url} target="_blank" rel="noopener noreferrer" className="contact-link">{contact.github.text}</a>
            </span>
            <span className="contact-item">
              <Globe size={16} />
              <a href={contact.portfolio.url} target="_blank" rel="noopener noreferrer" className="contact-link">{contact.portfolio.text}</a>
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
              <span className="contact-text">{contact.email}</span>
            </span>
            <span className="separator">|</span>
            <span className="contact-item">
              <Phone size={16} />
              <span className="contact-text">{contact.phone}</span>
            </span>
            <span className="separator">|</span>
            <span className="contact-item">
              <Linkedin size={16} />
              <a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="contact-link">{contact.linkedin.text}</a>
            </span>
            <span className="separator">|</span>
            <span className="contact-item">
              <Github size={16} />
              <a href={contact.github.url} target="_blank" rel="noopener noreferrer" className="contact-link">{contact.github.text}</a>
            </span>
            <span className="separator">|</span>
            <span className="contact-item">
              <Globe size={16} />
              <a href={contact.portfolio.url} target="_blank" rel="noopener noreferrer" className="contact-link">{contact.portfolio.text}</a>
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {/* Resume Selector Buttons - Added marginTop to push below navbar */}
      <div className="resume-selector" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px',
        flexWrap: 'wrap',
        marginTop: '70px', // Added to push below navbar
        padding: '5px'
      }}>

                <button
          onClick={() => handleResumeChange('Data Analyst')}
          style={{
            padding: '5px 10px',
            backgroundColor: title === 'Data Analyst' ? '#1e5a8e' : '#f0f0f0',
            color: title === 'Data Analyst' ? 'white' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: title === 'Data Analyst' ? 'bold' : 'normal',
            transition: 'all 0.3s ease'
          }}
        >
          Data Analyst
        </button>

        
        <button
          onClick={() => handleResumeChange('Data Scientist')}
          style={{
            padding: '5px 10px',
            backgroundColor: title === 'Data Scientist' ? '#1e5a8e' : '#f0f0f0',
            color: title === 'Data Scientist' ? 'white' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: title === 'Data Scientist' ? 'bold' : 'normal',
            transition: 'all 0.3s ease'
          }}
        >
          Data Scientist
        </button>
        
        <button
          onClick={() => handleResumeChange('AI Engineer')}
          style={{
            padding: '5px 10px',
            backgroundColor: title === 'AI Engineer' ? '#1e5a8e' : '#f0f0f0',
            color: title === 'AI Engineer' ? 'white' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: title === 'AI Engineer' ? 'bold' : 'normal',
            transition: 'all 0.3s ease'
          }}
        >
          AI Engineer
        </button>


        <button
          onClick={() => handleResumeChange('Machine Learning Engineer')}
          style={{
            padding: '5px 10px',
            backgroundColor: title === 'Machine Learning Engineer' ? '#1e5a8e' : '#f0f0f0',
            color: title === 'Machine Learning Engineer' ? 'white' : '#333',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: title === 'Machine Learning Engineer' ? 'bold' : 'normal',
            transition: 'all 0.3s ease'
          }}
        >
          ML Engineer
        </button>
      </div>
      
      <main className="resume-container" ref={resumeRef} style={{ paddingTop: '0' }}>
        <header className="resume-header">
          <h1>{name}</h1>
          <h2 className="professional-title">{title}</h2>
          <ContactInfo />
        </header>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">{professionalSummary.title}</h3>
          </div>
          <p className="summary-text">
            {professionalSummary.content}
          </p>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">{technicalSkills.title}</h3>
          </div>
          <div className="skills-list">
            {technicalSkills.skills.map((skill, index) => (
              <div key={index} className="skill-line">
                <span className="skill-category">{skill.category}:</span> {skill.content}
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">{projects.title}</h3>
          </div>
          
          {projects.items.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h4 className="project-title">
                  <a href={project.url} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="project-link">
                    {project.title}
                  </a>
                </h4>
                <span className="project-date">{project.date}</span>
              </div>
              <ul className="project-bullets">
                {project.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">{experience.title}</h3>
          </div>
          
          {experience.items.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h4 className="experience-title">{exp.title}</h4>
                <span className="experience-date">{exp.date}</span>
              </div>
              <p className="company-name">{exp.company}</p>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">{education.title}</h3>
          </div>
          
          {education.items.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h4 className="education-title">{edu.degree}</h4>
                <span className="education-institution">{edu.institution}</span>
              </div>
              <p className="education-details">{edu.details}</p>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <div className="section-header">
            <h3 className="section-title">{certifications.title}</h3>
          </div>
          
          {certifications.items.map((cert, index) => (
            <div key={index} className="cert-item">
              <a href={cert.url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="cert-link">
                {cert.name}
              </a>
              <span className="cert-date">{cert.date}</span>
            </div>
          ))}
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