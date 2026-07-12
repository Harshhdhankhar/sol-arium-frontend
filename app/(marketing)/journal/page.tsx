import type { Metadata } from "next";
import Image from "next/image";
import { journal } from "@/lib/data";
import { Reveal, RevealText } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on craft, materials, and movement from the Sole Arium studio.",
};

export default function JournalPage() {
  const [lead, ...rest] = journal;

  return (
    <div className="pt-28 md:pt-32">
      <section className="section pb-14 pt-0 md:pb-20">
        <div className="container">
          <span className="eyebrow mb-6 block">Journal</span>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.02] tracking-editorial md:text-7xl">
            <RevealText text="Notes From The Studio" />
          </h1>
          <Reveal delay={0.2} className="mt-7 max-w-md">
            <p className="text-pretty text-lg leading-relaxed text-ink-muted">
              Craft, materials, and the design decisions between them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <Reveal className="group grid grid-cols-1 gap-8 border-t border-line pt-12 md:grid-cols-12 md:gap-10 md:pt-16">
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-soft md:col-span-7">
              <Image
                src={lead.image}
                alt={lead.title}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center md:col-span-5">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-wide text-ink-faint">
                <span>{lead.category}</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>{lead.date}</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>{lead.readTime}</span>
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-editorial md:text-5xl">
                {lead.title}
              </h2>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-ink-muted">
                {lead.excerpt}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container grid grid-cols-1 gap-14 border-t border-line pt-16 md:grid-cols-2 md:gap-10">
          {rest.map((entry, i) => (
            <Reveal key={entry.slug} delay={i * 0.1} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-soft">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-wide text-ink-faint">
                <span>{entry.category}</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>{entry.date}</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>{entry.readTime}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl tracking-editorial">{entry.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-ink-muted">{entry.excerpt}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
