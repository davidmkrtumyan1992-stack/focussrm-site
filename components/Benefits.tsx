import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const benefits = [
  {
    n: "01",
    title: "Один честный остаток",
    text: "Склад в Focussrm: не витрина площадки, а реальное физическое количество. Площадки показывают то, что накопилось в их кэше; Focussrm считает по факту: приёмка, списание, инвентаризация и автоматическое уменьшение при заказе с любой площадки.",
  },
  {
    n: "02",
    title: "Дедупликация без потери истории",
    text: "Умный алгоритм находит карточки-дубли по штрихкоду и по похожести названия, с защитой от ложных совпадений: разный объём и разный тип товара не путаются друг с другом. Ничего не удаляется молча: каждое объединение фиксируется в истории.",
  },
  {
    n: "03",
    title: "Сопоставление без угадывания",
    text: "Карточка на Ozon, WB или Яндексе связывается с товаром в CRM по артикулу или штрихкоду. Там, где есть неоднозначность, система показывает конфликт и ждёт вашего подтверждения.",
  },
  {
    n: "04",
    title: "Быстрый старт нового магазина",
    text: "Не нужно вручную вбивать сотни товаров: система забирает каталог с площадки и создаёт карточки массово. Следующие магазины того же продавца сопоставляются с уже созданным каталогом, не плодя дубли.",
  },
  {
    n: "05",
    title: "Мультикомпании в одном окне",
    text: "Несколько юрлиц и ИП, множество подключённых кабинетов на разных площадках: всё видно и управляется из одного интерфейса, с разграничением прав доступа между владельцем и администратором.",
  },
];

const fanPaths = [
  "M0 76.6 C 150 76.6 220 491.6 300 500",
  "M0 99 C 150 99 220 500 300 500",
  "M0 121.4 C 150 121.4 220 508.4 300 500",
  "M0 302.6 C 150 302.6 220 491.6 300 500",
  "M0 325 C 150 325 220 500 300 500",
  "M0 347.4 C 150 347.4 220 508.4 300 500",
  "M0 509.6 C 150 509.6 220 491.6 300 500",
  "M0 532 C 150 532 220 500 300 500",
  "M0 554.4 C 150 554.4 220 508.4 300 500",
  "M0 705.6 C 150 705.6 220 491.6 300 500",
  "M0 728 C 150 728 220 500 300 500",
  "M0 750.4 C 150 750.4 220 508.4 300 500",
  "M0 899.6 C 150 899.6 220 491.6 300 500",
  "M0 922 C 150 922 220 500 300 500",
  "M0 944.4 C 150 944.4 220 508.4 300 500",
];

export function Benefits() {
  return (
    <section className="pb-[clamp(62px,9vw,110px)]">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
            Как решаем
          </p>
          <h2 className="mt-3 max-w-[26ch] text-3xl font-semibold tracking-tight text-balance sm:text-[2.75rem] sm:leading-[1.1]">
            Пять вещей, которые Focussrm делает по-другому
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(360px,1fr)_minmax(300px,460px)] lg:items-center">
          <div className="flex flex-col gap-[30px]">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="grid grid-cols-[52px_1fr] items-start gap-[18px]">
                  <p className="text-[30px] font-semibold leading-none tracking-tight text-accent">
                    {b.n}
                  </p>
                  <div className="flex flex-col gap-[7px]">
                    <p className="text-[19px] font-semibold leading-[1.3] tracking-tight text-foreground">
                      {b.title}
                    </p>
                    <p className="max-w-[520px] text-[14.5px] leading-relaxed text-muted">
                      {b.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="relative mt-2 flex h-[110px] items-end justify-center lg:hidden">
            <div
              className="absolute inset-x-6 bottom-[18px] h-[1.2px]"
              style={{ background: "rgba(127,209,188,.7)" }}
            />
            <Image
              src="/product/observer.png"
              alt="Наблюдатель с подзорной трубой"
              width={230}
              height={480}
              className="relative h-[92px] w-auto max-w-none"
              style={{ filter: "invert(1) brightness(1.35)" }}
            />
          </Reveal>

          <Reveal delay={0.2} className="relative hidden min-h-[420px] self-stretch lg:block">
            <svg
              viewBox="0 0 460 1000"
              preserveAspectRatio="none"
              className="absolute inset-0 block h-full w-full"
              aria-label="Пять направлений сходятся в одну точку"
            >
              <g fill="none" stroke="#7FD1BC" strokeWidth={1.1} strokeOpacity={0.55}>
                {fanPaths.map((d) => (
                  <path key={d} d={d} vectorEffect="non-scaling-stroke" />
                ))}
              </g>
            </svg>
            <div
              className="absolute right-0 top-1/2 h-[1.2px]"
              style={{ left: "65.2%", background: "rgba(127,209,188,.7)" }}
            />
            <div className="absolute left-[78%] top-1/2 h-[92px] w-[44px] -translate-y-full overflow-hidden">
              <Image
                src="/product/observer.png"
                alt="Наблюдатель с подзорной трубой"
                width={230}
                height={480}
                className="absolute left-[-41px] top-[-31px] h-auto w-[230px] max-w-none"
                style={{ filter: "invert(1) brightness(1.35)" }}
              />
            </div>
            <div
              className="absolute left-[74%] top-1/2 h-[5px] w-16 -translate-y-px rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(127,209,188,.28), rgba(127,209,188,0))" }}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
