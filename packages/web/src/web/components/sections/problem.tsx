import { useLanguage } from "../../lib/i18n";

export function Problem() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border bg-accent-soft/60">
      <div className="shell grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 md:py-28">
        <div>
          <p className="eyebrow">{t.problem.eyebrow}</p>
          <h2 className="mt-5 max-w-sm font-display text-3xl leading-tight md:text-[2.4rem]">
            {t.problem.heading}
          </h2>
          <img
            src="/images/craft-hands.jpg"
            alt={t.problem.imageAlt}
            loading="lazy"
            width={1200}
            height={1800}
            className="mt-10 hidden aspect-square w-full object-cover lg:block"
          />
        </div>

        <ul className="divide-y divide-border">
          {t.problem.items.map((problem, index) => (
            <li key={problem.title} className="flex gap-6 py-7 first:pt-0 last:pb-0">
              <span className="font-display text-sm text-primary/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-medium md:text-[1.4rem]">{problem.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{problem.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
