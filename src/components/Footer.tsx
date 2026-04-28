import { useState } from "react";
import { motion } from "framer-motion";
import { PawPrint, Twitter, Linkedin, Github, Instagram, ArrowRight } from "lucide-react";
import { BookDemoDialog } from "./BookDemoDialog";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help center", "Community", "API reference", "Status"],
  },
];

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Github, href: "#" },
];

export function Footer() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <footer className="relative pt-24 pb-10">
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
              <span className="text-lg font-bold tracking-tight">Pawtomation</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The all-in-one pet clinic management platform — built for modern veterinary teams.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="glass grid size-10 place-items-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:text-teal"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold tracking-tight">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="relative">
                        {l}
                        <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 rounded-full bg-gradient-to-r from-teal to-peach transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Pawtomation, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Security</a>
            <a href="#" className="transition-colors hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </footer>
  );
}
