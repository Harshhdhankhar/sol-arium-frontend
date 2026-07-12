"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { lookbook } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

const spanClass: Record<(typeof lookbook)[number]["span"], string> = {
  tall: "row-span-2 md:aspect-[3/4.4]",
  wide: "md:col-span-2 aspect-[16/10] md:aspect-[16/9]",
  regular: "aspect-[4/5]",
};

export function Lookbook() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="section bg-paper-soft">
      <div className="container">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <span className="eyebrow mb-4 block">Lookbook</span>
            <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
              Field Notes, SS/26
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-ink-muted">
            Shot across five cities — a campaign about movement, not posture.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:auto-rows-[16rem] md:grid-cols-4 md:gap-5">
          {lookbook.map((shot, i) => (
            <motion.div
              key={shot.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 4) * 0.07 }}
              className={cn("relative overflow-hidden bg-ink/5", spanClass[shot.span])}
              onMouseEnter={() => setHoveredId(shot.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={shot.image}
                alt={`${shot.caption} — ${shot.location}`}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
                style={{
                  transform: hoveredId === shot.id ? "scale(1.06)" : "scale(1)",
                  transition: "transform 1.1s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div
                className="absolute bottom-4 left-4 text-paper opacity-0 transition-opacity duration-500"
                style={{ opacity: hoveredId === shot.id ? 1 : 0 }}
              >
                <p className="font-display text-sm italic">{shot.caption}</p>
                <p className="text-[11px] uppercase tracking-wide text-paper/70">
                  {shot.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center md:mt-16">
          <MagneticButton href="/collections" variant="outline">
            View The Campaign
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
