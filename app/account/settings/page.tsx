"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/account/SectionHeader";
import { Switch } from "@/components/ui/Switch";
import { MagneticButton } from "@/components/ui/MagneticButton";

const LANGUAGE_KEY = "sole-arium.language";
const PRIVACY_KEY = "sole-arium.privacyPrefs";

const LANGUAGES = ["English (US)", "English (UK)", "French", "German", "Japanese"];

type PrivacyPrefs = {
  profileActivity: boolean;
  personalizedRecs: boolean;
};

const defaultPrivacy: PrivacyPrefs = {
  profileActivity: true,
  personalizedRecs: true,
};

const selectClass =
  "w-full appearance-none rounded-lg border border-line bg-paper px-4 py-2.5 pr-10 text-sm text-ink transition-colors focus:border-ink focus:outline-none";

function Section({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-line p-7", className)}>
      <p className="font-medium">{title}</p>
      <p className="mt-1.5 text-sm text-ink-muted">{description}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function SelectField({
  id,
  value,
  onChange,
  children,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative max-w-xs">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-cursor="pointer"
        className={selectClass}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
        strokeWidth={1.5}
      />
    </div>
  );
}

export default function SettingsPage() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [privacy, setPrivacy] = useState<PrivacyPrefs>(defaultPrivacy);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
      if (storedLanguage) setLanguage(storedLanguage);

      const storedPrivacy = window.localStorage.getItem(PRIVACY_KEY);
      if (storedPrivacy) setPrivacy({ ...defaultPrivacy, ...JSON.parse(storedPrivacy) });
    } catch {
      // ignore malformed storage
    }
  }, []);

  if (!user) return null;

  function updateLanguage(value: string) {
    setLanguage(value);
    try {
      window.localStorage.setItem(LANGUAGE_KEY, value);
    } catch {
      // ignore write failure, preference still applies for this session
    }
  }

  function updatePrivacy(key: keyof PrivacyPrefs, checked: boolean) {
    setPrivacy((prev) => {
      const next = { ...prev, [key]: checked };
      try {
        window.localStorage.setItem(PRIVACY_KEY, JSON.stringify(next));
      } catch {
        // ignore write failure, preference still applies for this session
      }
      return next;
    });
  }

  function handleDeleteAccount() {
    signOut();
    router.push("/");
  }

  return (
    <div>
      <SectionHeader
        eyebrow="Settings"
        title="Preferences"
        description="Control how Sole Arium looks, speaks, and remembers you."
      />

      <div className="space-y-8">
        <Section title="Language" description="Set the language used across your account pages.">
          <SelectField id="language" value={language} onChange={updateLanguage}>
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </SelectField>
        </Section>

        <Section title="Privacy" description="Manage what Sole Arium can see and use about your activity.">
          <div className="divide-y divide-line">
            <div className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium">Show my profile activity to Sole Arium stylists</p>
                <p className="mt-1 text-sm text-ink-muted">
                  Lets stylists see your recent orders and sizing when assisting you.
                </p>
              </div>
              <Switch
                checked={privacy.profileActivity}
                onChange={(checked) => updatePrivacy("profileActivity", checked)}
                label="Show my profile activity to Sole Arium stylists"
              />
            </div>
            <div className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium">Personalized recommendations based on browsing</p>
                <p className="mt-1 text-sm text-ink-muted">
                  Uses your browsing history to tailor what&rsquo;s recommended to you.
                </p>
              </div>
              <Switch
                checked={privacy.personalizedRecs}
                onChange={(checked) => updatePrivacy("personalizedRecs", checked)}
                label="Personalized recommendations based on browsing"
              />
            </div>
          </div>
        </Section>

        {user.isGuest ? (
          <Section
            title="Security & Account"
            description="Password, two-factor authentication, and account deletion require a full account."
          >
            <p className="mb-5 text-sm text-ink-muted">
              You&rsquo;re browsing as a guest. Create an account to manage security settings and account data.
            </p>
            <MagneticButton href="/create-account" variant="outline" magnetic={false}>
              Create Account
            </MagneticButton>
          </Section>
        ) : (
          <Section title="Security" description="Manage your password and account protection.">
            <MagneticButton href="/account/profile" variant="outline" magnetic={false}>
              Change Password
            </MagneticButton>


          </Section>
        )}

        <Section
          title="Notification Preferences"
          description="Manage which alerts and updates you receive from Sole Arium."
        >
          <MagneticButton href="/account/notifications" variant="outline" magnetic={false}>
            Manage Notifications
          </MagneticButton>
        </Section>

        {!user.isGuest && (
          <div className="rounded-2xl border border-gold/40 bg-gold/[0.06] p-7">
            <p className="font-medium">Delete Account</p>
            <p className="mt-1.5 text-sm text-ink-muted">
              This permanently signs you out and clears your local session data on this device. We
              don&rsquo;t retain a separate server-side account beyond this browser session, so this is
              effectively how you remove your Sole Arium account here.
            </p>

            <div className="mt-6">
              {!confirmDelete ? (
                <MagneticButton
                  variant="outline"
                  magnetic={false}
                  onClick={() => setConfirmDelete(true)}
                >
                  Delete Account
                </MagneticButton>
              ) : (
                <div className="rounded-xl border border-gold/40 bg-paper p-5">
                  <p className="text-sm font-medium">Are you sure you want to delete your account?</p>
                  <p className="mt-1.5 text-sm text-ink-muted">
                    This can&rsquo;t be undone. You&rsquo;ll be signed out immediately and your local session
                    data will be cleared from this device.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <MagneticButton
                      size="sm"
                      variant="outline"
                      magnetic={false}
                      onClick={handleDeleteAccount}
                    >
                      Yes, Delete My Account
                    </MagneticButton>
                    <MagneticButton
                      size="sm"
                      variant="ghost"
                      magnetic={false}
                      onClick={() => setConfirmDelete(false)}
                    >
                      Cancel
                    </MagneticButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
