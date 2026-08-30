"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function HeroVideoLayer({
  src,
  mobileSrc,
  poster,
  alt,
}: {
  src: string;
  mobileSrc?: string;
  poster: string;
  alt: string;
}) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduce) return;
    videoRef.current?.play().catch(() => {});
  }, [reduce]);

  return (
    <>
      <div className="absolute inset-0">
        {reduce ? (
          <Image src={poster} alt={alt} fill priority className="object-cover" style={{ objectPosition: "72% 50%" }} />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={poster}
            aria-label={alt}
            className="h-full w-full object-cover"
            style={{ objectPosition: "72% 50%", transform: "translateZ(0)" }}
          >
            {mobileSrc && (
              <>
                <source src={`${mobileSrc}.webm`} type="video/webm" media="(max-width: 760px)" />
                <source src={`${mobileSrc}.mp4`} type="video/mp4" media="(max-width: 760px)" />
              </>
            )}
            <source src={`${src}.webm`} type="video/webm" />
            <source src={`${src}.mp4`} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0" style={{ background: "rgba(160,205,195,.16)", mixBlendMode: "screen" }} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(100deg, rgba(7,10,9,.5) 0%, rgba(7,10,9,.25) 52%, rgba(7,10,9,0) 74%)" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%]"
        style={{ background: "linear-gradient(to top, rgba(7,10,9,.88) 0%, rgba(7,10,9,.5) 40%, rgba(7,10,9,0) 100%)" }}
      />
    </>
  );
}
