import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Presentation, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pôle Recherche & Publications | IMC Alger",
  description:
    "Activités scientifiques, colloques, ateliers doctoraux et publications de recherche en sciences de gestion à l'IMC Alger.",
};

export default function RechercheIndexPage() {
  const poles = [
    {
      title: "Colloques Scientifiques",
      link: "/recherche/colloques",
      desc: "Manifestations scientifiques d'envergure réunissant chercheurs nationaux et internationaux autour des problématiques managériales contemporaines.",
    },
    {
      title: "Ateliers & Workshops",
      link: "/recherche/ateliers",
      desc: "Sessions de travail thématiques, méthodologie de recherche appliquée et rencontres directes entre praticiens du terrain et universitaires.",
    },
    {
      title: "Revue de Management",
      link: "/recherche/revue",
      desc: "Revue scientifique à comité de lecture publiant des articles de fond, études de cas sectorielles et contributions doctrinales.",
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
          <span className="text-slate-900 font-medium">Recherche</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Production Scientifique & Pratiques Managériales
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Pôle Recherche & Pratiques
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
          Le pôle recherche de l'IMC nourrit l'ensemble de nos programmes de formation par des travaux
          rigoureux et ancrés dans les réalités de l'économie algérienne et internationale.
        </p>

        {/* 3 Axes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {poles.map((item) => (
            <div key={item.title} className="border border-slate-200 p-8 bg-slate-50 flex flex-col justify-between hover:border-brand-600 transition-colors">
              <div>
                <div className="w-8 h-1 bg-brand-600 mb-4" />
                <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 gap-1 group"
              >
                <span>Consulter</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
