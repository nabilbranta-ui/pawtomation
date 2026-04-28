import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { Eye, EyeOff, Mail, Lock, PawPrint, X, User, ArrowRight } from "lucide-react";

type Mode = "signin" | "signup" | "forgot";

export function SignInDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [mode, setMode] = useState<Mode>("signin");
  const [showPw, setShowPw] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-md"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="fixed left-1/2 top-1/2 z-[70] w-[min(440px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-[2px] rounded-[2rem] opacity-70 blur-xl"
                    style={{ background: "linear-gradient(135deg, oklch(0.72 0.14 185 / 0.55), oklch(0.80 0.13 45 / 0.3))" }}
                  />
                  <div className="glass-strong relative rounded-[1.75rem] p-7">
                    <Dialog.Close className="absolute right-4 top-4 grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground">
                      <X className="size-4" />
                    </Dialog.Close>

                    <div className="flex flex-col items-center text-center">
                      <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-teal to-peach text-white shadow-md">
                        <PawPrint className="size-6" strokeWidth={2.4} />
                      </div>
                      <Dialog.Title className="mt-4 text-2xl font-extrabold tracking-tight">
                        {mode === "signin" && "Welcome back"}
                        {mode === "signup" && "Create your account"}
                        {mode === "forgot" && "Reset your password"}
                      </Dialog.Title>
                      <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                        {mode === "signin" && "Sign in to your Pawtomation workspace"}
                        {mode === "signup" && "Start your 14-day free trial"}
                        {mode === "forgot" && "We'll send you a reset link"}
                      </Dialog.Description>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.form
                        key={mode}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-6 space-y-3"
                      >
                        {mode === "signup" && (
                          <Field icon={<User className="size-4" />} type="text" placeholder="Your full name" defaultValue="Dr. Alex Rahman" />
                        )}
                        <Field icon={<Mail className="size-4" />} type="email" placeholder="you@clinic.com" defaultValue="demo@pawtomation.com" />
                        {mode !== "forgot" && (
                          <div className="relative">
                            <Field
                              icon={<Lock className="size-4" />}
                              type={showPw ? "text" : "password"}
                              placeholder="••••••••"
                              defaultValue="PawsForever!2026"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPw((v) => !v)}
                              aria-label={showPw ? "Hide password" : "Show password"}
                              className="absolute right-3 top-1/2 -translate-y-1/2 grid size-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground"
                            >
                              {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                            </button>
                          </div>
                        )}

                        {mode === "signin" && (
                          <div className="flex items-center justify-between pt-1 text-xs">
                            <label className="flex items-center gap-2 text-muted-foreground">
                              <input type="checkbox" className="size-3.5 accent-teal" defaultChecked />
                              Remember me
                            </label>
                            <button type="button" onClick={() => setMode("forgot")} className="font-semibold text-teal hover:underline">
                              Forgot password?
                            </button>
                          </div>
                        )}

                        <button
                          type="submit"
                          className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-teal to-teal/80 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_16px_40px_-12px_oklch(0.72_0.14_185/0.7)]"
                        >
                          {mode === "signin" && "Sign in"}
                          {mode === "signup" && "Create account"}
                          {mode === "forgot" && "Send reset link"}
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      </motion.form>
                    </AnimatePresence>

                    {mode !== "forgot" && (
                      <>
                        <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                          <div className="h-px flex-1 bg-border" />
                          or
                          <div className="h-px flex-1 bg-border" />
                        </div>
                        <button className="glass inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:scale-[1.01] hover:bg-white/80">
                          <GoogleIcon /> Continue with Google
                        </button>
                      </>
                    )}

                    <p className="mt-5 text-center text-xs text-muted-foreground">
                      {mode === "signin" && (
                        <>Don't have an account?{" "}
                          <button onClick={() => setMode("signup")} className="font-semibold text-teal hover:underline">Sign up</button>
                        </>
                      )}
                      {mode === "signup" && (
                        <>Already have one?{" "}
                          <button onClick={() => setMode("signin")} className="font-semibold text-teal hover:underline">Sign in</button>
                        </>
                      )}
                      {mode === "forgot" && (
                        <button onClick={() => setMode("signin")} className="font-semibold text-teal hover:underline">← Back to sign in</button>
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function Field({ icon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>
      <input
        {...props}
        className="h-12 w-full rounded-xl border border-border bg-white/70 pl-10 pr-10 text-sm font-medium text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4">
      <path fill="#EA4335" d="M12 10.2v3.9h5.4c-.2 1.4-1.7 4-5.4 4-3.2 0-5.9-2.7-5.9-6s2.6-6 5.9-6c1.8 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.6 14.6 2.6 12 2.6 6.8 2.6 2.6 6.8 2.6 12s4.2 9.4 9.4 9.4c5.4 0 9-3.8 9-9.1 0-.6-.1-1.1-.2-1.6H12Z"/>
    </svg>
  );
}
