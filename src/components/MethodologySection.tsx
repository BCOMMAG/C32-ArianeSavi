"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  CheckCircle2,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { METHODOLOGY_STEPS, getWhatsAppUrl } from "@/lib/data";
import { GeometricLines } from "@/components/ui/GeometricLines";
import { MagneticButton } from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const STEP_DURATION_MS = 5200;

export function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentStep = METHODOLOGY_STEPS[activeIndex];

  // Auto-avanço interativo das 4 fases quando visível e não pausado
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % METHODOLOGY_STEPS.length);
    }, STEP_DURATION_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".method-reveal",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#420D21] dark:bg-[#2B0815] text-[#F4EFE6] overflow-hidden"
    >
      <GeometricLines variant="methodology" forceDark />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="method-reveal flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="pl-5 border-l border-[#C8AE88] max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#C8AE88] font-semibold">
              Experiência do Cliente
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#F4EFE6] leading-tight">
              Veja como conduzimos o seu direito do início ao desfecho.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#C8AE88]/35 text-xs font-medium text-[#C8AE88] hover:border-[#C8AE88] transition-colors cursor-pointer"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Retomar tour</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Tour automático ativo</span>
                </>
              )}
            </button>

            <MagneticButton strength={0.22}>
              <a
                href={getWhatsAppUrl(
                  "Olá! Gostaria de buscar orientação jurídica e entender como funciona a análise do meu caso."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill gap-2 px-6 py-3 border border-[#C8AE88] text-[#C8AE88] hover:bg-[#C8AE88] hover:text-[#2B0815] text-xs sm:text-sm font-semibold hover-lift cursor-pointer"
              >
                <span>Buscar Orientação Jurídica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Painel Interativo em 2 Colunas: Seletor de Fases (5 cols) + Palco Visual Dinâmico (7 cols) */}
        <div className="method-reveal grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Coluna Esquerda: Navegador Interativo das 4 Etapas */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {METHODOLOGY_STEPS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPaused(true);
                  }}
                  className={`relative text-left p-5 rounded-2xl border transition-all duration-350 cursor-pointer overflow-hidden ${
                    isSelected
                      ? "bg-[#56142C] dark:bg-[#4A1226] border-[#C8AE88] shadow-xl translate-x-1"
                      : "bg-[#340919]/80 dark:bg-[#340919]/75 border-[#C8AE88]/20 hover:border-[#C8AE88]/55 hover:bg-[#491025]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`font-serif text-2xl sm:text-3xl font-semibold transition-colors ${
                          isSelected ? "text-[#C8AE88]" : "text-[#C8AE88]/55"
                        }`}
                      >
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F4EFE6]">
                          {item.shortTitle}
                        </h3>
                        <p className="text-xs text-[#D8C8CE] mt-0.5 line-clamp-1">
                          {item.title}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 shrink-0 mt-1 transition-all duration-300 ${
                        isSelected
                          ? "text-[#C8AE88] translate-x-0.5"
                          : "text-[#C8AE88]/40"
                      }`}
                    />
                  </div>

                  {/* Barra de Progresso Dourada na Etapa Selecionada */}
                  <div className="mt-3.5 h-0.5 w-full bg-[#C8AE88]/15 rounded-full overflow-hidden">
                    <div
                      key={`${activeIndex}-${isPaused ? "paused" : "play"}`}
                      className={`h-full bg-[#C8AE88] transition-all ${
                        isSelected ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                      style={
                        isSelected && !isPaused
                          ? {
                              transitionDuration: `${STEP_DURATION_MS}ms`,
                              transitionTimingFunction: "linear",
                            }
                          : { transitionDuration: "300ms" }
                      }
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Coluna Direita: Palco Visual Vivo Sincronizado */}
          <div className="lg:col-span-7">
            <div
              key={currentStep.step}
              className="h-full rounded-3xl bg-[#340919] dark:bg-[#3A0C1D] border border-[#C8AE88]/30 shadow-2xl overflow-hidden flex flex-col justify-between animate-fade-in"
            >
              {/* Fotografia da Etapa com Tag */}
              <div className="relative w-full aspect-[16/9] max-h-[270px] overflow-hidden">
                <Image
                  src={currentStep.image}
                  alt={currentStep.title}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 680px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#340919] via-[#340919]/35 to-transparent pointer-events-none" />
                <span className="absolute top-4 left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2B0815]/85 backdrop-blur-sm border border-[#C8AE88]/45 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C8AE88]">
                  <Sparkles className="w-3 h-3" />
                  Etapa {currentStep.step} · {currentStep.shortTitle}
                </span>
              </div>

              {/* Conteúdo Dinâmico */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-5">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F4EFE6] leading-snug">
                    {currentStep.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#D8C8CE]">
                    {currentStep.description}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-1 gap-2.5">
                    {currentStep.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4EFE6]/95"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C8AE88] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#C8AE88]/20 flex items-start gap-3">
                  <span className="w-0.5 h-8 bg-[#C8AE88] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#C8AE88] font-semibold block">
                      Para a sua tranquilidade
                    </span>
                    <p className="text-xs sm:text-sm text-[#F4EFE6] font-medium mt-0.5">
                      {currentStep.clientBenefit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
