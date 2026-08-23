'use client';

import Link from 'next/link';
import { Search, Bell, UserCircle2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { AuthModal } from '@/components/auth/AuthModal';

export function Navbar() {
  const [lang, setLang] = useState<'ka' | 'en'>('en');
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
              <Sparkles size={18} className="text-white" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-[0.18em] text-white">ANIVERSE</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <Link href="/en" className="transition hover:text-cyan-300">Home</Link>
            <Link href="/en" className="transition hover:text-cyan-300">Anime</Link>
            <Link href="/en" className="transition hover:text-cyan-300">Genres</Link>
            <Link href="/en" className="transition hover:text-cyan-300">Trending</Link>
            <Link href="/en" className="transition hover:text-cyan-300">Profile</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              <Search size={16} />
              Search
            </button>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-200">
              <button
                onClick={() => setLang('en')}
                className={`rounded-full px-2 py-1 ${lang === 'en' ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ka')}
                className={`rounded-full px-2 py-1 ${lang === 'ka' ? 'bg-fuchsia-500/20 text-fuchsia-200' : 'text-slate-300'}`}
              >
                KA
              </button>
            </div>

            <button
              onClick={() => setShowAuth(true)}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_35px_rgba(34,211,238,0.3)]"
            >
              Sign In / Register
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200">
              <Bell size={18} />
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200">
              <UserCircle2 size={18} />
            </button>
          </div>
        </div>
      </header>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
}
