import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Download, FileText, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Revue de Management & Pratiques Managériales | IMC Alger",
  description:
    "Revue scientifique à comité de lecture de l'Institut de Management et de Communication d'Alger : articles de recherche, études empiriques et cas d'entreprises.",
};

export default function RevuePage() {
  const issues = [
    {
      num: "Volume 12 &ndash; Numéro 2",
      badge: "DERNIÈRE PARUTION",
      title: "Stratégies d'Internationalisation et Supply Chain Résiliente au Maghreb",
      date: "Automne 2026",
      shadow: "shadow-[8px_8px_0_#004b88]",
      articles: [
        {
          titre: "Impact de la dématérialisation sur la performance logistique et douanière en Algérie",
          auteur: "Dr. K. Mansouri & Pr. R. Benali",
          pages: "pp. 14-38",
        },
        {
          titre: "Gouvernance d'entreprise et conformité aux normes IFRS dans le secteur bancaire algérien",
          auteur: "Dr. S. Khelifi & Coll.",
          pages: "pp. 39-65",
        },
        {
          titre: "L'adoption de l'IA générative dans les PME algériennes : opportunités et freins organisationnels",
          auteur: "Équipe de Recherche IMC-Lab",
          pages: "pp. 66-92",
        },
      ],
    },
    {
      num: "Volume 11 &ndash; Numéro 1",
      badge: "ARCHIVE DISPONIBLE",
      title: "Transformation Managériale et Capital Humain à l'Ère Digitale",
      date: "Printemps 2026",
      shadow: "shadow-[8px_8px_0_#0f172a]",
      articles: [
        {
          titre: "Fidélisation des talents et nouvelles attentes des diplômés de l'enseignement supérieur",
          auteur: "Pr. J.-M. Dumont",
          pages: "pp. 11-32",
        },
        {
          titre: "Audit des systèmes d'information : cadre d'analyse pratique pour les banques de la place",
          auteur: "Dr. A. Cherif",
          pages: "pp. 33-58",
        },
        {
          titre: "Marketing digital et commerce électronique en Algérie : panorama économique et perspectives",
          auteur: "Dr. M. Zerrouki",
          pages: "pp. 59-84",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Revue de Management de l'IMC
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Espace de diffusion académique à comité de lecture international en double aveugle (double-blind peer review), la Revue de Management de l'IMC publie des contributions scientifiques rigoureuses sur les mutations économiques, financières et digitales en Algérie et dans le bassin méditerranéen.
        </p>
      </section>

      {/* Contenu Principal */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
            Dernières Parutions Indexées
          </h2>
        </div>

        {/* Derniers Numéros */}
        <div className="space-y-12 mb-16">
          {issues.map((iss, idx) => (
            <div
              key={idx}
              className={`border-2 border-slate-900 p-8 sm:p-10 bg-white ${iss.shadow}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-200 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-900 text-white">
                    {iss.badge}
                  </span>
                  <span
                    className="font-head text-xl font-bold text-slate-700 uppercase"
                    dangerouslySetInnerHTML={{ __html: iss.num }}
                  />
                </div>
                <span className="text-xs font-mono font-bold text-brand-600 uppercase tracking-wider">
                  {iss.date}
                </span>
              </div>

              <h3 className="font-head text-2xl sm:text-3xl font-bold uppercase text-slate-900 mb-6 leading-snug">
                {iss.title}
              </h3>

              <div className="mb-8">
                <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Sommaire des contributions scientifiques :
                </span>
                <div className="space-y-3">
                  {iss.articles.map((art, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-4 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm sm:text-base">
                            {art.titre}
                          </p>
                          <p className="text-xs text-slate-500 font-mono mt-0.5">
                            {art.auteur}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 shrink-0 self-end sm:self-center">
                        {art.pages}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider px-6 py-3 border-2 border-slate-900 shadow-[3px_3px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger le numéro complet (PDF)</span>
                </Link>

                <span className="text-xs font-mono text-slate-500">
                  ISSN : 2602-5841 &bull; Indexé &bull; Libre accès académique
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Appel à contributions scientifiques */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-8 sm:p-12 shadow-[10px_10px_0_#004b88] mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              APPEL À SOUMISSION SCIENTIFIQUE
            </span>
            <h3 className="font-head text-3xl sm:text-4xl font-bold uppercase text-white leading-tight mb-3">
              Chercheurs & Universitaires : Proposez Votre Article
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Le comité éditorial reçoit en continu des articles de recherche originaux, des synthèses théoriques et des études empiriques de terrain. Chaque texte est évalué anonymement par deux relecteurs indépendants.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider px-8 py-4 border-2 border-white shadow-[4px_4px_0_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>Soumettre un manuscrit</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Liens de bas de page */}
        <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/recherche"
            className="section-link group text-sm"
          >
            <span>&larr; Retour au Pôle Recherche Scientifique</span>
          </Link>

          <Link
            href="/recherche/colloques"
            className="section-link group text-sm"
          >
            <span>Consulter les Colloques Scientifiques &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
