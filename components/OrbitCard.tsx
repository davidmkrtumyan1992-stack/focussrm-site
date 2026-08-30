import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const orbitDefs = [
  { name: "Ozon", logo: "/product/ozon-icon.png", ring: "rgba(0,91,255,.6)", deg: -32 },
  { name: "Wildberries", logo: "/product/wb-icon.png", ring: "rgba(166,43,160,.6)", deg: 22 },
  { name: "Яндекс Маркет", logo: "/product/ym-icon.png", ring: "rgba(255,204,0,.6)", deg: 78 },
];

export function OrbitCard() {
  return (
    <section className="pb-[clamp(62px,9vw,110px)]">
      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[44px] border"
            style={{
              borderColor: "rgba(127,209,188,.15)",
              background: "linear-gradient(140deg, rgba(46,125,107,.3), rgba(9,14,12,.96) 62%)",
            }}
          >
          <div
            className="relative z-[3] flex max-w-[560px] flex-col p-6 pb-5 sm:p-9 sm:pb-8 lg:p-[44px] lg:pb-10"
            style={{ background: "#070A09", borderTopLeftRadius: 44, borderBottomRightRadius: 52 }}
          >
            <div className="mb-3.5 text-[13px] tracking-[0.14em] uppercase text-accent">Одна карточка</div>
            <h2 className="m-0 text-[27px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[36px] lg:text-[42px]">
              Товар живёт в одном месте, продаётся везде
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.6]" style={{ color: "#9BB2AC" }}>
              Заводите карточку один раз: Focussrm связывает её с листингами на всех подключённых
              площадках. Цена, фото, штрихкод и остаток остаются едиными, а не расползаются по
              кабинетам.
            </p>
          </div>

          <div
            data-r="orbit"
            className="relative flex min-h-[420px] items-center justify-center py-8 sm:min-h-[520px] lg:min-h-[600px]"
          >
            <div
              className="absolute h-[380px] w-[380px] rounded-full sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px]"
              style={{ border: "1px solid rgba(127,209,188,.14)" }}
            />
            <div
              className="absolute h-[280px] w-[280px] rounded-full sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]"
              style={{ border: "1px dashed rgba(127,209,188,.12)" }}
            />

            <div
              className="absolute h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px]"
              style={{ animation: "fsSpin 34s linear infinite" }}
            >
              {orbitDefs.map((o) => (
                <div
                  key={o.name}
                  className="absolute left-1/2 top-1/2 [--orbit-r:190px] sm:[--orbit-r:230px] lg:[--orbit-r:260px]"
                  style={{ transform: `translate(-38px,-38px) rotate(${o.deg}deg) translateY(calc(var(--orbit-r) * -1))` }}
                >
                  <div style={{ animation: "fsSpinBack 34s linear infinite" }}>
                    <div style={{ transform: `rotate(${-o.deg}deg)` }}>
                      <div
                        className="flex h-[64px] w-[64px] items-center justify-center rounded-[22px] sm:h-[76px] sm:w-[76px] sm:rounded-[26px]"
                        style={{
                          background: "rgba(9,14,12,.9)",
                          border: `1px solid ${o.ring}`,
                          boxShadow: "0 12px 40px rgba(0,0,0,.5)",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        <Image src={o.logo} alt={o.name} width={46} height={46} className="block rounded-[13px]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="relative z-[2] w-[220px] rounded-[26px] bg-white px-4 pb-5 pt-4 sm:w-[260px] lg:w-[300px] lg:px-4 lg:pb-5 lg:pt-4"
              style={{ boxShadow: "0 40px 100px rgba(0,0,0,.55)", animation: "fsFloat 7s ease-in-out infinite" }}
            >
              <span
                className="inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.04em] text-white"
                style={{ background: "#00B25D" }}
              >
                NEW
              </span>
              <div className="my-2.5 flex h-[140px] items-center justify-center sm:h-[170px] lg:h-[220px]">
                <Image
                  src="/product/demo-product.png"
                  alt="Сыворотка для лица с гиалуроновой кислотой"
                  width={220}
                  height={220}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                className="mb-2.5 inline-block rounded-lg px-2.5 py-1 text-[11px] font-bold"
                style={{ background: "#FDE7F3", color: "#D4157F" }}
              >
                −28%
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[20px] font-bold tracking-[-0.02em]" style={{ color: "#111816" }}>
                  1 690 ₽
                </span>
                <span className="text-[13px] line-through" style={{ color: "#98A6A2" }}>
                  2 350 ₽
                </span>
              </div>
              <div className="mt-2 text-[12.5px] leading-[1.45]" style={{ color: "#5C6C68" }}>
                Aurelle / Сыворотка для лица с гиалуроновой кислотой / увлажнение / 30 мл
              </div>
              <div className="mt-2.5 flex items-center gap-2">
                <span style={{ color: "#D4157F", fontSize: 13, letterSpacing: 1 }}>★★★★</span>
                <span style={{ color: "#D9E2E0", fontSize: 13, letterSpacing: 1 }}>★</span>
                <span style={{ fontSize: 12, color: "#98A6A2" }}>1 336</span>
              </div>
              <div className="mt-2.5 text-[12.5px]" style={{ color: "#5C6C68" }}>
                Доставка <span className="font-bold" style={{ color: "#111816" }}>послезавтра</span>
              </div>
            </div>
          </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
