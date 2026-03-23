"use client";
import { useEffect, useRef } from "react";

export default function ClientLayout({ children }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Fixed base background */}
      <div
        className="fixed inset-0 pointer-events-none -z-20"
        style={{ background: "#0B0F1A" }}
      />

      {/* Animated ambient orbs — fixed, full-screen, never clipped */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="ambient-orb orb-purple" />
        <div className="ambient-orb orb-cyan" />
        <div className="ambient-orb orb-pink" />
        <div className="ambient-orb orb-purple-2" />
      </div>

      {/* Cursor follow glow */}
      <div
        ref={cursorRef}
        className="cursor-glow pointer-events-none fixed -z-10"
      />

      {children}
    </>
  );
}
