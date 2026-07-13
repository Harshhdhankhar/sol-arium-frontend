/**
 * Central content model for SOLE ARIUM.
 * All imagery is centralised here so art direction can be swapped in one place.
 * Photography sourced from Unsplash (stable long-form photo IDs).
 */

const UNSPLASH = "https://images.unsplash.com/photo-";

/** Build a responsive Unsplash URL. */
export function img(id: string, w = 1400, q = 80) {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export type Product = {
  slug: string;
  name: string;
  line: string;
  price: number;
  colorway: string;
  category: "Low" | "Mid" | "High" | "Runner";
  image: string;
  hoverImage: string;
  badge?: string;
  /** Local product-detail imagery (e.g. "/products/arium-one-bone/01.jpg").
   *  Optional — the PDP gallery falls back to [image, hoverImage] when absent. */
  gallery?: string[];
  /** Short benefit copy shown on the PDP purchase panel. */
  description?: string;
  /** Compact highlight chips shown on the PDP purchase panel. */
  highlights?: string[];
  /** Materials accordion copy on the PDP. */
  materials?: string;
  /** Fit accordion copy on the PDP. */
  fit?: string;
  availability?: "In Stock" | "Low Stock" | "Pre-Order" | "Sold Out";
};

export const products: Product[] = [
  {
    slug: "arium-one-bone",
    name: "Arium One",
    line: "Signature Low",
    price: 240,
    colorway: "Bone / Gold",
    category: "Low",
    image: img("1595950653106-6c9ebd614d3a"),
    hoverImage: img("1600185365483-26d7a4cc7519"),
    badge: "New",
    description:
      "Every step, considered. A low-profile silhouette with contoured comfort and a subtle gold accent.",
    highlights: ["Contoured footbed", "Gold accent stripe", "Lightweight recycled midsole"],
    materials:
      "Plush recycled foam footbed cradles your foot with every step. Bone leather upper selected for softness and breathability. Lightweight outsole designed for flexibility and grip on any surface.",
    fit: "True to size. The Arium One fits true across most feet — if you're between sizes, size down for a secure low-top feel.",
    availability: "In Stock",
  },
  {
    slug: "meridian-mid-onyx",
    name: "Meridian Mid",
    line: "Structured Mid",
    price: 285,
    colorway: "Onyx / Ash",
    category: "Mid",
    image: img("1606107557195-0e29a4b5b4aa"),
    hoverImage: img("1608231387042-66d1773070a5"),
    description:
      "Extended comfort for long days on your feet. A structured mid-top with support where you need it most.",
    highlights: ["Targeted ankle support", "Plush cushioning throughout", "All-day comfort"],
    materials:
      "Onyx nubuck with ash suede overlays for structure without stiffness. Plush foam collar reduces pressure around the ankle. Cushioned insole supports every hour on concrete.",
    fit: "True to size with a slightly roomier midfoot. Ideal if you prefer space to breathe without losing secure support.",
    availability: "In Stock",
  },
  {
    slug: "vector-runner-slate",
    name: "Vector Runner",
    line: "Performance Runner",
    price: 260,
    colorway: "Slate / Ivory",
    category: "Runner",
    image: img("1552346154-21d32810aba3"),
    hoverImage: img("1584735175315-9d5df23860e6"),
    badge: "Drop 04",
    description:
      "Designed to carry you farther with less fatigue. A responsive runner built for effortless movement.",
    highlights: ["Energy-return foam", "Breathable knit upper", "Reflective detailing"],
    materials:
      "Breathable knit upper moves with your foot, not against it. Dual-density foam returns energy with every stride — tuned for a smooth, low-fatigue ride across pavement and track.",
    fit: "Slightly narrow through the forefoot. Wide-footed runners may prefer sizing up half a size for a more comfortable fit.",
    availability: "Pre-Order",
  },
  {
    slug: "atlas-high-noir",
    name: "Atlas High",
    line: "Elevated High",
    price: 320,
    colorway: "Noir / Amber",
    category: "High",
    image: img("1542291026-7eec264c27ff"),
    hoverImage: img("1525966222134-fcfa99b8ae77"),
    description:
      "Confidence at every elevation. A supportive high-top that moves with you, finished in matte noir.",
    highlights: ["Secure padded collar", "Full-range ankle support", "Amber accent detail"],
    materials:
      "Matte leather upper wraps the foot in structure without sacrificing flexibility. Padded ankle collar provides secure support while allowing natural movement. Hand-applied amber accent.",
    fit: "True to size. The high collar sits snugly around the ankle — consider half a size up if you wear thicker socks.",
    availability: "In Stock",
  },
  {
    slug: "arium-one-sand",
    name: "Arium One",
    line: "Signature Low",
    price: 240,
    colorway: "Sand / Cream",
    category: "Low",
    image: img("1595341888016-a392ef81b7de"),
    hoverImage: img("1600185365483-26d7a4cc7519"),
    description:
      "The same personalized comfort, now in a warmer palette. Sand and cream, built for everyday ease.",
    highlights: ["Contoured footbed", "Cream leather lining", "Lightweight recycled midsole"],
    materials:
      "Sand leather upper with a cream lining for a softer feel against the skin. Contoured recycled foam footbed provides all-day comfort from morning to night.",
    fit: "True to size, identical last to Arium One — Bone / Gold.",
    availability: "In Stock",
  },
  {
    slug: "meridian-mid-clay",
    name: "Meridian Mid",
    line: "Structured Mid",
    price: 285,
    colorway: "Clay / Bone",
    category: "Mid",
    image: img("1491553895911-0055eca6402d"),
    hoverImage: img("1606107557195-0e29a4b5b4aa"),
    badge: "Limited",
    description:
      "A limited edition of our most supportive mid-top, in warm clay and bone. Premium comfort, rare finish.",
    highlights: ["Targeted ankle support", "Limited edition colorway", "All-day cushioning"],
    materials:
      "Clay nubuck with bone suede overlays. Cushioned foam collar reduces pressure around the ankle during long days on your feet.",
    fit: "True to size with a slightly roomier midfoot, identical last to Meridian Mid — Onyx / Ash.",
    availability: "Low Stock",
  },
  {
    slug: "vector-runner-carbon",
    name: "Vector Runner",
    line: "Performance Runner",
    price: 260,
    colorway: "Carbon / Gold",
    category: "Runner",
    image: img("1560769629-975ec94e6a86"),
    hoverImage: img("1552346154-21d32810aba3"),
    description:
      "Effortless movement, reimagined in carbon and gold. The same responsive comfort, a darker expression.",
    highlights: ["Energy-return foam", "Breathable knit upper", "Reflective heel detail"],
    materials:
      "Breathable knit upper moves with your foot for natural flexibility. Dual-density foam returns energy with every stride for a smooth, low-fatigue ride.",
    fit: "Slightly narrow through the forefoot, identical last to Vector Runner — Slate / Ivory.",
    availability: "In Stock",
  },
  {
    slug: "atlas-high-fog",
    name: "Atlas High",
    line: "Elevated High",
    price: 320,
    colorway: "Fog / Steel",
    category: "High",
    image: img("1608231387042-66d1773070a5"),
    hoverImage: img("1542291026-7eec264c27ff"),
    description:
      "The Atlas High in fog and steel — cool, quiet, and built for comfortable movement at every step.",
    highlights: ["Secure padded collar", "Full-range ankle support", "Steel-toned hardware"],
    materials:
      "Matte leather upper with padded ankle collar for secure, comfortable support. Steel-toned hardware completes the refined silhouette.",
    fit: "True to size, identical last to Atlas High — Noir / Amber.",
    availability: "In Stock",
  },
];

export type LookbookShot = {
  id: string;
  caption: string;
  location: string;
  image: string;
  span: "tall" | "wide" | "regular";
};

export const lookbook: LookbookShot[] = [
  {
    id: "lb-1",
    caption: "Structure & Flow",
    location: "Studio Light",
    image: img("1606107557195-0e29a4b5b4aa", 1200),
    span: "tall",
  },
  {
    id: "lb-2",
    caption: "Silhouette Study",
    location: "Natural Light",
    image: img("1542291026-7eec264c27ff", 1200),
    span: "regular",
  },
  {
    id: "lb-3",
    caption: "On The Move",
    location: "City Streets",
    image: img("1595950653106-6c9ebd614d3a", 1200),
    span: "wide",
  },
  {
    id: "lb-4",
    caption: "Material Detail",
    location: "After Hours",
    image: img("1491553895911-0055eca6402d", 1200),
    span: "regular",
  },
  {
    id: "lb-5",
    caption: "Last & Leather",
    location: "Workbench",
    image: img("1525966222134-fcfa99b8ae77", 1200),
    span: "tall",
  },
];

export type JournalEntry = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
};

