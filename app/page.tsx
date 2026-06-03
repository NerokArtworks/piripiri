"use client";

import { useRef } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current?.currentTime) {
      audioRef.current.currentTime = 0;
    }
    audioRef.current?.play();
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white">
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-black tracking-tight">
            Piripiri
          </h1>

          <p className="mt-3 text-zinc-400">
            Pulsa el piripiri.
          </p>
        </div>

        <button
          onClick={handleClick}
          className="group"
          aria-label="Piripiri"
        >
          <img
            src="/piripiri.png"
            alt="Piripiri"
            className="
              w-72
              animate-bounce
              transition-all
              duration-200
              group-active:scale-90
              md:w-96
            "
          />
        </button>

        <p className="mt-8 text-sm text-zinc-500">
          👆 Tócalo
        </p>

        <audio ref={audioRef} src="/piripiri.mp3" />
      </div>
    </main>
  );
}