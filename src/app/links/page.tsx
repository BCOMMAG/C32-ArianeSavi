import type { Metadata } from "next";
import { LinksClient } from "@/components/LinksClient";
import { OFFICE_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Links Oficiais",
  description: `Central de atendimento e contatos diretos — ${OFFICE_INFO.fullTitle} (${OFFICE_INFO.oab}).`,
};

export default function LinksPage() {
  return <LinksClient />;
}
