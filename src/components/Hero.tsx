"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight, Scale, ShieldCheck, MapPin } from "lucide-react";
import { getWhatsAppUrl, OFFICE_INFO } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const desktopBgRef = useRef<HTMLDivElement>(null);
  const mobileBgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.from(".hero-stagger", {
        y: 26,
        opacity: 0,
        duration: 0.9,
        stagger: 0.11,
        ease: "power3.out",
        clearProps: "transform",
      });

      if (desktopBgRef.current) {
        gsap.to(desktopBgRef.current, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (mobileBgRef.current) {
        gsap.to(mobileBgRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative h-[100dvh] min-h-[640px] max-h-[1080px] overflow-hidden bg-[#2B0815] text-[#F4EFE6] flex flex-col justify-between"
    >
      {/* Background Desktop (16:9) */}
      <div
        ref={desktopBgRef}
        className="hidden md:block absolute inset-0 -top-8 -bottom-8 z-0 pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/header_desktop.jpeg"
          alt="Escritório de Advocacia Ariane Savi em Curitiba"
          className="w-full h-full object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(28,5,13,0.92) 0%, rgba(43,8,21,0.78) 46%, rgba(43,8,21,0.28) 100%)",
          }}
        />
      </div>

      {/* Background Mobile (9:16) */}
      <div
        ref={mobileBgRef}
        className="md:hidden absolute inset-0 -top-6 -bottom-6 z-0 pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/header_mobile.jpeg"
          alt="Escritório de Advocacia Ariane Savi"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(25,5,12,0.84) 0%, rgba(34,7,17,0.58) 46%, rgba(25,5,12,0.94) 100%)",
          }}
        />
      </div>

      {/* Espaçador para Navbar fixa */}
      <div className="h-20 sm:h-24 shrink-0" aria-hidden="true" />

      {/* Conteúdo Principal do Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8 my-auto py-4">
        <div className="max-w-2xl relative pl-5 sm:pl-7 border-l border-[#C8AE88]/65">
          <div className="hero-stagger inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C8AE88] font-medium mb-3 sm:mb-4">
            <Scale className="w-3.5 h-3.5 shrink-0" />
            <span>{OFFICE_INFO.specialtyHeadline}</span>
          </div>

          <h1 className="hero-stagger font-serif text-[2.15rem] leading-[1.12] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08] font-semibold tracking-tight text-[#F4EFE6]">
            Você pode ter{" "}
            <span className="text-[#C8AE88] italic font-medium">
              valores a receber
            </span>{" "}
            e não sabe.
          </h1>

          <p className="hero-stagger mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] leading-relaxed text-[#D8C8CE] max-w-xl">
            Atuação estratégica e humanizada em{" "}
            <strong className="font-medium text-[#F4EFE6]">
              Direito do Trabalho
            </strong>
            , Família e Sucessões, Direito do Consumidor, Cível e Bancário —
            unindo rigor técnico e orientação clara para defender o que é seu por
            direito.
          </p>

          {/* CTAs Estritamente Genéricos e Variados */}
          <div className="hero-stagger mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de consultar um advogado sobre direitos trabalhistas e eventuais valores a receber."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C8AE88] hover:bg-[#d7bf9b] text-[#2B0815] text-sm font-semibold tracking-wide shadow-lg transition-all duration-300"
            >
              <span>Consultar Advogado</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#C8AE88]/55 hover:border-[#F4EFE6] bg-[#2B0815]/45 hover:bg-[#4A1226]/70 text-[#F4EFE6] text-sm font-medium transition-all duration-300"
            >
              <span>Conhecer Áreas de Atuação</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra Inferior de Credibilidade (Sóbria / Sem contagem numérica de avaliações) */}
      <div className="relative z-10 border-t border-[#C8AE88]/20 bg-[#1F040E]/75 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[11px] sm:text-xs text-[#D8C8CE]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C8AE88] shrink-0" />
            <span>
              Inscrição <strong className="text-[#F4EFE6] font-medium">{OFFICE_INFO.oab}</strong> · Atuação {OFFICE_INFO.practiceSince}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C8AE88] shrink-0" />
            <span>Capão Raso, Curitiba/PR · Presencial e Online</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#C8AE88] font-medium">
            <span>5.0 ★</span>
            <span className="text-[#D8C8CE]/80">·</span>
            <span className="text-[#F4EFE6]">Google Verificado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
