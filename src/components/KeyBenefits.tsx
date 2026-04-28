import { motion } from "framer-motion";
import { MessageSquare, PackageCheck, BarChart3, Check } from "lucide-react";

function SmsGraphic() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-md">
      <div
        className="absolute inset-8 rounded-[2rem] blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.14 185 / 0.55), transparent 70%)" }}
      />
      <div
        className="glass-strong absolute left-8 top-8 w-72 rounded-2xl p-4 animate-float"
        style={{ transform: "perspective(1000px) rotateY(-6deg)" }}
      >
        <div className="flex items-center gap-2 border-b border-border/50 pb-3">
          <div className="grid size-8 place-items-center rounded-full bg-teal/15 text-teal">
            <MessageSquare className="size-4" />
          </div>
          <div>
            <p className="text-xs font-bold">Pawfolio SMS</p>
            <p className="text-[10px] text-muted-foreground">Delivered · 9:02 AM</p>
          </div>
        </div>
        <p className="mt-3 rounded-xl bg-teal/10 p-3 text-xs leading-relaxed text-foreground/80">
          Hi Sarah! 🐾 Bella's annual vaccine is due on Tue, 14 May. Tap to confirm your slot at 10:30 AM.
        </p>
      </div>
      <div
        className="glass-strong absolute right-4 bottom-6 w-56 rounded-2xl p-4 animate-float-delayed"
        style={{ transform: "perspective(1000px) rotateY(8deg)" }}
      >
        <p className="text-[10px] font-semibold text-muted-foreground">Auto reminders sent</p>
        <p className="mt-1 text-3xl font-extrabold tracking-tight">12,480</p>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-teal">
          <span className="size-1.5 rounded-full bg-teal" /> this month
        </div>
      </div>
    </div>
  );
}

function InventoryGraphic() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-md">
      <div
        className="absolute inset-8 rounded-[2rem] blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.80 0.13 45 / 0.55), transparent 70%)" }}
      />
      <div
        className="glass-strong absolute inset-x-6 top-6 rounded-2xl p-5 animate-float"
        style={{ transform: "perspective(1000px) rotateX(4deg)" }}
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold">Stock health</p>
          <span className="rounded-full bg-peach/20 px-2 py-0.5 text-[10px] font-bold text-peach">OPTIMAL</span>
        </div>
        <div className="mt-4 space-y-3">
          {[
            { name: "Rabies vaccine", pct: 86, color: "oklch(0.72 0.14 185)" },
            { name: "Antibiotics", pct: 62, color: "oklch(0.80 0.13 45)" },
            { name: "Flea treatment", pct: 41, color: "oklch(0.70 0.14 320)" },
          ].map((s) => (
            <div key={s.name}>
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-medium">{s.name}</span>
                <span className="font-semibold text-muted-foreground">{s.pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="glass-strong absolute -bottom-2 right-2 w-52 rounded-2xl p-3 animate-float-delayed"
        style={{ transform: "perspective(1000px) rotateY(-8deg)" }}
      >
        <div className="flex items-center gap-2">
          <PackageCheck className="size-4 text-peach" />
          <p className="text-xs font-semibold">0 losses this quarter</p>
        </div>
      </div>
    </div>
  );
}

function AnalyticsGraphic() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-md">
      <div
        className="absolute inset-8 rounded-[2rem] blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.70 0.14 320 / 0.55), transparent 70%)" }}
      />
      <div
        className="glass-strong absolute inset-x-4 top-6 rounded-2xl p-5 animate-float"
        style={{ transform: "perspective(1000px) rotateY(-4deg)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Revenue · April</p>
            <p className="text-2xl font-extrabold tracking-tight">$48,120</p>
          </div>
          <span className="rounded-full bg-teal/15 px-2 py-0.5 text-[11px] font-bold text-teal">+24%</span>
        </div>
        <svg viewBox="0 0 240 100" className="mt-4 w-full">
          <defs>
            <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.70 0.14 320)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="oklch(0.70 0.14 320)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,75 L40,60 L80,70 L120,40 L160,48 L200,22 L240,30 L240,100 L0,100Z" fill="url(#ag)" />
          <path d="M0,75 L40,60 L80,70 L120,40 L160,48 L200,22 L240,30" fill="none" stroke="oklch(0.65 0.16 320)" strokeWidth="2.5" strokeLinecap="round" />
          {[[40,60],[120,40],[200,22]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="4" fill="white" stroke="oklch(0.65 0.16 320)" strokeWidth="2.5" />
          ))}
        </svg>
      </div>
      <div
        className="glass-strong absolute -bottom-2 left-0 w-44 rounded-2xl p-3 animate-float-delayed"
        style={{ transform: "perspective(1000px) rotateY(8deg)" }}
      >
        <p className="text-[10px] text-muted-foreground">Retention</p>
        <p className="text-xl font-extrabold">94.2%</p>
      </div>
    </div>
  );
}

type Benefit = {
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  graphic: React.ReactNode;
  tint: string;
};

const benefits: Benefit[] = [
  {
    tag: "Automated SMS",
    title: "Messages that care — on autopilot.",
    desc: "Vaccine reminders, appointment confirmations and post-visit follow-ups go out automatically, in the owner's preferred language.",
    bullets: ["Smart scheduling engine", "Two-way reply tracking", "Multi-language templates"],
    graphic: <SmsGraphic />,
    tint: "oklch(0.68 0.14 185)",
  },
  {
    tag: "Inventory Loss Prevention",
    title: "Every vial accounted for.",
    desc: "Barcode-level tracking, expiry alerts and consumption logs prevent shrinkage and keep your shelves lean — no more guesswork.",
    bullets: ["Real-time stock sync", "Auto-reorder thresholds", "Full audit trail per item"],
    graphic: <InventoryGraphic />,
    tint: "oklch(0.78 0.13 45)",
  },
  {
    tag: "Real-time Analytics",
    title: "Decisions, backed by live data.",
    desc: "Watch revenue, visits and treatment outcomes update as they happen. Drill down by doctor, branch or species in a click.",
    bullets: ["Live KPI dashboards", "Cohort & retention insights", "Exportable executive reports"],
    graphic: <AnalyticsGraphic />,
    tint: "oklch(0.65 0.16 320)",
  },
];

export function KeyBenefits() {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground/80">
            <span className="size-1.5 rounded-full bg-peach" /> Key Benefits
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            Built to save time,{" "}
            <span className="bg-gradient-to-br from-peach via-teal to-lavender bg-clip-text text-transparent">
              stock, and sanity.
            </span>
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col gap-28">
          {benefits.map((b, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={b.title}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ color: b.tint }}
                  >
                    {i === 0 && <MessageSquare className="size-3.5" />}
                    {i === 1 && <PackageCheck className="size-3.5" />}
                    {i === 2 && <BarChart3 className="size-3.5" />}
                    {b.tag}
                  </div>
                  <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">{b.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{b.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {b.bullets.map((bl) => (
                      <li key={bl} className="flex items-center gap-3 text-sm">
                        <span
                          className="grid size-6 place-items-center rounded-full text-white"
                          style={{ background: b.tint }}
                        >
                          <Check className="size-3.5" strokeWidth={3} />
                        </span>
                        <span className="font-medium text-foreground/85">{bl}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {b.graphic}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
