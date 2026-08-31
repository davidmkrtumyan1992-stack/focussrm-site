"use client";

import { useEffect, useState } from "react";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const videos = [
  {
    label: "Единый остаток",
    title: "Один остаток на все площадки",
    text: "Приёмка, списание, инвентаризация: автоматическое уменьшение при заказе с любого маркетплейса.",
    src: "/product/video-demo-stock.mp4",
    poster: "/product/video-demo-stock-poster.jpg",
  },
  {
    label: "Дедупликация",
    title: "Объединение карточек-дублей",
    text: "Алгоритм находит дубли по штрихкоду и похожести названия, объединяет их и сохраняет всю историю.",
    src: "/product/video-demo-dedup.mp4",
    poster: "/product/video-demo-dedup-poster.jpg",
  },
  {
    label: "Сопоставление",
    title: "Привязка к листингам площадок",
    text: "По артикулу или штрихкоду. Спорные случаи система показывает вам, а не решает наугад.",
    src: "/product/video-demo-match.mp4",
    poster: "/product/video-demo-match-poster.jpg",
  },
  {
    label: "Отчёты и прибыль",
    title: "Маржа, а не выручка",
    text: "Закупка, логистика и комиссия площадки уже учтены: на экране чистая прибыль по каждому товару и периоду.",
    src: "/product/video-demo-reports.mp4",
    poster: "/product/video-demo-reports-poster.jpg",
  },
];

export function VideoDemo() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const video = videos[active];

  useEffect(() => {
    setPlaying(false);
  }, [active]);

  return (
    <section id="video" className="scroll-mt-[90px] pb-[clamp(62px,9vw,110px)]">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
            Видео-демо
          </p>
          <h2 className="mt-3 max-w-[24ch] text-3xl font-semibold tracking-tight text-balance sm:text-[2.75rem] sm:leading-[1.1]">
            Посмотрите, как это работает
          </h2>
          <p className="mt-4 max-w-[56ch] text-[15.5px] leading-relaxed text-muted">
            Короткие ролики по ключевым сценариям: от подключения магазина до отчёта по марже.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
          {videos.map((v, i) => (
            <button
              key={v.label}
              type="button"
              onClick={() => setActive(i)}
              className={`w-full rounded-full border px-5 py-2.5 text-center text-[14px] font-medium transition-colors sm:w-auto ${
                i === active
                  ? "border-accent/55 bg-accent/15 text-foreground"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {v.label}
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.12}>
          <div
            className="relative mt-6 overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_40px_120px_-40px_rgba(127,209,188,0.25)]"
            style={{ aspectRatio: "1856 / 1084" }}
          >
            {playing ? (
              <video
                key={video.src}
                src={video.src}
                poster={video.poster}
                controls
                autoPlay
                playsInline
                onEnded={() => setPlaying(false)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Смотреть видео: ${video.title}`}
                className="group absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center px-8 py-10 text-center"
                style={{ backgroundImage: `url(${video.poster})` }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 120%, rgba(7,10,9,.55), rgba(7,10,9,.85) 70%)",
                  }}
                />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm transition-transform group-hover:scale-105">
                  <Play size={24} weight="fill" className="ml-0.5 text-accent" />
                </span>
                <p className="relative mt-6 text-[22px] font-semibold tracking-tight text-foreground sm:text-[26px]">
                  {video.title}
                </p>
                <p className="relative mx-auto mt-2.5 max-w-[46ch] text-[14.5px] leading-relaxed text-muted">
                  {video.text}
                </p>
              </button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
