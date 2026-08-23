'use client';

import { motion } from 'framer-motion';
import { Play, Star, Tv, Languages } from 'lucide-react';
import { useState } from 'react';

export function AnimeCard({ item }: { item: any }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
    setTilt({ x: y * 14, y: x * 18 });
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(34,211,238,0.12)] backdrop-blur-xl"
      style={{ transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      whileHover={{ y: -10, scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_55%)] opacity-60" />

      <div className="relative overflow-hidden rounded-[22px]">
        <img
          src={item.poster_url}
          alt={item.title_en}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />

        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {item.status}
          </span>
          <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
            {item.language}
          </span>
        </div>

        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-xs text-amber-300">
          <Star size={12} className="fill-current" />
          {item.rating}
        </div>
      </div>

      <div className="relative mt-4 space-y-3 px-2 pb-2">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="line-clamp-1 text-xl font-semibold text-white">{item.title_en}</h3>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{item.studio}</p>
          </div>
          <button className="rounded-full border border-white/10 bg-white/5 p-2 text-cyan-200 transition hover:bg-cyan-500/10">
            <Play size={14} className="fill-current" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
          {item.genres.slice(0, 3).map((genre: string) => (
            <span key={genre} className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
              {genre}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1"><Tv size={12} /> {item.age_rating}</span>
          <span className="flex items-center gap-1"><Languages size={12} /> {item.release_year}</span>
        </div>
      </div>
    </motion.div>
  );
}
