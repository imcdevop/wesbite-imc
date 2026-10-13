import type { Metadata } from "next";
import Link from "next/link";
import { Globe, GraduationCap, Building2, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Partenaires Internationaux | IMC Alger",
  description:
    "Accords universitaires, alliances académiques et coopérations de recherche internationales de l'Institut de Management et de Communication d'Alger.",
};

export default function PartenairesPage() {
  const partenariats = [
    {
      tag: "UNIVERSITÉS & GRANDES ÉCOLES",
      nom: "Établissements Supérieurs Européens & Internationaux",
      desc: "Conventions de mobilité académique, partage de corps professoral visiteur et équivalences de modules pour les étudiants et auditeurs de l'IMC.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
    {
      tag: "RECHERCHE & DOCTORATS",
      nom: "Centres de Recherche en Management & Économie",
      desc: "Co-organisation de colloques scientifiques internationaux, publications conjointes dans des revues indexées et séminaires méthodologiques doctoraux.",
      shadow: "shadow-[6px_6px_0_#0f172a]",
    },
    {
      tag: "MULTINATIONALES & CORPORATE",
      nom: "Groupes Industriels & Cabinets Mondiaux",
      desc: "Chaires d'entreprises, études de cas réels et opportunités d'insertion professionnelle directe pour les lauréats certifiés de l'institut.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Partenaires Internationaux
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          L'IMC collabore étroitement avec des universités et des institutions de premier rang mondial afin de garantir le transfert de savoirs d'avant-garde, la recherche appliquée et l'ouverture internationale de nos apprenants.
        </p>
      </section>

      {/* Contenu Principal */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Grille des Partenariats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partenariats.map((p, idx) => (
            <div
              key={idx}
              className={`border-2 border-slate-900 p-6 sm:p-8 bg-white ${p.shadow} flex flex-col justify-between hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`}
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-900 mb-4">
                  {p.tag}
                </span>
                <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-3 leading-snug">
                  {p.nom}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière Double Diplomation & Mobilité */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-6 sm:p-10 shadow-[8px_8px_0_#004b88] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          <div>
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              Mobilité & Cursus Partagés
            </span>
            <h3 className="font-head text-2xl sm:text-4xl font-bold uppercase text-white leading-tight mb-2">
              Une Passerelle Internationale pour les Cadres et Étudiants
            </h3>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              Nos accords bilatéraux permettent à nos lauréats de valider des certifications conjointes et de participer à des séminaires d'immersion internationale dans les capitales économiques partenaires.
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs sm:text-sm tracking-wider px-6 py-4 border-2 border-white shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <span>Se renseigner sur les échanges</span>
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
            href="/formations"
            className="section-link group text-sm"
          >
            <span>Découvrir les 44 formations &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
