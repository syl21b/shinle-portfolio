// src/components/AboutSection.jsx
import React from "react";
// Import Lucide icons - updated to include more relevant icons
import {
  BarChart2,   // For Data Analysis & BI
  Cpu,          // For Machine Learning Development
  Layers,       // For Data Preprocessing & Feature Engineering
  Database,     // For SQL & Data Pipeline Architecture
  TrendingUp,   // For Time Series & Financial Analytics
  Lightbulb,    // For AI & Emerging Analytics (new ideas)
  CheckSquare,  // For Impact-Driven Recommendations (validation, results)
  Activity,     // For Model Optimization & Evaluation (monitoring performance)
  Cloud,        // For End-to-End Project Delivery (deployment, holistic)
  Filter,       // For Data Cleaning
  BookOpen      // For Applied Mathematics (optional, can replace another if desired)
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="about section-dark" id="about">
      <div className="container">
        <h2 className="my-heading text-center">
          Areas of <span className="heading-span">Expertise</span> &amp; <span className="heading-span">Impact</span>
        </h2>
        <p className="sub-heading text-center">
          Delving into diverse domains to extract insights, build intelligent systems, and drive impactful decisions, while demonstrating proven capabilities across the data lifecycle.
        </p>

        <div className="feature-grid">
          {[
            {
              icon: <BarChart2 />,
              title: "Data Analysis & Business Intelligence",
              description: "Transforming complex datasets into actionable business insights and crafting compelling dashboards for strategic decision-making.",
            },
            {
              icon: <Cpu />,
              title: "Machine Learning Development",
              description: "Designing, developing, evaluating, and deploying diverse machine learning models for predictive analytics and real-world problem-solving.",
            },
            {
              icon: <Layers />,
              title: "Data Preprocessing & Feature Engineering",
              description: "Expertly cleansing, transforming, and engineering features from raw data to optimize model performance and analytical accuracy.",
            },
            {
              icon: <Database />,
              title: "SQL & Data Pipeline Architecture",
              description: "Building robust SQL-based data pipelines for efficient data extraction, transformation, and management across diverse datasets.",
            },
            {
              icon: <TrendingUp />,
              title: "Time Series & Financial Analytics",
              description: "Specializing in temporal data analysis and advanced forecasting to derive critical market insights and inform strategic financial decisions.",
            },
            {
              icon: <Filter />, // New icon for Data Cleaning
              title: "Data Cleaning & Quality Assurance",
              description: "Meticulously identifying and resolving data inconsistencies, missing values, and outliers to ensure data integrity and reliability.",
            },
            {
              icon: <Lightbulb />,
              title: "AI & Emerging Analytics",
              description: "Actively exploring and applying advanced AI techniques, with a keen interest in innovative solutions for sound and video data analysis.",
            },
            {
              icon: <Activity />,
              title: "Model Optimization & Evaluation",
              description: "Meticulously optimizing model performance through hyperparameter tuning, cross-validation, and rigorous evaluation using metrics like R², RMSE, and balanced accuracy.",
            },
            {
              icon: <Cloud />, // Representing holistic project flow, including deployment
              title: "End-to-End Project Delivery",
              description: "Proven ability to manage data initiatives from initial data acquisition and preprocessing through to model deployment and actionable insight delivery.",
            },
          ].map((item, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}