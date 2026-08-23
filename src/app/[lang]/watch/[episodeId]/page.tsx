import { VideoPlayer } from '@/components/player/VideoPlayer';

const episode = {
  id: 'ep-1',
  title_ka: 'საწყისი გამბაში',
  title_en: 'First Awakening',
  video_url_ka: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  video_url_en: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  thumbnail_url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  duration: 1440,
  episode_number: 1
};

export default function WatchPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Now streaming</p>
        <h1 className="mt-2 text-4xl font-black text-white">{episode.title_en}</h1>
      </div>
      <VideoPlayer episode={episode} />
    </main>
  );
}
