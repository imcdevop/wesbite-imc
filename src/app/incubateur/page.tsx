import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Rocket, Lightbulb, Users2, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "L'Incubateur IMC-Start | Services aux Étudiants | IMC Alger",
  description:
    "L'incubateur entrepreneurial IMC-Start accompagne les étudiants et diplômés dans l'émergence de startups et de projets innovants.",
};

export default function IncubateurPage() {
  const steps = [
    {
      step: "Phase 1",
      title: "Idéation & Diagnostic",
      desc: "Ateliers de créativité, validation de l'opportunité de marché et structuration de la proposition de valeur.",
    },
    {
      step: "Phase 2",
      title: "Prototypage & Business Model",
      desc: "Conception du modèle économique, tests utilisateurs, études de faisabilité financière et légale.",
    },
    {
      step: "Phase 3",
      title: "Accélération & Mentoring",
      desc: "Accompagnement par des dirigeants d'entreprises, préparation au pitch et mise en relation avec des investisseurs.",
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
          <span className="text-slate-500">Services aux Étudiants</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">L'Incubateur IMC-Start</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Entrepreneuriat & Innovation
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          L'Incubateur IMC-Start
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
          Plateforme dédiée à l'esprit d'entreprise, IMC-Start offre un cadre structuré et stimulant pour
          transformer les idées novatrices de nos étudiants et alumni en projets viables et compétitifs.
        </p>

        {/* 3 Étapes du parcours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((item) => (
            <div key={item.step} className="border border-slate-200 p-8 bg-slate-50 relative">
              <span className="text-xs font-bold text-brand-600 tracking-wider uppercase block mb-2">
                {item.step}
              </span>
              <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Moyens et accompagnement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white p-8 sm:p-12">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Des ressources complètes pour concrétiser votre startup
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Espace de coworking équipé, accès aux bases de données de recherche, conseils juridiques
              spécialisés et mise en relation privilégiée avec les fonds d'amorçage et partenaires industriels.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 hover:bg-brand-700 transition-colors"
            >
              Soumettre un projet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
