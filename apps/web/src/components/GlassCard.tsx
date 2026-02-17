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
  return (
    <div
      className={`
        glass rounded-2xl
        ${hover ? 'glass-hover' : ''}
        ${glow ? 'glow-purple' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
