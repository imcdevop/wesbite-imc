import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contactez-nous & Admissions | IMC Alger",
  description:
    "Coordonnées officielles, formulaire de candidature, orientation et plan d'accès de l'Institut de Management et de Communication d'Alger.",
};

export default function ContactPage() {
  return <ContactContent />;
}
