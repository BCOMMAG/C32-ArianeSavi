"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faqs";
import { getWhatsAppUrl } from "@/lib/data";
import { GeometricLines } from "@/components/ui/GeometricLines";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".faq-reveal",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
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

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F9F6F0] dark:bg-[#2B0815] overflow-hidden"
    >
      <GeometricLines variant="faq" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Coluna Esquerda */}
          <div className="faq-reveal lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="pl-5 border-l border-[#9E825C] dark:border-[#C8AE88]">
                <span className="text-xs uppercase tracking-[0.22em] text-[#9E825C] dark:text-[#C8AE88] font-semibold">
                  Perguntas Frequentes
                </span>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-tight">
                  Esclareça suas principais dúvidas antes da consulta.
                </h2>
              </div>

              <p className="text-sm sm:text-[15px] leading-relaxed text-[#4A373E] dark:text-[#D8C8CE]">
                Respostas objetivas sobre prazos judiciais, documentação, provas
                digitais e atendimento presencial em Curitiba ou 100% online.
              </p>

              <div className="p-6 rounded-2xl bg-[#EFE9DF] dark:bg-[#380B1C] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 hover-lift">
                <p className="font-serif text-xl font-semibold text-[#420D21] dark:text-[#F4EFE6]">
                  Sua dúvida não está listada?
                </p>
                <p className="mt-2 text-xs sm:text-sm text-[#4A373E] dark:text-[#D8C8CE] leading-relaxed">
                  Envie uma mensagem para nossa equipe e receba orientação inicial
                  direcionada ao seu caso.
                </p>
                <div className="mt-4">
                  <MagneticButton strength={0.2}>
                    <a
                      href={getWhatsAppUrl(
                        "Olá! Tenho uma dúvida jurídica específica que gostaria de esclarecer com um advogado."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill gap-2 px-5 py-2.5 border border-[#420D21] dark:border-[#C8AE88] text-[#420D21] dark:text-[#C8AE88] hover:bg-[#420D21] hover:text-[#F4EFE6] dark:hover:bg-[#C8AE88] dark:hover:text-[#2B0815] text-xs sm:text-sm font-semibold cursor-pointer"
                    >
                      <span>Esclarecer Dúvidas</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Accordion */}
          <div className="faq-reveal lg:col-span-7 space-y-3.5">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-[#EFE9DF]/95 dark:bg-[#380B1C] border-[#9E825C] dark:border-[#C8AE88]/55 shadow-sm"
                      : "bg-[#F9F6F0] dark:bg-[#320919]/75 border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover:border-[#9E825C]/65 hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.18em] font-semibold text-[#9E825C] dark:text-[#C8AE88] mb-1">
                        {item.category}
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-[#9E825C] dark:text-[#C8AE88] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 border-t border-[#9E825C]/15 dark:border-[#C8AE88]/15 animate-fade-in">
                      <p className="mt-3 text-sm leading-relaxed text-[#4A373E] dark:text-[#D8C8CE]">
                        {item.answer}
                      </p>

                      <div className="mt-4">
                        <a
                          href={getWhatsAppUrl(item.whatsappMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#420D21] dark:text-[#C8AE88] hover:text-[#9E825C] dark:hover:text-[#F4EFE6] underline underline-offset-4 decoration-[#9E825C]/60 transition-colors"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>Saiba mais no WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
