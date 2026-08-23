import { notFound } from 'next/navigation';

const anime = {
  slug: 'shadowblade-chronicles',
  title_ka: 'ჩრდილთა მბრძანებელი',
  title_en: 'Shadowblade Chronicles',
  synopsis_ka: 'ადამიანი, რომელმაც დაინახა ჭეშმარიტი სინათლე...',
  synopsis_en: 'A man who glimpsed true light discovers darker powers awakening around him.',
  poster_url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  banner_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1400&q=80',
  rating: 9.4,
  release_year: 2024,
  status: 'ongoing',
  genres: ['Action', 'Fantasy', 'Adventure'],
  tags: ['dubbed', 'epic'],
  views_count: 184200
};

export default function AnimeDetailPage({ params }: { params: { slug: string } }) {
  if (params.slug !== anime.slug) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
        <img src={anime.banner_url} alt={anime.title_en} className="h-80 w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0fb0] to-transparent" />
        <div className="relative grid gap-6 p-8 md:grid-cols-[260px_1fr]">
          <img src={anime.poster_url} alt={anime.title_en} className="h-[340px] w-full rounded-3xl border border-white/10 object-cover shadow-[0_25px_80px_rgba(34,211,238,0.18)]" />
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-cyan-200">
              <span>{anime.status}</span>
              <span>•</span>
              <span>{anime.release_year}</span>
            </div>
            <h1 className="text-4xl font-black text-white md:text-6xl">{anime.title_en}</h1>
            <p className="max-w-2xl text-slate-300">{anime.synopsis_en}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {anime.genres.map((genre) => (
                <span key={genre} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">{genre}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 font-semibold text-white">Watch now</button>
              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100">Bookmark</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
