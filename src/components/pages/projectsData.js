// projectsData.js

export const projects = [
  {
    id: 1,
    type: "tableau",
    date: "May 2025 - June 2025",
    title: "World Stock Market Analysis & Prediction (2000-2025)",
    description: "A comprehensive, multi-faceted data-driven platform for advanced stock market analysis and price forecasting.",
    problem: "The vast and volatile nature of global stock markets makes it challenging for investors and traders to gain actionable insights and accurately predict future price movements from raw data. Traditional analysis methods often lack the depth and predictive power needed for informed decision-making.",
    solution: "Developed an integrated data platform that combines <strong>historical market data</strong> with <strong>advanced technical indicators</strong> and <strong>machine learning models</strong> (<strong>LSTM</strong>, <strong>XGBoost</strong>, <strong>Random Forest</strong>). The platform provides <strong>interactive dashboards</strong> for visualizing trends, identifying patterns, and generating <strong>predictive forecasts</strong> to guide investment strategies.",
    contributions: [
      "<strong>Data Ingestion & Cleaning:</strong> Sourced and transformed historical stock data (price, volume, corporate actions) for over <strong>60 brands</strong> across <strong>10+ industries</strong> from 2000-2025 using <strong>SQL</strong>.",
      "<strong>Feature Engineering:</strong> Created numerous <strong>technical indicators</strong> (<strong>VWAP</strong>, <strong>RSI</strong>, <strong>Moving Average crossovers</strong>) and <strong>behavioral finance metrics</strong> to enhance model performance.",
      "<strong>Machine Learning Model Development:</strong> Implemented, trained, and fine-tuned <strong>LSTM</strong>, <strong>XGBoost</strong>, and <strong>Random Forest</strong> models in <strong>Python</strong> for <strong>stock price prediction</strong>.",
      "<strong>Interactive Dashboard Design:</strong> Designed and built a suite of <strong>interactive dashboards</strong> in <strong>Tableau</strong> to visualize key insights, model predictions, and market behavior (e.g., '<strong>panic selling</strong>' indicators).",
      "<strong>Performance Evaluation:</strong> Rigorously evaluated model performance and impact on simulated investment scenarios."
    ],
    technologies: ["Tableau", "SQL", "Python", "Machine Learning", "Data Visualization",
      "Financial Markets", "Technical Analysis", "Behavioral Finance",
      "Time Series Analysis", "Forecasting", "LSTM", "XGBoost", "Random Forest"],
    challenges: [
      "<strong>Data Volume & Velocity:</strong> Managing and processing large volumes of historical stock data efficiently. Overcame this by <strong>optimizing SQL queries</strong> and employing <strong>efficient data structures in Python</strong>.",
      "<strong>Non-Stationarity of Financial Data:</strong> Financial time series data is inherently non-stationary, which can challenge predictive models. Addressed this through <strong>appropriate differencing</strong> and <strong>feature engineering techniques</strong>.",
      "<strong>Model Interpretability vs. Accuracy:</strong> Balancing the need for highly accurate predictive models with the ability to interpret their decisions, especially for complex models like LSTMs. Focused on <strong>clear visualization of feature importance</strong> for tree-based models.",
      "<strong>API Integration & Rate Limits:</strong> (If applicable) Handling large data pulls from financial APIs while respecting rate limits. Implemented <strong>robust error handling</strong> and <strong>back-off strategies</strong>."
    ],
    results: "Improved simulated investment decision accuracy by identifying <strong>optimal entry/exit points</strong>, validating technical signals, and providing <strong>quantitative risk assessments</strong>. The integrated platform reduced manual analysis time by an estimated <strong>40%</strong>, enabling faster response to market changes. Predictive models consistently outperformed baseline statistical methods by an average of <strong>15% in accuracy metrics</strong>.",
    futureEnhancements: "Integrate <strong>real-time data streaming</strong>, develop <strong>anomaly detection</strong> for unusual market events, implement <strong>portfolio optimization strategies</strong>, and explore <strong>reinforcement learning</strong> for automated trading recommendations.",
    linkText: "View Dashboard",
    linkHref: "https://public.tableau.com/views/StockMarket_17475986132330/Menu?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
    buttonTitle: "Open World Stock Market Dashboard in Tableau Public",
    iframeSrc: "https://public.tableau.com/views/StockMarket_17475986132330/Menu?:language=en-US&:sid=&:display_count=yes&:showVizHome=no&:embed=y",
    demoLinkText: "View Code",
    demoLinkHref: "https://github.com/syl21b/World-Stock-Market.git",
    demoButtonTitle: "View World Stock Market Code on GitHub",
    imagePreview: "/images/stock-market-preview.png", // Ensure you have a preview image for Tableau
  },
  {
    id: 2,
    type: "tableau",
    date: "Apr 2025 - May 2025",
    title: "Superstore Performance Analysis & Optimization",
    description: "Comprehensive multi-dimensional analysis of Superstore sales, profit, geographic, product, and customer behavior.",
    problem: "A major retail superstore chain faced challenges in understanding complex sales, profit, and operational data, leading to missed opportunities for optimization in inventory, marketing, and regional strategy. Existing reporting was fragmented and lacked actionable insights.",
    solution: "Developed a series of <strong>interconnected Tableau dashboards</strong> that provide a <strong>multi-dimensional view</strong> of Superstore performance, allowing stakeholders to analyze <strong>sales trends</strong>, <strong>profit margins</strong>, <strong>geographic variations</strong>, <strong>product performance</strong>, and <strong>customer behavior</strong> in an interactive and comprehensive manner.",
    contributions: [
      "<strong>Data Consolidation & Cleansing:</strong> Integrated raw sales, profit, and customer data into a <strong>clean, structured format</strong> suitable for analysis.",
      "<strong>KPI Definition & Calculation:</strong> Defined <strong>key performance indicators (KPIs)</strong> such as profit margins, sales trends, and customer churn risk indicators.",
      "<strong>Dashboard Design & Development:</strong> Created <strong>intuitive Tableau dashboards</strong> for Executive Summary, Geographic Analysis, Product Performance, and Customer Behavior, enabling <strong>drill-down capabilities</strong>.",
      "<strong>Insight Generation:</strong> Identified specific trends like <strong>declining profit margins in Q4 2017</strong> despite rising sales, and pinpointed <strong>high/low-profit product categories and regions</strong>.",
      "<strong>Actionable Recommendations:</strong> Formulated concrete business recommendations based on data insights, covering <strong>pricing</strong>, <strong>product focus</strong>, <strong>market expansion</strong>, and <strong>customer retention</strong>."
    ],
    technologies: ["Tableau", "Data Analysis", "Business Intelligence", "Sales Performance",
      "Profit Optimization", "Geographic Analysis", "Product Strategy",
      "Customer Behavior", "Supply Chain Analytics", "Data Visualization",
      "Retail Analytics"],
    challenges: [
      "<strong>Data Granularity & Volume:</strong> Handling a large dataset with various levels of granularity while maintaining dashboard performance. <strong>Optimized Tableau data sources</strong> and used <strong>efficient calculations</strong>.",
      "<strong>Interpreting Complex Relationships:</strong> Uncovering non-obvious relationships between sales, profit, and other dimensions (e.g., impact of late shipments on specific product categories). Utilized <strong>advanced calculations</strong> and <strong>visualizations</strong>.",
      "<strong>User Adoption & Training:</strong> Designing dashboards that are intuitive enough for non-technical business users to adopt quickly. Conducted <strong>iterative feedback sessions</strong> during development."
    ],
    results: "Provided <strong>clear visibility</strong> into Superstore's performance, enabling <strong>data-driven decisions</strong>. Identified <strong>specific areas for profit optimization</strong> (e.g., pricing adjustments for low-margin categories) and <strong>market expansion opportunities</strong>. Reduced the time spent on manual report generation by <strong>60%</strong>, freeing up resources for strategic analysis.",
    futureEnhancements: "Integrate <strong>predictive analytics</strong> for sales forecasting, incorporate <strong>sentiment analysis</strong> from customer reviews, develop a '<strong>what-if</strong>' scenario planning tool, and connect to <strong>real-time operational data</strong>.",
    linkText: "View Dashboard",
    linkHref: "https://public.tableau.com/views/Superstore_17455418407990/ExecutiveSummaryDashboard?:language=en-US&:sid=&:display_count=yes&:showVizHome=no&:embed=y",
    buttonTitle: "Open Superstore Analysis Dashboard in Tableau Public",
    iframeSrc: "https://public.tableau.com/views/Superstore_17455418407990/ExecutiveSummaryDashboard?:language=en-US&:sid=&:display_count=yes&:showVizHome=no&:embed=y",
    demoLinkText: "View Code",
    demoLinkHref: "https://github.com/syl21b/Superstore.git",
    demoButtonTitle: "View Superstore Analysis Code on GitHub",
    imagePreview: "/images/superstore-preview.png", // Ensure you have a preview image for Tableau
  },
  {
    
      id: 3, // Unique ID for this project
      type: "tableau", // Explicitly state type for consistency
      date: "Apr 2025 - Apr 2025", // Adjust date as appropriate if it's ongoing or completed
      isOngoing: false, // Set to true if still actively being worked on
      title: "Bank Customer Churn Prediction & Analysis",
      description: "A comprehensive data analytics project leveraging interactive dashboards and predictive modeling to understand, predict, and mitigate bank customer churn.",
      problem: "Customer churn represents a **significant threat** to profitability and growth for banking institutions. Without **clear, data-driven insights** into **why** customers leave and **who** is most likely to churn, banks are unable to **proactively identify at-risk customers**, develop **effective retention strategies**, or **optimize their resource allocation** for maximum customer lifetime value.",
      solution: "This project delivers a **robust, data-driven solution** for bank customer churn, integrating **in-depth analysis** with **interactive Tableau dashboards**. It meticulously explores **demographic patterns** (age, location, occupation, marital status) and **critical behavioral indicators** (credit score, income, product usage, complaints, tenure) to **uncover churn drivers**. This provides a **strong analytical foundation** for developing **targeted retention strategies** and future **predictive modeling**.",
      contributions: [
        "<strong>Data Acquisition & Preparation:</strong> Sourced, cleaned, and transformed raw **bank customer data**, including demographic and behavioral attributes, suitable for analytical modeling and dashboarding.",
        "<strong>Feature Engineering:</strong> Identified and engineered **key features** from raw data to enhance the explanatory power of the analysis and potential predictive models (e.g., tenure groups, product usage flags).",
        "<strong>Interactive Dashboard Development:</strong> Designed and built **high-impact, interconnected dashboards** in **Tableau** for comprehensive visualization of customer demographics and behavior patterns related to churn.",
        "<strong>Churn Driver Identification:</strong>Performed **in-depth analysis** to identify the **primary demographic and behavioral factors** influencing customer attrition within the banking sector.",
        "<strong>Actionable Insights Generation:</strong> Translated complex data findings into **clear, actionable recommendations** for business stakeholders to improve customer retention strategies."
      ],
      technologies: [
        "Tableau", "SQL", "Data Analysis", "Business Intelligence",
        "Customer Analytics", "Churn Prediction", "Behavioral Analysis",
        "Demographic Analysis", "Retention Strategy", "Data Visualization"
      ],
      challenges: [
        "**Data Heterogeneity:** Integrating and cleaning diverse datasets containing both categorical (e.g., occupation, marital status) and numerical (e.g., income, credit score) customer information.",
        "**Defining Churn & Metrics:** Establishing a consistent definition of churn and selecting appropriate metrics (e.g., churn rate across segments) for accurate analysis and reporting.",
        "**Dashboard Usability & Interactivity:** Designing intuitive and responsive dashboards that allow business users to easily explore complex relationships and drill down into specific customer segments.",
        "**Privacy & Data Masking:** Ensuring customer data privacy and compliance during analysis and visualization by appropriately masking sensitive information."
      ],
      results: "The project delivered a **powerful suite of interactive dashboards** that provide **immediate, visual insights** into churn hotspots and key influencing factors, enabling **more informed decision-making**. It successfully identified **specific high-risk demographic groups and behavioral patterns**, allowing marketing and customer service teams to develop **more targeted and effective retention campaigns**. The analytical framework established provides a **foundation for continuous monitoring and optimization** of customer retention efforts, with an estimated potential to **reduce reactive churn responses by 30%**.",
      futureEnhancements: "Building upon the foundational insights, future enhancements aim to transition towards more **proactive and automated churn management**. This includes integrating **machine learning models** to generate **individual customer churn probability scores**, developing algorithms for **automated root cause analysis**, designing systems to trigger **personalized retention offers**, and creating **economic impact models** to quantify the revenue saved by reducing churn.",
      linkText: "View Dashboard",
      // IMPORTANT: Replace with the ACTUAL public share link from Tableau Public for the Demographics Dashboard
      linkHref: "https://public.tableau.com/views/BankChurn_17432134458270/CUSTOMERDEMOGRAPHICSDASHBOARD?:language=en-US&:sid=&:display_count=yes&:showVizHome=no&:embed=y",
      buttonTitle: "Open Bank Customer Churn Dashboard in Tableau Public",
      // IMPORTANT: Replace with the ACTUAL embed URL from Tableau Public for the Demographics Dashboard
      iframeSrc: "https://public.tableau.com/views/BankChurn_17432134458270/CUSTOMERDEMOGRAPHICSDASHBOARD?:language=en-US&:sid=&:display_count=yes&:showVizHome=no&:embed=y",
      demoLinkText: "View Code",
      // IMPORTANT: Replace with your GitHub repo link for the churn prediction project
     // demoLinkHref: "https://github.com/syl21b/Churn_Prediction",
      //demoButtonTitle: "Explore the code on GitHub",
      // IMPORTANT: Replace with a more specific image preview for the churn dashboard
      imagePreview: "/images/churn-dashboard-preview.png", // Assuming you'll add this image to your public folder
    },
  {
    id: 4,
    type: "pdf",
    date: "Aug 2023 - Dec 2023",
    title: "Predicting Used Car Prices with Machine Learning",
    description: "Applying various machine learning algorithms to predict used car sales prices from consumer-available information.",
    problem: "Accurately pricing used cars is challenging for both sellers and buyers due to numerous influencing factors (<strong>mileage</strong>, <strong>age</strong>, <strong>brand</strong>, <strong>features</strong>, <strong>market demand</strong>). Inaccurate pricing can lead to financial losses or prolonged sales cycles.",
    solution: "Developed a robust <strong>predictive model</strong> using various <strong>machine learning algorithms</strong> (<strong>Multiple Linear Regression</strong>, <strong>Decision Trees</strong>, <strong>Random Forest</strong>, <strong>Gradient Boosting</strong>, <strong>Support Vector Machine</strong>) to estimate used car prices based on consumer-available information. The solution involves extensive <strong>data preprocessing</strong>, <strong>feature engineering</strong>, and rigorous <strong>model evaluation</strong> to ensure high accuracy.",
    contributions: [
      "<strong>Data Acquisition & Preprocessing:</strong> Sourced and cleaned a dataset of over <strong>760,000 used car sales</strong>, handling <strong>missing values</strong>, identifying <strong>outliers</strong> (using IQR), and preparing data for modeling.",
      "<strong>Feature Engineering:</strong> Extracted and created new features from raw data (e.g., splitting 'mpg' and 'engine' features, encoding categorical variables) to <strong>improve model performance</strong>.",
      "<strong>Model Development & Training:</strong> Implemented and trained multiple <strong>regression models</strong> in <strong>Python</strong> using `Scikit-learn`, comparing their performance across different algorithms.",
      "<strong>Model Evaluation:</strong> Evaluated models using <strong>RMSE</strong>, <strong>MAE</strong>, <strong>R² Score</strong>, and <strong>MAPE</strong> to determine predictive accuracy and reliability. Identified <strong>Gradient Boosting</strong> as the top-performing model.",
      "<strong>Feature Importance Analysis:</strong> Identified <strong>key price drivers</strong> such as <strong>engine displacement</strong>, <strong>mileage</strong>, <strong>highway MPG</strong>, and <strong>year</strong> of manufacture, providing actionable insights for sellers and buyers."
    ],
    technologies: ["Machine Learning", "Regression Analysis", "Python", "Data Preprocessing",
      "Feature Engineering", "Model Evaluation", "Gradient Boosting",
      "Random Forest", "Decision Trees", "Linear Regression", "SVM",
      "Used Car Market", "Predictive Modeling", "Data Science", "Scikit-learn"],
    challenges: [
      "<strong>High Dimensionality & Data Volume:</strong> Working with a large dataset (<strong>760,000 records</strong>, many features) required <strong>efficient processing</strong> and <strong>feature selection techniques</strong>.",
      "<strong>Non-Linear Relationships:</strong> Used car prices have complex, non-linear relationships with various features. This was addressed by exploring <strong>ensemble methods</strong> like Gradient Boosting and Random Forest.",
      "<strong>Outlier Sensitivity:</strong> Outliers in price or mileage data could significantly skew model predictions. <strong>Robust outlier detection</strong> and <strong>handling (IQR)</strong> were crucial.",
      "<strong>Interpretability of Complex Models:</strong> While powerful, some models (e.g., Gradient Boosting) are less interpretable. Focused on providing <strong>clear visualization of feature importance</strong> to compensate."
    ],
    results: "Achieved an <strong>R² score of 0.859</strong> with the <strong>Gradient Boosting</strong> model, demonstrating <strong>high accuracy</strong> in predicting used car prices. The identified key price drivers offer valuable insights for strategic pricing and buying decisions, potentially <strong>minimizing financial risk</strong> for users.",
    futureEnhancements: "Develop a <strong>web application</strong> for real-time car price predictions, integrate with <strong>external market data APIs</strong>, incorporate more nuanced features (e.g., car condition, accident history), and retrain models with <strong>more recent data</strong> for continuous accuracy.",
    linkText: "Open Report",
    linkHref: "https://github.com/syl21b/Car-Price-Prediction/blob/351296bcfdef19fc7f5d38c8808b6cbd8573ca68/Final%20Report_%20Car%20Price%20Prediction.pdf",
    buttonTitle: "Open Car Price Prediction Report (PDF) in new tab",
    iframeSrc: `https://docs.google.com/viewer?url=${encodeURIComponent("https://raw.githubusercontent.com/syl21b/Car-Price-Prediction/main/Final%20Report_%20Car%20Price%20Prediction.pdf")}&embedded=true`, // Corrected PDF URL in iframeSrc
    demoLinkText: "View Code",
    demoLinkHref: "https://github.com/syl21b/Car-Price-Prediction.git",
    demoButtonTitle: "View Car Price Prediction Code on GitHub",
    imagePreview: "/images/car-price-preview.png", // Added a preview image for PDF
  },
  {
    id: 5,
    type: "pdf",
    date: "Oct 2023 - Dec 2023",
    title: "Customer Churn Prediction with Machine Learning",
    description: "Developing and comparing various machine learning models to predict customer churn in telecommunications.",
    problem: "Customers frequently churn from telecommunication services, leading to significant <strong>revenue loss</strong> for providers. Identifying at-risk customers proactively is <strong>crucial for effective retention strategies</strong>.",
    solution: "Developed and evaluated various <strong>machine learning models</strong> (<strong>Logistic Regression</strong>, <strong>Decision Tree</strong>, <strong>Random Forest</strong>, <strong>Gradient Boosting</strong>, <strong>AdaBoost</strong>, <strong>SVM</strong>, <strong>Neural Network</strong>) to predict customer churn. Employed <strong>SMOTE</strong> for handling imbalanced datasets and performed <strong>feature importance analysis</strong> to identify <strong>key drivers of churn</strong>.",
    contributions: [
      "<strong>Data Cleaning & Preprocessing:</strong> Processed a telecommunications dataset of <strong>70,000 records</strong> with 21 features, including handling <strong>missing values</strong> and <strong>categorical encoding</strong>.",
      "<strong>Imbalance Handling:</strong> Implemented <strong>SMOTE (Synthetic Minority Over-sampling Technique)</strong> to address the imbalanced 'Churn' vs. 'Not Churn' classes, ensuring <strong>robust model training</strong>.",
      "<strong>Model Development & Comparison:</strong> Trained and compared performance of multiple <strong>classification algorithms</strong> (Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, AdaBoost, SVM, Neural Network) using <strong>Python's `Scikit-learn`</strong> and <strong>`TensorFlow/Keras`</strong>.",
      "<strong>Evaluation & Optimization:</strong> Evaluated models using <strong>F1-score</strong> and <strong>balanced accuracy</strong> (crucial for imbalanced data) and <strong>fine-tuned hyperparameters</strong>.",
      "<strong>Feature Importance Analysis:</strong> Identified <strong>key features driving churn</strong>, such as '<strong>AverageViewingDuration</strong>', '<strong>ViewingHoursPerWeek</strong>', '<strong>AccountAge</strong>', '<strong>ContentDownloadsPerMonth</strong>', and '<strong>MonthlyCharges</strong>'."
    ],
    technologies: ["Machine Learning", "Churn Prediction", "Data Imbalance", "SMOTE",
      "Logistic Regression", "Decision Tree", "Random Forest", "Gradient Boosting",
      "AdaBoost", "SVM", "Neural Network", "Python", "Scikit-learn", "TensorFlow",
      "Keras", "Feature Importance", "Customer Retention", "Predictive Analytics",
      "Telecommunications Data", "Model Evaluation"],
    challenges: [
      "<strong>Highly Imbalanced Dataset:</strong> The primary challenge was the significant imbalance in the churn classes. This was successfully addressed using <strong>SMOTE</strong>, which prevented the models from being biased towards the majority class and <strong>improved minority class prediction</strong>.",
      "<strong>Model Selection & Hyperparameter Tuning:</strong> Selecting the most effective model and optimizing its parameters for an imbalanced classification problem. This involved <strong>extensive experimentation</strong> and careful interpretation of evaluation metrics beyond simple accuracy.",
      "<strong>Actionable Insights:</strong> Translating complex model outputs into <strong>clear, actionable recommendations</strong> for business stakeholders. Achieved this by focusing on <strong>feature importance</strong> and direct implications for <strong>customer retention strategies</strong>."
    ],
    results: "Achieved <strong>balanced accuracies between 68% and 72%</strong> across various models, with <strong>AdaBoost</strong> identified as the most optimal for this dataset. The project successfully identified <strong>crucial churn drivers</strong>, contributing to an estimated <strong>90% success rate in prediction</strong> when applied to new data, providing a <strong>strong basis for targeted customer retention efforts</strong>.",
    futureEnhancements: "Integrate <strong>ensemble methods</strong> for further predictive accuracy gains, explore <strong>Explainable AI (XAI) techniques</strong> (e.g., SHAP, LIME) for deeper model interpretability, develop a <strong>real-time churn prediction dashboard</strong>, and integrate <strong>A/B testing frameworks</strong> for retention campaigns.",
    linkText: "Open Report",
    linkHref: "https://github.com/syl21b/Churn_Prediction/blob/ece7528f3ee130b422453e4c4ed5f7784ddc1c87/Report.pdf",
    buttonTitle: "Open Customer Churn Prediction Report (PDF)",
    iframeSrc: `https://docs.google.com/viewer?url=${encodeURIComponent("https://raw.githubusercontent.com/syl21b/Churn_Prediction/main/Report.pdf")}&embedded=true`, // Corrected PDF URL in iframeSrc
    demoLinkText: "View Code",
    demoLinkHref: "https://github.com/syl21b/Churn_Prediction/blob/ece7528f3ee130b422453e4c4ed5f7784ddc1c87/Project-Churn%20Prediction.ipynb",
    demoButtonTitle: "View Customer Churn Prediction Code on GitHub",
    imagePreview: "/images/churn-prediction-preview.png", // Added a preview image for PDF
  },
  {
    id: 6,
    title: "Individual Market Medical Plan Data Analysis (2025)",
    date: "Ongoing",
    isOngoing: true,
    category: "Healthcare Analytics & Policy", // More specific category
    imagePreview: "/assets/images/placeholder-medical-plan.png",
    iframeSrc: "",
    linkHref: "",
    linkText: "View Dashboard",
    buttonTitle: "View the medical plan dashboard",
    demoLinkHref: "",
    demoLinkText: "View Code",
    demoButtonTitle: "Explore the code",
    description: "An ongoing project dedicated to delivering transparent and actionable insights from the 2025 Health Plan Data for individuals and families in Federally-Facilitated Marketplaces. It rigorously analyzes premiums, coverage options, and complex rating scenarios, aiming to demystify healthcare costs for consumers and inform policy decisions.",
    problem: `
      <h3>The Enduring Problem: Opaque Healthcare Costs & Complex Decision-Making</h3>
      <p>A perennial challenge in the individual health insurance market is the **lack of transparency and the overwhelming complexity** consumers face when choosing a plan. Despite publicly available data, it remains incredibly difficult for the average person to:</p>
      <ul>
        <li>Truly understand how premiums vary across age groups, household structures, and locations.</li>
        <li>Accurately compare "apples-to-apples" coverage options beyond just the premium number.</li>
        <li>Anticipate their out-of-pocket costs given different medical needs, making informed decisions nearly impossible without expert guidance.</li>
      </ul>
      <p>This opacity leads to suboptimal choices, financial surprises, and a general distrust in the healthcare system, impacting both individual well-being and market efficiency.</p>
    `,
    solution: "This project provides a robust, data-driven solution to these transparency issues. By meticulously processing and visualizing the 2025 Health Plan Data from HealthCare.gov, it illuminates premium trends, cost variations, and available coverage options. The analysis aims to empower consumers with clearer information, support policy analysts in identifying market inefficiencies, and serve as a foundational tool for healthcare market research.",
    contributions: [
      "Rigorous data acquisition, cleaning, and transformation of raw 2025 Health Plan Data.",
      "Development of interactive visualizations illustrating premium structures and their variance across demographics (age, household size).",
      "In-depth analysis of how different plan types (e.g., HMO, PPO) and metal levels (Bronze, Silver, Gold) impact both premiums and coverage details.",
      "Quantification of health plan costs based on various household compositions (single, couple, family of four).",
      "Assessment of plan availability and coverage scope from January 1 to December 31, 2025."
    ],
    technologies: [
      "Python (Pandas, NumPy for data manipulation)",
      "Tableau / Power BI (for interactive dashboarding and visualization)",
      "SQL (for data extraction and preliminary structuring)",
      "Advanced Statistical Modeling (future phase for predictive elements)"
    ],
    challenges: [
      "Handling the large volume and intricate structure of health plan data, including diverse rating areas and demographic factors.",
      "Developing intuitive visualizations that simplify complex premium and coverage differences without oversimplifying the underlying data.",
      "Ensuring the analysis remains relevant and adaptable to future data releases and policy changes."
    ],
    learnings: [
      "Gained profound understanding of the intricacies of the U.S. individual health insurance marketplace and its pricing mechanisms.",
      "Mastered advanced data modeling techniques to derive meaningful insights from highly granular healthcare datasets.",
      "Refined skills in creating accessible data narratives from complex numerical information, crucial for diverse audiences."
    ],
    results: "Initial phases have yielded highly granular insights into premium landscapes, revealing clear patterns of cost escalation with age and specific family compositions. The project provides a foundational analytical framework that can be scaled for future market data. The ongoing work focuses on deeper insights into coverage value versus premium.",
    futureEnhancements: `
      <h3>The Untouched Key: Predictive Cost & Out-of-Pocket Scenarios for Unmet Needs</h3>
      <p>While many analyses focus on current premiums, a critical yet largely unaddressed problem is predicting **a consumer's *actual* total annual healthcare cost, encompassing premiums, deductibles, co-pays, and out-of-pocket maximums, based on their *projected* individual health needs**.</p>
      <p>This project aims to introduce a feature that:</p>
      <ul>
        <li>Goes beyond simple premium display to create **personalized total cost projections**.</li>
        <li>Allows users to input hypothetical health scenarios (e.g., "expecting one ER visit," "managing chronic condition X," "planning for surgery") to see estimated total out-of-pocket costs for *each specific plan*.</li>
        <li>Utilizes advanced modeling to recommend plans that offer the best financial value *given their anticipated healthcare utilization*, rather than just the lowest premium.</li>
      </ul>
      <p>This feature would revolutionize consumer decision-making by providing predictive financial clarity, moving beyond current year pricing to forecast the true financial implications of health plan choices based on individual health profiles and anticipated events. This shifts the focus from "what is the premium?" to "what will this plan *actually cost me* for my unique health needs?"</p>
    `
  }
];