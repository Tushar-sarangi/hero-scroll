import React, { useState } from "react";

const slidesData = [
  { label: "Slide 1", background: "rgba(0, 123, 255, 0.6)", textColor: "#fff" },
  { label: "Slide 2", background: "rgba(220, 53, 69, 0.6)", textColor: "#fff" },
  { label: "Slide 3", background: "rgba(40, 167, 69, 0.6)", textColor: "#fff" },
];

export default function HeroScroll() {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden", // remove any scrollbars
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      {/* Slides stacked */}
      {slidesData.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) scale(${isActive ? 1 : 0.8})`,
              opacity: isActive ? 1 : 0,
              transition: "transform 0.5s ease, opacity 0.5s ease",
              width: "80%",       // keep inside the container
              maxWidth: 800,
              height: "60%",
              borderRadius: 32,
              background: slide.background,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: slide.textColor,
              fontSize: 48,
              fontWeight: 700,
              boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
            }}
          >
            {slide.label}
          </div>
        );
      })}

      {/* Dock buttons */}
      <div
        style={{
          position: "absolute",
          bottom: 50, // slightly above bottom
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 16,
          pointerEvents: "auto",
        }}
      >
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.32)",
              background: active === i ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.18)",
              cursor: "pointer",
              outline: "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
