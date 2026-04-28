import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pawtomation" },
      { name: "description", content: "We never share or sell clinic customer data or sales data. Read our full privacy policy." },
      { property: "og:title", content: "Privacy Policy — Pawtomation" },
      { property: "og:description", content: "Your clinic's data is yours — always." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "1. Information we collect",
    p: "We collect the minimum required to operate your clinic: account info (name, email, phone), clinic profile, and the records you create inside Pawtomation (patients, appointments, invoices, medical notes). We do not collect any data from your devices that is not directly related to providing the service.",
  },
  {
    h: "2. How we use your data",
    p: "Exclusively to operate and improve the service for you: render your dashboard, send reminders you configure, process payments you initiate, and provide support when you ask for it. That's it.",
  },
  {
    h: "3. Data ownership",
    p: "You own 100% of the data in your clinic's workspace. Patient records, customer profiles, sales data, invoices, analytics — all of it. You can export everything as CSV or JSON at any time from Settings → Data Export.",
  },
  {
    h: "4. Sub-processors",
    p: "We use a small, vetted list of infrastructure providers (hosting, email delivery, SMS/WhatsApp gateway, payment processor). Each one is contractually bound to the same privacy standards and is only permitted to process data needed to deliver their specific function.",
  },
  {
    h: "5. Retention & deletion",
    p: "Your data lives in our system as long as your account is active. If you cancel, we keep backups for 30 days (in case you change your mind) and then permanently delete everything. You can also request immediate deletion by emailing support@pawtomation.com.",
  },
  {
    h: "6. Your rights",
    p: "You may access, correct, export, or delete your data at any time. Requests are fulfilled within 7 working days. Contact privacy@pawtomation.com to exercise any of these rights.",
  },
  {
    h: "7. Security",
    p: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We enforce Row-Level Security, role-based access control, signed media storage, and Cloudflare bot + Turnstile protection. Read more on our Security page.",
  },
  {
    h: "8. Contact",
    p: "Questions about privacy? Email us at privacy@pawtomation.com or call 09643656823. We take every privacy question seriously and will respond within 2 working days.",
  },
];

function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title={<>Your clinic's data <span className="bg-gradient-to-br from-teal to-peach bg-clip-text text-transparent">stays yours</span></>}
      subtitle="Last updated: April 28, 2026"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Non-negotiable promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-8"
          style={{ boxShadow: "0 20px 60px -15px oklch(0.72 0.14 185 / 0.45), inset 0 0 0 1px oklch(0.72 0.14 185 / 0.3)" }}
        >
          <div className="absolute -right-10 -top-10 size-40 rounded-full opacity-40 blur-3xl" style={{ background: "oklch(0.72 0.14 185)" }} />
          <span className="relative grid size-12 place-items-center rounded-xl bg-gradient-to-br from-teal to-teal/70 text-white">
            <ShieldCheck className="size-5" strokeWidth={2.5} />
          </span>
          <p className="relative mt-5 text-xs font-extrabold uppercase tracking-widest text-teal">Our non-negotiable promise</p>
          <h2 className="relative mt-2 text-2xl font-black leading-snug tracking-tight md:text-3xl">
            We never share, sell, or disclose any clinic's customer data or sales data — under any circumstance, to any third party, ever.
          </h2>
          <p className="relative mt-3 text-sm font-medium text-muted-foreground">
            Not for advertising. Not for analytics partnerships. Not for AI training. Not for anything. Your patients' records and your clinic's revenue numbers belong to you alone.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="mt-10 space-y-6">
          {sections.map((s, i) => (
            <motion.section
              key={s.h}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
                <Lock className="size-4 text-teal" /> {s.h}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{s.p}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
