import { useState } from "react";
import type { SVGProps, CSSProperties } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { PawPrint, ArrowRight, Mail, Phone } from "lucide-react";
import { BookDemoDialog } from "./BookDemoDialog";

const columns: { title: string; links: { label: string; to: string; hash?: boolean }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/#features", hash: true },
      { label: "Pricing", to: "/#pricing", hash: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Customers", to: "/our-customers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help centre", to: "/help-centre" },
      { label: "Status", to: "/realtime-status" },
    ],
  },
];

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const socials = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/pawtomation", label: "Facebook", brand: "#1877F2", shadow: "24 119 242" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/pawtomation/", label: "Instagram", brand: "linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)", shadow: "221 42 123" },
  { Icon: WhatsappIcon, href: "https://wa.me/8801798970144", label: "WhatsApp", brand: "#25D366", shadow: "37 211 102" },
];

const contacts = [
  { Icon: Phone, label: "Call us", value: "09643656823", href: "tel:09643656823", accent: "teal" },
  { Icon: WhatsappIcon, label: "WhatsApp", value: "01798970144", href: "https://wa.me/8801798970144", accent: "whatsapp" },
  { Icon: Mail, label: "Email", value: "support@pawtomation.com", href: "mailto:support@pawtomation.com", accent: "peach" },
];

export function Footer() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <footer className="relative pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem]"
        >
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, oklch(0.78 0.14 185 / 0.45), transparent 60%), radial-gradient(circle at 80% 70%, oklch(0.82 0.13 45 / 0.4), transparent 60%), radial-gradient(circle at 50% 50%, oklch(0.82 0.10 300 / 0.35), transparent 70%)",
            }}
          />
          <div className="glass-strong relative rounded-[2.5rem] px-8 py-14 text-center md:px-16 md:py-20">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Ready to care smarter,{" "}
              <span className="bg-gradient-to-br from-teal via-peach to-lavender bg-clip-text text-transparent">
                not harder?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Join 2,400+ clinics running their entire practice on Pawtomation. Free 14-day trial, no card required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => setDemoOpen(true)} className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-teal to-teal/80 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_20px_60px_-15px_oklch(0.72_0.14_185/0.7)]">
                Get Started
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a href="mailto:hello@pawtomation.com" className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-white/80">
                Talk to sales
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer grid */}
        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-teal to-peach text-white shadow-md">
                <PawPrint className="size-5" strokeWidth={2.4} />
              </span>
              <span className="text-lg font-extrabold tracking-tight">Pawtomation</span>
            </a>
            <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-muted-foreground">
              The all-in-one pet clinic management platform — built for modern veterinary teams.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group relative grid size-11 place-items-center overflow-hidden rounded-xl border border-white/40 bg-white/50 text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-white hover:border-white/70"
                  style={{
                    // @ts-ignore CSS var
                    "--brand": s.brand,
                    "--glow": s.shadow,
                  } as CSSProperties}
                >
                  <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: s.brand }}
                  />
                  <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ boxShadow: `0 12px 32px -8px rgb(${s.shadow} / 0.55), inset 0 1px 0 rgb(255 255 255 / 0.25)` }}
                  />
                  <s.Icon className="relative size-[18px] transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>

            {/* Contact cards */}
            <ul className="mt-6 space-y-2">
              {contacts.map((c) => (
                <li key={c.value}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-white/40 bg-white/40 px-3 py-2.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/70 hover:shadow-[0_10px_30px_-12px_oklch(0.72_0.14_185/0.45)]"
                  >
                    <span className={`grid size-9 place-items-center rounded-lg transition-all duration-300 ${
                      c.accent === "teal" ? "bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white" :
                      c.accent === "whatsapp" ? "bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white" :
                      "bg-peach/10 text-peach group-hover:bg-peach group-hover:text-white"
                    }`}>
                      <c.Icon className="size-4" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</span>
                      <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-foreground">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-extrabold tracking-tight">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => {
                  const content = (
                    <span className="relative">
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 rounded-full bg-gradient-to-r from-teal to-peach transition-all duration-300 group-hover:w-full" />
                    </span>
                  );
                  const className = "group inline-flex items-center text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground";
                  return (
                    <li key={l.label}>
                      {l.hash ? (
                        <a href={l.to} className={className}>{content}</a>
                      ) : (
                        <Link to={l.to} className={className}>{content}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs font-bold text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Pawtomation, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-foreground">Terms</Link>
            <Link to="/security" className="transition-colors hover:text-foreground">Security</Link>
            <Link to="/cookies" className="transition-colors hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </footer>
  );
}
