"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const fieldClass =
  "w-full border-b border-line bg-transparent py-3.5 text-base text-ink placeholder:text-ink-faint transition-colors focus:border-ink focus:outline-none";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "");
    const name = String(form.get("name") ?? "");
    const message = String(form.get("message") ?? "");

    if (!name.trim() || !message.trim()) {
      setError("Your name and message are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("A valid email helps us get back to you.");
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border-t border-line pt-10">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15">
          <Check className="h-5 w-5 text-gold-deep" strokeWidth={1.5} />
        </span>
        <p className="font-display text-2xl tracking-editorial">We&rsquo;ll be in touch</p>
        <p className="max-w-sm text-ink-muted">
          Thank you for reaching out. Our team replies personally within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block text-ink-muted">
            Your Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow mb-2 block text-ink-muted">
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} placeholder="your@email.com" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="eyebrow mb-2 block text-ink-muted">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue="General"
          className={`${fieldClass} appearance-none`}
        >
          <option>General</option>
          <option>Orders &amp; Reservations</option>
          <option>Press &amp; Collaborations</option>
          <option>Wholesale</option>
        </select>
      </div>

      <div>
          <label htmlFor="message" className="eyebrow mb-2 block text-ink-muted">
            Your Note
          </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us what you're looking for…"
        />
      </div>

      {error && <p className="text-sm text-gold-deep">{error}</p>}

      <MagneticButton type="submit" variant="solid" size="lg" className="w-full sm:w-auto">
        Send
      </MagneticButton>
    </form>
  );
}
