import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { MARKETPLACES } from "@/lib/marketplaces";

export function Integrations() {
  return (
    <section className="pb-[clamp(56px,8vw,100px)]">
      <Container>
        <Reveal className="flex flex-wrap items-center gap-6 rounded-3xl border border-border bg-gradient-to-r from-accent/[0.06] to-surface/40 px-7 py-8 sm:gap-11 sm:px-9">
          <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted-dim">
            Подключается к
          </span>

          <div className="flex flex-wrap items-center gap-3.5">
            {MARKETPLACES.map((m) => (
              <div
                key={m.key}
                className="flex items-center gap-3.5 rounded-2xl border border-border/70 bg-background/40 py-3 pr-5 pl-3"
              >
                <Image src={m.iconLg} alt={m.name} width={44} height={44} className="rounded-[13px]" />
                <span className="flex flex-col gap-1.5">
                  <span className="text-[15px] font-semibold text-foreground">{m.name}</span>
                  <span className="h-[3px] w-8 rounded-full" style={{ backgroundColor: m.color }} />
                </span>
              </div>
            ))}
          </div>

          <span className="max-w-[280px] text-[13px] text-muted-dim sm:ml-auto">
            Подключение по API-ключу за пару минут. Каталог подтягивается автоматически.
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
