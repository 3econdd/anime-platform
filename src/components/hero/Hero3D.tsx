'use client';

import { CanvasContainer } from '@/components/3d/CanvasContainer';
import { FloatingCards3D } from '@/components/3d/FloatingCards3D';
import { motion } from 'framer-motion';

export function Hero3D() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.2),transparent_35%)]" />
      <CanvasContainer />
      <FloatingCards3D />

      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-xl"
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-cyan-200">
            Trending now
          </p>
          <h1 className="text-5xl font-black leading-none tracking-tight text-white md:text-7xl">
            Shadowblade <span className="text-cyan-300">Chronicles</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-slate-300 md:text-lg">
            A cinematic anime universe blending neon action, thunderous drama, and dual-language streaming built for immersive fandoms.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.35)]">
              Play now
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-100 backdrop-blur-md">
              Bookmark
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['GEO DUB', 'ENG DUB', '4K', 'NEW EPISODE'].map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-slate-200 backdrop-blur-md">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
