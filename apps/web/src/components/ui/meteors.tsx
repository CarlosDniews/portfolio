"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[215deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:content-[''] before:absolute before:top-1/2 before:-z-10 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:bg-gradient-to-r before:from-[#6366f1] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        />
      ))}
    </>
  );
};

export function MeteorCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Meteors number={10} />
      {children}
    </div>
  );
}
