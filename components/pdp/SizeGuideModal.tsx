"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const SIZE_CHART = [
  { uk: 6, us: 7, eu: 39 },
  { uk: 6.5, us: 7.5, eu: 40 },
  { uk: 7, us: 8, eu: 41 },
  { uk: 7.5, us: 8.5, eu: 41.5 },
  { uk: 8, us: 9, eu: 42 },
  { uk: 8.5, us: 9.5, eu: 43 },
  { uk: 9, us: 10, eu: 43.5 },
  { uk: 9.5, us: 10.5, eu: 44 },
  { uk: 10, us: 11, eu: 44.5 },
  { uk: 10.5, us: 11.5, eu: 45 },
];

export function SizeGuideModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[92] bg-ink/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Size guide"
            className="fixed inset-x-4 top-1/2 z-[93] mx-auto max-w-lg -translate-y-1/2 overflow-hidden rounded-2xl bg-paper p-7 sm:p-9"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="font-display text-2xl tracking-editorial">Size Guide</p>
              <button
                onClick={onClose}
                aria-label="Close size guide"
                data-cursor="pointer"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-paper-soft"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-ink-muted">
              All Sole Arium silhouettes are measured in UK sizing. Use the chart below to convert
              to US or EU if you&rsquo;re used to a different standard.
            </p>

            <div className="overflow-hidden rounded-xl border border-line">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-line bg-paper-soft text-left text-ink-faint">
                    <th className="px-4 py-3 font-medium">UK</th>
                    <th className="px-4 py-3 font-medium">US</th>
                    <th className="px-4 py-3 font-medium">EU</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {SIZE_CHART.map((row) => (
                    <tr key={row.uk}>
                      <td className="px-4 py-2.5 font-medium">{row.uk}</td>
                      <td className="px-4 py-2.5 text-ink-muted">{row.us}</td>
                      <td className="px-4 py-2.5 text-ink-muted">{row.eu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-ink-faint">
              Between sizes? Check the fit notes on each product — most Sole Arium silhouettes run
              true to size.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
