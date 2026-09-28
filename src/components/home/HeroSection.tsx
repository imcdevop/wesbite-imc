import React from "react";
import Link from "next/link";
import { ArrowDownRight, BookOpen, GraduationCap, Users, Award, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        {/* Grille principale asymetrique */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Colonne gauche (7 colonnes) : Titrage et positionnement institutionnel */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Kicker institutionnel */}
              <div className="inline-flex items-center gap-2 border border-slate-300 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-slate-700 uppercase bg-slate-50">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                <span>Enseignement Supérieur et Formation Professionnelle</span>
              </div>

              {/* Titre principal */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
                L'Excellence Managériale et Technologique au Service des Décideurs.
              </h1>

              {/* Paragraphe de synthese clinique */}
              <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Filiale de référence de l'enseignement supérieur en Algérie, l'IMC prépare les cadres,
                dirigeants et experts opérationnels à travers des cursus certifiants, licences et masters
                spécialisés axés sur les exigences réelles du marché économique national et international.
              </p>

              {/* Actions primaires */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="#formations"
                  className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3.5 transition-colors border border-brand-700"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Consulter les Cursus 2026-2027</span>
                  <ArrowDownRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#candidature"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm px-6 py-3.5 transition-colors border border-slate-300"
                >
                  <span>Dossier d'Admission</span>
                </Link>
              </div>
            </div>

            {/* Note de conformite reglementaire */}
            <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-4">
              <span>Programmes homologués</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>Modalités initiales et exécutives</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span>Réseau partenaires actifs</span>
            </div>
          </div>

          {/* Colonne droite (5 colonnes) : Grille d'impact et indicateurs cles */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 sm:p-8">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Indicateurs Institutionnels
              </h2>
            </div>

            {/* Grille metrique a forte densite (Swiss Design Table) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-5">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-600 tracking-tight mb-1">
                  3 000+
                </div>
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1">
                  Diplômés
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  Cadres et dirigeants formés depuis la création
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-600 tracking-tight mb-1">
                  87%
                </div>
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1">
                  Insertion
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  Recrutement actif sous six mois après diplomation
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-600 tracking-tight mb-1">
                  21
                </div>
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1">
                  Programmes
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  Licences, masters et certificats exécutifs
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-600 tracking-tight mb-1">
                  16
                </div>
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1">
                  Partenaires
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  Universités internationales et groupes industriels
                </div>
              </div>
            </div>

            {/* Encadre institutionnel d'orientation rapide */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Campus Principal</span>
                <span>Ouled Fayet, Alger</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 mt-2">
                <span className="font-semibold text-slate-900">Sessions Actives</span>
                <span className="text-emerald-700 font-medium">Inscriptions Ouvertes 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
