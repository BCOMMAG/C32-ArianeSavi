"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AUTHORITY_PILLARS } from "@/lib/data";
import { GeometricLines } from "@/components/ui/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function PillarsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 86%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll(".pillar-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 86%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-22 bg-[#EFE9DF]/85 dark:bg-[#320919] border-y border-[#9E825C]/25 dark:border-[#C8AE88]/20 overflow-hidden"
    >
      <GeometricLines variant="pillars" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="max-w-2xl mb-10 sm:mb-12 pl-5 border-l border-[#9E825C] dark:border-[#C8AE88]"
        >
          <span className="text-xs uppercase tracking-[0.22em] text-[#9E825C] dark:text-[#C8AE88] font-semibold block mb-2">
            Pilares de Atuação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] text-[#420D21] dark:text-[#F4EFE6] font-semibold leading-[1.15]">
            Rigor técnico, transparência e defesa próxima dos seus direitos.
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 will-change-transform"
        >
          {AUTHORITY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="pillar-item flex flex-col group cursor-default"
            >
              {/* Fotografia Compacta com Zoom no Hover */}
              <div className="relative w-full aspect-[16/10] max-h-[155px] rounded-2xl overflow-hidden border border-[#9E825C]/30 dark:border-[#C8AE88]/25 shadow-sm bg-[#F9F6F0] dark:bg-[#2B0815] mb-3.5">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 310px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0815]/45 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-3 text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-0.5 rounded-full bg-[#F9F6F0]/90 dark:bg-[#2B0815]/90 text-[#420D21] dark:text-[#C8AE88]">
                  {pillar.label}
                </span>
              </div>

              <span className="text-[11px] text-[#9E825C] dark:text-[#C8AE88] uppercase tracking-widest font-semibold block mb-1">
                Pilar 0{idx + 1}
              </span>

              <h3 className="font-serif text-xl font-semibold text-[#420D21] dark:text-[#F4EFE6] mb-1.5 leading-snug group-hover:text-[#9E825C] dark:group-hover:text-[#C8AE88] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#4A373E] dark:text-[#D8C8CE] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
