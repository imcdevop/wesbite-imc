import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Target, ShieldCheck, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision, Missions et Valeurs | IMC Alger",
  description:
    "Découvrez les orientations stratégiques, la mission académique et les valeurs cardinales de l'Institut de Management et de Communication d'Alger.",
};

export default function VisionMissionsValeursPage() {
  const values = [
    {
      num: "01",
      tag: "EXCELLENCE ACADÉMIQUE",
      title: "Rigueur Scientifique",
      desc: "L'exigence intellectuelle et le respect rigoureux des normes universitaires au service d'un savoir contemporain, pragmatique et directement applicable en entreprise.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
    {
      num: "02",
      tag: "DÉONTOLOGIE & IMPACT",
      title: "Éthique & Responsabilité",
      desc: "Promouvoir une gouvernance intègre, transparente et durable, soucieuse de l'impact économique, humain et sociétal des décisions managériales.",
      shadow: "shadow-[6px_6px_0_#0f172a]",
    },
    {
      num: "03",
      tag: "MUTATIONS TECHNOLOGIQUES",
      title: "Agilité & Innovation",
      desc: "Anticiper les ruptures digitales, l'intelligence artificielle et les nouveaux modèles économiques pour moderniser continuellement nos cursus et approches pédagogiques.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
    {
      num: "04",
      tag: "RAYONNEMENT MONDIAL",
      title: "Ouverture & Synergie",
      desc: "Favoriser la curiosité d'esprit, le dialogue interdisciplinaire et les partenariats stratégiques avec des institutions académiques et des leaders industriels internationaux.",
      shadow: "shadow-[6px_6px_0_#0f172a]",
    },
  ];

  const missionPillars = [
    {
      titre: "Élever les compétences d'encadrement en Algérie",
      desc: "Former des gestionnaires, stratèges et communicants de haut niveau, dotés d'outils analytiques pointus et capables de piloter la performance.",
    },
    {
      titre: "Garantir une employabilité immédiate et durable",
      desc: "Concevoir nos 44 formations avec des directeurs en exercice afin que 100% des compétences acquises correspondent aux exigences du marché de l'emploi.",
    },
    {
      titre: "Stimuler la recherche appliquée et l'entrepreneuriat",
      desc: "Associer recherche universitaire, colloques scientifiques annuels et incubation de startups à travers le pôle d'innovation IMC-Start.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Vision, Missions & Valeurs
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          L'Institut de Management et de Communication fonde son action pédagogique et scientifique sur des principes directeurs clairs : conjuguer l'exigence des meilleurs standards universitaires et l'efficacité opérationnelle attendue par les leaders économiques.
        </p>
      </section>

      {/* Vision & Mission Bento */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Notre Vision Stratégique */}
          <div className="lg:col-span-5 border-2 border-slate-900 bg-slate-900 text-white p-8 sm:p-10 shadow-[8px_8px_0_#004b88] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white">
                  Horizon Stratégique
                </span>
                <Compass className="w-6 h-6 text-brand-400" />
              </div>
              <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-white leading-tight mb-4">
                Notre Vision
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-medium">
                Être la grande école de référence en Algérie et dans le bassin méditerranéen pour l'enseignement supérieur du management, de la communication stratégique et de la gouvernance numérique.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Une institution respectée pour la rigueur de ses diplômés, la portée de ses travaux scientifiques et sa contribution active à la modernisation de l'économie nationale.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>AGRÉÉ PAR LE MESRS</span>
              <span className="text-brand-400 font-bold">ALGER, ALGERIE</span>
            </div>
          </div>

          {/* Notre Mission Fondamentale */}
          <div className="lg:col-span-7 border-2 border-slate-900 bg-white p-8 sm:p-10 shadow-[8px_8px_0_#0f172a] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-900">
                  Raison d'Être
                </span>
                <Target className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 leading-tight mb-4">
                Notre Mission Pédagogique & Économique
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6 font-medium">
                Accompagner le développement du capital humain à travers des cursus certifiants d'avant-garde, alliant rigueur méthodologique, culture du résultat et adaptabilité aux mutations mondiales.
              </p>

              <div className="space-y-4">
                {missionPillars.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-head text-lg font-bold uppercase text-slate-900">
                        {m.titre}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>44 FORMATIONS HOMOLOGUÉES</span>
              <span className="font-bold text-slate-900">7 DOMAINES D'EXPERTISE</span>
            </div>
          </div>

        </div>

        {/* Les 4 Valeurs Cardinales */}
        <div className="mb-8">
          <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 tracking-tight">
            Les 4 Valeurs Cardinales de l'IMC
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((v, idx) => (
            <div
              key={idx}
              className={`border-2 border-slate-900 p-6 bg-white ${v.shadow} flex flex-col justify-between hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-head text-3xl font-bold text-brand-600">
                    {v.num}
                  </span>
                  <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-800">
                    {v.tag}
                  </span>
                </div>
                <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-2 leading-snug">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière Démarche Qualité & Agrément */}
        <div className="border-2 border-slate-900 bg-brand-50 p-8 sm:p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0_#004b88]">
          <div className="max-w-2xl">
            <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-600 text-white mb-2">
              GARANTIE D'ÉTAT
            </span>
            <h3 className="font-head text-2xl sm:text-3xl font-bold uppercase text-slate-900 leading-snug mb-2">
              Un Cadre Institutionnel Strictement Contrôlé
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              Chaque programme dispensé à l'IMC s'inscrit dans le cadre légal de l'agrément ministériel MESRS et sous le contrôle continu de notre Conseil Scientifique et de notre Conseil d'Orientation.
            </p>
          </div>
          <Link
            href="/politique-qualite"
            className="shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-head font-bold uppercase text-xs tracking-wider px-6 py-3.5 border-2 border-slate-900 shadow-[3px_3px_0_#004b88] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>Découvrir la politique qualité</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Liens rapides vers la gouvernance */}
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
            <span>Lire le mot du Directeur Général &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
