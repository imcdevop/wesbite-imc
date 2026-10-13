import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, GraduationCap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Le Conseil Scientifique | IMC Alger",
  description:
    "Membres, missions et garanties académiques du Conseil Scientifique de l'Institut de Management et de Communication d'Alger.",
};

export default function ConseilScientifiquePage() {
  const membres = [
    {
      nom: "Pr. Rachid Benali",
      titre: "Président du Conseil Scientifique",
      role: "GOUVERNANCE ACADÉMIQUE",
      affiliation: "Professeur émérite en Sciences de Gestion, Ancien Doyen de Faculté",
    },
    {
      nom: "Dr. Samira Khelifi",
      titre: "Membre Permanente",
      role: "INTELLIGENCE ARTIFICIELLE & DATA",
      affiliation: "Directrice de recherche en IA appliquée au Management et Systèmes d'Information",
    },
    {
      nom: "Pr. Jean-Marc Dumont",
      titre: "Membre Associé International",
      role: "STANDARDS INTERNATIONAUX",
      affiliation: "Doyen honoraire, Faculté d'Administration des Entreprises (France / Europe)",
    },
    {
      nom: "Dr. Karim Mansouri",
      titre: "Membre Permanent",
      role: "AUDIT & FINANCE D'ENTREPRISE",
      affiliation: "Expert-comptable diplômé de l'État, Consultant auprès d'institutions financières",
    },
  ];

  const missions = [
    {
      tag: "CONFORMITÉ MESRS",
      title: "Validation des Maquettes & Cursus",
      desc: "Veille à la conformité rigoureuse de chaque unité d'enseignement avec les cahiers des charges et agréments du Ministère de tutelle.",
    },
    {
      tag: "INNOVATION PÉDAGOGIQUE",
      title: "Actualisation Métiers Continue",
      desc: "Actualise annuellement les modules pour intégrer les compétences émergentes : Big Data, IA, conformité juridique et finance numérique.",
    },
    {
      tag: "QUALITÉ & ÉVALUATION",
      title: "Audit Continu des Formateurs",
      desc: "Sélectionne et valide les profils des intervenants, consultants et professeurs associés selon des critères académiques stricts.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Le Conseil Scientifique
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Garant de l'indépendance pédagogique et de la rigueur académique, le Conseil Scientifique de l'IMC définit les orientations pédagogiques et veille à la stricte conformité des 44 programmes avec les meilleurs standards universitaires.
        </p>
      </section>

      {/* Membres du Conseil */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-head text-3xl font-bold uppercase text-slate-900 tracking-tight">
            Membres Permanents & Associés
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {membres.map((m, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-900 p-6 sm:p-8 bg-white shadow-[6px_6px_0_#004b88] hover:shadow-[8px_8px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-50 text-brand-700 border border-brand-200">
                  {m.role}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Collège Scientifique
                </span>
              </div>

              <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-1">
                {m.nom}
              </h3>
              <div className="text-xs font-mono font-bold text-brand-600 uppercase tracking-wider mb-3">
                {m.titre}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {m.affiliation}
              </p>
            </div>
          ))}
        </div>

        {/* Missions Fondamentales */}
        <div className="mb-8">
          <h2 className="font-head text-3xl font-bold uppercase text-slate-900 tracking-tight">
            Le Rôle Régulateur du Conseil
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {missions.map((item, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-900 p-6 bg-slate-50 shadow-[4px_4px_0_#0f172a]"
            >
              <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-900 text-white mb-3">
                {item.tag}
              </span>
              <h4 className="font-head text-xl font-bold uppercase text-slate-900 mb-2 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation vers le Conseil d'Orientation & A Propos */}
        <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/a-propos"
            className="section-link group text-sm"
          >
            <span>&larr; Retour à la présentation de l'institut</span>
          </Link>

          <Link
            href="/le-conseil-dorientation"
            className="section-link group text-sm"
          >
            <span>Consulter le Conseil d'Orientation &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
