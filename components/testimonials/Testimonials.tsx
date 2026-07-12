"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const active = testimonials[index];

  return (
    <section
      className="section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <Reveal className="mb-16 text-center md:mb-20">
          <span className="eyebrow mb-4 block">In Their Words</span>
          <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
            Worn By Design
          </h2>
        </Reveal>

        <div className="mx-auto max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p className="text-balance font-display text-3xl leading-snug tracking-editorial md:text-5xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <p className="eyebrow mt-8 text-ink-muted">
                {active.author} — {active.role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.author}`}
                data-cursor="pointer"
                className="group flex h-6 items-center px-1"
              >
                <span
                  className={cn(
                    "h-1 rounded-full transition-all duration-500 ease-premium",
                    i === index ? "w-8 bg-gold" : "w-3 bg-ink/15 group-hover:bg-ink/30"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
