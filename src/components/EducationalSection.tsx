"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BookOpen, Clock, ArrowRight, CheckCircle2, X } from "lucide-react";
import { EDUCATIONAL_ARTICLES, EducationalArticle } from "@/data/educational";
import { getWhatsAppUrl } from "@/lib/data";
import { GeometricLines } from "@/components/ui/GeometricLines";

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

      gsap.from(".edu-card", {
        y: 26,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
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
      id="orientacoes"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#EFE9DF]/70 dark:bg-[#240611] overflow-hidden"
    >
      <GeometricLines variant="educational" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
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
            Guias práticos sobre direitos muitas vezes desconhecidos nas relações
            de trabalho, família, consumo e bancos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATIONAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="edu-card group p-6 sm:p-8 rounded-2xl bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover:border-[#9E825C] dark:hover:border-[#C8AE88] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-6"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE9DF] dark:bg-[#4A1226] text-[#420D21] dark:text-[#C8AE88] font-semibold uppercase tracking-wider text-[11px]">
                    <BookOpen className="w-3 h-3" />
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#6B545C] dark:text-[#D8C8CE]">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-[1.65rem] font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-snug group-hover:text-[#9E825C] dark:group-hover:text-[#C8AE88] transition-colors">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#4A373E] dark:text-[#D8C8CE]">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#9E825C]/20 dark:border-[#C8AE88]/15 flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium text-[#9E825C] dark:text-[#C8AE88]">
                  {article.legalNote}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#420D21] dark:text-[#F4EFE6] hover:text-[#9E825C] dark:hover:text-[#C8AE88] shrink-0 cursor-pointer"
                >
                  <span>Ler guia completo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de Leitura do Artigo */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B040C]/80 backdrop-blur-sm"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/40 dark:border-[#C8AE88]/30 shadow-2xl p-6 sm:p-8"
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

            <div className="gold-divider-h my-5" />

            <p className="text-sm sm:text-[15px] leading-relaxed text-[#4A373E] dark:text-[#D8C8CE]">
              {activeArticle.excerpt}
            </p>

            <ul className="mt-5 space-y-3.5">
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
              <a
                href={getWhatsAppUrl(activeArticle.whatsappTopic)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#420D21] hover:bg-[#5B1530] dark:bg-[#C8AE88] dark:hover:bg-[#dbc49f] text-[#F4EFE6] dark:text-[#2B0815] text-sm font-semibold transition-colors"
              >
                <span>Consultar Advogado</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
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
