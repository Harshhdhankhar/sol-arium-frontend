import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";

const shopLinks = [
  { label: "New Arrivals", href: "/shop" },
  { label: "Best Sellers", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Find Your Fit", href: "/foot-problems" },
];

const supportLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Shipping", href: "/contact" },
  { label: "Returns", href: "/contact" },
  { label: "Size Guide", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "#" },

  { label: "Twitter / X", href: "#" },
  { label: "Pinterest", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-noir text-bone">
      <div className="container grid grid-cols-1 gap-16 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <Image src="/logo.png" alt="Sole Arium" width={752} height={332} className="h-16 w-auto md:h-20" priority />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone/50">
Premium footwear for a life in motion. Designed in small studios,
produced in limited editions, built to last.
          </p>
          <div className="mt-10 max-w-sm">
            <p className="eyebrow mb-4 text-bone/40">Follow the drops</p>
            <NewsletterForm variant="dark" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 md:col-span-7 md:grid-cols-3 md:gap-6">
          <div>
            <p className="eyebrow mb-6 text-bone/40">Explore</p>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor="pointer"
                    className="link-underline text-sm text-bone/80 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6 text-bone/40">Shop</p>
            <ul className="space-y-3.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    data-cursor="pointer"
                    className="link-underline text-sm text-bone/80 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6 text-bone/40">Help</p>
            <ul className="space-y-3.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    data-cursor="pointer"
                    className="link-underline text-sm text-bone/80 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="container flex flex-col items-center justify-between gap-6 py-8 text-xs uppercase tracking-widest text-bone/40 md:flex-row">
          <span>&copy; {new Date().getFullYear()} Sole Arium</span>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                data-cursor="pointer"
                className="transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
