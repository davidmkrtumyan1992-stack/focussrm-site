import type { Metadata } from "next";
import { Golos_Text, IBM_Plex_Mono } from "next/font/google";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import "./globals.css";

const golosText = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "FocusSRM: единый остаток по всем маркетплейсам",
  description:
    "Облачная CRM для продавцов на Ozon, Wildberries и Яндекс.Маркете. Домашний склад как единственный источник истины, безопасное подключение магазинов и дедупликация каталога.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${golosText.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground font-sans antialiased">
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          {children}
        </div>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
