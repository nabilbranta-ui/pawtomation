import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Pawtomation" },
      { name: "description", content: "The terms under which you use Pawtomation." },
      { property: "og:title", content: "Terms of Service — Pawtomation" },
      { property: "og:description", content: "Our agreement with every clinic using Pawtomation." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  { h: "1. Acceptance of terms", p: "By creating a Pawtomation account or using any part of the service, you agree to be bound by these Terms. If you don't agree, please don't use the service." },
  { h: "2. The service", p: "Pawtomation provides cloud-based pet clinic management software — including appointments, medical records, billing, reminders, and analytics — delivered through a secure multi-tenant web application." },
  { h: "3. Account & eligibility", p: "You must be at least 18 and authorized to act on behalf of your clinic to sign up. You're responsible for keeping your login credentials secure and for any activity under your account." },
  { h: "4. Subscription & payments", p: "Plans are billed monthly (2,000 BDT/month) or yearly (24,000 BDT/year) in advance. The 100 BDT history subscription revenue split applies only to the dedicated feature; full terms inside the app. Payments are non-refundable except as required by law." },
  { h: "5. Free trial", p: "New clinics get a 14-day free trial with full feature access. No credit card is required to start. At the end of the trial, you may subscribe or your workspace will be frozen (data retained for 30 days)." },
  { h: "6. Acceptable use", p: "You agree not to: reverse-engineer the platform, use it to store illegal content, attempt to breach security controls, impersonate other users, or resell access without our written consent." },
  { h: "7. Data & content", p: "You retain full ownership of all clinic, patient, and customer data you upload. We process it solely to deliver the service, in line with our Privacy Policy. We never share or sell it." },
  { h: "8. Uptime & SLA", p: "We target 99.9% monthly uptime. See the live status page at /realtime-status. Scheduled maintenance is announced at least 24 hours in advance whenever possible." },
  { h: "9. Intellectual property", p: "Pawtomation's software, brand, and design are owned by Pawtomation, Inc. You get a non-exclusive, non-transferable license to use the service while your subscription is active." },
  { h: "10. Termination", p: "You can cancel any time from Settings → Billing. We may suspend or terminate accounts that violate these Terms, with notice where reasonable. On termination, you can export your data within 30 days." },
  { h: "11. Limitation of liability", p: "To the maximum extent permitted by law, Pawtomation's liability is capped at the amount you paid us in the 12 months preceding the claim. We are not liable for indirect or consequential damages." },
  { h: "12. Changes to terms", p: "We may update these Terms occasionally. Material changes will be announced by email and in-app at least 14 days before they take effect." },
  { h: "13. Governing law", p: "These Terms are governed by the laws of Bangladesh. Any disputes will be resolved in the courts of Dhaka." },
  { h: "14. Contact", p: "Questions about these Terms? Email legal@pawtomation.com or call 09643656823." },
];

function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms of Service"
      title={<>A fair deal for <span className="bg-gradient-to-br from-teal to-peach bg-clip-text text-transparent">every clinic</span></>}
      subtitle="Last updated: April 28, 2026 · Plain English where possible."
    >
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-3xl p-7"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-teal to-peach text-white">
            <ScrollText className="size-5" strokeWidth={2.5} />
          </span>
          <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">
            These Terms of Service ("Terms") govern your use of Pawtomation. We've kept them short, clear, and designed to be read — not just scrolled past.
          </p>
        </motion.div>

        <div className="mt-8 space-y-5">
          {sections.map((s, i) => (
            <motion.section
              key={s.h}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-extrabold tracking-tight">{s.h}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{s.p}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
