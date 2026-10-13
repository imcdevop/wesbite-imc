import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Colloques Scientifiques | Recherche | IMC Alger",
  description:
    "Colloques et conférences académiques organisés par l'Institut de Management et de Communication d'Alger.",
};

export default function ColloquesPage() {
  const events = [
    {
      title: "Colloque International sur la Gouvernance et la Transformation Numérique",
      date: "14 - 15 Novembre 2026",
      status: "APPEL EN COURS",
      location: "Campus Principal IMC, Alger",
      theme: "Intelligence Artificielle, Décision Stratégique & Éthique des Affaires",
      description:
        "Réunion de plus de 40 chercheurs et experts maghrébins et européens pour débattre de l'impact des technologies émergentes sur les modèles de management des entreprises en Afrique du Nord.",
    },
    {
      title: "Journées d'Études sur les Nouvelles Normes Comptables et le SCF",
      date: "22 - 23 Mai 2026",
      status: "CONFIRMÉ",
      location: "Auditorium IMC, Alger",
      theme: "Audit Légal, Transparence Financière et Évolution Fiscale",
      description:
        "Table ronde annuelle associant commissaires aux comptes, directeurs financiers de groupes cotés et universitaires spécialisés en finance d'entreprise et conformité.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Colloques & Rencontres
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          L'Institut de Management et de Communication organise périodiquement des colloques internationaux favorisant le partage de connaissances, la publication d'actes académiques indexés et le dialogue continu entre la recherche et la pratique des affaires.
        </p>
      </section>

      {/* Liste des Colloques */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8 mb-16">
          {events.map((evt) => (
            <div
              key={evt.title}
              className="border-2 border-slate-900 p-6 sm:p-10 bg-white shadow-[8px_8px_0_#004b88] hover:shadow-[10px_10px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-600 text-white">
                  {evt.status}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-900 px-2.5 py-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-600" />
                  {evt.date}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {evt.location}
                </span>
              </div>

              <h2 className="font-head text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-slate-900 mb-3 leading-tight">
                {evt.title}
              </h2>

              <div className="border-l-4 border-brand-600 pl-4 py-1 mb-4 bg-slate-50">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Axe Thématique
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-800">
                  {evt.theme}
                </span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl font-medium">
                {evt.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t-2 border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs sm:text-sm tracking-wider px-6 py-3.5 border-2 border-slate-900 shadow-[3px_3px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger l'appel à communication</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-100 text-slate-900 font-head font-bold uppercase text-xs sm:text-sm tracking-wider px-6 py-3.5 border-2 border-slate-900 transition-all"
                >
                  <span>S'inscrire en tant qu'auditeur</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Retour au Pôle Recherche */}
        <div className="pt-4">
          <Link
            href="/recherche"
            className="section-link group text-xs sm:text-sm"
          >
            <span>&larr; Retour au Pôle Recherche & Innovation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
