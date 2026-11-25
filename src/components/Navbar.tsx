"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { getWhatsAppUrl, OFFICE_INFO } from "@/lib/data";

const AREA_LINKS = [
  { id: "trabalhista", label: "Direito do Trabalho" },
  { id: "familia", label: "Família e Sucessões" },
  { id: "consumidor", label: "Direito do Consumidor" },
  { id: "civil", label: "Direito Cível" },
  { id: "bancario", label: "Direito Bancário" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAreasDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const selectAreaAndScroll = (areaId: string) => {
    setAreasDropdownOpen(false);
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("selectPracticeArea", { detail: areaId }));
      const el = document.getElementById("areas");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // No topo sobre o Hero escuro usa sempre o logotipo claro para modo escuro;
  // ao rolar, adapta conforme o tema ativo.
  const useLightBgLogo = isScrolled && theme === "light";
  const logoSrc = useLightBgLogo
    ? "/logo_sem_fundo_usarnomodoclaro.png"
    : "/logo_sem_fundo_usarnomodoescuro.png";

  const navLinkClass = isScrolled
    ? "text-[#420D21] dark:text-[#F4EFE6] hover:text-[#9E825C] dark:hover:text-[#C8AE88]"
    : "text-[#F4EFE6]/95 hover:text-[#C8AE88]";

  return (
    <>
      {/* Logo Mobile Desacoplado (padrão C27) */}
      <div className="lg:hidden fixed -top-3.5 sm:-top-4 left-2 sm:left-3 z-[45] pointer-events-none">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="pointer-events-auto inline-flex items-center focus:outline-none"
          aria-label="Início — Ariane Savi Advocacia"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt={OFFICE_INFO.fullTitle}
            className="h-20 sm:h-22 w-32 sm:w-36 max-w-[36vw] object-contain object-left transition-all duration-300 drop-shadow-sm"
          />
        </Link>
      </div>

      {/* Navbar Principal */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F9F6F0]/95 dark:bg-[#2B0815]/95 backdrop-blur-md border-b border-[#9E825C]/25 dark:border-[#C8AE88]/20 shadow-sm py-2.5"
            : "bg-transparent py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Desktop Logo Container com imagem escalada internamente */}
          <div className="flex items-center">
            <div className="hidden lg:flex items-center relative h-10 w-56 xl:w-64 pointer-events-none">
              <Link
                href="/"
                onClick={handleLogoClick}
                className="pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center focus:outline-none"
                aria-label="Início — Ariane Savi Advocacia"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoSrc}
                  alt={OFFICE_INFO.fullTitle}
                  className="h-22 xl:h-26 w-auto object-contain object-left transition-all duration-300"
                />
              </Link>
            </div>
            {/* Spacer mobile equivalente para alinhar controles à direita */}
            <div className="lg:hidden h-9 w-28" aria-hidden="true" />
          </div>

          {/* Navegação Desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-medium tracking-wide"
          >
            <Link href="/#inicio" onClick={handleLogoClick} className={`transition-colors ${navLinkClass}`}>
              Início
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setAreasDropdownOpen((prev) => !prev)}
                aria-expanded={areasDropdownOpen}
                className={`inline-flex items-center gap-1 transition-colors cursor-pointer ${navLinkClass}`}
              >
                Áreas de Atuação
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    areasDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {areasDropdownOpen && (
                <div className="absolute left-0 top-full mt-3 w-64 rounded-xl bg-[#F9F6F0] dark:bg-[#3A0C1D] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 shadow-xl p-2 z-50">
                  {AREA_LINKS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectAreaAndScroll(item.id)}
                      className="w-full text-left px-3.5 py-2.5 rounded-lg text-[13px] text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226] hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#sobre" className={`transition-colors ${navLinkClass}`}>
              Sobre
            </a>
            <a href="#metodologia" className={`transition-colors ${navLinkClass}`}>
              Metodologia
            </a>
            <a href="#avaliacoes" className={`transition-colors ${navLinkClass}`}>
              Avaliações
            </a>
            <a href="#orientacoes" className={`transition-colors ${navLinkClass}`}>
              Orientações
            </a>
            <a href="#faq" className={`transition-colors ${navLinkClass}`}>
              Dúvidas
            </a>
            <a href="#contato" className={`transition-colors ${navLinkClass}`}>
              Contato
            </a>
          </nav>

          {/* Ações à Direita */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-[13px] font-semibold shadow-sm hover:shadow-md transition-all duration-200"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu de navegação"
              className={`lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border transition-colors cursor-pointer ${
                isScrolled
                  ? "border-[#9E825C]/35 text-[#420D21] dark:text-[#F4EFE6] dark:border-[#C8AE88]/30"
                  : "border-[#C8AE88]/40 text-[#F4EFE6]"
              }`}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Mobile (z-[60] acima do logo fixo) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="fixed inset-0 bg-[#1B040C]/75 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="fixed right-0 top-0 bottom-0 w-[84vw] max-w-sm bg-[#F9F6F0] dark:bg-[#2B0815] border-l border-[#9E825C]/25 dark:border-[#C8AE88]/20 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#9E825C]/20 dark:border-[#C8AE88]/20">
                <Link href="/" onClick={handleLogoClick} aria-label="Início">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      theme === "dark"
                        ? "/logo_sem_fundo_usarnomodoescuro.png"
                        : "/logo_sem_fundo_usarnomodoclaro.png"
                    }
                    alt={OFFICE_INFO.fullTitle}
                    className="h-14 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="p-2 rounded-full border border-[#9E825C]/30 text-[#420D21] dark:text-[#F4EFE6]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1.5 text-[15px] font-medium">
                <a
                  href="#inicio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226]"
                >
                  Início
                </a>

                <div>
                  <button
                    type="button"
                    onClick={() => setMobileAreasOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226]"
                  >
                    <span>Áreas de Atuação</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileAreasOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileAreasOpen && (
                    <div className="pl-4 mt-1 flex flex-col gap-1 border-l border-[#C8AE88]/50 ml-3">
                      {AREA_LINKS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => selectAreaAndScroll(item.id)}
                          className="text-left px-3 py-2 text-sm text-[#4A373E] dark:text-[#D8C8CE] hover:text-[#420D21] dark:hover:text-[#C8AE88]"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {[
                  { href: "#sobre", label: "Sobre a Advogada" },
                  { href: "#metodologia", label: "Como Atuamos" },
                  { href: "#avaliacoes", label: "Avaliações" },
                  { href: "#orientacoes", label: "Orientações Jurídicas" },
                  { href: "#faq", label: "Dúvidas Frequentes" },
                  { href: "#contato", label: "Endereço e Contato" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#9E825C]/20 dark:border-[#C8AE88]/20 space-y-3">
              <p className="text-xs text-[#6B545C] dark:text-[#D8C8CE]">
                {OFFICE_INFO.address.full} · {OFFICE_INFO.oab}
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
