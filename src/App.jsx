import React from "react";
import HeroScroll from "./HeroScroll";

export default function App() {
  const slides = [
    { label: "About Me", textColor: "#fff" },
    { label: "My Works", textColor: "#fff" },
    { label: "Portfolio", textColor: "#fff" },
    { label: "Contact", textColor: "#fff" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d", padding: 40 }}>
      <HeroScroll slides={slides} background="#0d0d0d" />
    </div>
  );
}
