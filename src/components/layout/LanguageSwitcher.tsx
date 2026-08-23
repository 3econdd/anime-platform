'use client';

import { useState } from 'react';

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<'ka' | 'en'>('en');

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
      <button
        onClick={() => setLocale('ka')}
        className={`rounded-full px-2.5 py-1.5 text-xs font-medium ${locale === 'ka' ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-300'}`}
      >
        KA
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`rounded-full px-2.5 py-1.5 text-xs font-medium ${locale === 'en' ? 'bg-fuchsia-500/20 text-fuchsia-200' : 'text-slate-300'}`}
      >
        EN
      </button>
    </div>
  );
}
