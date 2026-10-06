import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface AudioTrack {
  title: string;
  src: string;
}

type PlayerVariant = "dark" | "light";

const THEMES: Record<
  PlayerVariant,
  {
    card: string;
    heading: string;
    sub: string;
    accent: string;
    playBtn: string;
    control: string;
    range: string;
    track: string;
    trackActive: string;
    trackTitle: string;
    badgeActive: string;
    badgeIdle: string;
    divider: string;
  }
> = {
  dark: {
    card: "bg-forest-900/90 border-neon-500/20 backdrop-blur-sm",
    heading: "text-cream",
    sub: "text-cream/60",
    accent: "text-neon-400",
    playBtn:
      "bg-gradient-to-r from-neon-400 to-neon-500 text-forest-950 shadow-lg shadow-neon-500/30 hover:from-neon-500 hover:to-neon-600 hover:scale-105",
    control: "text-cream/70 hover:text-neon-400",
    range: "accent-neon-400",
    track:
      "bg-forest-800/50 hover:bg-forest-800 border-transparent hover:border-neon-500/30",
    trackActive: "bg-forest-800 border-neon-500/50",
    trackTitle: "text-cream",
    badgeActive: "bg-neon-400 text-forest-950",
    badgeIdle: "bg-forest-700/60 text-cream/70",
    divider: "border-neon-500/15",
  },
  light: {
    card: "bg-card border-border shadow-sm",
    heading: "text-foreground",
    sub: "text-muted-foreground",
    accent: "text-success",
    playBtn:
      "bg-success text-success-foreground shadow-sm hover:scale-105 transition-transform",
    control: "text-muted-foreground hover:text-success",
    range: "accent-success",
    track:
      "bg-sage/30 hover:bg-sage/50 border-transparent hover:border-success/30",
    trackActive: "bg-sage/50 border-success/40",
    trackTitle: "text-foreground",
    badgeActive: "bg-success text-success-foreground",
    badgeIdle: "bg-muted text-muted-foreground",
    divider: "border-border",
  },
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudiobookPlayer({
  tracks,
  variant = "dark",
  className,
}: {
  tracks: AudioTrack[];
  variant?: PlayerVariant;
  className?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const t = THEMES[variant];

  // Carrega a faixa selecionada; continua tocando ao trocar de faixa.
  useEffect(() => {
    const audio = audioRef.current;
    const src = tracks[current]?.src;
    if (!audio || !src) return;
    audio.src = src;
    audio.load();
    setCurrentTime(0);
    setDuration(0);
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
  }, [volume, muted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const selectTrack = (i: number) => {
    if (i === current) {
      togglePlay();
      return;
    }
    setIsPlaying(true);
    setCurrent(i);
  };

  const step = (dir: 1 | -1) => {
    const next = (current + dir + tracks.length) % tracks.length;
    setIsPlaying(true);
    setCurrent(next);
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = Number(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const handleEnded = () => {
    if (current < tracks.length - 1) {
      setIsPlaying(true);
      setCurrent(current + 1);
    } else {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  return (
    <div className={cn("w-full rounded-3xl border p-5 sm:p-6", t.card, className)}>
      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={handleEnded}
      />

      {/* Player principal */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            className={cn(
              "flex h-16 w-16 shrink-0 items-center justify-center rounded-full transition-all duration-300",
              t.playBtn,
            )}
          >
            {isPlaying ? (
              <Pause className="h-7 w-7 fill-current" />
            ) : (
              <Play className="h-7 w-7 translate-x-0.5 fill-current" />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <p className={cn("truncate text-base font-semibold", t.heading)}>
              {tracks[current]?.title ?? ""}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <span
                className={cn(
                  "w-10 shrink-0 text-right text-xs tabular-nums",
                  t.sub,
                )}
              >
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={Math.min(currentTime, duration || 0)}
                onChange={handleSeek}
                aria-label="Barra de progresso"
                className={cn("h-1.5 w-full cursor-pointer", t.range)}
              />
              <span className={cn("w-10 shrink-0 text-xs tabular-nums", t.sub)}>
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        {/* Controles: faixas + volume */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            {tracks.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Faixa anterior"
                  className={cn(
                    "rounded-full p-2 transition-colors",
                    t.control,
                  )}
                >
                  <SkipBack className="h-5 w-5 fill-current" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Próxima faixa"
                  className={cn(
                    "rounded-full p-2 transition-colors",
                    t.control,
                  )}
                >
                  <SkipForward className="h-5 w-5 fill-current" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Ativar som" : "Silenciar"}
              className={cn("rounded-full p-2 transition-colors", t.control)}
            >
              {muted || volume === 0 ? (
                <VolumeX className="h-5 w-5" />
              ) : volume < 0.5 ? (
                <Volume1 className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={muted ? 0 : volume}
              onChange={(e) => {
                setVolume(Number(e.target.value));
                setMuted(false);
              }}
              aria-label="Controle de volume"
              className={cn("h-1.5 w-20 cursor-pointer sm:w-28", t.range)}
            />
          </div>
        </div>
      </div>

      {/* Playlist */}
      {tracks.length > 1 && (
        <div className={cn("mt-5 border-t pt-4", t.divider)}>
          <p className={cn("mb-3 text-xs font-semibold uppercase tracking-wider", t.sub)}>
            Faixas do audiolivro
          </p>
          <ol className="scrollbar-hide max-h-80 space-y-2 overflow-y-auto pr-1">
            {tracks.map((track, i) => (
              <li key={track.src}>
                <button
                  type="button"
                  onClick={() => selectTrack(i)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200",
                    i === current ? t.trackActive : t.track,
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      i === current ? t.badgeActive : t.badgeIdle,
                    )}
                  >
                    {i === current && isPlaying ? (
                      <Pause className="h-3.5 w-3.5 fill-current" />
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span
                    className={cn(
                      "min-w-0 flex-1 truncate text-sm font-medium sm:text-base",
                      i === current ? t.accent : t.trackTitle,
                    )}
                  >
                    {track.title}
                  </span>
                  {i === current && isPlaying && (
                    <span className="flex items-end gap-0.5" aria-hidden="true">
                      <span className={cn("w-0.5 animate-pulse rounded-full bg-current", t.accent, "h-2")} />
                      <span className={cn("h-3 w-0.5 animate-pulse rounded-full bg-current [animation-delay:0.2s]", t.accent)} />
                      <span className={cn("h-1.5 w-0.5 animate-pulse rounded-full bg-current [animation-delay:0.4s]", t.accent)} />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
