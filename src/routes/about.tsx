import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PawPrint, Target, Compass, Sparkles, Heart, Users, Shield } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pawtomation — Our story, mission & values" },
      { name: "description", content: "Pawtomation is building the operating system for modern veterinary clinics." },
      { property: "og:title", content: "About — Pawtomation" },
      { property: "og:description", content: "Our mission, vision, and the team behind Pawtomation." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Heart, title: "Pet-first, always", desc: "Every feature we ship starts with: does this improve the animal's care? If no, it doesn't ship." },
  { Icon: Shield, title: "Radical privacy", desc: "We never share, sell, or leak clinic or patient data — period. Your records stay yours." },
  { Icon: Sparkles, title: "Craft over shortcuts", desc: "We sweat the details that nobody notices, because that's what makes software feel alive." },
  { Icon: Users, title: "Clinics as partners", desc: "Our roadmap is built from real clinic feedback — not Silicon Valley guesses." },
];

const milestones = [
  { year: "2023", title: "Founded in Dhaka", desc: "Built by a team of engineers, vets, and designers frustrated by clunky clinic software." },
  { year: "2024", title: "First 500 clinics", desc: "Reached profitability within 14 months of launch — without outside funding." },
  { year: "2025", title: "Multi-tenant v2", desc: "Rebuilt the platform to scale to enterprise hospital groups across South Asia." },
  { year: "2026", title: "2,400+ clinics", desc: "Expanded to 6 countries. Processing 380K appointments every month." },
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Pawtomation"
      title={<>Built by people who <span className="bg-gradient-to-br from-teal to-peach bg-clip-text text-transparent">love animals</span></>}
      subtitle="Pawtomation is the operating system for modern veterinary clinics. We believe great pet care deserves great software."
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Mission / Vision */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            { Icon: Target, label: "Our Mission", text: "Eliminate every minute a vet spends on paperwork, so they can spend that minute with a patient.", tint: "oklch(0.72 0.14 185)" },
            { Icon: Compass, label: "Our Vision", text: "Every clinic in South Asia running on a single, beautiful, multi-tenant platform by 2030.", tint: "oklch(0.80 0.12 45)" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong relative overflow-hidden rounded-3xl p-8"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full opacity-30 blur-3xl" style={{ background: m.tint }} />
              <span className="relative grid size-12 place-items-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${m.tint}, color-mix(in oklab, ${m.tint} 60%, white))` }}>
                <m.Icon className="size-5" strokeWidth={2.4} />
              </span>
              <p className="relative mt-5 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">{m.label}</p>
              <p className="relative mt-2 text-xl font-bold leading-snug tracking-tight md:text-2xl">{m.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-14">
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">What we stand for</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-strong rounded-3xl p-6"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-teal/20 to-peach/20 text-teal">
                  <v.Icon className="size-4" strokeWidth={2.5} />
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight">{v.title}</h3>
                <p className="mt-1 text-sm font-medium leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          <h2 className="text-center text-3xl font-black tracking-tight md:text-4xl">The journey so far</h2>
          <div className="mt-10 space-y-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-strong flex flex-col gap-3 rounded-2xl p-5 md:flex-row md:items-center md:gap-6"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-peach text-base font-black text-white">
                  {m.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-extrabold tracking-tight">{m.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-muted-foreground">{m.desc}</p>
                </div>
                <PawPrint className="hidden size-5 text-teal md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
