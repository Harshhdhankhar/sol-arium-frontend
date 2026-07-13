"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { featured } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";
import { useStore } from "@/lib/store";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, RevealText } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FeaturedDrop() {
  const [hovered, setHovered] = useState(false);
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const saved = isWishlisted(featured.slug);

  const handleAdd = () => {
    addToCart(featured);
  };

  return (
    <section className="section">
      <div className="container">
        <Reveal className="mb-14 flex items-end justify-between md:mb-20">
          <div>
            <span className="eyebrow mb-4 block">Featured Drop</span>
            <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
              The Defining Silhouette
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div
            className="group relative aspect-[4/5] overflow-hidden bg-paper-soft md:col-span-7 ring-1 ring-transparent transition-all duration-300 hover:ring-gold/15"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className={cn(
                "object-cover transition-all duration-[1200ms] ease-premium",
                hovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
              )}
            />
            <Image
              src={featured.hoverImage}
              alt={`${featured.name} — profile view`}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className={cn(
                "object-cover transition-all duration-[1200ms] ease-premium",
                hovered ? "scale-100 opacity-100" : "scale-105 opacity-0"
              )}
            />
            {featured.badge && (
              <span className="absolute left-6 top-6 bg-gold px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
                {featured.badge}
              </span>
            )}
          </div>

          <div className="md:col-span-5 md:pl-6 lg:pl-10">
            <p className="eyebrow mb-3 text-ink-muted">{featured.line}</p>
            <h3 className="font-display text-5xl tracking-editorial md:text-6xl">
              <RevealText text={featured.name} />
            </h3>
            <p className="mt-5 text-2xl text-ink-muted">{formatPrice(featured.price)}</p>

            <p className="mt-8 max-w-sm text-pretty leading-relaxed text-ink-muted">
Refined through countless iterations. Full-grain Italian leather, a hand-stitched
gold accent, and a sole compound tuned for all-day comfort.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <MagneticButton variant="solid" size="lg" onClick={handleAdd} className="flex-1">
                Reserve
              </MagneticButton>
              <motion.button
                onClick={() => toggleWishlist(featured)}
                aria-label={saved ? "Remove from saved" : "Save to your list"}
                data-cursor="pointer"
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border transition-colors",
                  saved ? "border-gold bg-gold/10" : "border-line hover:border-ink"
                )}
              >
                <Heart
                  className={cn("h-5 w-5", saved && "fill-gold text-gold")}
                  strokeWidth={1.5}
                />
              </motion.button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
