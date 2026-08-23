'use client';

import { useEffect, useRef, useState } from 'react';
import { Languages, Maximize2, Play, SkipForward, Volume2 } from 'lucide-react';

export function VideoPlayer({
  episode,
  locale = 'en'
}: {
  episode: {
    title_en: string;
    title_ka: string;
    video_url_ka: string;
    video_url_en: string;
    thumbnail_url?: string | null;
    duration?: number;
    episode_number?: number;
    intro_start?: number;
    intro_end?: number;
  };
  locale?: 'en' | 'ka';
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [audioLang, setAudioLang] = useState<'ka' | 'en'>('ka');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [quality, setQuality] = useState('1080p');
  const [speed, setSpeed] = useState(1);

  const currentVideoUrl = audioLang === 'ka' ? episode.video_url_ka : episode.video_url_en;
  const title = locale === 'ka' ? (audioLang === 'ka' ? episode.title_ka : episode.title_en) : episode.title_en;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const nextProgress = video.duration ? (video.currentTime / video.duration) * 100 : 0;
      setProgress(nextProgress);

      if (episode.intro_start && episode.intro_end) {
        const inIntro = video.currentTime >= episode.intro_start && video.currentTime <= episode.intro_end;
        if (inIntro) {
          video.currentTime = episode.intro_end;
        }
      }
    };

    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [episode.intro_end, episode.intro_start]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const currentTime = video.currentTime || 0;
    video.src = currentVideoUrl;
    video.load();
    video.currentTime = currentTime;
    if (isPlaying) {
      video.play();
    }
  }, [currentVideoUrl]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    const next = audioLang === 'ka' ? 'en' : 'ka';
    const video = videoRef.current;
    if (video) {
      const currentTime = video.currentTime;
      setAudioLang(next);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = currentTime;
        }
      }, 20);
    } else {
      setAudioLang(next);
    }
  };

  const skipIntro = () => {
    const video = videoRef.current;
    if (!video || !episode.intro_end) return;
    video.currentTime = episode.intro_end;
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111118] shadow-[0_30px_80px_rgba(14,165,233,0.2)]">
      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={currentVideoUrl}
          poster={episode.thumbnail_url ?? undefined}
          controls={false}
          muted={false}
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

        <div className="absolute left-5 top-5 flex items-center gap-3">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan-200">
            {locale === 'ka' ? 'ცოცხლად' : 'LIVE'}
          </span>
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-100">
            EP {episode.episode_number ?? 1}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-4 flex items-center justify-between text-sm text-slate-200">
            <span>{title}</span>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-black/25 px-2 py-1 text-[10px] uppercase tracking-[0.2em]">
                {audioLang === 'ka' ? 'GEO' : 'ENG'}
              </span>
            </div>
          </div>

          <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button onClick={togglePlay} className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              {isPlaying ? 'Pause' : 'Play'}
            </button>

            <button onClick={toggleAudio} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-200">
              <Languages size={14} />
              {audioLang === 'ka' ? 'GEO' : 'ENG'}
            </button>

            <button onClick={skipIntro} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-200">
              <SkipForward size={14} />
              {locale === 'ka' ? 'イントロ გამოტოვება' : 'Skip Intro'}
            </button>

            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-100 outline-none"
            >
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
            </select>

            <select
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-100 outline-none"
            >
              <option value={0.5}>0.5x</option>
              <option value={1}>1x</option>
              <option value={1.25}>1.25x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select>

            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-200">
              <Volume2 size={14} />
              {locale === 'ka' ? 'ხმა' : 'Audio'}
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-200">
              <Maximize2 size={14} />
              {locale === 'ka' ? 'სრული ეკრანი' : 'Fullscreen'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
