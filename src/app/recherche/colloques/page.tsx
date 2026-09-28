import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, MapPin, Users, FileText } from "lucide-react";

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
      location: "Campus Principal IMC, Alger",
      theme: "Intelligence Artificielle, Décision Stratégique & Éthique des Affaires",
      description:
        "Réunion de plus de 40 chercheurs et experts maghrébins et européens pour débattre de l'impact des technologies émergentes sur les modèles de management des entreprises.",
    },
    {
      title: "Journées d'Études sur les Nouvelles Normes Comptables et le SCF",
      date: "22 - 23 Mai 2026",
      location: "Auditorium IMC, Alger",
      theme: "Audit Légal, Transparence Financière et Évolution Fiscale",
      description:
        "Table ronde annuelle associant commissaires aux comptes, directeurs financiers et universitaires spécialisés en finance d'entreprise.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Fil d'Ariane */}
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/recherche" className="hover:text-slate-900 transition-colors">
            Recherche
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Colloques</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Manifestations Scientifiques
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Colloques & Rencontres Scientifiques
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
          L'IMC organise périodiquement des colloques internationaux favorisant le partage de connaissances,
          la publication d'actes académiques et le dialogue continu entre la recherche et la pratique professionnelle.
        </p>

        {/* Liste des Colloques */}
        <div className="space-y-8 mb-16">
          {events.map((evt) => (
            <div key={evt.title} className="border border-slate-200 p-8 bg-slate-50 hover:border-brand-600 transition-colors">
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {evt.date}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-4 h-4" />
                  {evt.location}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
                {evt.title}
              </h2>
              <div className="text-sm font-semibold text-slate-700 mb-4">
                Thématique : {evt.theme}
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {evt.description}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-colors"
                >
                  Télécharger l'appel à communication
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
