import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList
} from "recharts";

export default function SkillsSection() {
  const rawSkills = [
  // Programming & Scripting
  { name: "Python", proficiency: 95, category: "Programming & Scripting" }, // "Spearheaded," "architecting robust data pipeline," "engineering over 20 advanced features" consistently using Python (Pandas, NumPy) points to very high mastery.
  { name: "Pandas", proficiency: 95, category: "Programming & Scripting" }, // Extensive use for data manipulation, feature engineering, analysis across multiple large datasets.
  { name: "NumPy", proficiency: 90, category: "Programming & Scripting" }, // Core for numerical operations, likely used alongside Pandas for performance.
  { name: "SQL", proficiency: 90, category: "Programming & Scripting" }, // Used for "building scalable data pipelines," "analyzed and optimized data for a SQL-based library management system," demonstrates strong practical application.
  { name: "C++", proficiency: 70, category: "Programming & Scripting" }, // Direct mention in "Newton's Method vs. Muller’s Method" project, showing practical application in a scientific context.

  // Machine Learning & Modeling
  { name: "Machine Learning (Overall)", proficiency: 88, category: "Machine Learning & Modeling" }, // Applied 5-7 distinct ML algorithms across projects, indicating solid theoretical and practical grasp.
  { name: "Scikit-learn", proficiency: 90, category: "Machine Learning & Modeling" }, // Implied by extensive use of various models (Decision Tree, Random Forest, Gradient Boosting, SVM) in Python projects.
  { name: "Predictive Modeling", proficiency: 90, category: "Machine Learning & Modeling" }, // Core to Car Price and Churn Prediction projects, with quantifiable outcomes.
  { name: "Regression", proficiency: 90, category: "Machine Learning & Modeling" }, // Used in Car Price Prediction with 5 distinct algorithms and successful R² score.
  { name: "Classification", proficiency: 85, category: "Machine Learning & Modeling" }, // Central to Churn Prediction, identifying optimal models for imbalanced datasets.
  { name: "Model Evaluation", proficiency: 90, category: "Machine Learning & Modeling" }, // Meticulous assessment across RMSE, MAE, R², MAPE, balanced accuracies, and feature importances.
  { name: "Feature Engineering", proficiency: 90, category: "Machine Learning & Modeling" }, // "Engineering over 20 advanced features" in stock analysis, "meticulously preprocessed" datasets, shows strong capability.
  { name: "XGBoost", proficiency: 88, category: "Machine Learning & Modeling" }, // Identified as "most accurate model" for car price, suggesting deep understanding and optimization.
  { name: "Random Forest", proficiency: 85, category: "Machine Learning & Modeling" }, // Successfully applied and evaluated in multiple projects.
  { name: "LSTM", proficiency: 80, category: "Machine Learning & Modeling" }, // Mentioned in stock project for "iterative stock price forecasting," indicating practical use with deep learning concepts.
  { name: "AdaBoost", proficiency: 85, category: "Machine Learning & Modeling" }, // Identified as "most optimal model for imbalanced datasets" in churn, demonstrating insightful application.
  { name: "SVM", proficiency: 80, category: "Machine Learning & Modeling" }, // Applied and evaluated in Car Price and Churn Prediction.
  { name: "Neural Networks", proficiency: 78, category: "Machine Learning & Modeling" }, // Broad category implied by LSTM usage and general ML suite.
  { name: "TensorFlow/Keras", proficiency: 75, category: "Machine Learning & Modeling" }, // Often the underlying framework for LSTM, proficiency reflects practical, not expert, use.

  // Data Analysis & Concepts
  { name: "Data Preprocessing", proficiency: 90, category: "Data Analysis & Concepts" }, // "Engineered and meticulously preprocessed a large-scale dataset," "balancing imbalanced classes," "standardizing data."
  { name: "Exploratory Data Analysis (EDA)", proficiency: 88, category: "Data Analysis & Concepts" }, // "Conducted in-depth impact analysis," "Pioneered the identification... of critical behavioral patterns," "identifying key behavioral patterns" in churn project.
  { name: "Statistical Analysis", proficiency: 85, category: "Data Analysis & Concepts" }, // Quantifying "panic selling" returns, profit margins, churn risk, R² values, and feature importances involves strong statistical application.
  { name: "Time Series Analysis", proficiency: 85, category: "Data Analysis & Concepts" }, // Central to "Behavioral & Technical Analysis of Stock Prices" with forecasting and trend identification.
  { name: "Data Cleaning", proficiency: 88, category: "Data Analysis & Concepts" }, // Explicitly mentioned in summary, and implicitly in all preprocessing steps.
  { name: "Mathematics", proficiency: 90, category: "Data Analysis & Concepts" }, // B.S. in Applied Mathematics and A.A. in Mathematics, coupled with strong analytical project work.

  // Business Intelligence & Visualization
  { name: "Tableau", proficiency: 90, category: "Business Intelligence & Visualization" }, // "Designed & deployed interactive Tableau dashboards," "Orchestrated multi-dimensional Superstore performance analysis using Tableau."
  { name: "Business Intelligence (BI)", proficiency: 88, category: "Business Intelligence & Visualization" }, // Delivering "actionable insights across key business areas" and "strategic investment recommendations" through dashboards.
  { name: "Data Storytelling", proficiency: 85, category: "Business Intelligence & Visualization" }, // "Authored and presented a comprehensive report," "transforming data into strategic investment recommendations," demonstrates strong communication of insights.

  // Tools & Methodologies
  { name: "Git/GitHub", proficiency: 80, category: "Tools & Methodologies" }, // Standard for managing code in projects, likely used for version control.
  { name: "Excel", proficiency: 70, category: "Tools & Methodologies" }, // General data analysis tool, common for entry-level.
  { name: "Data Pipelines", proficiency: 85, category: "Tools & Methodologies" }, // "Architecting a robust data pipeline," "engineered a robust data pipeline" in projects.
  { name: "Data Modeling", proficiency: 78, category: "Tools & Methodologies" }, // Implied by structured analysis and database work (Library Management System).
  { name: "Cloud (AWS/GCP)", proficiency: 60, category: "Tools & Methodologies" }, // If previously stated in a skills section or summary, reflects basic familiarity or conceptual understanding. (Keeping this as it was in your previous list).

  // Analytical & Soft Skills
  { name: "Problem Solving", proficiency: 92, category: "Analytical & Soft Skills" }, // Demonstrated in identifying patterns, optimizing models, and navigating complex datasets.
  { name: "Strategic Recommendations", proficiency: 90, category: "Analytical & Soft Skills" }, // Providing 10+ data-driven recommendations, guiding regional strategies, informing portfolio allocation.
  { name: "Adaptability", proficiency: 85, category: "Analytical & Soft Skills" }, // Diverse project domains (finance, retail, auto, telecom) and applying various models.
];

  const categoryColors = {
    "Programming & Scripting": "#2876c4",
    "Machine Learning & Modeling": "#1d4ed8",
    "Data Analysis & Concepts": "#ef4444",
    "Business Intelligence & Visualization": "#00f0ff",
    "Tools & Methodologies": "#7c3aed",
    "Analytical & Soft Skills": "#f59e0b",
    // Fallback color
    "Default": "#cccccc",
  };

  const categorizeSkills = (skills) => {
    const categoriesMap = new Map();
    skills.forEach(skill => {
      // Use "Default" if category not found, though all should be covered now
      const categoryToUse = skill.category || "Default";
      if (!categoriesMap.has(categoryToUse)) {
        categoriesMap.set(categoryToUse, { totalProficiency: 0, count: 0, individualSkills: [] });
      }
      const cat = categoriesMap.get(categoryToUse);
      cat.totalProficiency += skill.proficiency;
      cat.count++;
      cat.individualSkills.push({ name: skill.name, proficiency: skill.proficiency });
    });

    return Array.from(categoriesMap.entries()).map(([categoryName, data]) => ({
      subject: categoryName,
      A: Math.round(data.totalProficiency / data.count),
      fullMark: 100,
      subSkills: data.individualSkills.map(s => s.name).join(", "),
      detailedSkills: data.individualSkills,
      fillColor: categoryColors[categoryName] || categoryColors["Default"],
    }));
  };

  const skillsData = categorizeSkills(rawSkills);
  const [activeTooltip, setActiveTooltip] = useState(false);
  const [tooltipPayload, setTooltipPayload] = useState([]);

  const CustomTooltip = ({ active, payload }) => {
    if (activeTooltip && tooltipPayload.length > 0) {
      const data = tooltipPayload[0].payload;
      const individualSkillsForChart = [...data.detailedSkills].sort((a, b) => b.proficiency - a.proficiency);

      const chartHeight = Math.max(100, individualSkillsForChart.length * 35); // Adjust height dynamically

      return (
        <div className="custom-tooltip" style={{
          background: "#111827",
          padding: "1rem",
          borderRadius: "8px",
          color: "white",
          border: `1px solid ${data.fillColor}`,
          maxWidth: "350px",
          minWidth: "280px",
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <p className="label" style={{ color: data.fillColor, fontSize: 16, fontWeight: "bold" }}>{data.subject}</p>
          <p style={{ fontSize: 14 }}>Average Proficiency: <strong style={{ color: data.fillColor }}>{data.A}%</strong></p>            
          {individualSkillsForChart && individualSkillsForChart.length > 0 && (
            <div style={{ width: '100%', height: chartHeight }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={individualSkillsForChart}
                  layout="vertical"
                  margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={130}
                    tickLine={false}
                    axisLine={false}
                    tick={({ x, y, payload }) => (
                      <text x={x} y={y} fill="white" fontSize={12} textAnchor="end" maxWidth={120}  >
                        {payload.value.length > 20 ? payload.value.slice(0, 17) + "..." : payload.value}
                      </text>
                    )}
                  />
                  <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ background: "#333", border: "none", color: "white" }}
                    formatter={(value) => [`${value}%`, 'Proficiency']}
                  />
                  <Bar dataKey="proficiency" fill={data.fillColor} radius={[5, 5, 0, 0]} barSize={20}>
                    <LabelList 
                      dataKey="proficiency" 
                      position="right"
                      formatter={(value) => `${value}%`}
                      style={{ fill: 'white', fontSize: 12 }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  const CustomAngleTick = ({ x, y, cx, cy, payload }) => {
    const category = skillsData.find(s => s.subject === payload.value);
    const color = category ? category.fillColor : '#f8fafc';

    const handleClick = () => {
      if (activeTooltip && tooltipPayload[0]?.payload.subject === category.subject) {
        setActiveTooltip(false);
        setTooltipPayload([]);
      } else {
        setActiveTooltip(true);
        setTooltipPayload([{ payload: category, value: category.A, name: category.subject }]);
      }
    };

    return (
      <g
        transform={`translate(${x},${y})`}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <text
          x={0}
          y={0}
          dy={10}
          textAnchor={x > cx ? 'start' : 'end'}
          fill={color}
          fontSize={16}
          fontWeight={700}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <section className="about section-dark" id="skills">
      <div className="container card">
        <h2 className="my-heading text-center">
          Technical <span className="heading-span">Competencies</span>
        </h2>

        <div style={{ width: '100%', height: '800px', marginTop: '0rem' }} className="radar-chart-container">
          <ResponsiveContainer>
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="70%"
              data={skillsData}
              margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
            >
              <PolarGrid
                gridType="polygon"
                stroke="rgba(0, 0, 0, 0.15)"
                polarRadius={[0, 20, 40, 60, 80, 100]}
              />
              <PolarAngleAxis
                dataKey="subject"
                tick={(props) => <CustomAngleTick {...props} />}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tickCount={6}
                tickFormatter={(value) => `${value}%`}
                tick={{ fill: 'var(--gray)', fontSize: 10 }}
                axisLine={{ stroke: 'rgba(0, 0, 0, 0.1)' }}
              />
              <Tooltip
                content={<CustomTooltip />}
                active={activeTooltip}
                payload={tooltipPayload}
              />
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                payload={skillsData.map(entry => ({
                  value: entry.subject,
                  type: 'square',
                  color: entry.fillColor
                }))}
              />
              <Radar
                name="Average Proficiency"
                dataKey="A"
                stroke="var(--primary)"
                fill="var(--primary)"
                fillOpacity={0.6}
                strokeWidth={2}
                animationDuration={1500}
                animationEasing="ease-out"
              />
            </RadarChart>
               {/* Add the instruction note here */}
                <p style={{ textAlign: "center", color: "var(--dark)", fontSize: "1rem", marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "var(--light-accent)", borderRadius: "5px", display: "inline-block" }}>
                  <strong style={{ color: "var(--primary)" }}>PRO TIP:</strong> Click on a category label to view detailed skills. Click again to reset.
                </p>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}