import { Check } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

const tiers = [
  {
    name: "Старт",
    who: "Один магазин, который планирует расти",
    price: "2 900",
    features: ["1 магазин", "до 1 000 товаров", "все модули", "поддержка в чате"],
    cta: "Подключить",
    highlighted: false,
  },
  {
    name: "Бизнес",
    who: "Несколько кабинетов на разных площадках",
    price: "6 900",
    features: [
      "до 5 магазинов",
      "до 20 000 товаров",
      "мультикомпании и права доступа",
      "инвентаризация со сканером",
      "приоритетная поддержка",
    ],
    cta: "Подключить",
    highlighted: true,
  },
  {
    name: "Масштаб",
    who: "Много юрлиц и большой каталог",
    price: "14 900",
    features: [
      "без лимита магазинов",
      "без лимита товаров",
      "выделенный менеджер",
      "помощь с переносом каталога",
    ],
    cta: "Подключить",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="price" className="scroll-mt-[90px] pb-[clamp(62px,9vw,110px)]">
      <Container>
        <Reveal className="text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-accent">
            Тарифы
          </p>
          <h2 className="mx-auto mt-4 max-w-[22ch] text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Платите за масштаб, а не за модули
          </h2>
          <p className="mt-4 text-[14.5px] text-muted-dim">
            Весь функционал доступен на любом тарифе. Отличается число магазинов и товаров.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 0.08}
              className={tier.highlighted ? "rounded-3xl lg:-translate-y-3" : "rounded-3xl"}
            >
              <div
                className="flex h-full flex-col rounded-3xl border p-9 transition-colors"
                style={
                  tier.highlighted
                    ? {
                        background: "linear-gradient(165deg, rgba(46,125,107,.35), rgba(11,16,14,.92))",
                        borderColor: "rgba(127,209,188,.45)",
                        boxShadow: "0 40px 120px -40px rgba(127,209,188,0.35)",
                      }
                    : { background: "#0B100E", borderColor: "rgba(207,232,224,.1)" }
                }
              >
                <p
                  className="text-[14.5px] font-medium"
                  style={{ color: tier.highlighted ? "#A8C1BB" : "#7E948E" }}
                >
                  {tier.name}
                </p>
                <p
                  className="mt-1.5 min-h-[2.5em] text-[13.5px]"
                  style={{ color: tier.highlighted ? "#A8C1BB" : "#7E948E" }}
                >
                  {tier.who}
                </p>
                <p className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className="text-4xl font-semibold tracking-tight"
                    style={{ color: tier.highlighted ? "#FFFFFF" : "#E8F1EE" }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-[14px]" style={{ color: tier.highlighted ? "#A8C1BB" : "#7E948E" }}>
                    ₽ / мес
                  </span>
                </p>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13.5px]"
                      style={{ color: tier.highlighted ? "#CFE8E0" : "#9BB2AC" }}
                    >
                      <Check size={15} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="mt-9 w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
