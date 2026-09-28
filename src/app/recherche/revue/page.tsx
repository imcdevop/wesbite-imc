import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Download, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Revue de Management & Pratiques Managériales | IMC Alger",
  description:
    "Revue scientifique de l'Institut de Management et de Communication d'Alger, articles de recherche et études de cas.",
};

export default function RevuePage() {
  const issues = [
    {
      num: "Numéro 12 - Vol. 2",
      title: "Stratégies d'Internationalisation et Supply Chain Résiliente au Maghreb",
      date: "Automne 2026",
      articles: [
        "Impact de la dématérialisation sur la performance logistique en Algérie",
        "Gouvernance d'entreprise et conformité IFRS dans le secteur financier",
        "L'adoption de l'IA générative dans les PME algériennes : opportunités et freins",
      ],
    },
    {
      num: "Numéro 11 - Vol. 1",
      title: "Transformation Managériale et Capital Humain à l'Ère Digitale",
      date: "Printemps 2026",
      articles: [
        "Fidélisation des talents et nouvelles attentes des diplômés de l'enseignement supérieur",
        "Audit des systèmes d'information : cadre d'analyse pour les banques de la place",
        "Marketing digital et commerce électronique en Algérie : panorama et perspectives",
      ],
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
          <span className="text-slate-900 font-medium">Revue</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Publication Scientifique Périodique
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Revue de Management de l'IMC
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
          La Revue de Management de l'IMC est un espace de diffusion intellectuelle à comité de lecture
          dédié aux analyses théoriques et appliquées sur les dynamiques économiques et managériales régionales.
        </p>

        {/* Derniers Numéros */}
        <div className="space-y-8 mb-16">
          {issues.map((iss) => (
            <div key={iss.num} className="border border-slate-200 p-8 bg-slate-50 hover:border-brand-600 transition-colors">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  {iss.num}
                </span>
                <span className="text-xs text-slate-500">{iss.date}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                {iss.title}
              </h2>
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Sommaire des articles :
                </h3>
                <ul className="space-y-2">
                  {iss.articles.map((art) => (
                    <li key={art} className="flex items-start gap-2 text-sm text-slate-700">
                      <FileText className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{art}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le numéro complet (PDF)</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
