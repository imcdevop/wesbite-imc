import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users2, Calendar, Lightbulb, CheckCircle2, ArrowRight, BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Ateliers & Séminaires de Recherche | IMC Alger",
  description:
    "Sessions de formation méthodologique, séminaires d'analyse sectorielle et ateliers de recherche appliquée de l'Institut de Management et de Communication d'Alger.",
};

export default function AteliersPage() {
  const workshops = [
    {
      num: "01",
      tag: "DOCTORAT & MÉTHODE",
      title: "Ateliers Méthodologiques Doctoraux & PFE",
      target: "Chercheurs associés, doctorants & étudiants en fin de cursus",
      period: "Mensuel (Chaque 1er Samedi)",
      desc: "Formation avancée aux méthodes quantitatives et qualitatives : protocoles d'échantillonnage, modélisation économétrique et analyse textuelle pour les mémoires et thèses.",
      shadow: "shadow-[6px_6px_0_#004b88]",
      image: "/pictures/9.webp",
      imageAlt: "Analyse Méthodologique & Étude Documentaire en Atelier",
    },
    {
      num: "02",
      tag: "STRATÉGIE & DÉCIDEURS",
      title: "Séminaires d'Analyse Sectorielle & Prospective",
      target: "Dirigeants d'entreprises, directeurs de stratégie & enseignants",
      period: "Trimestriel (Vendredi après-midi)",
      desc: "Décryptage approfondi des tendances macro-économiques : transition énergétique, politique de change, digitalisation bancaire et opportunités d'exportation.",
      shadow: "shadow-[6px_6px_0_#0f172a]",
      image: "/pictures/24.webp",
      imageAlt: "Séminaire d'Analyse & Schéma Pédagogique sur Écran Interactif",
    },
    {
      num: "03",
      tag: "CAS D'ENTREPRISES",
      title: "Co-conception d'Études de Cas Managériales",
      target: "Cadres dirigeants d'entreprises partenaires & comités pédagogiques",
      period: "Biannuel (Sessions immersives)",
      desc: "Formalisation pédagogique de cas réels d'entreprises algériennes confrontées à des défis critiques (fusions, transformation SI, gestion de crise).",
      shadow: "shadow-[6px_6px_0_#004b88]",
      image: "/pictures/1111.webp",
      imageAlt: "Immersion sur Cas Réels d'Entreprises en Équipe Pluridisciplinaire",
    },
  ];

  const highlights = [
    {
      title: "Certification de Participation",
      desc: "Attestation officielle délivrée à l'issue de chaque atelier méthodologique, valorisable dans les dossiers académiques et professionnels.",
    },
    {
      title: "Intervenants Internationaux Invités",
      desc: "Séances animées en alternance par le corps professoral de l'IMC et des universitaires partenaires d'établissements européens et internationaux.",
    },
    {
      title: "Support Pédagogique & Données Brutes",
      desc: "Mise à disposition des participants des jeux de données réels, scripts d'analyse et fiches synthétiques pour approfondissement personnel.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Ateliers & Séminaires Scientifiques
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Pensés comme des laboratoires vivants d'échange intellectuel et de confrontation directe avec la pratique, les ateliers de l'IMC associent enseignants-chercheurs, auditeurs de haut niveau et experts métiers.
        </p>
      </section>

      {/* Contenu Principal */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
            Les 3 Formats d'Ateliers Permanents
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {workshops.map((w, idx) => (
            <div
              key={idx}
              className={`border-2 border-slate-900 p-6 sm:p-8 bg-white ${w.shadow} flex flex-col justify-between hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-head text-4xl font-bold text-brand-600">
                    {w.num}
                  </span>
                  <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-800">
                    {w.tag}
                  </span>
                </div>

                <div className="relative h-44 w-full border-2 border-slate-900 mb-4 overflow-hidden bg-slate-100">
                  <Image
                    src={w.image}
                    alt={w.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-2 leading-snug">
                  {w.title}
                </h3>
                
                <div className="space-y-1 mb-4 text-xs font-mono">
                  <div className="text-slate-500">
                    <span className="font-bold text-slate-900">Rythme :</span> {w.period}
                  </div>
                  <div className="text-brand-600 font-bold">
                    {w.target}
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {w.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Avantages & Modalités */}
        <div className="mb-8">
          <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 tracking-tight">
            Exigence & Encadrement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-900 p-6 bg-slate-50 shadow-[4px_4px_0_#0f172a]"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-600 mb-3" />
              <h3 className="font-head text-xl font-bold uppercase text-slate-900 mb-2 leading-snug">
                {h.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bannière Inscription aux Ateliers */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-8 sm:p-12 shadow-[10px_10px_0_#004b88] mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              INSCRIPTIONS SESSIONS 2026-2027
            </span>
            <h3 className="font-head text-3xl sm:text-4xl font-bold uppercase text-white leading-tight mb-3">
              Participez au Prochain Séminaire de Recherche
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Le nombre de places est limité à 20 auditeurs par session afin de garantir l'interactivité et un suivi personnalisé des travaux méthodologiques.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider px-8 py-4 border-2 border-white shadow-[4px_4px_0_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>Réserver une place en séminaire</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Liens de bas de page */}
        <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/recherche"
            className="section-link group text-sm"
          >
            <span>&larr; Retour au Pôle Recherche Scientifique</span>
          </Link>

          <Link
            href="/recherche/revue"
            className="section-link group text-sm"
          >
            <span>Consulter la Revue de Management &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
