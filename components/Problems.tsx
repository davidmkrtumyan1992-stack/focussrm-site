import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const problems = [
  {
    n: "01",
    title: "Задвоение карточек",
    text: "Один товар заведён дважды на разных площадках и живёт в учёте как две независимые карточки.",
  },
  {
    n: "02",
    title: "Расхождение остатков",
    text: "На одной площадке товар «есть», на другой уже продан, а на складе физически другое количество.",
  },
  {
    n: "03",
    title: "Путаница в заказах",
    text: "Чтобы понять, что продалось, приходится по очереди заходить в кабинеты Ozon, WB и Яндекс Маркета.",
  },
  {
    n: "04",
    title: "Прибыль вслепую",
    text: "Выручка видна, а реальная прибыль с учётом закупки, логистики и комиссии остаётся неизвестной.",
  },
];

export function Problems() {
  return (
    <section id="problem" className="scroll-mt-[90px] pb-[clamp(62px,9vw,110px)]">
      <Container>
        <div className="flex flex-wrap items-end gap-6 sm:gap-8">
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
              Знакомо?
            </p>
            <h2 className="mt-3 max-w-[16ch] text-3xl font-semibold tracking-tight text-balance sm:text-[2.75rem] sm:leading-[1.1]">
              Два магазина, и начинается хаос
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="max-w-[38ch] text-[15px] leading-relaxed text-muted">
            Продавец с 2+ кабинетами почти неизбежно сталкивается с одним и тем же набором
            проблем.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-7 transition-colors hover:border-accent/40">
                <p className="text-[12px] font-bold tracking-[0.1em] text-muted-dim">{p.n}</p>
                <p className="mt-4 text-[19px] font-semibold tracking-tight text-foreground">
                  {p.title}
                </p>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
