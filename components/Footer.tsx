import { Logo } from "./Logo";
import { Container } from "./ui/Container";

const productLinks = [
  { href: "#features", label: "Функционал" },
  { href: "#video", label: "Видео-демо" },
  { href: "#price", label: "Тарифы" },
  { href: "#problem", label: "Зачем это нужно" },
];

const docLinks = [
  "Политика обработки персональных данных",
  "Согласие на обработку персональных данных",
  "Пользовательское соглашение",
  "Публичная оферта на оказание услуг",
  "Политика использования файлов cookie",
  "Согласие на получение рекламных рассылок",
  "Порядок оплаты и возврата средств",
];

const companyLinks = [
  "Реквизиты и сведения о правообладателе",
  "Контакты и поддержка",
  "Сообщить об инциденте с данными",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/60 pt-[clamp(36px,5vw,56px)] pb-10">
      <Container>
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3.5">
            <Logo />
            <p className="max-w-[260px] text-[13.5px] leading-relaxed text-muted-dim">
              Единый центр управления для продавцов на маркетплейсах: остатки, заказы и отчёты в
              одном аккаунте.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-accent">Продукт</p>
            {productLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[13.5px] text-muted-dim transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-accent">Документы</p>
            {docLinks.map((label) => (
              <a key={label} href="#" className="text-[13.5px] text-muted-dim transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-accent">Компания</p>
            {companyLinks.map((label) => (
              <a key={label} href="#" className="text-[13.5px] text-muted-dim transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
            <div className="mt-1 text-[13px] leading-relaxed text-muted-dim">
              ИНН 0000000000 · ОГРН 0000000000000
              <br />
              Адрес: —
              <br />
              <a href="mailto:info@focussrm.ru" className="text-muted-dim transition-colors hover:text-foreground">
                info@focussrm.ru
              </a>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-[12.5px] leading-relaxed text-muted-dim">
          <span className="mr-auto">&copy; {new Date().getFullYear()} Focussrm. Все права защищены.</span>
          <span>Оператор внесён в реестр операторов, осуществляющих обработку персональных данных</span>
          <span>Данные обрабатываются и хранятся на территории РФ</span>
        </div>
        <p className="mt-4 text-[12px] leading-relaxed text-muted-dim/70">
          Продолжая пользоваться сайтом, вы соглашаетесь с политикой обработки персональных данных
          и использованием файлов cookie. Информация на сайте не является публичной офертой, если
          это прямо не указано в соответствующем документе.
        </p>
      </Container>
    </footer>
  );
}
