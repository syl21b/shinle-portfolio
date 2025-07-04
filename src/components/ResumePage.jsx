import React from "react";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { FaFileDownload } from "react-icons/fa";

export default function ResumePage() {
  return (
    <main className="resume-container">
      <header className="resume-header">
        <h1>Shin Le</h1>
        <h2>Entry-Level Data Analyst</h2>
        <div className="contact-info">
          <span><Mail size={16} /> shinle666@gmail.com</span>
          <span><Phone size={16} /> 772-285-6483</span>
          <span><Linkedin size={16} /> <a href="https://linkedin.com/in/shin-le-b9727a238" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          <span><Globe size={16} /> <a href="YOUR_PORTFOLIO_URL" target="_blank" rel="noopener noreferrer">Portfolio</a></span>
        </div>
      </header>

      <section className="resume-section">
        <h3>Professional Summary</h3>
        <p>
          Insightful and results-driven Data Analyst with a strong foundation in mathematics and data science. Proficient in Python, SQL, and Tableau, with proven experience transforming raw datasets into strategic insights and predictive models. Skilled in building end-to-end analytics solutions—from data extraction and preprocessing to advanced modeling and dynamic dashboard creation. Passionate about applying data to real-world business and market challenges, with a particular interest in AI applications in behavioral finance, sound, and video analysis.
        </p>
      </section>

      <section className="resume-section">
        <h3>Projects</h3>
        <div className="project">
          <h4>
            <a
              href="https://github.com/syl21b/World-Stock-Market.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Behavioral & Technical Stock Price Analysis
            </a>
            <span className="project-date">(05/2025 – 06/2025)</span>
          </h4>
          <ul>
            <li>Led a 25-year stock analysis (60+ brands), engineering 20+ advanced financial, behavioral, and technical indicators using Python & SQL.</li>
            <li>Identified predictive behavioral events like "panic selling" and validated 85% accuracy of signals (VWAP, RSI, crossovers) in timing market reversals.</li>
            <li>Designed comprehensive Tableau dashboards to visualize risk trends, sector strengths, and actionable trading insights for diverse investor types.</li>
          </ul>
        </div>

        <div className="project">
          <h4>
            <a
              href="https://github.com/syl21b/Superstore.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Superstore Performance Analysis
            </a>
            <span className="project-date">(04/2025 – 05/2025)</span>
          </h4>
          <ul>
            <li>Performed deep-dive business analysis on Superstore data (2014–2017), uncovering trends in profitability, churn, and operational bottlenecks.</li>
            <li>Revealed 19.09% profit peak in Q1 2017, flagged late shipments in Office Supplies, and quantified regional profit disparities to refine business strategy.</li>
            <li>Delivered a strategic report with 10+ actionable recommendations across logistics, pricing, and market segmentation.</li>
          </ul>
        </div>

        <div className="project">
          <h4>
            <a
              href="https://github.com/syl21b/Car-Price-Prediction.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Car Price Prediction | FSU
            </a>
            <span className="project-date">(08/2023 – 12/2023)</span>
          </h4>
          <ul>
            <li>Developed & deployed a machine learning pipeline to predict used car prices, training & evaluating five regression algorithms on a 762K+ record dataset.</li>
            <li>Engineered & preprocessed a large dataset (&gt;300K samples), handling missing values & outliers (IQR).</li>
            <li>Achieved an R-squared of 0.859 with Gradient Boosting Regression, quantifying feature importance (e.g., Engine Displacement ~25%) for price predictability.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h3>Education</h3>
        <p><strong>B.S. in Applied Mathematics</strong> | Florida State University</p>
        <p><strong>A.A. in Mathematics</strong> | Indian River State College</p>
      </section>

      <section className="resume-section">
        <h3>Certifications</h3>
        <ul>
          <li>
            <a
              href="https://coursera.org/share/c483954137c683f173873918b09024f2"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              IBM Data Science Professional Certificate
            </a>
          </li>
          <li>
            <a
              href="https://coursera.org/share/6f4a5c892079cf1212f1669b9539e20b"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              IBM Data Analyst Professional Certificate
            </a>
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h3>Experience</h3>
        <div>
          <h4>
            Math Tutor | Mathnasium Learning Center
            <span className="project-date">(08/2024 – 04/2025)</span>
          </h4>
          <ul>
            <li>Provided individualized instruction to 10+ students (K–12), increasing confidence and improving math grades by over 1.5 points on average.</li>
            <li>Adapted core curriculum to diverse learning needs, emphasizing problem-solving and conceptual clarity.</li>
          </ul>
        </div>
        <div>
          <h4>
            GED Math Tutor | Online
            <span className="project-date">(07/2022 – 01/2023)</span>
          </h4>
          <ul>
            <li>Coached adult learners through personalized lesson plans, helping two students successfully pass the GED Math section.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h3>Top Skills</h3>
        <ul className="skills-list-line-by-line">
          <li><strong>Programming & ML:</strong> Python, Predictive Modeling, Regression, Model Evaluation</li>
          <li><strong>Data Management:</strong> SQL, Data Cleaning, Feature Engineering, Statistical Analysis, Exploratory Data Analysis</li>
          <li><strong>Visualization & BI:</strong> Tableau, Dashboard Development, Data Storytelling, Business Intelligence</li>
          <li><strong>Strategic Thinking:</strong> Problem Solving, Insight Generation, Risk Mitigation, Adaptability</li>
        </ul>
      </section>

      <section className="resume-download-section">
        <a
          href="ShinLe_Resume.pdf"
          download="ShinLe_Resume.pdf"
          className="download-resume-button"
          aria-label="Download Resume as PDF"
        >
          <FaFileDownload size={20} style={{ marginRight: '8px' }} />
          Download Resume (PDF)
        </a>
      </section>
    </main>
  );
}