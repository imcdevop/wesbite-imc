"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const ArrowIcon = () => (
  <svg className="w-4 h-4 arrow inline-block transition-transform duration-200" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

interface StackDomainData {
  id: string;
  name: string;
  count: number;
  tags: string[];
  title: string;
  description: string;
  theme: "card-white" | "card-yellow" | "card-gray" | "card-black";
  image: string;
  urlPath: string;
  highlights: string[];
}

const DOMAINS_STACK: StackDomainData[] = [
  {
    id: "tech",
    name: "Tech & IA",
    count: 12,
    tags: ["12 FORMATIONS", "BIG DATA & ANALYTICS", "CYBERSÉCURITÉ", "IA GÉNÉRATIVE"],
    title: "TECH & INTELLIGENCE ARTIFICIELLE",
    description: "Formez-vous aux compétences les plus recherchées du marché : analyse de données massives, architectures Cloud, sécurisation des réseaux d'entreprise et intégration opérationnelle de l'intelligence artificielle.",
    theme: "card-white",
    image: "/domains/tech.jpg",
    urlPath: "imc-alger.com/formations/tech",
    highlights: ["Big Data & Analytics", "Cybersécurité Offensive & Défensive", "L'IA pour Tous : Comprendre & Appliquer"],
  },
  {
    id: "marketing",
    name: "Marketing",
    count: 9,
    tags: ["9 FORMATIONS", "GROWTH MARKETING", "COMMUNICATION DIGITALE", "SOCIAL SELLING"],
    title: "MARKETING DIGITAL & MARQUE",
    description: "Concevez des stratégies d'acquisition percutantes, maîtrisez le référencement naturel, la gestion des campagnes publicitaires et développez l'autorité digitale de votre marque avec un impact mesurable.",
    theme: "card-yellow",
    image: "/domains/marketing.jpg",
    urlPath: "imc-alger.com/formations/marketing",
    highlights: ["Marketing Digital Avancé", "Stratégies de Marque & Notoriété", "Vente & Négociation B2B"],
  },
  {
    id: "management",
    name: "Management",
    count: 7,
    tags: ["7 FORMATIONS", "MÉTHODES AGILES / SCRUM", "LEADERSHIP", "STRATÉGIE"],
    title: "MANAGEMENT & GESTION DE PROJET",
    description: "Pilotez vos équipes avec méthode et vision. Des méthodologies agiles aux techniques de prise de décision, apprenez à mener des projets complexes et à mobiliser l'intelligence collective.",
    theme: "card-gray",
    image: "/domains/management.jpg",
    urlPath: "imc-alger.com/formations/management",
    highlights: ["Management de Projet Certifiant", "Leadership & Dynamique d'Équipe", "Conduite du Changement"],
  },
  {
    id: "finance",
    name: "Finance",
    count: 8,
    tags: ["8 FORMATIONS", "AUDIT FINANCIER", "CONTRÔLE DE GESTION", "INGÉNIERIE"],
    title: "FINANCE, AUDIT & CONTRÔLE DE GESTION",
    description: "Éclairez la gouvernance d'entreprise par la maîtrise des chiffres. Analyse des coûts, tableaux de bord prévisionnels, ingénierie financière et audit réglementaire pour garantir la rentabilité durable.",
    theme: "card-black",
    image: "/domains/finance.jpg",
    urlPath: "imc-alger.com/formations/finance",
    highlights: ["Contrôle de Gestion & Performance", "Audit Financier & Comptable", "Business Plan & Modélisation"],
  },
  {
    id: "supply-chain",
    name: "Supply Chain",
    count: 4,
    tags: ["4 FORMATIONS", "GESTION DES FLUX", "OPTIMISATION DES STOCKS", "ACHATS"],
    title: "SUPPLY CHAIN & LOGISTIQUE",
    description: "Optimisez la chaîne de valeur du fournisseur au client final. Maîtrisez la gestion des entrepôts, la réduction des délais logistiques et le sourcing stratégique sur les marchés locaux et internationaux.",
    theme: "card-white",
    image: "/domains/supply-chain.jpg",
    urlPath: "imc-alger.com/formations/supply-chain",
    highlights: ["Management de la Supply Chain", "Gestion des Stocks & Entrepôts", "Achats & Approvisionnements"],
  },
  {
    id: "rh",
    name: "Ressources Humaines",
    count: 2,
    tags: ["2 FORMATIONS", "GESTION DES TALENTS", "NÉGOCIATION RAISONNÉE", "RÉSOLUTION CONFLITS"],
    title: "RESSOURCES HUMAINES & NÉGOCIATION",
    description: "Mobilisez le potentiel humain et renforcez la cohésion sociale de votre organisation. Méthodes de recrutement prédictif, gestion des carrières et techniques éprouvées de négociation raisonnée.",
    theme: "card-yellow",
    image: "/domains/rh.jpg",
    urlPath: "imc-alger.com/formations/rh",
    highlights: ["Gestion Prévisionnelle des Emplois (GPEC)", "Négociation & Gestion Collaborative des Conflits"],
  },
  {
    id: "droit",
    name: "Droit des Affaires",
    count: 1,
    tags: ["FORMATION INTENSIVE", "CADRE JURIDIQUE", "CONTRATS COMMERCIAUX", "CONFORMITÉ ALGERIE"],
    title: "DROIT DES AFFAIRES & CONFORMITÉ",
    description: "Sécurisez juridiquement vos transactions et vos partenariats d'affaires. Comprenez l'environnement juridique algérien, prévenez les contentieux et maîtrisez la rédaction contractuelle.",
    theme: "card-black",
    image: "/domains/droit.jpg",
    urlPath: "imc-alger.com/formations/droit",
    highlights: ["Droit des Affaires & Pratique Contractuelle", "Veille Réglementaire & Sécurisation Juridique"],
  },
];

