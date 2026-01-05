// Learning.jsx - Complete mobile-optimized version
import React from 'react';

const Learning = () => {
  return (
    <div className="learning-page-wrapper">
      <div className="learning-content-container">
        {/* Header Section */}
        <header className="learning-header">
          <h1 className="learning-main-title">My Learning Resources</h1>
          <p className="learning-paragraph">
            Hand-drawn visuals, real lessons, and practical insights from top data professionals.
          </p>
        </header>

        {/* Section 1: AI Chatbot Guide by Bo Sar */}
        <section className="learning-section-block">
          <h2 className="learning-section-title">
            How to Build AI Chatbots: Full Guide (2025 Updates, Agents & Free Templates) by Bo Sar
          </h2>
          <div className="learning-content-block">
            <div className="learning-iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Y_DicBz78Yo"
                title="How to Build AI Chatbots: Full Guide by Bo Sar"
                className="learning-iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="learning-bio-box">
              <h3>About the Guide</h3>
              <p className="learning-paragraph">
                This comprehensive 2025 guide by Bo Sar covers everything you need to know about building AI chatbots, from basic implementations to advanced agents. The video provides updated insights on the AI landscape, LLM comparisons, and practical toolkit overviews.
              </p>
              <h4 className="learning-subtitle">What You'll Learn:</h4>
              <ul className="learning-list">
                <li>AI landscape updates for 2025</li>
                <li>LLM comparisons and selection criteria</li>
                <li>Transitioning from chatbots to agents</li>
                <li>Toolkit overview (Chatbase, Chatling, Voiceflow, n8n)</li>
                <li>Building advanced AI solutions</li>
                <li>Practical builds with step-by-step guidance</li>
              </ul>
              <h4 className="learning-subtitle">Tools & Resources Mentioned:</h4>
              <ul className="learning-list">
                <li><strong>Chatbase</strong> - AI chatbot builder platform</li>
                <li><strong>Chatling</strong> - Alternative chatbot solution</li>
                <li><strong>Voiceflow</strong> - Conversational AI platform</li>
                <li><strong>n8n</strong> - Workflow automation tool</li>
                <li><strong>Streamline Connector</strong> - Integration tool</li>
                <li><strong>Hostinger</strong> - Web hosting service</li>
              </ul>
              <h4 className="learning-subtitle">Additional Learning Resources:</h4>
              <ul className="learning-list">
                <li><a href="https://www.skool.com/aif-plus" target="_blank" rel="noopener noreferrer" className="learning-link">Step-by-step program for landing clients with AI automation</a></li>
                <li><a href="https://aif.academy/" target="_blank" rel="noopener noreferrer" className="learning-link">8-week Technical Crash Course</a></li>
                <li><a href="https://www.bosar.agency/" target="_blank" rel="noopener noreferrer" className="learning-link">Transform your business with AI</a></li>
              </ul>
            </div>
            <div className="learning-button-container">
              <a
                href="https://www.youtube.com/watch?v=Y_DicBz78Yo"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-primary"
              >
                Watch the Full Guide (YouTube)
              </a>
              <a
                href="https://get.aif.academy/ai_chatbots_resources"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-secondary"
              >
                Get Resources from Video
              </a>
            </div>
          </div>
        </section>

        <div className="learning-section-separator"></div>

        {/* Section 2: DataWithBaraa */}
        <section className="learning-section-block">
          <h2 className="learning-section-title">DataWithBaraa YouTube Channel</h2>
          <div className="learning-content-block">
            <div className="learning-iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/-7s3uFl3XnE"
                title="DataWithBaraa Featured Video"
                className="learning-iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="learning-bio-box">
              <h3>About DataWithBaraa</h3>
              <p className="learning-paragraph">
                Baraa Khatib Salkini is a data engineer with 15+ years of experience — including at Mercedes-Benz — and a Master's degree in Data Engineering. He shares clear, honest tutorials with hand-sketched explanations, drawn from real-world projects.
              </p>
              <p className="learning-paragraph">
                His work is independent, focused on helping learners grow with no fluff or hype — just practical, real data education.
              </p>
            </div>
            <div className="learning-button-container">
              <a
                href="https://www.youtube.com/@DataWithBaraa/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-primary"
              >
                Visit DataWithBaraa Channel
              </a>
            </div>
          </div>
        </section>

        <div className="learning-section-separator"></div>

        {/* Section 3: LLMs and Python */}
        <section className="learning-section-block">
          <h2 className="learning-section-title">
            Master Multimodal Data Analysis with LLMs and Python Course
          </h2>
          <div className="learning-content-block">
            <div className="learning-iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/3-4qAkFRpAk"
                title="Master Multimodal Data Analysis with LLMs and Python Course Video"
                className="learning-iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="learning-bio-box">
              <h3>About the Course</h3>
              <p className="learning-paragraph">
                This comprehensive tutorial, developed by Dr. Immanuel Trummer (Associate Professor at Cornell University), teaches you how to leverage Large Language Models (LLMs) to perform sophisticated, multimodal data analysis with just a few lines of Python code.
              </p>
              <h4 className="learning-subtitle">Key Topics Covered:</h4>
              <ul className="learning-list">
                <li>Text Classification with LLMs</li>
                <li>Image Analysis (answering questions about images)</li>
                <li>Audio Data Processing (transcribing speech to text)</li>
                <li>Natural Language Querying of Databases (SQL interface)</li>
              </ul>
              <h4 className="learning-subtitle">What Makes This Course Stand Out:</h4>
              <ul className="learning-list">
                <li><strong>Hands-on Learning:</strong> Practical, code-based examples.</li>
                <li><strong>Multimodal Approach:</strong> Covers text, image, and audio data.</li>
                <li><strong>Expert Instruction:</strong> Benefit from Dr. Trummer's knowledge.</li>
                <li><strong>Comprehensive Resources:</strong> Code samples, datasets, and more.</li>
              </ul>
            </div>
            <div className="learning-button-container">
              <a
                href="https://www.freecodecamp.org/news/master-multimodal-data-analysis-with-llms-and-python/"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-primary"
              >
                Read the Full Article
              </a>
              <a
                href="https://www.youtube.com/watch?v=3-4qAkFRpAk"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-secondary"
              >
                Watch Full Course
              </a>
            </div>
          </div>
        </section>

        <div className="learning-section-separator"></div>

        {/* Section 4: Zero to Pandas */}
        <section className="learning-section-block">
          <h2 className="learning-section-title">
            Data Analysis with Python: Zero to Pandas
          </h2>
          <div className="learning-content-block">
            <div className="learning-iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/EsDFiZPljYo"
                title="Zero to Pandas Course Video"
                className="learning-iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="learning-bio-box">
              <h3>About the Course</h3>
              <p className="learning-paragraph">
                "Data Analysis with Python: Zero to Pandas" is a practical, beginner-friendly, and coding-focused introduction to data analysis. It covers the basics of Python, Numpy, Pandas, data visualization, and exploratory data analysis.
              </p>
              <p className="learning-paragraph">
                You can learn more and register for a Certificate of Accomplishment by visiting <a href="http://zerotopandas.com" target="_blank" rel="noopener noreferrer" className="learning-link">zerotopandas.com</a>.
              </p>
              <p className="learning-paragraph">
                Developed by <strong>freeCodeCamp.org</strong>, this series is part of their mission as a 501(c)(3) charity to provide free, high-quality coding education to everyone.
              </p>
            </div>
            <div className="learning-button-container">
              <a
                href="https://www.youtube.com/watch?v=EsDFiZPljYo&list=PLWKjhJtqVAblvI1i46ScbKV2jH1gdL7VQ"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-primary"
              >
                Watch the Full Course
              </a>
              <a
                href="https://zerotopandas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-secondary"
              >
                Get Certificate
              </a>
            </div>
          </div>
        </section>

        <div className="learning-section-separator"></div>

        {/* Section 5: Learn Data Science - Full Course */}
        <section className="learning-section-block">
          <h2 className="learning-section-title">
            Learn Data Science: Full Course for Beginners
          </h2>
          <div className="learning-content-block">
            <div className="learning-iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/ua-CiDNNj30"
                title="Learn Data Science - Full Course for Beginners"
                className="learning-iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="learning-bio-box">
              <h3>About the Course</h3>
              <p className="learning-paragraph">
                This comprehensive beginner tutorial introduces you to the fundamentals of data science. It covers principles, practices, and tools that enable data science to be a powerful medium for deriving business and research insights.
              </p>
              <p className="learning-paragraph">
                You'll explore topics like data sourcing, Python coding, mathematics, and statistics — giving you a solid foundation for both future learning and immediate applications in your projects.
              </p>
              <p className="learning-paragraph">
                Offered by <strong>freeCodeCamp.org</strong>, this course helps you develop the mindset and technical skills needed to grow in data science — considered the "sexiest job of the 21st century."
              </p>
            </div>
            <div className="learning-button-container">
              <a
                href="https://www.youtube.com/watch?v=ua-CiDNNj30&list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-primary"
              >
                Watch the Full Course
              </a>
            </div>
          </div>
        </section>

        <div className="learning-section-separator"></div>

        {/* Section 6: Learn Machine Learning with TensorFlow */}
        <section className="learning-section-block">
          <h2 className="learning-section-title">
            Learn Machine Learning (Beginner-Friendly with TensorFlow)
          </h2>
          <div className="learning-content-block">
            <div className="learning-iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/i_LwzRVP7bg"
                title="Learn Machine Learning - TensorFlow"
                className="learning-iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="learning-bio-box">
              <h3>About the Course</h3>
              <p className="learning-paragraph">
                Learn Machine Learning in a way that's easy to follow for complete beginners. This course starts with the fundamentals and progresses to implementing models using TensorFlow.
              </p>
              <p className="learning-paragraph">
                You'll explore key ML concepts and see how they're applied practically to real-world problems using one of the most powerful machine learning frameworks.
              </p>
            </div>
            <div className="learning-button-container">
              <a
                href="https://www.youtube.com/watch?v=i_LwzRVP7bg&list=PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-primary"
              >
                Watch the Full Course
              </a>
            </div>
          </div>
        </section>

        <div className="learning-section-separator"></div>

        {/* Section 7: PyTorch Coding-First Beginner Tutorial */}
        <section className="learning-section-block">
          <h2 className="learning-section-title">
            PyTorch Beginner Tutorial: Linear Regression & Gradients
          </h2>
          <div className="learning-content-block">
            <div className="learning-iframe-wrapper">
              <iframe
                src="https://www.youtube.com/embed/vo_fUOk-IKk"
                title="Beginner PyTorch Course"
                className="learning-iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="learning-bio-box">
              <h3>About the Course</h3>
              <p className="learning-paragraph">
                This is a beginner-friendly, coding-first course on <strong>PyTorch</strong>, one of the most popular and fastest-growing machine learning frameworks.
              </p>
              <p className="learning-paragraph">
                You'll learn the core concepts such as tensors and gradients, then implement linear regression and gradient descent from scratch — critical foundations for ML.
              </p>
            </div>
            <div className="learning-button-container">
              <a
                href="https://www.youtube.com/watch?v=vo_fUOk-IKk&list=PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa"
                target="_blank"
                rel="noopener noreferrer"
                className="learning-btn btn-primary"
              >
                Watch PyTorch Course
              </a>
            </div>
          </div>
        </section>

        <div className="learning-section-separator"></div>

        {/* Footer */}
        <footer className="learning-footer">
          &copy; {new Date().getFullYear()} Shin Le. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Learning;