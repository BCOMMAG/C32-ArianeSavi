"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BookOpen, Clock, ArrowRight, CheckCircle2, X } from "lucide-react";
import { EDUCATIONAL_ARTICLES, EducationalArticle } from "@/data/educational";
import { getWhatsAppUrl } from "@/lib/data";
import { GeometricLines } from "@/components/ui/GeometricLines";
import { MagneticButton } from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function EducationalSection() {
  const [activeArticle, setActiveArticle] = useState<EducationalArticle | null>(
    null
  );
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.fromTo(
        ".edu-card",
        { y: 46, scale: 0.96, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
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

  return (
    <section
      id="orientacoes"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#EFE9DF]/75 dark:bg-[#240611] border-y border-[#9E825C]/20 dark:border-[#C8AE88]/20 overflow-hidden"
    >
      <GeometricLines variant="educational" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="pl-5 border-l border-[#9E825C] dark:border-[#C8AE88] max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#9E825C] dark:text-[#C8AE88] font-semibold">
              Conteúdo Jurídico Informativo
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-tight">
              Informação clara para reconhecer e proteger seus direitos.
            </h2>
          </div>

          <p className="text-sm text-[#4A373E] dark:text-[#D8C8CE] max-w-md leading-relaxed">
            Guias práticos e ilustrados sobre direitos muitas vezes
            desconhecidos nas relações de trabalho, família, consumo e bancos.
          </p>
        </div>

        {/* Grid 4 Cards com Imagem Editorial em Cada Orientação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATIONAL_ARTICLES.map((article) => (
            <button
              key={article.id}
              type="button"
              onClick={() => setActiveArticle(article)}
              className="edu-card text-left group rounded-2xl overflow-hidden bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover:border-[#9E825C] dark:hover:border-[#C8AE88] shadow-xs hover:shadow-[0_14px_30px_rgba(66,13,33,0.12)] hover:-translate-y-1 transition-all duration-350 flex flex-col justify-between cursor-pointer"
            >
              <div className="w-full">
                {/* Imagem Visual da Orientação */}
                <div className="relative w-full aspect-[16/10] bg-[#EFE9DF] dark:bg-[#2B0815] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 310px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B0815]/55 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F9F6F0]/95 dark:bg-[#2B0815]/90 text-[#420D21] dark:text-[#C8AE88] font-semibold uppercase tracking-wider text-[10px] shadow-xs">
                    {article.category}
                  </span>
                </div>

                {/* Textos */}
                <div className="p-5 pb-3">
                  <div className="inline-flex items-center gap-1 text-[11px] text-[#6B545C] dark:text-[#D8C8CE] mb-2">
                    <Clock className="w-3 h-3 text-[#9E825C] dark:text-[#C8AE88]" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-snug group-hover:text-[#9E825C] dark:group-hover:text-[#C8AE88] transition-colors">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#4A373E] dark:text-[#D8C8CE] line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="w-full px-5 py-3.5 border-t border-[#9E825C]/15 dark:border-[#C8AE88]/15 flex items-center justify-between gap-3 text-xs font-semibold text-[#420D21] dark:text-[#C8AE88]">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  Ler orientação
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Completo com Imagem */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B040C]/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/40 dark:border-[#C8AE88]/30 shadow-2xl p-6 sm:p-8 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9E825C] dark:text-[#C8AE88]">
                  {activeArticle.category} · {activeArticle.readTime}
                </span>
                <h3 className="mt-1.5 font-serif text-2xl sm:text-3xl font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-snug">
                  {activeArticle.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Fechar artigo"
                className="p-2 rounded-full border border-[#9E825C]/30 text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#9E825C]/25 my-5">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                className="object-cover"
                sizes="640px"
              />
            </div>

            <p className="text-sm sm:text-[15px] leading-relaxed text-[#4A373E] dark:text-[#D8C8CE]">
              {activeArticle.excerpt}
            </p>

            <ul className="mt-5 space-y-3">
              {activeArticle.keyPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#EFE9DF]/70 dark:bg-[#2B0815]/70 border border-[#9E825C]/20 dark:border-[#C8AE88]/15"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#9E825C] dark:text-[#C8AE88] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed text-[#420D21] dark:text-[#F4EFE6]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs text-[#6B545C] dark:text-[#D8C8CE] italic">
              Nota informativa ({activeArticle.legalNote}). Cada situação exige
              conferência documental individualizada.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <MagneticButton strength={0.2} className="flex-1">
                <a
                  href={getWhatsAppUrl(activeArticle.whatsappTopic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full px-5 py-3.5 bg-[#420D21] hover:bg-[#5B1530] dark:bg-[#C8AE88] dark:hover:bg-[#dbc49f] text-[#F4EFE6] dark:text-[#2B0815] text-sm font-semibold hover-lift gap-2 cursor-pointer"
                >
                  <span>Consultar Advogado</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </MagneticButton>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-3 rounded-full border border-[#9E825C]/35 text-sm font-medium text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226] cursor-pointer"
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
