import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { DASHBOARD_SRC, CATALOG_SRC, REPORTS_SRC } from "@/lib/product-shots";

function Frame({
  label,
  src,
  alt,
  className = "",
}: {
  label: string;
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-surface ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-border/80 px-4 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 text-[12px] text-muted-dim">{label}</span>
      </div>
      <div className="relative min-h-[160px] flex-1">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export function Screenshots() {
  return (
    <section className="pb-[clamp(62px,9vw,110px)]">
      <Container>
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-accent">
            Интерфейс
          </p>
          <h2 className="mt-3 max-w-[20ch] text-3xl font-semibold tracking-tight text-balance sm:text-[2.75rem] sm:leading-[1.1]">
            Всё видно с первого экрана
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <Reveal delay={0.06} className="h-full">
            <Frame
              label="Панель управления"
              src={DASHBOARD_SRC!}
              alt="Панель управления Focussrm"
            />
          </Reveal>
          <div className="flex flex-col gap-4">
            <Reveal delay={0.12}>
              <Frame
                label="Дедупликация"
                src={CATALOG_SRC!}
                alt="Объединение карточек-дублей Focussrm"
              />
            </Reveal>
            <Reveal delay={0.18}>
              <Frame
                label="Отчёт по марже"
                src={REPORTS_SRC!}
                alt="Отчёт по марже Focussrm"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
