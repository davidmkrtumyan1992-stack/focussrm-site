"use client";

import { useEffect, useState } from "react";
import { useCookieConsent } from "@/lib/useCookieConsent";

const COOKIE_POLICY_URL = "#";

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent bg-gradient-to-b from-accent to-accent/90 text-accent-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_-8px_rgba(127,209,188,0.55)] hover:brightness-110";
const secondaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[12px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent border border-border text-foreground hover:border-muted-dim hover:bg-surface";

interface Choice {
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

function CategoryCheckbox({
  label,
  description,
  checked,
  locked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={locked}
      onClick={() => onChange?.(!checked)}
      className={`flex w-full items-start gap-3 border-0 bg-transparent py-2.5 text-left ${locked ? "cursor-default" : "cursor-pointer"}`}
    >
      <span
        className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border-2"
        style={{
          borderColor: checked ? "var(--accent)" : "rgba(127,209,188,.3)",
          backgroundColor: checked ? "var(--accent)" : "transparent",
        }}
      >
        {locked ? (
          <span className="h-[2px] w-2 rounded-[1px]" style={{ backgroundColor: "var(--accent-foreground)" }} />
        ) : checked ? (
          <svg width="11" height="8" viewBox="0 0 10 7" fill="none">
            <path
              d="M1 3.5L3.5 6L9 1"
              stroke="var(--accent-foreground)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </span>
      <span>
        <p className="m-0 text-[13px] font-semibold text-foreground">{label}</p>
        <p className="mt-[3px] text-[12px] leading-[1.5] text-muted">{description}</p>
      </span>
    </button>
  );
}

/** Non-blocking bottom-anchored glass card, ported from krasotki-site-next's
 * CookieConsentBanner — no page overlay, visitors can keep browsing while it's open.
 * Renders nothing until localStorage consent has been read, so an already-decided
 * visitor never sees a flash of the banner. */
export default function CookieConsentBanner() {
  const { consent, acceptAll, savePreferences } = useCookieConsent();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<"compact" | "settings">("compact");
  const [choice, setChoice] = useState<Choice>({ preferences: false, analytics: false, marketing: false });

  useEffect(() => {
    if (consent === null) setOpen(true);
  }, [consent]);

  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [open]);

  function close(commit: () => void) {
    commit();
    setVisible(false);
    setTimeout(() => setOpen(false), 360);
  }

  function setAnalytics(next: boolean) {
    setChoice((c) => (next ? { ...c, analytics: true } : { ...c, analytics: false, marketing: false }));
  }

  function setMarketing(next: boolean) {
    setChoice((c) => (next ? { ...c, marketing: true, analytics: true } : { ...c, marketing: false }));
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Согласие на использование cookie"
      className="fixed z-[1050] left-4 right-4 bottom-6 max-h-[calc(100vh-48px)] overflow-y-auto rounded-[20px] border border-accent/[0.18] bg-surface/[0.92] p-5 shadow-[0_20px_60px_rgba(0,0,0,.5)] backdrop-blur-xl backdrop-saturate-150 sm:left-auto sm:right-6 sm:w-[380px]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease",
      }}
    >
      {view === "compact" ? (
        <>
          <p className="m-0 text-[13px] leading-[1.55] text-foreground">
            Мы используем файлы cookie, чтобы улучшить ваше взаимодействие с ресурсами Focussrm. Продолжая
            пользоваться сайтом, вы подтверждаете свое согласие с{" "}
            <a href={COOKIE_POLICY_URL} className="text-accent underline">
              политикой конфиденциальности
            </a>
            .
          </p>

          <div className="mt-4 flex gap-2">
            <button type="button" onClick={() => close(acceptAll)} className={`flex-1 ${primaryBtn}`}>
              Принять все
            </button>
            <button type="button" onClick={() => setView("settings")} className={`flex-1 ${secondaryBtn}`}>
              Настройки cookie
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-1.5 flex items-center justify-between">
            <h2 className="m-0 text-[15px] font-bold text-foreground">Настройте cookies</h2>
            <button
              type="button"
              onClick={() => setView("compact")}
              aria-label="Назад"
              className="flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-muted"
            >
              ×
            </button>
          </div>

          <div>
            <CategoryCheckbox
              label="Технические cookies"
              description="Необходимы для корректной работы сайта и его основных функций."
              checked
              locked
            />
            <CategoryCheckbox
              label="Cookies предпочтений"
              description="Позволяют запоминать ваши настройки и персонализировать отображаемую информацию."
              checked={choice.preferences}
              onChange={(next) => setChoice((c) => ({ ...c, preferences: next }))}
            />
            <CategoryCheckbox
              label="Аналитические cookies"
              description="Используются для анализа использования сайта и улучшения его работы."
              checked={choice.analytics}
              onChange={setAnalytics}
            />
            <CategoryCheckbox
              label="Маркетинговые cookies"
              description="Используются для персонализации предложений и оценки их эффективности. При их включении также применяются аналитические cookies, поскольку анализ поведения пользователей необходим для работы маркетинговых инструментов."
              checked={choice.marketing}
              onChange={setMarketing}
            />
          </div>

          <button
            type="button"
            onClick={() => close(() => savePreferences(choice))}
            className={`mt-3.5 w-full ${primaryBtn}`}
          >
            Сохранить выбор
          </button>
        </>
      )}
    </div>
  );
}
