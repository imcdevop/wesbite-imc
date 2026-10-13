import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Award, CheckCircle2, Users, Target, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "IMC Executive Education | Formation Continue pour Cadres | IMC Alger",
  description:
    "Formations certifiantes pour dirigeants, séminaires exécutifs immersifs et cursus intra-entreprises sur-mesure à l'Institut de Management et de Communication d'Alger.",
};

export default function ImcExecutivePage() {
  const stats = [
    { num: "+120", label: "Grandes entreprises & groupes formés" },
    { num: "98%", label: "Taux de satisfaction des dirigeants" },
    { num: "100%", label: "Intervenants praticiens & experts seniors" },
    { num: "48h", label: "Délai moyen d'ingénierie sur-mesure" },
  ];

  const tracks = [
    {
      num: "01",
      tag: "CERTIFICATS DIRIGEANTS",
      title: "Executive Certificates & Gouvernance",
      format: "Sessions courtes intensives (3 à 5 jours) ou week-ends exécutifs",
      target: "Directeurs généraux, membres de comités de direction (COMEX), directeurs de filiales",
      shadow: "shadow-[8px_8px_0_#004b88]",
      image: "/pictures/20.webp",
      imageAlt: "Session de Haut Niveau & Tables Blanches en U avec Drapeau Officiel IMC Alger",
      modules: [
        "Leadership Stratégique & Prise de Décision en Contexte d'Incertitude",
        "Gouvernance Financière, Trésorerie & Pilotage de la Rentabilité",
        "Conduite du Changement & Transformation Numérique des Organisations",
        "Stratégie de Négociation Complexe & Diplomatie d'Affaires",
      ],
    },
    {
      num: "02",
      tag: "PROGRAMMES SUR-MESURE",
      title: "Ingénierie Intra-Entreprise & Séminaires Dédiés",
      format: "Cursus 100% sur-mesure adapté aux enjeux spécifiques de votre organisation",
      target: "Grandes entreprises publiques et privées, institutions financières et multinationales",
      shadow: "shadow-[8px_8px_0_#0f172a]",
      image: "/pictures/30.webp",
      imageAlt: "Séminaire Spécialisé - Passation des Marchés et Cahier des Charges avec expert en costume",
      modules: [
        "Audit préalable et diagnostic des compétences clés à développer",
        "Co-construction de cas métiers réels issus de l'activité de l'entreprise",
        "Accompagnement post-formation et évaluation de l'impact opérationnel (ROI)",
        "Modalités flexibles : sur votre site d'entreprise ou dans nos locaux à Alger",
      ],
    },
    {
      num: "03",
      tag: "CYCLES PROFESSIONNELS",
      title: "Cycles Métiers & Montée en Compétences",
      format: "Rythme partagé (Vendredi - Samedi sur 4 à 6 mois)",
      target: "Managers opérationnels, chefs de département et cadres en transition de carrière",
      shadow: "shadow-[8px_8px_0_#004b88]",
      image: "/pictures/29.webp",
      imageAlt: "Formation Dirigeants et Cadres Supérieurs équipés sur PC portables",
      modules: [
        "Contrôle de Gestion, Audit Interne & Pilotage Opérationnel",
        "Supply Chain Management, Achats Stratégiques & Logistique Douanière",
        "Marketing Digital B2B, Expérience Client & Communication de Crise",
        "Management des Ressources Humaines & Marque Employeur",
      ],
    },
  ];

  const galleryItems = [
    {
      src: "/pictures/30.webp",
      tag: "MARCHÉS PUBLICS & CONTRATS",
      title: "Séminaire Cahier des Charges & Droit des Marchés",
      desc: "Formation intensive animée par des experts de terrain sur la passation et la sécurisation contractuelle.",
    },
    {
      src: "/pictures/32.webp",
      tag: "DÉBAT INTERACTIF",
      title: "Échanges Stratégiques Dirigeants & Intervenants",
      desc: "Confrontation directe des réalités de gestion et partage d'expériences inter-entreprises.",
    },
    {
      src: "/pictures/2.webp",
      tag: "COMMUNICATION MANAGÉRIALE",
      title: "Atelier Assertivité & Négociation Managériale",
      desc: "Pédagogie active sur tableau interactif pour renforcer le leadership et l'impact relationnel.",
    },
    {
      src: "/pictures/18.webp",
      tag: "INFRASTRUCTURES DE HAUT NIVEAU",
      title: "Salles de Conférence & Séminaires Équipées",
      desc: "Espaces climatisés, mobilier modulable en U et technologies interactives de dernière génération.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          IMC Executive Education
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Conçus pour répondre aux défis stratégiques majeurs des organisations en Algérie, nos programmes pour cadres dirigeants allient haute exigence méthodologique, études de cas réels et applicabilité opérationnelle immédiate.
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

      {/* Formats Exécutifs */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
            Les 3 Formats Exécutifs de l'IMC
          </h2>
        </div>

        <div className="space-y-12 mb-16">
          {tracks.map((t, idx) => (
            <div
              key={idx}
              className={`border-2 border-slate-900 p-8 sm:p-10 bg-white ${t.shadow}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-200 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-head text-3xl font-bold text-brand-600">
                    {t.num}
                  </span>
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 border border-slate-900 text-slate-900">
                    {t.tag}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  {t.format}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                <div className="lg:col-span-7">
                  <h3 className="font-head text-2xl sm:text-3xl font-bold uppercase text-slate-900 mb-3 leading-snug">
                    {t.title}
                  </h3>

                  <div className="p-3 bg-slate-50 border border-slate-200">
                    <span className="font-bold text-xs font-mono text-slate-900 uppercase">Public Ciblé : </span>
                    <span className="text-xs sm:text-sm text-slate-600 font-medium">{t.target}</span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-48 w-full border-2 border-slate-900 shadow-[4px_4px_0_#0f172a] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              </div>

              <div>
                <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Modules et compétences clés :
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {t.modules.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3 bg-white border border-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Immersion & Réalité des Séminaires */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-50 border border-slate-900 text-brand-600 mb-2">
              EXPÉRIENCE EN PRÉSENTIEL
            </span>
            <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
              Immersion dans nos Séminaires Exécutifs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mt-2">
              Des sessions dynamiques animées au sein de nos salles de conférence équipées, favorisant l'analyse critique, le débat entre pairs et l'application directe sur des cas réels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, gIdx) => (
              <div
                key={gIdx}
                className="border-2 border-slate-900 bg-white shadow-[6px_6px_0_#004b88] overflow-hidden flex flex-col justify-between group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <div className="relative h-48 w-full border-b-2 border-slate-900 overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-white/95 border border-slate-900 text-slate-900 shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-head text-base font-bold uppercase text-slate-900 mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bannière Devis Entreprise Sur-Mesure */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-8 sm:p-12 shadow-[10px_10px_0_#004b88] mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              DIRECTION DU DÉVELOPPEMENT CORPORATE
            </span>
            <h3 className="font-head text-3xl sm:text-4xl font-bold uppercase text-white leading-tight mb-3">
              Un Projet de Formation pour Vos Cadres & Dirigeants ?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Nos conseillers pédagogiques et directeurs académiques interviennent à vos côtés pour bâtir une ingénierie de formation alignée sur vos priorités d'expansion, de numérisation et de performance financière.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider px-8 py-4 border-2 border-white shadow-[4px_4px_0_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>Demander une proposition sur-mesure</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Liens de bas de page */}
        <div className="pt-6 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/formations"
            className="section-link group text-sm"
          >
            <span>&larr; Consulter le catalogue des 44 formations</span>
          </Link>

          <Link
            href="/formation-continue"
            className="section-link group text-sm"
          >
            <span>Explorer la Formation Continue &rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
