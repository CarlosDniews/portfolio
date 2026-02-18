"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const MagicCard = ({
  children,
  className,
  gradientSize = 200,
  gradientColor = "rgba(120, 90, 255, 0.15)",
  gradientOpacity = 0.8,
}: {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient follow cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 80%)
          `,
          opacity: gradientOpacity,
        }}
      />
      {children}
    </div>
  );
};
