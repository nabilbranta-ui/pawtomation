import { ReactNode } from "react";
import { motion } from "framer-motion";
import { MeshBackground } from "./MeshBackground";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, subtitle, children }: Props) {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="mx-auto max-w-5xl px-6 text-center">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-extrabold uppercase tracking-[0.28em] text-muted-foreground"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-4xl font-black tracking-tight md:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-5 max-w-2xl text-base font-medium text-muted-foreground md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>
      <div className="relative pb-16">{children}</div>
      <Footer />
    </main>
  );
}
