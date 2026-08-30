"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

const links = [
  { href: "#problem", label: "Проблема" },
  { href: "#video", label: "Видео" },
  { href: "#features", label: "Функционал" },
  { href: "#price", label: "Тарифы" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="FocusSRM">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#price" variant="primary" className="px-5 py-2.5 text-[14px]">
            Подключить
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-accent/[0.06] text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </Container>

      <div
        className="overflow-hidden border-t border-border bg-background/96 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out md:hidden"
        style={{ maxHeight: open ? 320 : 0, opacity: open ? 1 : 0 }}
      >
        <Container className="flex flex-col py-1.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3.5 text-[15px] text-foreground last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}
