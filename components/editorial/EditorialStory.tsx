"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { story } from "@/lib/data";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function EditorialStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section className="section">
      <div ref={ref} className="relative h-[60vh] w-full overflow-hidden md:h-[85vh]">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src={story.image}
            alt="Sole Arium studio craftsmanship"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/10" />
      </div>

      <div className="container mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <span className="eyebrow mb-5 block">{story.eyebrow}</span>
          <h2 className="font-display text-4xl leading-[1.05] tracking-editorial md:text-6xl">
            <RevealText text={story.heading} />
          </h2>
          <Reveal delay={0.2} className="mt-8 max-w-xl">
            <p className="text-pretty text-lg leading-relaxed text-ink-muted md:text-xl">
              {story.lead}
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-9">
            <MagneticButton href="/about" variant="outline">
              Read Our Story
            </MagneticButton>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal delay={0.3} className="border-l-2 border-gold pl-6">
            <p className="font-display text-2xl italic leading-snug tracking-editorial text-ink md:text-3xl">
              &ldquo;{story.quote}&rdquo;
            </p>
            <p className="eyebrow mt-6 text-ink-muted">{story.quoteAttribution}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
