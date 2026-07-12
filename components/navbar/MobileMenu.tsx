"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[97] flex flex-col bg-ink text-paper md:hidden"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="container flex items-center justify-between pt-8">
            <Image src="/tp-removebg-preview.png" alt="Sole Arium" width={594} height={420} className="h-14 w-auto" priority />
          </div>

          <motion.nav
            className="container flex flex-1 flex-col justify-center gap-2"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div key={link.href} variants={itemVariants} className="overflow-hidden">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    data-cursor="pointer"
                    className={`flex items-baseline gap-4 py-3 font-display text-5xl tracking-editorial transition-colors ${
                      isActive ? "text-gold" : "text-paper"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <motion.div
            className="container flex items-center justify-between border-t border-paper/15 py-8 text-xs uppercase tracking-widest text-paper/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span>&copy; {new Date().getFullYear()} Sole Arium</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-paper" data-cursor="pointer">IG</a>
              <a href="#" className="hover:text-paper" data-cursor="pointer">TW</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
