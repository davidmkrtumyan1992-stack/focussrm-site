import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function FinalCta() {
  return (
    <section id="contact" className="pb-[clamp(52px,7vw,90px)]">
      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[32px] border px-6 py-16 text-center sm:px-12 sm:py-20"
            style={{
              borderColor: "rgba(127,209,188,.2)",
              background: "linear-gradient(160deg, rgba(46,125,107,.42), rgba(9,14,12,.9) 65%)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 h-[520px] w-[900px] -translate-x-1/2"
              style={{
                bottom: -260,
                background: "radial-gradient(ellipse at center, rgba(127,209,188,.35), rgba(7,10,9,0) 70%)",
                animation: "fsGlow 11s ease-in-out infinite",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-[20ch] text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.1]">
                Подключите свои маркетплейсы за один вечер
              </h2>
              <p className="mx-auto mt-5 max-w-[46ch] text-[16px] leading-relaxed" style={{ color: "#B4C9C3" }}>
                Каталог подтянется сам, дубли найдутся автоматически, остаток станет один. Дальше
                просто работайте.
              </p>
              <div className="mt-9 flex justify-center">
                <Button href="mailto:hello@focussrm.com?subject=Пробный%20доступ%20Focussrm" variant="primary">
                  Подключить бесплатно
                </Button>
              </div>
              <p className="mt-[18px] text-[13px]" style={{ color: "#7E948E" }}>
                7 дней полного доступа · без привязки карты
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
