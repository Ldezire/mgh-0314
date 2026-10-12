import { Clock, MapPin, Phone } from "lucide-react";
import { business } from "../../lib/business";
import { useLanguage } from "../../lib/i18n";

export function Visit() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border">
      <img
        src="/images/shopfront.jpg"
        alt={t.visit.imageAlt}
        loading="lazy"
        width={1920}
        height={1079}
        className="aspect-video w-full object-cover object-center md:max-h-[560px]"
      />
      <div className="bg-primary text-primary-foreground">
        <div className="shell grid gap-12 py-16 lg:grid-cols-2 lg:gap-16 md:py-20">
          <div className="max-w-md">
            <p className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase opacity-70">
              {t.visit.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight md:text-[2.4rem]">
              {t.visit.heading}
            </h2>
            <p className="mt-5 leading-relaxed opacity-80">{t.visit.body}</p>
          </div>

          <div className="max-w-md md:pt-2">
            <dl className="space-y-4 text-[0.95rem]">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 opacity-70" />
                <dd>{t.visit.address}</dd>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 opacity-70" />
                <dd>
                  {t.visit.hours}
                  <span className="block opacity-70">{t.visit.hoursNote}</span>
                </dd>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 opacity-70" />
                <dd>
                  <a href={business.phoneHref} className="underline underline-offset-4" dir="ltr">
                    {business.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-background px-7 py-4 text-sm font-semibold tracking-wide text-primary transition-opacity hover:opacity-90"
              >
                <MapPin className="size-4" />
                {t.visit.directions}
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-7 py-4 text-sm font-semibold tracking-wide transition-colors hover:bg-primary-foreground/10"
              >
                {t.visit.callShop}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
