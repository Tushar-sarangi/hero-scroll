import React, { useRef, useState, useEffect, useCallback } from "react";

export default function HeroScroll({
  slides = [],
  dockColor = "rgba(255,255,255,0.18)",
  dockBlur = 16,
  dockBorder = "rgba(255,255,255,0.32)",
  dockOpacity = 1,
  buttonSize = 50,
  buttonRadius = 25,
  buttonActiveColor = "rgba(255,255,255,0.38)",
  buttonColor = "rgba(255,255,255,0.22)",
  usProject = "8kp989Ga8CcQd0OD8MhC",
}) {
  const usRef = useRef(null);
  const [active, setActive] = useState(0);

  // Unicorn Studio Embed (Compact)
  useEffect(() => {
    if (!usRef.current) return;
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.32/dist/unicornStudio.umd.js";
    script.onload = () => {
      if (!window.UnicornStudio?.isInitialized) {
        window.UnicornStudio?.init();
        window.UnicornStudio.isInitialized = true;
      }
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  // Handle slide change via buttons
  const selectSlide = useCallback((idx) => {
    setActive(idx);
  }, []);

  // Slides stacked vertically with fade & scale animation
  const slideEls = slides.map((slide, idx) => {
    const isActive = idx === active;
    return (
      <div
        key={idx}
        style={{
          width: "70vw",
          maxWidth: 900,
          height: "50vh",
          margin: "20px auto",
          borderRadius: 32,
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.32)",
          color: slide.textColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 32,
          fontWeight: 700,
          textAlign: "center",
          padding: 40,
          boxSizing: "border-box",
          cursor: "pointer",
          flexShrink: 0,
          transition: "opacity 0.6s ease, transform 0.6s ease",
          opacity: isActive ? 1 : 0,
          transform: `scale(${isActive ? 1 : 0.85})`,
          position: isActive ? "relative" : "absolute",
          left: 0,
          right: 0,
        }}
        onClick={() => selectSlide(idx)}
      >
        {slide.label}
      </div>
    );
  });

  // Dock buttons
  const dockStyle = {
    position: "absolute",
    bottom: "12%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 16,
    background: dockColor,
    border: `1px solid ${dockBorder}`,
    borderRadius: 32,
    padding: "12px 24px",
    backdropFilter: `blur(${dockBlur}px)`,
    WebkitBackdropFilter: `blur(${dockBlur}px)`,
    opacity: dockOpacity,
    zIndex: 10,
  };

  return (
    <div style={{ width: "100%", position: "relative", minHeight: "80vh" }}>
      {/* Unicorn Studio Background (Compact) */}
      <div
        ref={usRef}
        data-us-project={usProject}
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "90vh",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
      ></div>

      {/* Slides container */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        {slideEls}
      </div>

      {/* Dock Buttons */}
      <div style={dockStyle}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => selectSlide(idx)}
            style={{
              width: buttonSize,
              height: buttonSize,
              borderRadius: buttonRadius,
              background: active === idx ? buttonActiveColor : buttonColor,
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
