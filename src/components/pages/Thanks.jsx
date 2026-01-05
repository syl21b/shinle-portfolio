import React, { useEffect, useRef, useState } from "react";

const ThankYouMessage = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.4, // Trigger when 40% is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 1rem",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#ffffff",
          color: "#1d1d1f",
          padding: "1.75rem 2rem",
          maxWidth: "420px",
          width: "100%",
          borderRadius: "24px",
          fontSize: "1rem",
          lineHeight: "1.7",
          boxShadow: "0 10px 24px rgba(0, 0, 0, 0.06)",
          fontWeight: 500,
          fontFamily: "'Inter', sans-serif",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Speech bubble tail */}
        <div
          style={{
            position: "absolute",
            bottom: "-14px",
            left: "40px",
            width: 0,
            height: 0,
            borderTop: "14px solid #ffffff",
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
          }}
        />

        <p
          style={{
            margin: 0,
            fontSize: "1.05rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
          }}
        >
          <span role="img" aria-label="sparkles">✨</span> Thank you for visiting my portfolio!
          <br />
          I hope you found it insightful and inspiring.
        </p>

        <p
          style={{
            marginTop: "0.75rem",
            fontSize: "0.9rem",
            color: "#6c757d",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 1s ease 0.6s, transform 1s ease 0.6s",
          }}
        >
          Let’s build something great together.
        </p>
      </div>
    </div>
  );
};

export default ThankYouMessage;