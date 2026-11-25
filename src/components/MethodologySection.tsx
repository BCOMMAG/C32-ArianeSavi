"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { METHODOLOGY_STEPS, getWhatsAppUrl } from "@/lib/data";
import { GeometricLines } from "@/components/ui/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.from(".step-card", {
        y: 26,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
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
      id="metodologia"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#420D21] dark:bg-[#2B0815] text-[#F4EFE6] overflow-hidden"
    >
      <GeometricLines variant="methodology" forceDark />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="pl-5 border-l border-[#C8AE88] max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#C8AE88] font-semibold">
              Metodologia de Atendimento
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#F4EFE6] leading-tight">
              Da análise documental à condução segura do seu direito.
            </h2>
          </div>

          <a
            href={getWhatsAppUrl(
              "Olá! Gostaria de buscar orientação jurídica e entender como funciona a análise do meu caso."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start lg:self-auto px-6 py-3 rounded-full border border-[#C8AE88] text-[#C8AE88] hover:bg-[#C8AE88] hover:text-[#2B0815] text-sm font-semibold transition-all duration-300"
          >
            <span>Buscar Orientação Jurídica</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((item) => (
            <div
              key={item.step}
              className="step-card relative p-6 sm:p-7 rounded-2xl bg-[#340919]/90 dark:bg-[#4A1226]/70 border border-[#C8AE88]/25 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-4xl font-semibold text-[#C8AE88]">
                    {item.step}
                  </span>
                  <span className="h-px w-14 bg-[#C8AE88]/45" />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#F4EFE6] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#D8C8CE]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C8AE88]/20 flex items-center gap-3">
                <span className="w-0.5 h-5 bg-[#C8AE88] shrink-0" />
                <span className="text-xs text-[#C8AE88] font-medium leading-snug">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
