"use client";

import { useState } from "react";
import { Watch } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { preorders as initialPreorders, type Preorder } from "@/lib/memberData";
import { SectionHeader } from "@/components/account/SectionHeader";
import { PreorderCard } from "@/components/account/PreorderCard";
import { EmptyState } from "@/components/account/EmptyState";

export default function PreOrdersPage() {
  const { user } = useAuth();
  const [items, setItems] = useState<Preorder[]>(initialPreorders);

  const handleCancel = (id: string) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Cancelled", canCancel: false, canUpgradeShipping: false } : p))
    );
  };

  if (user?.isGuest) {
    return (
      <div>
        <SectionHeader eyebrow="Reservations" title="Pre-orders" />
        <EmptyState
          icon={Watch}
          title="Sign In To View Reservations"
          description="Create an account or sign in to track production progress on your reserved silhouettes."
          actionLabel="Sign In"
          actionHref="/sign-in"
        />
      </div>
    );
  }

  return (
    <div>
      <SectionHeader
        eyebrow="Reservations"
        title="Pre-orders"
        description="Track production progress on every silhouette you've reserved."
      />

      {items.length === 0 ? (
        <EmptyState
          icon={Watch}
          title="Reserve Your First Pair"
          description="Limited runs move fast. Explore the current drop and reserve a silhouette before it's gone."
          actionLabel="Explore The Collection"
          actionHref="/shop"
        />
      ) : (
        <div className="space-y-6">
          {items.map((preorder) => (
            <PreorderCard key={preorder.id} preorder={preorder} onCancel={handleCancel} />
          ))}
        </div>
      )}
    </div>
  );
}
