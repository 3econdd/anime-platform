create extension if not exists "pgcrypto";

create type public.preferred_lang as enum ('ka', 'en');
create type public.user_role as enum ('user', 'admin');
create type public.anime_status as enum ('ongoing', 'completed');

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text unique not null,
  avatar_url text,
  preferred_lang public.preferred_lang not null default 'en',
  role public.user_role not null default 'user',
  created_at timestamptz not null default now()
);

create table if not exists public.animes (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_ka text not null,
  title_en text not null,
  synopsis_ka text not null,
  synopsis_en text not null,
  poster_url text not null,
  banner_url text not null,
  trailer_url text,
  rating numeric(3,1) not null default 0,
  age_rating text not null default 'TV-14',
  release_year int not null,
  season text not null,
  status public.anime_status not null default 'ongoing',
  type text not null default 'Series',
  studio text not null,
  genres text[] not null default '{}',
  tags text[] not null default '{}',
  views_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.episodes (
  id uuid primary key default gen_random_uuid(),
  anime_id uuid not null references public.animes(id) on delete cascade,
  episode_number integer not null,
  title_ka text not null,
  title_en text not null,
  video_url_ka text not null,
  video_url_en text not null,
  thumbnail_url text,
  duration_seconds integer not null default 0,
  intro_start integer default 0,
  intro_end integer default 0,
  created_at timestamptz not null default now(),
  unique (anime_id, episode_number)
);

create table if not exists public.watch_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  anime_id uuid not null references public.animes(id) on delete cascade,
  episode_id uuid not null references public.episodes(id) on delete cascade,
  progress_seconds integer not null default 0,
  is_completed boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (user_id, episode_id)
);

create table if not exists public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  anime_id uuid not null references public.animes(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, anime_id)
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  episode_id uuid not null references public.episodes(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_animes_slug on public.animes(slug);
create index if not exists idx_animes_status on public.animes(status);
create index if not exists idx_episodes_anime_id on public.episodes(anime_id);
create index if not exists idx_watch_history_user_id on public.watch_history(user_id);
create index if not exists idx_bookmarks_user_id on public.bookmarks(user_id);
create index if not exists idx_comments_episode_id on public.comments(episode_id);

alter table public.profiles enable row level security;
alter table public.animes enable row level security;
alter table public.episodes enable row level security;
alter table public.watch_history enable row level security;
alter table public.bookmarks enable row level security;
alter table public.comments enable row level security;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, avatar_url, preferred_lang, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1)),
    new.raw_user_meta_data ->> 'avatar_url',
    coalesce((new.raw_user_meta_data ->> 'preferred_lang')::public.preferred_lang, 'en'),
    'user'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create or replace trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create policy "Public profiles are readable by anyone"
on public.profiles
for select
using (true);

create policy "Users can insert own profile"
on public.profiles
for insert
with check (auth.uid() = id);

create policy "Users can update own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Public animes are readable by anyone"
on public.animes
for select
using (true);

create policy "Public episodes are readable by anyone"
on public.episodes
for select
using (true);

create policy "Users can insert watch history"
on public.watch_history
for insert
with check (auth.uid() = user_id);

create policy "Users can update own watch history"
on public.watch_history
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can read own watch history"
on public.watch_history
for select
using (auth.uid() = user_id);

create policy "Users can insert bookmarks"
on public.bookmarks
for insert
with check (auth.uid() = user_id);

create policy "Users can delete own bookmarks"
on public.bookmarks
for delete
using (auth.uid() = user_id);

create policy "Users can read own bookmarks"
on public.bookmarks
for select
using (auth.uid() = user_id);

create policy "Public comments are readable by anyone"
on public.comments
for select
using (true);

create policy "Users can insert comments"
on public.comments
for insert
with check (auth.uid() = user_id);

create policy "Users can update own comments"
on public.comments
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete own comments"
on public.comments
for delete
using (auth.uid() = user_id);

