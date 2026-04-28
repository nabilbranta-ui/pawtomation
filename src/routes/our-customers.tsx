import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PawPrint, MapPin, Users, Star, TrendingUp, Building2, Heart } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/our-customers")({
  head: () => ({
    meta: [
      { title: "Our Customers — Pawtomation" },
      { name: "description", content: "Veterinary clinics across Bangladesh and beyond run on Pawtomation." },
      { property: "og:title", content: "Our Customers — Pawtomation" },
      { property: "og:description", content: "Trusted by 2,400+ clinics worldwide." },
    ],
  }),
  component: CustomersPage,
});

const stats = [
  { icon: Building2, label: "Clinics onboarded", value: "2,400+" },
  { icon: Users, label: "Pet parents served", value: "1.2M+" },
  { icon: Heart, label: "Appointments / month", value: "380K" },
  { icon: TrendingUp, label: "Avg. revenue lift", value: "+38%" },
];

const customers = [
  { name: "Healing Paws Veterinary", city: "Dhaka, Bangladesh", size: "12 vets · 3 branches", rating: 4.9, quote: "Pawtomation replaced 4 separate tools in our first week.", tint: "oklch(0.72 0.14 185)" },
  { name: "Whiskers & Wagging Tails", city: "Chattogram, BD", size: "5 vets · 1 branch", rating: 5.0, quote: "Revenue split feature is genius — our clients love seeing history.", tint: "oklch(0.80 0.12 45)" },
  { name: "PetCare Plus Clinic", city: "Sylhet, BD", size: "8 vets · 2 branches", rating: 4.8, quote: "RBAC lets every role do exactly what they need. No more chaos.", tint: "oklch(0.82 0.08 300)" },
  { name: "Urban Vets Collective", city: "Kuala Lumpur, MY", size: "20 vets · 5 branches", rating: 4.9, quote: "The multi-tenant architecture scaled with us flawlessly.", tint: "oklch(0.72 0.14 185)" },
  { name: "The Pet Practice", city: "Colombo, LK", size: "6 vets · 1 branch", rating: 4.9, quote: "Billing, records, reminders — all in one beautiful interface.", tint: "oklch(0.80 0.12 45)" },
  { name: "Furry Friends Hospital", city: "Mumbai, IN", size: "15 vets · 4 branches", rating: 4.8, quote: "Our no-show rate dropped 62% after adopting Pawtomation.", tint: "oklch(0.82 0.08 300)" },
];

function CustomersPage() {
  return (
    <PageShell
      eyebrow="Our Customers"
      title={<>Clinics that trust <span className="bg-gradient-to-br from-teal to-peach bg-clip-text text-transparent">Pawtomation</span></>}
      subtitle="From solo practitioners to multi-branch enterprise hospitals — they all run their day on one platform."
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-5 text-center"
            >
              <s.icon className="mx-auto size-5 text-teal" strokeWidth={2.4} />
              <p className="mt-3 text-2xl font-black tracking-tight md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Customer cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {customers.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-strong group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="absolute -right-10 -top-10 size-32 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
                style={{ background: c.tint }}
              />
              <div className="relative flex items-center gap-3">
                <span
                  className="grid size-11 place-items-center rounded-xl text-white"
                  style={{ background: `linear-gradient(135deg, ${c.tint}, color-mix(in oklab, ${c.tint} 60%, white))` }}
                >
                  <PawPrint className="size-5" strokeWidth={2.4} />
                </span>
                <div>
                  <h3 className="text-base font-extrabold tracking-tight">{c.name}</h3>
                  <p className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                    <MapPin className="size-3" /> {c.city}
                  </p>
                </div>
              </div>
              <p className="relative mt-4 text-sm font-medium italic leading-relaxed text-foreground/80">"{c.quote}"</p>
              <div className="relative mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="text-xs font-bold text-muted-foreground">{c.size}</span>
                <span className="inline-flex items-center gap-1 text-xs font-extrabold text-foreground">
                  <Star className="size-3.5 fill-peach text-peach" /> {c.rating}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
