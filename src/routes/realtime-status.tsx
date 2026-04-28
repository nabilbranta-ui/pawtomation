import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Wrench, Activity } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/realtime-status")({
  head: () => ({
    meta: [
      { title: "System Status — Pawtomation" },
      { name: "description", content: "Real-time status of all Pawtomation systems." },
      { property: "og:title", content: "System Status — Pawtomation" },
      { property: "og:description", content: "Live uptime and incident dashboard." },
    ],
  }),
  component: StatusPage,
});

type Status = "operational" | "degraded" | "maintenance" | "outage";

const systems: { name: string; desc: string; status: Status }[] = [
  { name: "Web Application", desc: "Main dashboard & clinic portal", status: "operational" },
  { name: "Authentication & JWT", desc: "Login, tokens, SSO", status: "operational" },
  { name: "Appointments API", desc: "Calendar, bookings, reminders", status: "operational" },
  { name: "Medical Records", desc: "SOAP notes, prescriptions, history", status: "operational" },
  { name: "Billing & Payments", desc: "Invoices, revenue split, refunds", status: "operational" },
  { name: "SMS & WhatsApp Gateway", desc: "Outbound notifications", status: "degraded" },
  { name: "Signed Media Storage", desc: "X-rays, lab reports, pet photos", status: "operational" },
  { name: "Analytics & Reports", desc: "Revenue, patient, staff dashboards", status: "operational" },
  { name: "Super Admin Panel", desc: "Internal operations & monitoring", status: "maintenance" },
];

const incidents = [
  { date: "Apr 27, 2026 · 14:12 GMT+6", title: "Brief SMS delivery delay (resolved)", desc: "Upstream telecom provider experienced a 6-minute queue. All messages delivered. No data loss.", status: "Resolved" as const },
  { date: "Apr 24, 2026 · 02:00 GMT+6", title: "Scheduled maintenance — DB upgrade", desc: "Planned 18-minute maintenance window. Zero downtime for customer-facing services.", status: "Completed" as const },
  { date: "Apr 18, 2026 · 11:47 GMT+6", title: "Analytics dashboard slowness", desc: "Heavy aggregation queries caused dashboards to load slowly for ~22 minutes. Cache layer scaled up.", status: "Resolved" as const },
];

const statusStyle: Record<Status, { label: string; dot: string; bg: string; Icon: any; text: string }> = {
  operational: { label: "Operational", dot: "oklch(0.72 0.18 150)", bg: "oklch(0.72 0.18 150 / 0.12)", Icon: CheckCircle2, text: "oklch(0.55 0.18 150)" },
  degraded: { label: "Degraded Performance", dot: "oklch(0.80 0.14 75)", bg: "oklch(0.80 0.14 75 / 0.15)", Icon: AlertTriangle, text: "oklch(0.55 0.14 75)" },
  maintenance: { label: "Under Maintenance", dot: "oklch(0.70 0.13 245)", bg: "oklch(0.70 0.13 245 / 0.15)", Icon: Wrench, text: "oklch(0.50 0.13 245)" },
  outage: { label: "Major Outage", dot: "oklch(0.62 0.22 27)", bg: "oklch(0.62 0.22 27 / 0.15)", Icon: AlertTriangle, text: "oklch(0.55 0.22 27)" },
};

function StatusPage() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const anyDegraded = systems.some((s) => s.status !== "operational");
  const overall: Status = anyDegraded ? (systems.some((s) => s.status === "outage") ? "outage" : systems.some((s) => s.status === "degraded") ? "degraded" : "maintenance") : "operational";
  const overallStyle = statusStyle[overall];

  return (
    <PageShell
      eyebrow="Real-time Status"
      title={<>All systems, <span className="bg-gradient-to-br from-teal to-peach bg-clip-text text-transparent">transparent</span></>}
      subtitle="Live uptime for every Pawtomation service. We update this page within 60 seconds of any incident."
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Overall banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-strong flex flex-col items-center gap-4 rounded-3xl p-7 text-center md:flex-row md:justify-between md:text-left"
          style={{ boxShadow: `0 20px 60px -20px ${overallStyle.dot}, inset 0 0 0 1px ${overallStyle.bg}` }}
        >
          <div className="flex items-center gap-4">
            <span className="relative grid size-14 place-items-center rounded-2xl" style={{ background: overallStyle.bg }}>
              <overallStyle.Icon className="size-6" style={{ color: overallStyle.text }} strokeWidth={2.4} />
              <span className="absolute inset-0 rounded-2xl animate-ping opacity-40" style={{ background: overallStyle.bg }} />
            </span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Overall status</p>
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">{overall === "operational" ? "All systems operational" : overallStyle.label}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-white/60 px-3 py-2 text-xs font-bold text-muted-foreground">
            <Activity className="size-3.5 text-teal" />
            Last updated {now.toLocaleTimeString()}
          </div>
        </motion.div>

        {/* Systems */}
        <div className="mt-8 glass-strong overflow-hidden rounded-3xl">
          {systems.map((s, i) => {
            const st = statusStyle[s.status];
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-center justify-between gap-4 border-b border-border/40 px-6 py-4 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex size-2.5">
                    <span className="absolute inset-0 animate-ping rounded-full opacity-60" style={{ background: st.dot }} />
                    <span className="relative size-2.5 rounded-full" style={{ background: st.dot }} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold tracking-tight">{s.name}</p>
                    <p className="text-xs font-medium text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider" style={{ background: st.bg, color: st.text }}>
                  <st.Icon className="size-3" strokeWidth={2.6} />
                  {st.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* 90-day uptime */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong mt-6 rounded-3xl p-6"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-extrabold tracking-tight">Last 90 days uptime</p>
            <p className="text-sm font-black text-teal">99.98%</p>
          </div>
          <div className="mt-4 flex gap-[2px]">
            {Array.from({ length: 90 }).map((_, i) => {
              const bad = i === 12 || i === 45 || i === 71;
              return (
                <span
                  key={i}
                  className="h-8 flex-1 rounded-[2px] transition-transform hover:scale-y-110"
                  style={{ background: bad ? "oklch(0.80 0.14 75)" : "oklch(0.72 0.18 150)" }}
                />
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
        </motion.div>

        {/* Incidents */}
        <div className="mt-10">
          <h2 className="text-2xl font-black tracking-tight md:text-3xl">Recent incidents</h2>
          <div className="mt-5 space-y-3">
            {incidents.map((inc, i) => (
              <motion.div
                key={inc.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{inc.date}</p>
                  <span className="rounded-md bg-teal/15 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-teal">{inc.status}</span>
                </div>
                <h3 className="mt-2 text-base font-extrabold tracking-tight">{inc.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{inc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
