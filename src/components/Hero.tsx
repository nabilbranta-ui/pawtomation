import { ArrowRight, Sparkles } from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground/80">
            <Sparkles className="size-3.5 text-teal" />
            All-in-one software for modern vet clinics
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Care for pets.{" "}
            <span className="bg-gradient-to-br from-teal via-peach to-lavender bg-clip-text text-transparent">
              Not paperwork.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Pawfolio brings appointments, medical records, billing and reminders into one beautifully simple
            platform — so your clinic runs smoother and every tail keeps wagging.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-teal to-teal/80 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04] animate-glow-pulse"
            >
              Request Demo
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-white/80">
              Login
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex -space-x-2">
              {["🐶", "🐱", "🐰", "🦜"].map((e, i) => (
                <div key={i} className="grid size-8 place-items-center rounded-full border-2 border-background bg-white shadow-sm text-sm">
                  {e}
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold text-foreground">Trusted by 2,400+ clinics</p>
              <p>across 32 countries worldwide</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:200ms]">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
