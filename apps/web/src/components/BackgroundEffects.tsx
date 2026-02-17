'use client';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b24] via-[#0f0c29] to-[#1a0a3e]" />

      {/* Gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse-soft" />
      <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px] animate-pulse-soft" style={{ animationDelay: '3s' }} />

      {/* Floating geometric shapes */}
      <div className="absolute top-[15%] left-[10%] w-20 h-20 border border-purple-500/10 rounded-lg rotate-45 animate-float" />
      <div className="absolute top-[60%] left-[80%] w-16 h-16 border border-indigo-500/10 rounded-full animate-float-delayed" />
      <div className="absolute top-[30%] right-[20%] w-12 h-12 border border-cyan-500/10 rounded-lg rotate-12 animate-float-slow" />
      <div className="absolute bottom-[20%] left-[15%] w-24 h-24 border border-purple-500/5 rounded-full animate-float-delayed" />
      <div className="absolute top-[75%] left-[50%] w-14 h-14 border border-indigo-400/8 rounded-lg rotate-[30deg] animate-float" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
}
