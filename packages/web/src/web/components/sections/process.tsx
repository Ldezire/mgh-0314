import { useLanguage } from "../../lib/i18n";

export function Process() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border">
      <div className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2 className="mt-5 max-w-sm font-display text-3xl leading-tight md:text-[2.4rem]">
              {t.process.heading}
            </h2>
            <img
              src="/images/partition.jpg"
              alt={t.process.imageAlt}
              loading="lazy"
              width={1200}
              height={1500}
              className="mt-10 hidden aspect-4/5 w-full object-cover lg:block"
            />
          </div>

          <ol className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {t.process.steps.map((step, index) => (
              <li key={step.title} className="bg-background p-7 md:p-8">
                <span className="font-display text-3xl text-primary/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
