import { Star } from "lucide-react";
import { business } from "../../lib/business";
import { fill } from "../../lib/content";
import { useLanguage } from "../../lib/i18n";

export function Proof() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="border-b border-border bg-accent-soft/60">
      <div className="shell py-20 md:py-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{t.proof.eyebrow}</p>
            <h2 className="mt-5 max-w-md font-display text-3xl leading-tight md:text-[2.4rem]">
              {fill(t.proof.heading, { rating: business.rating.value })}
            </h2>
          </div>
          <a
            href={business.reviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
          >
            {fill(t.proof.readAll, { count: business.rating.count })}
          </a>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
          {t.proof.reviews.map((review) => (
            <figure key={review.name} className="flex flex-col bg-background p-7 md:p-8">
              <div className="flex gap-1" aria-label={t.proof.starsLabel}>
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="size-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-5 grow font-display text-[1.15rem] leading-snug">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{review.name}</span>
                <span className="mt-0.5 block text-muted-foreground">{review.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
