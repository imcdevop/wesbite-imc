import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Target, Compass, ShieldCheck, Users, Sparkles, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision, Missions et Valeurs | IMC Alger",
  description:
    "Découvrez les orientations stratégiques, la mission pédagogique et les valeurs cardinales de l'IMC Alger.",
};

export default function VisionMissionsValeursPage() {
  const values = [
    {
      title: "Rigueur Académique",
      desc: "L'exigence intellectuelle et le respect des normes scientifiques les plus strictes au service d'un savoir vivant et applicable.",
    },
    {
      title: "Éthique & Responsabilité",
      desc: "Promouvoir une gouvernance intègre, durable et soucieuse de l'impact sociétal des décisions managériales.",
    },
    {
      title: "Agilité & Innovation",
      desc: "Anticiper les mutations technologiques et économiques pour adapter continuellement nos méthodologies de formation.",
    },
    {
      title: "Ouverture & Diversité",
      desc: "Favoriser la curiosité d'esprit, le dialogue interdisciplinaire et l'échange avec des institutions du monde entier.",
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
          <span className="text-slate-900 font-medium">Vision, missions et valeurs</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Identité Institutionnelle
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Vision, Missions et Valeurs
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-16">
          L'Institut de Management et de Communication fonde son action pédagogique et scientifique sur
          des principes directeurs clairs, orientés vers l'élévation des compétences managériales en Algérie.
        </p>

        {/* Grille Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Notre Vision */}
          <div className="border border-slate-200 p-8 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-6 h-6 text-brand-600" />
              <h2 className="font-display text-2xl font-bold text-slate-900">Notre Vision</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Être la référence en matière d'enseignement supérieur du management et de l'innovation
              décisionnelle en Algérie, reconnue pour son niveau d'exigence, l'employabilité immédiate de ses
              diplômés et son rayonnement académique au Maghreb et à l'international.
            </p>
          </div>

          {/* Notre Mission */}
          <div className="border border-slate-200 p-8 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-brand-600" />
              <h2 className="font-display text-2xl font-bold text-slate-900">Notre Mission</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Former des cadres dirigeants, des managers et des entrepreneurs aptes à concevoir, piloter et
              accompagner les transformations complexes des entreprises, par le biais d'un enseignement
              moderne conjuguant théorie de pointe, cas concrets et outils numériques avancés.
            </p>
          </div>
        </div>

        {/* Nos Valeurs Fondatrices */}
        <div className="border-t border-slate-200 pt-16">
          <div className="border-l-[3px] border-brand-600 pl-4 mb-6">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Nos Valeurs Cardinales
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.title} className="border border-slate-200 p-6 bg-white hover:border-brand-600 transition-colors">
                <div className="w-8 h-1 bg-brand-600 mb-4" />
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
