import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Users, Briefcase, Globe, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Alumnis & Réseau des Diplômés | IMC Alger",
  description:
    "Réseau des diplômés de l'Institut de Management et de Communication d'Alger. Opportunités de carrière, mentorat et communauté.",
};

export default function AlumnisPage() {
  const stats = [
    { value: "+3 500", label: "Diplômés en activité" },
    { value: "92%", label: "Taux d'insertion à 6 mois" },
    { value: "18", label: "Pays de présence des alumni" },
    { value: "+250", label: "Entreprises partenaires régulières" },
  ];

  const missions = [
    {
      title: "Mentorat & Parrainage",
      desc: "Accompagnement bienveillant des nouveaux étudiants par des diplômés chevronnés pour faciliter leur insertion professionnelle.",
    },
    {
      title: "Bourse d'Opportunités",
      desc: "Offres exclusives de stages de fin d'études, missions de conseil et postes à responsabilité relayées au sein du réseau.",
    },
    {
      title: "Rencontres & Conférences",
      desc: "Organisation de masterclasses annuelles, dîners débats et tables rondes sectorielles pour maintenir une dynamique d'échange continue.",
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
          <span className="text-slate-900 font-medium">Alumnis</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Communauté & Trajectoires
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Réseau des Alumnis de l'IMC
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-12">
          Le réseau des diplômés de l'IMC constitue une force vive et solidaire, rassemblant des cadres,
          entrepreneurs et experts qui font rayonner l'institut dans les secteurs les plus stratégiques.
        </p>

        {/* Chiffres clés Swiss Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-slate-200 py-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-brand-600 mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Missions du réseau */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {missions.map((m) => (
            <div key={m.title} className="border border-slate-200 p-8 bg-slate-50">
              <div className="w-8 h-1 bg-brand-600 mb-4" />
              <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
                {m.title}
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Appel à l'action Alumnis */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">
              Vous êtes diplômé de l'IMC ?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Mettez à jour vos coordonnées dans l'annuaire officiel et rejoignez le groupe fermé des anciens élèves.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 hover:bg-brand-700 transition-colors flex-shrink-0"
          >
            Rejoindre l'annuaire
          </Link>
        </div>
      </section>
    </div>
  );
}
