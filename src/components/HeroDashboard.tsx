import { Activity, Calendar, HeartPulse, Stethoscope, Syringe, TrendingUp } from "lucide-react";

export function HeroDashboard() {
  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[560px]">
      {/* Ambient glow */}
      <div
        className="absolute inset-10 rounded-[2rem] blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.14 185 / 0.6), oklch(0.82 0.13 45 / 0.4), transparent 70%)" }}
      />

      {/* Main dashboard card */}
      <div
        className="glass-strong absolute left-1/2 top-6 w-[88%] -translate-x-1/2 rounded-3xl p-6 animate-float"
        style={{ transform: "translateX(-50%) perspective(1200px) rotateX(6deg) rotateY(-8deg)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground">Today's overview</p>
            <p className="mt-0.5 text-lg font-bold">Clinic Dashboard</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-teal/15 px-2.5 py-1 text-xs font-semibold text-teal">
            <span className="size-1.5 rounded-full bg-teal animate-pulse" /> Live
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { icon: Calendar, label: "Appts", value: "24", tint: "teal" },
            { icon: Stethoscope, label: "Checkups", value: "12", tint: "peach" },
            { icon: Syringe, label: "Vaccines", value: "08", tint: "lavender" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border/60 bg-white/70 p-3">
              <s.icon className="size-4 text-muted-foreground" />
              <p className="mt-2 text-xl font-bold tracking-tight">{s.value}</p>
              <p className="text-[11px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div className="mt-5 rounded-2xl border border-border/60 bg-white/70 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-teal" />
              <span className="text-sm font-semibold">Weekly visits</span>
            </div>
            <span className="text-xs font-semibold text-teal">+18%</span>
          </div>
          <svg viewBox="0 0 200 60" className="mt-3 w-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.14 185)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="oklch(0.72 0.14 185)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,45 L30,35 L60,40 L90,22 L120,28 L150,14 L180,20 L200,10 L200,60 L0,60 Z" fill="url(#g1)" />
            <path d="M0,45 L30,35 L60,40 L90,22 L120,28 L150,14 L180,20 L200,10" fill="none" stroke="oklch(0.68 0.14 185)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Floating patient card */}
      <div
        className="glass-strong absolute -left-2 top-48 w-60 rounded-2xl p-4 animate-float-delayed"
        style={{ transform: "perspective(1000px) rotateY(8deg)" }}
      >
        <div className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-peach to-peach/60 text-white text-lg">🐕</div>
          <div>
            <p className="text-sm font-bold">Max · Golden Retriever</p>
            <p className="text-xs text-muted-foreground">Next: 10:30 AM</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg bg-white/60 px-2.5 py-1.5">
          <div className="flex items-center gap-1.5">
            <HeartPulse className="size-3.5 text-peach" />
            <span className="text-[11px] font-medium">Heart rate</span>
          </div>
          <span className="text-[11px] font-bold">92 bpm</span>
        </div>
      </div>

      {/* Floating vaccine reminder */}
      <div
        className="glass-strong absolute -right-2 bottom-16 w-56 rounded-2xl p-4 animate-float-slow"
        style={{ transform: "perspective(1000px) rotateY(-10deg)" }}
      >
        <div className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-lg bg-lavender/40">
            <Activity className="size-4" style={{ color: "oklch(0.55 0.12 300)" }} />
          </div>
          <div>
            <p className="text-xs font-semibold">Vaccine due</p>
            <p className="text-[11px] text-muted-foreground">3 patients this week</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-teal to-peach" />
        </div>
      </div>
    </div>
  );
}
