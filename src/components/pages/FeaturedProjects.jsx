import React, { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '/src/styles/_featuredProjects.css';

// Import all image previews
import mentivioPreview from '/src/components/image/mentivio-preview.png';
import stockMarketPreview from '/src/components/image/stockMarket.png';
import superstorePreview from '/src/components/image/superstore.png';
import bankchurnPreview from '/src/components/image/bankchurn.png';
import carpricePreview from '/src/components/image/carprice.png';
import churnPreview from '/src/components/image/churn.png';

export default function ShowProject() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoMode, setIsAutoMode] = useState(true);
  const autoPlayInterval = useRef(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const projects = useMemo(() => [
    {
      id: 6,
      title: "Mentivio - Mentalhealth Assessment Platform",
      description: "AI-powered mental health platform with clinical ML assessments and multi-language support.",
      isOngoing: false,
      imagePreview: mentivioPreview,
      linkHref: "https://mentivio-web.onrender.com/home?lang=en",
      githubHref: "https://github.com/syl21b/mentivio",
      type: "fullstack",
    },
    {
      id: 5,
      title: "World Stock Market Analysis & Prediction",
      description: "Comprehensive analysis and predictive modeling of global stock markets using advanced ML.",
      isOngoing: false,
      imagePreview: stockMarketPreview,
      linkHref: "https://public.tableau.com/views/StockMarket_17475986132330/Menu?:language=en-US&:display_count=n&:origin=viz_share_link",
      githubHref: "https://github.com/syl21b/world_stock_market.git",
      type: "tableau",
    },
    {
      id: 4,
      title: "Superstore Performance Analysis & Optimization",
      description: "Multi-dimensional retail analytics for sales, profit, and operational optimization.",
      isOngoing: false,
      imagePreview: superstorePreview,
      linkHref: "https://public.tableau.com/views/Superstore_17455418407990/ExecutiveSummaryDashboard?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
      githubHref: "https://github.com/syl21b/Superstore.git",
      type: "tableau",
    },
    {
      id: 3,
      title: "Bank Customer Churn Prediction & Analysis",
      description: "Predictive analytics and interactive dashboards for customer retention strategies.",
      isOngoing: false,
      imagePreview: bankchurnPreview,
      linkHref: "https://public.tableau.com/views/BankChurn_17432134458270/CUSTOMERDEMOGRAPHICSDASHBOARD?:language=en-US&:sid=&:display_count=yes&:showVizHome=no&:embed=y",
      githubHref: "https://github.com/syl21b/Churn_Prediction",
      type: "tableau",
    },
    {
      id: 2,
      title: "Predicting Used Car Prices with Machine Learning",
      description: "ML models for accurate used car price prediction using ensemble methods.",
      isOngoing: false,
      imagePreview: carpricePreview,
      linkHref: "https://github.com/syl21b/Car-Price-Prediction/blob/main/Final%20Report_%20Car%20Price%20Prediction.pdf",
      githubHref: "https://github.com/syl21b/Car-Price-Prediction/blob/main/Car%20Price%20Prediction.ipynb",
      type: "pdf",
    },
    {
      id: 1,
      title: "Customer Churn Prediction with Machine Learning",
      description: "Telecommunications customer churn prediction using multiple ML algorithms.",
      isOngoing: false,
      imagePreview: churnPreview,
      linkHref: "https://github.com/syl21b/Churn_Prediction/blob/ece7528f3ee130b422453e4c4ed5f7784ddc1c87/Report.pdf",
      githubHref: "https://github.com/syl21b/Churn_Prediction/blob/ece7528f3ee130b422453e4c4ed5f7784ddc1c87/Project-Churn%20Prediction.ipynb",
      type: "pdf",
    },
    {
      id: 0,
      title: "Individual Market Medical Plan Data Analysis (2025)",
      description: "Healthcare analytics project analyzing insurance premiums, coverage, and market trends.",
      isOngoing: true,
      imagePreview: "https://placehold.co/600x400/E0E0E0/333333?text=Medical+Plan+Analysis",
      linkHref: "#",
      githubHref: "#",
      type: "analytics",
    },
  ], []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoMode) {
      autoPlayInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 5 seconds
    } else {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isAutoMode, projects.length]);

  const handleNext = () => {
    setIsAutoMode(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIsAutoMode(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index) => {
    setIsAutoMode(false);
    setCurrentIndex(index);
  };

  const handleProjectClick = (project, e) => {
    if (e.target.closest('.view-detail-button')) {
      return;
    }
    
    if (project.linkHref && project.linkHref !== "#") {
      window.open(project.linkHref, '_blank', 'noopener,noreferrer');
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="section-projects" id="projects">
      <div className="container">
         <div className="text-center mb-10">
        <h2 className="my-heading">
          Featured <span className="heading-span">Projects</span>
        </h2>
        </div>

        <div className="carousel-container">
          {/* Navigation buttons */}
          <button 
            className="carousel-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous project"
          >
            ‹
          </button>

          {/* Carousel content */}
          <div className="carousel-content">
            <div 
              className="project-card"
              onMouseEnter={() => setHoveredProjectId(currentProject.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              onClick={(e) => handleProjectClick(currentProject, e)}
              style={{ cursor: currentProject.linkHref !== "#" ? 'pointer' : 'default' }}
            >
              <div className="project-media">
                <img
                  src={currentProject.imagePreview}
                  alt={currentProject.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/D0F0C0/34495E?text=Project+Preview";
                  }}
                />
                
                {currentProject.isOngoing && (
                  <div className="ongoing-overlay">
                    <span className="ongoing-text">Ongoing / Coming Soon</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className={`project-title ${currentProject.isOngoing ? 'project-title-ongoing' : ''}`}>
                  {currentProject.title}
                </h3>
                
                {/* Added project description */}
                <div className="project-description">
                  {currentProject.description}
                </div>
                
                <div className="project-quick-actions">
                  {currentProject.linkHref && currentProject.linkHref !== "#" && (
                    <button 
                      className="quick-action-btn live-demo-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(currentProject.linkHref, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      {currentProject.type === "pdf" ? "View PDF" : 
                       currentProject.type === "tableau" ? "Open Dashboard" : "Live Demo"}
                    </button>
                  )}
                  
                  {currentProject.githubHref && currentProject.githubHref !== "#" && (
                    <button 
                      className="quick-action-btn github-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(currentProject.githubHref, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      View Code
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`project-overlay ${hoveredProjectId === currentProject.id ? "show" : ""}`}
              >
                {/* Added description in overlay as well for consistency */}
                <div className="overlay-description">
                  {currentProject.description}
                </div>
                <button
                  className="view-detail-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/showcase/${currentProject.id}`);
                  }}
                >
                  View Detail
                </button>
              </div>
            </div>

            {/* Auto-play indicator */}
            <div className="auto-play-indicator">
              <span className={`indicator-dot ${isAutoMode ? 'active' : ''}`}></span>
              <span className="indicator-text">
                {isAutoMode ? 'Auto-cycling (5s)' : 'Manual mode'}
              </span>
            </div>
          </div>

          <button 
            className="carousel-btn next-btn"
            onClick={handleNext}
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        {/* Project indicators */}
        <div className="project-indicators">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Project counter */}
        <div className="project-counter">
          {currentIndex + 1} / {projects.length}
        </div>
      </div>
    </section>
  );
}