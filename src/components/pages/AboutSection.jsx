import React, { useState, useEffect, useRef } from "react";
import {
  BarChart2,
  Cpu,
  Layers,
  Database,
  TrendingUp,
  Activity,
  Users,
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import "/src/styles/_features.css";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const achievements = [
    {
      icon: <BarChart2 size={30} className="blue-text" />,
      title: "Actionable Business Intelligence",
      description: "Built interactive dashboards that reduced reporting time by 40% and empowered stakeholders with real-time insights for strategic decisions.",
    },
    {
      icon: <Cpu size={30} className="blue-text" />,
      title: "Production ML Models",
      description: "Developed and deployed predictive models achieving up to 94% accuracy, directly impacting revenue optimization and customer retention strategies.",
    },
    {
      icon: <Layers size={30} className="blue-text" />,
      title: "Data Pipeline Optimization",
      description: "Engineered automated preprocessing pipelines that reduced data preparation time by 60% while improving data quality by 45% through systematic validation.",
    },
    {
      icon: <Database size={30} className="blue-text" />,
      title: "Scalable Data Architecture",
      description: "Designed and implemented SQL data warehouses that handled 10M+ records, ensuring data integrity and supporting cross-departmental analytics needs.",
    },
    {
      icon: <TrendingUp size={30} className="blue-text" />,
      title: "Predictive Analytics Solutions",
      description: "Created forecasting models for financial and temporal data that improved prediction accuracy by 30%, enabling proactive business planning.",
    },
    {
      icon: <Users size={30} className="blue-text" />,
      title: "Stakeholder-Driven Insights",
      description: "Translated complex data findings into executive-level presentations that influenced key business decisions and resource allocation.",
    },
    {
      icon: <Activity size={30} className="blue-text" />,
      title: "Performance Optimization",
      description: "Improved model efficiency by 35% through systematic hyperparameter tuning and feature selection while maintaining high predictive power.",
    },
    {
      icon: <Target size={30} className="blue-text" />,
      title: "End-to-End Project Delivery",
      description: "Successfully led data initiatives from conception to deployment, delivering projects on time with documented ROI and business impact.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
    setIsAutoPlaying(true);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const total = achievements.length;
    if (diff === 0) return 'active';
    if (diff === 1 || diff === -(total - 1)) return 'right';
    if (diff === -1 || diff === (total - 1)) return 'left';
    return 'hidden';
  };

  return (
    <section className="section section-dark" id="about">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="my-heading">
            My <span className="heading-span">Proven Impact</span> & <span className="heading-span">Delivered Results</span>
          </h2>
          <p className="sub-heading max-w-2xl mx-auto">
            I've successfully transformed raw data into actionable intelligence, delivering measurable business outcomes through comprehensive data solutions.
          </p>
        </div>

        <div 
          className="three-d-carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {achievements.map((item, index) => {
              const position = getCardPosition(index);
              return (
                <div
                  key={index}
                  className={`three-d-card ${position}`}
                  onClick={() => position !== 'active' && setActiveIndex(index)}
                >
                  <div className="feature-card">
                    <div className="icon-wrapper">
                      {item.icon}
                    </div>
                    <h3 className="feature-card-title">{item.title}</h3>
                    <p className="feature-card-description">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={prevSlide}
            className="carousel-nav-button prev"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="carousel-nav-button next"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={toggleAutoPlay}
            className={`auto-play-button ${isAutoPlaying ? 'playing' : 'paused'}`}
          >
            {isAutoPlaying ? '⏸ Pause Auto-play' : '▶ Resume Auto-play'}
          </button>
        </div>
      </div>
    </section>
  );
}