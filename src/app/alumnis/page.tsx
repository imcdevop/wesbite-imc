import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase, Globe, Award, CheckCircle2, ArrowRight, TrendingUp, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Le Réseau des Alumnis | IMC Alger",
  description:
    "Réseau officiel des 3 500 diplômés de l'Institut de Management et de Communication d'Alger. Opportunités de carrière, mentorat et annuaire des lauréats.",
};

export default function AlumnisPage() {
  const stats = [
    { num: "+3 500", label: "Lauréats et diplômés en activité" },
    { num: "92%", label: "Taux d'insertion professionnelle à 6 mois" },
    { num: "18", label: "Pays de présence et mobilité internationale" },
    { num: "+250", label: "Entreprises partenaires de recrutement" },
  ];

  const pillars = [
    {
      num: "01",
      tag: "TRANSMISSION & RÉSEAU",
      title: "Mentorat & Parrainage Professionnel",
      desc: "Accompagnement individuel et bienveillant des nouveaux étudiants et jeunes diplômés par des directeurs confirmés pour accélérer leur intégration et leur progression.",
      shadow: "shadow-[6px_6px_0_#004b88]",
      image: "/pictures/144.webp",
      imageAlt: "Mentorat et accompagnement de proximité par un expert",
    },
    {
      num: "02",
      tag: "CARRIÈRE & OPPORTUNITÉS",
      title: "Bourse Exclusive d'Emploi & Stages",
      desc: "Diffusion réservée aux membres du réseau de postes de management, missions de conseil stratégique et recrutements prioritaires dans les grands groupes partenaires.",
      shadow: "shadow-[6px_6px_0_#0f172a]",
      image: "/pictures/4.webp",
      imageAlt: "Collaboration et synergies professionnelles entre cadres",
    },
    {
      num: "03",
      tag: "RÉSEAUTAGE ÉLITE",
      title: "Masterclasses & Cercles de Dirigeants",
      desc: "Organisation de dîners-débats semestriels, tables rondes sectorielles et rencontres alumni-entreprises pour stimuler les synergies d'affaires.",
      shadow: "shadow-[6px_6px_0_#004b88]",
      image: "/pictures/6.webp",
      imageAlt: "Networking et esprit de promotion en formation continue",
    },
  ];

  const secteurs = [
    { name: "Banque, Finance & Assurance", pct: "28%" },
    { name: "Énergie, Mines & Industrie", pct: "24%" },
    { name: "Télécoms, Numérique & IT", pct: "20%" },
    { name: "Audit, Conseil & Juridique", pct: "16%" },
    { name: "Commerce, FMCG & Distribution", pct: "12%" },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Le Réseau des Alumnis IMC
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Force vive de l'institut, le réseau des diplômés rassemble plus de 3 500 cadres dirigeants, managers et spécialistes en poste dans les plus grandes entreprises publiques, multinationales et institutions financières en Algérie et à l'étranger.
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

      {/* Piliers du Réseau Alumni */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
            Les 3 Missions Cardinales de la Communauté
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pil, idx) => (
            <div
              key={idx}
              className={`border-2 border-slate-900 p-6 sm:p-8 bg-white ${pil.shadow} flex flex-col justify-between hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-head text-4xl font-bold text-brand-600">
                    {pil.num}
                  </span>
                  <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-800">
                    {pil.tag}
                  </span>
                </div>

                <div className="relative h-44 w-full border-2 border-slate-900 mb-4 overflow-hidden bg-slate-100">
                  <Image
                    src={pil.image}
                    alt={pil.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-3 leading-snug">
                  {pil.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {pil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Secteurs d'Insertion */}
        <div className="mb-8">
          <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 tracking-tight">
            Répartition Sectorielle des Lauréats
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {secteurs.map((sec, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-900 p-5 bg-slate-50 shadow-[4px_4px_0_#0f172a] flex flex-col justify-between"
            >
              <span className="font-head text-3xl font-bold text-slate-900 mb-2">
                {sec.pct}
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                {sec.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bannière d'Adhésion / Annuaire Alumni */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-8 sm:p-12 shadow-[10px_10px_0_#004b88] mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              ANNUAIRE & MISE EN RELATION
            </span>
            <h3 className="font-head text-3xl sm:text-4xl font-bold uppercase text-white leading-tight mb-3">
              Vous êtes diplômé de l'IMC Alger ?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Mettez à jour vos coordonnées professionnelles dans l'annuaire officiel, rejoignez le groupe privé des alumni et recevez en priorité nos invitations aux masterclasses et comités de recrutement.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider px-8 py-4 border-2 border-white shadow-[4px_4px_0_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>Rejoindre l'annuaire des diplômés</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Liens de navigation */}
        <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/a-propos"
            className="section-link group text-sm"
          >
            <span>&larr; Retour à la présentation de l'institut</span>
          </Link>

          <Link
            href="/incubateur"
            className="section-link group text-sm"
          >
            <span>Découvrir l'Incubateur IMC-Start &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
