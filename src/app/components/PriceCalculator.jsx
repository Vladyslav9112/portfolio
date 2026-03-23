"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useQuote } from "../context/QuoteContext";

const projectTypes = [
  { label: "Landing Page", base: 300 },
  { label: "Business Website", base: 600 },
  { label: "Web App / SaaS", base: 1200 },
  { label: "Telegram Mini App", base: 700 },
];

const complexities = [
  { label: "Simple", mult: 1 },
  { label: "Medium", mult: 1.5 },
  { label: "Advanced", mult: 2.2 },
];

const deadlines = [
  { label: "Normal (3–4 wks)", mult: 1 },
  { label: "Fast (1–2 wks)", mult: 1.35 },
];

const extras = [
  { label: "Admin Panel", price: 300 },
  { label: "Payment Integration", price: 250 },
  { label: "Multi-language (i18n)", price: 150 },
  { label: "Custom Auth System", price: 200 },
  { label: "API Integration", price: 180 },
];

function OptionGroup({ title, options, selected, onSelect, isToggle = false }) {
  return (
    <div className="mb-6">
      <p
        className="text-xs font-bold tracking-[0.15em] uppercase mb-3"
        style={{ color: "rgba(226,232,240,0.5)" }}
      >
        {title}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
          const label = typeof opt === "string" ? opt : opt.label;
          const active = isToggle
            ? selected.includes(label)
            : selected === label;
          return (
            <button
              key={label}
              onClick={() => onSelect(label)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{
                background: active
                  ? "linear-gradient(135deg, rgba(108,99,255,0.35), rgba(0,212,255,0.2))"
                  : "rgba(255,255,255,0.04)",
                border: active
                  ? "1px solid rgba(108,99,255,0.55)"
                  : "1px solid rgba(255,255,255,0.08)",
                color: active ? "#e2e8f0" : "rgba(226,232,240,0.5)",
                boxShadow: active ? "0 0 20px rgba(108,99,255,0.2)" : "none",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PriceCalculator() {
  const [type, setType] = useState(projectTypes[0].label);
  const [complexity, setComplexity] = useState(complexities[0].label);
  const [deadline, setDeadline] = useState(deadlines[0].label);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const { setQuote } = useQuote();

  const toggleExtra = (label) => {
    setSelectedExtras((prev) =>
      prev.includes(label) ? prev.filter((e) => e !== label) : [...prev, label],
    );
  };

  const basePrice = projectTypes.find((t) => t.label === type)?.base ?? 300;
  const complexMult =
    complexities.find((c) => c.label === complexity)?.mult ?? 1;
  const deadlineMult = deadlines.find((d) => d.label === deadline)?.mult ?? 1;
  const extraTotal = extras
    .filter((e) => selectedExtras.includes(e.label))
    .reduce((s, e) => s + e.price, 0);

  const estimated = Math.round(
    basePrice * complexMult * deadlineMult + extraTotal,
  );
  const min = Math.round(estimated * 0.9);
  const max = Math.round(estimated * 1.2);

  return (
    <section id="calculator" className="py-28 relative">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-bold tracking-[0.2em] uppercase mb-3 gradient-text"
      >
        Price Calculator
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-black mb-5"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Estimate Your <span className="gradient-text">Project Cost</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-base mb-12 max-w-xl"
        style={{ color: "rgba(226,232,240,0.5)" }}
      >
        Configure your project and get an instant price estimate. Final quote
        after discussion.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Options */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-3 p-8 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <OptionGroup
            title="Project Type"
            options={projectTypes}
            selected={type}
            onSelect={setType}
          />
          <OptionGroup
            title="Complexity"
            options={complexities}
            selected={complexity}
            onSelect={setComplexity}
          />
          <OptionGroup
            title="Deadline"
            options={deadlines}
            selected={deadline}
            onSelect={setDeadline}
          />
          <OptionGroup
            title="Extra Features"
            options={extras}
            selected={selectedExtras}
            onSelect={toggleExtra}
            isToggle
          />
        </motion.div>

        {/* Estimate card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="lg:col-span-2 flex flex-col gap-5"
        >
          {/* Main price */}
          <div
            className="p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,255,0.08))",
              border: "1px solid rgba(108,99,255,0.3)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(108,99,255,0.15) 0%, transparent 60%)",
              }}
            />

            <p
              className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
              style={{ color: "rgba(226,232,240,0.5)" }}
            >
              Estimated Price
            </p>
            <motion.p
              key={estimated}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-5xl font-black gradient-text mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ${estimated.toLocaleString()}
            </motion.p>
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(226,232,240,0.45)" }}
            >
              Range: ${min.toLocaleString()} – ${max.toLocaleString()}
            </p>

            <button
              onClick={() => {
                setQuote({
                  type,
                  complexity,
                  deadline,
                  extras: selectedExtras,
                  estimated,
                  min,
                  max,
                });
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #6C63FF, #5a52e0)",
                boxShadow: "0 8px 30px rgba(108,99,255,0.35)",
              }}
            >
              Get a Free Quote
            </button>
          </div>

          {/* Breakdown */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.1em] uppercase mb-4"
              style={{ color: "rgba(226,232,240,0.4)" }}
            >
              Breakdown
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <div className="flex justify-between">
                <span style={{ color: "rgba(226,232,240,0.6)" }}>
                  Base ({type})
                </span>
                <span className="font-semibold text-white">${basePrice}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "rgba(226,232,240,0.6)" }}>
                  Complexity ({complexity})
                </span>
                <span className="font-semibold text-white">×{complexMult}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "rgba(226,232,240,0.6)" }}>Deadline</span>
                <span className="font-semibold text-white">
                  ×{deadlineMult}
                </span>
              </div>
              {extraTotal > 0 && (
                <div className="flex justify-between">
                  <span style={{ color: "rgba(226,232,240,0.6)" }}>
                    Extra features
                  </span>
                  <span className="font-semibold text-white">
                    +${extraTotal}
                  </span>
                </div>
              )}
              <div
                className="pt-2 flex justify-between"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="font-bold text-white">Total</span>
                <span className="font-black gradient-text">
                  ${estimated.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
