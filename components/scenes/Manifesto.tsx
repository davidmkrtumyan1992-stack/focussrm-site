import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function Manifesto({ children }: { children: ReactNode }) {
  return (
    <section className="flex min-h-[70dvh] items-center border-t border-border py-24">
      <Container>
        <Reveal>
          <p className="max-w-[18ch] text-3xl font-semibold tracking-tight text-balance sm:text-5xl sm:leading-[1.1] lg:text-6xl">
            {children}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
