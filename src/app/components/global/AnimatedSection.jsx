"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variants = {
  left: {
    hidden: { opacity: 0, translateX: "-50px" },
    visible: { opacity: 1, translateX: "0px" },
  },
  right: {
    hidden: { opacity: 0, translateX: "50px" },
    visible: { opacity: 1, translateX: "0px" },
  },
  top: {
    hidden: { opacity: 0, translateY: "-50px" },
    visible: { opacity: 1, translateY: "0px" },
  },
  bottom: {
    hidden: { opacity: 0, translateY: "50px" },
    visible: { opacity: 1, translateY: "0px" },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function AnimatedSection({
  children,
  direction = "left",
  delay = 0,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
