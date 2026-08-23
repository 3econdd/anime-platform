import { ScrollytellingCanvas } from '@/components/3d/ScrollytellingCanvas';
import { AnimeCard } from '@/components/anime/AnimeCard';

const sampleAnime = [
  {
    id: 'bleach-thousand-year-blood-war',
    slug: 'bleach-thousand-year-blood-war',
    title_ka: 'Bleach: Thousand-Year Blood War',
    title_en: 'Bleach: Thousand-Year Blood War',
    synopsis_ka: 'სoul society დაიშლება, როდესაც უძველესი სისხლის ომი იღვიძებს. ichigo kurosaki და მისი მეგობრები იბრძვიან სამყაროს გადარჩენისთვის, რათა შეაჩერონ უძველესი საფრთხე, რომელიც დაბრუნდა.',
    synopsis_en: 'The peace of the Soul Society is shattered when the Quincy bloodline returns with a century-old grudge. Ichigo Kurosaki and his allies rise to stop a war that threatens the entire afterlife.',
    poster_url: 'https://cdn.myanimelist.net/images/anime/1908/135462l.jpg',
    banner_url: 'https://cdn.myanimelist.net/images/anime/1908/135462l.jpg',
    rating: 9.6,
    age_rating: 'TV-14',
    release_year: 2024,
    season: 'Fall 2024',
    status: 'ongoing',
    type: 'Series',
    studio: 'Pierrot',
    genres: ['Action', 'Fantasy', 'Shonen'],
    tags: ['geo dub', 'eng dub', '4k'],
    views_count: 245980,
    isFeatured: true,
    language: 'GEO / ENG'
  },
  {
    id: 'demon-slayer',
    slug: 'demon-slayer-kimetsu-no-yaiba',
    title_ka: 'Demon Slayer: Kimetsu no Yaiba',
    title_en: 'Demon Slayer: Kimetsu no Yaiba',
    synopsis_ka: 'tanjiro kamado და მისი ოჯახი ებრძვიან მძლიერ დემონებს, როდესაც ოჯახი კარგავს ყველაზე ძვირფასს. მისი გზა სავსეა ტრაგედიით, გამბედაობითა და დაუღალავი ბრძოლით ადამიანობისთვის.',
    synopsis_en: 'After a demon attack leaves his family dead and his sister transformed, Tanjiro Kamado joins the Demon Slayer Corps to hunt the monster who ruined his life and protect what remains of his humanity.',
    poster_url: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
    banner_url: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
    rating: 9.5,
    age_rating: 'TV-14',
    release_year: 2024,
    season: 'Winter 2024',
    status: 'ongoing',
    type: 'Series',
    studio: 'ufotable',
    genres: ['Action', 'Adventure', 'Fantasy'],
    tags: ['4k', 'hd', 'battle'],
    views_count: 316840,
    isFeatured: true,
    language: 'GEO / ENG'
  },
  {
    id: 'cyberpunk-edgerunners',
    slug: 'cyberpunk-edgerunners',
    title_ka: 'Cyberpunk: Edgerunners',
    title_en: 'Cyberpunk: Edgerunners',
    synopsis_ka: 'ნათელი, მაგრამ გაუჩინარებული ახალგაზრდა night city-ში ეძებს მიზანს, როცა მისი ცხოვრება, თავისუფლება და იდენტობა მას ბრუნავს გაუთავებელ ბრძოლებში, სადაც სხეული და მეხსიერება წყვეტს საზღვრებს.',
    synopsis_en: 'In Night City, a young mercenary chases survival and identity as he is drawn into a deadly spiral of ambition, betrayal, and cybernetic power.',
    poster_url: 'https://cdn.myanimelist.net/images/anime/1818/126436l.jpg',
    banner_url: 'https://cdn.myanimelist.net/images/anime/1818/126436l.jpg',
    rating: 9.7,
    age_rating: 'TV-MA',
    release_year: 2022,
    season: 'Fall 2022',
    status: 'completed',
    type: 'OVA',
    studio: 'Trigger',
    genres: ['Sci-Fi', 'Action', 'Cyberpunk'],
    tags: ['cyberpunk', 'neon', 'high energy'],
    views_count: 421950,
    isFeatured: true,
    language: 'GEO / ENG'
  },
  {
    id: 'attack-on-titan',
    slug: 'attack-on-titan',
    title_ka: 'Attack on Titan',
    title_en: 'Attack on Titan',
    synopsis_ka: 'ცხოვრების უკანასკნელი ნაკვალევს ძებნის ერი, რომელიც სამყაროს საზღვრებს გადაკვეთს, როდესაც მძლავრი titans ჭიანდება დედამიწის უკანასკნელ თავშესაფარში. eren yeager იწყებს ბრძოლას სამყაროს მომავალისთვის.',
    synopsis_en: 'In a world where humanity lives behind walls to survive titanic monsters, Eren Yeager rises to challenge the truth behind the walls and the cost of freedom itself.',
    poster_url: 'https://cdn.myanimelist.net/images/anime/10/47330l.jpg',
    banner_url: 'https://cdn.myanimelist.net/images/anime/10/47330l.jpg',
    rating: 9.8,
    age_rating: 'TV-MA',
    release_year: 2013,
    season: 'Spring 2013',
    status: 'completed',
    type: 'Series',
    studio: 'Wit Studio',
    genres: ['Action', 'Drama', 'Dark Fantasy'],
    tags: ['epic', 'classic', 'storytelling'],
    views_count: 589320,
    isFeatured: true,
    language: 'GEO / ENG'
  }
];

