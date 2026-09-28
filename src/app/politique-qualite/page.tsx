import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, CheckCircle2, TrendingUp, Award, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique Qualité | IMC Alger",
  description:
    "Engagement qualité, démarche d'amélioration continue et accréditation de l'IMC Alger.",
};

export default function PolitiqueQualitePage() {
  const qualityPillars = [
    {
      num: "01",
      title: "Conformité Réglementaire et Pédagogique",
      desc: "Respect strict des cahiers des charges et référentiels du Ministère de l'Enseignement Supérieur et de la Recherche Scientifique (MESRS).",
    },
    {
      num: "02",
      title: "Évaluation Continue des Enseignements",
      desc: "Dispositif systématique d'évaluation anonyme des cours par les apprenants et comités de suivi semestriels présidés par les responsables de filières.",
    },
    {
      num: "03",
      title: "Adéquation Permanente Formation-Emploi",
      desc: "Consultation régulière du Conseil d'Orientation et des employeurs partenaires pour actualiser les maquettes pédagogiques selon les évolutions du marché.",
    },
    {
      num: "04",
      title: "Perfectionnement du Corps Professoral",
      desc: "Formations pédagogiques régulières, accompagnement à la recherche appliquée et mutualisation des meilleures pratiques d'enseignement.",
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
          <Link href="/a-propos" className="hover:text-slate-900 transition-colors">
            L'Institut
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Politique Qualité</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Système de Management de la Qualité
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Politique Qualité & Amélioration Continue
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
          À l'IMC Alger, la qualité n'est pas un simple processus administratif, c'est une culture
          d'établissement partagée par l'ensemble des équipes pédagogiques, administratives et dirigeantes.
        </p>

        {/* 4 Piliers Qualite */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {qualityPillars.map((pillar) => (
            <div key={pillar.num} className="border border-slate-200 p-8 bg-slate-50 relative">
              <span className="text-3xl font-display font-black text-brand-600/30 block mb-2">
                {pillar.num}
              </span>
              <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
                {pillar.title}
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Cadre de certification et audit */}
        <div className="border border-slate-200 p-8 bg-white">
          <div className="border-l-[3px] border-brand-600 pl-3 mb-4">
            <h3 className="font-display text-xl font-bold text-slate-900">
              Dispositif d'Audit et de Gouvernance Qualité
            </h3>
          </div>
          <p className="text-slate-700 leading-relaxed max-w-4xl text-sm sm:text-base mb-6">
            Une cellule interne dédiée à l'assurance qualité coordonne les audits pédagogiques, recueille
            les indicateurs de performance (taux de réussite, délais d'insertion professionnelle, satisfaction des
            entreprises d'accueil) et présente un rapport annuel au Conseil Scientifique.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200 text-sm">
            <div>
              <span className="font-bold text-slate-900 block mb-1">100% Homologué</span>
              <span className="text-slate-600">Diplômes agréés par le Ministère (MESRS).</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">Audit Semestriel</span>
              <span className="text-slate-600">Évaluation systématique des maquettes de cours.</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">Écoute Apprenants</span>
              <span className="text-slate-600">Comités paritaires délégués-enseignants.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