insert into public.animes (
  id,
  slug,
  title_ka,
  title_en,
  synopsis_ka,
  synopsis_en,
  poster_url,
  banner_url,
  trailer_url,
  rating,
  age_rating,
  release_year,
  season,
  status,
  type,
  studio,
  genres,
  tags,
  views_count
) values
(
  '11111111-1111-4111-8111-111111111111',
  'bleach-thousand-year-blood-war',
  'Bleach: Thousand-Year Blood War',
  'Bleach: Thousand-Year Blood War',
  'სoul society დაიშლება, როდესაც უძველესი სისხლის ომი იღვიძებს. Ichigo Kurosaki და მისი მეგობრები იბრძვიან, რათა შეაჩერონ განძრახული საფრთხე, რომელიც საუკუნეების შემდეგ ბრუნდება.',
  'The peace of the Soul Society is shattered when the Quincy bloodline returns with a century-old grudge. Ichigo Kurosaki and his allies rise to stop a war that threatens the entire afterlife.',
  'https://cdn.myanimelist.net/images/anime/1908/135462l.jpg',
  'https://cdn.myanimelist.net/images/anime/1908/135462l.jpg',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  9.6,
  'TV-14',
  2024,
  'Fall 2024',
  'ongoing',
  'Series',
  'Pierrot',
  array['Action', 'Fantasy', 'Shonen'],
  array['geo dub', 'eng dub', '4k'],
  245980
),
(
  '22222222-2222-4222-8222-222222222222',
  'demon-slayer-kimetsu-no-yaiba',
  'Demon Slayer: Kimetsu no Yaiba',
  'Demon Slayer: Kimetsu no Yaiba',
  'Tanjiro Kamado და მისი ოჯახი დემონებისგან გადარჩენის შემდეგ, იძენს გატაცებას, რათა დაამტკიცოს, რომ სიმართლისთვის ბრძოლა შეიძლება ყველა საზღვრის მიღმა. მის მოს parcours აქვს საოცარი ტრაგედია და გაბედულება.',
  'After a demon attack leaves his family dead and his sister transformed, Tanjiro Kamado joins the Demon Slayer Corps to hunt the monster who ruined his life and protect what remains of his humanity.',
  'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
  'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
  'https://www.w3schools.com/html/movie.mp4',
  9.5,
  'TV-14',
  2024,
  'Winter 2024',
  'ongoing',
  'Series',
  'ufotable',
  array['Action', 'Adventure', 'Fantasy'],
  array['4k', 'hd', 'battle'],
  316840
),
(
  '33333333-3333-4333-8333-333333333333',
  'cyberpunk-edgerunners',
  'Cyberpunk: Edgerunners',
  'Cyberpunk: Edgerunners',
  'Night City-ში, ახალგაზრდა, რომელსაც სასოწარკვეთილი ბრძოლა უწევს, აღმოაჩენს, რომ სიცოცხლე, თავისუფლება და იდენტობა ვერ იარსებებს დაუცველი, როდესაც კიბერკორექტირებული ძალები წვრთნის მის გზას.',
  'In Night City, a young mercenary chases survival and identity as he is drawn into a deadly spiral of ambition, betrayal, and cybernetic power.',
  'https://cdn.myanimelist.net/images/anime/1818/126436l.jpg',
  'https://cdn.myanimelist.net/images/anime/1818/126436l.jpg',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  9.7,
  'TV-MA',
  2022,
  'Fall 2022',
  'completed',
  'OVA',
  'Trigger',
  array['Sci-Fi', 'Action', 'Cyberpunk'],
  array['cyberpunk', 'neon', 'high energy'],
  421950
),
(
  '44444444-4444-4444-8444-444444444444',
  'attack-on-titan',
  'Attack on Titan',
  'Attack on Titan',
  'საზოგადოება ციხეებზე ცხოვრობს, რათა titans-ებისგან დაიცვას თავი. როდესაც Eren Yeager აღმოაჩენს ჭეშმარიტებას, მან გააგრძელებს ბრძოლას ცხოვრების და თავისუფლებისთვის, რომელიც mmap duniani იწურება.',
  'In a world where humanity lives behind walls to survive titanic monsters, Eren Yeager rises to challenge the truth behind the walls and the cost of freedom itself.',
  'https://cdn.myanimelist.net/images/anime/10/47330l.jpg',
  'https://cdn.myanimelist.net/images/anime/10/47330l.jpg',
  'https://www.w3schools.com/html/movie.mp4',
  9.8,
  'TV-MA',
  2013,
  'Spring 2013',
  'completed',
  'Series',
  'Wit Studio',
  array['Action', 'Drama', 'Dark Fantasy'],
  array['epic', 'classic', 'storytelling'],
  589320
);

