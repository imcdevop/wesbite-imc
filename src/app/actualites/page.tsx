import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Actualités & Événements | IMC Alger",
  description:
    "Toute l'actualité de l'Institut de Management et de Communication : rentrées universitaires, conférences, partenariats et vie du campus.",
};

export default function ActualitesPage() {
  const featuredArticle = {
    date: "24 Septembre 2026",
    category: "Rentrée Académique",
    badge: "À LA UNE",
    title: "Rentrée Session 2026-2027 : Accueil des Promotions d'Étudiants et Cadres Dirigeants",
    excerpt:
      "L'IMC Alger a donné le coup d'envoi officiel des nouvelles sessions de formations professionnelles certifiantes. Plus de 350 auditeurs et cadres ont rejoint les bancs de l'institut pour entamer leurs cursus spécialisés en Management, Tech & IA, Finance et Droit des Affaires.",
  };

  const articles = [
    {
      date: "12 Septembre 2026",
      category: "Partenariat Industriel",
      title: "Signature d'une Convention de Partenariat Stratégique avec un Groupe Industriel Majeur",
      excerpt:
        "Ce nouvel accord permettra l'accueil d'étudiants en stage de fin de cycle, le co-développement de projets d'études et le recrutement prioritaire des diplômés de l'IMC.",
    },
    {
      date: "05 Juillet 2026",
      category: "Cérémonie Officielle",
      title: "Cérémonie de Remise des Certificats : Promotions 2026 à l'Honneur",
      excerpt:
        "Retour en images sur la célébration solennelle des diplômés et certifiés des 44 programmes de formation, réunis aux côtés de leurs familles, parrains de promotion et partenaires.",
    },
    {
      date: "18 Juin 2026",
      category: "Recherche & Publication",
      title: "Publication du Nouveau Numéro de la Revue de Management de l'IMC",
      excerpt:
        "Dossier spécial consacré à la transformation numérique des entreprises et à la résilience des chaînes logistiques en Algérie, rédigé par notre comité scientifique.",
    },
    {
      date: "28 Mai 2026",
      category: "Colloque International",
      title: "Lancement de l'Appel à Communications pour le Colloque Gouvernance 2026",
      excerpt:
        "Chercheurs, universitaires et praticiens sont invités à soumettre leurs propositions d'articles pour la session plénière des 14 & 15 Novembre 2026 à Alger.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Actualités & Médias IMC
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Suivez les temps forts, événements scientifiques, accords de coopération institutionnelle et réussites de la communauté de l'Institut de Management et de Communication d'Alger.
        </p>
      </section>

      {/* Contenu Principal */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Article Phare À la Une (Grand format Néo-Brutaliste) */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-6 sm:p-10 lg:p-12 shadow-[10px_10px_0_#004b88] mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white border border-brand-400">
              {featuredArticle.badge}
            </span>
            <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/20">
              {featuredArticle.category}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 ml-auto">
              <Calendar className="w-3.5 h-3.5" />
              {featuredArticle.date}
            </span>
          </div>

          <h2 className="font-head text-2xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight mb-4 text-white">
            {featuredArticle.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl mb-8">
            {featuredArticle.excerpt}
          </p>

          <div>
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs sm:text-sm tracking-wider px-6 py-3.5 border-2 border-white shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <span>Découvrir les programmes de la rentrée</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Grille d'articles secondaires */}
        <div className="mb-8">
          <h3 className="font-head text-3xl font-bold uppercase text-slate-900 tracking-tight mb-8">
            Tous les communiqués récents
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.map((item) => (
            <article
              key={item.title}
              className="border-2 border-slate-900 p-6 sm:p-8 bg-white flex flex-col justify-between shadow-[6px_6px_0_#0f172a] hover:shadow-[8px_8px_0_#004b88] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs font-mono font-bold uppercase tracking-wider mb-4 pb-3 border-b-2 border-slate-100">
                  <span className="px-2 py-0.5 bg-slate-100 border border-slate-900 text-slate-900 text-[11px]">
                    {item.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-brand-600" />
                    {item.date}
                  </span>
                </div>
                <h4 className="font-head text-xl sm:text-2xl font-bold uppercase text-slate-900 group-hover:text-brand-600 transition-colors mb-3 leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {item.excerpt}
                </p>
              </div>
              <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between">
                <span className="text-xs font-head font-bold uppercase tracking-wider text-brand-600 group-hover:text-brand-700 inline-flex items-center gap-1.5">
                  <span>Consulter le communiqué</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-bold">
                  COMMUNIQUÉ OFFICIEL
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Espace Presse & Relations Institutionnelles */}
        <div className="border-2 border-slate-900 bg-[#f0f7fc] p-6 sm:p-10 shadow-[8px_8px_0_#004b88] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <span className="inline-block px-2.5 py-0.5 text-xs font-mono font-bold uppercase tracking-wider bg-brand-600 text-white mb-2">
              Contact Médias
            </span>
            <h4 className="font-head text-2xl sm:text-3xl font-bold uppercase text-slate-900 leading-tight mb-2">
              Espace Presse & Relations Institutionnelles
            </h4>
            <p className="text-sm text-slate-600 max-w-2xl font-medium">
              Vous êtes journaliste, communicant ou partenaire et souhaitez obtenir notre dossier de presse ou organiser une interview ?
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-900 hover:bg-brand-600 text-white font-head font-bold uppercase text-xs sm:text-sm tracking-wider px-6 py-4 border-2 border-slate-900 shadow-[4px_4px_0_#004b88] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <span>Contacter le service communication</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
