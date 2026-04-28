import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Coins } from "lucide-react";
import { BookDemoDialog } from "./BookDemoDialog";

const features = [
  "Unlimited patients & records",
  "Automated SMS & email reminders",
  "Doctor's panel + SOAP notes",
  "Pet parent mobile dashboard",
  "Real-time analytics & reports",
  "Multi-branch inventory sync",
  "Role-based access control",
  "Priority email & chat support",
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const price = yearly ? "24,000" : "2,000";
  const unit = yearly ? "/year" : "/month";

  return (
    <section id="pricing" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground/80">
            <Sparkles className="size-3.5 text-teal" /> Simple Pricing
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            One plan.{" "}
            <span className="bg-gradient-to-br from-teal via-peach to-lavender bg-clip-text text-transparent">
              Everything included.
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            No tiers, no upsells — just one premium plan with every module unlocked.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <div className="glass relative flex items-center gap-1 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                !yearly ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                yearly ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  yearly ? "bg-white/25 text-white" : "bg-teal/15 text-teal"
                }`}
              >
                SAVE 0%
              </span>
            </button>
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="absolute inset-y-1 rounded-full bg-gradient-to-br from-teal to-teal/80 shadow-md"
              style={{
                left: yearly ? "50%" : 4,
                right: yearly ? 4 : "50%",
              }}
            />
          </div>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-12 max-w-2xl"
        >
          {/* Glow border */}
          <div
            className="absolute -inset-[2px] rounded-[2rem] opacity-80 blur-xl animate-glow-pulse"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.14 185 / 0.6), oklch(0.80 0.13 45 / 0.3), oklch(0.72 0.14 185 / 0.6))",
            }}
          />

          <div className="glass-strong relative rounded-[2rem] p-8 md:p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Pawtomation Pro</p>
                <p className="mt-1 text-sm text-muted-foreground">Everything your clinic needs.</p>
              </div>
              <div className="glass inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold text-teal">
                <span className="size-1.5 rounded-full bg-teal animate-pulse" /> MOST POPULAR
              </div>
            </div>

            <div className="mt-8 flex items-end gap-3">
              <motion.div
                key={price}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-end gap-1"
              >
                <span className="text-xl font-bold text-foreground/70">৳</span>
                <span className="text-6xl font-extrabold tracking-tight md:text-7xl">{price}</span>
                <span className="pb-2 text-sm font-semibold text-muted-foreground">BDT{unit}</span>
              </motion.div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Billed {yearly ? "annually" : "monthly"} · Cancel anytime · No setup fees
            </p>

            <button onClick={() => setDemoOpen(true)} className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-teal to-teal/80 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_20px_60px_-15px_oklch(0.72_0.14_185/0.7)]">
              Start 14-day free trial
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-teal/15 text-teal">
                    <Check className="size-3" strokeWidth={3.5} />
                  </span>
                  <span className="text-foreground/85">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Revenue split badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl"
        >
          <div className="glass flex items-center gap-4 rounded-2xl p-5">
            <div
              className="grid size-12 shrink-0 place-items-center rounded-xl text-white shadow-md"
              style={{ background: "linear-gradient(135deg, oklch(0.80 0.13 45), oklch(0.72 0.14 185))" }}
            >
              <Coins className="size-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">History Subscription Revenue Split</p>
                <span className="rounded-full bg-peach/15 px-2 py-0.5 text-[10px] font-bold text-peach">
                  UNIQUE
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Every pet parent on the History plan pays ৳100 for 35 days —{" "}
                <span className="font-bold text-foreground">৳50 goes directly to your clinic</span> as
                recurring revenue, forever. A brand-new income stream on top of your services.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
