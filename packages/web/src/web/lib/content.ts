/**
 * All page copy, in English and Malayalam.
 * Real-world facts (phone, address, links, rating) stay in business.ts —
 * only their *wording* is translated here.
 */

export type Lang = "en" | "ml";

export interface Content {
  htmlLang: string;
  langLabel: string;
  langSwitchLabel: string;
  header: {
    brand: string;
    place: string;
    navStock: string;
    navReviews: string;
    navQuote: string;
    call: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    ctaVisit: string;
    ctaQuote: string;
    onGoogle: string;
    reviewsWord: string;
    caption: string;
    imageAlt: string;
  };
  problem: {
    eyebrow: string;
    heading: string;
    imageAlt: string;
    items: { title: string; body: string }[];
  };
  products: {
    eyebrow: string;
    heading: string;
    note: string;
    items: { name: string; line: string }[];
  };
  proof: {
    eyebrow: string;
    heading: string;
    readAll: string;
    starsLabel: string;
    reviews: { name: string; meta: string; quote: string }[];
  };
  process: {
    eyebrow: string;
    heading: string;
    imageAlt: string;
    steps: { title: string; body: string }[];
  };
  visit: {
    eyebrow: string;
    heading: string;
    body: string;
    address: string;
    hours: string;
    hoursNote: string;
    directions: string;
    callShop: string;
    imageAlt: string;
  };
  quote: {
    eyebrow: string;
    heading: string;
    body: string;
    hurry: string;
    callLink: string;
    nameLabel: string;
    namePlaceholder: string;
    nameError: string;
    phoneLabel: string;
    phonePlaceholder: string;
    phoneError: string;
    phoneInvalid: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailError: string;
    emailInvalid: string;
    requirementLabel: string;
    optional: string;
    requirementPlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    failed: string;
  };
  footer: {
    tagline: string;
    contact: string;
    whatsapp: string;
    mapsListing: string;
    storeHours: string;
    addressLines: string[];
    plusCode: string;
    hours: string;
    hoursNote: string;
    serviceAreaTitle: string;
    serviceArea: string;
    directions: string;
    copyright: string;
    trade: string;
  };
  bar: { visit: string; call: string };
}

