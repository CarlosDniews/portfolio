'use client';

import { StarsBackground } from './ui/stars-background';
import { ShootingStars } from './ui/shooting-stars';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b24] via-[#0f0c29] to-[#1a0a3e]" />

      {/* Star field */}
      <StarsBackground
        starDensity={0.00045}
        twinkleProbability={0.7}
        minTwinkleSpeed={0.3}
        maxTwinkleSpeed={1.2}
        className="absolute inset-0"
      />

      {/* Shooting stars */}
      <ShootingStars
        minSpeed={10}
        maxSpeed={30}
        minDelay={1200}
        maxDelay={4200}
        starColor="#9E00FF"
        trailColor="#2EB9DF"
      />
      <ShootingStars
        minSpeed={15}
        maxSpeed={35}
        minDelay={2000}
        maxDelay={5000}
        starColor="#6366f1"
        trailColor="#a855f7"
      />

      {/* Gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse-soft" />
      <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px] animate-pulse-soft" style={{ animationDelay: '3s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
