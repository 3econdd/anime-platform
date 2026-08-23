'use client';

import { useState } from 'react';

export function DynamicDubSelector() {
  const [lang, setLang] = useState<'ka' | 'en'>('ka');

  return (
    <div className="flex gap-2 rounded-full border border-white/10 bg-white/5 p-1">
      <button
        onClick={() => setLang('ka')}
        className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === 'ka' ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-300'}`}
      >
        Georgian Dub
      </button>
      <button
        onClick={() => setLang('en')}
        className={`rounded-full px-3 py-1.5 text-xs font-medium ${lang === 'en' ? 'bg-fuchsia-500/20 text-fuchsia-200' : 'text-slate-300'}`}
      >
        English Dub
      </button>
    </div>
  );
}
