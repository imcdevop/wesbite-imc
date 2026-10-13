import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, TrendingUp, Award, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique Qualité & Agrément | IMC Alger",
  description:
    "Engagement qualité, démarche d'amélioration continue, agrément MESRS et référentiels d'excellence de l'Institut de Management et de Communication d'Alger.",
};

export default function PolitiqueQualitePage() {
  const qualityPillars = [
    {
      num: "01",
      tag: "CONFORMITÉ MESRS",
      title: "Conformité Réglementaire & Pédagogique",
      desc: "Respect strict des référentiels pédagogiques et des exigences d'évaluation du Ministère de l'Enseignement Supérieur et de la Recherche Scientifique.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
    {
      num: "02",
      tag: "AUDIT PÉRIODIQUE",
      title: "Évaluation Continue des Formations",
      desc: "Dispositif systématique d'audit anonyme des modules par les apprenants et comités de suivi semestriels présidés par les responsables de filières.",
      shadow: "shadow-[6px_6px_0_#0f172a]",
    },
    {
      num: "03",
      tag: "ADÉQUATION MARCHÉ",
      title: "Adéquation Permanente Formation-Emploi",
      desc: "Consultation régulière du Conseil d'Orientation et des employeurs partenaires pour actualiser les maquettes selon les besoins réels du marché économique.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
    {
      num: "04",
      tag: "CORPS ENSEIGNANT",
      title: "Perfectionnement du Corps Professoral",
      desc: "Recrutement sélectif des intervenants (praticiens seniors et docteurs d'État), formations pédagogiques régulières et partage de cas d'études réels.",
      shadow: "shadow-[6px_6px_0_#0f172a]",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Politique Qualité
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          À l'IMC Alger, la qualité n'est pas un slogan : c'est un engagement contractuel envers nos étudiants, auditeurs et partenaires d'entreprise pour garantir une valeur académique et professionnelle irréprochable.
        </p>
      </section>

      {/* Contenu Principal */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Les 4 Piliers Qualité */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {qualityPillars.map((item) => (
            <div
              key={item.num}
              className={`border-2 border-slate-900 p-6 sm:p-8 bg-white ${item.shadow} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-900">
                    {item.tag}
                  </span>
                  <span className="font-head text-3xl font-bold text-brand-600">
                    {item.num}
                  </span>
                </div>
                <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cadre d'Engagement MESRS */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-6 sm:p-10 shadow-[8px_8px_0_#004b88] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          <div>
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              Normes & Agrément Officiel
            </span>
            <h3 className="font-head text-2xl sm:text-4xl font-bold uppercase text-white leading-tight mb-2">
              Un Système Évalué selon les Exigences de l'Enseignement Supérieur
            </h3>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              Chaque promotion bénéficie d'un suivi académique personnalisé, d'attestations et de certificats sécurisés, vérifiables auprès de notre secrétariat général.
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/formations"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs sm:text-sm tracking-wider px-6 py-4 border-2 border-white shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <span>Consulter les certifications</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Liens de bas de page */}
        <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/a-propos"
            className="section-link group text-sm"
          >
            <span>&larr; Retour à la présentation de l'institut</span>
          </Link>

          <Link
            href="/le-mot-du-directeur"
            className="section-link group text-sm"
          >
            <span>Lire le Mot du Directeur Général &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
