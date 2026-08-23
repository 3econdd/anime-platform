'use client';

import { useState } from 'react';

export function AuthModal({ onClose }: { onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-[#111118]/90 p-6 shadow-[0_30px_80px_rgba(236,72,153,0.18)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">AniVerse</p>
            <h3 className="mt-2 text-2xl font-bold text-white">{isLogin ? 'Welcome back' : 'Create account'}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 px-2 py-1 text-sm text-slate-200 transition hover:bg-white/5"
            aria-label="Close authentication modal"
          >
            ✕
          </button>
        </div>

        <div className="mb-5 flex gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`flex-1 rounded-full px-3 py-2 text-sm ${isLogin ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-300'}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`flex-1 rounded-full px-3 py-2 text-sm ${!isLogin ? 'bg-fuchsia-500/20 text-fuchsia-200' : 'text-slate-300'}`}
          >
            Register
          </button>
        </div>

        <div className="space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Email" />
          <input type="password" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Password" />
          {!isLogin && (
            <input type="password" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Confirm password" />
          )}
          <button type="button" className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            {isLogin ? 'Login' : 'Create account'}
          </button>
          <button type="button" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-100">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
