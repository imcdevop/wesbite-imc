import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Presentation, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pôle Recherche & Publications | IMC Alger",
  description:
    "Activités scientifiques, colloques, ateliers doctoraux et publications de recherche en sciences de gestion à l'IMC Alger.",
};

import Image from "next/image";

export default function RechercheIndexPage() {
  const poles = [
    {
      title: "Colloques Scientifiques",
      link: "/recherche/colloques",
      tag: "MANIFESTATIONS ACADÉMIQUES",
      image: "/pictures/IMG_7066.webp",
      desc: "Manifestations scientifiques d'envergure réunissant chercheurs nationaux et internationaux autour des problématiques managériales contemporaines et de l'économie numérique.",
    },
    {
      title: "Ateliers & Workshops",
      link: "/recherche/ateliers",
      tag: "PRATIQUE DE RECHERCHE",
      image: "/pictures/IMG_6984.webp",
      desc: "Sessions de travail thématiques, méthodologie de recherche appliquée et rencontres directes entre praticiens du terrain, doctorants et professeurs de renommée.",
    },
    {
      title: "Revue de Management",
      link: "/recherche/revue",
      tag: "PUBLICATIONS INDEXÉES",
      image: "/pictures/IMG_7242.webp",
      desc: "Revue scientifique à comité de lecture publiant des articles de fond, études de cas sectorielles et contributions doctrinales sur le management en Algérie.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Pôle Recherche & Innovation
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Le pôle recherche de l'Institut de Management et de Communication nourrit l'ensemble de nos programmes par des travaux rigoureux, ancrés dans les réalités de l'économie algérienne et connectés aux standards académiques internationaux.
        </p>
      </section>

      {/* Contenu Principal */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Les 3 Axes de Recherche */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {poles.map((item, idx) => (
            <div
              key={item.title}
              className="border-2 border-slate-900 bg-white flex flex-col justify-between shadow-[6px_6px_0_#0f172a] hover:shadow-[8px_8px_0_#004b88] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all group overflow-hidden"
            >
              <div className="relative h-48 w-full border-b-2 border-slate-900 bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-900 border border-slate-900 mb-4">
                    {item.tag}
                  </span>
                  <h2 className="font-head text-2xl font-bold uppercase text-slate-900 group-hover:text-brand-600 transition-colors mb-3 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-slate-100">
                  <Link
                    href={item.link}
                    className="section-link group text-xs sm:text-sm"
                  >
                    <span>Accéder à l'espace</span>
                    <span className="arrow ml-1 inline-block">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière Focus Événementiel */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-6 sm:p-10 shadow-[8px_8px_0_#004b88] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              Appel à Communication Ouvert
            </span>
            <h3 className="font-head text-2xl sm:text-4xl font-bold uppercase text-white leading-tight mb-2">
              Colloque International 2026 : Gouvernance & Transformation Numérique
            </h3>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              Organisé sous le haut patronage académique avec plus de 40 professeurs et experts invités. Les actes seront publiés dans notre revue indexée.
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/recherche/colloques"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs sm:text-sm tracking-wider px-6 py-4 border-2 border-white shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <span>Consulter le programme</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
