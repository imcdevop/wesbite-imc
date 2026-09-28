import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Partenaires Internationaux | IMC Alger",
  description: "Accords universitaires et alliances académiques internationales de l'IMC Alger.",
};

export default function PartenairesPage() {
  const partenaires = [
    { nom: "Établissements Universitaires Européens", desc: "Double diplomations, échanges professoraux et mobilités académiques." },
    { nom: "Centres de Recherche en Management", desc: "Co-publications scientifiques, séminaires doctoraux et colloques conjoints." },
    { nom: "Groupes Industriels Multinationaux", desc: "Chaires d'entreprises, stages d'immersion et insertion professionnelle des lauréats." },
  ];

  return (
    <div className="w-full bg-white">
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Nos partenaires internationaux</span>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Rayonnement International
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Nos Partenaires Internationaux
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
          L'IMC collabore étroitement avec des universités et des institutions de premier rang mondial
          afin de favoriser le transfert de savoirs, la recherche appliquée et l'ouverture internationale de ses apprenants.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partenaires.map((p, idx) => (
            <div key={idx} className="border border-slate-200 p-6 bg-slate-50/50">
              <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{p.nom}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
