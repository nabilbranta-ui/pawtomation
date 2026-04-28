import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Cookie, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Pawtomation" },
      { name: "description", content: "How Pawtomation uses cookies and similar technologies." },
      { property: "og:title", content: "Cookie Policy — Pawtomation" },
      { property: "og:description", content: "Exactly which cookies we set and why." },
    ],
  }),
  component: CookiesPage,
});

const cookies = [
  { name: "pt_session", type: "Essential", duration: "Session", desc: "Keeps you signed in and identifies your clinic workspace. Required for the app to work.", tint: "oklch(0.72 0.14 185)" },
  { name: "pt_csrf", type: "Essential", duration: "Session", desc: "CSRF anti-forgery token used to prevent cross-site request forgery on every state-changing action.", tint: "oklch(0.72 0.14 185)" },
  { name: "pt_theme", type: "Preference", duration: "1 year", desc: "Remembers whether you prefer light or dark mode so the app looks right when you return.", tint: "oklch(0.82 0.08 300)" },
  { name: "pt_locale", type: "Preference", duration: "1 year", desc: "Saves your preferred language (English or Bangla) so we don't ask every visit.", tint: "oklch(0.82 0.08 300)" },
  { name: "_cf_bm", type: "Security", duration: "30 min", desc: "Cloudflare's bot-management cookie — distinguishes humans from bots at the network edge.", tint: "oklch(0.70 0.12 20)" },
  { name: "cf_turnstile", type: "Security", duration: "Session", desc: "Cloudflare Turnstile challenge token used to prevent abuse on forms (login, signup, demo).", tint: "oklch(0.70 0.12 20)" },
  { name: "pt_analytics", type: "Analytics (opt-in)", duration: "180 days", desc: "Anonymous, aggregated usage analytics. Off by default. You can enable it in Settings → Privacy.", tint: "oklch(0.80 0.12 45)" },
];

const typeColor: Record<string, string> = {
  Essential: "oklch(0.72 0.14 185)",
  Preference: "oklch(0.82 0.08 300)",
  Security: "oklch(0.70 0.12 20)",
  "Analytics (opt-in)": "oklch(0.80 0.12 45)",
};

function CookiesPage() {
  return (
    <PageShell
      eyebrow="Cookie Policy"
      title={<>The cookies we <span className="bg-gradient-to-br from-teal to-peach bg-clip-text text-transparent">actually use</span></>}
      subtitle="Short list. No tracking for advertising, ever. Last updated: April 28, 2026."
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-3xl p-7"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-teal to-peach text-white">
            <Cookie className="size-5" strokeWidth={2.5} />
          </span>
          <h2 className="mt-4 text-xl font-black tracking-tight md:text-2xl">Small files. Big transparency.</h2>
          <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">
            Cookies are small text files your browser stores. We only use them to keep the app working, remember your preferences, and protect against abuse. We <strong>do not</strong> use advertising or third-party tracking cookies.
          </p>
        </motion.div>

        {/* Table */}
        <div className="glass-strong mt-8 overflow-hidden rounded-3xl">
          <div className="hidden grid-cols-12 border-b border-border/50 px-6 py-3 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground md:grid">
            <span className="col-span-3">Name</span>
            <span className="col-span-2">Type</span>
            <span className="col-span-2">Duration</span>
            <span className="col-span-5">Purpose</span>
          </div>
          {cookies.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="grid grid-cols-1 gap-1 border-b border-border/40 px-6 py-4 last:border-b-0 md:grid-cols-12 md:items-center md:gap-4"
            >
              <code className="col-span-3 text-sm font-black tracking-tight">{c.name}</code>
              <span className="col-span-2">
                <span className="inline-block rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white" style={{ background: typeColor[c.type] }}>
                  {c.type}
                </span>
              </span>
              <span className="col-span-2 text-xs font-bold text-muted-foreground">{c.duration}</span>
              <span className="col-span-5 text-sm font-medium text-muted-foreground">{c.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong mt-8 rounded-3xl p-7"
        >
          <h3 className="text-lg font-extrabold tracking-tight">Your choices</h3>
          <ul className="mt-4 space-y-3">
            {[
              "You can block or delete cookies at any time through your browser settings.",
              "Blocking essential cookies will sign you out and break parts of the app.",
              "Analytics cookies are strictly opt-in — we default to OFF.",
              "We respect Do-Not-Track signals and Global Privacy Control headers.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </PageShell>
  );
}
