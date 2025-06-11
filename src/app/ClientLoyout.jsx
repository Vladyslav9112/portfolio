"use client";

import { useEffect } from "react";

export default function ClientLayout({ children }) {
  useEffect(() => {
    const container = document.querySelector(".glows-container");
    if (!container) return;

    container.innerHTML = "";

    const screenWidth = window.innerWidth;

    let numGlows = 20;
    if (screenWidth < 640) {
      numGlows = 5;
    } else if (screenWidth < 768) {
      numGlows = 7 + Math.floor(Math.random() * 4);
    } else if (screenWidth < 1024) {
      numGlows = 10 + Math.floor(Math.random() * 6);
    }

    for (let i = 0; i < numGlows; i++) {
      const glow = document.createElement("div");
      glow.className = "glow";

      glow.style.top = `${Math.random() * 100}vh`;
      glow.style.left = `${Math.random() * 100}vw`;

      const size = 80 + Math.random() * 40;
      glow.style.width = `${size}px`;
      glow.style.height = `${size}px`;

      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * duration;

      const moveX = (Math.random() - 0.5) * 40;
      const moveY = (Math.random() - 0.5) * 80;

      glow.style.setProperty("--move-x", `${moveX}vw`);
      glow.style.setProperty("--move-y", `${moveY}vh`);
      glow.style.animation = `moveGlow ${duration}s ease-in-out infinite alternate`;
      glow.style.animationDelay = `${delay}s`;

      container.appendChild(glow);
    }
  }, []);

  return (
    <>
      <div className="glows-container fixed top-0 left-0 w-full h-full pointer-events-none -z-10"></div>
      {children}
    </>
  );
}
