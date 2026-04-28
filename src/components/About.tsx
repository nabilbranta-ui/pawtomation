import { motion } from "framer-motion";
import { Layers, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Multi-tenant Architecture",
    desc: "Each clinic operates in an isolated, encrypted workspace. Scale from one branch to hundreds without ever sharing data.",
    tint: "oklch(0.72 0.14 185)",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade RBAC Security",
    desc: "Granular role permissions, full audit trails and SOC 2-aligned controls keep patient records private and compliant.",
    tint: "oklch(0.65 0.16 260)",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Built to be trusted
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Engineered for clinics that{" "}
            <span className="bg-gradient-to-br from-teal to-lavender bg-clip-text text-transparent">
              can't afford downtime.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-8"
            >
              <div className="relative inline-flex">
                <div
                  className="absolute inset-0 rounded-xl blur-xl opacity-60"
                  style={{ background: p.tint }}
                />
                <div
                  className="relative grid size-12 place-items-center rounded-xl border border-white/60 text-white"
                  style={{ background: `linear-gradient(135deg, ${p.tint}, color-mix(in oklab, ${p.tint} 60%, white))` }}
                >
                  <p.icon className="size-5" strokeWidth={2.3} />
                </div>
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
