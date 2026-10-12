import { MapPin, Phone } from "lucide-react";
import { SiteFooter } from "../components/sections/footer";
import { SiteHeader } from "../components/sections/header";
import { Hero } from "../components/sections/hero";
import { Problem } from "../components/sections/problem";
import { Process } from "../components/sections/process";
import { Products } from "../components/sections/products";
import { Proof } from "../components/sections/proof";
import { QuoteForm } from "../components/sections/quote-form";
import { Visit } from "../components/sections/visit";
import { business } from "../lib/business";
import { useLanguage } from "../lib/i18n";

function MobileActionBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-border bg-border md:hidden">
      <a
        href={business.directionsUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 bg-primary py-4 text-sm font-semibold text-primary-foreground"
      >
        <MapPin className="size-4" />
        {t.bar.visit}
      </a>
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 bg-background py-4 text-sm font-semibold text-primary"
      >
        <Phone className="size-4" />
        {t.bar.call}
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background pb-14 md:pb-0">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Products />
        <Proof />
        <Process />
        <Visit />
        <QuoteForm />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </div>
  );
}

export default Index;
