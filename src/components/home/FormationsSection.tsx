"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { DOMAINS } from "@/data/catalogue";

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// 6 formations clés mises en avant sur la page d'accueil (pour garder la page légère)
const FEATURED_HIGHLIGHTS = [
  { slug: "big-data-analytics", domain: "Tech", title: "Big Data & Analytics", subtitle: "Maîtriser les Données Massives" },
  { slug: "cybersecurite", domain: "Tech", title: "Cybersécurité", subtitle: "Protéger l'Entreprise à l'Ère Numérique" },
  { slug: "ia-pour-tous-appliquer", domain: "Tech", title: "L'IA pour Tous", subtitle: "Comprendre et Appliquer" },
  { slug: "marketing-digital", domain: "Marketing", title: "Marketing Digital", subtitle: "Maîtriser les Stratégies Numériques" },
  { slug: "management-de-projet", domain: "Management", title: "Management de Projet", subtitle: "De la Vision à la Réalité" },
  { slug: "audit-controle-gestion", domain: "Finance", title: "Audit & Contrôle de Gestion", subtitle: "Optimiser la Performance" },
];

const TARGET_TITLE = "Nos domaines de formation";

export function FormationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  // Révélation fluide au scroll via IntersectionObserver
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation de frappe de texte (Typewriter) fluide et dynamique style Web Rocket
  useEffect(() => {
    if (!hasStartedTyping) return;
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setTypedTitle(TARGET_TITLE.slice(0, idx));
      if (idx >= TARGET_TITLE.length) {
        clearInterval(interval);
      }
    }, 42); // 42ms par lettre : cadence vive, naturelle et charismatique

    return () => clearInterval(interval);
  }, [hasStartedTyping]);

  return (
    <section
      id="formations"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white border-b-2 border-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec tag brutaliste Web Rocket & Animation de Typing */}
        <div className={`grid grid-cols-12 gap-x-8 mb-14 rv ${isVisible ? "vis" : ""}`}>
          <div className="col-span-12 lg:col-span-7">
            <div>
              <span className="tag-wr">
                7 Domaines Couverts
              </span>
            </div>
            <h2 className="font-head text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] uppercase">
              {typedTitle || TARGET_TITLE}
              <span className="cur text-brand-600 font-mono font-bold">_</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end mt-4 lg:mt-0">
            <p className="text-base text-slate-600 leading-relaxed font-sans font-medium">
              44 programmes de formation certifiants spécialement conçus pour accompagner la montée en compétences des étudiants et des cadres en entreprise.
            </p>
          </div>
        </div>

        {/* Grille des 7 Domaines + 1 Carte Catalogue (Avec effet Hover Focus Opacity fluide & Scroll Reveal) */}
        <div
          className={`cards-focus-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 rv rv-d1 ${
            isVisible ? "vis" : ""
          }`}
        >
          {DOMAINS.map((domain, index) => (
            <Link
              key={domain.id}
              href={`/formations?domaine=${domain.id}`}
              className={`card-focus-item border-2 border-slate-200 bg-white p-6 flex flex-col justify-between group`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Domaine
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 border border-slate-300 bg-slate-50 text-slate-800 group-hover:border-brand-600 group-hover:text-brand-600 transition-colors">
                    {domain.count} formation{domain.count > 1 ? "s" : ""}
                  </span>
                </div>

                <h3 className="font-head text-2xl font-bold uppercase text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                  {domain.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                  {domain.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-600 group-hover:text-brand-700">
                <span className="font-head tracking-wider">Explorer le domaine</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
              </div>
            </Link>
          ))}

          {/* 8ème carte : Accès direct à l'ensemble du catalogue (Sombre Brutaliste) */}
          <div className="card-focus-item border-2 border-slate-900 bg-slate-900 text-white p-6 flex flex-col justify-between shadow-[5px_5px_0_#004b88]">
            <div>
              <span className="text-[11px] font-mono font-bold text-brand-400 uppercase tracking-wider block mb-4">
                Catalogue Intégral
              </span>
              <h3 className="font-head text-2xl font-bold uppercase text-white mb-2">
                Tous les Programmes
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                Accédez aux fiches détaillées, objectifs pédagogiques et calendriers de nos 44 formations.
              </p>
            </div>
            <Link
              href="/formations"
              className="btn-imc-primary w-full py-3 px-4 text-xs text-center"
            >
              <span>Voir les 44 formations</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Aperçu de quelques formations phares (6 cartes compactes avec hover opacity scroll) */}
        <div className={`border-t border-slate-200 pt-12 rv rv-d2 ${isVisible ? "vis" : ""}`}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 font-sans mb-1">
                Aperçu Pédagogique
              </p>
              <h3 className="font-head text-2xl sm:text-3xl font-bold uppercase text-slate-900">
                Formations les plus demandées
              </h3>
            </div>
            <Link
              href="/formations"
              className="text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 hidden sm:inline-flex items-center gap-1.5 font-head"
            >
              <span>Rechercher dans tout le catalogue</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="cards-focus-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_HIGHLIGHTS.map((item, idx) => (
              <Link
                key={item.slug}
                href={`/formations/${item.slug}`}
                className="card-focus-item border border-slate-200 bg-slate-50/70 p-5 hover:border-slate-900 hover:bg-white hover:shadow-[4px_4px_0_#004b88] transition-all group block"
                style={{ transitionDelay: `${idx * 30}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-brand-700 uppercase tracking-wider">
                    {item.domain}
                  </span>
                  <span className="text-xs text-slate-400 font-medium group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-200">
                    Fiche &rarr;
                  </span>
                </div>
                <h4 className="font-head text-lg font-bold uppercase text-slate-900 group-hover:text-brand-600 transition-colors mb-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-sans">
                  {item.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Pied de section : Bannière d'accès vers le catalogue complet */}
        <div
          className={`mt-14 p-6 sm:p-8 border-2 border-slate-900 bg-slate-50 shadow-[6px_6px_0_#004b88] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rv rv-d3 ${
            isVisible ? "vis" : ""
          }`}
        >
          <div>
            <p className="text-base font-bold text-slate-900 uppercase tracking-wide mb-1 font-head text-lg">
              Vous recherchez une formation sur-mesure ou intra-entreprise ?
            </p>
            <p className="text-xs text-slate-600 font-sans">
              Nos conseillers pédagogiques conçoivent des parcours modulables adaptés à vos besoins.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/formations"
              className="btn-imc-primary px-6 py-3.5 text-xs text-center"
            >
              <span>Consulter le catalogue (44)</span>
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="btn-imc-secondary px-6 py-3.5 text-xs text-center"
            >
              <span>Nous contacter</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
