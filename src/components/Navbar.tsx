import { useState } from "react";
import { PawPrint } from "lucide-react";
import { SignInDialog } from "./SignInDialog";
import { BookDemoDialog } from "./BookDemoDialog";

const links = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[min(1180px,calc(100%-2rem))] -translate-x-1/2">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-teal to-peach text-white shadow-md">
              <PawPrint className="size-5" strokeWidth={2.4} />
            </span>
            <span className="text-lg font-bold tracking-tight">Pawtomation</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSignInOpen(true)}
              className="hidden rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Sign in
            </button>
            <button
              onClick={() => setDemoOpen(true)}
              className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all hover:scale-[1.03] hover:bg-foreground/90"
            >
              Book demo
            </button>
          </div>
        </nav>
      </header>

      <SignInDialog open={signInOpen} onOpenChange={setSignInOpen} />
      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}
