"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DOMAINS, FORMATIONS } from "@/data/catalogue";

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
    <section id="formations" className="py-20 lg:py-28 bg-white border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="grid grid-cols-12 gap-x-8 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-block px-3 py-1 mb-3 border-2 border-slate-900 bg-brand-50 text-brand-800 text-[11px] font-bold tracking-[0.2em] uppercase">
              Catalogue Officiel IMC
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Nos formations<span className="text-brand-600 cur font-mono font-bold">_</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end mt-4 lg:mt-0">
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              7 domaines couverts et 44 programmes de formation certifiants spécialement conçus pour les étudiants et les cadres en entreprise.
            </p>
          </div>
        </div>

        {/* Rail de filtres par domaine (Style Web Rocket Néo-Brutaliste adapté IMC) */}
        <div className="mb-10 overflow-x-auto scrollbar-none pb-2">
          <div className="flex gap-2 min-w-max">
            <button
              type="button"
              onClick={() => setSelectedDomain("all")}
              className={`pill-rail-item ${selectedDomain === "all" ? "active" : ""}`}
            >
              <span>Tous les domaines</span>
              <span className="pill-badge">{FORMATIONS.length}</span>
            </button>

            {DOMAINS.map((domain) => (
              <button
                key={domain.id}
                type="button"
                onClick={() => setSelectedDomain(domain.id)}
                className={`pill-rail-item ${selectedDomain === domain.id ? "active" : ""}`}
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: domain.color }}
                />
                <span>{domain.name}</span>
                <span className="pill-badge">{domain.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille des formations néo-brutalistes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFormations.map((formation) => (
            <Link
              key={formation.slug}
              href={`/formations/${formation.slug}`}
              className="card-brutal-imc group flex flex-col justify-between p-7 text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 border border-slate-900 bg-slate-100 text-slate-900">
                    {formation.domainName}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    N° {String(formation.id).padStart(2, "0")} • p.{formation.pageNumber}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug mb-2">
                  {formation.title}
                </h3>

                <p className="text-sm font-semibold text-slate-700 mb-4 line-clamp-2">
                  {formation.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {formation.description}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Étudiants & Cadres
                </span>
                <span className="inline-flex items-center gap-1.5 text-brand-600 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Détails</span>
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pied de section / Lien vers catalogue complet */}
        <div className="mt-14 p-8 border-2 border-slate-900 bg-slate-50 shadow-[6px_6px_0_#004b88] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-brand-600"></span>
              <p className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Catalogue Intégral 2026
              </p>
            </div>
            <p className="text-sm text-slate-600">
              Retrouvez l'ensemble des 44 programmes détaillés avec modules et inscriptions.
            </p>
          </div>
          <Link
            href="/formations"
            className="btn-imc-primary px-7 py-4 text-xs shrink-0"
          >
            <span>Consulter le catalogue complet</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
