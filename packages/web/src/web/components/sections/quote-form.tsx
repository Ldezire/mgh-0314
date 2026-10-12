import { useForm } from "react-hook-form";
import { Check, Loader2 } from "lucide-react";
import { business } from "../../lib/business";
import { fill } from "../../lib/content";
import { useLanguage } from "../../lib/i18n";
import { useCreateLead } from "../../queries/leads";

interface QuoteFields {
  name: string;
  email: string;
  phone: string;
  requirement: string;
}

const fieldClass =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const labelClass = "block text-sm font-medium";

export function QuoteForm() {
  const { t } = useLanguage();
  const q = t.quote;
  const createLead = useCreateLead();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFields>({
    defaultValues: { name: "", email: "", phone: "", requirement: "" },
  });

  const onSubmit = handleSubmit((values) => {
    createLead.mutate(
      {
        name: values.name,
        email: values.email,
        phone: values.phone,
        requirement: values.requirement || undefined,
      },
      { onSuccess: () => reset() },
    );
  });

  return (
    <section id="quote" className="border-b border-border bg-accent-soft/60">
      <div className="shell grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 md:py-28">
        <div>
          <p className="eyebrow">{q.eyebrow}</p>
          <h2 className="mt-5 max-w-sm font-display text-3xl leading-tight md:text-[2.4rem]">
            {q.heading}
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">{q.body}</p>
          <p className="mt-8 text-sm text-muted-foreground">
            {q.hurry}{" "}
            <a
              href={business.phoneHref}
              className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            >
              {fill(q.callLink, { phone: business.phone })}
            </a>
          </p>
        </div>

        <div className="border border-border bg-background p-6 sm:p-9">
          {createLead.isSuccess ? (
            <div className="flex h-full min-h-56 flex-col items-start justify-center">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl">{q.successTitle}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">{q.successBody}</p>
              <button
                type="button"
                onClick={() => createLead.reset()}
                className="mt-7 text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
              >
                {q.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <label className={labelClass} htmlFor="name">
                  {q.nameLabel}
                </label>
                <input
                  id="name"
                  className={fieldClass}
                  placeholder={q.namePlaceholder}
                  autoComplete="name"
                  {...register("name", {
                    required: q.nameError,
                    minLength: { value: 2, message: q.nameError },
                  })}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="phone">
                    {q.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    className={fieldClass}
                    placeholder={q.phonePlaceholder}
                    autoComplete="tel"
                    {...register("phone", {
                      required: q.phoneError,
                      pattern: {
                        value: /^[+0-9()\s-]{8,20}$/,
                        message: q.phoneInvalid,
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    {q.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={fieldClass}
                    placeholder={q.emailPlaceholder}
                    autoComplete="email"
                    {...register("email", {
                      required: q.emailError,
                      pattern: {
                        value: /^[^@\s]+@[^@\s.]+\.[^@\s]+$/,
                        message: q.emailInvalid,
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="requirement">
                  {q.requirementLabel}{" "}
                  <span className="font-normal text-muted-foreground">{q.optional}</span>
                </label>
                <textarea
                  id="requirement"
                  rows={4}
                  className={`${fieldClass} resize-y`}
                  placeholder={q.requirementPlaceholder}
                  {...register("requirement", { maxLength: 1500 })}
                />
              </div>

              <button
                type="submit"
                disabled={createLead.isPending}
                className="inline-flex w-full items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
              >
                {createLead.isPending && <Loader2 className="size-4 animate-spin" />}
                {createLead.isPending ? q.sending : q.submit}
              </button>

              {createLead.isError && (
                <p className="text-sm text-destructive">
                  {fill(q.failed, { phone: business.phone })}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
