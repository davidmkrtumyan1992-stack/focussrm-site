"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const items = [
  {
    q: "Как считается остаток, если он не совпадает с тем, что показывает Ozon?",
    a: "Источником истины служит домашний склад: остаток задаётся физической инвентаризацией в системе, а не берётся из выгрузок площадок. Синхронизация потом приводит площадки к этой цифре, а не наоборот.",
  },
  {
    q: "Что будет с уже задвоенными карточками?",
    a: "Инструмент дедупликации находит вероятные дубли по штрихкоду и похожести названия и предлагает их объединить. Остатки и связи переносятся, история заказов сохраняется.",
  },
  {
    q: "Почему синхронизация не включается сразу после подключения?",
    a: "Первое подключение и массовые изменения сначала работают в режиме наблюдения: всё считается и логируется, но на площадки ничего не отправляется, пока владелец не подтвердит переход в боевой режим.",
  },
  {
    q: "Какие площадки поддерживаются?",
    a: "Ozon, Wildberries и Яндекс.Маркет, с возможностью подключить несколько личных кабинетов на каждой площадке одновременно.",
  },
  {
    q: "Нужен ли сканер штрихкодов для инвентаризации?",
    a: "Нет, остаток можно вносить вручную. Сканер ускоряет процесс на больших каталогах, но не обязателен для начала работы.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border py-20 sm:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-accent">
            Вопросы
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-[2.35rem]">
            Прежде чем подключать магазины
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span className="text-[15px] font-medium text-foreground transition-colors group-hover:text-accent">
                    {item.q}
                  </span>
                  <CaretDown
                    size={16}
                    className={`shrink-0 text-muted-dim transition-transform duration-200 group-hover:text-accent ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="max-w-[58ch] pb-5 text-[14.5px] leading-relaxed text-muted">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
