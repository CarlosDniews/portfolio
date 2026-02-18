"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Tracing beam line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] overflow-hidden hidden md:block">
        {/* Background line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
        {/* Animated glow */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"
          style={{
            height: "30%",
            top: useTransform(scrollYProgress, [0, 1], ["0%", "70%"]),
            opacity,
          }}
        />
        {/* Dot at the position */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"
          style={{
            top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            opacity,
          }}
        />
      </div>
      <div className="md:pl-16">{children}</div>
    </div>
  );
};
