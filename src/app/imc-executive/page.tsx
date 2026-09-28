import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Briefcase, Award, CheckCircle2, Users, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "IMC Executive Education | Formation Continue pour Cadres | IMC Alger",
  description:
    "Formations certifiantes, séminaires exécutifs et programmes sur-mesure pour cadres dirigeants et managers à l'IMC Alger.",
};

export default function ImcExecutivePage() {
  const tracks = [
    {
      title: "Certificats Dirigeants (Executive Certificates)",
      format: "Sessions de 3 à 5 jours ou week-ends",
      target: "Directeurs généraux, membres de comités de direction, directeurs de filiales",
      modules: [
        "Leadership Stratégique & Prise de Décision en Contexte Complexe",
        "Gouvernance Financière & Pilotage de la Valeur Actionnariale",
        "Conduite du Changement & Transformation Numérique",
      ],
    },
    {
      title: "Formations Sur-Mesure Intra-Entreprises",
      format: "Programme adapté aux enjeux spécifiques de l'entreprise",
      target: "Grandes entreprises, groupes publics et privés, institutions",
      modules: [
        "Audit préalable des besoins en compétences",
        "Co-construction des études de cas métier",
        "Accompagnement post-formation et mesure du retour sur investissement (ROI)",
      ],
    },
    {
      title: "Cycles Professionnels Spécialisés",
      format: "Rythme partagé (vendredi - samedi sur 6 mois)",
      target: "Managers opérationnels en évolution vers des fonctions stratégiques",
      modules: [
        "Contrôle de Gestion & Performance Opérationnelle",
        "Supply Chain Management & Achats Stratégiques",
        "Marketing Digital B2B et B2C",
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
          <Link href="/formations" className="hover:text-slate-900 transition-colors">
            Formations
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">IMC Executive</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Formation Professionnelle Continue
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          IMC Executive Education
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-16">
          Conçus pour répondre aux défis stratégiques des organisations en Algérie, nos programmes
          pour cadres dirigeants allient haute exigence théorique et applicabilité opérationnelle immédiate.
        </p>

        {/* 3 Formats Exécutifs */}
        <div className="space-y-8 mb-16">
          {tracks.map((track) => (
            <div key={track.title} className="border border-slate-200 p-8 bg-slate-50 hover:border-brand-600 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-2">
                {track.format}
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
                {track.title}
              </h2>
              <div className="text-sm font-semibold text-slate-600 mb-6">
                Public ciblé : {track.target}
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Points clés du programme :
                </h3>
                <ul className="space-y-2">
                  {track.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Contact Entreprise */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">
              Un projet de formation pour vos équipes ?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Notre direction des partenariats et de la formation continue conçoit des cursus adaptés aux impératifs de votre entreprise.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 hover:bg-brand-700 transition-colors flex-shrink-0"
          >
            Demander un devis entreprise
          </Link>
        </div>
      </section>
    </div>
  );
}
