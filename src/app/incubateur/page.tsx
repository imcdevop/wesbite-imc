import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Rocket, Lightbulb, Users2, CheckCircle2, ArrowRight, ShieldCheck, Laptop, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "L'Incubateur IMC-Start | Services & Innovation | IMC Alger",
  description:
    "L'incubateur entrepreneurial IMC-Start accompagne les étudiants et diplômés dans l'émergence de startups innovantes et d'entreprises compétitives.",
};

export default function IncubateurPage() {
  const stats = [
    { num: "+35", label: "Projets entrepreneuriaux accompagnés" },
    { num: "85%", label: "Taux de pérennité à 3 ans" },
    { num: "12", label: "Chefs d'entreprises mentors permanents" },
    { num: "100%", label: "Accès gratuit pour les auditeurs IMC" },
  ];

  const steps = [
    {
      step: "01",
      tag: "PHASE CADRAGE",
      title: "Idéation, Étude & Diagnostic",
      desc: "Ateliers de créativité intensive, validation de l'opportunité sur le marché algérien, benchmark concurrentiel et structuration de la proposition de valeur.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
    {
      step: "02",
      tag: "PHASE TECHNIQUE",
      title: "Prototypage & Modèle Économique",
      desc: "Conception du business model, formalisation des prévisionnels financiers, tests utilisateurs (MVP) et accompagnement juridique pour l'obtention du label Startup.",
      shadow: "shadow-[6px_6px_0_#0f172a]",
    },
    {
      step: "03",
      tag: "PHASE ACCÉLÉRATION",
      title: "Go-to-Market & Levée de Fonds",
      desc: "Accompagnement personnalisé par des directeurs généraux chevronnés, entraînement intensif au pitch et mise en relation directe avec des investisseurs et banques.",
      shadow: "shadow-[6px_6px_0_#004b88]",
    },
  ];

  const services = [
    {
      title: "Espace Co-working & Laboratoire Digital",
      desc: "Postes de travail dédiés au sein du campus, connectivité ultra haut débit, salles de réunion équipées et outils logiciels professionnels.",
    },
    {
      title: "Mentoring par les Dirigeants de l'IMC",
      desc: "Parrainage individuel par des membres du Conseil d'Orientation et des alumni entrepreneurs ayant réussi sur le marché national ou international.",
    },
    {
      title: "Support Juridique & Statuts Réglementaires",
      desc: "Assistance pour la rédaction des statuts de société (SARL, SPA, SAS), dépôt de marques auprès de l'INAPI et conformité avec les réglementations du Ministère des Startups.",
    },
    {
      title: "Préparation aux Concours & Financements",
      desc: "Coaching ciblé pour candidater aux bourses d'innovation, fonds d'investissement d'amorçage (ASF) et financements bancaires bonifiés.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Incubateur IMC-Start
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Plateforme d'excellence dédiée à l'esprit d'entreprise, IMC-Start offre un cadre structuré et stimulant pour transformer les idées novatrices de nos étudiants et diplômés en entreprises viables, pérennes et compétitives.
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

      {/* Le Parcours d'Incubation en 3 Étapes */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
            Le Parcours d'Incubation en 3 Phases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className={`border-2 border-slate-900 p-6 sm:p-8 bg-white ${st.shadow} flex flex-col justify-between hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-head text-4xl font-bold text-brand-600">
                    {st.step}
                  </span>
                  <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-800">
                    {st.tag}
                  </span>
                </div>
                <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-3 leading-snug">
                  {st.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services & Ressources Mises à Disposition */}
        <div className="mb-8">
          <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 tracking-tight">
            Les Avantages du Hub IMC-Start
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

        {/* Immersion & Espaces Réels de l'Incubateur */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
              Infrastructures & Vie du Hub
            </span>
            <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 tracking-tight">
              Les Espaces Dédiés à Nos Entrepreneurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-slate-900 bg-white overflow-hidden shadow-[5px_5px_0_#0f172a] group">
              <div className="relative h-56 w-full overflow-hidden border-b-2 border-slate-900 bg-slate-100">
                <Image
                  src="/pictures/8568.webp"
                  alt="Espace Co-working et Hub Startups IMC"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-brand-50 text-brand-700 border border-brand-200 mb-2">
                  CO-WORKING
                </span>
                <h3 className="font-head text-lg font-bold uppercase text-slate-900 mb-1 leading-snug">
                  Espace Co-working & Brainstorming
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Postes de travail ouverts, ambiance collaborative et mobilier ergonomique pour stimuler l'émulation d'équipe.
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-900 bg-white overflow-hidden shadow-[5px_5px_0_#004b88] group">
              <div className="relative h-56 w-full overflow-hidden border-b-2 border-slate-900 bg-slate-100">
                <Image
                  src="/pictures/77.webp"
                  alt="Laboratoire Informatique et Challenge Innov'HEC"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-900 mb-2">
                  CHALLENGES & HACKATHONS
                </span>
                <h3 className="font-head text-lg font-bold uppercase text-slate-900 mb-1 leading-snug">
                  Lab Informatique & Hackathons
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Équipements informatiques de pointe et sessions intensives sponsorisées par les grands partenaires industriels.
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-900 bg-white overflow-hidden shadow-[5px_5px_0_#0f172a] group">
              <div className="relative h-56 w-full overflow-hidden border-b-2 border-slate-900 bg-slate-100">
                <Image
                  src="/pictures/14.webp"
                  alt="Espace Vie Étudiante et Échanges Informels"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-900 mb-2">
                  ESPACE DÉTENTE
                </span>
                <h3 className="font-head text-lg font-bold uppercase text-slate-900 mb-1 leading-snug">
                  Salon de Rencontre & Détente
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Espace informel pour favoriser le networking entre auditeurs de différentes promotions et intervenants.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bannière Candidature Entrepreneuriat */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-8 sm:p-12 shadow-[10px_10px_0_#004b88] mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              APPEL À PROJETS PERMANENT
            </span>
            <h3 className="font-head text-3xl sm:text-4xl font-bold uppercase text-white leading-tight mb-3">
              Vous avez une idée d'entreprise ou de startup innovante ?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Que vous soyez étudiant actuel, auditeur en formation continue ou jeune diplômé de l'IMC, soumettez votre dossier au comité de sélection de l'incubateur pour bénéficier d'un diagnostic d'éligibilité gratuit.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider px-8 py-4 border-2 border-white shadow-[4px_4px_0_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>Déposer un dossier de projet</span>
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
            href="/alumnis"
            className="section-link group text-sm"
          >
            <span>Découvrir le Réseau des Diplômés IMC &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
