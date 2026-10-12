import { MapPin, Star } from "lucide-react";
import { business } from "../../lib/business";
import { useLanguage } from "../../lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="border-b border-border">
      <div className="shell grid items-center gap-12 pt-14 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 md:pt-24 md:pb-28">
        <div className="max-w-xl">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.06] font-normal sm:text-5xl lg:text-[3.7rem]">
            {t.hero.headline}
          </h1>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground">{t.hero.body}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-accent-hover"
            >
              <MapPin className="size-4" />
              {t.hero.ctaVisit}
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center border border-border px-7 py-4 text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-accent-soft"
            >
              {t.hero.ctaQuote}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Star className="size-4 fill-gold text-gold" />
              <strong className="font-semibold text-foreground">{business.rating.value}</strong>
              {t.hero.onGoogle} · {business.rating.count} {t.hero.reviewsWord}
            </span>
            <span>{t.visit.hours}</span>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/hero-home.jpg"
            alt={t.hero.imageAlt}
            width={2000}
            height={1055}
            className="aspect-4/5 w-full object-cover lg:aspect-3/4"
          />
          <div className="absolute -bottom-6 -left-6 hidden max-w-[15rem] bg-background p-5 lg:block">
            <p className="font-display text-lg leading-snug">{t.hero.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
