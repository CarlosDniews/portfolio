"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number;
  density?: number;
  speed?: number;
  minSpeed?: number;
  opacity?: number;
  direction?: "none" | "up" | "down" | "left" | "right";
  color?: string;
  hover?: boolean;
  background?: string;
  children?: React.ReactNode;
}

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

export const SparklesCore: React.FC<SparklesProps> = ({
  className,
  size = 1.2,
  minSize,
  density = 800,
  speed = 1.5,
  minSpeed,
  opacity = 1,
  direction = "none",
  color = "#FFF",
  hover = false,
  background = "transparent",
  children,
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < density; i++) {
        newSparkles.push({
          id: `sparkle-${i}`,
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          color,
          delay: Math.random() * 2,
          scale: Math.random() * (size - (minSize || size * 0.5)) + (minSize || size * 0.5),
          lifespan: Math.random() * 10 + 5,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, [density, color, size, minSize]);

  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { y: [0, -30] };
      case "down":
        return { y: [0, 30] };
      case "left":
        return { x: [0, -30] };
      case "right":
        return { x: [0, 30] };
      default:
        return {};
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ background }}
    >
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute inline-block rounded-full pointer-events-none"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.scale,
            height: sparkle.scale,
            background: sparkle.color,
            opacity,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            ...getDirectionVariants(),
          }}
          transition={{
            duration: speed + Math.random() * ((minSpeed || speed * 0.5)),
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {children}
    </div>
  );
};

export const Sparkles: React.FC<{
  children: React.ReactNode;
  className?: string;
  color?: string;
}> = ({ children, className, color = "#A855F7" }) => {
  return (
    <span className={cn("relative inline-block", className)}>
      <SparklesCore
        className="absolute inset-0 -z-10"
        density={30}
        size={2}
        speed={2}
        color={color}
        opacity={0.6}
        direction="up"
      />
      {children}
    </span>
  );
};
