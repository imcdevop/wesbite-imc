import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Award, Building2, Users, BookOpen, CheckCircle2, ShieldCheck, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos de l'IMC | Institut de Management et de Communication Alger",
  description:
    "Présentation institutionnelle de l'IMC Alger, établissement d'enseignement supérieur agréé MESRS : histoire, gouvernance, valeurs et engagement d'excellence.",
};

const ArrowIcon = () => (
  <svg className="w-4 h-4 arrow inline-block transition-transform duration-200" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export default function AProposPage() {
  const fondations = [
    {
      id: "agrement",
      num: "01",
      tag: "AGRÉMENT D'ÉTAT",
      subtags: ["MESRS ALGÉRIE", "CONTRÔLE STATUTAIRE", "DIPLÔMES HOMOLOGUÉS"],
      title: "Rigueur Académique & Agrément MESRS",
      desc: "Établissement d'enseignement supérieur agréé par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique. Tous nos cursus répondent aux normes pédagogiques les plus strictes pour garantir une valeur académique officielle.",
      theme: "card-white",
      image: "/pictures/IMG_7242.webp",
      urlPath: "imc-alger.com/institut/agrement-mesrs",
      highlights: [
        "Programmes certifiants contrôlés par le Conseil Scientifique",
        "Conformité réglementaire avec les cahiers des charges officiels",
        "Corps professoral d'élite associant docteurs d'État et praticiens",
      ],
      link: "/le-conseil-scientifique",
      linkText: "DÉCOUVRIR LE CONSEIL SCIENTIFIQUE",
    },
    {
      id: "insertion",
      num: "02",
      tag: "INSERTION PRO",
      subtags: ["44 FORMATIONS", "CAS D'ENTREPRISES RÉELS", "DIRECTEURS EN EXERCICE"],
      title: "Orientation Entreprise & Pratique Immédiate",
      desc: "Plus de 44 programmes conçus en synergie avec les leaders économiques algériens. Des cas réels d'entreprises analysés, des simulations stratégiques et un apprentissage pragmatique orienté vers l'employabilité immédiate.",
      theme: "card-blue",
      image: "/pictures/IMG_8190.webp",
      urlPath: "imc-alger.com/institut/partenariats-entreprises",
      highlights: [
        "92% de taux d'insertion professionnelle à 6 mois",
        "Études de cas réels co-construites avec les DRH partenaires",
        "Modules actualisés selon les évolutions du marché économique",
      ],
      link: "/le-conseil-dorientation",
      linkText: "CONSULTER LE CONSEIL D'ORIENTATION",
    },
    {
      id: "innovation",
      num: "03",
      tag: "INNOVATION & TECH",
      subtags: ["COLLOQUES INTERNATIONAUX", "REVUE DE RECHERCHE", "INCUBATEUR IMC-START"],
      title: "Pôle Recherche & Transformation Digitale",
      desc: "Colloques scientifiques internationaux réguliers, revue de management indexée à comité de lecture et incubateur IMC-Start dédié à l'émergence des jeunes talents et startups innovantes.",
      theme: "card-ice",
      image: "/pictures/IMG_7066.webp",
      urlPath: "imc-alger.com/recherche/innovation-lab",
      highlights: [
        "Colloques académiques annuels et actes scientifiques indexés",
        "Revue de Management de l'IMC en accès libre académique",
        "Incubation de projets d'entreprises via le hub IMC-Start",
      ],
      link: "/recherche",
      linkText: "EXPLORER LE PÔLE RECHERCHE",
    },
    {
      id: "alumni",
      num: "04",
      tag: "RÉSEAU ALUMNI",
      subtags: ["+3 500 DIPLÔMÉS", "18 PAYS", "CERCLE DE DIRIGEANTS"],
      title: "Un Réseau Puissant de Décideurs",
      desc: "Des milliers de lauréats en poste dans les plus grands groupes publics, filiales multinationales et banques d'Algérie et à l'international. Un puissant tremplin de carrière, de mentorat et d'opportunités.",
      theme: "card-navy",
      image: "/pictures/IMG_7565.webp",
      urlPath: "imc-alger.com/institut/communaute-alumni",
      highlights: [
        "Réseau actif de +3 500 cadres supérieurs et directeurs",
        "Mentorat individualisé et bourse exclusive d'opportunités",
        "Rencontres sectorielles et masterclasses de haut niveau",
      ],
      link: "/alumnis",
      linkText: "REJOINDRE LE RÉSEAU ALUMNI",
    },
  ];

  const stats = [
    { num: "+15", label: "Années d'excellence académique" },
    { num: "44", label: "Programmes professionnels certifiants" },
    { num: "7", label: "Domaines d'expertise spécialisés" },
    { num: "92%", label: "Taux d'insertion professionnelle à 6 mois" },
  ];

  return (
    <div className="w-full bg-white">
      {/* En-tête éditorial */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-slate-900">
        <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-4">
          Institut de Management et de Communication
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Fondé à Alger pour répondre aux besoins d'encadrement stratégique et de transformation digitale du tissu économique, l'IMC est un centre d'enseignement supérieur d'élite conjuguant exigence académique et employabilité immédiate.
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

      {/* Piliers & Mission en Cartes Empilées au Scroll */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-head text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
            Les 4 Fondations de l'IMC Alger
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base mt-3 font-medium">
            Découvrez les piliers structurels qui garantissent l'indépendance, la conformité académique et l'impact direct de l'institut sur le monde économique.
          </p>
        </div>

        {/* PILE DE CARTES EMPILÉES AU SCROLL (STYLE HOME PAGE) */}
        <div className="cases-stack mb-20">
          {fondations.map((f, index) => {
            const stickyTop = `calc(var(--nav-h, 108px) + ${36 + index * 14}px)`;

            return (
              <div
                key={f.id}
                className={`stack-card ${f.theme}`}
                style={{
                  top: stickyTop,
                  zIndex: index + 10,
                }}
              >
                {/* COLONNE GAUCHE : INFOS DE LA FONDATION */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Tags encadrés style Web Rocket */}
                    <div className="case-tags">
                      {f.subtags.map((sub, sIdx) => (
                        <span key={sIdx}>{sub}</span>
                      ))}
                    </div>

                    {/* Titre de la fondation */}
                    <h3 className="font-head text-3xl sm:text-4xl lg:text-[2.6rem] font-bold uppercase leading-[1.05] mb-4">
                      {f.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base leading-relaxed mb-6 font-medium">
                      {f.desc}
                    </p>

                    {/* Points clés */}
                    <div className="space-y-1.5 mb-6">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider opacity-60 block">
                        Garanties & Réalisations :
                      </span>
                      <ul className="text-xs sm:text-sm font-medium space-y-1.5 opacity-90">
                        {f.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0"></span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Lien de redirection vers la page dédiée */}
                  <div>
                    <Link
                      href={f.link}
                      className="case-link group"
                    >
                      <span>{f.linkText}</span>
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>

                {/* COLONNE DROITE : CADRE NAVIGATEUR STYLE WEB ROCKET */}
                <div className="w-full">
                  <div className="browser-frame">
                    <div className="browser-bar">
                      <i></i>
                      <i></i>
                      <i></i>
                      <span className="text-[11px] font-mono ml-2 truncate opacity-80">
                        https://{f.urlPath}
                      </span>
                    </div>

                    <div className="relative aspect-[16/10.5] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Espaces Pédagogiques & Vie au Centre */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-50 border border-slate-900 text-brand-600 mb-2">
              CADRE D'APPRENTISSAGE PRIVILÉGIÉ
            </span>
            <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 tracking-tight leading-tight">
              Nos Espaces d'Apprentissage & Infrastructures
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mt-2">
              L'IMC met à la disposition de ses auditeurs et étudiants des salles de formation climatisées équipées d'écrans tactiles, des espaces de coworking confortables et des lieux conviviaux d'échange.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-2 border-slate-900 bg-white shadow-[6px_6px_0_#004b88] overflow-hidden group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              <div className="relative h-48 w-full border-b-2 border-slate-900 bg-slate-100 overflow-hidden">
                <Image
                  src="/pictures/18.webp"
                  alt="Salles de séminaire prêtes à l'accueil"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-white/95 border border-slate-900 text-slate-900">
                  INFRASTRUCTURES
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-head text-base font-bold uppercase text-slate-900 mb-1">
                  Salles de Séminaire en U
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Agencement ergonomique, écrans interactifs et dossiers personnalisés préparés pour chaque session.
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-900 bg-white shadow-[6px_6px_0_#004b88] overflow-hidden group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              <div className="relative h-48 w-full border-b-2 border-slate-900 bg-slate-100 overflow-hidden">
                <Image
                  src="/pictures/25.webp"
                  alt="Espace Innovation Management Center"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-white/95 border border-slate-900 text-slate-900">
                  MARQUE IMC
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-head text-base font-bold uppercase text-slate-900 mb-1">
                  Hub d'Innovation & Management
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Un environnement professionnel dédié à la créativité et à l'accélération des compétences.
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-900 bg-white shadow-[6px_6px_0_#004b88] overflow-hidden group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              <div className="relative h-48 w-full border-b-2 border-slate-900 bg-slate-100 overflow-hidden">
                <Image
                  src="/pictures/7.webp"
                  alt="Corps professoral et intervenants HEC Alger"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-white/95 border border-slate-900 text-slate-900">
                  CORPS PROFESSORAL
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-head text-base font-bold uppercase text-slate-900 mb-1">
                  Experts & Formateurs Référents
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Intervenants chevronnés associant rigueur méthodologique et expertise de pointe du terrain.
                </p>
              </div>
            </div>

            <div className="border-2 border-slate-900 bg-white shadow-[6px_6px_0_#004b88] overflow-hidden group hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
              <div className="relative h-48 w-full border-b-2 border-slate-900 bg-slate-100 overflow-hidden">
                <Image
                  src="/pictures/5.webp"
                  alt="Pause-café et convivialité entre participants"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-white/95 border border-slate-900 text-slate-900">
                  CONVIVIALITÉ
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-head text-base font-bold uppercase text-slate-900 mb-1">
                  Networking & Échanges
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Des moments de partage et de convivialité favorisant les synergies durables entre promotions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation vers la gouvernance & entités */}
        <div className="border-2 border-slate-900 bg-slate-900 text-white p-8 sm:p-12 shadow-[10px_10px_0_#004b88] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-500 text-white mb-3">
              Gouvernance & Transparence
            </span>
            <h3 className="font-head text-3xl sm:text-4xl font-bold uppercase text-white leading-tight mb-3">
              Une direction collégiale et un conseil scientifique d'excellence
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Pour assurer l'indépendance de ses évaluations et la pertinence continue de son offre de formation, l'IMC s'appuie sur des instances statutaires composées d'éminents universitaires et d'experts industriels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/le-mot-du-directeur"
              className="p-4 bg-white/10 hover:bg-brand-600 border-2 border-white/20 hover:border-white transition-all text-white font-head font-bold uppercase text-sm flex items-center justify-between"
            >
              <span>Le Mot du Directeur</span>
              <span>&rarr;</span>
            </Link>

            <Link
              href="/le-conseil-scientifique"
              className="p-4 bg-white/10 hover:bg-brand-600 border-2 border-white/20 hover:border-white transition-all text-white font-head font-bold uppercase text-sm flex items-center justify-between"
            >
              <span>Conseil Scientifique</span>
              <span>&rarr;</span>
            </Link>

            <Link
              href="/vision-missions-valeurs"
              className="p-4 bg-white/10 hover:bg-brand-600 border-2 border-white/20 hover:border-white transition-all text-white font-head font-bold uppercase text-sm flex items-center justify-between"
            >
              <span>Vision & Valeurs</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Liens rapides de découverte */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t-2 border-slate-200">
          <Link
            href="/formations"
            className="section-link group text-sm"
          >
            <span>Consulter les 44 formations de l'institut</span>
            <span className="arrow ml-1 inline-block">&rarr;</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider px-6 py-3 border-2 border-slate-900 shadow-[3px_3px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>Prendre contact avec l'institut</span>
            <span>&rarr;</span>
          </Link>
        </div>

      </section>
    </div>
  );
}
