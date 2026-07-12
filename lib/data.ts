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
  },
];

export const hero = {
  eyebrow: "Drop 04 — Available Now",
  heading: ["Move", "Without", "Limits"],
  copy:
    "Considered silhouettes built from full-grain leather and recycled technical knit — designed in small studios, produced in limited runs.",
  image: img("1600185365483-26d7a4cc7519", 1800),
  floatImage: img("1595950653106-6c9ebd614d3a", 900),
};

export const featured: Product = {
  slug: "arium-one-bone",
  name: "Arium One — Bone",
  line: "Drop 04 · The Signature Silhouette",
  price: 240,
  colorway: "Bone / Gold",
  category: "Low",
  image: img("1600185365483-26d7a4cc7519", 1800),
  hoverImage: img("1595950653106-6c9ebd614d3a", 1800),
  badge: "Featured Drop",
};

export const story = {
  eyebrow: "The Craft",
  heading: "Built From The Ground Up",
  image: img("1552346154-21d32810aba3", 1920),
  lead:
    "Every Sole Arium silhouette begins on a workbench, not a spreadsheet. A last is carved, worn, corrected, and carved again — sometimes for a year — before a single unit leaves the studio.",
  quote:
    "We don't chase seasons. We chase the version of the shoe that doesn't need changing.",
  quoteAttribution: "Founder's Note, Studio 04",
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
      "Architectural silhouettes cut in bone, ash and warm stone. Built to stand still and to move.",
    image: img("1600185365483-26d7a4cc7519", 1600),
  },
  {
    slug: "nocturne",
    title: "Nocturne",
    season: "FW / 25",
    count: 9,
    description:
      "A study in darkness — onyx leather, matte suede and single strokes of amber.",
    image: img("1542291026-7eec264c27ff", 1600),
  },
  {
    slug: "meridian",
    title: "Meridian",
    season: "Core",
    count: 15,
    description:
      "The everyday line. Refined proportions engineered for the length of a city day.",
    image: img("1606107557195-0e29a4b5b4aa", 1600),
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

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The most considered pair I own. It disappears on the foot and lets everything else speak.",
    author: "Ada Morau",
    role: "Creative Director, Berlin",
  },
  {
    quote:
      "Sole Arium understands restraint. Nothing shouts, yet everything is unmistakable.",
    author: "Kenji Alvarez",
    role: "Architect, Tokyo",
  },
  {
    quote:
      "I've worn them for a year straight. They've aged like an object that was meant to be kept.",
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
      "Full-grain leathers and recycled technical knits, selected for how they age, not just how they arrive.",
  },
  {
    index: "02",
    title: "Designed for Everyday",
    description:
      "Silhouettes engineered to move from studio to street without a single compromise in form.",
  },
  {
    index: "03",
    title: "Built for Comfort",
    description:
      "A proprietary sole compound tuned across eighteen months of wear testing for all-day support.",
  },
  {
    index: "04",
    title: "Crafted to Last",
    description:
      "Assembled by hand in limited runs, finished to a standard that rewards years, not seasons.",
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
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];
