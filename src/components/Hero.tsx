"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Briefcase, Scale, Users, Landmark } from "lucide-react";
import { getWhatsAppUrl, OFFICE_INFO } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const desktopImgRef = useRef<HTMLDivElement>(null);
  const mobileImgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (desktopImgRef.current) {
        gsap.to(desktopImgRef.current, {
          y: 55,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (mobileImgRef.current) {
        gsap.to(mobileImgRef.current, {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (contentRef.current) {
        gsap.from(".hero-stagger", {
          opacity: 0,
          y: 24,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.08,
          clearProps: "transform",
        });
      }
    },
    { scope: heroRef }
  );

  const quickIntents = [
    {
      label: "Valores a Receber & FGTS",
      categoryId: "trabalhista",
      icon: Briefcase,
    },
    {
      label: "Família, Pensão & Partilha",
      categoryId: "familia",
      icon: Users,
    },
    {
      label: "Golpes Pix & Bancário",
      categoryId: "bancario",
      icon: Landmark,
    },
    {
      label: "Consumidor & Contratos",
      categoryId: "consumidor",
      icon: Scale,
    },
  ];

  const handleIntentClick = (categoryId: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("selectPracticeArea", { detail: categoryId })
      );
      const target = document.getElementById("areas");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-24 pb-4 sm:pb-7 lg:pb-8 overflow-hidden bg-[#F9F6F0] dark:bg-[#2B0815]"
    >
      {/* Camada Fotográfica Humanizada com Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Desktop */}
        <div
          ref={desktopImgRef}
          className="hidden lg:block absolute inset-0 -top-8 -bottom-8 will-change-transform"
        >
          <Image
            src="/header_desktop.jpeg"
            alt={`${OFFICE_INFO.fullTitle}: Atendimento jurídico humanizado`}
            fill
            priority
            quality={92}
            className="object-cover object-right"
            sizes="100vw"
          />
        </div>

        {/* Mobile */}
        <div
          ref={mobileImgRef}
          className="block lg:hidden absolute inset-0 -top-4 -bottom-4 will-change-transform"
        >
          <Image
            src="/header_mobile.jpeg"
            alt={`${OFFICE_INFO.fullTitle}: Advocacia Trabalhista e Familiar`}
            fill
            priority
            quality={92}
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes Adaptativos: Modo Claro Desktop */}
        <div className="hidden lg:block dark:lg:hidden absolute inset-0 bg-gradient-to-r from-[#F9F6F0] via-[#F9F6F0]/92 via-48% to-transparent" />
        <div className="hidden lg:block dark:lg:hidden absolute inset-0 bg-gradient-to-t from-[#F9F6F0]/80 via-transparent to-[#F9F6F0]/25" />

        {/* Gradientes Adaptativos: Modo Escuro Desktop */}
        <div className="hidden dark:lg:block absolute inset-0 bg-gradient-to-r from-[#2B0815] via-[#2B0815]/92 via-50% to-[#2B0815]/30" />
        <div className="hidden dark:lg:block absolute inset-0 bg-gradient-to-t from-[#2B0815]/88 via-transparent to-[#2B0815]/55" />

        {/* Gradientes Mobile: Topo apenas pro título, rosto livre no meio e base firme para descrição e botões */}
        <div className="block lg:hidden dark:hidden absolute inset-0 bg-gradient-to-b from-[#F9F6F0]/85 via-transparent via-40% to-[#F9F6F0]/96" />
        <div className="hidden dark:block dark:lg:hidden absolute inset-0 bg-gradient-to-b from-[#2B0815]/82 via-[#2B0815]/25 via-42% to-[#2B0815]/96" />
      </div>

      {/* Conteúdo Principal */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between lg:justify-center"
      >
        <div className="max-w-xl xl:max-w-2xl flex-1 lg:flex-initial flex flex-col justify-between lg:justify-center py-1 sm:py-3">
          {/* Bloco Superior: Eyebrow somente Desktop + H1 */}
          <div className="text-center lg:text-left pt-2 sm:pt-3 lg:pt-0 lg:pl-6 lg:border-l lg:border-[#9E825C] dark:lg:border-[#C8AE88]">
            <div className="hero-stagger hidden lg:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#9E825C] dark:text-[#C8AE88] mb-3">
              <span>{OFFICE_INFO.specialtyHeadline}</span>
              <span className="opacity-60">·</span>
              <span>{OFFICE_INFO.oab}</span>
            </div>

            <h1 className="hero-stagger font-serif text-[1.85rem] sm:text-4xl lg:text-[3.5rem] xl:text-[3.85rem] leading-[1.08] tracking-tight text-[#420D21] dark:text-[#F4EFE6] font-semibold mb-2 sm:mb-4 drop-shadow-[0_1px_12px_rgba(249,246,240,0.92)] dark:drop-shadow-none">
              Você pode ter{" "}
              <span className="text-[#9E825C] dark:text-[#C8AE88] italic font-medium">
                valores a receber
              </span>{" "}
              e não sabe.
            </h1>

            {/* Subtítulo exibido logo abaixo do H1 apenas no Desktop */}
            <p className="hero-stagger hidden lg:block font-sans text-[17px] text-[#3B262E] dark:text-[#D8C8CE] max-w-xl leading-relaxed mb-6">
              Defesa jurídica em{" "}
              <strong className="font-semibold text-[#420D21] dark:text-[#F4EFE6]">
                Direito do Trabalho
              </strong>
              , Família e Sucessões, Direito do Consumidor, Cível e Bancário.
              Atendimento presencial em Curitiba e online para todo o Brasil.
            </p>
          </div>

          {/* Bloco Inferior: Subtítulo no Mobile + Botões Magnéticos + Atalhos Rápidos */}
          <div className="mt-auto lg:mt-0 space-y-2.5 sm:space-y-4">
            {/* Subtítulo posicionado na região inferior (abaixo do rosto) no Mobile */}
            <p className="hero-stagger lg:hidden text-center font-sans text-xs sm:text-sm text-[#3B262E] dark:text-[#F4EFE6] max-w-md mx-auto leading-relaxed px-2 py-1.5 rounded-xl bg-[#F9F6F0]/75 dark:bg-[#2B0815]/70 backdrop-blur-[2px]">
              Atuação em{" "}
              <strong className="font-semibold text-[#420D21] dark:text-[#C8AE88]">
                Direito do Trabalho
              </strong>
              , Família e Sucessões, Consumidor, Cível e Bancário. Atendimento
              em Curitiba e online em todo o Brasil.
            </p>

            <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-4">
              <MagneticButton strength={0.28}>
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de consultar um advogado sobre direitos trabalhistas e eventuais valores a receber."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden btn-pill w-full sm:w-auto bg-[#420D21] hover:bg-[#5A1530] text-[#F4EFE6] dark:bg-[#C8AE88] dark:hover:bg-[#d8c19e] dark:text-[#2B0815] gap-2.5 py-2.5 sm:py-3.5 px-6 sm:px-7 text-xs sm:text-sm font-semibold shadow-lg hover-lift cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer pointer-events-none"
                  />
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] dark:text-[#2B0815]" />
                  <span>Consultar Advogado</span>
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <Link
                  href="#areas"
                  className="btn-pill w-full sm:w-auto bg-[#F9F6F0]/95 dark:bg-[#380B1C]/90 text-[#420D21] dark:text-[#F4EFE6] border border-[#9E825C]/40 dark:border-[#C8AE88]/35 hover:border-[#9E825C] dark:hover:border-[#C8AE88] gap-2 py-2.5 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-semibold shadow-sm hover-lift cursor-pointer"
                >
                  <span>Explorar Áreas de Atuação</span>
                  <ArrowRight className="w-4 h-4 text-[#9E825C] dark:text-[#C8AE88]" />
                </Link>
              </MagneticButton>
            </div>

            {/* Faixa de Atalhos Rápidos Interativos */}
            <div className="hero-stagger pt-2 sm:pt-3.5 border-t border-[#9E825C]/25 dark:border-[#C8AE88]/20 pr-12 sm:pr-0">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold text-[#6B545C] dark:text-[#C8AE88] mb-1.5 sm:mb-2.5">
                Como podemos ajudar você hoje?
              </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 sm:gap-2">
                {quickIntents.map((intent) => {
                  const Icon = intent.icon;
                  return (
                    <button
                      key={intent.label}
                      type="button"
                      onClick={() => handleIntentClick(intent.categoryId)}
                      className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-[#F9F6F0]/90 dark:bg-[#380B1C]/90 border border-[#9E825C]/25 dark:border-[#C8AE88]/25 hover:border-[#9E825C] dark:hover:border-[#C8AE88] hover:-translate-y-0.5 text-[10px] sm:text-xs font-medium text-[#420D21] dark:text-[#F4EFE6] transition-all shadow-xs cursor-pointer"
                    >
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9E825C] dark:text-[#C8AE88] shrink-0" />
                      <span className="truncate">{intent.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
