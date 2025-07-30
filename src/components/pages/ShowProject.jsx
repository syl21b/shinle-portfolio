import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import './_showProject.css'; // Assuming this CSS file contains the .project-title-ongoing class

export default function ShowProject() {
  const navigate = useNavigate();

  const projects = useMemo(() => [
    {
      id: 1,
      title: "World Stock Market Analysis & Prediction",
      iframeSrc: "https://public.tableau.com/views/StockMarket_17475986132330/Menu?:language=en-US&:display_count=yes&:showVizHome=no&:embed=y",
      isOngoing: false, // Explicitly mark as not ongoing
    },
    {
      id: 2,
      title: "Superstore Performance Analysis & Optimization",
      iframeSrc: "https://public.tableau.com/views/Superstore_17455418407990/ExecutiveSummaryDashboard?:language=en-US&:display_count=yes&:showVizHome=no&:embed=y",
      isOngoing: false,
    },
    {
      id: 3,
      title: "Bank Customer Churn Prediction & Analysis",
      iframeSrc: "https://public.tableau.com/views/BankChurn_17432134458270/CUSTOMERDEMOGRAPHICSDASHBOARD?:language=en-US&:sid=&:display_count=yes&:showVizHome=no&:embed=y",
      isOngoing: false,
    },
    {
      id: 4,
      title: "Predicting Used Car Prices with Machine Learning",
      iframeSrc: `https://docs.google.com/viewer?url=${encodeURIComponent(
        "https://raw.githubusercontent.com/syl21b/Car-Price-Prediction/main/Final%20Report_%20Car%20Price%20Prediction.pdf"
      )}&embedded=true`,
      isOngoing: false,
    },
    {
      id: 5,
      title: "Customer Churn Prediction with Machine Learning",
      iframeSrc: `https://docs.google.com/viewer?url=${encodeURIComponent(
        "https://raw.githubusercontent.com/syl21b/Churn_Prediction/main/Report.pdf"
      )}&embedded=true`,
      isOngoing: false,
    },
    {
      id: 6,
      title: "Individual Market Medical Plan Data Analysis (2025)",
      iframeSrc: "https://placehold.co/600x400/E0E0E0/333333?text=Project+Ongoing",
      isOngoing: true, // Mark this project as ongoing
    },
  ], []);

  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <section className="section-projects" id="projects">
      <div className="container">
        <h2 className="heading">
          Featured <span className="heading-span">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              <div className="project-media">
                {/* Check if iframeSrc is a placeholder image or a .png */}
                {project.iframeSrc.endsWith(".png") || project.iframeSrc.includes("placehold.co") ? (
                  <img
                    src={project.iframeSrc}
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      // Fallback image if the original fails to load
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found";
                    }}
                  />
                ) : (
                  <iframe
                    title={project.title}
                    src={project.iframeSrc}
                    className="project-iframe"
                    allowFullScreen
                    loading="lazy" // Lazy load iframes for performance
                  />
                )}
              </div>

              <div className="project-content">
                <h3 className={`project-title ${project.isOngoing ? 'project-title-ongoing' : ''}`}>
                  {project.title}
                </h3>
              </div>

              <div
                className={`project-overlay ${hoveredProjectId === project.id ? "show" : ""}`}
              >
                <button
                  className="view-detail-button"
                  onClick={() => navigate(`/showcase/${project.id}`)} // Correct route for navigation
                >
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
