import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Le Conseil Scientifique | IMC Alger",
  description:
    "Membres, missions et garanties académiques du Conseil Scientifique de l'IMC Alger.",
};

export default function ConseilScientifiquePage() {
  const membres = [
    {
      nom: "Pr. Rachid Benali",
      titre: "Président du Conseil Scientifique",
      affiliation: "Professeur émérite en Sciences de Gestion",
    },
    {
      nom: "Dr. Samira Khelifi",
      titre: "Membre permanente",
      affiliation: "Directrice de recherche en Intelligence Artificielle et Systèmes d'Information",
    },
    {
      nom: "Pr. Jean-Marc Dumont",
      titre: "Membre associé international",
      affiliation: "Doyen honoraire, Faculté d'Administration des Entreprises",
    },
    {
      nom: "Dr. Karim Mansouri",
      titre: "Membre permanent",
      affiliation: "Expert comptable diplômé, Spécialiste Audit et Gouvernance",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Fil d'ariane sobre */}
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/a-propos" className="hover:text-slate-900">L'Institut</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Le conseil scientifique</span>
        </div>
      </div>

      {/* En-tete de page */}
      <section className="border-b border-slate-200 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Gouvernance Académique
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Le Conseil Scientifique
          </h1>
          <p className="font-sans text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Garant de la rigueur pédagogique et de la pertinence des programmes, le Conseil Scientifique
            de l'IMC définit les orientations pédagogiques et veille à la conformité des cursus avec les
            meilleurs standards universitaires et professionnels.
          </p>
        </div>
      </section>

      {/* Composition du conseil */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-slate-200 pb-4 mb-8">
            <h2 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              Membres du Conseil
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {membres.map((m, idx) => (
              <div key={idx} className="border border-slate-200 p-6 bg-slate-50/50">
                <div className="border-l-2 border-brand-600 pl-3 mb-2">
                  <h3 className="font-display text-lg font-bold text-slate-900">{m.nom}</h3>
                </div>
                <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-1">
                  {m.titre}
                </div>
                <div className="text-xs text-slate-600">{m.affiliation}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
