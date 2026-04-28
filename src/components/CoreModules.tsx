import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Building2, Stethoscope, PawPrint, LineChart, type LucideIcon } from "lucide-react";

type Module = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tint: string;
  glow: string;
};

const modules: Module[] = [
  {
    icon: Building2,
    title: "Central Reception",
    desc: "Parent & pet profiles, services, products, vaccines, invoicing, live queue and low-stock alerts — all from the front desk.",
    tint: "oklch(0.72 0.14 185)",
    glow: "oklch(0.72 0.14 185 / 0.45)",
  },
  {
    icon: Stethoscope,
    title: "Doctor's Panel",
    desc: "Digital prescriptions, test reports, vaccinations and surgery notes. Every pet's full medical folder at a glance.",
    tint: "oklch(0.78 0.13 45)",
    glow: "oklch(0.78 0.13 45 / 0.45)",
  },
  {
    icon: PawPrint,
    title: "Pet Parent Dashboard",
    desc: "Parents book appointments, upload photos, track vaccination and deworming dates, and keep every pet's history in one place.",
    tint: "oklch(0.70 0.14 320)",
    glow: "oklch(0.70 0.14 320 / 0.45)",
  },
  {
    icon: LineChart,
    title: "Owner's Analytics",
    desc: "Doctor performance, LTV leaderboards, conversion rates, retention and supplier ratings — live across every branch.",
    tint: "oklch(0.72 0.15 145)",
    glow: "oklch(0.72 0.15 145 / 0.45)",
  },
];

function TiltCard({ module: m, index }: { module: Module; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-6px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  const Icon = m.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="glass-strong group relative h-full rounded-3xl p-6 transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:shadow-[0_30px_60px_-20px_oklch(0.5_0.05_250/0.25)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Icon with glow */}
        <div className="relative mb-5 inline-flex">
          <div
            className="absolute inset-0 rounded-2xl blur-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: m.glow }}
          />
          <div
            className="relative grid size-14 place-items-center rounded-2xl border border-white/60 text-white shadow-lg"
            style={{ background: `linear-gradient(135deg, ${m.tint}, color-mix(in oklab, ${m.tint} 60%, white))` }}
          >
            <Icon className="size-6" strokeWidth={2.2} />
          </div>
        </div>

        <h3 className="text-lg font-bold tracking-tight">{m.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>

        <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: m.tint }}>
          Learn more
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export function CoreModules() {
  return (
    <section id="features" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground/80">
            <span className="size-1.5 rounded-full bg-teal" /> Core Modules
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            One platform.{" "}
            <span className="bg-gradient-to-br from-teal via-peach to-lavender bg-clip-text text-transparent">
              Every role covered.
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Four purpose-built panels — reception, doctors, pet parents and owners — working together on one
            multi-tenant platform tailored to your clinic.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {modules.map((m, i) => (
            <TiltCard key={m.title} module={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
