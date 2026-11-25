"use client";

import Link from "next/link";
import {
  Globe,
  MapPin,
  Briefcase,
  Users,
  Scale,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { GeometricLines } from "@/components/ui/GeometricLines";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { OFFICE_INFO, getWhatsAppUrl } from "@/lib/data";

const LINK_ACTIONS = [
  {
    title: "Consultar Advogado pelo WhatsApp",
    subtitle: "Atendimento trabalhista, família, consumidor, cível e bancário",
    href: getWhatsAppUrl(
      "Olá! Vim pelo link do Instagram e gostaria de conversar com um advogado."
    ),
    external: true,
    primary: true,
    icon: WhatsAppIcon,
  },
  {
    title: "Direito do Trabalho — Valores a Receber",
    subtitle: "Horas extras, rescisão, FGTS, vínculo sem registro e cálculos",
    href: getWhatsAppUrl(
      "Olá! Vim pelo Instagram e gostaria de consultar um advogado sobre direitos trabalhistas e valores a receber."
    ),
    external: true,
    primary: false,
    icon: Briefcase,
  },
  {
    title: "Direito de Família e Inventários",
    subtitle: "Pensão alimentícia, divórcio, guarda, partilha e sucessões",
    href: getWhatsAppUrl(
      "Olá! Vim pelo Instagram e preciso de orientação jurídica na área de Família e Sucessões."
    ),
    external: true,
    primary: false,
    icon: Users,
  },
  {
    title: "Acessar Site Completo",
    subtitle: "Conheça nossa metodologia, guias informativos e áreas",
    href: "/",
    external: false,
    primary: false,
    icon: Globe,
  },
  {
    title: "Localização — Capão Raso, Curitiba/PR",
    subtitle: "Av. Winston Churchill, 1824 · Traçar rota no Google Maps",
    href: OFFICE_INFO.mapsUrl,
    external: true,
    primary: false,
    icon: MapPin,
  },
];

export function LinksClient() {
  return (
    <div className="min-h-[100dvh] lg:h-[100dvh] lg:overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#F9F6F0] dark:bg-[#2B0815]">
      {/* Coluna Esquerda Desktop — Identidade Visual Vinho & Dourado */}
      <div className="hidden lg:flex lg:col-span-5 relative bg-[#2B0815] text-[#F4EFE6] flex-col justify-between p-10 xl:p-12 border-r border-[#C8AE88]/20 overflow-hidden">
        <GeometricLines variant="links" forceDark />

        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" aria-label="Voltar ao site institucional">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_sem_fundo_usarnomodoescuro.png"
              alt={OFFICE_INFO.fullTitle}
              className="h-20 w-auto object-contain object-left"
            />
          </Link>
        </div>

        <div className="relative z-10 my-auto space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C8AE88]/70 shrink-0 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Foto_perfil_otimizada.jpg"
                alt={`Dra. ${OFFICE_INFO.lawyerFullName}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8AE88] font-semibold">
                {OFFICE_INFO.oab}
              </p>
              <h1 className="font-serif text-2xl xl:text-3xl font-semibold text-[#F4EFE6]">
                Dra. {OFFICE_INFO.lawyerFullName}
              </h1>
              <p className="text-xs text-[#D8C8CE] mt-0.5">
                {OFFICE_INFO.specialtyHeadline}
              </p>
            </div>
          </div>

          <div className="pl-4 border-l border-[#C8AE88]/70">
            <p className="font-serif italic text-xl xl:text-2xl text-[#C8AE88] leading-snug">
              &ldquo;{OFFICE_INFO.tagline}&rdquo;
            </p>
            <p className="mt-2.5 text-sm text-[#D8C8CE] leading-relaxed">
              {OFFICE_INFO.summaryDescription}
            </p>
          </div>
        </div>

        <div className="relative z-10 pt-5 border-t border-[#C8AE88]/20 space-y-2 text-xs text-[#D8C8CE]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C8AE88] shrink-0" />
            <span>{OFFICE_INFO.address.full}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#C8AE88] shrink-0" />
            <span>Seg a Sex · 09h às 12h e 13h às 17h30</span>
          </div>
        </div>
      </div>

      {/* Coluna Direita (e Tela Única Mobile 100dvh sem rolagem desnecessária) */}
      <div className="lg:col-span-7 relative flex flex-col justify-between px-4 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-8 min-h-[100dvh] lg:min-h-0 overflow-hidden">
        <GeometricLines variant="links" />

        {/* Cabeçalho Compacto Mobile + Toggle */}
        <div className="relative z-10 flex items-center justify-between gap-3">
          <Link href="/" className="lg:hidden inline-flex items-center" aria-label="Início">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_sem_fundo_usarnomodoclaro.png"
              alt={OFFICE_INFO.fullTitle}
              className="dark:hidden h-12 w-auto object-contain object-left"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_sem_fundo_usarnomodoescuro.png"
              alt={OFFICE_INFO.fullTitle}
              className="hidden dark:block h-12 w-auto object-contain object-left"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9E825C] dark:text-[#C8AE88] font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Central Oficial de Atendimento</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={OFFICE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#9E825C]/35 dark:border-[#C8AE88]/30 bg-[#EFE9DF]/80 dark:bg-[#4A1226]/70 text-[#420D21] dark:text-[#C8AE88]"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Cartão Perfil Compacto no Mobile */}
        <div className="relative z-10 lg:hidden flex items-center gap-3 my-2 px-3.5 py-2.5 rounded-2xl bg-[#EFE9DF]/85 dark:bg-[#380B1C] border border-[#9E825C]/25 dark:border-[#C8AE88]/25">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C8AE88] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Foto_perfil_otimizada.jpg"
              alt={`Dra. ${OFFICE_INFO.lawyerFullName}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#9E825C] dark:text-[#C8AE88] font-semibold truncate">
              {OFFICE_INFO.oab} · Curitiba/PR
            </p>
            <p className="font-serif text-base font-semibold text-[#420D21] dark:text-[#F4EFE6] truncate">
              Dra. Ariane Savi — Direito do Trabalho
            </p>
          </div>
        </div>

        {/* Botões Principais */}
        <div className="relative z-10 my-auto w-full max-w-xl mx-auto space-y-2.5 sm:space-y-3">
          {LINK_ACTIONS.map((item) => {
            const Icon = item.icon;
            const classes = item.primary
              ? "bg-[#25D366] hover:bg-[#20ba59] text-white border-[#25D366] shadow-md"
              : "bg-[#EFE9DF]/85 hover:bg-[#420D21] text-[#420D21] hover:text-[#F4EFE6] dark:bg-[#380B1C] dark:hover:bg-[#4A1226] dark:text-[#F4EFE6] border-[#9E825C]/30 dark:border-[#C8AE88]/25";

            const inner = (
              <div className="flex items-center justify-between gap-3 w-full">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      item.primary
                        ? "bg-white/20 text-white"
                        : "bg-[#420D21]/10 dark:bg-[#C8AE88]/15 text-[#420D21] dark:text-[#C8AE88] group-hover:bg-[#C8AE88] group-hover:text-[#2B0815]"
                    } transition-colors`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-semibold truncate">
                      {item.title}
                    </div>
                    <div
                      className={`text-[11px] truncate ${
                        item.primary
                          ? "text-white/90"
                          : "text-[#5C464E] dark:text-[#D8C8CE] group-hover:text-[#D8C8CE]"
                      }`}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            );

            if (item.external) {
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border transition-all duration-250 ${classes}`}
                >
                  {inner}
                </a>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group block w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border transition-all duration-250 ${classes}`}
              >
                {inner}
              </Link>
            );
          })}
        </div>

        {/* Rodapé Discreto */}
        <div className="relative z-10 text-center pt-2 text-[11px] text-[#6B545C] dark:text-[#D8C8CE]/80">
          {OFFICE_INFO.fullTitle} · {OFFICE_INFO.oab} · 5.0 ★ Google Verificado
        </div>
      </div>
    </div>
  );
}
