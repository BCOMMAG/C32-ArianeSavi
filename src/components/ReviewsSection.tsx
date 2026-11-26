"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Quote,
  Star,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { GOOGLE_REVIEWS, GoogleReview } from "@/data/reviews";
import { GeometricLines } from "@/components/ui/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [manualOffset, setManualOffset] = useState(0);

  useGSAP(
    () => {
      gsap.fromTo(
        ".reviews-header",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const stepReview = (dir: number) => {
    setManualOffset((prev) => {
      const next = prev - dir * 355;
      const limit = GOOGLE_REVIEWS.length * 355;
      if (next < -limit) return 0;
      if (next > 355) return 0;
      return next;
    });
  };

  const renderReviewCard = (review: GoogleReview, keyPrefix: string) => (
    <article
      key={keyPrefix}
      className="w-[295px] sm:w-[360px] shrink-0 p-6 sm:p-7 rounded-2xl bg-[#EFE9DF]/85 dark:bg-[#380B1C] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover:border-[#9E825C] dark:hover:border-[#C8AE88] hover:-translate-y-1.5 transition-all duration-350 flex flex-col justify-between gap-5 shadow-xs hover:shadow-lg"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-[#C8AE88] text-[#C8AE88]"
              />
            ))}
          </div>
          <Quote className="w-5 h-5 text-[#9E825C]/50 dark:text-[#C8AE88]/40" />
        </div>

        <p className="text-sm leading-relaxed text-[#4A373E] dark:text-[#D8C8CE] italic">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#9E825C]/20 dark:border-[#C8AE88]/15 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#420D21] dark:text-[#F4EFE6]">
          {review.author}
        </span>
        <span className="text-[11px] uppercase tracking-wider text-[#9E825C] dark:text-[#C8AE88] font-medium">
          Avaliação Google
        </span>
      </div>
    </article>
  );

  return (
    <section
      id="avaliacoes"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-26 bg-[#F9F6F0] dark:bg-[#2B0815] overflow-hidden"
    >
      <GeometricLines variant="reviews" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reviews-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="pl-5 border-l border-[#9E825C] dark:border-[#C8AE88] max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#9E825C] dark:text-[#C8AE88] font-semibold">
              Reconhecimento dos Clientes
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-tight">
              Experiências relatadas por quem confiou no nosso trabalho.
            </h2>
          </div>

          {/* Selo Google 5.0 ★ sem contagem numérica (Conformidade OAB) + Controles */}
          <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-[#EFE9DF] dark:bg-[#4A1226] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 self-start md:self-auto shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-[#420D21] dark:text-[#F4EFE6]">
                  5.0
                </span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#C8AE88] text-[#C8AE88]"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#5C464E] dark:text-[#D8C8CE] mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9E825C] dark:text-[#C8AE88]" />
                <span>Google Verificado</span>
              </div>
            </div>

            <div className="h-8 w-px bg-[#9E825C]/30 dark:bg-[#C8AE88]/25" />

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsPausedByUser((p) => !p)}
                aria-label={isPausedByUser ? "Retomar rolagem" : "Pausar rolagem"}
                className="p-2 rounded-full bg-[#F9F6F0] dark:bg-[#2B0815] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 text-[#420D21] dark:text-[#C8AE88] hover:border-[#9E825C] cursor-pointer"
              >
                {isPausedByUser ? (
                  <Play className="w-3.5 h-3.5" />
                ) : (
                  <Pause className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                type="button"
                onClick={() => stepReview(-1)}
                aria-label="Avaliação anterior"
                className="p-2 rounded-full bg-[#F9F6F0] dark:bg-[#2B0815] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 text-[#420D21] dark:text-[#F4EFE6] hover:border-[#9E825C] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => stepReview(1)}
                aria-label="Próxima avaliação"
                className="p-2 rounded-full bg-[#F9F6F0] dark:bg-[#2B0815] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 text-[#420D21] dark:text-[#F4EFE6] hover:border-[#9E825C] cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee CSS GPU Contínuo Full-Bleed */}
      <div className="marquee-wrapper relative z-10 w-full overflow-hidden py-3">
        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F9F6F0] dark:from-[#2B0815] to-transparent z-20" />
        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F9F6F0] dark:from-[#2B0815] to-transparent z-20" />

        <div
          className="transition-transform duration-500 ease-out"
          style={{ transform: `translate3d(${manualOffset}px, 0, 0)` }}
        >
          <div
            className="marquee-track animate-marquee-reviews flex w-max will-change-transform"
            style={{
              animationPlayState: isPausedByUser ? "paused" : "running",
            }}
          >
            <div className="flex items-stretch gap-5 pr-5">
              {GOOGLE_REVIEWS.map((rev, idx) =>
                renderReviewCard(rev, `rev-g1-${rev.id}-${idx}`)
              )}
            </div>
            <div className="flex items-stretch gap-5 pr-5" aria-hidden="true">
              {GOOGLE_REVIEWS.map((rev, idx) =>
                renderReviewCard(rev, `rev-g2-${rev.id}-${idx}`)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