const en: Content = {
  htmlLang: "en",
  langLabel: "English",
  langSwitchLabel: "Change language",
  header: {
    brand: "Mangalathu Glass House",
    place: "Vellaramkunnu, Idukki",
    navStock: "What we stock",
    navReviews: "Reviews",
    navQuote: "Get a quote",
    call: "Call",
  },
  hero: {
    eyebrow: "Glass · Plywood · Paint · PVC Doors",
    headline: "Crafting your dream home starts with the right materials.",
    body: "A single counter in Vellaramkunnu for the glass, plywood, paint, PVC doors and fittings your build needs — cut to size, priced plainly, handed over the same day.",
    ctaVisit: "Visit the store",
    ctaQuote: "Request a free quote",
    onGoogle: "on Google",
    reviewsWord: "reviews",
    caption: "Materials chosen well show up in every room.",
    imageAlt: "A calm, finished living room with large glass doors opening to a garden",
  },
  problem: {
    eyebrow: "The problem we solve",
    heading: "Buying materials shouldn't be the hard part of building.",
    imageAlt: "A craftsman measuring a timber frame by hand",
    items: [
      {
        title: "Four shops for one job",
        body: "Glass here, plywood there, paint somewhere else. We keep all of it under one roof, so a day of running around becomes one stop.",
      },
      {
        title: "Guesswork on measurements",
        body: "Bring the measurement or the old panel. Glass and boards are cut to size in store, so nothing has to be forced to fit at home.",
      },
      {
        title: "No straight answer on quality",
        body: "We tell you which grade suits a bathroom, a kitchen and a shopfront — and what it will honestly cost before you commit.",
      },
    ],
  },
  products: {
    eyebrow: "What we stock",
    heading: "Everything a room needs, from the frame to the final coat.",
    note: "Looking for something not listed? Ask at the counter — most items can be arranged within a day or two.",
    items: [
      {
        name: "Glass",
        line: "Clear, frosted, tinted and toughened sheets — measured and cut to your opening.",
      },
      {
        name: "Plywood & Boards",
        line: "Marine, commercial and MDF grades for kitchens, wardrobes and shopfronts.",
      },
      {
        name: "Paint",
        line: "Interior and exterior finishes from brands you already know, tinted in store.",
      },
      {
        name: "PVC & UPVC Doors",
        line: "Waterproof doors for bathrooms and utility areas, with frames and fittings.",
      },
      {
        name: "Mirrors & Partitions",
        line: "Wardrobe mirrors, bevelled edges and glass partitions for homes and offices.",
      },
      {
        name: "Accessories & Hardware",
        line: "Hinges, channels, handles, adhesives, brushes — the small parts that finish a job.",
      },
    ],
  },
  proof: {
    eyebrow: "What customers say",
    heading: "{rating} out of 5 on Google",
    readAll: "Read all {count} reviews on Google",
    starsLabel: "Five star review",
    reviews: [
      {
        name: "Ajitha Manoj",
        meta: "Local Guide · 23 reviews",
        quote:
          "Very good customer service. A nice shop with wide variety of glass, plywood and other furniture items.",
      },
      {
        name: "Arun Joseph",
        meta: "Local Guide · 169 reviews",
        quote: "The owner's customer-friendly approach is commendable.",
      },
      {
        name: "Manoj Manmadhan",
        meta: "Local Guide · 18 reviews",
        quote:
          "A very good home store with lots of selection of building materials, glass and furniture items.",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    heading: "Four steps from measurement to loaded vehicle.",
    imageAlt: "A wood and glass partition in a finished home interior",
    steps: [
      {
        title: "Tell us what you're building",
        body: "Walk in, call, or send the form with your measurements and a photo if you have one.",
      },
      {
        title: "We price it clearly",
        body: "You get quantities, grades and a total — with the cheaper option named if there is one.",
      },
      {
        title: "Cut, tinted and packed",
        body: "Glass cut, paint tinted, boards and fittings set aside and packed for the trip.",
      },
      {
        title: "Collect or send your vehicle",
        body: "Pick it up at the counter, or send your vehicle and we'll load it ready to go.",
      },
    ],
  },
  visit: {
    eyebrow: "Come and see it",
    heading: "The whole list, over one counter.",
    body: "Bring your measurements — or the old panel — and walk out with the glass cut, the paint tinted and the fittings counted. No appointment needed.",
    address: "Nellollapoykayil Building, Vellaramkunnu, Kerala 685535",
    hours: "Mon–Sat, 8:00 AM – 8:00 PM",
    hoursNote: "Closed on Sunday.",
    directions: "Get directions",
    callShop: "Call the shop",
    imageAlt:
      "The Mangalathu Glass House shopfront in Vellaramkunnu, its signboard above the counter and plywood stacked at the entrance",
  },
  quote: {
    eyebrow: "Request a quote",
    heading: "Send your list. We'll price it and call you back.",
    body: "Quotes are free, and there's no obligation to buy. Most requests are answered the same working day.",
    hurry: "In a hurry?",
    callLink: "Call {phone}",
    nameLabel: "Your name",
    namePlaceholder: "Full name",
    nameError: "Please enter your name",
    phoneLabel: "Phone",
    phonePlaceholder: "10-digit mobile number",
    phoneError: "Please enter your phone number",
    phoneInvalid: "Please enter a valid phone number",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    emailError: "Please enter your email",
    emailInvalid: "Please enter a valid email",
    requirementLabel: "What do you need?",
    optional: "(optional)",
    requirementPlaceholder:
      "e.g. 5mm clear glass, 2 panels 900 × 1200 mm, plus a PVC bathroom door",
    submit: "Request a free Quote",
    sending: "Sending…",
    successTitle: "Request received.",
    successBody:
      "Thank you — your details are with the shop. We'll get back to you on the number you gave, usually the same working day.",
    sendAnother: "Send another request",
    failed: "Something went wrong sending the form. Please call {phone} instead.",
  },
  footer: {
    tagline: "Glass · Plywood · Paint · PVC Doors · Accessories",
    contact: "Contact",
    whatsapp: "WhatsApp",
    mapsListing: "Google Maps listing",
    storeHours: "Store & hours",
    addressLines: ["Nellollapoykayil Building", "Vellaramkunnu, Kerala 685535", "India"],
    plusCode: "J4M4+RV Vellaramkunnu, Kerala",
    hours: "Mon–Sat, 8:00 AM – 8:00 PM",
    hoursNote: "Closed on Sunday.",
    serviceAreaTitle: "Service area",
    serviceArea:
      "Vellaramkunnu · Vandiperiyar · Vandanmedu · Upputhara · Ayyappancoil · Kattappana · and the rest of Udumbanchola, Idukki",
    directions: "Get directions",
    copyright: "© {year} Mangalathu Glass House. Vellaramkunnu, Idukki, Kerala.",
    trade: "Trader & dealer — glass, plywood, paint, PVC doors and accessories.",
  },
  bar: { visit: "Visit the store", call: "Call" },
};

const ml: Content = {
  htmlLang: "ml",
  langLabel: "മലയാളം",
  langSwitchLabel: "ഭാഷ മാറ്റുക",
  header: {
    brand: "മംഗലത്ത് ഗ്ലാസ് ഹൗസ്",
    place: "വെള്ളാരംകുന്ന്, ഇടുക്കി",
    navStock: "ഞങ്ങളുടെ സ്റ്റോക്ക്",
    navReviews: "അഭിപ്രായങ്ങൾ",
    navQuote: "ക്വട്ടേഷൻ",
    call: "വിളിക്കൂ",
  },
  hero: {
    eyebrow: "ഗ്ലാസ് · പ്ലൈവുഡ് · പെയിന്റ് · പി.വി.സി. വാതിലുകൾ",
    headline: "സ്വപ്നഭവനം തുടങ്ങുന്നത് ശരിയായ സാമഗ്രികളിൽ നിന്നാണ്.",
    body: "ഗ്ലാസ്, പ്ലൈവുഡ്, പെയിന്റ്, പി.വി.സി. വാതിലുകൾ, ഫിറ്റിംഗ്സ് — നിർമ്മാണത്തിന് വേണ്ടതെല്ലാം വെള്ളാരംകുന്നിലെ ഒരേ കൗണ്ടറിൽ. അളവിന് മുറിച്ച്, വില വ്യക്തമായി പറഞ്ഞ്, അതേ ദിവസം കൈയിൽ.",
    ctaVisit: "കടയിലേക്ക് വരൂ",
    ctaQuote: "സൗജന്യ ക്വട്ടേഷൻ ചോദിക്കൂ",
    onGoogle: "ഗൂഗിളിൽ",
    reviewsWord: "അഭിപ്രായങ്ങൾ",
    caption: "നന്നായി തിരഞ്ഞെടുത്ത സാമഗ്രികൾ എല്ലാ മുറിയിലും തെളിഞ്ഞു കാണും.",
    imageAlt: "പൂന്തോട്ടത്തിലേക്ക് തുറക്കുന്ന വലിയ ഗ്ലാസ് വാതിലുകളുള്ള, പണി പൂർത്തിയായ സ്വീകരണമുറി",
  },
  problem: {
    eyebrow: "ഞങ്ങൾ പരിഹരിക്കുന്ന പ്രശ്നം",
    heading: "സാമഗ്രികൾ വാങ്ങുന്നതാകരുത് നിർമ്മാണത്തിലെ ഏറ്റവും വിഷമമുള്ള ഭാഗം.",
    imageAlt: "മരത്തിന്റെ ഫ്രെയിം കൈകൊണ്ട് അളക്കുന്ന ഒരു പണിക്കാരൻ",
    items: [
      {
        title: "ഒരു പണിക്ക് നാല് കടകൾ",
        body: "ഗ്ലാസ് ഒരിടത്ത്, പ്ലൈവുഡ് മറ്റൊരിടത്ത്, പെയിന്റ് വേറൊരിടത്ത്. ഇവയെല്ലാം ഞങ്ങൾ ഒരേ കൂരയ്ക്ക് കീഴിൽ ഒരുക്കുന്നു — ഒരു ദിവസത്തെ ഓട്ടം ഒറ്റ കയറ്റമായി ചുരുങ്ങും.",
      },
      {
        title: "അളവിൽ ഊഹം",
        body: "അളവോ പഴയ പാളിയോ കൊണ്ടുവരൂ. ഗ്ലാസും ബോർഡുകളും കടയിൽ തന്നെ അളവിന് മുറിച്ചു തരും — വീട്ടിൽ ഒന്നും ബലം പിടിച്ച് ഫിറ്റ് ചെയ്യേണ്ടി വരില്ല.",
      },
      {
        title: "ഗുണനിലവാരത്തെപ്പറ്റി വ്യക്തമായ മറുപടിയില്ല",
        body: "ബാത്ത്‌റൂമിനും അടുക്കളയ്ക്കും കടമുറിക്കും ഏത് ഗ്രേഡ് ചേരുമെന്ന് ഞങ്ങൾ പറയും — വാങ്ങും മുൻപേ യഥാർത്ഥ വിലയും.",
      },
    ],
  },
  products: {
    eyebrow: "ഞങ്ങളുടെ സ്റ്റോക്ക്",
    heading: "ഫ്രെയിം മുതൽ അവസാന കോട്ട് വരെ, ഒരു മുറിക്ക് വേണ്ടതെല്ലാം.",
    note: "പട്ടികയിൽ ഇല്ലാത്തത് വേണോ? കൗണ്ടറിൽ ചോദിക്കൂ — മിക്ക സാധനങ്ങളും ഒന്നോ രണ്ടോ ദിവസത്തിനുള്ളിൽ എത്തിക്കാം.",
    items: [
      {
        name: "ഗ്ലാസ്",
        line: "ക്ലിയർ, ഫ്രോസ്റ്റഡ്, ടിന്റഡ്, ടഫൻഡ് ഷീറ്റുകൾ — നിങ്ങളുടെ അളവിന് മുറിച്ചു തരും.",
      },
      {
        name: "പ്ലൈവുഡും ബോർഡുകളും",
        line: "അടുക്കള, വാർഡ്രോബ്, കടമുറി എന്നിവയ്ക്ക് മറൈൻ, കമേഴ്‌സ്യൽ, എം.ഡി.എഫ്. ഗ്രേഡുകൾ.",
      },
      {
        name: "പെയിന്റ്",
        line: "പരിചിതമായ ബ്രാൻഡുകളുടെ അകത്തും പുറത്തുമുള്ള ഫിനിഷുകൾ, കടയിൽ തന്നെ ടിന്റ് ചെയ്യും.",
      },
      {
        name: "പി.വി.സി., യു.പി.വി.സി. വാതിലുകൾ",
        line: "ബാത്ത്‌റൂമിനും വർക്ക് ഏരിയയ്ക്കും വെള്ളം കേടാക്കാത്ത വാതിലുകൾ, ഫ്രെയിമും ഫിറ്റിംഗ്സും സഹിതം.",
      },
      {
        name: "കണ്ണാടികളും പാർട്ടീഷനുകളും",
        line: "വാർഡ്രോബ് കണ്ണാടികൾ, ബെവൽ എഡ്ജ്, വീടുകൾക്കും ഓഫീസുകൾക്കും ഗ്ലാസ് പാർട്ടീഷനുകൾ.",
      },
      {
        name: "ആക്സസറികളും ഹാർഡ്‌വെയറും",
        line: "ഹിഞ്ച്, ചാനൽ, ഹാൻഡിൽ, പശ, ബ്രഷ് — പണി പൂർത്തിയാക്കുന്ന ചെറിയ സാധനങ്ങൾ.",
      },
    ],
  },
  proof: {
    eyebrow: "ഉപഭോക്താക്കൾ പറയുന്നത്",
    heading: "ഗൂഗിളിൽ 5-ൽ {rating}",
    readAll: "ഗൂഗിളിലെ {count} അഭിപ്രായങ്ങളും വായിക്കൂ",
    starsLabel: "അഞ്ച് നക്ഷത്ര അഭിപ്രായം",
    reviews: [
      {
        name: "അജിത മനോജ്",
        meta: "ലോക്കൽ ഗൈഡ് · 23 അഭിപ്രായങ്ങൾ",
        quote:
          "വളരെ നല്ല ഉപഭോക്തൃ സേവനം. ഗ്ലാസ്, പ്ലൈവുഡ്, മറ്റ് ഫർണിച്ചർ സാധനങ്ങൾ എന്നിവയുടെ വലിയ ശേഖരമുള്ള നല്ലൊരു കട.",
      },
      {
        name: "അരുൺ ജോസഫ്",
        meta: "ലോക്കൽ ഗൈഡ് · 169 അഭിപ്രായങ്ങൾ",
        quote: "ഉടമയുടെ ഉപഭോക്തൃ സൗഹൃദ സമീപനം പ്രശംസനീയമാണ്.",
      },
      {
        name: "മനോജ് മന്മഥൻ",
        meta: "ലോക്കൽ ഗൈഡ് · 18 അഭിപ്രായങ്ങൾ",
        quote:
          "നിർമ്മാണ സാമഗ്രികൾ, ഗ്ലാസ്, ഫർണിച്ചർ സാധനങ്ങൾ എന്നിവയിൽ ഏറെ തിരഞ്ഞെടുപ്പുള്ള വളരെ നല്ല ഹോം സ്റ്റോർ.",
      },
    ],
  },
  process: {
    eyebrow: "എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    heading: "അളവ് മുതൽ വാഹനത്തിൽ കയറ്റുന്നത് വരെ നാല് ഘട്ടം.",
    imageAlt: "പണി പൂർത്തിയായ വീടിനുള്ളിലെ മരവും ഗ്ലാസും ചേർന്ന പാർട്ടീഷൻ",
    steps: [
      {
        title: "എന്ത് പണിയുന്നു എന്ന് പറയൂ",
        body: "കടയിൽ വരൂ, വിളിക്കൂ, അല്ലെങ്കിൽ അളവുകളും — ഉണ്ടെങ്കിൽ ഒരു ഫോട്ടോയും — ഫോമിൽ അയക്കൂ.",
      },
      {
        title: "വില വ്യക്തമായി പറയും",
        body: "അളവ്, ഗ്രേഡ്, ആകെ തുക — വില കുറഞ്ഞ മാർഗമുണ്ടെങ്കിൽ അതും ഞങ്ങൾ പറയും.",
      },
      {
        title: "മുറിച്ച്, ടിന്റ് ചെയ്ത്, പാക്ക് ചെയ്യും",
        body: "ഗ്ലാസ് മുറിച്ച്, പെയിന്റ് ടിന്റ് ചെയ്ത്, ബോർഡും ഫിറ്റിംഗ്സും യാത്രയ്ക്ക് തയ്യാറായി പാക്ക് ചെയ്യും.",
      },
      {
        title: "കൈപ്പറ്റൂ, അല്ലെങ്കിൽ വാഹനം അയക്കൂ",
        body: "കൗണ്ടറിൽ നിന്ന് എടുക്കാം, അല്ലെങ്കിൽ വാഹനം അയച്ചാൽ ഞങ്ങൾ കയറ്റി വിട്ടുതരും.",
      },
    ],
  },
  visit: {
    eyebrow: "വന്നു കാണൂ",
    heading: "എല്ലാ സാധനവും ഒരേ കൗണ്ടറിൽ.",
    body: "അളവുകൾ — അല്ലെങ്കിൽ പഴയ പാളി — കൊണ്ടുവരൂ. ഗ്ലാസ് മുറിച്ച്, പെയിന്റ് ടിന്റ് ചെയ്ത്, ഫിറ്റിംഗ്സ് എണ്ണി വാങ്ങി മടങ്ങാം. മുൻകൂർ അപ്പോയ്ന്റ്മെന്റ് വേണ്ട.",
    address: "നെല്ലൊല്ലപ്പൊയ്കയിൽ ബിൽഡിംഗ്, വെള്ളാരംകുന്ന്, കേരളം 685535",
    hours: "തിങ്കൾ–ശനി, രാവിലെ 8:00 – രാത്രി 8:00",
    hoursNote: "ഞായറാഴ്ച അവധി.",
    directions: "വഴി കാണിക്കൂ",
    callShop: "കടയിലേക്ക് വിളിക്കൂ",
    imageAlt:
      "വെള്ളാരംകുന്നിലെ മംഗലത്ത് ഗ്ലാസ് ഹൗസിന്റെ കടമുഖം, കൗണ്ടറിന് മുകളിൽ ബോർഡും വാതിൽക്കൽ അടുക്കിവെച്ച പ്ലൈവുഡും",
  },
  quote: {
    eyebrow: "ക്വട്ടേഷൻ ചോദിക്കൂ",
    heading: "നിങ്ങളുടെ പട്ടിക അയക്കൂ. വില കണക്കാക്കി ഞങ്ങൾ തിരിച്ചു വിളിക്കാം.",
    body: "ക്വട്ടേഷൻ സൗജന്യമാണ്, വാങ്ങാൻ ബാധ്യതയുമില്ല. മിക്ക അഭ്യർത്ഥനകൾക്കും അതേ പ്രവൃത്തി ദിവസം തന്നെ മറുപടി നൽകും.",
    hurry: "തിരക്കിലാണോ?",
    callLink: "{phone} എന്ന നമ്പറിൽ വിളിക്കൂ",
    nameLabel: "നിങ്ങളുടെ പേര്",
    namePlaceholder: "പൂർണ്ണ പേര്",
    nameError: "പേര് നൽകുക",
    phoneLabel: "ഫോൺ",
    phonePlaceholder: "10 അങ്കി മൊബൈൽ നമ്പർ",
    phoneError: "ഫോൺ നമ്പർ നൽകുക",
    phoneInvalid: "ശരിയായ ഫോൺ നമ്പർ നൽകുക",
    emailLabel: "ഇമെയിൽ",
    emailPlaceholder: "you@example.com",
    emailError: "ഇമെയിൽ നൽകുക",
    emailInvalid: "ശരിയായ ഇമെയിൽ നൽകുക",
    requirementLabel: "എന്താണ് വേണ്ടത്?",
    optional: "(നിർബന്ധമല്ല)",
    requirementPlaceholder:
      "ഉദാ. 5mm ക്ലിയർ ഗ്ലാസ്, 900 × 1200 mm അളവിൽ 2 പാളി, ഒപ്പം ഒരു പി.വി.സി. ബാത്ത്‌റൂം വാതിൽ",
    submit: "സൗജന്യ ക്വട്ടേഷൻ ചോദിക്കൂ",
    sending: "അയക്കുന്നു…",
    successTitle: "അഭ്യർത്ഥന ലഭിച്ചു.",
    successBody:
      "നന്ദി — നിങ്ങളുടെ വിവരങ്ങൾ കടയിൽ എത്തി. നൽകിയ നമ്പറിൽ, സാധാരണ അതേ പ്രവൃത്തി ദിവസം തന്നെ ഞങ്ങൾ ബന്ധപ്പെടും.",
    sendAnother: "മറ്റൊരു അഭ്യർത്ഥന അയക്കൂ",
    failed: "ഫോം അയക്കുന്നതിൽ എന്തോ പ്രശ്നമുണ്ടായി. പകരം {phone} എന്ന നമ്പറിൽ വിളിക്കൂ.",
  },
  footer: {
    tagline: "ഗ്ലാസ് · പ്ലൈവുഡ് · പെയിന്റ് · പി.വി.സി. വാതിലുകൾ · ആക്സസറികൾ",
    contact: "ബന്ധപ്പെടാൻ",
    whatsapp: "വാട്ട്‌സ്ആപ്പ്",
    mapsListing: "ഗൂഗിൾ മാപ്സ് ലിസ്റ്റിംഗ്",
    storeHours: "കടയും സമയവും",
    addressLines: ["നെല്ലൊല്ലപ്പൊയ്കയിൽ ബിൽഡിംഗ്", "വെള്ളാരംകുന്ന്, കേരളം 685535", "ഇന്ത്യ"],
    plusCode: "J4M4+RV വെള്ളാരംകുന്ന്, കേരളം",
    hours: "തിങ്കൾ–ശനി, രാവിലെ 8:00 – രാത്രി 8:00",
    hoursNote: "ഞായറാഴ്ച അവധി.",
    serviceAreaTitle: "സേവന മേഖല",
    serviceArea:
      "വെള്ളാരംകുന്ന് · വണ്ടിപ്പെരിയാർ · വണ്ടൻമേട് · ഉപ്പുതറ · അയ്യപ്പൻകോവിൽ · കട്ടപ്പന · ഉടുമ്പൻചോല, ഇടുക്കിയിലെ മറ്റ് സ്ഥലങ്ങൾ",
    directions: "വഴി കാണിക്കൂ",
    copyright: "© {year} മംഗലത്ത് ഗ്ലാസ് ഹൗസ്. വെള്ളാരംകുന്ന്, ഇടുക്കി, കേരളം.",
    trade: "വ്യാപാരിയും ഡീലറും — ഗ്ലാസ്, പ്ലൈവുഡ്, പെയിന്റ്, പി.വി.സി. വാതിലുകൾ, ആക്സസറികൾ.",
  },
  bar: { visit: "കടയിലേക്ക് വരൂ", call: "വിളിക്കൂ" },
};

export const content: Record<Lang, Content> = { en, ml };

/** Fills {placeholders} in a copy string. */
export function fill(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template,
  );
}
