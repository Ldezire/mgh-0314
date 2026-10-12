/**
 * Single source of truth for the shop's real-world details.
 * Address, phone, rating and reviews come from the business's own
 * Google Maps listing — keep them in sync with it, never invent values.
 */
export const business = {
  name: "Mangalathu Glass House",
  nameMalayalam: "മംഗലത്ത് ഗ്ലാസ് ഹൗസ്",
  tagline: "Glass · Plywood · Paint · PVC Doors · Accessories",
  phone: "+91 97449 91031",
  phoneHref: "tel:+919744991031",
  whatsappHref: "https://wa.me/919744991031",
  addressLines: ["Nellollapoykayil Building", "Vellaramkunnu, Kerala 685535", "India"],
  addressOneLine: "Nellollapoykayil Building, Vellaramkunnu, Kerala 685535",
  plusCode: "J4M4+RV Vellaramkunnu, Kerala",
  coords: { lat: 9.634601, lng: 77.1072231 },
  mapsUrl:
    "https://www.google.com/maps/place/Mangalathu+Glass+House/@9.6344563,77.1073144,17z/data=!4m6!3m5!1s0x3b06549f5b712b81:0xd7dcca1b967ee23e!8m2!3d9.634601!4d77.1072231!16s%2Fg%2F11c1vn94mx?hl=en",
  reviewsUrl:
    "https://www.google.com/maps/place/Mangalathu+Glass+House/@9.6344563,77.1073144,17z/data=!4m18!1m9!3m8!1s0x3b06549f5b712b81:0xd7dcca1b967ee23e!2sMangalathu+Glass+House!8m2!3d9.634601!4d77.1072231!9m1!1b1!16s%2Fg%2F11c1vn94mx!3m7!1s0x3b06549f5b712b81:0xd7dcca1b967ee23e!8m2!3d9.634601!4d77.1072231!9m1!1b1!16s%2Fg%2F11c1vn94mx?hl=en",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=9.634601%2C77.1072231",
  hours: {
    opens: "Mon–Sat, 8:00 AM – 8:00 PM",
    note: "Closed on Sunday.",
  },
  rating: { value: "4.6", count: 9 },
  serviceArea: [
    "Vellaramkunnu",
    "Vandiperiyar",
    "Vandanmedu",
    "Upputhara",
    "Ayyappancoil",
    "Kattappana",
    "and the rest of Udumbanchola, Idukki",
  ],
} as const;

export const reviews = [
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
] as const;

export const products = [
  {
    name: "Glass",
    line: "Clear, frosted, tinted and toughened sheets — measured and cut to your opening.",
    image: "/images/glass-shower.jpg",
  },
  {
    name: "Plywood & Boards",
    line: "Marine, commercial and MDF grades for kitchens, wardrobes and shopfronts.",
    image: "/images/plywood.jpg",
  },
  {
    name: "Paint",
    line: "Interior and exterior finishes from brands you already know, tinted in store.",
    image: "/images/storefront-2.jpg",
  },
  {
    name: "PVC & UPVC Doors",
    line: "Waterproof doors for bathrooms and utility areas, with frames and fittings.",
    image: "/images/pvc-door.jpg",
  },
  {
    name: "Mirrors & Partitions",
    line: "Wardrobe mirrors, bevelled edges and glass partitions for homes and offices.",
    image: "/images/mirror.jpg",
  },
  {
    name: "Accessories & Hardware",
    line: "Hinges, channels, handles, adhesives, brushes — the small parts that finish a job.",
    image: "/images/hardware.jpg",
  },
] as const;

export const problems = [
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
] as const;

export const steps = [
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
] as const;