export const journal: JournalEntry[] = [
  {
    slug: "the-anatomy-of-a-silhouette",
    title: "The Anatomy of a Silhouette",
    category: "Craft",
    date: "June 2026",
    readTime: "6 min",
    excerpt:
      "How a single last is refined across two hundred iterations before it earns the Arium name.",
    image: img("1595950653106-6c9ebd614d3a", 1200),
  },
  {
    slug: "movement-as-identity",
    title: "Movement as Identity",
    category: "Editorial",
    date: "May 2026",
    readTime: "4 min",
    excerpt:
      "A conversation on the space between performance and expression — and why the two are never separate.",
    image: img("1595341888016-a392ef81b7de", 1200),
  },
  {
    slug: "the-quiet-material",
    title: "The Quiet Material",
    category: "Materials",
    date: "April 2026",
    readTime: "5 min",
    excerpt:
      "Full-grain leather, recycled knit and a sole compound tuned over eighteen months of wear testing.",
    image: img("1491553895911-0055eca6402d", 1200),
  },
];

export const hero = {
  eyebrow: "Movement, Meet Craft",
  heading: ["Footwear Designed", "Around How You", "Move"],
  copy:
    "We begin with how you walk, stand, and move — then build a shoe around it. Premium materials, personalized comfort, limited runs.",
  image: img("1600185365483-26d7a4cc7519", 1800),
  floatImage: img("1595950653106-6c9ebd614d3a", 900),
};

