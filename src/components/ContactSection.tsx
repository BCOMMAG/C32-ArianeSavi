"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  ArrowUpRight,
} from "lucide-react";
import { OFFICE_INFO, getWhatsAppUrl } from "@/lib/data";
import { GeometricLines } from "@/components/ui/GeometricLines";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
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

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-[#EFE9DF]/70 dark:bg-[#240611] overflow-hidden"
    >
      <GeometricLines variant="contact" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contact-reveal pl-5 border-l border-[#9E825C] dark:border-[#C8AE88] max-w-2xl mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.22em] text-[#9E825C] dark:text-[#C8AE88] font-semibold">
            Localização e Atendimento
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#420D21] dark:text-[#F4EFE6] leading-tight">
            Atendimento presencial em Curitiba e online em todo o país.
          </h2>
        </div>

        {/* Grid 5 / 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="contact-reveal lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#420D21] dark:bg-[#380B1C] text-[#F4EFE6] border border-[#C8AE88]/25 shadow-xl flex flex-col justify-between gap-7 hover-lift">
            <div className="space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8AE88] font-semibold">
                  {OFFICE_INFO.fullTitle}
                </p>
                <p className="mt-1 text-xs text-[#D8C8CE]">{OFFICE_INFO.oab}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C8AE88] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#C8AE88] font-semibold">
                      Endereço do Escritório
                    </h3>
                    <p className="mt-1 text-sm text-[#F4EFE6] leading-relaxed">
                      {OFFICE_INFO.address.street}
                      <br />
                      {OFFICE_INFO.address.neighborhood},{" "}
                      {OFFICE_INFO.address.city} - {OFFICE_INFO.address.state},
                      CEP {OFFICE_INFO.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#C8AE88] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#C8AE88] font-semibold">
                      Horário de Funcionamento
                    </h3>
                    <div className="mt-1 space-y-1 text-sm text-[#D8C8CE]">
                      {OFFICE_INFO.hours.map((item) => (
                        <p key={item.days}>
                          <strong className="text-[#F4EFE6] font-medium">
                            {item.days}:
                          </strong>{" "}
                          {item.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#C8AE88] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#C8AE88] font-semibold">
                      Telefone / WhatsApp
                    </h3>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-[#F4EFE6] hover:text-[#C8AE88] transition-colors"
                    >
                      {OFFICE_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#C8AE88] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#C8AE88] font-semibold">
                      E-mail Institucional
                    </h3>
                    <a
                      href={`mailto:${OFFICE_INFO.email}`}
                      className="mt-1 inline-block text-sm text-[#F4EFE6] hover:text-[#C8AE88] transition-colors break-all"
                    >
                      {OFFICE_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#C8AE88]/20 flex flex-col sm:flex-row gap-3">
              <MagneticButton strength={0.18} className="flex-1">
                <a
                  href={OFFICE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#C8AE88] hover:bg-[#d7bf9b] text-[#2B0815] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </MagneticButton>

              <a
                href={OFFICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#C8AE88]/45 hover:border-[#F4EFE6] text-[#F4EFE6] text-xs sm:text-sm font-medium transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="contact-reveal lg:col-span-7 flex flex-col gap-4">
            <div className="flex-1 min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-[#9E825C]/30 dark:border-[#C8AE88]/25 shadow-lg bg-[#EFE9DF] dark:bg-[#380B1C]">
              <iframe
                title="Localização do Escritório Ariane Savi Advocacia no Capão Raso, Curitiba"
                src={OFFICE_INFO.mapsEmbedUrl}
                className="w-full h-full min-h-[340px] sm:min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-5 rounded-2xl bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover-lift flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-lg sm:text-xl font-semibold text-[#420D21] dark:text-[#F4EFE6]">
                  Prefere agendar sua consulta por mensagem?
                </p>
                <p className="text-xs text-[#5C464E] dark:text-[#D8C8CE] mt-0.5">
                  Atendimento com hora marcada para análise reservada dos seus
                  documentos.
                </p>
              </div>
              <MagneticButton strength={0.22}>
                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de falar com um advogado e verificar horários disponíveis para atendimento."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 btn-pill gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold shadow-sm hover-lift cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Falar com Advogado</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
