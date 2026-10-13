import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Briefcase, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Le Conseil d'Orientation Stratégique | IMC Alger",
  description:
    "Orientation stratégique, dialogue avec le patronat et articulation avec le monde de l'entreprise à l'Institut de Management et de Communication d'Alger.",
};

export default function ConseilOrientationPage() {
  const piliers = [
    {
      tag: "OBSERVATOIRE DE L'EMPLOI",
      title: "Anticipation des Métiers d'Avenir",
      desc: "Analyse prospective des compétences émergentes sur le marché algérien (Data, IA, gouvernance RSE, conformité fiscale et commerciale).",
    },
    {
      tag: "CONVENTIONS CADRES",
      title: "Passerelle Directe vers l'Entreprise",
      desc: "Négociation d'accords d'accueil de stagiaires, de projets de fin d'études et de recrutements prioritaires pour les lauréats de l'IMC.",
    },
    {
      tag: "FORMATION CONTINUE INTRA",
      title: "Adaptation aux Besoins des Dirigeants",
      desc: "Co-conception de programmes sur-mesure pour les cadres supérieurs, directeurs d'unités et hauts fonctionnaires.",
    },
  ];

  const colleges = [
    {
      titre: "Collège des Directeurs des Ressources Humaines",
      desc: "Représentants DRH de grands groupes industriels, banques, opérateurs télécoms et cabinets d'audit internationaux en Algérie.",
    },
    {
      titre: "Collège des Dirigeants & Fédérations Professionnelles",
      desc: "Chefs d'entreprises privées, dirigeants d'entreprises publiques économiques et membres d'organisations patronales.",
    },
    {
      titre: "Collège des Experts & Praticiens Associés",
      desc: "Consultants de premier plan en stratégie, juristes d'affaires et experts certifiés en technologies numériques.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Le Conseil d'Orientation
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Composé de dirigeants d'entreprises publiques et privées, de directeurs RH et de représentants patronaux, le Conseil d'Orientation garantit l'alignement permanent des 44 programmes de l'IMC avec les exigences d'employabilité et les mutations économiques nationales.
        </p>
      </section>

      {/* Contenu Principal */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Les 3 Piliers Stratégiques */}
        <div className="mb-8">
          <h2 className="font-head text-3xl font-bold uppercase text-slate-900 tracking-tight">
            Les 3 Axes d'Intervention Stratégique
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {piliers.map((p, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-900 p-6 sm:p-8 bg-white shadow-[6px_6px_0_#004b88] hover:shadow-[8px_8px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-900 mb-4">
                {p.tag}
              </span>
              <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Composition des Collèges */}
        <div className="border-2 border-slate-900 bg-slate-50 p-6 sm:p-10 shadow-[8px_8px_0_#0f172a] mb-12">
          <div className="mb-8">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white mb-2">
              Composition du Conseil
            </span>
            <h3 className="font-head text-3xl font-bold uppercase text-slate-900">
              Les 3 Collèges de Représentation Économique
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {colleges.map((col, idx) => (
              <div key={idx} className="border-2 border-slate-900 bg-white p-6 shadow-[4px_4px_0_#004b88]">
                <h4 className="font-head text-xl font-bold uppercase text-slate-900 mb-2 leading-snug">
                  {col.titre}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Liens de bas de page */}
        <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/le-conseil-scientifique"
            className="section-link group text-sm"
          >
            <span>&larr; Consulter le Conseil Scientifique</span>
          </Link>

          <Link
            href="/nos-partenaires-internationaux"
            className="section-link group text-sm"
          >
            <span>Découvrir les Partenaires Internationaux &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
