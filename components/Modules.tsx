import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const modules = [
  { title: "Панель управления", text: "Остатки, капитализация, ожидаемая выручка и чистая прибыль за период, с разбивкой по компаниям." },
  { title: "Товары", text: "Единый каталог: фото, артикул, штрихкод, закупка/наценка/продажа, остаток и статус связи с каждой площадкой." },
  { title: "Дедупликация", text: "Поиск и объединение задвоенных карточек с визуальным сравнением: фото, объём, остаток, дата последнего заказа." },
  { title: "Сопоставление с площадками", text: "Привязка товаров к конкретным листингам на Ozon, WB и Яндексе, с ручным разбором спорных случаев." },
  { title: "Заказы", text: "Все заказы со всех подключённых площадок в одном списке. Статусы синхронизируются автоматически." },
  { title: "Клиенты", text: "База покупателей по всем магазинам." },
  { title: "Приёмка и списание", text: "Движения склада с полным аудитом: кто, когда и сколько." },
  { title: "Инвентаризация", text: "Физический пересчёт склада, в том числе со сканером штрихкодов, с фиксацией расхождений и историей." },
  { title: "Отчёты", text: "Маржинальность, прибыль, ABC-анализ товаров." },
  { title: "Ozon Калькулятор", text: "Расчёт юнит-экономики под конкретную площадку прямо в интерфейсе." },
  { title: "Настройки", text: "Подключение магазинов и компаний, управление доступом сотрудников." },
  { title: "Время", text: "Сводка сэкономленных часов: сколько ручной работы сняли синхронизация остатков, разбор дублей и сборка отчётов за месяц." },
].map((m, i) => ({ ...m, num: String(i + 1).padStart(2, "0") }));

const modulesLeft = modules.slice(0, 6);
const modulesRight = modules.slice(6);

const linksLeft = [8.5, 25, 41.5, 58.5, 75, 91.5].map((y, i) => ({
  d: `M50 50 C 46 50 43 ${y} 38.5 ${y}`,
  duration: 2.0 + i * 0.2,
}));
const linksRight = [8.5, 25, 41.5, 58.5, 75, 91.5].map((y, i) => ({
  d: `M50 50 C 54 50 57 ${y} 61.5 ${y}`,
  duration: 2.2 + i * 0.2,
}));

function ModuleCard({ num, title, text }: { num: string; title: string; text: string }) {
  return (
    <div
      className="grid grid-cols-[52px_1fr] items-start gap-4 rounded-[26px] border p-5"
      style={{
        background: "linear-gradient(102deg, rgba(46,125,107,.2), rgba(11,16,14,.72) 62%)",
        borderColor: "rgba(127,209,188,.16)",
        boxShadow: "0 18px 40px rgba(0,0,0,.28)",
      }}
    >
      <span
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full border text-[16px] font-extrabold tracking-[-0.02em] text-accent"
        style={{ background: "#0B100E", borderColor: "rgba(127,209,188,.4)" }}
      >
        {num}
      </span>
      <span className="flex min-w-0 flex-col gap-1.5">
        <span className="text-[17px] font-semibold tracking-[-0.01em] text-foreground">{title}</span>
        <span className="text-[14px] leading-[1.6]" style={{ color: "#849993" }}>
          {text}
        </span>
      </span>
    </div>
  );
}

export function Modules() {
  return (
    <section id="features" className="scroll-mt-[90px] pb-[clamp(62px,9vw,110px)]">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
            Функционал
          </p>
          <h2 className="mt-3 max-w-[22ch] text-3xl font-semibold tracking-tight text-balance sm:text-[2.75rem] sm:leading-[1.1]">
            Двенадцать модулей, один аккаунт
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="mt-8">
          <div className="overflow-hidden rounded-3xl border" style={{ borderColor: "rgba(127,209,188,.16)" }}>
            <Image
              src="/product/modules-bridge-desktop.jpg"
              alt="Двенадцать модулей Focussrm соединяют магазин без CRM и рост"
              width={1193}
              height={896}
              className="hidden h-auto w-full sm:block"
            />
            <Image
              src="/product/modules-bridge-mobile.jpg"
              alt="Двенадцать модулей Focussrm соединяют магазин без CRM и рост"
              width={768}
              height={1376}
              className="block h-auto w-full sm:hidden"
            />
          </div>
        </Reveal>

        <div className="relative mt-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden
          >
            <g fill="none" stroke="rgba(127,209,188,.4)" strokeWidth={1.3} strokeDasharray="5 10">
              {[...linksLeft, ...linksRight].map((link) => (
                <path
                  key={link.d}
                  d={link.d}
                  vectorEffect="non-scaling-stroke"
                  style={{ animation: `fsDash ${link.duration}s linear infinite` }}
                />
              ))}
            </g>
          </svg>

          <div className="relative grid gap-3.5 lg:grid-cols-[1fr_minmax(200px,240px)_1fr] lg:grid-rows-6">
            <div className="contents lg:grid lg:row-span-6 lg:grid-rows-subgrid">
              {modulesLeft.map((m) => (
                <Reveal key={m.title} delay={0.02}>
                  <ModuleCard num={m.num} title={m.title} text={m.text} />
                </Reveal>
              ))}
            </div>

            <div className="flex items-center justify-center py-4 lg:row-span-6 lg:py-0">
              <div
                className="relative flex h-[160px] w-[160px] flex-col items-center justify-center gap-1.5 rounded-full lg:h-[196px] lg:w-[196px]"
                style={{
                  background: "radial-gradient(circle at 32% 28%, #123029, #070C0A 72%)",
                  border: "1px solid rgba(127,209,188,.3)",
                  boxShadow: "0 0 70px rgba(127,209,188,.16), inset 0 0 40px rgba(127,209,188,.06)",
                }}
              >
                <span
                  className="absolute -inset-[9px] rounded-full"
                  style={{ border: "1px solid rgba(127,209,188,.16)", animation: "fsRing 4.5s ease-out infinite" }}
                />
                <span className="text-[28px] font-extrabold tracking-[-0.03em] text-accent lg:text-[32px]">CRM</span>
                <span className="text-[11.5px] font-bold tracking-[0.22em]" style={{ color: "#8FA5A0" }}>
                  FOCUSSRM
                </span>
              </div>
            </div>

            <div className="contents lg:grid lg:row-span-6 lg:grid-rows-subgrid">
              {modulesRight.map((m) => (
                <Reveal key={m.title} delay={0.02}>
                  <ModuleCard num={m.num} title={m.title} text={m.text} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
