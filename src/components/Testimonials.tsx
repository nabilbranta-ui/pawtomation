import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Pawfolio replaced four separate tools for us. Front-desk wait times are down 40% and our vets finally love their software.",
    name: "Dr. Elena Moretti",
    role: "Founder, Bayside Vet Clinic",
    avatar: avatar1,
    rating: 5,
    accent: "oklch(0.72 0.14 185)",
  },
  {
    quote:
      "Automated SMS reminders brought back hundreds of lapsed patients in the first quarter. It genuinely pays for itself.",
    name: "Priya Sharma",
    role: "Owner, PetCare Network (6 branches)",
    avatar: avatar3,
    rating: 5,
    accent: "oklch(0.70 0.14 320)",
  },
  {
    quote:
      "The doctor's panel keeps every SOAP note, prescription and history at my fingertips. Consultations are calmer and faster.",
    name: "Dr. Marcus Hale",
    role: "Lead Veterinarian, Green Paws",
    avatar: avatar4,
    rating: 5,
    accent: "oklch(0.80 0.13 45)",
  },
  {
    quote:
      "Inventory losses dropped to near zero after switching. The expiry alerts alone saved us thousands this year.",
    name: "Dr. Amara Okafor",
    role: "Clinical Director, PawsFirst",
    avatar: avatar2,
    rating: 5,
    accent: "oklch(0.72 0.15 145)",
  },
  {
    quote:
      "Real-time analytics finally gave our board a clear picture. We scaled from 3 to 11 clinics without adding admin staff.",
    name: "Dr. Henrik Larsen",
    role: "CEO, NordicVet Group",
    avatar: avatar5,
    rating: 5,
    accent: "oklch(0.65 0.16 260)",
  },
];

function StarRow({ rating, accent }: { rating: number; accent: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4"
          strokeWidth={0}
          fill={i < rating ? accent : "oklch(0.9 0.01 240)"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="glass-strong relative h-full rounded-3xl p-7 md:p-8">
      <div
        className="absolute -right-6 -top-6 size-28 rounded-full opacity-40 blur-3xl"
        style={{ background: t.accent }}
      />
      <Quote className="size-8 opacity-20" style={{ color: t.accent }} strokeWidth={2.5} />
      <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
        "{t.quote}"
      </p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border/50 pt-5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-md opacity-60"
              style={{ background: t.accent }}
            />
            <img
              src={t.avatar}
              alt={t.name}
              width={512}
              height={512}
              loading="lazy"
              className="relative size-12 rounded-full object-cover ring-2 ring-white"
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-tight">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </div>
        </div>
        <StarRow rating={t.rating} accent={t.accent} />
      </div>
    </div>
  );
}

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    api.on("select", () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground/80">
            <span className="size-1.5 rounded-full bg-lavender" /> Loved by clinics
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
            Clinicians and owners{" "}
            <span className="bg-gradient-to-br from-lavender via-teal to-peach bg-clip-text text-transparent">
              who stayed.
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From solo practices to multi-branch networks — here's what teams say after switching to Pawfolio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14"
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5500, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <TestimonialCard t={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => api?.scrollPrev()}
              aria-label="Previous testimonial"
              className="glass grid size-11 place-items-center rounded-full transition-all hover:scale-105 hover:bg-white/80"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === selected ? 28 : 8,
                    background:
                      i === selected
                        ? "linear-gradient(90deg, oklch(0.72 0.14 185), oklch(0.80 0.13 45))"
                        : "oklch(0.88 0.01 240)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => api?.scrollNext()}
              aria-label="Next testimonial"
              className="glass grid size-11 place-items-center rounded-full transition-all hover:scale-105 hover:bg-white/80"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
