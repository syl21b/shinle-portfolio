import React from "react";
// Import Lucide icons - updated to include more relevant icons
import {
  BarChart2,   // For Data Analysis & BI
  Cpu,          // For Machine Learning Development
  Layers,       // For Data Preprocessing & Feature Engineering
  Database,     // For SQL & Data Pipeline Architecture
  TrendingUp,   // For Time Series & Financial Analytics
  // Lightbulb,    // For AI & Emerging Analytics (removed)
  CheckSquare,  // For Impact-Driven Recommendations (validation, results) - not used in this version
  Activity,     // For Model Optimization & Evaluation (monitoring performance)
  Cloud,        // For End-to-End Project Delivery (deployment, holistic)
  Filter,       // For Data Cleaning
  BookOpen      // For Applied Mathematics (optional, can replace another if desired) - not used in this version
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="about section-dark" id="about">
      <div className="container mx-auto px-4 py-16"> {/* Added mx-auto px-4 py-16 for better centering and padding */}
        <h2 className="my-heading text-center text-4xl font-bold text-white mb-4"> {/* Added Tailwind classes for styling */}
          Areas of <span className="heading-span text-blue-400">Expertise</span> &amp; <span className="heading-span text-blue-400">Impact</span>
        </h2>
        <p className="sub-heading text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto"> {/* Added Tailwind classes for styling */}
          Delving into diverse domains to extract insights, build intelligent systems, and drive impactful decisions, while demonstrating proven capabilities across the data lifecycle.
        </p>

        <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Responsive grid layout */}
          {[
            {
              icon: <BarChart2 size={36} className="text-blue-400" />,
              title: "Data Analysis & Business Intelligence",
              description: "Transforming complex datasets into actionable business insights and crafting compelling dashboards for strategic decision-making.",
            },
            {
              icon: <Cpu size={36} className="text-blue-400" />,
              title: "Machine Learning Development",
              description: "Designing, developing, evaluating, and deploying diverse machine learning models for predictive analytics and real-world problem-solving.",
            },
            {
              icon: <Layers size={36} className="text-blue-400" />,
              title: "Data Preprocessing & Feature Engineering",
              description: "Expertly cleansing, transforming, and engineering features from raw data to optimize model performance and analytical accuracy.",
            },
            {
              icon: <Database size={36} className="text-blue-400" />,
              title: "SQL & Data Pipeline Architecture",
              description: "Building robust SQL-based data pipelines for efficient data extraction, transformation, and management across diverse datasets.",
            },
            {
              icon: <TrendingUp size={36} className="text-blue-400" />,
              title: "Time Series & Financial Analytics",
              description: "Specializing in temporal data analysis and advanced forecasting to derive critical market insights and inform strategic financial decisions.",
            },
            {
              icon: <Filter size={36} className="text-blue-400" />, // New icon for Data Cleaning
              title: "Data Cleaning & Quality Assurance",
              description: "Meticulously identifying and resolving data inconsistencies, missing values, and outliers to ensure data integrity and reliability.",
            },
            {
              icon: <Activity size={36} className="text-blue-400" />,
              title: "Model Optimization & Evaluation",
              description: "Meticulously optimizing model performance through hyperparameter tuning, cross-validation, and rigorous evaluation using metrics like R², RMSE, and balanced accuracy.",
            },
            {
              icon: <Cloud size={36} className="text-blue-400" />, // Representing holistic project flow, including deployment
              title: "End-to-End Project Delivery",
              description: "Proven ability to manage data initiatives from initial data acquisition and preprocessing through to model deployment and actionable insight delivery.",
            },
          ].map((item, index) => (
            <div key={index} className="feature-card bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"> {/* Added Tailwind classes for card styling */}
              <div className="icon-wrapper mb-4 p-3 bg-gray-700 rounded-full"> {/* Added Tailwind classes for icon wrapper */}
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3> {/* Added Tailwind classes for title */}
              <p className="text-gray-400 text-sm">{item.description}</p> {/* Added Tailwind classes for description */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
