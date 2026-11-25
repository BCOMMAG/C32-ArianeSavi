"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import {
  PRACTICE_CATEGORIES,
  LEGAL_DEMANDS,
  LegalDemandCard,
} from "@/data/areas";
import { getWhatsAppUrl } from "@/lib/data";
import { GeometricLines } from "@/components/ui/GeometricLines";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import {
  ArrowRight,
  Info,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Scale,
} from "lucide-react";
import { gsap } from "gsap";

export function PracticeAreasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [selectedCard, setSelectedCard] = useState<LegalDemandCard | null>(null);

  const visibleCards = useMemo(() => {
    if (selectedCategory === "todos") return LEGAL_DEMANDS;
    return LEGAL_DEMANDS.filter((item) => item.categoryId === selectedCategory);
  }, [selectedCategory]);

  // Para filtros com poucos itens, multiplica para garantir preenchimento além de 100vw antes de duplicar 50/50
  const baseGroup = useMemo(() => {
    if (visibleCards.length >= 4) return visibleCards;
    return [...visibleCards, ...visibleCards, ...visibleCards];
  }, [visibleCards]);

  // Ouvir seleções externas vindas da Navbar ou atalhos do Hero
  useEffect(() => {
    const onSelectArea = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom.detail) {
        setSelectedCategory(custom.detail);
        setIsPausedByUser(false);
      }
    };
    window.addEventListener("selectPracticeArea", onSelectArea);
    return () => window.removeEventListener("selectPracticeArea", onSelectArea);
  }, []);

  // Motor Marquee GPU via GSAP translateX(-50%) com 100% de fluidez em qualquer tela/DPI
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (tweenRef.current) {
      tweenRef.current.kill();
      tweenRef.current = null;
    }

    gsap.set(track, { xPercent: 0 });

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const durationSec = Math.max(20, baseGroup.length * 4.4);
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: durationSec,
      ease: "none",
      repeat: -1,
    });

    if (isPausedByUser) {
      tween.pause();
    }

    tweenRef.current = tween;

    return () => {
      tween.kill();
      tweenRef.current = null;
    };
  }, [baseGroup, isPausedByUser]);

  // Sincronizar pause/play sem recriar o tween
  useEffect(() => {
    const tween = tweenRef.current;
    if (!tween) return;
    if (isPausedByUser) {
      gsap.to(tween, { timeScale: 0, duration: 0.35, ease: "power2.out" });
    } else {
      tween.play();
      gsap.to(tween, { timeScale: 1, duration: 0.45, ease: "power2.out" });
    }
  }, [isPausedByUser]);

  const handleMouseEnter = () => {
    if (tweenRef.current && !isPausedByUser) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.35, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current && !isPausedByUser) {
      tweenRef.current.play();
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.45, ease: "power2.out" });
    }
  };

  const handleArrowStep = (dir: number) => {
    const tween = tweenRef.current;
    if (!tween) return;
    const stepProgress = 1 / Math.max(baseGroup.length, 4);
    const current = tween.progress();
    const target = (current + dir * stepProgress + 1) % 1;
    gsap.to(tween, {
      progress: target,
      duration: 0.55,
      ease: "power2.out",
    });
  };

  const closeModal = useCallback(() => setSelectedCard(null), []);
  useEffect(() => {
    if (!selectedCard) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedCard, closeModal]);

  const renderCard = (card: LegalDemandCard, keyPrefix: string) => (
    <div
      key={keyPrefix}
      onClick={() => setSelectedCard(card)}
      className="w-[285px] sm:w-[330px] shrink-0 rounded-2xl overflow-hidden flex flex-col justify-between bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover:border-[#9E825C] dark:hover:border-[#C8AE88] shadow-xs hover:shadow-[0_14px_34px_rgba(66,13,33,0.16)] hover:-translate-y-1.5 transition-all duration-400 cursor-pointer group"
    >
      <div>
        <div className="relative w-full aspect-[16/10] bg-[#EFE9DF] dark:bg-[#2B0815] overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="340px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B0815]/60 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F9F6F0]/95 dark:bg-[#2B0815]/90 text-[#420D21] dark:text-[#C8AE88] shadow-xs">
            {card.badge}
          </span>
          <span className="absolute bottom-2.5 left-3 text-[10px] font-medium uppercase tracking-widest text-[#F4EFE6]/95">
            {card.categoryName}
          </span>
        </div>

        <div className="p-5 pb-3">
          <h3 className="font-serif text-xl font-semibold text-[#420D21] dark:text-[#F4EFE6] mb-1.5 leading-snug group-hover:text-[#9E825C] dark:group-hover:text-[#C8AE88] transition-colors">
            {card.title}
          </h3>
          <p className="text-xs leading-relaxed text-[#4A373E] dark:text-[#D8C8CE] line-clamp-3">
            {card.summary}
          </p>
        </div>
      </div>

      <div className="px-5 pb-4 pt-3 border-t border-[#9E825C]/15 dark:border-[#C8AE88]/15 space-y-2.5 mt-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedCard(card);
          }}
          className="w-full py-2 px-3 rounded-xl bg-[#EFE9DF]/85 dark:bg-[#2B0815] border border-[#9E825C]/25 dark:border-[#C8AE88]/25 hover:border-[#9E825C] dark:hover:border-[#C8AE88] text-[11px] font-semibold text-[#420D21] dark:text-[#F4EFE6] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-[#9E825C] dark:text-[#C8AE88]" />
          <span>Ver direitos e base legal</span>
        </button>

        <div className="flex items-center justify-between text-[11px] font-semibold">
          <a
            href={getWhatsAppUrl(card.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-[#420D21] dark:text-[#C8AE88] hover:underline"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Conversar com Advogado</span>
          </a>

          <span className="inline-flex items-center gap-1 text-[#9E825C] dark:text-[#D8C8CE]">
            <span>Expandir</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="relative py-20 sm:py-24 bg-[#EFE9DF]/70 dark:bg-[#240611] border-y border-[#9E825C]/20 dark:border-[#C8AE88]/20 overflow-hidden"
    >
      <GeometricLines variant="areas" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#9E825C]/25 dark:border-[#C8AE88]/20 gap-4 mb-6">
          <div className="pl-5 border-l border-[#9E825C] dark:border-[#C8AE88] max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#9E825C] dark:text-[#C8AE88] font-semibold block mb-2">
              Especialidades Jurídicas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#420D21] dark:text-[#F4EFE6] font-semibold leading-[1.12]">
              Vitrine de soluções para proteger seus direitos
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#4A373E] dark:text-[#D8C8CE] max-w-md leading-relaxed">
            Passe o mouse sobre qualquer demanda para desacelerar e ler com
            calma, ou filtre pela área de seu interesse abaixo.
          </p>
        </div>

        {/* Menu Superior de Filtros */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5 mb-5">
          {PRACTICE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setIsPausedByUser(false);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#420D21] text-[#F4EFE6] dark:bg-[#C8AE88] dark:text-[#2B0815] shadow-sm scale-[1.02]"
                    : "bg-[#F9F6F0] dark:bg-[#380B1C] text-[#420D21] dark:text-[#D8C8CE] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 hover:border-[#9E825C] dark:hover:border-[#C8AE88]"
                }`}
              >
                {cat.shortName}
              </button>
            );
          })}
        </div>

        {/* Controles da Vitrine */}
        <div className="flex items-center justify-between mb-4 px-1">
          <button
            type="button"
            onClick={() => setIsPausedByUser((p) => !p)}
            className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 text-[#420D21] dark:text-[#C8AE88] font-medium hover:border-[#9E825C] cursor-pointer transition-colors"
          >
            {isPausedByUser ? (
              <>
                <Play className="w-3 h-3" />
                <span>Vitrine pausada · Clique para retomar</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3" />
                <span>Vitrine em deslize automático contínuo</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleArrowStep(-1)}
              aria-label="Anterior"
              className="p-2 rounded-full bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 text-[#420D21] dark:text-[#F4EFE6] hover:border-[#9E825C] dark:hover:border-[#C8AE88] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleArrowStep(1)}
              aria-label="Próximo"
              className="p-2 rounded-full bg-[#F9F6F0] dark:bg-[#380B1C] border border-[#9E825C]/30 dark:border-[#C8AE88]/25 text-[#420D21] dark:text-[#F4EFE6] hover:border-[#9E825C] dark:hover:border-[#C8AE88] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Viewport Full-Bleed do Marquee GPU */}
      <div
        className="relative z-10 w-full overflow-hidden py-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Máscaras laterais sutis de entrada/saída */}
        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#EFE9DF] dark:from-[#240611] to-transparent z-20" />
        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#EFE9DF] dark:from-[#240611] to-transparent z-20" />

        <div ref={trackRef} className="flex w-max will-change-transform">
          <div className="flex items-stretch gap-5 pr-5">
            {baseGroup.map((card, i) =>
              renderCard(card, `g1-${card.id}-${i}`)
            )}
          </div>
          <div className="flex items-stretch gap-5 pr-5" aria-hidden="true">
            {baseGroup.map((card, i) =>
              renderCard(card, `g2-${card.id}-${i}`)
            )}
          </div>
        </div>
      </div>

      {/* Modal Quick View */}
      {selectedCard && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B040C]/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] overflow-y-auto bg-[#F9F6F0] dark:bg-[#380B1C] text-[#420D21] dark:text-[#F4EFE6] rounded-3xl border border-[#9E825C]/35 dark:border-[#C8AE88]/30 shadow-2xl p-6 sm:p-8 space-y-5 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EFE9DF] dark:bg-[#2B0815] text-[#9E825C] dark:text-[#C8AE88] border border-[#9E825C]/25 inline-block mb-2">
                  {selectedCard.categoryName} · {selectedCard.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug">
                  {selectedCard.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fechar janela"
                className="p-2 rounded-full hover:bg-[#EFE9DF] dark:hover:bg-[#4A1226] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#9E825C]/25">
              <Image
                src={selectedCard.image}
                alt={selectedCard.title}
                fill
                className="object-cover"
                sizes="520px"
              />
            </div>

            <p className="text-sm leading-relaxed text-[#4A373E] dark:text-[#D8C8CE]">
              {selectedCard.details}
            </p>

            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9E825C] dark:text-[#C8AE88]">
                Principais Pontos Analisados
              </p>
              <ul className="space-y-2">
                {selectedCard.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#420D21] dark:text-[#F4EFE6]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#9E825C] dark:text-[#C8AE88] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 py-3 rounded-xl bg-[#EFE9DF] dark:bg-[#2B0815] border border-[#9E825C]/25 dark:border-[#C8AE88]/20 text-xs flex items-center gap-2 text-[#420D21] dark:text-[#C8AE88]">
              <Scale className="w-4 h-4 shrink-0" />
              <span>
                <strong>Base Legal:</strong> {selectedCard.legalBasis}
              </span>
            </div>

            <div className="pt-2">
              <MagneticButton strength={0.2} className="w-full">
                <a
                  href={getWhatsAppUrl(selectedCard.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full bg-[#420D21] hover:bg-[#5B1530] text-[#F4EFE6] dark:bg-[#C8AE88] dark:hover:bg-[#dbc49f] dark:text-[#2B0815] py-3.5 px-6 text-xs sm:text-sm font-semibold gap-2 shadow-sm hover-lift cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] dark:text-[#2B0815]" />
                  <span>Consultar Advogado sobre este Caso</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
