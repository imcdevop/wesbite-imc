import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Award, Quote, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Le Mot du Directeur | IMC Alger",
  description:
    "Message de la direction générale de l'Institut de Management et de Communication d'Alger.",
};

export default function LeMotDuDirecteurPage() {
  return (
    <div className="w-full bg-white">
      {/* Fil d'Ariane */}
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/a-propos" className="hover:text-slate-900 transition-colors">
            L'Institut
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Le Mot du Directeur</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Gouvernance & Vision
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-8">
          Le Mot du Directeur Général
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Texte principal */}
          <div className="lg:col-span-8 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <div className="relative pl-8 border-l-2 border-brand-600 italic text-slate-800 text-lg sm:text-xl font-medium my-6">
              <Quote className="w-6 h-6 text-brand-600/40 absolute -left-3 -top-3" />
              « Notre ambition est de former des femmes et des hommes d'action, dotés d'une rigueur
              analytique exemplaire et capables de transformer les organisations avec éthique et agilité. »
            </div>

            <p>
              Bienvenue à l'Institut de Management et de Communication (IMC Alger). Depuis notre fondation,
              nous avons fait le choix inébranlable de l'excellence académique alliée à une proximité
              étroite avec le tissu économique national et international.
            </p>

            <p>
              Dans un monde marqué par la transformation numérique, la mondialisation des flux et la
              nécessité de modèles de gouvernance pérennes, l'Algérie a besoin de compétences managériales
              et techniques immédiatement opérationnelles. C'est la vocation première de notre institut.
            </p>

            <p>
              Nos formations professionnelles pour étudiants et cadres sont conçues selon les standards les
              plus stricts, en concertation continue avec des experts métiers et consultants de haut niveau. Chaque
              formation intègre des projets réels, des études de cas d'entreprises et des ateliers pratiques
              garantissant une montée en compétences immédiate.
            </p>

            <p>
              Choisir l'IMC, c'est intégrer un environnement d'apprentissage stimulant, un corps professoral
              de haut rang composé d'experts praticiens et de consultants réputés, et un réseau actif
              de cadres et d'étudiants engagés dans les plus grandes entreprises du pays.
            </p>

            <div className="pt-8 border-t border-slate-200 mt-8">
              <div className="font-display font-bold text-xl text-slate-900">
                Direction Générale de l'IMC Alger
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Centre de formation pour étudiants et cadres
              </p>
            </div>
          </div>

          {/* Sidebar institutionnelle */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-8 space-y-6">
            <div className="border-l-[3px] border-brand-600 pl-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Piliers de l'Institut
              </h2>
            </div>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Double ancrage académique et managérial de terrain.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Programmes conformes aux exigences du Ministère de tutelle.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Réseau actif de partenariats universitaires internationaux.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Accompagnement personnalisé vers le premier emploi ou l'entrepreneuriat.</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-slate-200">
              <Link
                href="/formations"
                className="w-full inline-flex items-center justify-center bg-brand-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 hover:bg-brand-700 transition-colors"
              >
                Explorer nos formations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
