import { createFileRoute } from "@tanstack/react-router";
import type { SVGProps } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
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

const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const channels = [
  { Icon: Phone, label: "Call us", value: "09643656823", desc: "Sun–Thu · 9 AM – 9 PM (GMT+6)", href: "tel:09643656823", tint: "oklch(0.72 0.14 185)" },
  { Icon: WhatsappIcon, label: "WhatsApp", value: "01798970144", desc: "Fastest response — reply within 5 min", href: "https://wa.me/8801798970144", tint: "oklch(0.72 0.18 150)" },
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
                <span className="font-semibold">Pawtomation HQ<br /><span className="font-medium text-muted-foreground">Gohail Road, Sutrapur, Bogura-5800,<br />Bogura Sadar, Bangladesh</span></span>
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
