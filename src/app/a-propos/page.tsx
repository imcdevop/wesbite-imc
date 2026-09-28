import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos | IMC Alger",
  description:
    "Présentation de l'Institut de Management et de Communication d'Alger, histoire, direction et valeurs.",
};

export default function AProposPage() {
  return (
    <div className="w-full bg-white">
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">À Propos</span>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Présentation Institutionnelle
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Institut de Management et de Communication
        </h1>
        <div className="prose max-w-3xl text-slate-600 space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            Créé pour répondre aux besoins grandissants de compétences de haut niveau sur le marché algérien,
            l'IMC est un établissement supérieur de management et d'expertise professionnelle reconnu pour sa
            rigueur méthodologique et l'insertion professionnelle de ses lauréats.
          </p>
          <div id="direction" className="pt-6 border-t border-slate-200">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">Le Mot du Directeur</h2>
            <p>
              Notre engagement est d'offrir à chaque étudiant et cadre dirigeant un enseignement fondé sur
              l'exigence académique, la confrontation aux réalités industrielles et l'éthique managériale.
            </p>
          </div>
          <div id="missions" className="pt-6 border-t border-slate-200">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">Vision, Missions et Valeurs</h2>
            <p>
              Former des décideurs responsables, dotés d'une vision stratégique transversale et d'une maîtrise
              technique immédiate.
            </p>
          </div>
          <div id="qualite" className="pt-6 border-t border-slate-200">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">Politique Qualité</h2>
            <p>
              L'IMC applique un système de management de la qualité continu, validé par des évaluations pédagogiques
              périodiques et un dialogue constant avec les entreprises partenaires.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
