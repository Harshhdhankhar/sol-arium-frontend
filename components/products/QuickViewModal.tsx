"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import type { Product } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";
import { useStore } from "@/lib/store";

const SIZES = [7, 8, 9, 9.5, 10, 10.5, 11, 12];
const EASE = [0.16, 1, 0.3, 1] as const;

export function QuickViewModal({
  product,
  open,
  onClose,
}: {
  product: Product;
  open: boolean;
  onClose: () => void;
}) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [size, setSize] = useState<number | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const saved = isWishlisted(product.slug);

  const handleAdd = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    addToCart(product);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[92] bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Quick view — ${product.name}`}
            className="fixed inset-x-4 top-1/2 z-[93] mx-auto max-w-3xl -translate-y-1/2 overflow-hidden rounded-2xl bg-paper sm:inset-x-8"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <button
              onClick={onClose}
              aria-label="Close quick view"
              data-cursor="pointer"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative aspect-[4/5] bg-paper-soft sm:aspect-auto">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="max-h-[80vh] overflow-y-auto p-7 sm:p-9">
                <p className="text-xs uppercase tracking-wide text-ink-faint">{product.line}</p>
                <p className="mt-1.5 font-display text-3xl tracking-editorial">{product.name}</p>
                <p className="mt-2 text-lg text-ink-muted">{formatPrice(product.price)}</p>
                <p className="mt-1 text-sm text-ink-muted">{product.colorway}</p>

                <div className="mt-7">
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="eyebrow text-ink-faint">Select Size (US)</span>
                    {sizeError && <span className="text-[11px] text-gold-deep">Select a size</span>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SIZES.map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          setSize(s);
                          setSizeError(false);
                        }}
                        data-cursor="pointer"
                        className={cn(
                          "flex h-10 min-w-10 items-center justify-center rounded-full border px-2.5 text-sm transition-colors",
                          size === s ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    onClick={handleAdd}
                    data-cursor="pointer"
                    className="h-12 flex-1 rounded-full bg-ink text-[13px] font-medium text-paper transition-colors hover:bg-ink-soft"
                  >
                    Add to Bag
                  </button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    aria-label={saved ? "Remove from saved" : "Save for later"}
                    data-cursor="pointer"
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors",
                      saved ? "border-gold bg-gold/10" : "border-line hover:border-ink"
                    )}
                  >
                    <Heart className={cn("h-4 w-4", saved && "fill-gold text-gold")} strokeWidth={1.5} />
                  </button>
                </div>

                <Link
                  href="/shop"
                  onClick={onClose}
                  data-cursor="pointer"
                  className="link-underline mt-6 block text-center text-sm text-ink-muted"
                >
                  View Full Collection
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
