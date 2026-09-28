import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Wrench, Users, BookMarked, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Ateliers & Séminaires Méthodologiques | Recherche | IMC Alger",
  description:
    "Ateliers d'écriture scientifique, méthodologie de recherche en gestion et séminaires doctoraux de l'IMC Alger.",
};

export default function AteliersPage() {
  const workshops = [
    {
      title: "Atelier Méthodologique : Analyse de Données Qualitatives & Quantitatives",
      audience: "Étudiants & Chercheurs juniors",
      period: "Sessions mensuelles",
      description:
        "Prise en main des outils d'analyse statistique et textuelle (SPSS, R, NVivo) appliquée aux problématiques d'études de marché et de comportement organisationnel.",
    },
    {
      title: "Séminaire de Rédaction & Publication dans les Revues Indexées",
      audience: "Enseignants-chercheurs et doctorants",
      period: "Chaque trimestre",
      description:
        "Techniques d'argumentation scientifique, respect des normes académiques internationales, processus d'évaluation par les pairs (peer-reviewing).",
    },
    {
      title: "Ateliers de Co-conception Cas d'Entreprises Réels",
      audience: "Dirigeants partenaires et formateurs experts",
      period: "Biannuel",
      description:
        "Création conjointe d'études de cas tirées des défis stratégiques réels des entreprises algériennes pour enrichir les enseignements des formations professionnelles.",
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
          <span className="text-slate-900 font-medium">Ateliers</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Formation par la Recherche
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Ateliers & Workshops de Recherche
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
          Les ateliers de l'IMC offrent un format interactif favorisant l'acquisition d'outils
          méthodologiques rigoureux et la production de connaissances applicables au management opérationnel.
        </p>

        {/* Liste des Ateliers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {workshops.map((w) => (
            <div key={w.title} className="border border-slate-200 p-8 bg-slate-50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-2">
                  {w.period}
                </span>
                <h2 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {w.title}
                </h2>
                <div className="text-xs font-semibold text-slate-500 mb-4">
                  Public visé : {w.audience}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {w.description}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                >
                  S'inscrire à la prochaine session &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
