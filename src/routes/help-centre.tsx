import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen, Zap, CreditCard, Users, Shield, Wrench, ChevronRight, LifeBuoy } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/help-centre")({
  head: () => ({
    meta: [
      { title: "Help Centre — Pawtomation" },
      { name: "description", content: "Guides, tutorials and answers to run your clinic with Pawtomation." },
      { property: "og:title", content: "Help Centre — Pawtomation" },
      { property: "og:description", content: "Everything you need to master Pawtomation." },
    ],
  }),
  component: HelpCentrePage,
});

const categories = [
  { Icon: Zap, title: "Getting Started", count: 14, desc: "Set up your clinic, invite staff, and go live in under 30 minutes.", tint: "oklch(0.72 0.14 185)" },
  { Icon: BookOpen, title: "Appointments & Records", count: 22, desc: "Calendar, SOAP notes, digital prescriptions and vaccination logs.", tint: "oklch(0.80 0.12 45)" },
  { Icon: CreditCard, title: "Billing & Payments", count: 18, desc: "Invoices, history subscription revenue split, taxes and refunds.", tint: "oklch(0.82 0.08 300)" },
  { Icon: Users, title: "Roles & Permissions", count: 11, desc: "RBAC, multi-branch access, audit trails and staff management.", tint: "oklch(0.72 0.18 150)" },
  { Icon: Shield, title: "Security & Privacy", count: 9, desc: "Data isolation, encryption, SSL and bot protection.", tint: "oklch(0.65 0.16 260)" },
  { Icon: Wrench, title: "Troubleshooting", count: 16, desc: "Common errors, browser issues and how to contact support.", tint: "oklch(0.70 0.12 20)" },
];

const popular = [
  "How do I add a new veterinarian to my clinic?",
  "Setting up the 100 BDT history subscription revenue split",
  "How to import existing patient records from spreadsheets",
  "Configuring SMS & WhatsApp appointment reminders",
  "Managing multiple branches under one account",
  "How to export monthly revenue and tax reports",
  "Changing subscription from monthly to yearly",
  "What to do when a staff member leaves the clinic",
];

function HelpCentrePage() {
  const [query, setQuery] = useState("");
  return (
    <PageShell
      eyebrow="Help Centre"
      title={<>How can we <span className="bg-gradient-to-br from-teal to-peach bg-clip-text text-transparent">help today?</span></>}
      subtitle="Browse guides, watch tutorials, or search for exactly what you need."
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-strong flex items-center gap-3 rounded-2xl px-5 py-4"
        >
          <Search className="size-5 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, e.g. 'revenue split' or 'add staff'…"
            className="flex-1 bg-transparent text-base font-semibold outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden rounded-md border border-border/60 bg-white/60 px-2 py-1 text-[10px] font-bold text-muted-foreground sm:inline-block">⌘ K</kbd>
        </motion.div>

        {/* Categories */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.a
              key={c.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-strong group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-8 -top-8 size-24 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60" style={{ background: c.tint }} />
              <span className="relative grid size-11 place-items-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${c.tint}, color-mix(in oklab, ${c.tint} 60%, white))` }}>
                <c.Icon className="size-5" strokeWidth={2.4} />
              </span>
              <h3 className="relative mt-4 text-lg font-extrabold tracking-tight">{c.title}</h3>
              <p className="relative mt-1 text-sm font-medium text-muted-foreground">{c.desc}</p>
              <p className="relative mt-4 text-xs font-extrabold uppercase tracking-widest text-teal">{c.count} articles →</p>
            </motion.a>
          ))}
        </div>

        {/* Popular */}
        <div className="mt-14">
          <h2 className="text-2xl font-black tracking-tight md:text-3xl">Popular articles</h2>
          <ul className="mt-5 space-y-2">
            {popular.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <a href="#" className="glass group flex items-center justify-between rounded-xl px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80">
                  <span className="text-sm font-bold">{p}</span>
                  <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-teal" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact fallback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong mt-14 flex flex-col items-center gap-4 rounded-3xl p-8 text-center md:flex-row md:justify-between md:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-teal to-peach text-white">
              <LifeBuoy className="size-5" />
            </span>
            <div>
              <h3 className="text-lg font-extrabold tracking-tight">Still need help?</h3>
              <p className="text-sm font-medium text-muted-foreground">Our support team replies within 2 working hours.</p>
            </div>
          </div>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background transition-all hover:scale-[1.03]">
            Contact support
          </a>
        </motion.div>
      </div>
    </PageShell>
  );
}
