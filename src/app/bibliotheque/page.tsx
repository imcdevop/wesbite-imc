import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Search, Laptop, Clock, CheckCircle2, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bibliothèque & Centre de Documentation | IMC Alger",
  description:
    "Ressources documentaires physiques et numériques, revues scientifiques internationales indexées et espaces de travail pour les étudiants et chercheurs de l'IMC Alger.",
};

export default function BibliothequePage() {
  const stats = [
    { num: "+15 000", label: "Ouvrages et manuels de référence" },
    { num: "+50 000", label: "Articles et revues scientifiques numériques" },
    { num: "04", label: "Portails internationaux abonnés (Cairn, JSTOR...)" },
    { num: "60", label: "Postes de travail et places d'étude connectées" },
  ];

  const collections = [
    {
      num: "01",
      tag: "FONDS PHYSIQUE",
      title: "Ouvrages Spécialisés & Mémoires de Recherche",
      count: "+15 000 volumes",
      desc: "Manuels de référence actualisés en management stratégique, finance d'entreprise, marketing digital, droit des affaires algérien, audit et informatique décisionnelle.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
    {
      num: "02",
      tag: "PORTAILS DIGITAUX",
      title: "Bases de Données & Revues Internationales",
      count: "Accès illimité campus & VPN",
      desc: "Abonnements institutionnels complets aux plateformes académiques mondiales : Cairn.info, ScienceDirect, Emerald Insight et revues de recherche en sciences de gestion.",
      shadow: "shadow-[6px_6px_0_#0f172a]",
    },
    {
      num: "03",
      tag: "ESPACE DE TRAVAIL",
      title: "Salles Modulaires & Postes Équipés",
      count: "Zones calmes & sous-commissions",
      desc: "Postes informatiques équipés de logiciels statistiques (SPSS, Power BI, Python), zones silencieuses individuelles et salles réservables pour les travaux de groupe.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
  ];

  const services = [
    {
      title: "Accompagnement Méthodologique aux Mémoires & PFE",
      desc: "Séances de tutorat documentaire animées par nos bibliothécaires pour la recherche bibliographique, les normes de citation APA et la validation des sources.",
    },
    {
      title: "Accès Distant 24/7 aux Ressources Électroniques",
      desc: "Chaque étudiant et enseignant dispose d'un compte institutionnel sécurisé pour consulter les bases de données documentaires depuis son domicile.",
    },
    {
      title: "Service de Prêt & Réservation en Ligne",
      desc: "Catalogue numérique accessible en ligne permettant d'interroger la disponibilité des ouvrages, de réserver et de prolonger les emprunts.",
    },
    {
      title: "Veille Réglementaire & Économique Nationale",
      desc: "Mise à disposition continue des textes juridiques, codes officiels algériens, rapports de la Banque d'Algérie et publications ministérielles.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Bibliothèque & Documentation
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Cœur névralgique de la recherche et de l'approfondissement académique, le centre documentaire de l'IMC met à disposition des étudiants, auditeurs et enseignants-chercheurs un fonds documentaire d'exception, physique et digital.
        </p>
      </section>

      {/* Chiffres Clés Néo-Brutalistes */}
      <section className="py-12 border-b-2 border-slate-900 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="border-2 border-slate-900 bg-white p-6 shadow-[5px_5px_0_#004b88]"
              >
                <span className="block font-head text-4xl sm:text-5xl font-bold text-brand-600 leading-none mb-2">
                  {s.num}
                </span>
                <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pôles Documentaires */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
            Les 3 Pôles du Centre Documentaire
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {collections.map((col, idx) => (
            <div
              key={idx}
              className={`border-2 border-slate-900 p-6 sm:p-8 bg-white ${col.shadow} flex flex-col justify-between hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-head text-3xl font-bold text-brand-600">
                    {col.num}
                  </span>
                  <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-800">
                    {col.tag}
                  </span>
                </div>
                <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-1 leading-snug">
                  {col.title}
                </h3>
                <div className="text-xs font-mono font-bold text-brand-600 uppercase tracking-wider mb-3">
                  {col.count}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {col.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services aux Étudiants & Chercheurs */}
        <div className="mb-8">
          <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 tracking-tight">
            Services & Assistance aux Usagers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-900 p-6 bg-slate-50 shadow-[4px_4px_0_#0f172a] flex items-start gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-head text-xl font-bold uppercase text-slate-900 mb-2 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloc Horaires & Modalités d'Accès */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-8 sm:p-12 shadow-[10px_10px_0_#004b88] mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              HORAIRES D'OUVERTURE DU CAMPUS
            </span>
            <h3 className="font-head text-3xl sm:text-4xl font-bold uppercase text-white leading-tight mb-3">
              Du Samedi au Jeudi : 08h30 &ndash; 18h00
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              L'accès aux espaces physiques de consultation et de sous-commission est réservé aux étudiants inscrits, aux auditeurs de l'IMC Executive et aux enseignants-chercheurs munis de leur carte institutionnelle.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider px-8 py-4 border-2 border-white shadow-[4px_4px_0_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>Poser une question au bibliothécaire</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Liens de navigation */}
        <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/recherche"
            className="section-link group text-sm"
          >
            <span>&larr; Consulter le pôle Recherche Scientifique</span>
          </Link>

          <Link
            href="/formations"
            className="section-link group text-sm"
          >
            <span>Explorer le catalogue des 44 formations &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
