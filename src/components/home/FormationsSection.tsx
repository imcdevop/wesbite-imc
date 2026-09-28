"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DOMAINS, FORMATIONS } from "@/data/catalogue";

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export function FormationsSection() {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");

  const filteredFormations =
    selectedDomain === "all"
      ? FORMATIONS
      : FORMATIONS.filter((f) => f.domainId === selectedDomain);

  return (
    <section id="formations" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="grid grid-cols-12 gap-x-8 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-600 mb-3">
              Catalogue Officiel
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Nos formations
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end mt-4 lg:mt-0">
            <p className="text-base text-slate-600 leading-relaxed">
              7 domaines couverts et 44 formations certifiantes spécialement conçues pour les étudiants et les cadres en entreprise.
            </p>
          </div>
        </div>

        {/* Barre de filtres par domaine */}
        <div className="border-b border-slate-200 mb-10 overflow-x-auto scrollbar-none">
          <div className="flex gap-1 min-w-max pb-px">
            <button
              type="button"
              onClick={() => setSelectedDomain("all")}
              className={`relative px-5 py-3.5 text-[13px] font-medium tracking-wide uppercase transition-colors ${
                selectedDomain === "all"
                  ? "text-brand-600 font-semibold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Tous les domaines
              <span className="text-[11px] text-slate-400 ml-1.5 font-normal">
                ({FORMATIONS.length})
              </span>
              <span
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-brand-600 transition-transform origin-center ${
                  selectedDomain === "all" ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transitionDuration: "250ms" }}
              />
            </button>

            {DOMAINS.map((domain) => (
              <button
                key={domain.id}
                type="button"
                onClick={() => setSelectedDomain(domain.id)}
                className={`relative px-5 py-3.5 text-[13px] font-medium tracking-wide uppercase transition-colors ${
                  selectedDomain === domain.id
                    ? "text-brand-600 font-semibold"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {domain.name}
                <span className="text-[11px] text-slate-400 ml-1.5 font-normal">
                  ({domain.count})
                </span>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-brand-600 transition-transform origin-center ${
                    selectedDomain === domain.id ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{ transitionDuration: "250ms" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Grille des formations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFormations.map((formation) => (
            <Link
              key={formation.slug}
              href={`/formations/${formation.slug}`}
              className="group flex flex-col justify-between border border-slate-200 bg-white p-6 hover:border-brand-600 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">
                    {formation.domainName}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    N° {String(formation.id).padStart(2, "0")} • p.{formation.pageNumber}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug mb-2">
                  {formation.title}
                </h3>

                <p className="text-sm font-medium text-slate-600 mb-4 line-clamp-2">
                  {formation.subtitle}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                  {formation.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">Pour étudiants & cadres</span>
                <span className="inline-flex items-center gap-1 text-brand-600 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Détails</span>
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pied de section / Lien vers catalogue complet */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Vous recherchez une formation spécifique pour votre équipe ou votre parcours ?
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Consultez le catalogue intégral de nos 44 formations disponibles toute l'année.
            </p>
          </div>
          <Link
            href="/formations"
            className="inline-flex items-center gap-3 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Consulter le catalogue complet</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
