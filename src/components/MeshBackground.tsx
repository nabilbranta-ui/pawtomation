export function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40" />
      {/* Teal blob */}
      <div
        className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full opacity-50 blur-3xl animate-mesh"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.14 185 / 0.55), transparent 65%)" }}
      />
      {/* Peach blob */}
      <div
        className="absolute top-1/3 -right-32 h-[38rem] w-[38rem] rounded-full opacity-45 blur-3xl animate-mesh-alt"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.13 45 / 0.55), transparent 65%)" }}
      />
      {/* Lavender blob */}
      <div
        className="absolute bottom-0 left-1/3 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl animate-mesh"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.10 300 / 0.6), transparent 65%)", animationDelay: "-8s" }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.2 0.02 250) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.2 0.02 250) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
