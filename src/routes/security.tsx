import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck, KeyRound, Lock, UserCheck, Bot, ShieldAlert,
  FileCheck2, Server, Database, Fingerprint, Image, Globe,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — Pawtomation" },
      { name: "description", content: "How Pawtomation protects your clinic: JWT, RLS, RBAC, Turnstile, bot protection, SSL, signed media and more." },
      { property: "og:title", content: "Security — Pawtomation" },
      { property: "og:description", content: "Enterprise-grade security, baked in at every layer." },
    ],
  }),
  component: SecurityPage,
});

const layers = [
  { Icon: FileCheck2, title: "Front-end Validation", desc: "Every form field is validated client-side in real time, preventing malformed requests before they even reach our servers.", tint: "oklch(0.72 0.14 185)" },
  { Icon: Server, title: "Server-side Validation", desc: "Every payload is re-validated on the server with strict Zod schemas. Nothing is trusted from the client — ever.", tint: "oklch(0.80 0.12 45)" },
  { Icon: KeyRound, title: "JWT Token Validation", desc: "Short-lived, signed JSON Web Tokens secure every API request. Tokens rotate automatically and can be revoked instantly.", tint: "oklch(0.82 0.08 300)" },
  { Icon: Database, title: "Row-Level Security (RLS)", desc: "PostgreSQL RLS policies ensure one clinic can never read or write another clinic's data — enforced at the database level, not just the app.", tint: "oklch(0.72 0.18 150)" },
  { Icon: UserCheck, title: "Role-Based Access Control (RBAC)", desc: "Granular roles (Owner, Manager, Vet, Receptionist, Accountant) with fine-grained permissions. Every action is checked and logged.", tint: "oklch(0.65 0.16 260)" },
  { Icon: ShieldAlert, title: "Cloudflare Turnstile", desc: "Invisible CAPTCHA on all login, signup and form submissions — stops credential stuffing and scripted abuse without annoying users.", tint: "oklch(0.70 0.12 20)" },
  { Icon: Bot, title: "Cloudflare Bot Protection", desc: "Advanced bot management fingerprints and blocks malicious automated traffic at the edge, before it reaches our infrastructure.", tint: "oklch(0.74 0.14 260)" },
  { Icon: Globe, title: "SSL / TLS 1.3", desc: "All traffic is encrypted with industry-standard TLS 1.3 and HSTS-enforced. We get an A+ rating on Qualys SSL Labs.", tint: "oklch(0.72 0.14 185)" },
  { Icon: Image, title: "Signed Media Storage", desc: "X-rays, lab reports and pet photos are stored with short-lived signed URLs. Even a leaked link expires within minutes.", tint: "oklch(0.80 0.12 45)" },
  { Icon: Fingerprint, title: "Full Audit Trail", desc: "Every record change is logged with user, IP, device fingerprint and timestamp. Retained for 2 years, exportable on demand.", tint: "oklch(0.82 0.08 300)" },
  { Icon: Lock, title: "Encryption at Rest (AES-256)", desc: "Every byte in our databases and backups is encrypted with AES-256. Keys are managed by a hardware security module (HSM).", tint: "oklch(0.72 0.18 150)" },
  { Icon: ShieldCheck, title: "Isolated Multi-tenant Workspaces", desc: "Each clinic operates in a logically isolated tenant boundary enforced at every layer — network, app, database, and storage.", tint: "oklch(0.65 0.16 260)" },
];

function SecurityPage() {
  return (
    <PageShell
      eyebrow="Security"
      title={<>Enterprise-grade security, <span className="bg-gradient-to-br from-teal to-peach bg-clip-text text-transparent">at every layer</span></>}
      subtitle="Your clinic's data is protected by defence-in-depth. Here's exactly how we do it — no marketing fluff."
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {layers.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="glass-strong group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-8 -top-8 size-28 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60" style={{ background: l.tint }} />
              <span className="relative grid size-12 place-items-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${l.tint}, color-mix(in oklab, ${l.tint} 60%, white))` }}>
                <l.Icon className="size-5" strokeWidth={2.4} />
              </span>
              <h3 className="relative mt-4 text-base font-extrabold tracking-tight">{l.title}</h3>
              <p className="relative mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{l.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Badges / compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong mt-12 rounded-3xl p-8 text-center"
        >
          <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Compliance & standards</p>
          <h3 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">Aligned with SOC 2, GDPR & ISO 27001 controls</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-muted-foreground">
            We map our internal controls to SOC 2 Type II, GDPR, and ISO 27001 requirements. Third-party penetration tests are conducted every 6 months. Report a vulnerability? Email <a href="mailto:security@pawtomation.com" className="font-bold text-teal hover:underline">security@pawtomation.com</a>.
          </p>
        </motion.div>
      </div>
    </PageShell>
  );
}
