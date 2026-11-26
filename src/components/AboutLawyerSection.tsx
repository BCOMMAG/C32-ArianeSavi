"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Award, BookOpenCheck, Scale, ArrowUpRight } from "lucide-react";
import { GeometricLines } from "@/components/ui/GeometricLines";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getWhatsAppUrl, OFFICE_INFO } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const CREDENTIALS = [
  {
    icon: Scale,
    title: `Inscrição ${OFFICE_INFO.oab}`,
    description:
      "Atuação regular pela Ordem dos Advogados do Brasil (Seção Paraná).",
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
  const portraitRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (portraitRef.current) {
        gsap.fromTo(
          portraitRef.current,
          { y: 24 },
          {
            y: -24,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      gsap.fromTo(
        ".about-reveal",
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
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
      id="sobre"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F9F6F0] dark:bg-[#2B0815] overflow-hidden"
    >
      <GeometricLines variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Coluna Fotografia Real com Parallax no Scroll e Moldura Dourada */}
          <div className="about-reveal lg:col-span-5">
            <div ref={portraitRef} className="relative max-w-md mx-auto lg:mx-0 group will-change-transform">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -inset-3 translate-x-3 translate-y-3 rounded-2xl border border-[#9E825C]/45 dark:border-[#C8AE88]/40 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500 pointer-events-none"
              />
              <div className="relative rounded-2xl overflow-hidden bg-[#420D21] shadow-2xl border border-[#9E825C]/30 dark:border-[#C8AE88]/25 aspect-[3/4]">
                <Image
                  src="/Foto_perfil_otimizada.jpg"
                  alt={`Dra. ${OFFICE_INFO.lawyerFullName} (${OFFICE_INFO.oab})`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 450px"
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

          {/* Coluna Biografia */}
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
                Com especialização em{" "}
                <strong className="font-semibold text-[#420D21] dark:text-[#F4EFE6]">
                  Direito do Trabalho
                </strong>
                , também conduz demandas em Direito das Famílias e Sucessões,
                Direito Cível, Consumidor e Bancário. O escritório trabalha com
                informações jurídicas diretas e acessíveis, para que cada cliente
                entenda os seus direitos com segurança antes de tomar qualquer
                decisão.
              </p>
            </div>

            <div className="about-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {CREDENTIALS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-[#EFE9DF]/75 dark:bg-[#4A1226]/65 border border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover-lift hover:border-[#9E825C] dark:hover:border-[#C8AE88]"
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
              <MagneticButton strength={0.22}>
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de solicitar atendimento jurídico no escritório."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill px-6 py-3 bg-[#420D21] hover:bg-[#5B1530] dark:bg-[#C8AE88] dark:hover:bg-[#dbc49f] text-[#F4EFE6] dark:text-[#2B0815] text-sm font-semibold shadow-sm hover-lift gap-2 cursor-pointer"
                >
                  <span>Solicitar Atendimento</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.18}>
                <a
                  href={OFFICE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill px-5 py-3 border border-[#9E825C]/50 dark:border-[#C8AE88]/45 text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226] text-sm font-medium hover-lift cursor-pointer"
                >
                  <span>Conteúdo no Instagram {OFFICE_INFO.instagramHandle}</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
