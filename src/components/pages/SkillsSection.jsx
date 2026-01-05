import React, { useState, useEffect } from "react";
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
    // Full-Stack Web Development (from Mentivio)
    { name: "React.js", proficiency: 78, category: "Full-Stack Web Development" },
    { name: "Flask (Python)", proficiency: 75, category: "Full-Stack Web Development" },
    { name: "RESTful APIs", proficiency: 80, category: "Full-Stack Web Development" },
    { name: "JWT Authentication", proficiency: 75, category: "Full-Stack Web Development" },
    { name: "PostgreSQL", proficiency: 72, category: "Full-Stack Web Development" },
    { name: "Redis", proficiency: 68, category: "Full-Stack Web Development" },
    { name: "HTML/CSS", proficiency: 82, category: "Full-Stack Web Development" },
    
    // Machine Learning Engineering (from all ML projects)
    { name: "Python (Pandas/NumPy)", proficiency: 85, category: "Machine Learning Engineering" },
    { name: "scikit-learn", proficiency: 82, category: "Machine Learning Engineering" },
    { name: "Predictive Modeling", proficiency: 78, category: "Machine Learning Engineering" },
    { name: "Regression Analysis", proficiency: 80, category: "Machine Learning Engineering" },
    { name: "Classification", proficiency: 76, category: "Machine Learning Engineering" },
    { name: "XGBoost/Gradient Boosting", proficiency: 75, category: "Machine Learning Engineering" },
    { name: "Random Forest", proficiency: 78, category: "Machine Learning Engineering" },
    { name: "Feature Engineering", proficiency: 82, category: "Machine Learning Engineering" },
    { name: "Model Evaluation", proficiency: 80, category: "Machine Learning Engineering" },
    { name: "Time Series Forecasting", proficiency: 72, category: "Machine Learning Engineering" },
    { name: "LSTM Networks", proficiency: 65, category: "Machine Learning Engineering" },
    
    // Data Analysis & Business Intelligence (from Tableau projects)
    { name: "Tableau", proficiency: 84, category: "Data Analysis & Business Intelligence" },
    { name: "Data Visualization", proficiency: 82, category: "Data Analysis & Business Intelligence" },
    { name: "Exploratory Data Analysis", proficiency: 85, category: "Data Analysis & Business Intelligence" },
    { name: "Business Intelligence", proficiency: 75, category: "Data Analysis & Business Intelligence" },
    { name: "KPI Development", proficiency: 72, category: "Data Analysis & Business Intelligence" },
    { name: "Data Storytelling", proficiency: 78, category: "Data Analysis & Business Intelligence" },
    { name: "Statistical Analysis", proficiency: 80, category: "Data Analysis & Business Intelligence" },
    
    // Data Engineering (from all projects)
    { name: "SQL", proficiency: 84, category: "Data Engineering" },
    { name: "Data Preprocessing", proficiency: 86, category: "Data Engineering" },
    { name: "Data Cleaning", proficiency: 88, category: "Data Engineering" },
    { name: "Data Pipelines", proficiency: 70, category: "Data Engineering" },
    { name: "Feature Selection", proficiency: 78, category: "Data Engineering" },
    { name: "Data Wrangling", proficiency: 85, category: "Data Engineering" },
    
    // Cloud & Deployment (from Mentivio)
    { name: "AWS Cloud", proficiency: 65, category: "Cloud & Deployment" },
    { name: "Docker", proficiency: 68, category: "Cloud & Deployment" },
    { name: "Git/GitHub", proficiency: 85, category: "Cloud & Deployment" },
    { name: "CI/CD", proficiency: 65, category: "Cloud & Deployment" },
    { name: "Application Deployment", proficiency: 70, category: "Cloud & Deployment" },
    
    // Natural Language Processing (from Mentivio AI chatbot)
    { name: "LLM Integration (Gemini API)", proficiency: 72, category: "Natural Language Processing" },
    { name: "AI Chatbot Development", proficiency: 75, category: "Natural Language Processing" },
    { name: "Content Moderation", proficiency: 70, category: "Natural Language Processing" },
    { name: "Multi-language Systems", proficiency: 68, category: "Natural Language Processing" },
    
    // Security & Compliance (from Mentivio)
    { name: "Data Security", proficiency: 72, category: "Security & Compliance" },
    { name: "HIPAA Compliance", proficiency: 65, category: "Security & Compliance" },
    { name: "Encryption", proficiency: 68, category: "Security & Compliance" },
    { name: "Access Control", proficiency: 70, category: "Security & Compliance" },
    
    // Problem Solving & Analytical Skills
    { name: "Problem Solving", proficiency: 88, category: "Problem Solving & Analytical Skills" },
    { name: "Critical Thinking", proficiency: 85, category: "Problem Solving & Analytical Skills" },
    { name: "Strategic Recommendations", proficiency: 80, category: "Problem Solving & Analytical Skills" },
    { name: "Attention to Detail", proficiency: 86, category: "Problem Solving & Analytical Skills" },
    { name: "Technical Documentation", proficiency: 82, category: "Problem Solving & Analytical Skills" },
  ];

  const categoryColors = {
    "Full-Stack Web Development": "#2876c4", // Blue
    "Machine Learning Engineering": "#1d4ed8", // Dark Blue
    "Data Analysis & Business Intelligence": "#ef4444", // Red
    "Data Engineering": "#10b981", // Emerald Green
    "Cloud & Deployment": "#00f0ff", // Cyan
    "Natural Language Processing": "#8b5cf6", // Purple
    "Security & Compliance": "#f59e0b", // Amber
    "Problem Solving & Analytical Skills": "#ec4899", // Pink
    "Default": "#cccccc",
  };

  const categorizeSkills = (skills) => {
    const categoriesMap = new Map();
    skills.forEach(skill => {
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
      detailedSkills: data.individualSkills.sort((a, b) => b.proficiency - a.proficiency),
      fillColor: categoryColors[categoryName] || categoryColors["Default"],
    }));
  };

  const skillsData = categorizeSkills(rawSkills);
  const [activeTooltip, setActiveTooltip] = useState(false);
  const [tooltipPayload, setTooltipPayload] = useState([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [tooltipClicked, setTooltipClicked] = useState(false);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle click anywhere to close tooltip
  useEffect(() => {
    const handleClickOutside = () => {
      if (activeTooltip && tooltipClicked) {
        setActiveTooltip(false);
        setTooltipPayload([]);
        setTooltipClicked(false);
      }
    };

    // Add a small delay to prevent immediate closing when clicking the label
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [activeTooltip, tooltipClicked]);

  // Handle escape key to close tooltip
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && activeTooltip) {
        setActiveTooltip(false);
        setTooltipPayload([]);
        setTooltipClicked(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [activeTooltip]);

  const toggleCategoryTooltip = (category, event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    
    if (activeTooltip && tooltipPayload[0]?.payload.subject === category.subject) {
      setActiveTooltip(false);
      setTooltipPayload([]);
      setTooltipClicked(false);
    } else {
      setActiveTooltip(true);
      setTooltipPayload([{ payload: category, value: category.A, name: category.subject }]);
      setTooltipClicked(true);
    }
  };

  // Determine responsive values based on screen size
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  // Responsive chart dimensions
  const chartHeight = isMobile ? 400 : isTablet ? 450 : 500;
  const outerRadius = isMobile ? '55%' : isTablet ? '60%' : '65%';
  const labelFontSize = isMobile ? 11 : isTablet ? 12 : 14;
  const legendFontSize = isMobile ? 10 : 11;

  const CustomTooltip = ({ active, payload }) => {
    if (activeTooltip && tooltipPayload.length > 0) {
      const data = tooltipPayload[0].payload;
      const individualSkillsForChart = [...data.detailedSkills];
      
      const chartHeight = Math.max(100, individualSkillsForChart.length * (isMobile ? 30 : 35));

      return (
        <div 
          className="custom-tooltip" 
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#111827",
            padding: isMobile ? "0.75rem" : "1rem",
            borderRadius: "8px",
            color: "white",
            border: `1px solid ${data.fillColor}`,
            maxWidth: isMobile ? "95vw" : "400px",
            minWidth: isMobile ? "280px" : "320px",
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '8px' : '10px',
            zIndex: 1000,
            position: isMobile ? 'fixed' : 'absolute',
            left: isMobile ? '50%' : 'auto',
            top: isMobile ? '50%' : 'auto',
            transform: isMobile ? 'translate(-50%, -50%)' : 'none',
            maxHeight: isMobile ? '80vh' : 'none',
            overflowY: isMobile ? 'auto' : 'visible',
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="label" style={{ 
              color: data.fillColor, 
              fontSize: isMobile ? 14 : 16, 
              fontWeight: "bold", 
              margin: 0 
            }}>
              {data.subject}
            </p>
            {isMobile && (
              <button 
                onClick={() => {
                  setActiveTooltip(false);
                  setTooltipPayload([]);
                  setTooltipClicked(false);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  fontSize: '20px',
                  cursor: 'pointer',
                  padding: '0',
                  lineHeight: '1'
                }}
              >
                ×
              </button>
            )}
          </div>
          
          <p style={{ fontSize: isMobile ? 12 : 14, margin: 0 }}>Average Proficiency: <strong style={{ color: data.fillColor }}>{data.A}%</strong></p>            
          
          {individualSkillsForChart && individualSkillsForChart.length > 0 && (
            <div style={{ width: '100%', height: chartHeight }} className="skill-detail-barchart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={individualSkillsForChart}
                  layout="vertical"
                  margin={{ top: 0, right: isMobile ? 10 : 20, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} horizontal={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 100]} 
                    hide 
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={isMobile ? 120 : 160}
                    tickLine={false}
                    axisLine={false}
                    tick={({ x, y, payload }) => (
                      <text 
                        x={0}
                        y={y} 
                        fill="white" 
                        fontSize={isMobile ? 10 : 12} 
                        textAnchor="start"
                        alignmentBaseline="middle"
                        style={{ 
                          fontWeight: 500,
                          fontFamily: "var(--font-primary), sans-serif"
                        }}
                      >
                        {payload.value}
                      </text>
                    )}
                    interval={0}
                  />
                  <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ 
                      background: "#333", 
                      border: "none", 
                      color: "white",
                      fontSize: isMobile ? 11 : 12,
                      textAlign: "left"
                    }}
                    formatter={(value) => [`${value}%`, 'Proficiency']}
                  />
                  <Bar 
                    dataKey="proficiency" 
                    fill={data.fillColor} 
                    radius={[5, 5, 5, 5]} 
                    barSize={isMobile ? 14 : 18}
                    background={{ fill: 'rgba(255, 255, 255, 0.1)', radius: 5 }}
                  >
                    <LabelList 
                      dataKey="proficiency" 
                      position="insideLeft"
                      formatter={(value) => `${value}%`}
                      style={{ 
                        fill: 'white', 
                        fontSize: isMobile ? 10 : 11,
                        fontWeight: 600,
                        textAnchor: 'start'
                      }}
                      offset={isMobile ? 8 : 10}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          
          <div style={{
            marginTop: "0.5rem",
            fontSize: isMobile ? "10px" : "11px",
            color: "#9ca3af",
            fontStyle: "italic",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "0.5rem",
            textAlign: "center"
          }}>
            {isMobile ? "Tap anywhere to close" : "Click anywhere or press ESC to close"}
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomAngleTick = ({ x, y, cx, cy, payload }) => {
    const category = skillsData.find(s => s.subject === payload.value);
    if (!category) return null;
    
    const color = category.fillColor;
    const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
    const textAnchor = Math.abs(angle) > 90 ? 'end' : 'start';

    // Shorten labels for mobile
    let displayText = payload.value;
    if (isMobile) {
      const abbreviations = {
        "Full-Stack Web Development": "Full-Stack",
        "Machine Learning Engineering": "ML Engineering",
        "Data Analysis & Business Intelligence": "Data & BI",
        "Data Engineering": "Data Eng",
        "Cloud & Deployment": "Cloud",
        "Natural Language Processing": "NLP",
        "Security & Compliance": "Security",
        "Problem Solving & Analytical Skills": "Problem Solving"
      };
      displayText = abbreviations[payload.value] || payload.value;
    }

    return (
      <g
        transform={`translate(${x},${y})`}
        onClick={(e) => toggleCategoryTooltip(category, e)}
        onTouchStart={(e) => toggleCategoryTooltip(category, e)}
        style={{ cursor: "pointer" }}
      >
        <text
          x={0}
          y={0}
          dy={isMobile ? 6 : 10}
          textAnchor={textAnchor}
          fill={color}
          fontSize={labelFontSize}
          fontWeight={600}
          className="radar-label"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            fontFamily: "var(--font-primary), sans-serif",
            userSelect: "none",
            WebkitTapHighlightColor: "transparent",
            pointerEvents: "all"
          }}
        >
          {displayText}
        </text>
      </g>
    );
  };

  return (
    <section 
      className="skills-section section-dark" 
      id="skills"
      onClick={() => {
        if (activeTooltip) {
          setActiveTooltip(false);
          setTooltipPayload([]);
          setTooltipClicked(false);
        }
      }}
      onTouchStart={() => {
        if (activeTooltip) {
          setActiveTooltip(false);
          setTooltipPayload([]);
          setTooltipClicked(false);
        }
      }}
      style={{ 
        position: 'relative',
        outline: 'none' // Added to remove focus outline
      }}
    >
      <div className="container card" style={{
        background: "var(--bg-primary)",
        borderRadius: "var(--radius-xl)",
        padding: isMobile ? "var(--spacing-md)" : "var(--spacing-xl)",
        boxShadow: "var(--shadow-md)",
        border: "1px solid var(--border-light)",
        position: "relative",
        outline: 'none' // Added to remove focus outline
      }}>
         <div className="text-center mb-10">
        <h2 className="my-heading">
          Technical <span className="heading-span">Competencies</span>
        </h2>
        </div>

        <div 
          className="radar-chart-container" 
          style={{
            background: "var(--bg-secondary)",
            borderRadius: "var(--radius-lg)",
            padding: isMobile ? "var(--spacing-md)" : "var(--spacing-lg)",
            border: "1px solid var(--border-light)",
            position: "relative",
            overflow: "visible",
            outline: 'none' // Added to remove focus outline
          }}
        >
          <ResponsiveContainer width="100%" height={chartHeight}>
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius={outerRadius}
              data={skillsData}
              margin={isMobile ? { top: 10, right: 10, left: 10, bottom: 10 } : { top: 20, right: 30, left: 30, bottom: 20 }}
            >
              <PolarGrid
                gridType="polygon"
                stroke="var(--border-light)"
                strokeWidth={1}
                strokeOpacity={0.5}
                polarRadius={[0, 20, 40, 60, 80, 100]}
              />
              <PolarAngleAxis
                dataKey="subject"
                tick={(props) => <CustomAngleTick {...props} />}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tickCount={isMobile ? 4 : 6}
                tickFormatter={(value) => `${value}%`}
                tick={{ 
                  fill: 'var(--text-secondary)', 
                  fontSize: isMobile ? 9 : 10 
                }}
                axisLine={{ stroke: 'var(--border-light)', strokeWidth: 1 }}
              />
              <Tooltip
                content={<CustomTooltip />}
                active={activeTooltip}
                payload={tooltipPayload}
              />
              <Legend
                wrapperStyle={{ 
                  paddingTop: isMobile ? '10px' : '20px',
                  fontSize: legendFontSize,
                  fontFamily: "var(--font-primary), sans-serif"
                }}
                payload={skillsData.map(entry => ({
                  value: isMobile ? 
                    entry.subject.split(' ').map(word => word[0]).join('') + '...' : 
                    entry.subject,
                  type: 'square',
                  color: entry.fillColor
                }))}
              />
              <Radar
                name="Average Proficiency"
                dataKey="A"
                stroke="var(--primary)"
                fill="var(--primary)"
                fillOpacity={0.4}
                strokeWidth={isMobile ? 1.5 : 2}
                animationDuration={1500}
                animationEasing="ease-out"
              />
            </RadarChart>
          </ResponsiveContainer>
          
          <p style={{ 
            textAlign: "center", 
            color: "var(--text-secondary)", 
            fontSize: isMobile ? "0.8rem" : "0.9rem", 
            marginTop: isMobile ? "var(--spacing-md)" : "var(--spacing-lg)", 
            padding: isMobile ? "var(--spacing-xs) var(--spacing-sm)" : "var(--spacing-sm) var(--spacing-md)", 
            backgroundColor: "var(--primary-subtle)", 
            borderRadius: "var(--radius-md)",
            display: "inline-block",
            border: "1px solid var(--border-light)",
            maxWidth: "600px",
            margin: `${isMobile ? 'var(--spacing-md)' : 'var(--spacing-lg)'} auto 0 auto`
          }}>
            <strong style={{ color: "var(--primary)" }}>TIP:</strong> {isMobile ? "Tap labels for details, tap anywhere to close" : "Click labels for details, click anywhere to close"}
          </p>
        </div>

        {/* Mobile-only legend expander for better visibility */}
        {isMobile && (
          <div style={{
            marginTop: "var(--spacing-md)",
            padding: "var(--spacing-sm)",
            background: "var(--bg-tertiary)",
            borderRadius: "var(--radius-md)",
            fontSize: "var(--font-size-sm)"
          }}>
            <details>
              <summary style={{
                color: "var(--primary)",
                fontWeight: "var(--font-weight-medium)",
                cursor: "pointer",
                listStyle: "none"
              }}>
                Category Legend (Tap to expand)
              </summary>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "var(--spacing-xs)",
                marginTop: "var(--spacing-sm)",
                fontSize: "var(--font-size-xs)"
              }}>
                {skillsData.map((entry, index) => (
                  <div key={index} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-xs)"
                  }}>
                    <div style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: entry.fillColor,
                      borderRadius: "2px"
                    }}></div>
                    <span style={{ color: "var(--text-secondary)" }}>
                      {entry.subject}
                    </span>
                  </div>
                ))}
              </div>
            </details>
          </div>
        )}
      </div>
    </section>
  );
}