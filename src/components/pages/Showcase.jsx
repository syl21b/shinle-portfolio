import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { projects } from "./projectsData";
import "./Showcase.css";

export default function Showcase() {
  const { projectId } = useParams(); // Get the projectId from URL params
  const initialIndex = projects.findIndex((p) => p.id === Number(projectId));

  const [currentProjectIndex, setCurrentProjectIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  useEffect(() => {
    if (initialIndex !== -1 && initialIndex !== currentProjectIndex) {
      setCurrentProjectIndex(initialIndex);
    }
  }, [initialIndex, currentProjectIndex]);

  const currentProject = projects[currentProjectIndex];

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
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
        <button onClick={goToPrevProject} className="nav-button" aria-label="Previous Project">
          <ChevronLeft size={24} />
        </button>
        <div className={`project-title-and-date ${currentProject.isOngoing ? "blur-title" : ""}`}>
          <h2 className="project-viewer-heading">{currentProject.title}</h2>
          {currentProject.date && <span className="project-date">{currentProject.date}</span>}
        </div>
        <button onClick={goToNextProject} className="nav-button" aria-label="Next Project">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className={`project-viewer-main-container ${currentProject.isOngoing ? 'project-ongoing' : ''}`}>
        <div className="project-media-full">
          {currentProject.iframeSrc ? (
            <iframe
              title={currentProject.title}
              src={currentProject.iframeSrc}
              frameBorder="0"
              allowFullScreen
              className="project-viewer-iframe"
            />
          ) : currentProject.imagePreview ? (
            <img
              src={currentProject.imagePreview}
              alt={`Preview of ${currentProject.title}`}
              className="project-viewer-image"
            />
          ) : (
            <div className="no-media-placeholder">No Media Available</div>
          )}
        </div>


        <div className="project-overview">
          <p className="project-description-summary">{currentProject.description}</p>

          <div className="project-action-buttons">
            {currentProject.linkHref && (
              <a
                href={currentProject.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn btn-primary"
                title={currentProject.buttonTitle}
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
                className="project-btn btn-outline"
                title={currentProject.demoButtonTitle}
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
                title={`View the dataset for ${currentProject.title}`}
              >
                View Dataset
                <ExternalLink className="project-btn-icon" />
              </a>
            )}
          </div>
        </div>

        <hr className="section-separator" />

        <div className="project-case-study-details">
          <div className="case-study-section">
            <h3>Problem:</h3>
            <p dangerouslySetInnerHTML={{ __html: convertMarkdownBold(currentProject.problem) }}></p>
          </div>

          <div className="case-study-section">
            <h3>Solution:</h3>
            <p dangerouslySetInnerHTML={{ __html: convertMarkdownBold(currentProject.solution) }}></p>
            {currentProject.contributions && currentProject.contributions.length > 0 && (
              <ul className="contribution-list">
                {currentProject.contributions.map((contribution, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: convertMarkdownBold(contribution) }}></li>
                ))}
              </ul>
            )}
          </div>

          <div className="case-study-section">
            <h3>Technologies Used:</h3>
            <div className="project-tech-used-tags project-grid-tags">
              {currentProject.technologies.map((tech, index) => (
                <span key={index} className="project-tag-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="case-study-section">
            <h3>Challenges & Learnings:</h3>
            {currentProject.challenges && currentProject.challenges.length > 0 && (
              <ul className="challenge-list">
                {currentProject.challenges.map((challenge, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: convertMarkdownBold(challenge) }}></li>
                ))}
              </ul>
            )}
          </div>

          {currentProject.results && (
            <div className="case-study-section">
              <h3>Results/Impact:</h3>
              <p dangerouslySetInnerHTML={{ __html: convertMarkdownBold(currentProject.results) }}></p>
            </div>
          )}

          {currentProject.futureEnhancements && (
            <div className="case-study-section">
              <h3>Future Enhancements:</h3>
              <p dangerouslySetInnerHTML={{ __html: convertMarkdownBold(currentProject.futureEnhancements) }}></p>
            </div>
          )}
        </div>

        {currentProject.isOngoing && (
          <div className="ongoing-overlay">
            <span className="ongoing-text">Ongoing / Coming Soon</span>
          </div>
        )}
      </div>
    </section>
  );
}