import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Search, Laptop, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Bibliothèque & Documentation | Services aux Étudiants | IMC Alger",
  description:
    "Ressources documentaires, revues scientifiques internationales et espaces de travail pour les étudiants et chercheurs de l'IMC Alger.",
};

export default function BibliothequePage() {
  const collections = [
    {
      title: "Fonds Ouvrages Spécialisés",
      count: "+15 000 volumes",
      desc: "Manuels de référence en gestion, finance d'entreprise, droit des affaires, marketing digital et informatique décisionnelle.",
    },
    {
      title: "Bases de Données & Revues Numériques",
      count: "Accès illimité",
      desc: "Abonnements aux portails scientifiques et revues internationales (Emerald, ScienceDirect, Cairn, JSTOR).",
    },
    {
      title: "Espaces d'Étude & Travail Collaboratif",
      count: "Salles modulaires",
      desc: "Postes informatiques équipés, zones calmes individuelles et salles de sous-commission réservables pour les travaux de groupe.",
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
          <span className="text-slate-900 font-medium">Bibliothèque & Documentation</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Ressources Documentaires & Pédagogiques
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Centre de Documentation & Bibliothèque
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
          Lieu central de recherche et d'approfondissement intellectuel, la bibliothèque de l'IMC Alger
          met à la disposition de ses étudiants et enseignants un ensemble complet de ressources physiques
          et numériques de premier plan.
        </p>

        {/* 3 Blocs Ressources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {collections.map((item) => (
            <div key={item.title} className="border border-slate-200 p-8 bg-slate-50">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-2">
                {item.count}
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

        {/* Horaires et services */}
        <div className="border border-slate-200 p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="border-l-[3px] border-brand-600 pl-3 mb-4">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Horaires d'Ouverture & Accès
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span><strong>Du Dimanche au Jeudi :</strong> 08h30 - 18h30</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span><strong>Samedi :</strong> 09h00 - 17h00 (Période d'examens et sessions intensives)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span><strong>Vendredi :</strong> Fermé</span>
              </li>
            </ul>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
            <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">
              Services aux Chercheurs & Mémoires
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Aide individualisée à la recherche bibliographique, sessions de formation à la méthodologie
              documentaire et vérification anti-plagiat systématique pour les projets de fin de cycle.
            </p>
            <Link
              href="/contact"
              className="text-xs font-bold text-brand-600 hover:text-brand-700 uppercase tracking-wider inline-flex items-center gap-1"
            >
              Contacter les documentalistes &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