insert into public.episodes (
  id,
  anime_id,
  episode_number,
  title_ka,
  title_en,
  video_url_ka,
  video_url_en,
  thumbnail_url,
  duration_seconds,
  intro_start,
  intro_end
) values
(
  'a1111111-1111-4111-8111-111111111111',
  '11111111-1111-4111-8111-111111111111',
  1,
  'სიხარული არ არის',
  'The Blood War Begins',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://cdn.myanimelist.net/images/anime/1908/135462l.jpg',
  1440,
  45,
  110
),
(
  'a1111111-1111-4111-8111-111111111112',
  '11111111-1111-4111-8111-111111111111',
  2,
  'სიჩმუელი',
  'The Quincy Return',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://cdn.myanimelist.net/images/anime/1908/135462l.jpg',
  1440,
  52,
  118
),
(
  'b2222222-2222-4222-8222-222222222222',
  '22222222-2222-4222-8222-222222222222',
  1,
  'The Demon Within',
  'The Demon Within',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
  1440,
  48,
  115
),
(
  'c3333333-3333-4333-8333-333333333333',
  '33333333-3333-4333-8333-333333333333',
  1,
  'Night City Awakens',
  'Night City Awakens',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://cdn.myanimelist.net/images/anime/1818/126436l.jpg',
  1440,
  40,
  102
),
(
  'd4444444-4444-4444-8444-444444444444',
  '44444444-4444-4444-8444-444444444444',
  1,
  'The Wall',
  'The Wall',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://cdn.myanimelist.net/images/anime/10/47330l.jpg',
  1440,
  44,
  108
);

insert into public.episodes (
  id,
  anime_id,
  episode_number,
  title_ka,
  title_en,
  video_url_ka,
  video_url_en,
  thumbnail_url,
  duration
) values
(
  'a1111111-1111-4111-8111-111111111111',
  '11111111-1111-4111-8111-111111111111',
  1,
  'საწყისი გამბაში',
  'First Awakening',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  1440
),
(
  'a1111111-1111-4111-8111-111111111112',
  '11111111-1111-4111-8111-111111111111',
  2,
  'ჩრდილების გრძელი',
  'The Long of Shadows',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  1440
),
(
  'b2222222-2222-4222-8222-222222222222',
  '22222222-2222-4222-8222-222222222222',
  1,
  'ნეონის მეხსიერება',
  'Memory of Neon',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  1430
),
(
  'b2222222-2222-4222-8222-222222222223',
  '22222222-2222-4222-8222-222222222222',
  2,
  'მოწყვეტილი მონაცემები',
  'Fractured Data',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  1440
),
(
  'c3333333-3333-4333-8333-333333333333',
  '33333333-3333-4333-8333-333333333333',
  1,
  'მთვარის ქვესკნელის სახელი',
  'The Name Beneath Moonlight',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
  1440
),
(
  'c3333333-3333-4333-8333-333333333334',
  '33333333-3333-4333-8333-333333333333',
  2,
  'იძულებული ნიმუში',
  'The Pattern of Obedience',
  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
  1440
);

insert into public.bookmarks (id, user_id, anime_id)
values (
  'd1111111-1111-4111-8111-111111111111',
  '00000000-0000-0000-0000-000000000000',
  '11111111-1111-4111-8111-111111111111'
);

insert into public.comments (id, user_id, episode_id, content)
values (
  'e1111111-1111-4111-8111-111111111111',
  '00000000-0000-0000-0000-000000000000',
  'a1111111-1111-4111-8111-111111111111',
  'The opening sequence is absolutely cinematic and the dub feels premium.'
);

-- A helper view for display without direct table access in the app layer
create or replace view public.anime_detail as
select a.*,
  jsonb_build_object(
    'episodes', coalesce(jsonb_agg(e order by e.episode_number) filter (where e.id is not null), '[]'::jsonb)
  ) as metadata
from public.animes a
left join public.episodes e on e.anime_id = a.id
group by a.id;

-- Ensure public tables are readable but protected from anonymous writes.
-- RLS is enabled above; only authenticated sessions with matching user_id may mutate user-owned tables.
