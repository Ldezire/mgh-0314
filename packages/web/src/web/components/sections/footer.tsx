import { business } from "../../lib/business";
import { fill } from "../../lib/content";
import { useLanguage } from "../../lib/i18n";

export function SiteFooter() {
  const { lang, t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-background">
      <div className="shell grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 md:py-20">
        <div>
          <p className="font-display text-lg">
            {lang === "ml" ? business.nameMalayalam : business.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {lang === "ml" ? business.name : business.nameMalayalam}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{f.contact}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={business.phoneHref} className="hover:text-foreground" dir="ltr">
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                {f.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                {f.mapsListing}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{f.storeHours}</h3>
          <address className="mt-4 space-y-1 text-sm leading-relaxed text-muted-foreground not-italic">
            {f.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block pt-2">{f.plusCode}</span>
          </address>
          <p className="mt-3 text-sm text-muted-foreground">
            {f.hours}
            <span className="block">{f.hoursNote}</span>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{f.serviceAreaTitle}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.serviceArea}</p>
          <a
            href={business.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            {f.directions}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{fill(f.copyright, { year: new Date().getFullYear() })}</p>
          <p>{f.trade}</p>
        </div>
      </div>
    </footer>
  );
}
