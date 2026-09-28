import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Actualités & Événements | IMC Alger",
  description:
    "Toute l'actualité de l'Institut de Management et de Communication : rentrées universitaires, conférences, partenariats et vie du campus.",
};

export default function ActualitesPage() {
  const articles = [
    {
      date: "24 Septembre 2026",
      category: "Formations",
      title: "Rentrée Session 2026-2027 : Accueil des Étudiants et Cadres en Formation",
      excerpt:
        "L'IMC Alger a donné le coup d'envoi officiel des nouvelles sessions de formations professionnelles dédiées aux promotions d'étudiants et de cadres, en présence des formateurs experts.",
    },
    {
      date: "12 Septembre 2026",
      category: "Partenariat",
      title: "Signature d'une Convention de Partenariat Stratégique avec un Groupe Industriel Majeur",
      excerpt:
        "Ce nouvel accord permettra l'accueil d'étudiants en stage de fin de cycle, le co-développement de projets d'études et le recrutement prioritaire des diplômés de l'IMC.",
    },
    {
      date: "05 Juillet 2026",
      category: "Cérémonie",
      title: "Cérémonie de Remise des Certificats : Promotions 2026 à l'Honneur",
      excerpt:
        "Retour en images sur la célébration solennelle des diplômés et certifiés des 44 programmes de formation, réunis aux côtés de leurs familles, parrains de promotion et partenaires.",
    },
    {
      date: "18 Juin 2026",
      category: "Recherche",
      title: "Publication du Nouveau Numéro de la Revue de Management de l'IMC",
      excerpt:
        "Dossier spécial consacré à la transformation numérique des entreprises et à la résilience des chaînes logistiques en Algérie.",
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
          <span className="text-slate-900 font-medium">Actualités</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Vie de l'Établissement & Médias
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Actualités de l'IMC Alger
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-16">
          Suivez les temps forts, événements scientifiques, conférences et réussites de la communauté IMC.
        </p>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.map((item) => (
            <article
              key={item.title}
              className="border border-slate-200 p-8 bg-slate-50 flex flex-col justify-between hover:border-brand-600 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="text-brand-600">{item.category}</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-600 gap-1 group cursor-pointer hover:text-brand-700">
                  <span>Lire l'article complet</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
