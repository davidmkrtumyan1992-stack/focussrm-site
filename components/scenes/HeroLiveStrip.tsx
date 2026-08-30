"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ConveyorBelt } from "./ConveyorBelt";
import { MARKETPLACES } from "@/lib/marketplaces";

const skus = [
  { name: "Сыворотка 30 мл", art: "AU-30", base: 128, initial: "С" },
  { name: "Коврик для йоги", art: "YM-01", base: 64, initial: "К" },
  { name: "Лампа LED", art: "LD-22", base: 41, initial: "Л" },
];

export function HeroLiveStrip() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (document.hidden) return;
      setTick((t) => t + 1);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const active = tick % 3;

  return (
    <div className="grid grid-cols-1 items-center gap-3 rounded-[22px] px-4 py-6 sm:px-6 lg:grid-cols-[minmax(178px,210px)_minmax(325px,1fr)_minmax(240px,280px)] lg:gap-3 lg:px-11 lg:py-11">
      <div className="flex flex-col gap-3">
        {MARKETPLACES.map((m, idx) => {
          const isActive = idx === active;
          return (
            <div
              key={m.key}
              className="relative flex items-center gap-3 rounded-2xl border p-3.5 transition-all duration-500"
              style={{
                background: isActive ? "rgba(127,209,188,.13)" : "rgba(7,10,9,.55)",
                borderColor: isActive ? "rgba(127,209,188,.5)" : "rgba(207,232,224,.12)",
              }}
            >
              <span className="relative shrink-0">
                <Image src={m.icon} alt={m.name} width={30} height={30} className="block rounded-[9px] bg-surface" />
                <span
                  className="absolute -inset-[5px] rounded-xl border"
                  style={{ borderColor: m.color, animation: `fsRing ${2 + idx * 0.4}s ease-out infinite` }}
                />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-foreground">{m.name}</span>
                <span className="text-[11.5px]" style={{ color: isActive ? "#7FD1BC" : "#6F8781" }}>
                  {isActive ? "новый заказ" : "синхронизировано"}
                </span>
              </span>
            </div>
          );
        })}
      </div>

      <div className="hidden items-center gap-3 lg:flex">
        <svg viewBox="0 0 200 190" preserveAspectRatio="none" className="h-[190px] min-w-[20px] flex-1">
          <path d="M0 26 C 90 26 80 95 200 95" fill="none" stroke="rgba(127,209,188,.45)" strokeWidth={1.4} strokeDasharray="5 11" style={{ animation: "fsDash 2.4s linear infinite" }} />
          <path d="M0 95 L 200 95" fill="none" stroke="rgba(127,209,188,.45)" strokeWidth={1.4} strokeDasharray="5 11" style={{ animation: "fsDash 2s linear infinite" }} />
          <path d="M0 164 C 90 164 80 95 200 95" fill="none" stroke="rgba(127,209,188,.45)" strokeWidth={1.4} strokeDasharray="5 11" style={{ animation: "fsDash 2.8s linear infinite" }} />
        </svg>

        <div className="flex w-[240px] shrink-0 flex-col items-center gap-1.5 rounded-2xl border border-accent/[0.18] bg-background/55 px-2 pt-2 pb-1.5">
          <ConveyorBelt />
          <span className="text-[9px] font-bold tracking-[2.5px] text-accent">F O C U S S R M</span>
        </div>

        <svg viewBox="0 0 200 190" preserveAspectRatio="none" className="h-[190px] min-w-[20px] flex-1">
          <path d="M0 95 L 200 95" fill="none" stroke="rgba(127,209,188,.45)" strokeWidth={1.4} strokeDasharray="5 11" style={{ animation: "fsDash 2s linear infinite" }} />
          <path d="M0 95 C 90 95 80 34 200 34" fill="none" stroke="rgba(127,209,188,.3)" strokeWidth={1.4} strokeDasharray="5 11" style={{ animation: "fsDash 2.6s linear infinite" }} />
          <path d="M0 95 C 90 95 80 156 200 156" fill="none" stroke="rgba(127,209,188,.3)" strokeWidth={1.4} strokeDasharray="5 11" style={{ animation: "fsDash 3s linear infinite" }} />
        </svg>
      </div>

      <div className="overflow-hidden rounded-[22px] border border-accent/20 bg-background/72 backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-foreground/[0.08] px-4.5 py-3.5">
          <span className="text-[13px] font-semibold text-foreground">Товары</span>
          <span className="text-[11px] text-accent">остаток</span>
        </div>
        <div className="flex flex-col">
          {skus.map((s, idx) => {
            const isActive = idx === active;
            const qty = s.base - (Math.floor((tick + (2 - idx)) / 3) % 12);
            return (
              <div
                key={s.art}
                className="flex items-center gap-3 border-b border-foreground/5 px-4.5 py-3.5 transition-colors duration-500"
                style={{ background: isActive ? "rgba(127,209,188,.08)" : "transparent" }}
              >
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] border border-accent/[0.18] bg-gradient-to-br from-accent/[0.26] to-[#2E7D6B]/10 text-[14px] font-semibold text-accent/90">
                  {s.initial}
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate text-[12px] text-foreground">{s.name}</span>
                  <span className="text-[11px] text-muted-dim">{s.art}</span>
                </span>
                <span
                  className="ml-auto text-[16px] font-bold transition-colors duration-400"
                  style={{ color: isActive ? "#7FD1BC" : "#CFE8E0" }}
                >
                  {qty}
                </span>
              </div>
            );
          })}
        </div>
        <div
          className="flex items-center gap-1.5 whitespace-nowrap px-3.5 py-3 text-[11px] text-[#A8C1BB]"
          style={{ animation: "fsFade 2.2s ease-in-out infinite" }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          Заказ с
          <Image src={MARKETPLACES[active].icon} alt={MARKETPLACES[active].name} width={15} height={15} className="inline-block shrink-0 rounded-[5px]" />
          {MARKETPLACES[active].name}: остаток уменьшен
        </div>
      </div>
    </div>
  );
}
