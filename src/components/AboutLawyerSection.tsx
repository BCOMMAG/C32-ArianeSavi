"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Award, BookOpenCheck, Scale, ArrowUpRight } from "lucide-react";
import { GeometricLines } from "@/components/ui/GeometricLines";
import { getWhatsAppUrl, OFFICE_INFO } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const CREDENTIALS = [
  {
    icon: Scale,
    title: `Inscrição ${OFFICE_INFO.oab}`,
    description: "Atuação regular pela Ordem dos Advogados do Brasil — Seção Paraná.",
  },
  {
    icon: Award,
    title: "Pós-Graduada em Direito e Processo do Trabalho",
    description:
      "Especialização focada em cálculos trabalhistas, audiências e proteção ao trabalhador.",
  },
  {
    icon: BookOpenCheck,
    title: "Pós-Graduanda em Direito das Famílias e Sucessões",
    description:
      "Formação em Direito desde dezembro de 2020, com constante atualização acadêmica e prática.",
  },
];

export function AboutLawyerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.from(".about-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F9F6F0] dark:bg-[#2B0815] overflow-hidden"
    >
      <GeometricLines variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Coluna Fotografia Editorial */}
          <div className="about-reveal lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Moldura em Fio Dourado Deslocada */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -inset-3 translate-x-3 translate-y-3 rounded-2xl border border-[#9E825C]/45 dark:border-[#C8AE88]/40 pointer-events-none"
              />
              <div className="relative rounded-2xl overflow-hidden bg-[#420D21] shadow-2xl border border-[#9E825C]/25 dark:border-[#C8AE88]/25 aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Foto_perfil_otimizada.jpg"
                  alt="Dra. Ariane Cristina Bones Savi — Advogada OAB/PR 112.323"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B0815] via-[#2B0815]/75 to-transparent px-6 pt-12 pb-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8AE88] font-medium">
                    {OFFICE_INFO.oab}
                  </p>
                  <p className="font-serif text-xl sm:text-2xl text-[#F4EFE6] font-medium mt-0.5">
                    Dra. {OFFICE_INFO.lawyerFullName}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Biografia e Credenciais */}
          <div className="lg:col-span-7 space-y-6">
            <div className="about-reveal pl-5 border-l border-[#9E825C] dark:border-[#C8AE88]">
              <span className="text-xs uppercase tracking-[0.22em] text-[#9E825C] dark:text-[#C8AE88] font-semibold">
                Quem Conduz o Escritório
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-[#420D21] dark:text-[#F4EFE6]">
                Técnica apurada, clareza informativa e atuação próxima.
              </h2>
            </div>

            <div className="about-reveal space-y-4 text-[15px] sm:text-base leading-relaxed text-[#4A373E] dark:text-[#D8C8CE]">
              <p>
                <strong className="font-semibold text-[#420D21] dark:text-[#F4EFE6]">
                  Ariane Cristina Bones Savi
                </strong>{" "}
                é advogada inscrita sob a{" "}
                <strong className="font-semibold text-[#420D21] dark:text-[#C8AE88]">
                  {OFFICE_INFO.oab}
                </strong>
                , bacharel em Direito formada em {OFFICE_INFO.graduatedSince} e
                com atuação jurídica contínua {OFFICE_INFO.practiceSince}.
              </p>
              <p>
                Com foco e especialidade em{" "}
                <strong className="font-semibold text-[#420D21] dark:text-[#F4EFE6]">
                  Direito do Trabalho
                </strong>
                , dedica-se também às demandas de Direito das Famílias e
                Sucessões, Direito Cível, Consumidor e Bancário — mantendo como
                propósito traduzir informações jurídicas essenciais em uma
                linguagem acessível, para que cada cliente compreenda seus
                direitos antes de tomar decisões importantes.
              </p>
            </div>

            <div className="about-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {CREDENTIALS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-[#EFE9DF]/70 dark:bg-[#4A1226]/65 border border-[#9E825C]/25 dark:border-[#C8AE88]/20"
                  >
                    <Icon className="w-5 h-5 text-[#9E825C] dark:text-[#C8AE88] mb-2.5" />
                    <h3 className="text-sm font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#5C464E] dark:text-[#D8C8CE]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="about-reveal pt-2 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl(
                  "Olá! Gostaria de solicitar atendimento jurídico no escritório."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#420D21] hover:bg-[#5B1530] dark:bg-[#C8AE88] dark:hover:bg-[#dbc49f] text-[#F4EFE6] dark:text-[#2B0815] text-sm font-semibold shadow-sm transition-colors duration-300"
              >
                <span>Solicitar Atendimento</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={OFFICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#9E825C]/50 dark:border-[#C8AE88]/45 text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226] text-sm font-medium transition-colors duration-300"
              >
                <span>Conteúdo no Instagram {OFFICE_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
