import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { type Content, type Lang, content } from "./content";

const STORAGE_KEY = "mgh-lang";

interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageValue | null>(null);

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "ml") return stored;
  // First visit: follow the browser's preferred language.
  const prefers = window.navigator.languages ?? [window.navigator.language];
  return prefers.some((code) => code?.toLowerCase().startsWith("ml")) ? "ml" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = content[lang].htmlLang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing — the choice just won't persist.
    }
  }, []);

  const value = useMemo<LanguageValue>(() => ({ lang, setLang, t: content[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside a LanguageProvider");
  return value;
}