const TARGET_TITLE = "Nos domaines de formation";

export function FormationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  // Révélation au scroll via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasStartedTyping(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation de frappe de texte (Typewriter) style Web Rocket
  useEffect(() => {
    if (!hasStartedTyping) return;
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setTypedTitle(TARGET_TITLE.slice(0, idx));
      if (idx >= TARGET_TITLE.length) {
        clearInterval(interval);
      }
    }, 38);

    return () => clearInterval(interval);
  }, [hasStartedTyping]);

  return (
    <section
      id="formations"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white border-b-2 border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête style Web Rocket avec tag brutaliste & bouton à droite */}
        <div className={`section-header flex items-end justify-between gap-6 mb-16 flex-wrap rv ${isVisible ? "vis" : ""}`}>
          <div>
            <span className="tag-wr">
              7 DOMAINES D&apos;EXCELLENCE
            </span>
            <h2 className="font-head text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] uppercase">
              {typedTitle || TARGET_TITLE}
              <span className="cur text-brand-600 font-mono font-bold">_</span>
            </h2>
            <p className="text-slate-600 max-w-xl text-sm sm:text-base mt-3 font-medium">
              44 programmes professionnels certifiants conçus avec rigueur académique pour accompagner la montée en compétences des étudiants et cadres d&apos;entreprise.
            </p>
          </div>
          <div>
            <Link
              href="/formations"
              className="section-link group text-sm sm:text-base"
            >
              <span>LES 44 FORMATIONS DU CATALOGUE</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* PILE DE CARTES EMPILÉES AU SCROLL (STYLE RÉALISATIONS WEB ROCKET) */}
        <div className="cases-stack mb-20">
          {DOMAINS_STACK.map((domain, index) => {
            // Décalage progressif de sticky top (ex: 88px, 104px, 120px...)
            const stickyTop = `calc(var(--nav-h, 72px) + ${16 + index * 16}px)`;

            return (
              <div
                key={domain.id}
                className={`stack-card ${domain.theme}`}
                style={{
                  top: stickyTop,
                  zIndex: index + 10,
                }}
              >
                {/* COLONNE GAUCHE : INFOS DU DOMAINE */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Tags encadrés style Web Rocket */}
                    <div className="case-tags">
                      {domain.tags.map((tag, tIdx) => (
                        <span key={tIdx}>{tag}</span>
                      ))}
                    </div>

                    {/* Titre du domaine */}
                    <h3 className="font-head text-3xl sm:text-4xl lg:text-[2.75rem] font-bold uppercase leading-[1.04] mb-4">
                      {domain.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base leading-relaxed mb-6 font-medium">
                      {domain.description}
                    </p>

                    {/* Points clés / Formations phares du domaine */}
                    <div className="space-y-1.5 mb-6">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider opacity-60 block">
                        Exemples de programmes :
                      </span>
                      <ul className="text-xs sm:text-sm font-medium space-y-1 opacity-90">
                        {domain.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Lien de redirection */}
                  <div>
                    <Link
                      href={`/formations?domaine=${domain.id}`}
                      className="case-link group"
                    >
                      <span>EXPLORER CE DOMAINE ({domain.count})</span>
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>

                {/* COLONNE DROITE : CADRE NAVIGATEUR STYLE WEB ROCKET */}
                <div className="w-full">
                  <div className="browser-frame">
                    {/* Barre de navigation du faux navigateur */}
                    <div className="browser-bar">
                      <i></i>
                      <i></i>
                      <i></i>
                      <span className="text-[11px] font-mono text-slate-500 ml-2 truncate opacity-80">
                        https://{domain.urlPath}
                      </span>
                    </div>

                    {/* Image / Visuel du domaine */}
                    <div className="relative aspect-[16/10.5] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={domain.image}
                        alt={domain.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PIED DE SECTION : BANNIÈRE D'ACCÈS AU CATALOGUE & FORMATION SUR-MESURE */}
        <div
          className={`p-6 sm:p-10 border-2 border-slate-900 bg-slate-900 text-white shadow-[10px_10px_0_#ffc700] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rv rv-d2 ${
            isVisible ? "vis" : ""
          }`}
        >
          <div>
            <span className="inline-block px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-[#ffc700] text-slate-900 border border-black mb-3">
              Besoin intra-entreprise
            </span>
            <h3 className="font-head text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white leading-tight mb-2">
              Vous recherchez une formation sur-mesure pour vos collaborateurs ?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl font-sans">
              Nos consultants pédagogiques adaptent les modules du catalogue à vos contraintes sectorielles et organisent des sessions intra-entreprises à Alger ou sur vos sites.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto flex-shrink-0">
            <Link
              href="/formations"
              className="inline-flex items-center justify-center gap-2 bg-[#ffc700] hover:bg-yellow-400 text-slate-950 font-head font-bold uppercase text-sm px-6 py-4 border-2 border-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#ffffff]"
            >
              <span>Consulter le catalogue (44)</span>
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-head font-bold uppercase text-sm px-6 py-4 border-2 border-white transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <span>Demander un devis / convention</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
