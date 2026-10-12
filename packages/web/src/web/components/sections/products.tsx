import { products } from "../../lib/business";
import { useLanguage } from "../../lib/i18n";

export function Products() {
  const { t } = useLanguage();

  return (
    <section id="stock" className="border-b border-border">
      <div className="shell py-20 md:py-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{t.products.eyebrow}</p>
            <h2 className="mt-5 max-w-lg font-display text-3xl leading-tight md:text-[2.4rem]">
              {t.products.heading}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t.products.note}
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const copy = t.products.items[index];
            return (
              <article key={product.name}>
                <img
                  src={product.image}
                  alt={copy.name}
                  loading="lazy"
                  className="aspect-4/3 w-full bg-muted object-cover"
                />
                <h3 className="mt-5 font-display text-xl">{copy.name}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {copy.line}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
