import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";

const shopLinks = [
  { label: "New Arrivals", href: "/shop" },
  { label: "Best Sellers", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Journal", href: "/journal" },
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
    <footer className="bg-ink text-paper">
      <div className="container grid grid-cols-1 gap-16 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <Image src="/tp-removebg-preview.png" alt="Sole Arium" width={594} height={420} className="h-16 w-auto md:h-20" priority />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/50">
            Considered footwear for a life in motion. Designed in small studios,
            produced in limited runs, built to be kept.
          </p>
          <div className="mt-10 max-w-sm">
            <p className="eyebrow mb-4 text-paper/40">Join the list</p>
            <NewsletterForm variant="dark" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 md:col-span-7 md:grid-cols-3 md:gap-6">
          <div>
            <p className="eyebrow mb-6 text-paper/40">Navigate</p>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor="pointer"
                    className="link-underline text-sm text-paper/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6 text-paper/40">Shop</p>
            <ul className="space-y-3.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    data-cursor="pointer"
                    className="link-underline text-sm text-paper/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6 text-paper/40">Support</p>
            <ul className="space-y-3.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    data-cursor="pointer"
                    className="link-underline text-sm text-paper/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container flex flex-col items-center justify-between gap-6 py-8 text-xs uppercase tracking-widest text-paper/40 md:flex-row">
          <span>&copy; {new Date().getFullYear()} Sole Arium. All rights reserved.</span>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                data-cursor="pointer"
                className="transition-colors hover:text-paper"
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
