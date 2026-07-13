"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { collections, navLinks } from "@/lib/data";

export function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-full border-b border-line bg-paper/98 backdrop-blur-xl"
        >
          <div className="container py-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {collections.map((collection) => (
                <Link
                  key={collection.slug}
                  href="/collections"
                  onClick={onClose}
                  data-cursor="pointer"
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper-soft">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      sizes="360px"
                      className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-ink-faint">
                        {collection.season}
                      </p>
                      <p className="mt-1 font-display text-xl tracking-editorial">
                        {collection.title}
                      </p>
                    </div>
                    <ArrowRight
                      className="h-4 w-4 text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
                      strokeWidth={1.5}
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
              <p className="max-w-md text-sm text-ink-muted">
                Three collections, one commitment to craft.
              </p>
              <Link
                href="/collections"
                onClick={onClose}
                data-cursor="pointer"
                className="link-underline shrink-0 text-sm font-medium"
              >
                All Collections
              </Link>
            </div>

            <div className="mt-6 border-t border-line pt-6">
              <nav className="flex gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    data-cursor="pointer"
                    className="link-underline text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
