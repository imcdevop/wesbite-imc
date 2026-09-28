"use client";

import React from "react";
import Link from "next/link";
import { DOMAINS, FORMATIONS } from "@/data/catalogue";

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

export function FormationsSection() {
  return (
    <section id="formations" className="py-20 lg:py-28 bg-white border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête épuré et sobre */}
        <div className="grid grid-cols-12 gap-x-8 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-600 block mb-3 font-sans">
              7 Domaines Couverts
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Nos domaines de formation
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end mt-4 lg:mt-0">
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              44 programmes de formation certifiants spécialement conçus pour accompagner la montée en compétences des étudiants et des cadres en entreprise.
            </p>
          </div>
        </div>

        {/* Grille des 7 Domaines (Légère, claire et structurée) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {DOMAINS.map((domain) => (
            <Link
              key={domain.id}
              href={`/formations?domaine=${domain.id}`}
              className="border-2 border-slate-200 bg-white p-6 hover:border-slate-900 hover:shadow-[5px_5px_0_#004b88] transition-all duration-150 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                    Domaine
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 border border-slate-300 bg-slate-50 text-slate-800">
                    {domain.count} formation{domain.count > 1 ? "s" : ""}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-3">
                  {domain.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {domain.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-600 group-hover:text-brand-700">
                <span>Explorer le domaine</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}

          {/* 8ème carte : Accès direct à l'ensemble du catalogue */}
          <div className="border-2 border-slate-900 bg-slate-900 text-white p-6 flex flex-col justify-between shadow-[5px_5px_0_#004b88]">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-4">
                Catalogue Intégral
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Tous les Programmes
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
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

        {/* Aperçu de quelques formations phares (6 cartes compactes au lieu de 44) */}
        <div className="border-t border-slate-200 pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 font-sans">
                Aperçu Pédagogique
              </p>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Formations les plus demandées
              </h3>
            </div>
            <Link
              href="/formations"
              className="text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Rechercher dans tout le catalogue</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_HIGHLIGHTS.map((item) => (
              <Link
                key={item.slug}
                href={`/formations/${item.slug}`}
                className="border border-slate-200 bg-slate-50/50 p-5 hover:border-slate-900 hover:bg-white hover:shadow-sm transition-all group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-brand-700 uppercase tracking-wider">
                    {item.domain}
                  </span>
                  <span className="text-xs text-slate-400 font-medium group-hover:text-slate-900 transition-colors">
                    Fiche &rarr;
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500">
                  {item.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Pied de section : Bannière d'accès vers le catalogue complet */}
        <div className="mt-14 p-6 sm:p-8 border-2 border-slate-900 bg-slate-50 shadow-[6px_6px_0_#004b88] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-base font-bold text-slate-900 uppercase tracking-wide mb-1">
              Vous recherchez une formation sur-mesure ou intra-entreprise ?
            </p>
            <p className="text-xs text-slate-600">
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
