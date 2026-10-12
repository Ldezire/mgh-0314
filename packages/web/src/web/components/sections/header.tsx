import { Phone } from "lucide-react";
import { business } from "../../lib/business";
import { useLanguage } from "../../lib/i18n";
import { LanguageSwitch } from "../language-switch";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm">
      <div className="shell flex h-18 items-center justify-between gap-3 md:h-20 md:gap-4">
        <a href="#top" className="flex min-w-0 flex-col leading-none">
          <span className="truncate font-display text-lg font-semibold tracking-tight sm:text-xl lg:text-[1.6rem]">
            {t.header.brand}
          </span>
          <span className="mt-1.5 hidden text-[0.72rem] tracking-[0.16em] text-muted-foreground uppercase sm:block">
            {t.header.place}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm whitespace-nowrap text-muted-foreground lg:flex">
          <a className="transition-colors hover:text-foreground" href="#stock">
            {t.header.navStock}
          </a>
          <a className="transition-colors hover:text-foreground" href="#reviews">
            {t.header.navReviews}
          </a>
          <a className="transition-colors hover:text-foreground" href="#quote">
            {t.header.navQuote}
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitch />
          <a
            href={business.phoneHref}
            aria-label={t.header.call}
            className="inline-flex shrink-0 items-center gap-2 border border-primary/25 px-2.5 py-2 text-sm font-medium whitespace-nowrap text-primary transition-colors hover:bg-accent-soft sm:px-3"
          >
            <Phone className="size-4" />
            <span className="hidden xl:inline">{business.phone}</span>
            <span className="hidden sm:inline xl:hidden">{t.header.call}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
