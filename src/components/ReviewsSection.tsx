"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote, Star, ShieldCheck } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { GeometricLines } from "@/components/ui/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.from(".review-card", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="avaliacoes"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F9F6F0] dark:bg-[#2B0815] overflow-hidden"
    >
      <GeometricLines variant="reviews" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="pl-5 border-l border-[#9E825C] dark:border-[#C8AE88] max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#9E825C] dark:text-[#C8AE88] font-semibold">
              Reconhecimento dos Clientes
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-tight">
              Experiências relatadas por quem confiou no nosso trabalho.
            </h2>
          </div>

          {/* Selo Google Verificado sem contagem numérica de avaliações (Regra OAB) */}
          <div className="inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-[#EFE9DF] dark:bg-[#4A1226] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 self-start md:self-auto">
            <div className="flex items-center gap-1 text-[#C8AE88]">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 fill-[#C8AE88] text-[#C8AE88]"
                />
              ))}
            </div>
            <div className="h-5 w-px bg-[#9E825C]/40 dark:bg-[#C8AE88]/30" />
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#420D21] dark:text-[#F4EFE6]">
              <span>5.0</span>
              <span className="font-normal text-[#5C464E] dark:text-[#D8C8CE]">
                · Google Verificado
              </span>
              <ShieldCheck className="w-4 h-4 text-[#9E825C] dark:text-[#C8AE88]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <article
              key={review.id}
              className="review-card p-6 sm:p-7 rounded-2xl bg-[#EFE9DF]/65 dark:bg-[#380B1C] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 flex flex-col justify-between gap-5"
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
                  <Quote className="w-5 h-5 text-[#9E825C]/45 dark:text-[#C8AE88]/35" />
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
