import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ExternalLink, Brain, Shield, Bot, Globe, ChartLine, Database, Cloud } from "lucide-react";
import { projects } from "./projectsData";
import "/src/styles/Showcase.css";

export default function Showcase() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const initialIndex = projectId
    ? projects.findIndex((p) => p.id === Number(projectId))
    : 0;

  const [currentProjectIndex, setCurrentProjectIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  useEffect(() => {
    if (initialIndex !== -1 && initialIndex !== currentProjectIndex) {
      setCurrentProjectIndex(initialIndex);
    }
  }, [initialIndex, currentProjectIndex]);

  const currentProject = projects[currentProjectIndex];


  // Add this state hook (after other useState hooks)
const [showProjectList, setShowProjectList] = useState(false);

// Add this function for navigating to a specific project
const goToProject = (index) => {
  setCurrentProjectIndex(index);
  navigate(`/showcase/${projects[index].id}`);
  setShowProjectList(false);
};


  // MOVE THIS useEffect BELOW currentProject initialization
  useEffect(() => {
    // Check for form fields without ids/names
    const formFields = document.querySelectorAll('input, select, textarea, button[type="submit"]');
    formFields.forEach((field, index) => {
      if (!field.id && !field.name && field.tagName !== 'BUTTON') {
        field.id = `form-field-${Date.now()}-${index}`;
      }
    });
    
    // Warn about Grammarly if Tableau dashboard is shown
    if (currentProject?.type === 'tableau') {
      console.info('Tip: Some browser extensions might affect Tableau dashboard performance.');
    }
  }, [currentProject]); // Added currentProject as dependency

  // Icon mapping for tech icons
  const iconMap = {
    Brain,
    Shield,
    Bot,
    Globe,
    ChartLine,
    Database,
    Cloud
  };

  const goToNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    setCurrentProjectIndex(nextIndex);
    navigate(`/showcase/${projects[nextIndex].id}`);
  };

  const goToPrevProject = () => {
    const prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    setCurrentProjectIndex(prevIndex);
    navigate(`/showcase/${projects[prevIndex].id}`);
  };

  const convertMarkdownBold = (text) =>
    text ? text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") : "";

  if (!currentProject) {
    return (
      <section className="project-viewer-section">
        <div className="project-viewer-message">
          <p>No projects to display.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="project-viewer" className="section project-viewer-section">
      <div className="project-navigation-wrapper">
        <button 
          onClick={goToPrevProject} 
          className="nav-button" 
          aria-label="Previous Project"
          id="prev-project-btn"
          name="prev-project"
        >
          <ChevronLeft size={24} />
        </button>
        <div className={`project-title-and-date ${currentProject.isOngoing ? "blur-title" : ""}`}>
          <h2 className="project-viewer-heading">
            {currentProject.title}
            {currentProject.featured && (
              <span className="featured-badge-showcase">
                <Brain className="inline-icon" />
                Featured Project
              </span>
            )}
          </h2>
          {currentProject.date && <span className="project-date">{currentProject.date}</span>}
        </div>
        <button 
          onClick={goToNextProject} 
          className="nav-button" 
          aria-label="Next Project"
          id="next-project-btn"
          name="next-project"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={`project-viewer-main-container ${currentProject.isOngoing ? "project-ongoing" : ""} ${currentProject.featured ? "featured-project-showcase" : ""}`}>
        {/* Media */}
        <div className="project-media-full">
          {currentProject.iframeSrc ? (
            <div className="tableau-iframe-container">
              <iframe
                title={currentProject.title}
                src={currentProject.iframeSrc}
                frameBorder="0"
                allowFullScreen
                className="project-viewer-iframe"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
                name={`tableau-dashboard-${currentProject.id}`}
              />
              <span className="sr-only">
                Interactive Tableau dashboard: {currentProject.title}
              </span>
            </div>
          ) : currentProject.imagePreview ? (
            <img
              src={currentProject.imagePreview}
              alt={`Preview of ${currentProject.title}`}
              className="project-viewer-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/image/placeholder-project.png";
              }}
            />
          ) : (
            <div className="no-media-placeholder">
              <div className="placeholder-content">
                <Cloud size={48} className="placeholder-icon" />
                <p>Project Preview</p>
                <small>No media available</small>
              </div>
            </div>
          )}

          {/* Key Metrics Overlay for Featured Projects */}
          {currentProject.keyMetrics && (
            <div className="key-metrics-overlay">
              <div className="key-metrics-grid">
                {currentProject.keyMetrics.map((metric, i) => (
                  <div key={i} className="metric-card">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tech Icons for Mentivio */}
        {currentProject.techIcons && (
          <div className="tech-icons-section">
            <div className="tech-icons-container">
              {currentProject.techIcons.map((tech, i) => {
                const IconComponent = iconMap[tech.icon];
                return (
                  <div key={i} className="tech-icon-card">
                    <div className={`tech-icon-wrapper ${tech.color}`}>
                      {IconComponent ? <IconComponent size={28} /> : <Brain size={28} />}
                    </div>
                    <span className="tech-icon-label">{tech.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Overview */}
        <div className="project-overview">
          <p className="project-description-summary">{currentProject.description}</p>

          <div className="project-action-buttons">
            {currentProject.linkHref && (
              <a 
                href={currentProject.linkHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`project-btn ${currentProject.buttonVariant || 'btn-primary'}`}
                title={currentProject.buttonTitle}
                id="project-link"
                name="project-link"
              >
                {currentProject.linkText}
                <ExternalLink className="project-btn-icon" />
              </a>
            )}
            {currentProject.demoLinkHref && (
              <a 
                href={currentProject.demoLinkHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`project-btn ${currentProject.buttonVariant2 || 'btn-outline'}`}
                title={currentProject.demoButtonTitle}
                id="demo-link"
                name="demo-link"
              >
                {currentProject.demoLinkText}
                <ExternalLink className="project-btn-icon" />
              </a>
            )}
            {currentProject.datasetLink && (
              <a 
                href={currentProject.datasetLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-btn btn-outline"
                title="View project dataset"
                id="dataset-link"
                name="dataset-link"
              >
                View Dataset
                <ExternalLink className="project-btn-icon" />
              </a>
            )}
          </div>
        </div>

        <hr className="section-separator" />

        {/* Case Study Details */}
        <div className="project-case-study-details">
          <div className="case-study-section">
            <h3>
              <span className="case-study-icon">🎯</span>
              Problem:
            </h3>
            <div dangerouslySetInnerHTML={{ __html: convertMarkdownBold(currentProject.problem) }}></div>
          </div>
          <div className="case-study-section">
            <h3>
              <span className="case-study-icon">✨</span>
              Solution:
            </h3>
            <div dangerouslySetInnerHTML={{ __html: convertMarkdownBold(currentProject.solution) }}></div>
            {currentProject.contributions && (
              <>
                <h4 className="contributions-title">My Contributions:</h4>
                <ul className="contribution-list">
                  {currentProject.contributions.map((c, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: convertMarkdownBold(c) }}></li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Challenges */}
          {currentProject.challenges && currentProject.challenges.length > 0 && (
            <div className="case-study-section">
              <h3>
                <span className="case-study-icon">⚡</span>
                Challenges & Solutions:
              </h3>
              <ul className="challenge-list">
                {currentProject.challenges.map((challenge, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: convertMarkdownBold(challenge) }}></li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          {currentProject.results && (
            <div className="case-study-section">
              <h3>
                <span className="case-study-icon">📊</span>
                Results:
              </h3>
              <div dangerouslySetInnerHTML={{ __html: convertMarkdownBold(currentProject.results) }}></div>
            </div>
          )}

          {/* Future Enhancements */}
          {currentProject.futureEnhancements && (
            <div className="case-study-section">
              <h3>
                <span className="case-study-icon">🚀</span>
                Future Enhancements:
              </h3>
              <div dangerouslySetInnerHTML={{ __html: convertMarkdownBold(currentProject.futureEnhancements) }}></div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="case-study-section">
            <h3>
              <span className="case-study-icon">🛠️</span>
              Technologies Used:
            </h3>
            <div className="project-tech-used-tags project-grid-tags">
              {currentProject.technologies.map((tech, i) => (
                <span key={i} className="project-tag-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {currentProject.isOngoing && !currentProject.featured && (
          <div className="ongoing-overlay">
            <span className="ongoing-text">Ongoing / Coming Soon</span>
          </div>
        )}
      </div>

        {/* Mobile Bottom Navigation */}
  <div className="mobile-bottom-nav">
    <button 
      onClick={goToPrevProject} 
      className="mobile-nav-btn"
      aria-label="Previous Project"
    >
      <ChevronLeft size={20} />
    </button>
    
    <button 
      onClick={() => setShowProjectList(!showProjectList)}
      className="mobile-nav-btn mobile-nav-list-btn"
      aria-label="Project List"
    >
      <Menu size={20} />
      <span>Projects</span>
    </button>
    
    <button 
      onClick={goToNextProject} 
      className="mobile-nav-btn"
      aria-label="Next Project"
    >
      <ChevronRight size={20} />
    </button>
  </div>

  {/* Project List Modal for Mobile */}
  {showProjectList && (
    <div className="project-list-modal">
      <div className="project-list-modal-content">
        <div className="project-list-header">
          <h3>All Projects</h3>
          <button 
            onClick={() => setShowProjectList(false)}
            className="close-project-list"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="project-list-items">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-list-item ${currentProjectIndex === index ? 'active' : ''}`}
              onClick={() => goToProject(index)}
            >
              <div className="project-list-item-info">
                <span className="project-list-item-title">{project.title}</span>
                <span className="project-list-item-date">{project.date}</span>
              </div>
              {project.featured && (
                <span className="project-list-item-featured">Featured</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

    </section>
  );
}