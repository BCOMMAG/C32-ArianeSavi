"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Briefcase,
  Users,
  ShoppingBag,
  FileText,
  Landmark,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { PRACTICE_AREAS, PracticeTopic } from "@/data/areas";
import { getWhatsAppUrl } from "@/lib/data";
import { GeometricLines } from "@/components/ui/GeometricLines";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const AREA_ICONS: Record<string, typeof Briefcase> = {
  trabalhista: Briefcase,
  familia: Users,
  consumidor: ShoppingBag,
  civil: FileText,
  bancario: Landmark,
};

export function PracticeAreasSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<{
    areaName: string;
    topic: PracticeTopic;
  } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const activeArea = PRACTICE_AREAS[activeIndex];
  const ActiveIcon = AREA_ICONS[activeArea.id] || Briefcase;

  useEffect(() => {
    const handleSelect = (e: Event) => {
      const custom = e as CustomEvent<string>;
      const idx = PRACTICE_AREAS.findIndex((a) => a.id === custom.detail);
      if (idx !== -1) setActiveIndex(idx);
    };
    window.addEventListener("selectPracticeArea", handleSelect);
    return () => window.removeEventListener("selectPracticeArea", handleSelect);
  }, []);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.from(".areas-intro", {
        y: 24,
        opacity: 0,
        duration: 0.75,
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

  const goPrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? PRACTICE_AREAS.length - 1 : prev - 1
    );
  const goNext = () =>
    setActiveIndex((prev) =>
      prev === PRACTICE_AREAS.length - 1 ? 0 : prev + 1
    );

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#EFE9DF]/65 dark:bg-[#240611] overflow-hidden"
    >
      <GeometricLines variant="areas" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="areas-intro flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="pl-5 border-l border-[#9E825C] dark:border-[#C8AE88] max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#9E825C] dark:text-[#C8AE88] font-semibold">
              Áreas de Atuação
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-tight">
              Defesa jurídica estruturada para cada necessidade.
            </h2>
          </div>

          <p className="text-sm sm:text-[15px] text-[#4A373E] dark:text-[#D8C8CE] max-w-md leading-relaxed">
            Selecione uma especialidade abaixo para explorar as principais
            demandas atendidas e verificar em detalhes como podemos orientar o
            seu caso.
          </p>
        </div>

        {/* Barra de Seleção (Tabs Desktop / Navegador Mobile) */}
        <div className="mb-8">
          <div className="hidden md:flex flex-wrap gap-2.5">
            {PRACTICE_AREAS.map((area, idx) => {
              const Icon = AREA_ICONS[area.id] || Briefcase;
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-250 cursor-pointer border ${
                    isSelected
                      ? "bg-[#420D21] text-[#F4EFE6] border-[#420D21] dark:bg-[#C8AE88] dark:text-[#2B0815] dark:border-[#C8AE88] shadow-md"
                      : "bg-[#F9F6F0] dark:bg-[#3A0C1D] text-[#420D21] dark:text-[#F4EFE6] border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover:border-[#9E825C] dark:hover:border-[#C8AE88]"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{area.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Navegação Compacta Mobile */}
          <div className="md:hidden flex items-center justify-between gap-2 bg-[#F9F6F0] dark:bg-[#3A0C1D] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 rounded-xl p-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Área anterior"
              className="p-2.5 rounded-lg text-[#420D21] dark:text-[#C8AE88] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-center">
              <ActiveIcon className="w-4 h-4 text-[#9E825C] dark:text-[#C8AE88]" />
              <span className="font-serif text-lg font-semibold text-[#420D21] dark:text-[#F4EFE6]">
                {activeArea.name}
              </span>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Próxima área"
              className="p-2.5 rounded-lg text-[#420D21] dark:text-[#C8AE88] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Painel Principal da Área Selecionada */}
        <div className="rounded-2xl bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/25 dark:border-[#C8AE88]/25 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Coluna Esquerda: Resumo + Destaque */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#420D21] dark:bg-[#4A1226] text-[#F4EFE6] flex flex-col justify-between gap-8 border-b lg:border-b-0 lg:border-r border-[#C8AE88]/20">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8AE88]/40 text-[#C8AE88] text-[11px] uppercase tracking-[0.16em] font-semibold mb-5">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>{activeArea.badge}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-[#F4EFE6]">
                  {activeArea.name}
                </h3>

                <p className="mt-3 font-serif italic text-lg sm:text-xl text-[#C8AE88]">
                  {activeArea.headline}
                </p>

                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#D8C8CE]">
                  {activeArea.description}
                </p>
              </div>

              <div>
                <a
                  href={getWhatsAppUrl(activeArea.whatsappPrefill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C8AE88] hover:bg-[#d7bf9b] text-[#2B0815] text-sm font-semibold transition-all duration-300 shadow-sm"
                >
                  <span>{activeArea.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna Direita: Lista de Temas Atendidos */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#9E825C]/20 dark:border-[#C8AE88]/20">
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#9E825C] dark:text-[#C8AE88]">
                  Principais Demandas e Direitos
                </span>
                <span className="text-xs text-[#6B545C] dark:text-[#D8C8CE]">
                  Clique para detalhar
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeArea.topics.map((topic) => (
                  <button
                    key={topic.title}
                    type="button"
                    onClick={() =>
                      setSelectedTopic({
                        areaName: activeArea.name,
                        topic,
                      })
                    }
                    className="group text-left p-4 rounded-xl bg-[#EFE9DF]/65 dark:bg-[#2B0815]/75 border border-[#9E825C]/20 dark:border-[#C8AE88]/15 hover:border-[#9E825C] dark:hover:border-[#C8AE88] transition-all duration-250 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#420D21] dark:text-[#F4EFE6] group-hover:text-[#9E825C] dark:group-hover:text-[#C8AE88] transition-colors leading-snug">
                        {topic.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-[#4A373E] dark:text-[#D8C8CE] line-clamp-3">
                        {topic.summary}
                      </p>
                    </div>
                    {topic.legalBasis && (
                      <span className="mt-3 pt-2.5 border-t border-[#9E825C]/15 dark:border-[#C8AE88]/15 text-[11px] font-medium text-[#9E825C] dark:text-[#C8AE88] inline-flex items-center justify-between">
                        <span>{topic.legalBasis}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Informativo do Tema */}
      {selectedTopic && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B040C]/75 backdrop-blur-sm"
          onClick={() => setSelectedTopic(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/40 dark:border-[#C8AE88]/30 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9E825C] dark:text-[#C8AE88]">
                  {selectedTopic.areaName}
                </span>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-[#420D21] dark:text-[#F4EFE6]">
                  {selectedTopic.topic.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTopic(null)}
                aria-label="Fechar janela"
                className="p-2 rounded-full border border-[#9E825C]/30 text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="gold-divider-h my-5" />

            <p className="text-sm sm:text-[15px] leading-relaxed text-[#4A373E] dark:text-[#D8C8CE]">
              {selectedTopic.topic.summary}
            </p>

            {selectedTopic.topic.legalBasis && (
              <div className="mt-4 px-4 py-3 rounded-xl bg-[#EFE9DF] dark:bg-[#2B0815] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 text-xs text-[#420D21] dark:text-[#C8AE88]">
                <strong>Previsão Legal:</strong> {selectedTopic.topic.legalBasis}
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl(
                  `Olá! Gostaria de conversar com um advogado sobre: ${selectedTopic.topic.title} (${selectedTopic.areaName}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#420D21] hover:bg-[#5B1530] dark:bg-[#C8AE88] dark:hover:bg-[#dbc49f] text-[#F4EFE6] dark:text-[#2B0815] text-sm font-semibold transition-colors"
              >
                <span>Conversar com Advogado</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedTopic(null)}
                className="px-5 py-3 rounded-xl border border-[#9E825C]/35 text-sm font-medium text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226] cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
