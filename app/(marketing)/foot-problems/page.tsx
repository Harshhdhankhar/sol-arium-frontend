"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { footProblems, categories, audienceGroups, type FootProblem } from "@/lib/footProblems";
import { img } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, RevealText } from "@/components/ui/Reveal";

const badgeStyle = "inline-block rounded-full border border-ink/10 px-3 py-1 text-[10px] uppercase tracking-widest text-ink-muted";

export default function FootProblemsPage() {
  const [activeAudience, setActiveAudience] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [finderStep, setFinderStep] = useState(0);
  const [finderAnswers, setFinderAnswers] = useState<string[]>([]);
  const [finderResult, setFinderResult] = useState<FootProblem | null>(null);

  const filtered = footProblems.filter((p) => {
    if (activeAudience && !p.audienceGroups.includes(activeAudience)) return false;
    if (activeCategory) {
      const catMap: Record<string, string> = {
        "everyday-comfort": "Everyday Comfort",
        "structural-needs": "Foot Structure & Movement",
        "medical-recovery": "Recovery & Rehabilitation",
        "sports-active": "Sports and Active Use",
      };
      if (p.category !== catMap[activeCategory]) return false;
    }
    return true;
  });

  const categoryProblems = (slug: string) => {
    const catMap: Record<string, string> = {
      "everyday-comfort": "Everyday Comfort",
      "structural-needs": "Foot Structure & Movement",
      "medical-recovery": "Recovery & Rehabilitation",
      "sports-active": "Sports and Active Use",
    };
    return footProblems.filter((p) => p.category === catMap[slug]);
  };

  const finderQuestions = [
    {
      question: "How do you spend your day?",
      options: ["On my feet all day", "Walking between places", "Mostly seated", "Mixed activity"],
    },
    {
      question: "Where do you want more support?",
      options: ["Heels", "Arches", "Forefoot", "Full foot"],
    },
    {
      question: "How long are you usually on your feet?",
      options: ["Less than 4 hours", "4–8 hours", "More than 8 hours"],
    },
    {
      question: "What matters most to you?",
      options: ["Cushioning", "Stability", "Lightness", "Support", "Style"],
    },
    {
      question: "Who is this for?",
      options: ["Myself", "Teenager", "Adult", "Over 50"],
    },
  ];

  const handleFinderAnswer = (answer: string) => {
    const newAnswers = [...finderAnswers, answer];
    setFinderAnswers(newAnswers);

    if (finderStep < finderQuestions.length - 1) {
      setFinderStep(finderStep + 1);
    } else {
      const idx = Math.floor(Math.random() * footProblems.length);
      setFinderResult(footProblems[idx]);
    }
  };

  const resetFinder = () => {
    setFinderStep(0);
    setFinderAnswers([]);
    setFinderResult(null);
  };

  return (
    <div className="pt-28 md:pt-32">
      {/* Split Hero */}
      <section className="relative flex min-h-[50vh] md:min-h-[60vh]">
        <div className="container flex w-full flex-col items-center justify-center md:flex-row">
          <div className="flex w-full flex-col justify-center py-16 md:w-1/2 md:py-0 md:pr-12">
            <Reveal>
              <span className="eyebrow mb-6 block">Find Your Fit</span>
            </Reveal>
            <h1 className="max-w-2xl font-display text-5xl leading-[1.1] tracking-editorial md:text-7xl">
              <RevealText text="Designed For The Way You Move" />
            </h1>
            <Reveal delay={0.2} className="mt-7 max-w-lg">
              <p className="text-pretty text-lg leading-relaxed text-ink-muted">
                Explore footwear designed around how you move, where you need support, and how you spend your day.
              </p>
            </Reveal>
            <Reveal delay={0.35} className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="#categories" variant="solid" size="lg">
                Discover Your Fit
              </MagneticButton>
              <MagneticButton href="#guided-finder" variant="outline" size="lg">
                Start The Finder
              </MagneticButton>
            </Reveal>
          </div>
          <div className="relative flex w-full items-center justify-center md:w-1/2">
            <Reveal delay={0.15} className="h-full w-full">
              <div className="relative aspect-square w-full max-w-lg md:aspect-[4/5]">
                <Image
                  src={img("1542291026-7eec264c27ff", 1000)}
                  alt="Side profile of a Sole Arium silhouette"
                  fill
                  sizes="(min-width: 768px) 40vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Guided Finder */}
      <section id="guided-finder" className="section bg-ink text-paper">
        <div className="container">
          <Reveal>
            <span className="eyebrow mb-4 block text-paper/40">Fit Finder</span>
            <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
              Your Ideal Fit, Five Questions
            </h2>
          </Reveal>

          <div className="mt-12 max-w-2xl">
            {!finderResult ? (
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-paper/20 p-8 md:p-10">
                  <div className="mb-2 flex items-center gap-2 text-sm text-paper/40">
                    {finderQuestions.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full ${
                          i <= finderStep ? "bg-gold" : "bg-paper/20"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-paper/40">
                    Question {finderStep + 1} of {finderQuestions.length}
                  </p>
                  <p className="mt-6 font-display text-2xl tracking-editorial md:text-3xl">
                    {finderQuestions[finderStep].question}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {finderQuestions[finderStep].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleFinderAnswer(opt)}
                        data-cursor="pointer"
                        className="rounded-full border border-paper/30 px-6 py-3 text-sm transition-colors hover:bg-paper hover:text-ink"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <div className="rounded-2xl border border-paper/20 bg-paper/5 p-8 md:p-10">
                  <p className="eyebrow text-gold">Your Personal Match</p>
                  <p className="mt-4 font-display text-3xl tracking-editorial">
                    {finderResult.title}
                  </p>
                  <p className="mt-4 text-paper/70">{finderResult.description}</p>
                  <p className="mt-6 text-sm text-paper/40">
                    Best match: {finderResult.recommendedCategory}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <MagneticButton href={`/foot-problems/${finderResult.slug}`} variant="gold" size="lg">
                      See Recommendations
                    </MagneticButton>
                    <MagneticButton href="/shop" variant="outline" size="lg">
                      Shop Now
                    </MagneticButton>
                  </div>
                  <button
                    onClick={resetFinder}
                    data-cursor="pointer"
                    className="mt-6 link-underline text-sm text-paper/40"
                  >
                    Try Again
                  </button>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow mb-4 block">Browse By Need</span>
            <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
              Find What Works For You
            </h2>
          </Reveal>

          {/* Audience filters */}
          <Reveal delay={0.1} className="mt-10">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveAudience(null)}
                data-cursor="pointer"
                className={`rounded-full px-5 py-2 text-sm transition-colors ${
                  !activeAudience ? "bg-ink text-paper" : "border border-line text-ink-muted hover:border-ink"
                }`}
              >
                All
              </button>
              {audienceGroups.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setActiveAudience(activeAudience === g.id ? null : g.id)}
                  data-cursor="pointer"
                    className={`rounded-full px-5 py-2 text-sm transition-colors ${
                      activeAudience === g.id
                        ? "bg-ink text-paper"
                        : "border border-line text-ink-muted hover:border-gold/40 hover:text-gold-deep"
                    }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Category cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => {
              const problems = categoryProblems(cat.slug);
              return (
                <Reveal key={cat.slug} delay={i * 0.08}>
                  <button
                    onClick={() => setActiveCategory(activeCategory === cat.slug ? null : cat.slug)}
                    data-cursor="pointer"
                    className={`w-full rounded-2xl border p-6 text-left transition-all ${
                      activeCategory === cat.slug
                        ? "border-gold bg-gold/5 text-ink ring-1 ring-gold/20"
                        : "border-line bg-paper text-ink hover:border-gold/40"
                    }`}
                  >
                    <p className="font-display text-xl tracking-editorial">{cat.title}</p>
                    <p className={`mt-2 text-sm ${activeCategory === cat.slug ? "text-paper/70" : "text-ink-muted"}`}>
                      {cat.description}
                    </p>
                    <p className={`mt-4 text-xs uppercase tracking-widest ${activeCategory === cat.slug ? "text-paper/40" : "text-ink-faint"}`}>
                      {problems.length} guides
                    </p>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem cards */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((problem, i) => (
              <Reveal key={problem.slug} delay={(i % 6) * 0.05}>
                <Link
                  href={`/foot-problems/${problem.slug}`}
                  data-cursor="pointer"
                  className="group block rounded-2xl border border-line bg-paper overflow-hidden transition-all hover:border-gold/40 hover:shadow-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper-soft ring-1 ring-transparent transition-all duration-300 group-hover:ring-gold/15">
                    <Image
                      src={img(problem.image, 800)}
                      alt={problem.title}
                      fill
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-contain p-6 transition-transform duration-700 ease-premium group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wide text-ink-faint">
                        {problem.category}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl tracking-editorial">{problem.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {problem.supportiveFeatures.slice(0, 3).map((f) => (
                        <span key={f} className={badgeStyle}>
                          {f.split(" ").slice(0, 2).join(" ")}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-ink">
                      View Details
                      <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ink text-paper">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display text-4xl tracking-editorial md:text-6xl">
              Start Your Search Here
            </h2>
            <p className="mx-auto mt-6 max-w-md text-paper/70">
              Take our fit finder to discover the footwear designed around your movement.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton href="#guided-finder" variant="gold" size="lg">
                Start The Finder
              </MagneticButton>
              <MagneticButton href="/shop" variant="outline" size="lg">
                Shop The Collection
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Note */}
      <section className="section pb-14">
        <div className="container">
          <p className="max-w-2xl text-xs leading-relaxed text-ink-faint">
            Sole Arium offers personalised footwear guidance based on how you move. Every foot is different — we recommend finding the silhouette that feels right for you.
          </p>
        </div>
      </section>
    </div>
  );
}
