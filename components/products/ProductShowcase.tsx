"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { useMediaQuery, usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const pinEnabled = isDesktop && !reducedMotion;

  useLayoutEffect(() => {
    if (!pinEnabled) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(distance(), 1)}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.scrollTrigger?.kill();
    }, section);

    return () => ctx.revert();
  }, [pinEnabled]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink text-paper">
      <div className="container pt-24 md:pt-28">
        <Reveal className="flex items-end justify-between">
          <div>
            <span className="eyebrow mb-4 block text-paper/40">Showcase</span>
            <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
              Every Angle, <br className="hidden md:block" />
              Every Detail
            </h2>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="mt-14 flex w-max gap-6 overflow-x-auto px-6 pb-24 no-scrollbar snap-x snap-mandatory md:mt-20 md:gap-8 md:overflow-visible md:px-[max(1.5rem,calc((100vw-1440px)/2+3.5rem))] md:pb-32"
      >
        {products.map((product, i) => (
          <div
            key={product.slug}
            className="group relative w-[78vw] shrink-0 snap-start sm:w-[54vw] md:w-[30vw] lg:w-[26vw]"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-paper/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 768px) 28vw, 78vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 font-display text-sm text-paper/50">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-paper/40">
                  {product.line}
                </p>
                <p className="mt-1 font-display text-xl tracking-editorial">{product.name}</p>
              </div>
              <p className="shrink-0 text-sm text-paper/70">{formatPrice(product.price)}</p>
            </div>
          </div>
        ))}

        <div className="flex w-[78vw] shrink-0 snap-start flex-col items-start justify-center gap-6 sm:w-[54vw] md:w-[26vw]">
          <p className="font-display text-3xl leading-tight tracking-editorial">
            See the full range of silhouettes.
          </p>
          <MagneticButton href="/shop" variant="gold">
            Shop All
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
