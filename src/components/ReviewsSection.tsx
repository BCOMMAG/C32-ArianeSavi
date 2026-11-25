"use client";

import { useEffect, useRef, useState } from "react";
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
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { GeometricLines } from "@/components/ui/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const LOOP_REVIEWS = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Movimento contínuo infinito estilo marquee suave (requestAnimationFrame)
  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let rafId: number;
    let accumulator = 0;
    const speedPerFrame = 0.42;

    const tick = () => {
      if (!isPaused && !isHovering && container) {
        accumulator += speedPerFrame;
        if (accumulator >= 1) {
          const step = Math.floor(accumulator);
          accumulator -= step;
          container.scrollLeft += step;

          const halfWidth = container.scrollWidth / 2;
          if (halfWidth > 0 && container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, isHovering]);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.fromTo(
        ".reviews-header",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
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

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    setIsPaused(true);
    gsap.to(el, {
      scrollLeft: Math.max(0, el.scrollLeft + dir * 355),
      duration: 0.55,
      ease: "power2.out",
    });
  };

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
                onClick={() => setIsPaused((p) => !p)}
                aria-label={isPaused ? "Retomar rolagem" : "Pausar rolagem"}
                className="p-2 rounded-full bg-[#F9F6F0] dark:bg-[#2B0815] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 text-[#420D21] dark:text-[#C8AE88] hover:border-[#9E825C] cursor-pointer"
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5" />
                ) : (
                  <Pause className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Avaliação anterior"
                className="p-2 rounded-full bg-[#F9F6F0] dark:bg-[#2B0815] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 text-[#420D21] dark:text-[#F4EFE6] hover:border-[#9E825C] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Próxima avaliação"
                className="p-2 rounded-full bg-[#F9F6F0] dark:bg-[#2B0815] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 text-[#420D21] dark:text-[#F4EFE6] hover:border-[#9E825C] cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carrossel em Movimento Contínuo */}
        <div
          ref={trackRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsPaused(true)}
          className="flex items-stretch gap-5 overflow-x-auto no-scrollbar py-2"
        >
          {LOOP_REVIEWS.map((review, idx) => (
            <article
              key={`${review.id}-${idx}`}
              className="w-[300px] sm:w-[360px] shrink-0 p-6 sm:p-7 rounded-2xl bg-[#EFE9DF]/75 dark:bg-[#380B1C] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover:border-[#9E825C] dark:hover:border-[#C8AE88] hover:-translate-y-1 transition-all duration-350 flex flex-col justify-between gap-5 shadow-xs hover:shadow-md"
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
          ))}
        </div>
      </div>
    </section>
  );
}
