"use client";

import { useRef } from "react";
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

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.from(".pillar-card", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-16 bg-[#EFE9DF] dark:bg-[#340A19] border-y border-[#9E825C]/20 dark:border-[#C8AE88]/20 overflow-hidden"
    >
      <GeometricLines variant="pillars" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#9E825C]/30 dark:lg:divide-[#C8AE88]/25">
          {AUTHORITY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="pillar-card lg:px-7 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9E825C] dark:text-[#C8AE88] mb-2">
                  {pillar.label}
                </span>
                <div className="font-serif text-3xl sm:text-[2rem] font-semibold text-[#420D21] dark:text-[#F4EFE6] tracking-tight mb-2">
                  {pillar.metricDisplay}
                </div>
                <h2 className="text-sm font-semibold text-[#420D21] dark:text-[#C8AE88] mb-1.5">
                  {pillar.title}
                </h2>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#4A373E] dark:text-[#D8C8CE]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
