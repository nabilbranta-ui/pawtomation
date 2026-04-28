import { createFileRoute } from "@tanstack/react-router";
import { MeshBackground } from "@/components/MeshBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoreModules } from "@/components/CoreModules";
import { KeyBenefits } from "@/components/KeyBenefits";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pawfolio — All-in-one Pet Clinic Management Software" },
      {
        name: "description",
        content:
          "Pawfolio is a modern pet clinic management platform. Appointments, medical records, billing and reminders — beautifully unified.",
      },
      { property: "og:title", content: "Pawfolio — Pet Clinic Management, Reimagined" },
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
    </main>
  );
}
