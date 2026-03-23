"use client";
import { useEffect, useRef } from "react";

const dirMap = {
  top:    "translate-y-[-40px] opacity-0",
  bottom: "translate-y-[40px] opacity-0",
  left:   "translate-x-[-40px] opacity-0",
  right:  "translate-x-[40px] opacity-0",
};

export default function AnimatedSection({ children, direction = "bottom" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add(...dirMap[direction].split(" "), "transition-all", "duration-700");
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.remove(...dirMap[direction].split(" "));
        obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [direction]);
  return <div ref={ref}>{children}</div>;
}
