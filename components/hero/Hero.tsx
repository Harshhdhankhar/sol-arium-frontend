"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { hero } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText, Reveal } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relX * 34);
    y.set(relY * 34);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col overflow-hidden pt-28 md:pt-32"
    >
      <div className="container grid flex-1 grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-6">
        <div className="order-2 md:order-1 md:col-span-6 lg:col-span-6">
          <Reveal>
            <span className="eyebrow mb-6 flex items-center gap-2 text-ink-muted">
              <span className="h-1 w-1 rounded-full bg-gold" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <h1 className="font-display text-[16vw] leading-[0.86] tracking-tightest text-ink sm:text-[13vw] md:text-[6.4vw] lg:text-[6vw]">
            {hero.heading.map((line, i) => (
              <RevealText key={line} as="span" text={line} delay={0.1 + i * 0.12} className="block" />
            ))}
          </h1>

          <Reveal delay={0.6} className="mt-8 max-w-md md:mt-10">
            <p className="text-pretty text-base leading-relaxed text-ink-muted md:text-lg">
              {hero.copy}
            </p>
          </Reveal>

          <Reveal delay={0.75} className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
            <MagneticButton href="/collections" variant="solid" size="lg">
              Explore Collection
            </MagneticButton>
            <MagneticButton href="/shop" variant="outline" size="lg">
              Latest Drop
            </MagneticButton>
          </Reveal>
        </div>

        <div className="relative order-1 md:order-2 md:col-span-6 lg:col-span-6">
          <motion.div
            style={{ x: springX, y: springY }}
            className="relative mx-auto aspect-[4/5] w-[78%] max-w-md md:w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
              className="relative h-full w-full overflow-hidden rounded-[2px] bg-paper-soft"
            >
              <Image
                src={hero.image}
                alt="Sole Arium signature silhouette"
                fill
                priority
                sizes="(min-width: 768px) 42vw, 80vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.9 }}
              className="absolute -bottom-8 -left-8 hidden w-40 rounded-[2px] bg-paper p-3 shadow-[0_20px_60px_-20px_rgba(17,17,17,0.25)] sm:block md:-left-12 md:w-48"
            >
              <div className="relative aspect-square overflow-hidden bg-paper-soft">
                <Image
                  src={hero.floatImage}
                  alt="Sole Arium detail"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                Arium One — Bone
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Reveal delay={1.1} className="relative border-t border-line">
        <div className="container flex items-center justify-between py-5">
          <div className="no-scrollbar flex flex-1 gap-8 overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-8">
              {Array.from({ length: 2 }).map((_, i) => (
                <span
                  key={i}
                  className="flex shrink-0 items-center gap-8 text-[11px] font-medium uppercase tracking-widest text-ink-faint"
                >
                  {Array.from({ length: 4 }).map((__, j) => (
                    <span key={j} className="flex items-center gap-8">
                      Full-Grain Leather
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      Limited Runs
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      Handcrafted
                      <span className="h-1 w-1 rounded-full bg-gold" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden shrink-0 items-center gap-2 pl-8 text-ink-faint md:flex">
            <span className="eyebrow">Scroll</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" strokeWidth={1.5} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
