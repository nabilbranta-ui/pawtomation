import { createFileRoute } from "@tanstack/react-router";
import { MeshBackground } from "@/components/MeshBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoreModules } from "@/components/CoreModules";
import { KeyBenefits } from "@/components/KeyBenefits";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pawtomation — All-in-one Pet Clinic Management Software" },
      {
        name: "description",
        content:
          "Pawtomation is a modern pet clinic management platform. Appointments, medical records, billing and reminders — beautifully unified.",
      },
      { property: "og:title", content: "Pawtomation — Pet Clinic Management, Reimagined" },
      { property: "og:description", content: "The all-in-one software for modern veterinary clinics." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />
      <Hero />
      <CoreModules />
      <KeyBenefits />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
