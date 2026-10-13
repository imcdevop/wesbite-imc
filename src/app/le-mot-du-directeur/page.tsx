import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Le Mot du Directeur Général | IMC Alger",
  description:
    "Message de la direction générale de l'Institut de Management et de Communication d'Alger : vision stratégique, rigueur académique et engagement auprès des entreprises.",
};

export default function LeMotDuDirecteurPage() {
  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Le Mot du Directeur Général
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Former des femmes et des hommes d'action, dotés d'une rigueur analytique exemplaire et capables de transformer les organisations avec éthique, vision et agilité managériale.
        </p>
      </section>

      {/* Contenu Principal */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Texte principal (8 colonnes) */}
          <div className="lg:col-span-8 space-y-8 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
            
            {/* Citation Signature Néo-Brutaliste */}
            <div className="border-2 border-slate-900 bg-slate-900 text-white p-8 sm:p-10 shadow-[8px_8px_0_#004b88]">
              <span className="text-brand-400 font-mono font-bold text-xs uppercase tracking-widest block mb-3">
                Engagement Pédagogique
              </span>
              <p className="font-head text-2xl sm:text-3xl font-bold uppercase text-white leading-snug">
                « Notre ambition est d'offrir à chaque auditeur un enseignement fondé sur l'exigence académique, la confrontation directe aux réalités économiques et l'éthique de la décision. »
              </p>
            </div>

            <p>
              Bienvenue à l'Institut de Management et de Communication (IMC Alger). Depuis notre fondation, nous avons fait le choix inébranlable de l'excellence académique alliée à une proximité étroite avec le tissu économique national et les standards internationaux.
            </p>

            <p>
              Dans un contexte mondial et national marqué par la transformation numérique, l'intégration de l'intelligence artificielle et la recherche d'une compétitivité accrue, l'Algérie a un besoin impérieux de cadres dotés d'une vision transversale et d'une maîtrise technique immédiate. C'est la vocation fondatrice de notre institut.
            </p>

            <p>
              Nos 44 programmes professionnels certifiants sont conçus et actualisés avec des praticiens chevronnés, des directeurs d'entreprises et des universitaires de premier plan. Chaque formation intègre des études de cas réels, des simulations et des projets d'application directe pour garantir un retour sur investissement immédiat aux apprenants et aux employeurs.
            </p>

            <p>
              Choisir l'IMC, c'est rejoindre un écosystème d'apprentissage stimulant, un corps professoral d'élite et un puissant réseau d'alumni engagés dans les secteurs clés de l'économie algérienne.
            </p>

            {/* Signature officielle */}
            <div className="pt-8 border-t-2 border-slate-200 mt-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 block mb-1">
                Direction Générale
              </span>
              <div className="font-head font-bold text-2xl uppercase text-slate-900">
                Institut de Management et de Communication
              </div>
              <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">
                Campus Principal • Alger, Algérie
              </p>
            </div>
          </div>

          {/* Sidebar Néo-Brutaliste (4 colonnes) */}
          <div className="lg:col-span-4 border-2 border-slate-900 bg-white p-6 sm:p-8 shadow-[6px_6px_0_#0f172a] space-y-6">
            <div>
              <h2 className="font-head text-2xl font-bold uppercase text-slate-900 leading-tight">
                Garanties d'Excellence
              </h2>
            </div>

            <ul className="space-y-4 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Agrément officiel du Ministère de l'Enseignement Supérieur (MESRS).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Intervenants experts issus des plus grandes entreprises et cabinets.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Cursus certifiants alignés sur les besoins du marché de l'emploi.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>Accompagnement carrière et insertion professionnelle personnalisée.</span>
              </li>
            </ul>

            <div className="pt-6 border-t-2 border-slate-200">
              <Link
                href="/formations"
                className="w-full inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white font-head font-bold text-sm uppercase tracking-wider px-6 py-4 border-2 border-slate-900 shadow-[3px_3px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Explorer nos 44 formations &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* Liens de bas de page */}
        <div className="pt-12 mt-12 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/a-propos"
            className="section-link group text-sm"
          >
            <span>&larr; Retour à la présentation de l'institut</span>
          </Link>

          <Link
            href="/le-conseil-scientifique"
            className="section-link group text-sm"
          >
            <span>Découvrir le Conseil Scientifique &rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
