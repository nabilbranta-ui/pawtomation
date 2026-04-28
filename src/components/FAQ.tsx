import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How does the History Subscription revenue split work?",
    a: "Pet parents pay ৳100 to keep their pet's full medical history active for 35 days. That ৳100 is split 50/50 — ৳50 goes to your clinic as recurring revenue and ৳50 goes to Pawtomation. It renews with a single tap and adds a steady new income stream on top of your regular services.",
  },
  {
    q: "Is Pawtomation really multi-tenant? Is our data isolated?",
    a: "Yes. Every clinic is onboarded as a separate tenant with fully isolated data using Supabase Row-Level Security (RLS) and role-based access control (RBAC). No clinic can ever see another clinic's patients, invoices or analytics.",
  },
  {
    q: "Which payment methods are supported in Bangladesh?",
    a: "bKash, Nagad, Rocket and direct bank transfers are supported out of the box for both clinic billing and pet-parent payments. Invoices can combine products, services and vaccinations in a single transaction.",
  },
  {
    q: "How does automated SMS pricing work?",
    a: "Pawtomation integrates with Bulk SMS BD (or an equivalent gateway) on a pre-paid basis at roughly ৳0.50 per SMS. You top up your SMS balance once and reminders for appointments, vaccines and deworming go out automatically.",
  },
  {
    q: "Does inventory really auto-deduct when a service is performed?",
    a: "Yes. Link a consumables recipe to each service — e.g. 100ml Viodin for a dressing — and stock is deducted the moment the service is completed. Low-stock warnings and batch/expiry tracking are built in.",
  },
  {
    q: "Can pet parents access their own dashboard?",
    a: "Absolutely. Parents get their own web dashboard with every pet's card, age (updating in real time), weight history, vaccination & deworming status, appointment booking and full medical folder access.",
  },
  {
    q: "What happens during the 14-day trial?",
    a: "You get the full Pawtomation Pro experience — every module unlocked, unlimited patients, SMS test credits and onboarding support. No credit card required and you can cancel anytime.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground/80">
            <span className="size-1.5 rounded-full bg-teal" /> FAQ
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            Questions,{" "}
            <span className="bg-gradient-to-br from-teal via-peach to-lavender bg-clip-text text-transparent">
              answered.
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="glass overflow-hidden rounded-2xl"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/40"
                >
                  <span className="text-sm font-bold tracking-tight md:text-base">{f.q}</span>
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full border border-border/60 bg-white/70 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
