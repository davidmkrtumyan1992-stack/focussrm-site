import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { HeroVideoLayer } from "./scenes/HeroVideoLayer";
import { HeroLiveStrip } from "./scenes/HeroLiveStrip";
import { MARKETPLACES } from "@/lib/marketplaces";

const stats = [
  { value: "3", label: "площадки из коробки" },
  { value: "∞", label: "магазинов и юрлиц" },
  { value: "1", label: "каталог без дублей" },
  { value: "0", label: "ручных Excel-сверок" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(40px,7vw,110px)] pb-[clamp(52px,7vw,90px)]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-320px] h-[800px] w-[1200px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(46,125,107,.55) 0%, rgba(20,58,50,.35) 38%, rgba(7,10,9,0) 70%)",
          animation: "fsGlow 9s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(127,209,188,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(127,209,188,.055) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, #000, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, #000, transparent)",
        }}
      />

      <Container className="relative">
        <Reveal
          className="relative overflow-hidden rounded-[44px] border"
          delay={0}
        >
          <div
            className="relative overflow-hidden rounded-[44px] border"
            style={{
              borderColor: "rgba(127,209,188,.18)",
              background: "linear-gradient(155deg, rgba(46,125,107,.4), rgba(9,14,12,.95) 58%)",
              boxShadow: "0 50px 140px rgba(0,0,0,.55)",
            }}
          >
            <HeroVideoLayer
              src="/product/hero-demo-artifact"
              mobileSrc="/product/hero-demo-artifact-mobile"
              poster="/product/hero-demo-artifact-poster.jpg"
              alt="Focussrm: демонстрация интерфейса"
            />

            <div className="relative z-[1] flex flex-col items-start lg:flex-row">
              <div
                className="relative z-[3] rounded-[44px] p-6 sm:p-8 lg:p-[42px]"
                style={{ background: "rgba(7,10,9,.5)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
              >
                <div
                  className="mb-7 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[13px]"
                  style={{ borderColor: "rgba(127,209,188,.25)", background: "rgba(127,209,188,.07)", color: "#CFE8E0" }}
                >
                  <span className="flex items-center gap-1">
                    {MARKETPLACES.map((m) => (
                      <Image key={m.key} src={m.icon} alt={m.name} width={22} height={22} className="block rounded-[7px]" />
                    ))}
                  </span>
                  в одном окне
                </div>

                <h1 className="m-0 text-[32px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[46px] lg:text-[64px]">
                  Один честный остаток
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(100deg, #CFE8E0, #7FD1BC 55%, #2E7D6B)" }}
                  >
                    вместо пяти кабинетов
                  </span>
                </h1>
                <p className="mt-6 max-w-[620px] text-[16px] leading-[1.55] sm:text-[19px]" style={{ color: "#9BB2AC" }}>
                  Focussrm: облачная CRM для продавцов, которые работают сразу на нескольких
                  маркетплейсах. Товары, остатки, заказы и реальная прибыль в одном интерфейсе,
                  без Excel и ручной сверки.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#price"
                    className="rounded-full px-7 py-4 text-[15px] font-bold sm:text-[16px]"
                    style={{
                      background: "linear-gradient(135deg, #8FE0CA, #3E9A85)",
                      color: "#06100D",
                      boxShadow: "0 14px 44px rgba(127,209,188,.28)",
                    }}
                  >
                    Подключить маркетплейсы
                  </a>
                  <a
                    href="#video"
                    className="rounded-full border px-6 py-4 text-[15px] font-semibold sm:text-[16px]"
                    style={{ borderColor: "rgba(207,232,224,.22)", color: "#CFE8E0" }}
                  >
                    Посмотреть демо ▸
                  </a>
                </div>
              </div>

              <div className="relative z-[3] flex w-full items-center gap-3 bg-[rgba(7,10,9,.88)] px-6 pt-6 lg:w-auto lg:bg-transparent lg:ml-auto lg:px-8 lg:pt-[30px]">
                <span
                  className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[14px] border"
                  style={{
                    background: "linear-gradient(140deg, rgba(127,209,188,.28), rgba(46,125,107,.12))",
                    borderColor: "rgba(127,209,188,.45)",
                  }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, display: "block" }} aria-hidden>
                    <path
                      d="M12.6 2.4H19a2.6 2.6 0 0 1 2.6 2.6v6.4a2 2 0 0 1-.6 1.4l-8 8a2 2 0 0 1-2.8 0l-6.2-6.2a2 2 0 0 1 0-2.8l8-8a2 2 0 0 1 1.4-.6Z"
                      fill="none"
                      stroke="#7FD1BC"
                      strokeWidth={1.6}
                      strokeLinejoin="round"
                    />
                    <circle cx={17} cy={7} r={1.7} fill="#7FD1BC" />
                    <path d="M8.6 15.4 15.4 8.6" fill="none" stroke="#7FD1BC" strokeWidth={1.6} strokeLinecap="round" />
                  </svg>
                  <span
                    className="absolute -inset-[5px] rounded-[19px] border"
                    style={{ borderColor: "rgba(127,209,188,.3)", animation: "fsRing 3s ease-out infinite" }}
                  />
                </span>
                <span className="whitespace-nowrap text-[13px] leading-[1.4]" style={{ color: "#A8C1BB" }}>
                  Неделя бесплатно
                  <br />
                  без привязки карты
                </span>
              </div>
            </div>

            <div className="relative z-[1] bg-[rgba(7,10,9,.88)] lg:bg-transparent">
              <HeroLiveStrip />
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-accent/[0.14] bg-accent/[0.14] sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-6 py-6 text-left">
              <div className="text-[28px] font-bold tracking-[-0.03em] sm:text-[34px]" style={{ color: "#CFE8E0" }}>
                {stat.value}
              </div>
              <div className="mt-1.5 text-[13px]" style={{ color: "#7E948E" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
