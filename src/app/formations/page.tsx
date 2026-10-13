"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, ArrowRight, Users, Building2 } from "lucide-react";
import { DOMAINS, FORMATIONS } from "@/data/catalogue";

function FormationsContent() {
  const searchParams = useSearchParams();
  const initialDomain = searchParams.get("domaine") || "all";

  const [selectedDomain, setSelectedDomain] = useState<string>(initialDomain);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFormations = useMemo(() => {
    return FORMATIONS.filter((item) => {
      const matchDomain = selectedDomain === "all" || item.domainId === selectedDomain;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.domainName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchDomain && matchSearch;
    });
  }, [selectedDomain, searchQuery]);

  // The flagship hero item for the current selection
  const heroFormation = filteredFormations.length > 0 ? filteredFormations[0] : null;
  // The rest of formations
  const regularFormations = filteredFormations.length > 1 ? filteredFormations.slice(1) : [];

  return (
    <div className="w-full bg-white text-slate-900">
      
      {/* 1. EN-TÊTE ÉPURÉ & PRESTIGIEUX */}
      <section className="py-12 sm:py-16 border-b-2 border-slate-900 bg-[#f0f7fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.02] mb-3">
                Catalogue des Formations
              </h1>
              <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                44 formations certifiantes dispensées par l&apos;IMC à Alger. Des cursus d&apos;excellence conçus pour les <strong>étudiants</strong> et les <strong>cadres d&apos;entreprise</strong>, répartis en 7 pôles d&apos;expertise sectorielle.
              </p>
            </div>

            {/* Repères institutionnels compacts */}
            <div className="flex items-center gap-4 sm:gap-6 border-2 border-slate-900 bg-white px-5 py-3.5 shadow-[4px_4px_0_#004b88] shrink-0">
              <div className="text-center pr-4 sm:pr-6 border-r border-slate-200">
                <span className="block font-head text-2xl sm:text-3xl font-bold text-slate-900 leading-none">44</span>
                <span className="font-mono text-[10px] uppercase text-slate-500 font-bold">Programmes</span>
              </div>
              <div className="text-center pr-4 sm:pr-6 border-r border-slate-200">
                <span className="block font-head text-2xl sm:text-3xl font-bold text-slate-900 leading-none">7</span>
                <span className="font-mono text-[10px] uppercase text-slate-500 font-bold">Domaines</span>
              </div>
              <div className="text-center">
                <span className="block font-head text-2xl sm:text-3xl font-bold text-brand-600 leading-none">MESRS</span>
                <span className="font-mono text-[10px] uppercase text-slate-500 font-bold">Agrément d&apos;État</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BARRE D'ACTION UNIFIÉE (RECHERCHE + FILTRES PAR DOMAINE) */}
      <section className="border-b-2 border-slate-900 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Recherche textuelle */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une formation (ex: Big Data, IA, Audit, RH)..."
                className="w-full pl-10 pr-4 py-2 text-sm border-2 border-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600 transition-colors"
              />
            </div>

            {/* Compteur & Réinitialisation */}
            <div className="flex items-center justify-between md:justify-end gap-3 text-xs font-mono font-bold">
              <span className="text-slate-600">
                {filteredFormations.length} {filteredFormations.length > 1 ? "formations trouvées" : "formation trouvée"}
              </span>
              {(selectedDomain !== "all" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDomain("all");
                    setSearchQuery("");
                  }}
                  className="text-brand-600 hover:text-brand-700 underline font-bold uppercase tracking-wider text-[11px]"
                >
                  Réinitialiser &times;
                </button>
              )}
            </div>

          </div>

          {/* Onglets / Pills par Domaine */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3 pb-1 mt-1 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setSelectedDomain("all")}
              className={`px-3.5 py-1.5 text-xs font-head font-bold uppercase tracking-wider border transition-all shrink-0 ${
                selectedDomain === "all"
                  ? "bg-slate-900 text-white border-slate-900 shadow-[2px_2px_0_#004b88]"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-900 hover:bg-white"
              }`}
            >
              Tous (44)
            </button>
            {DOMAINS.map((dom) => {
              const active = selectedDomain === dom.id;
              return (
                <button
                  key={dom.id}
                  type="button"
                  onClick={() => setSelectedDomain(dom.id)}
                  className={`px-3.5 py-1.5 text-xs font-head font-bold uppercase tracking-wider border transition-all shrink-0 ${
                    active
                      ? "bg-slate-900 text-white border-slate-900 shadow-[2px_2px_0_#004b88]"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-900 hover:bg-white"
                  }`}
                >
                  {dom.name} ({dom.count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID ARCHITECTURE STRUCTURÉE */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredFormations.length === 0 ? (
          <div className="text-center py-20 bg-[#f0f7fc] border-2 border-slate-900 p-8 shadow-[6px_6px_0_#004b88]">
            <p className="font-head text-2xl font-bold uppercase text-slate-900 mb-2">
              Aucun résultat pour &quot;{searchQuery}&quot;
            </p>
            <p className="text-sm text-slate-600 mb-6 font-medium">
              Vérifiez l&apos;orthographe ou parcourez nos 7 domaines d&apos;expertise.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedDomain("all");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-head font-bold uppercase text-xs tracking-wider px-6 py-3 border-2 border-slate-900 shadow-[3px_3px_0_#004b88] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              Voir tout le catalogue (44 formations)
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* A. BENTO SHOWCASE (DUO HERO ÉQUILIBRÉ SANS VIDE) */}
            {heroFormation && !searchQuery && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Carte 1 : Programme Signature Phare (8 colonnes) */}
                <Link
                  href={`/formations/${heroFormation.slug}`}
                  className="lg:col-span-8 border-2 border-slate-900 bg-[#f0f7fc] p-7 sm:p-9 shadow-[6px_6px_0_#004b88] hover:shadow-[9px_9px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-900/15">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 border border-slate-900 bg-slate-900 text-white">
                          {heroFormation.domainName}
                        </span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-white border border-brand-200 px-2 py-0.5">
                          Programme Phare
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        N° {String(heroFormation.id).padStart(2, "0")} • Catalogue P.{heroFormation.pageNumber}
                      </span>
                    </div>

                    <h2 className="font-head text-2xl sm:text-4xl font-bold uppercase text-slate-900 group-hover:text-brand-600 transition-colors leading-[1.08] mb-2 tracking-wide">
                      {heroFormation.title}
                    </h2>

                    <p className="text-sm sm:text-base font-semibold text-brand-700 mb-3">
                      {heroFormation.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6 line-clamp-3">
                      {heroFormation.description}
                    </p>

                    {heroFormation.modules && heroFormation.modules.length > 0 && (
                      <div className="pt-4 border-t border-slate-900/15 mb-4">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                          Points Clés & Compétences du Programme :
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {heroFormation.modules.slice(0, 4).map((mod, i) => (
                            <div key={i} className="text-xs text-slate-700 flex items-center gap-2 font-medium">
                              <span className="w-1.5 h-1.5 bg-brand-600 shrink-0" />
                              <span className="truncate">{mod}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-900/15 flex items-center justify-between text-xs font-mono font-bold">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      <span>{heroFormation.targetAudience}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-slate-900 text-white font-head uppercase tracking-wider text-xs px-4 py-2 group-hover:bg-brand-600 transition-colors">
                      <span>Consulter la fiche complète</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>

                {/* Carte 2 : Pôle Entreprises & Conventions Intra (4 colonnes - Équilibrée, zéro vide) */}
                <div className="lg:col-span-4 border-2 border-slate-900 bg-slate-900 text-white p-7 sm:p-8 shadow-[6px_6px_0_#004b88] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                        Relations Entreprises
                      </span>
                      <Building2 className="w-4 h-4 text-sky-400" />
                    </div>

                    <h3 className="font-head text-2xl font-bold uppercase text-white mb-2 leading-tight">
                      Formations Sur-Mesure
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-sky-200 mb-3">
                      Pour vos équipes & cadres en Algérie
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                      Tous les programmes du catalogue sont déclinables en formule <strong>intra-entreprise</strong>, directement dans vos locaux ou sur notre campus d&apos;Alger.
                    </p>

                    <div className="p-3.5 bg-white/10 border border-white/15 mb-6 text-xs text-slate-200 space-y-1.5 font-mono">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>Calendrier adapté à vos contraintes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>Cas concrets sectoriels sur-mesure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>Convention officielle agréée</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full text-center py-3 px-4 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider border-2 border-white/20 hover:border-white transition-all flex items-center justify-center gap-2"
                  >
                    <span>Demander une convention</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            )}

            {/* B. GRILLE STRUCTURÉE DU CATALOGUE (3 COLONNES PARFAITEMENT ALIGNÉES) */}
            <div>
              {heroFormation && !searchQuery && (
                <div className="flex items-center justify-between mb-5 pt-4">
                  <h3 className="font-head text-xl font-bold uppercase tracking-wider text-slate-900">
                    Tous les programmes {selectedDomain !== "all" ? `(${DOMAINS.find(d => d.id === selectedDomain)?.name})` : "du catalogue"}
                  </h3>
                  <span className="font-mono text-xs text-slate-500 font-bold">
                    Affichage par fiche certifiante
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {(searchQuery ? filteredFormations : regularFormations).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/formations/${item.slug}`}
                    className="border-2 border-slate-900 bg-white p-6 shadow-[4px_4px_0_#004b88] hover:shadow-[7px_7px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* En-tête de fiche */}
                      <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-slate-100">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border border-slate-200 bg-slate-50 text-slate-800">
                          {item.domainName}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          N° {String(item.id).padStart(2, "0")} • P.{item.pageNumber}
                        </span>
                      </div>

                      {/* Titre */}
                      <h4 className="font-head text-xl font-bold uppercase text-slate-900 group-hover:text-brand-600 transition-colors leading-snug mb-1.5 tracking-wide line-clamp-2">
                        {item.title}
                      </h4>

                      {/* Sous-titre */}
                      <p className="text-xs font-semibold text-brand-700 mb-2.5 line-clamp-1">
                        {item.subtitle}
                      </p>

                      {/* Description courte */}
                      <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-3 mb-5">
                        {item.description}
                      </p>
                    </div>

                    {/* Pied de fiche avec alignement parfait */}
                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span className="truncate max-w-[140px]">{item.targetAudience}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-900 group-hover:text-brand-600 font-head uppercase tracking-wider text-xs transition-colors shrink-0">
                        <span>Fiche</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                  </Link>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 4. BANNIÈRE ACCOMPAGNEMENT & CONVENTIONS DRH */}
        <div className="mt-16 sm:mt-20 border-2 border-slate-900 bg-white p-8 sm:p-10 shadow-[6px_6px_0_#004b88]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-600 block mb-2">
                Pôle Formation Continue & Entreprises
              </span>
              <h2 className="font-head text-2xl sm:text-3xl font-bold uppercase text-slate-900 mb-3 tracking-tight">
                Déployez ces formations au sein de vos équipes
              </h2>
              <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-2xl">
                Chacun des 44 programmes du catalogue est déclinable en formule intra-entreprise dans vos locaux à travers l&apos;Algérie, avec aménagement calendaire et cas d&apos;application sur-mesure.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/contact"
                className="w-full text-center py-3.5 px-6 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider border-2 border-slate-900 shadow-[3px_3px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Demander une convention entreprise &rarr;
              </Link>
              <Link
                href="/a-propos"
                className="w-full text-center py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-900 font-head font-bold uppercase text-xs tracking-wider border-2 border-slate-900 transition-all"
              >
                En savoir plus sur l&apos;Institut
              </Link>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}

export default function FormationsIndexPage() {
  return (
    <Suspense fallback={<div className="w-full py-20 text-center text-sm text-slate-500 font-mono">Chargement du catalogue des formations...</div>}>
      <FormationsContent />
    </Suspense>
  );
}
