"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
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
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopSubmenuOpen(false);
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
    setDesktopSubmenuOpen(false);
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("selectPracticeArea", { detail: areaId })
      );
      const el = document.getElementById("areas");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Logo estritamente contida no espaço do header, adaptada ao tema Claro / Escuro
  const logoSrc =
    theme === "dark"
      ? "/logo_sem_fundo_usarnomodoescuro.png"
      : "/logo_sem_fundo_usarnomodoclaro.png";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F9F6F0]/95 dark:bg-[#2B0815]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(66,13,33,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.45)] border-b border-[#9E825C]/25 dark:border-[#C8AE88]/20 py-2 sm:py-2.5"
            : "bg-transparent backdrop-blur-none border-b border-transparent py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Logotipo perfeitamente enquadrado dentro da altura da barra */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8AE88] rounded-lg shrink-0"
              aria-label={`Ir para o início — ${OFFICE_INFO.fullTitle}`}
            >
              <div className="relative h-12 sm:h-14 md:h-15 w-40 sm:w-48 md:w-56 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={logoSrc}
                  alt={OFFICE_INFO.fullTitle}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 160px, 224px"
                />
              </div>
            </Link>

            {/* Navegação Desktop */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-5 xl:gap-6 text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#420D21] dark:text-[#F4EFE6]"
            >
              <Link
                href="/#inicio"
                onClick={handleLogoClick}
                className="hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors"
              >
                Início
              </Link>

              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setDesktopSubmenuOpen(true)}
                onMouseLeave={() => setDesktopSubmenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDesktopSubmenuOpen((prev) => !prev)}
                  className="flex items-center gap-1 hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors uppercase cursor-pointer py-2"
                  aria-expanded={desktopSubmenuOpen}
                >
                  <span>Áreas</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      desktopSubmenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {desktopSubmenuOpen && (
                  <div className="absolute left-0 top-full pt-1 w-64 z-50">
                    <div className="rounded-2xl bg-[#F9F6F0] dark:bg-[#3A0C1D] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 shadow-xl p-2">
                      {AREA_LINKS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => selectAreaAndScroll(item.id)}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium normal-case tracking-normal text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226] hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#sobre"
                className="hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors"
              >
                Sobre
              </a>
              <a
                href="#metodologia"
                className="hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors"
              >
                Experiência
              </a>
              <a
                href="#avaliacoes"
                className="hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors"
              >
                Avaliações
              </a>
              <a
                href="#orientacoes"
                className="hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors"
              >
                Orientações
              </a>
              <a
                href="#faq"
                className="hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors"
              >
                Dúvidas
              </a>
              <a
                href="#contato"
                className="hover:text-[#9E825C] dark:hover:text-[#C8AE88] transition-colors"
              >
                Contato
              </a>
            </nav>

            {/* Controles à Direita */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <ThemeToggle />

              <MagneticButton strength={0.22}>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-[13px] font-semibold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </MagneticButton>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Abrir menu"
                className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#9E825C]/35 dark:border-[#C8AE88]/35 bg-[#EFE9DF]/85 dark:bg-[#4A1226]/75 text-[#420D21] dark:text-[#F4EFE6] cursor-pointer"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="fixed inset-0 bg-[#1B040C]/75 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="fixed right-0 top-0 bottom-0 w-[84vw] max-w-sm bg-[#F9F6F0] dark:bg-[#2B0815] border-l border-[#9E825C]/25 dark:border-[#C8AE88]/20 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#9E825C]/20 dark:border-[#C8AE88]/20">
                <Link
                  href="/"
                  onClick={handleLogoClick}
                  aria-label="Início"
                  className="relative h-12 w-40 block"
                >
                  <Image
                    src={logoSrc}
                    alt={OFFICE_INFO.fullTitle}
                    fill
                    className="object-contain object-left"
                    sizes="160px"
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
                    onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[#420D21] dark:text-[#F4EFE6] hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226]"
                  >
                    <span>Áreas de Atuação</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileSubmenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSubmenuOpen && (
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
                  { href: "#metodologia", label: "Experiência do Cliente" },
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
