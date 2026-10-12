import { Check, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { type Lang } from "../lib/content";
import { useLanguage } from "../lib/i18n";

const options: { value: Lang; label: string; short: string; sub: string }[] = [
  { value: "en", label: "English", short: "EN", sub: "English" },
  { value: "ml", label: "മലയാളം", short: "ML", sub: "Malayalam" },
];

export function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = options.find((option) => option.value === lang) ?? options[0];

  return (
    <div ref={wrapRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={t.langSwitchLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 border border-border px-2.5 py-2 text-sm font-medium whitespace-nowrap text-foreground transition-colors hover:bg-accent-soft sm:px-3"
      >
        <Globe className="size-4 text-primary" />
        <span className="sm:hidden">{current.short}</span>
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.langSwitchLabel}
          className="absolute right-0 z-50 mt-1.5 w-44 border border-border bg-background py-1 shadow-lg shadow-foreground/5"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="menuitemradio"
              aria-checked={option.value === lang}
              onClick={() => {
                setLang(option.value);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-accent-soft"
            >
              <span>
                <span className="block font-medium">{option.label}</span>
                <span className="block text-xs text-muted-foreground">{option.sub}</span>
              </span>
              {option.value === lang && <Check className="size-4 shrink-0 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
