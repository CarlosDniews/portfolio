import { Heart } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">
          © {year} Carlos Daniel Alves da Rosa
        </p>
        <p className="text-sm text-slate-600 flex items-center gap-1">
          Feito com <Heart size={14} className="text-purple-500/60" /> usando
          Next.js, NestJS & tRPC
        </p>
      </div>
    </footer>
  );
}
