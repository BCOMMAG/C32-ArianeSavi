"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { OFFICE_INFO, getWhatsAppUrl } from "@/lib/data";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2B0815] text-[#F4EFE6] border-t border-[#C8AE88]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C8AE88]/20">
          {/* Logotipo e Identificação OAB */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="inline-block focus:outline-none"
              aria-label="Voltar ao topo"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_sem_fundo_usarnomodoescuro.png"
                alt={OFFICE_INFO.fullTitle}
                className="h-20 w-auto object-contain object-left"
              />
            </Link>

            <p className="text-sm leading-relaxed text-[#D8C8CE] max-w-md">
              {OFFICE_INFO.summaryDescription}
            </p>

            <p className="text-xs uppercase tracking-[0.18em] text-[#C8AE88] font-semibold">
              Dra. {OFFICE_INFO.lawyerFullName} · {OFFICE_INFO.oab}
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C8AE88] font-semibold">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm text-[#D8C8CE]">
              <li>
                <a href="#sobre" className="hover:text-[#C8AE88] transition-colors">
                  Sobre a Advogada
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#C8AE88] transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#C8AE88] transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#orientacoes" className="hover:text-[#C8AE88] transition-colors">
                  Orientações Jurídicas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C8AE88] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <Link href="/links" className="hover:text-[#C8AE88] transition-colors">
                  Central de Links
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatos Diretos */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C8AE88] font-semibold">
              Escritório em Curitiba
            </h3>
            <p className="text-sm text-[#D8C8CE] leading-relaxed">
              {OFFICE_INFO.address.full}
            </p>
            <p className="text-xs text-[#D8C8CE]/85">
              Segunda a Sexta: 09h às 12h · 13h às 17h30
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={OFFICE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C8AE88]/40 hover:border-[#C8AE88] text-[#F4EFE6] text-xs font-medium transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#C8AE88]" />
                <span>{OFFICE_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C8CE]/80">
          <p>
            © {currentYear} {OFFICE_INFO.fullTitle}. Conteúdo de caráter
            estritamente informativo, em observância ao Código de Ética e
            Disciplina da OAB.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Subir ao topo da página"
            className="inline-flex items-center gap-1.5 text-[#C8AE88] hover:text-[#F4EFE6] transition-colors cursor-pointer"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
