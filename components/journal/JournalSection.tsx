import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { journal } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function JournalSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="mb-14 flex items-end justify-between md:mb-20">
          <div>
            <span className="eyebrow mb-4 block">Journal</span>
            <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
              From The Studio
            </h2>
          </div>
          <MagneticButton href="/journal" variant="ghost" magnetic={false} className="hidden md:inline-flex">
            All Entries
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </MagneticButton>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {journal.map((entry, i) => (
            <Reveal key={entry.slug} delay={i * 0.1}>
              <Link href="/journal" data-cursor="pointer" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-soft">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
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
                <h3 className="link-underline mt-3 font-display text-2xl tracking-editorial">
                  {entry.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-ink-muted">
                  {entry.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center md:hidden">
          <MagneticButton href="/journal" variant="outline">
            All Entries
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
