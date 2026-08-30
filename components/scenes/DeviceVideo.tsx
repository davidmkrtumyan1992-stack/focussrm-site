"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function DeviceVideo({
  src,
  poster,
  alt,
  priority = false,
  maxHeightClass = "max-h-[64dvh]",
  width = 1600,
  height = 884,
}: {
  src: string;
  poster: string;
  alt: string;
  priority?: boolean;
  maxHeightClass?: string;
  width?: number;
  height?: number;
}) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduce) return;
    // The declarative `autoPlay` attribute isn't always honored (e.g. after a
    // client-side mount), so kick playback explicitly as a backup.
    videoRef.current?.play().catch(() => {});
  }, [reduce]);

  return (
    <div className="mx-auto inline-block overflow-hidden rounded-2xl border border-border bg-surface align-top shadow-[0_40px_120px_-40px_rgba(53,215,174,0.25)]">
      {reduce ? (
        <Image
          src={poster}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`block h-auto w-auto ${maxHeightClass} max-w-full`}
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          width={width}
          height={height}
          aria-label={alt}
          className={`block h-auto w-auto ${maxHeightClass} max-w-full`}
        >
          <source src={`${src}.webm`} type="video/webm" />
          <source src={`${src}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
