'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !hover) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        glass rounded-2xl relative overflow-hidden
        ${hover ? 'glass-hover' : ''}
        ${glow ? 'glow-purple' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -2, transition: { duration: 0.2 } } : undefined}
    >
      {/* Mouse-follow gradient overlay */}
      {hover && isHovered && (
        <div
          className="absolute inset-0 opacity-100 transition-opacity duration-300 pointer-events-none z-0"
          style={{
            background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.06), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-[1]">
        {children}
      </div>
    </motion.div>
  );
}
