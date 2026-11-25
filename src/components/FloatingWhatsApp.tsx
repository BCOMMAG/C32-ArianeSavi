"use client";

import { getWhatsAppUrl } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      title="Conversar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:scale-105 transition-all duration-300"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
}
