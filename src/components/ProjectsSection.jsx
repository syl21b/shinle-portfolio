import React, { useState, useMemo } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }

const convertMarkdownBold = (text) =>
  text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  const projects = useMemo(() => [
    {
      id: 1,
      type: "tableau",
      date: "May 2025 - June 2025",
      title: "World Stock Market Analysis & Prediction",
      description: "Unlocking advanced insights and predictive power for global stock markets to guide smarter investment and trading strategies.",
      longDescription: `
        <p>This project integrates **historical market data** with **machine learning models** (LSTM, XGBoost, Random Forest) to enhance investment and trading decisions. It provides **interactive dashboards** (Tableau), uses SQL for data transformation, and Python for complex analytics across **60+ brands and 10+ industries** (2000-2025).</p>
        <p>Key insights include identifying '<strong>panic selling</strong>' and '<strong>buy-the-dip</strong>' opportunities, validating technical signals (VWAP, RSI, MA crossovers), and analyzing corporate action impacts. The platform aims to provide **actionable recommendations** for risk mitigation and investment optimization.</p>
      `,
      tags: [
        "Tableau", "SQL", "Python", "Machine Learning", "Financial Markets",
        "Time Series", "Forecasting", "Investment Strategy", "LSTM", "XGBoost"
      ],
      linkText: "View Dashboard",
      linkHref: "https://public.tableau.com/views/StockMarket_17475986132330/Menu?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
      buttonTitle: "Open World Stock Market Dashboard in Tableau Public",
      iframeSrc: "https://public.tableau.com/views/StockMarket_17475986132330/Menu?:language=en-US&:sid=&:display_count=yes&:showVizHome=no&:embed=y",
      demoLinkText: "View Code",
      demoLinkHref: "https://github.com/syl21b/world_stock_market.git",
      demoButtonTitle: "View World Stock Market Code on GitHub",
      buttonVariant: "btn-primary",
      buttonVariant2: "btn-outline",
      imagePreview: "https://placehold.co/600x400/D0F0C0/34495E?text=Stock+Market+Preview",
    },
    {
      id: 2,
      type: "tableau",
      date: "Apr 2025 - May 2025",
      title: "Superstore Performance Analysis & Optimization",
      description: "Driving strategic growth and efficiency through deep analysis of Superstore sales, profit, and customer dynamics.",
      longDescription: `
        <p>This project offers comprehensive analysis of Superstore performance via **interconnected Tableau dashboards**. It reveals **sales trends** (2014-2017), declining **profit margins** by Q4 2017, and rising **late shipments** in Office Supplies.</p>
        <p>Insights span **geographic profit variations**, identification of **high-margin vs. low-margin products** (e.g., Accessories vs. Bookcases), and **customer behavior analysis** optimizing marketing spend. **Key recommendations** focus on pricing adjustments, targeted market expansion, and enhanced customer retention.</p>
      `,
      tags: [
        "Tableau", "Data Analysis", "Business Intelligence", "Sales Performance",
        "Profit Optimization", "Customer Behavior", "Retail Analytics"
      ],
      linkText: "View Dashboard",
      linkHref: "https://public.tableau.com/views/Superstore_17455418407990/ExecutiveSummaryDashboard?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
      buttonTitle: "Open Superstore Analysis Dashboard in Tableau Public",
      iframeSrc: "https://public.tableau.com/views/Superstore_17455418407990/ExecutiveSummaryDashboard?:language=en-US&:sid=&:display_count=yes&:showVizHome=no&:embed=y",
      demoLinkText: "View Code",
      demoLinkHref: "https://github.com/syl21b/Superstore.git",
      demoButtonTitle: "View Superstore Analysis Code on GitHub",
      buttonVariant: "btn-primary",
      buttonVariant2: "btn-outline",
      imagePreview: "https://placehold.co/600x400/D0F0C0/34495E?text=Superstore+Preview",
    },
    {
      id: 3,
      type: "pdf",
      date: "Aug 2023 - Dec 2023",
      title: "Predicting Used Car Prices with Machine Learning",
      description: "Accurately forecasting used car market values to optimize pricing strategies and enhance consumer trust.",
      longDescription: `
        <p>This project applies **Multiple Linear Regression**, **Decision Trees**, **Random Forest**, **Gradient Boosting**, and **SVM** to over **760,000 used car sales records** (2010-2023) for price prediction. After extensive **data preprocessing** (missing values, outlier detection with IQR, feature engineering), models were evaluated using RMSE, MAE, R², and MAPE.</p>
        <p><strong>Gradient Boosting</strong> emerged as the most effective model (<strong>R² of 0.859</strong>), with engine displacement, mileage, highway MPG, and year as key price drivers. The study confirms ML models' suitability for predicting used car prices, especially Gradient Boosting, and suggests future work on model generalization.</p>
      `,
      tags: [
        "Machine Learning", "Regression", "Python", "Data Preprocessing",
        "Gradient Boosting", "Random Forest", "SVM", "Predictive Modeling"
      ],
      linkText: "Open Report",
      linkHref: "https://github.com/syl21b/Car-Price-Prediction/blob/351296bcfdef19fc7f5d38c8808b6cbd8573ca68/Final%20Report_%20Car%20Price%20Prediction.pdf",
      buttonTitle: "Open Car Price Prediction Report (PDF) in new tab",
      iframeSrc: `https://docs.google.com/viewer?url=${encodeURIComponent("https://raw.githubusercontent.com/syl21b/Car-Price-Prediction/main/Final%20Report_%20Car%20Price%20Prediction.pdf")}&embedded=true`,
      buttonVariant: "btn-primary",
      demoLinkText: "View Code",
      demoLinkHref: "https://github.com/syl21b/Car-Price-Prediction/blob/351296bcfdef19fc7f5d38c8808b6cbd8573ca68/Car%20Price%20Prediction.ipynb",
      demoButtonTitle: "View Car Price Prediction Code on GitHub",
      buttonVariant2: "btn-outline",
      imagePreview: "https://placehold.co/600x400/D0F0C0/34495E?text=Car+Price+Prediction+Preview",
    },
    {
      id: 4,
      type: "pdf",
      date: "Oct 2023 - Dec 2023",
      title: "Customer Churn Prediction with Machine Learning",
      description: "Forecasting customer attrition to enhance retention strategies and maximize long-term business value.",
      longDescription: `
        <p>This project addresses customer churn prediction using a telecommunications dataset of **70,000 records** with **21 features**. It employs a **resampling strategy (SMOTE)** for imbalance and compares **Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, AdaBoost, SVM**, and a **Neural Network**.</p>
        <p>Evaluation based on **F1-score** and **balanced accuracy** showed **AdaBoost** as optimal (68-72% balanced accuracy). Feature importance revealed 'AverageViewingDuration', 'ViewingHoursPerWeek', and 'AccountAge' as key drivers, contributing to a **90% prediction success rate**. The project emphasizes retention and suggests future work on model integration and Explainable AI.</p>
      `,
      tags: [
        "Machine Learning", "Churn Prediction", "Data Imbalance", "SMOTE",
        "AdaBoost", "Neural Network", "Python", "Scikit-learn", "Predictive Analytics"
      ],
      linkText: "Open Report",
      linkHref: "https://github.com/syl21b/Churn_Prediction/blob/ece7528f3ee130b422453e4c4ed5f7784ddc1c87/Report.pdf",
      buttonTitle: "Open Customer Churn Prediction Report (PDF)",
      iframeSrc: `https://docs.google.com/viewer?url=${encodeURIComponent("https://raw.githubusercontent.com/syl21b/Churn_Prediction/main/Report.pdf")}&embedded=true`,
      demoLinkText: "View Code",
      demoLinkHref: "https://github.com/syl21b/Churn_Prediction/blob/ece7528f3ee130b422453e4c4ed5f7784ddc1c87/Project-Churn%20Prediction.ipynb",
      demoButtonTitle: "View Customer Churn Prediction Code on GitHub",
      buttonVariant: "btn-primary",
      buttonVariant2: "btn-outline",
      imagePreview: "https://placehold.co/600x400/D0F0C0/34495E?text=Churn+Prediction+Preview",
    },
    {
      id: 5,
      type: "analytics",
      date: "Ongoing",
      title: "Individual Market Medical Plan Data Analysis (2025)",
      description: "Demystifying healthcare costs and empowering informed decisions through in-depth analysis of 2025 health plan data, with a focus on personalized cost projections.",
      longDescription: `
        <p>This ongoing project tackles **opaque healthcare costs** by analyzing 2025 Health Plan Data from Federally-Facilitated Marketplaces. It demystifies **premiums, coverage, and rating scenarios** across demographics through **data acquisition, transformation, and interactive visualizations**.</p>
        <p>Key insights include quantifying costs for various household compositions and assessing plan availability. Technologies used are **Python** (Pandas, NumPy), **Tableau / Power BI**, and **SQL**. The project's unique aim is to predict a consumer's *actual total annual healthcare cost* based on their *projected individual health needs*, providing **personalized total cost projections** for hypothetical health scenarios to revolutionize decision-making with predictive financial clarity.</p>
      `,
      tags: [
        "Healthcare", "Insurance", "Data Analysis", "Health Policy",
        "Predictive Analytics", "Cost Transparency", "Python", "Tableau"
      ],
      linkText: "Explore Data",
      linkHref: "#",
      buttonTitle: "Explore 2025 Health Plan Data",
      iframeSrc: null,
      demoLinkText: "View Overview",
      demoLinkHref: "#",
      demoButtonTitle: "View Project Overview (Coming Soon)",
      buttonVariant: "btn-primary",
      buttonVariant2: "btn-outline",
      imagePreview: "/assets/images/placeholder-medical-plan.png",
      isOngoing: true,
    }
  ], []);

  return (
    <section className="portfolio section-dark" id="projects">
      <div className="container">
        <h2 className="my-heading text-center">
          Featured <span className="heading-span">Projects</span>
        </h2>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              // REMOVED: lg:flex-row-reverse conditional class
              className="port-card card group"
            >
              {/* Project Visual (Image or Iframe) */}
              <div className="port-card-media">
                {project.iframeSrc ? (
                  <iframe
                    title={project.title}
                    src={project.iframeSrc}
                    frameBorder="0"
                    allowFullScreen
                    className="dashboard-iframe"
                  />
                ) : (
                  project.imagePreview && (
                    <img
                      src={project.imagePreview}
                      alt={`Preview of ${project.title}`}
                      className="project-image"
                    />
                  )
                )}

                {/* Overlay for ongoing projects */}
                {project.isOngoing && (
                  <div className="ongoing-overlay">
                    <span className="ongoing-text">Ongoing / Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Project Details (Text) */}
              <div className="port-card-text-content">
                <div>
                  <span className="text-sm font-semibold text-[var(--accent)] mb-2 block">
                    {project.date}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--dark)]">
                    {project.title}
                  </h3>

                  <p className="project-short-description mt-2">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <div
                      className={`long-description ${expandedDescriptions[index] ? 'expanded' : ''}`}
                      dangerouslySetInnerHTML={{ __html: convertMarkdownBold(project.longDescription) }}
                    />
                    <button
                      onClick={() => toggleDescription(index)}
                      className="description-toggle mt-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors duration-200 flex items-center"
                    >
                      {expandedDescriptions[index] ? 'Show Less' : 'Show More'}
                      <ChevronRight className={`inline ml-1 h-4 w-4 transition-transform ${expandedDescriptions[index] ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  <div className="project-tags-container">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-buttons-container">
                  {project.linkHref && (
                    <a
                      href={project.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${project.buttonVariant}`}
                      title={project.buttonTitle}
                    >
                      {project.linkText}
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}

                  {project.demoLinkHref && (
                    <a
                      href={project.demoLinkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${project.buttonVariant2 || 'btn-outline'}`}
                      title={project.demoButtonTitle}
                    >
                      {project.demoLinkText}
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}