"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/account/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: "faq-status",
    question: "What do the pre-order status stages mean?",
    answer:
      "Every reservation moves through four stages: Reserved, once your deposit or payment is confirmed; In Production, while your pair is cut, lasted, and finished by hand; Ready to Ship, once it clears quality inspection; and Shipped, when it leaves the studio with tracking attached. Follow each milestone from the Pre-Orders tab in your account, alongside an estimated delivery window that narrows as production progresses.",
  },
  {
    id: "faq-cancel",
    question: "Can I cancel or change the size on a reservation?",
    answer:
      "Reservations can be cancelled free of charge any time before the In Production stage — after that, materials have already been cut to your size, so a cancellation is handled case by case. To change a size, cancel the original hold and place a new reservation while stock remains open; a deposit can't be transferred between sizes once cutting has begun.",
  },
  {
    id: "faq-fit",
    question: "How should I choose a size?",
    answer:
      "Our lasts run true to size for most feet, though a few silhouettes — noted on the product page — are cut a half size long to suit a broader forefoot. If you've worn a previous Sole Arium release, stick with that size; if this is your first pair, our studio team can advise based on your usual size in other brands through the contact channels below.",
  },
  {
    id: "faq-returns",
    question: "What's the return and exchange policy for a limited run?",
    answer:
      "Because each colorway is produced in a fixed, numbered quantity, we don't hold backstock for exchanges — once a run sells out, a return is refunded rather than swapped. Unworn pairs in original packaging can be returned within 14 days of delivery for a full refund; pre-orders follow the same window, measured from the day your pair ships rather than the day you reserved it.",
  },
  {
    id: "faq-shipping",
    question: "Where do you ship, and how long does it take?",
    answer:
      "We currently ship to the United States, United Kingdom, EU, and select territories across Asia-Pacific, with in-stock orders leaving the studio within two business days. Reserved pairs ship directly from production on the date shown in your timeline, so transit time is added on top of the estimated delivery window already listed on your reservation.",
  },
  {
    id: "faq-membership",
    question: "How do membership tiers and early access work?",
    answer:
      "Membership is earned through points from purchases and tenure, moving from Member to Founding Member to Icon Status. Each tier unlocks earlier access to a drop before it opens to the public — 12 hours for Members, up to 48 hours for Icon Status — alongside shipping upgrades and, at the top tier, a standing invitation to visit the studio in person.",
  },
  {
    id: "faq-payment",
    question: "How are deposits and payment for reservations handled?",
    answer:
      "Most reservations are held with a deposit, with the balance charged automatically once your pair enters production — reflected in your account as Deposit Paid or Paid in Full. Some early-access drops require payment in full at the time of reservation instead; where that applies, it's stated clearly before you confirm.",
  },
  {
    id: "faq-delay",
    question: "What happens if my reserved size doesn't ship on time?",
    answer:
      "Estimated delivery windows account for the realities of small-batch production, but if a delay pushes past the window shown on your reservation, we'll email you directly with a revised date and the option to cancel for a full refund, no questions asked. It's rare — our production team flags at-risk builds well before a date is missed.",
  },
];

const channels = [
  {
    icon: MapPin,
    label: "Studio",
    lines: ["Unit 4, Founders Yard", "Clerkenwell, London EC1"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["studio@solearium.com"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+44 20 7946 0891", "Mon – Fri, 9am – 6pm GMT"],
  },
];

function FAQRow({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="py-1">
      <button
        type="button"
        onClick={onToggle}
        data-cursor="pointer"
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className={cn("font-display text-lg tracking-editorial md:text-xl", isOpen && "text-gold-deep")}>
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-ink-faint transition-transform duration-500 ease-premium",
            isOpen && "rotate-180 text-gold"
          )}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="text-pretty pb-6 leading-relaxed text-ink-muted">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportPage() {
  const { user } = useAuth();
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  if (!user) return null;

  return (
    <div>
      <SectionHeader
        eyebrow="Support"
        title="How Can We Help"
        description="Answers on reservations, fit, shipping, and membership — and a direct line to the studio if you need more."
      />

      <Reveal className="rounded-2xl border border-line px-6 md:px-7">
        <div className="divide-y divide-line">
          {faqs.map((faq) => (
            <FAQRow
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId((prev) => (prev === faq.id ? null : faq.id))}
            />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-14 rounded-2xl border border-line p-6 md:p-7">
        <p className="eyebrow mb-8 text-ink-muted">Still Need Something?</p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {channels.map((item) => (
            <div key={item.label}>
              <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <p className="eyebrow mt-4 mb-2 text-ink-muted">{item.label}</p>
              {item.lines.map((line) => (
                <p key={line} className="text-base leading-snug">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-line pt-8">
          <MagneticButton href="/contact" variant="solid" size="md">
            Contact The Studio
          </MagneticButton>
        </div>
      </Reveal>
    </div>
  );
}