export const featured: Product = {
  slug: "arium-one-bone",
  name: "Arium One — Bone",
  line: "Drop 04 · Built Around Your Stride",
  price: 240,
  colorway: "Bone / Gold",
  category: "Low",
  image: img("1600185365483-26d7a4cc7519", 1800),
  hoverImage: img("1595950653106-6c9ebd614d3a", 1800),
  badge: "Limited Release",
};

export const story = {
  eyebrow: "Our Method",
  heading: "Designed Around Your Movement",
  image: img("1552346154-21d32810aba3", 1920),
  lead:
    "We don't start with a sketch. We start with how you move — the way your foot lands, the hours you spend standing, the surfaces you cross. Every curve is shaped by understanding, not trends.",
  quote:
    "When a shoe moves with you, you forget you're wearing it.",
  quoteAttribution: "Founder, Sole Arium",
};

export type Collection = {
  slug: string;
  title: string;
  season: string;
  count: number;
  description: string;
  image: string;
};

export const collections: Collection[] = [
  {
    slug: "monument",
    title: "Monument",
    season: "SS / 26",
    count: 12,
    description:
      "Clean, architectural forms in bone, ash, and warm stone. Built for standing still and moving freely.",
    image: img("1600185365483-26d7a4cc7519", 1600),
  },
  {
    slug: "nocturne",
    title: "Nocturne",
    season: "FW / 25",
    count: 9,
    description:
      "A study in contrast — deep onyx, matte suede, and accents of amber. Serious comfort, serious style.",
    image: img("1542291026-7eec264c27ff", 1600),
  },
  {
    slug: "meridian",
    title: "Meridian",
    season: "Core",
    count: 15,
    description:
      "Everyday essentials, refined. Proportions built around how you move through a city day.",
    image: img("1606107557195-0e29a4b5b4aa", 1600),
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I forgot I was wearing them by day three. They just become part of how you move.",
    author: "Ada Morau",
    role: "Creative Director, Berlin",
  },
  {
    quote:
      "Finally, a shoe designed for people who spend all day standing and still want to look put together.",
    author: "Kenji Alvarez",
    role: "Architect, Tokyo",
  },
  {
    quote:
      "They adapt to how I walk, not the other way around. That makes all the difference.",
    author: "Noor El-Amin",
    role: "Photographer, London",
  },
];

export type Value = {
  index: string;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    index: "01",
    title: "Premium Materials",
    description:
      "Thoughtfully sourced materials selected for comfort, durability, and how gracefully they age beside you.",
  },
  {
    index: "02",
    title: "Designed for Everyday",
    description:
      "Every silhouette is designed around real movement — from your morning commute to your evening studio session.",
  },
  {
    index: "03",
    title: "Built for Comfort",
    description:
      "Our sole compound is tuned for all-day wear. Support where you need it, flexibility where you move.",
  },
  {
    index: "04",
    title: "Crafted to Last",
    description:
      "Hand-assembled in limited runs. Finished to a standard that rewards years of movement, not seasons of trends.",
  },
];

export const instagram: string[] = [
  img("1600185365483-26d7a4cc7519", 800),
  img("1542291026-7eec264c27ff", 800),
  img("1608231387042-66d1773070a5", 800),
  img("1606107557195-0e29a4b5b4aa", 800),
  img("1584735175315-9d5df23860e6", 800),
  img("1595950653106-6c9ebd614d3a", 800),
  img("1560769629-975ec94e6a86", 800),
  img("1552346154-21d32810aba3", 800),
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Find Your Fit", href: "/foot-problems" },
  { label: "Contact", href: "/contact" },
  { label: "Journal", href: "/journal" },
];
