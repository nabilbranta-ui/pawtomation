import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pawtomation — We're here to help" },
      { name: "description", content: "Talk to our team. Phone, WhatsApp, email — whichever you prefer." },
      { property: "og:title", content: "Contact — Pawtomation" },
      { property: "og:description", content: "Get in touch with the Pawtomation team." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { Icon: Phone, label: "Call us", value: "09643656823", desc: "Sun–Thu · 9 AM – 9 PM (GMT+6)", href: "tel:09643656823", tint: "oklch(0.72 0.14 185)" },
  { Icon: MessageCircle, label: "WhatsApp", value: "01798970144", desc: "Fastest response — reply within 5 min", href: "https://wa.me/8801798970144", tint: "oklch(0.72 0.18 150)" },
  { Icon: Mail, label: "Email us", value: "support@pawtomation.com", desc: "We'll reply within 2 working hours", href: "mailto:support@pawtomation.com", tint: "oklch(0.80 0.12 45)" },
];

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title={<>Let's start a <span className="bg-gradient-to-br from-teal to-peach bg-clip-text text-transparent">conversation</span></>}
      subtitle="Whether you need a demo, onboarding support, or just have a question — our team is one tap away."
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-strong group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="absolute -right-8 -top-8 size-28 rounded-full opacity-40 blur-3xl transition-opacity group-hover:opacity-70"
                style={{ background: c.tint }}
              />
              <span
                className="relative grid size-12 place-items-center rounded-xl text-white"
                style={{ background: `linear-gradient(135deg, ${c.tint}, color-mix(in oklab, ${c.tint} 60%, white))` }}
              >
                <c.Icon className="size-5" strokeWidth={2.4} />
              </span>
              <p className="relative mt-5 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">{c.label}</p>
              <p className="relative mt-1 text-xl font-black tracking-tight">{c.value}</p>
              <p className="relative mt-2 text-sm font-medium text-muted-foreground">{c.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Info + form */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-3xl p-7"
          >
            <h3 className="text-2xl font-black tracking-tight">Visit our HQ</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-teal" />
                <span className="font-semibold">Pawtomation HQ<br /><span className="font-medium text-muted-foreground">Gulshan 2, Dhaka 1212, Bangladesh</span></span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 text-peach" />
                <span className="font-semibold">Business hours<br /><span className="font-medium text-muted-foreground">Sun–Thu · 9:00 AM – 9:00 PM (GMT+6)</span></span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-lavender" />
                <span className="font-semibold">Partnership enquiries<br /><span className="font-medium text-muted-foreground">partners@pawtomation.com</span></span>
              </li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back within 2 hours."); }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-strong rounded-3xl p-7"
          >
            <h3 className="text-2xl font-black tracking-tight">Send us a message</h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" className="rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm font-semibold outline-none transition-all focus:border-teal focus:bg-white" />
              <input required type="email" placeholder="Email" className="rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm font-semibold outline-none transition-all focus:border-teal focus:bg-white" />
            </div>
            <input placeholder="Clinic name" className="mt-4 w-full rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm font-semibold outline-none transition-all focus:border-teal focus:bg-white" />
            <textarea required rows={4} placeholder="How can we help?" className="mt-4 w-full rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm font-semibold outline-none transition-all focus:border-teal focus:bg-white" />
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-teal to-teal/80 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_oklch(0.72_0.14_185/0.7)]">
              Send message <Send className="size-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </PageShell>
  );
}
