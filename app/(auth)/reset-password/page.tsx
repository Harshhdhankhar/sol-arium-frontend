"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { FloatingInput } from "@/components/auth/FloatingInput";
import { PasswordStrength } from "@/components/auth/PasswordStrength";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useAuth } from "@/lib/auth";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { resetPassword } = useAuth();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    const result = await resetPassword(password);
    setLoading(false);
    if (!result.success) {
      setError(result.error);
      return;
    }
    setDone(true);
  };

  if (done) {
    return (
      <AuthLayout title="Password Updated" subtitle="">
        <div className="flex flex-col items-start gap-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
            <Check className="h-5 w-5 text-gold-deep" strokeWidth={1.5} />
          </span>
          <p className="text-pretty leading-relaxed text-ink-muted">
            Your password has been reset. Use it the next time you sign in.
          </p>
          <MagneticButton onClick={() => router.push("/sign-in")} variant="solid" size="lg" magnetic={false}>
            Continue to Sign In
          </MagneticButton>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Create A New Password" subtitle="Choose something you haven't used before.">
      <form onSubmit={handleSubmit} className="space-y-7">
        <div>
          <FloatingInput
            label="New Password"
            type="password"
            value={password}
            onChange={setPassword}
            required
            autoComplete="new-password"
          />
          <PasswordStrength password={password} />
        </div>
        <FloatingInput
          label="Confirm Password"
          type="password"
          value={confirm}
          onChange={setConfirm}
          required
          autoComplete="new-password"
        />
        {error && <p className="text-sm text-gold-deep">{error}</p>}
        <MagneticButton type="submit" variant="solid" size="lg" className="w-full" magnetic={false}>
          {loading ? "Updating…" : "Update Password"}
        </MagneticButton>
      </form>
    </AuthLayout>
  );
}