const newAnime = sampleAnime.slice(0, 4);

export default function HomePage({ params }: { params: { lang: string } }) {
  const locale = params?.lang === 'ka' ? 'ka' : 'en';

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <section className="relative isolate overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.16),transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-10 md:px-8">
          <div className="mb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">AniVerse</span>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-cyan-200">{locale === 'ka' ? 'GEO / ENG' : 'GEO / ENG'}</span>
              <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-2 text-fuchsia-200">4K</span>
            </div>
          </div>

          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-[11px] uppercase tracking-[0.38em] text-cyan-300">{locale === 'ka' ? 'მომდევნო ერა' : 'THE NEXT ERA'}</p>
              <h1 className="max-w-2xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl xl:text-[6rem]">
                {locale === 'ka' ? 'ანიმე' : 'ANIME'}
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {locale === 'ka' ? 'ტრანსფორმაცია' : 'STREAMING'}
                </span>
              </h1>
            </div>

            <div className="flex gap-3">
              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(34,211,238,0.3)]">
                {locale === 'ka' ? 'დაკვრა' : 'Start Watching'}
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md">
                {locale === 'ka' ? 'სიის დათვალიერება' : 'Browse Anime'}
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 px-4 pb-8 md:px-8">
          <ScrollytellingCanvas />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-fuchsia-300">{locale === 'ka' ? 'ახალი' : 'New'}</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              {locale === 'ka' ? 'NEW ANIMES' : 'NEW ANIMES'}
            </h2>
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-2">
          {newAnime.map((anime) => (
            <div key={anime.id} className="min-w-[240px] flex-1 rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[20px]">
                <img src={anime.poster_url} alt={anime.title_en} className="h-64 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
                <div className="absolute left-3 top-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                  {anime.status}
                </div>
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-amber-300">
                  ★ {anime.rating}
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{anime.title_en}</h3>
                  <button className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-2 text-xs font-semibold text-white">
                    {locale === 'ka' ? 'Play' : 'Play'}
                  </button>
                </div>
                <p className="text-sm text-slate-300">{anime.synopsis_en}</p>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{anime.release_year}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{anime.age_rating}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{anime.language}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-cyan-300">{locale === 'ka' ? 'მომგებიანი' : 'Curated'}</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
              {locale === 'ka' ? 'აირჩეული ანიმე' : 'Featured Collection'}
            </h2>
          </div>
          <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-slate-200">
            {locale === 'ka' ? 'ყველა' : 'View all'}
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sampleAnime.map((anime) => (
            <AnimeCard key={anime.id} item={anime} />
          ))}
        </div>
      </section>
    </main>
  );
}
