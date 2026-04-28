import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, User, Mail, Phone, Building2, Users, CalendarClock, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const clinicSizes = ["Solo practice", "2–5 vets", "6–20 vets", "20+ vets"];
const timeSlots = ["Today", "Tomorrow", "This week", "Next week"];

export function BookDemoDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [size, setSize] = useState(clinicSizes[1]);
  const [slot, setSlot] = useState(timeSlots[1]);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = (v: boolean) => {
    onOpenChange(v);
    if (!v) setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
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
                className="fixed left-1/2 top-1/2 z-[70] w-[min(520px,calc(100%-2rem))] max-h-[92vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-[2px] rounded-[2rem] opacity-70 blur-xl"
                    style={{ background: "linear-gradient(135deg, oklch(0.80 0.13 45 / 0.55), oklch(0.72 0.14 185 / 0.4))" }}
                  />
                  <div className="glass-strong relative rounded-[1.75rem] p-7">
                    <Dialog.Close className="absolute right-4 top-4 grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground">
                      <X className="size-4" />
                    </Dialog.Close>

                    <AnimatePresence mode="wait">
                      {!submitted ? (
                        <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}>
                          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-teal">
                            <Sparkles className="size-3.5" /> Book a live demo
                          </div>
                          <Dialog.Title className="mt-3 text-2xl font-extrabold tracking-tight">
                            See Pawtomation in your clinic.
                          </Dialog.Title>
                          <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                            A 20-minute walkthrough tailored to your workflow — no commitment.
                          </Dialog.Description>

                          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-5 space-y-3">
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                              <Field icon={<User className="size-4" />} placeholder="Full name" defaultValue="Dr. Rafiul Islam" />
                              <Field icon={<Building2 className="size-4" />} placeholder="Clinic name" defaultValue="Happy Tails Vet Care" />
                            </div>
                            <Field icon={<Mail className="size-4" />} type="email" placeholder="Work email" defaultValue="rafiul@happytails.com" />
                            <Field icon={<Phone className="size-4" />} type="tel" placeholder="Phone" defaultValue="+880 1700 000000" />

                            <div>
                              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                                <Users className="size-3.5" /> Clinic size
                              </label>
                              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                {clinicSizes.map((s) => (
                                  <button
                                    type="button"
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={`rounded-xl border px-2 py-2 text-xs font-semibold transition-all ${
                                      size === s
                                        ? "border-teal bg-teal/10 text-teal"
                                        : "border-border bg-white/60 text-muted-foreground hover:bg-white/80"
                                    }`}
                                  >
                                    {s}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                                <CalendarClock className="size-3.5" /> Preferred time
                              </label>
                              <div className="grid grid-cols-4 gap-2">
                                {timeSlots.map((t) => (
                                  <button
                                    type="button"
                                    key={t}
                                    onClick={() => setSlot(t)}
                                    className={`rounded-xl border px-2 py-2 text-xs font-semibold transition-all ${
                                      slot === t
                                        ? "border-peach bg-peach/10 text-peach"
                                        : "border-border bg-white/60 text-muted-foreground hover:bg-white/80"
                                    }`}
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <textarea
                              placeholder="Anything specific you'd like us to cover?"
                              defaultValue="We'd like to see how inventory auto-deduction works with service recipes."
                              rows={2}
                              className="w-full rounded-xl border border-border bg-white/70 p-3 text-sm outline-none transition-all focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20"
                            />

                            <button
                              type="submit"
                              className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-teal to-teal/80 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_16px_40px_-12px_oklch(0.72_0.14_185/0.7)]"
                            >
                              Request demo
                              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                          </form>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="py-6 text-center"
                        >
                          <div className="mx-auto grid size-16 place-items-center rounded-full bg-teal/15 text-teal">
                            <CheckCircle2 className="size-9" strokeWidth={2.2} />
                          </div>
                          <h3 className="mt-5 text-2xl font-extrabold tracking-tight">Demo requested 🎉</h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Our team will reach out within a few hours to confirm your slot.
                          </p>
                          <button
                            onClick={() => handleClose(false)}
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all hover:scale-[1.02]"
                          >
                            Back to site
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
        className="h-11 w-full rounded-xl border border-border bg-white/70 pl-10 pr-3 text-sm font-medium text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}
