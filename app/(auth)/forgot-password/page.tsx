"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { FloatingInput } from "@/components/auth/FloatingInput";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useAuth } from "@/lib/auth";

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await forgotPassword(email);
    setLoading(false);
    if (!result.success) {
      setError(result.error);
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <AuthLayout
        title="Check Your Email"
        subtitle=""
        footer={
          <Link href="/sign-in" className="link-underline font-medium text-ink" data-cursor="pointer">
            Back to Sign In
          </Link>
        }
      >
        <div className="flex flex-col items-start gap-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
            <Mail className="h-5 w-5 text-gold-deep" strokeWidth={1.5} />
          </span>
          <p className="text-pretty leading-relaxed text-ink-muted">
            If an account exists for <span className="font-medium text-ink">{email}</span>, a
            password reset link is on its way. It may take a few minutes to arrive.
          </p>
          <button
            onClick={() => setSent(false)}
            data-cursor="pointer"
            className="link-underline text-sm font-medium text-ink"
          >
            Use a different email
          </button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset Your Password"
      subtitle="Enter the email associated with your account and we'll send a link to reset your password."
      footer={
        <Link href="/sign-in" className="link-underline font-medium text-ink" data-cursor="pointer">
          Back to Sign In
        </Link>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-7">
        <FloatingInput
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          autoComplete="email"
        />
        {error && <p className="text-sm text-gold-deep">{error}</p>}
        <MagneticButton type="submit" variant="solid" size="lg" className="w-full" magnetic={false}>
          {loading ? "Sending Link…" : "Send Reset Link"}
        </MagneticButton>
      </form>
    </AuthLayout>
  );
}
